import test from 'node:test';
import assert from 'node:assert/strict';
import { checkSetup, describeAccount, REQUIRED_ENV } from '../scripts/check-setup.mjs';
import { webhookUrl } from '../scripts/setup-stripe.mjs';

const KEY = 'sk_test_dummy';
const fakeApi = (routes) => async (method, path) => {
  const handler = routes[`${method} ${path}`];
  if (!handler) throw new Error('見つかりません');
  return typeof handler === 'function' ? handler() : handler;
};
const all = {
  'GET /account': { id: 'acct_1', charges_enabled: true, payouts_enabled: true, details_submitted: true, requirements: { currently_due: [] } },
  'GET /prices': { data: [{ id: 'price_1', unit_amount: 980 }] },
  'GET /billing_portal/configurations': { data: [{ id: 'bpc_1' }] },
  'GET /webhook_endpoints': { data: [{ id: 'we_1', url: webhookUrl({}), status: 'enabled', enabled_events: ['a', 'b'] }] }
};

test('checkSetup: すべてそろっていれば、要対応がない。鍵は出力に出さない', async () => {
  const lines = await checkSetup({ env: { STRIPE_SECRET_KEY: KEY }, api: fakeApi(all), envNames: () => [...REQUIRED_ENV, 'PREMIUM_ENABLED'] });
  const text = lines.join('\n');
  assert.equal(text.includes('要対応'), false);
  assert.equal(text.includes(KEY), false);
  assert.match(text, /price_1/);
  assert.match(text, /we_1/);
});

test('checkSetup: 足りないものを、具体的に示す', async () => {
  const api = fakeApi({ 'GET /prices': { data: [] }, 'GET /billing_portal/configurations': { data: [] }, 'GET /webhook_endpoints': { data: [] } });
  const lines = await checkSetup({ env: { STRIPE_SECRET_KEY: KEY }, api, envNames: () => ['STRIPE_SECRET_KEY'] });
  const text = lines.join('\n');
  assert.match(text, /価格がありません/);
  assert.match(text, /カスタマーポータルがありません/);
  assert.match(text, /Webhook の受け取り口がありません/);
  assert.match(text, /STRIPE_WEBHOOK_SECRET/);
  assert.match(text, /PREMIUM_ENABLED が未登録/);
});

test('checkSetup: 鍵がなければエラー。Netlify を読めなくても、ほかの結果は出す', async () => {
  await assert.rejects(checkSetup({ env: {}, api: fakeApi(all) }), /STRIPE_SECRET_KEY/);
  const lines = await checkSetup({
    env: { STRIPE_SECRET_KEY: KEY },
    api: fakeApi(all),
    envNames: () => { throw new Error('not logged in'); }
  });
  assert.match(lines.join('\n'), /netlify login/);
  assert.match(lines.join('\n'), /price_1/);
});

test('checkSetup --checkout: 購入画面を作れたかを示し、失敗したときは Stripe の返事を出す', async () => {
  const base = { env: { STRIPE_SECRET_KEY: KEY }, api: fakeApi(all), envNames: () => [...REQUIRED_ENV, 'PREMIUM_ENABLED'], checkout: true };

  const okLines = await checkSetup({ ...base, createCheckout: async (args) => ({ id: 'cs_1', url: 'u', priceId: args.priceId }) });
  assert.match(okLines.join('\n'), /購入画面を作れました\(cs_1/);

  const ngLines = await checkSetup({ ...base, createCheckout: async () => { throw new Error('No such price: price_x'); } });
  const text = ngLines.join('\n');
  assert.match(text, /購入画面を作れませんでした/);
  assert.match(text, /No such price/);
  assert.equal(text.includes(KEY), false);

  let called = false;
  await checkSetup({ ...base, checkout: false, createCheckout: async () => { called = true; return {}; } });
  assert.equal(called, false);
});

test('describeAccount: 課金できないときは、原因と、足りない項目を出す。できるときは、要対応を出さない', () => {
  const blocked = describeAccount({
    id: 'acct_1',
    charges_enabled: false,
    payouts_enabled: false,
    details_submitted: true,
    requirements: {
      disabled_reason: 'requirements.past_due',
      current_deadline: 1792399264,
      currently_due: ['external_account', 'individual.verification.document', 'something.new'],
      past_due: ['external_account'],
      eventually_due: []
    }
  }).join('\n');
  assert.match(blocked, /要対応/);
  assert.match(blocked, /受け付けられません/);
  assert.match(blocked, /requirements\.past_due/);
  assert.match(blocked, /入金先の銀行口座/);
  assert.match(blocked, /本人確認の書類/);
  assert.match(blocked, /something\.new/);
  assert.match(blocked, /2026-10-19/);

  const fine = describeAccount({ charges_enabled: true, payouts_enabled: true, details_submitted: true, requirements: { currently_due: [] } }).join('\n');
  assert.equal(fine.includes('要対応'), false);
  assert.match(fine, /受け付けられます/);
});

test('checkSetup: アカウントの状態を、結果に含める', async () => {
  const api = fakeApi({ ...all, 'GET /account': { id: 'acct_1', charges_enabled: false, requirements: { currently_due: ['external_account'] } } });
  const lines = await checkSetup({ env: { STRIPE_SECRET_KEY: KEY }, api, envNames: () => [...REQUIRED_ENV, 'PREMIUM_ENABLED'] });
  assert.match(lines.join('\n'), /入金先の銀行口座/);
});

test('describeAccount: 機能の状態(card_payments など)と、国・事業の種類を出す', () => {
  const text = describeAccount({
    charges_enabled: false,
    payouts_enabled: true,
    details_submitted: true,
    country: 'JP',
    business_type: 'individual',
    default_currency: 'jpy',
    capabilities: { card_payments: 'pending', transfers: 'active' },
    requirements: { currently_due: [] }
  }).join('\n');
  assert.match(text, /card_payments=pending/);
  assert.match(text, /transfers=active/);
  assert.match(text, /国: JP/);
  assert.match(text, /事業の種類: individual/);
});
