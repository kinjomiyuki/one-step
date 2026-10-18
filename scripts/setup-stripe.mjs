// Stripe の商品・価格・カスタマーポータルを作り、Netlify の環境変数に登録する。
// 何度実行しても、同じ結果になる(すでにあるものは、再利用する)。
//
// 使い方(プロジェクトのフォルダで。鍵は、この画面に入力するだけで、ファイルには残らない):
//   PowerShell:  $env:STRIPE_SECRET_KEY = "sk_test_..."
//                node scripts/setup-stripe.mjs --netlify
//
// オプション:
//   --netlify      STRIPE_SECRET_KEY と STRIPE_PRICE_ID を、Netlify に secret として登録する(鍵は表示しない)
//   --entitlement  ENTITLEMENT_SECRET を新しく作り、Netlify に登録する。初回だけ使う(やり直すと、購入者のトークンが無効になる)
//   --live         本番の鍵(sk_live_...)を使うことを許可する。付けないと、本番の鍵は拒否する
import { execFileSync } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { request } from '../netlify/lib/stripe.mjs';

// 登録先の Netlify のサイト(one-step-programing)。別のサイトに連携されたフォルダで実行しても、ここにだけ登録する
export const NETLIFY_SITE_ID = process.env.NETLIFY_SITE_ID || 'df24e90d-11bc-4e4b-89ea-fda4734d1db4';

export const PRICE_LOOKUP_KEY = 'onestep_premium_monthly';
export const PRICE_YEN = 980; // 日本円は、小数のない通貨なので、980 がそのまま 980 円

// 解約を許可し、解約は、お支払い済みの期間の終わりに有効にする
const PORTAL_FEATURES = {
  customer_update: { enabled: true, allowed_updates: ['email'] },
  payment_method_update: { enabled: true },
  invoice_history: { enabled: true },
  subscription_cancel: { enabled: true, mode: 'at_period_end', proration_behavior: 'none' }
};

export async function ensurePrice(api = request) {
  const found = await api('GET', '/prices', { lookup_keys: [PRICE_LOOKUP_KEY], active: true, limit: 1 });
  if (found.data?.[0]) return { price: found.data[0], created: false };

  const product = await api('POST', '/products', {
    name: 'OneStep プレミアム',
    description: '中級・上級の学習と、AI アシスタントの回答'
  });
  const price = await api('POST', '/prices', {
    product: product.id,
    currency: 'jpy',
    unit_amount: PRICE_YEN,
    recurring: { interval: 'month' },
    tax_behavior: 'inclusive',
    lookup_key: PRICE_LOOKUP_KEY
  });
  return { price, created: true };
}

export async function ensurePortal(api = request) {
  const existing = await api('GET', '/billing_portal/configurations', { is_default: true, limit: 1 });
  const current = existing.data?.[0];
  if (current) {
    await api('POST', `/billing_portal/configurations/${current.id}`, { features: PORTAL_FEATURES });
    return { id: current.id, created: false };
  }
  const created = await api('POST', '/billing_portal/configurations', {
    business_profile: { headline: 'OneStep の契約の管理' },
    features: PORTAL_FEATURES
  });
  return { id: created.id, created: true };
}

function setNetlifyEnv(name, value, { secret }) {
  const args = ['netlify', 'env:set', name, value, '--site', NETLIFY_SITE_ID, '--force', ...(secret ? ['--secret'] : [])];
  // 値を画面に出さないよう、出力は捨てる。Windows では、npx を、シェル経由で呼ぶ
  execFileSync('npx', args, { stdio: 'pipe', shell: process.platform === 'win32' });
}

export async function run({ env = process.env, argv = process.argv.slice(2), log = console.log, api = request, setEnv = setNetlifyEnv } = {}) {
  const key = env.STRIPE_SECRET_KEY || '';
  if (!/^sk_(test|live)_/.test(key)) {
    throw new Error('環境変数 STRIPE_SECRET_KEY に、Stripe のシークレットキー(sk_test_...)を設定してください');
  }
  if (key.startsWith('sk_live_') && !argv.includes('--live')) {
    throw new Error('本番の鍵です。本番に作成してよい場合だけ、--live を付けて、もう一度実行してください');
  }
  log(`モード: ${key.startsWith('sk_live_') ? '本番' : 'テスト'}`);

  const { price, created: priceCreated } = await ensurePrice(api);
  log(`価格: ${price.id}(${priceCreated ? '新しく作成' : 'すでにあるものを利用'}、月額 ${price.unit_amount} 円)`);

  const portal = await ensurePortal(api);
  log(`カスタマーポータル: ${portal.id}(${portal.created ? '新しく作成' : '設定を更新'}、解約を許可)`);

  if (argv.includes('--netlify')) {
    setEnv('STRIPE_SECRET_KEY', key, { secret: true });
    setEnv('STRIPE_PRICE_ID', price.id, { secret: false });
    log('Netlify に登録しました: STRIPE_SECRET_KEY(secret)、STRIPE_PRICE_ID');
  }
  if (argv.includes('--entitlement')) {
    setEnv('ENTITLEMENT_SECRET', randomBytes(32).toString('hex'), { secret: true });
    log('Netlify に登録しました: ENTITLEMENT_SECRET(secret。値は表示しません)');
  }
  if (!argv.includes('--netlify')) {
    log(`Netlify には、まだ登録していません。STRIPE_PRICE_ID は ${price.id} です(--netlify を付けると、自動で登録します)`);
  }
  return { priceId: price.id, portalId: portal.id };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => {
    console.error(`失敗しました: ${e.message}`);
    process.exit(1);
  });
}
