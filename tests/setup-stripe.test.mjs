import test from 'node:test';
import assert from 'node:assert/strict';
import { run, ensurePrice, ensurePortal, PRICE_LOOKUP_KEY, NETLIFY_SITE_ID } from '../scripts/setup-stripe.mjs';

// Stripe の呼び出しを記録し、決めた応答を返す、模擬の API
function fakeApi(routes) {
  const calls = [];
  const api = async (method, path, params) => {
    calls.push({ method, path, params });
    const handler = routes[`${method} ${path}`] || routes[`${method} ${path.replace(/\/[^/]+$/, '/:id')}`];
    if (!handler) throw new Error(`模擬されていない呼び出し: ${method} ${path}`);
    return typeof handler === 'function' ? handler(params) : handler;
  };
  return { api, calls };
}

const KEY = 'sk_test_dummy';
const silent = () => {};

test('ensurePrice: なければ、商品と月額 980 円の価格を作る', async () => {
  const { api, calls } = fakeApi({
    'GET /prices': { data: [] },
    'POST /products': { id: 'prod_1' },
    'POST /prices': (p) => ({ id: 'price_1', unit_amount: p.unit_amount })
  });
  const { price, created } = await ensurePrice(api);
  assert.equal(created, true);
  assert.equal(price.id, 'price_1');
  const priceCall = calls.find((c) => c.path === '/prices' && c.method === 'POST').params;
  assert.deepEqual(
    { product: priceCall.product, currency: priceCall.currency, amount: priceCall.unit_amount, interval: priceCall.recurring.interval, key: priceCall.lookup_key },
    { product: 'prod_1', currency: 'jpy', amount: 980, interval: 'month', key: PRICE_LOOKUP_KEY }
  );
});

test('ensurePrice: すでにあれば、作らずに再利用する(何度実行しても同じ結果)', async () => {
  const { api, calls } = fakeApi({ 'GET /prices': { data: [{ id: 'price_existing', unit_amount: 980 }] } });
  const { price, created } = await ensurePrice(api);
  assert.equal(created, false);
  assert.equal(price.id, 'price_existing');
  assert.equal(calls.some((c) => c.method === 'POST'), false);
});

test('ensurePortal: 既定の設定があれば更新し、なければ作る。どちらも、解約を許可する', async () => {
  const update = fakeApi({ 'GET /billing_portal/configurations': { data: [{ id: 'bpc_1' }] }, 'POST /billing_portal/configurations/:id': {} });
  assert.deepEqual(await ensurePortal(update.api), { id: 'bpc_1', created: false });
  const sent = update.calls.find((c) => c.method === 'POST').params.features;
  assert.equal(sent.subscription_cancel.enabled, true);
  assert.equal(sent.subscription_cancel.mode, 'at_period_end');

  const create = fakeApi({ 'GET /billing_portal/configurations': { data: [] }, 'POST /billing_portal/configurations': { id: 'bpc_2' } });
  assert.deepEqual(await ensurePortal(create.api), { id: 'bpc_2', created: true });
  assert.equal(create.calls.find((c) => c.method === 'POST').params.features.subscription_cancel.enabled, true);
});

test('run: 鍵がない、形式が違う、本番の鍵に --live がない、のいずれも拒否する', async () => {
  await assert.rejects(run({ env: {}, argv: [], log: silent }), /STRIPE_SECRET_KEY/);
  await assert.rejects(run({ env: { STRIPE_SECRET_KEY: 'abc' }, argv: [], log: silent }), /STRIPE_SECRET_KEY/);
  await assert.rejects(run({ env: { STRIPE_SECRET_KEY: 'sk_live_x' }, argv: [], log: silent }), /--live/);
  await assert.rejects(run({ env: { STRIPE_SECRET_KEY: 'rk_live_x' }, argv: [], log: silent }), /--live/);
});

test('run --netlify --entitlement: 鍵と価格 ID と ENTITLEMENT_SECRET を登録し、鍵や秘密の値を、出力に出さない', async () => {
  const { api } = fakeApi({
    'GET /prices': { data: [{ id: 'price_9', unit_amount: 980 }] },
    'GET /billing_portal/configurations': { data: [{ id: 'bpc_9' }] },
    'POST /billing_portal/configurations/:id': {}
  });
  const sets = [];
  const lines = [];
  const result = await run({
    env: { STRIPE_SECRET_KEY: KEY },
    argv: ['--netlify', '--entitlement'],
    log: (l) => lines.push(l),
    api,
    setEnv: (name, value, opts) => sets.push({ name, value, secret: opts.secret })
  });
  assert.deepEqual(result, { priceId: 'price_9', portalId: 'bpc_9' });
  assert.deepEqual(sets.map((s) => [s.name, s.secret]), [['STRIPE_SECRET_KEY', true], ['STRIPE_PRICE_ID', false], ['ENTITLEMENT_SECRET', true]]);
  assert.equal(sets[0].value, KEY);
  assert.equal(sets[1].value, 'price_9');
  assert.match(sets[2].value, /^[0-9a-f]{64}$/);
  const output = lines.join('\n');
  assert.equal(output.includes(KEY), false);
  assert.equal(output.includes(sets[2].value), false);
});

test('run: --netlify を付けなければ、Netlify には何も登録しない', async () => {
  const { api } = fakeApi({
    'GET /prices': { data: [{ id: 'price_9', unit_amount: 980 }] },
    'GET /billing_portal/configurations': { data: [{ id: 'bpc_9' }] },
    'POST /billing_portal/configurations/:id': {}
  });
  let called = false;
  await run({ env: { STRIPE_SECRET_KEY: KEY }, argv: [], log: silent, api, setEnv: () => { called = true; } });
  assert.equal(called, false);
});

test('登録先の Netlify のサイトは、one-step-programing に固定されている', () => {
  assert.equal(NETLIFY_SITE_ID, 'df24e90d-11bc-4e4b-89ea-fda4734d1db4');
});
