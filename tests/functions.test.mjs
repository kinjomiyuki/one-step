import test, { beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import checkout from '../netlify/functions/checkout.mjs';
import entitlement from '../netlify/functions/entitlement.mjs';
import portal from '../netlify/functions/portal.mjs';
import loginLink from '../netlify/functions/login-link.mjs';
import chat from '../netlify/functions/chat.mjs';
import config from '../netlify/functions/config.mjs';
import { createToken, verifyToken } from '../netlify/lib/token.mjs';

const ENV = {
  STRIPE_SECRET_KEY: 'sk_test_dummy',
  STRIPE_PRICE_ID: 'price_123',
  ENTITLEMENT_SECRET: 'z'.repeat(40),
  PREMIUM_ENABLED: 'true',
  ANTHROPIC_API_KEY: 'dummy',
  RESEND_API_KEY: 'resend_dummy',
  MAIL_FROM: 'OneStep <noreply@example.com>'
};
const BASE = 'https://one-step.example';
const calls = [];
let routes = [];
let savedEnv;
const realFetch = globalThis.fetch;

// URL の一部に一致した最初の模擬応答を返す(順番に登録した、最初に合うもの)
const reply = (match, body, status = 200) => routes.push({ match, body, status });

beforeEach(() => {
  savedEnv = { ...process.env };
  Object.assign(process.env, ENV);
  delete process.env.SITE_URL;
  calls.length = 0;
  routes = [];
  globalThis.fetch = async (url, init = {}) => {
    calls.push({ url: String(url), init });
    const route = routes.find((r) => String(url).includes(r.match));
    if (!route) throw new Error(`模擬されていない呼び出し: ${url}`);
    return new Response(JSON.stringify(route.body), { status: route.status });
  };
});

afterEach(() => {
  globalThis.fetch = realFetch;
  process.env = savedEnv;
});

const post = (path, body, headers = {}) =>
  new Request(`${BASE}/.netlify/functions/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body ?? {})
  });
const accessToken = (customerId = 'cus_1', ttlSeconds = 3600) =>
  createToken({ type: 'a', customerId, ttlSeconds }).token;

test('checkout: 月額サブスクの購入画面を作り、成功と取り消しの戻り先を指定する', async () => {
  reply('/checkout/sessions', { url: 'https://checkout.stripe.com/c/pay/abc' });
  const res = await checkout(post('checkout'));
  assert.equal(res.status, 200);
  assert.equal((await res.json()).url, 'https://checkout.stripe.com/c/pay/abc');

  const body = new URLSearchParams(calls[0].init.body);
  assert.equal(body.get('mode'), 'subscription');
  assert.equal(body.get('line_items[0][price]'), 'price_123');
  assert.equal(body.get('success_url'), `${BASE}/?checkout=success&session_id={CHECKOUT_SESSION_ID}`);
  assert.equal(body.get('cancel_url'), `${BASE}/?checkout=cancel`);
  assert.equal(calls[0].init.headers.Authorization, 'Bearer sk_test_dummy');
});

test('checkout: 価格 ID が未設定ならエラー、POST 以外は受け付けない', async () => {
  delete process.env.STRIPE_PRICE_ID;
  assert.equal((await checkout(post('checkout'))).status, 500);
  assert.equal((await checkout(new Request(`${BASE}/x`))).status, 405);
});

test('entitlement: 購入直後のセッションが有効なら、利用トークンを返す', async () => {
  reply('/checkout/sessions/cs_1', { status: 'complete', customer: 'cus_1', subscription: { status: 'active' } });
  reply('/subscriptions', { data: [{ status: 'active' }] });
  const res = await entitlement(post('entitlement', { sessionId: 'cs_1' }));
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.active, true);
  assert.equal(verifyToken(data.token, { type: 'a' }).c, 'cus_1');
});

test('entitlement: 支払いが完了していない、またはサブスクが無効なら、402 を返す', async () => {
  reply('/checkout/sessions/cs_open', { status: 'open', customer: null, subscription: null });
  assert.equal((await entitlement(post('entitlement', { sessionId: 'cs_open' }))).status, 402);

  routes = [];
  reply('/subscriptions', { data: [{ status: 'canceled' }] });
  assert.equal((await entitlement(post('entitlement', { token: accessToken() }))).status, 402);
});

test('entitlement: 手持ちのトークンの更新と、ログイン用トークンの交換ができる', async () => {
  reply('/subscriptions', { data: [{ status: 'trialing' }] });
  const refreshed = await (await entitlement(post('entitlement', { token: accessToken() }))).json();
  assert.equal(refreshed.active, true);

  const loginToken = createToken({ type: 'l', customerId: 'cus_2', ttlSeconds: 600 }).token;
  const exchanged = await (await entitlement(post('entitlement', { loginToken }))).json();
  assert.equal(verifyToken(exchanged.token, { type: 'a' }).c, 'cus_2');
});

test('entitlement: ログイン用トークンを利用トークンとして、また改ざんしたものは、受け付けない', async () => {
  reply('/subscriptions', { data: [{ status: 'active' }] });
  const loginToken = createToken({ type: 'l', customerId: 'cus_1', ttlSeconds: 600 }).token;
  assert.equal((await entitlement(post('entitlement', { token: loginToken }))).status, 402);
  assert.equal((await entitlement(post('entitlement', { token: `${accessToken()}x` }))).status, 402);
  assert.equal((await entitlement(post('entitlement', {}))).status, 402);
});

test('portal: 利用トークンがなければ 401、あれば契約の管理画面の URL を返す', async () => {
  assert.equal((await portal(post('portal'))).status, 401);

  reply('/billing_portal/sessions', { url: 'https://billing.stripe.com/p/session/x' });
  const res = await portal(post('portal', {}, { Authorization: `Bearer ${accessToken('cus_9')}` }));
  assert.equal((await res.json()).url, 'https://billing.stripe.com/p/session/x');
  assert.equal(new URLSearchParams(calls[0].init.body).get('customer'), 'cus_9');
});

test('login-link: 有効なサブスクがあるメールアドレスにだけ、ログイン用リンクを送る', async () => {
  reply('/customers', { data: [{ id: 'cus_7' }] });
  reply('/subscriptions', { data: [{ status: 'active' }] });
  reply('api.resend.com/emails', { id: 'mail_1' });

  const res = await loginLink(post('login-link', { email: 'buyer@example.com' }));
  assert.deepEqual(await res.json(), { ok: true });

  const mail = JSON.parse(calls.find((c) => c.url.includes('resend')).init.body);
  assert.equal(mail.to, 'buyer@example.com');
  const token = new URL(mail.text.match(/https:\/\/\S+/)[0]).searchParams.get('login');
  assert.equal(verifyToken(token, { type: 'l' }).c, 'cus_7');
});

test('login-link: 未登録のメールアドレスでも、同じ応答を返し、メールは送らない', async () => {
  reply('/customers', { data: [] });
  const res = await loginLink(post('login-link', { email: 'nobody@example.com' }));
  assert.deepEqual(await res.json(), { ok: true });
  assert.equal(calls.some((c) => c.url.includes('resend')), false);
});

test('login-link: メールの設定がないと 503、形式が違うと 400', async () => {
  assert.equal((await loginLink(post('login-link', { email: 'not-an-email' }))).status, 400);
  delete process.env.RESEND_API_KEY;
  assert.equal((await loginLink(post('login-link', { email: 'a@example.com' }))).status, 503);
});

test('chat: プレミアムでなければ 402、トークンがあれば AI の回答を返す', async () => {
  const noToken = await chat(post('chat', { messages: [{ role: 'user', content: 'Promise とは？' }] }));
  assert.equal(noToken.status, 402);
  assert.equal((await noToken.json()).code, 'pro_required');

  reply('api.anthropic.com', { content: [{ type: 'text', text: '非同期処理の結果を表すオブジェクトです。' }] });
  const ok = await chat(
    post('chat', { messages: [{ role: 'user', content: 'Promise とは？' }] }, { Authorization: `Bearer ${accessToken()}` })
  );
  assert.equal(ok.status, 200);
  assert.match((await ok.json()).reply, /非同期処理/);
});

test('config: 有料プランのスイッチが、true のときだけ、有効と答える', async () => {
  assert.deepEqual(await (await config(new Request(`${BASE}/x`))).json(), { premium: true });
  process.env.PREMIUM_ENABLED = 'false';
  assert.deepEqual(await (await config(new Request(`${BASE}/x`))).json(), { premium: false });
  delete process.env.PREMIUM_ENABLED;
  assert.deepEqual(await (await config(new Request(`${BASE}/x`))).json(), { premium: false });
});

test('chat: 有料プランが無効のあいだは、トークンなしでも、AI の回答を返す', async () => {
  process.env.PREMIUM_ENABLED = 'false';
  delete process.env.ENTITLEMENT_SECRET; // 有料プランの準備が、まだなくても動く
  reply('api.anthropic.com', { content: [{ type: 'text', text: 'こんにちは' }] });
  const res = await chat(post('chat', { messages: [{ role: 'user', content: 'こんにちは' }] }));
  assert.equal(res.status, 200);
  assert.equal((await res.json()).reply, 'こんにちは');
});

test('chat: 費用を抑えるため、考える量を最小にし、履歴と回答の長さを制限して送る', async () => {
  reply('api.anthropic.com', { content: [{ type: 'text', text: 'こたえ' }], stop_reason: 'end_turn' });
  const history = Array.from({ length: 10 }, (_, i) => ({
    role: i % 2 === 0 ? 'user' : 'assistant',
    content: `${i}${'あ'.repeat(i % 2 === 0 ? 1500 : 800)}`
  }));
  history.push({ role: 'user', content: '最新の質問' });
  const res = await chat(post('chat', { messages: history }, { Authorization: `Bearer ${accessToken()}` }));
  assert.equal(res.status, 200);

  const sent = JSON.parse(calls.find((c) => c.url.includes('anthropic')).init.body);
  assert.deepEqual(sent.output_config, { effort: 'low' });
  assert.equal(sent.max_tokens, 600);
  assert.ok(sent.messages.length <= 6, `履歴が長すぎます: ${sent.messages.length}件`);
  assert.equal(sent.messages[0].role, 'user');
  assert.equal(sent.messages.at(-1).content, '最新の質問');
  for (const m of sent.messages) {
    assert.ok(m.content.length <= (m.role === 'user' ? 1000 : 400), `長すぎる発言: ${m.role} ${m.content.length}字`);
  }
});

test('chat: 回答が上限で途切れたときは、続きを促す一文を添える', async () => {
  reply('api.anthropic.com', { content: [{ type: 'text', text: 'ここまで' }], stop_reason: 'max_tokens' });
  const res = await chat(
    post('chat', { messages: [{ role: 'user', content: '長く説明して' }] }, { Authorization: `Bearer ${accessToken()}` })
  );
  const { reply: text } = await res.json();
  assert.ok(text.startsWith('ここまで'));
  assert.match(text, /続けて/);
});

test('chat: ANTHROPIC_EFFORT を空にすると、effort を送らない(対応していない古いモデル向け)', async () => {
  process.env.ANTHROPIC_EFFORT = '';
  // 環境変数は読み込み時に決まるため、新しく読み込み直して確かめる
  const { default: freshChat } = await import(`../netlify/functions/chat.mjs?effort-off=${Date.now()}`);
  reply('api.anthropic.com', { content: [{ type: 'text', text: 'こたえ' }] });
  await freshChat(
    post('chat', { messages: [{ role: 'user', content: '質問' }] }, { Authorization: `Bearer ${accessToken()}` })
  );
  const sent = JSON.parse(calls.find((c) => c.url.includes('anthropic')).init.body);
  assert.equal('output_config' in sent, false);
});
