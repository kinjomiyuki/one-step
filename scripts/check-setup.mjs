// 有料プランの設定の状態を、一覧で確認する(何も変更しない)。鍵や値は表示せず、状態と名前だけを出す。
//
// 使い方(プロジェクトのフォルダで):
//   PowerShell:  $env:STRIPE_SECRET_KEY = "sk_test_..." (または rk_test_...)
//                node scripts/check-setup.mjs
//                node scripts/check-setup.mjs --checkout   購入画面を、実際に作ってみて、Stripe からの返事を確かめる
//                                                          (支払いの前の状態で、24時間たつと、自動で期限切れになる。課金はされない)
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { request, createCheckoutSession } from '../netlify/lib/stripe.mjs';
import { PRICE_LOOKUP_KEY, NETLIFY_SITE_ID, webhookUrl } from './setup-stripe.mjs';

// Netlify に必要な環境変数(名前だけを確認する)
export const REQUIRED_ENV = ['STRIPE_SECRET_KEY', 'STRIPE_PRICE_ID', 'STRIPE_WEBHOOK_SECRET', 'ENTITLEMENT_SECRET', 'RESEND_API_KEY', 'MAIL_FROM', 'ANTHROPIC_API_KEY'];

const ok = (text) => `[OK]   ${text}`;
const ng = (text) => `[要対応] ${text}`;

// 本番の適用先に、登録されている変数の名前を返す(適用先を指定しないと、本番だけに登録したものが、見えない)
function listNetlifyEnvNames() {
  const out = execFileSync('npx', ['netlify', 'env:list', '--json', '--context', 'production', '--site', NETLIFY_SITE_ID], {
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: process.platform === 'win32'
  }).toString();
  return Object.keys(JSON.parse(out));
}

export async function checkSetup({ env = process.env, api = request, envNames = listNetlifyEnvNames, checkout = false, createCheckout = createCheckoutSession } = {}) {
  const lines = [];
  const key = env.STRIPE_SECRET_KEY || '';
  if (!/^(sk|rk)_(test|live)_/.test(key)) {
    throw new Error('環境変数 STRIPE_SECRET_KEY に、Stripe の鍵(sk_test_... または rk_test_...)を設定してください');
  }
  lines.push(`モード: ${key.includes('_live_') ? '本番' : 'テスト'}`);

  try {
    const account = await api('GET', '/account');
    lines.push(ok(`Stripe のアカウント: ${account.id}`));
  } catch {
    lines.push(`(アカウントの ID は、この鍵の権限では、読み取れませんでした)`);
  }

  try {
    const prices = await api('GET', '/prices', { lookup_keys: [PRICE_LOOKUP_KEY], active: true, limit: 1 });
    const price = prices.data?.[0];
    lines.push(price ? ok(`価格: ${price.id}(月額 ${price.unit_amount} 円)`) : ng('価格がありません。setup-stripe.mjs を実行してください'));
    if (checkout && price) {
      try {
        const origin = (env.SITE_URL || 'https://one-step-programing.netlify.app').replace(/\/$/, '');
        const session = await createCheckout({
          priceId: price.id,
          successUrl: `${origin}/?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${origin}/?checkout=cancel`
        });
        lines.push(ok(`購入画面を作れました(${session.id}。支払いの前なので、課金はされません)`));
      } catch (e) {
        lines.push(ng(`購入画面を作れませんでした。Stripe の返事: ${e.message}`));
      }
    }
  } catch (e) {
    lines.push(ng(`価格を確認できませんでした: ${e.message}`));
  }

  try {
    const portals = await api('GET', '/billing_portal/configurations', { is_default: true, limit: 1 });
    lines.push(portals.data?.[0] ? ok(`カスタマーポータル: ${portals.data[0].id}`) : ng('カスタマーポータルがありません。setup-stripe.mjs を実行してください'));
  } catch (e) {
    lines.push(ng(`カスタマーポータルを確認できませんでした: ${e.message}`));
  }

  try {
    const url = webhookUrl(env);
    const hooks = await api('GET', '/webhook_endpoints', { limit: 100 });
    const hook = (hooks.data || []).find((endpoint) => endpoint.url === url);
    if (!hook) lines.push(ng('Webhook の受け取り口がありません。setup-stripe.mjs に --webhook を付けて実行してください'));
    else if (hook.status !== 'enabled') lines.push(ng(`Webhook ${hook.id} が、有効ではありません(状態: ${hook.status})`));
    else lines.push(ok(`Webhook: ${hook.id}(有効、通知 ${hook.enabled_events.length} 種類)`));
  } catch (e) {
    lines.push(ng(`Webhook を確認できませんでした: ${e.message}`));
  }

  try {
    const names = new Set(envNames());
    const missing = REQUIRED_ENV.filter((name) => !names.has(name));
    lines.push(missing.length ? ng(`Netlify に、未登録の環境変数: ${missing.join('、')}`) : ok('Netlify の環境変数: 必要なものが、すべて登録されています'));
    lines.push(names.has('PREMIUM_ENABLED') ? ok('PREMIUM_ENABLED: 登録されています(値は、Netlify の画面で確認してください)') : ng('PREMIUM_ENABLED が未登録です(未登録のあいだは、全員が無料)'));
  } catch (e) {
    lines.push(ng(`Netlify の環境変数を確認できませんでした。npx netlify login を実行してから、もう一度お試しください(${String(e.message).split('\n')[0]})`));
  }
  return lines;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  checkSetup({ checkout: process.argv.includes('--checkout') })
    .then((lines) => console.log(lines.join('\n')))
    .catch((e) => {
      console.error(`失敗しました: ${e.message}`);
      process.exit(1);
    });
}
