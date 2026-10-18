import test, { beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import webhook, { WEBHOOK_EVENTS } from '../netlify/functions/stripe-webhook.mjs';
import chat from '../netlify/functions/chat.mjs';
import entitlement from '../netlify/functions/entitlement.mjs';
import { verifyWebhook, TOLERANCE_SECONDS } from '../netlify/lib/webhook.mjs';
import { setStoreFactory, isRevoked, setMembershipActive } from '../netlify/lib/membership.mjs';
import { createToken } from '../netlify/lib/token.mjs';

const SECRET = 'whsec_test';
const ENV = {
  STRIPE_SECRET_KEY: 'sk_test_dummy',
  STRIPE_WEBHOOK_SECRET: SECRET,
  ENTITLEMENT_SECRET: 'z'.repeat(40),
  PREMIUM_ENABLED: 'true',
  CHAT_DAILY_BUDGET_YEN: 'off',
  ANTHROPIC_API_KEY: 'dummy'
};
const BASE = 'https://one-step.example';

let saved;
let storeError;
let subscriptions; // Stripe に返す、顧客の購読
let anthropicCalls;
let savedEnv;
const realFetch = globalThis.fetch;

setStoreFactory(async () => ({
  get: async (key) => {
    if (storeError) throw storeError;
    return saved.has(key) ? JSON.parse(saved.get(key)) : null;
  },
  setJSON: async (key, value) => {
    if (storeError) throw storeError;
    saved.set(key, JSON.stringify(value));
  }
}));

beforeEach(() => {
  savedEnv = { ...process.env };
  Object.assign(process.env, ENV);
  saved = new Map();
  storeError = null;
  subscriptions = [];
  anthropicCalls = 0;
  globalThis.fetch = async (url) => {
    if (String(url).includes('/v1/subscriptions')) {
      return new Response(JSON.stringify({ data: subscriptions }), { status: 200 });
    }
    if (String(url).includes('api.anthropic.com')) {
      anthropicCalls += 1;
      return new Response(JSON.stringify({ content: [{ type: 'text', text: 'こたえ' }] }), { status: 200 });
    }
    throw new Error(`模擬されていない呼び出し: ${url}`);
  };
});

afterEach(() => {
  globalThis.fetch = realFetch;
  process.env = savedEnv;
});

const sign = (body, { secret = SECRET, t = Math.floor(Date.now() / 1000) } = {}) =>
  `t=${t},v1=${createHmac('sha256', secret).update(`${t}.${body}`).digest('hex')}`;

const eventBody = (type, customer = 'cus_1') => JSON.stringify({ id: 'evt_1', type, data: { object: { customer } } });

const send = (body, signature) =>
  webhook(new Request(`${BASE}/.netlify/functions/stripe-webhook`, {
    method: 'POST',
    headers: signature === undefined ? {} : { 'Stripe-Signature': signature },
    body
  }));

test('verifyWebhook: 正しい署名だけを通し、改ざん・古い通知・別のシークレットは断る', () => {
  const body = '{"a":1}';
  const now = Date.now();
  const t = Math.floor(now / 1000);
  assert.equal(verifyWebhook(body, sign(body, { t }), SECRET, now), true);
  assert.equal(verifyWebhook(`${body} `, sign(body, { t }), SECRET, now), false);
  assert.equal(verifyWebhook(body, sign(body, { t, secret: 'whsec_other' }), SECRET, now), false);
  assert.equal(verifyWebhook(body, sign(body, { t: t - TOLERANCE_SECONDS - 10 }), SECRET, now), false);
  assert.equal(verifyWebhook(body, 'garbage', SECRET, now), false);
  assert.equal(verifyWebhook(body, undefined, SECRET, now), false);
  assert.equal(verifyWebhook(body, sign(body, { t }), '', now), false);
});

test('webhook: 署名が正しくなければ 400、シークレット未設定なら 500、POST 以外は 405', async () => {
  const body = eventBody('customer.subscription.deleted');
  assert.equal((await send(body, 'bad')).status, 400);
  assert.equal((await send(body)).status, 400);
  delete process.env.STRIPE_WEBHOOK_SECRET;
  assert.equal((await send(body, sign(body))).status, 500);
  assert.equal((await webhook(new Request(`${BASE}/x`))).status, 405);
  assert.equal(saved.size, 0);
});

test('webhook: 解約(有効な購読がなくなった)で、顧客を失効として記録する', async () => {
  subscriptions = [{ status: 'canceled' }];
  const body = eventBody('customer.subscription.deleted');
  assert.equal((await send(body, sign(body))).status, 200);
  assert.equal(await isRevoked('cus_1'), true);
});

test('webhook: ほかに有効な購読があれば、失効にしない。再契約で、失効を解く', async () => {
  subscriptions = [{ status: 'canceled' }, { status: 'active' }];
  const deleted = eventBody('customer.subscription.deleted');
  assert.equal((await send(deleted, sign(deleted))).status, 200);
  assert.equal(await isRevoked('cus_1'), false);

  await setMembershipActive('cus_1', false);
  const created = eventBody('customer.subscription.created');
  assert.equal((await send(created, sign(created))).status, 200);
  assert.equal(await isRevoked('cus_1'), false);
});

test('webhook: 関係のない通知は、何も記録せずに 200 を返す', async () => {
  const body = eventBody('charge.succeeded');
  assert.equal((await send(body, sign(body))).status, 200);
  assert.equal(saved.size, 0);
  assert.ok(WEBHOOK_EVENTS.every((type) => type.startsWith('customer.subscription.')));
});

test('webhook: 保存に失敗したら 500 を返す(Stripe に再送してもらう)', async () => {
  subscriptions = [];
  storeError = new Error('blobs down');
  const body = eventBody('customer.subscription.deleted');
  assert.equal((await send(body, sign(body))).status, 500);
});

const chatRequest = (token) =>
  chat(new Request(`${BASE}/.netlify/functions/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ messages: [{ role: 'user', content: 'こんにちは' }] })
  }));
const accessToken = (customerId = 'cus_1') => createToken({ type: 'a', customerId, ttlSeconds: 3600 }).token;

test('chat: 失効した顧客は、トークンの期限内でも 402。ほかの顧客は、使える', async () => {
  await setMembershipActive('cus_1', false);
  const revoked = await chatRequest(accessToken('cus_1'));
  assert.equal(revoked.status, 402);
  assert.equal((await revoked.json()).code, 'pro_required');
  assert.equal(anthropicCalls, 0);

  assert.equal((await chatRequest(accessToken('cus_2'))).status, 200);
});

test('chat: 失効の記録を読めなくても、支払い中の人を締め出さない', async () => {
  storeError = new Error('blobs down');
  assert.equal((await chatRequest(accessToken())).status, 200);
});

test('entitlement: 再契約したのに失効の記録が残っていれば、確認のついでに直す', async () => {
  subscriptions = [{ status: 'active' }];
  await setMembershipActive('cus_1', false);
  const res = await entitlement(new Request(`${BASE}/.netlify/functions/entitlement`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: accessToken('cus_1') })
  }));
  assert.equal(res.status, 200);
  assert.equal(await isRevoked('cus_1'), false);
});
