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
// Stripe が、足りないと返す項目の名前(主なもの)。それ以外は、名前をそのまま出す
const REQUIREMENT_LABELS = {
  external_account: '入金先の銀行口座',
  'business_profile.url': '事業のサイトの URL',
  'business_profile.mcc': '事業の種類(業種)',
  'business_profile.product_description': '商品・サービスの説明',
  'tos_acceptance.date': 'Stripe の利用規約への同意',
  'tos_acceptance.ip': 'Stripe の利用規約への同意',
  'individual.verification.document': '本人確認の書類',
  'individual.verification.additional_document': '本人確認の追加の書類',
  'individual.first_name_kanji': '氏名(漢字)',
  'individual.last_name_kanji': '氏名(漢字)',
  'individual.first_name_kana': '氏名(かな)',
  'individual.last_name_kana': '氏名(かな)',
  'individual.dob.day': '生年月日',
  'individual.address_kanji.postal_code': '住所(郵便番号)',
  'individual.phone': '電話番号',
  'individual.email': 'メールアドレス',
  'representative.verification.document': '代表者の本人確認の書類',
  'company.tax_id': '法人番号'
};
const labelOf = (key) => (REQUIREMENT_LABELS[key] ? `${REQUIREMENT_LABELS[key]}(${key})` : key);

// アカウントが、本番の課金や入金を受け付けられる状態か、足りない項目は何かを、読みやすく並べる
export function describeAccount(account) {
  const lines = [];
  const yesNo = (value) => (value ? 'はい' : 'いいえ');
  const charges = account.charges_enabled === true;
  lines.push(
    charges
      ? ok('本番の課金: 受け付けられます')
      : ng('本番の課金: 受け付けられません(Stripe が、課金を止めています。これが、購入画面が開かない原因です)')
  );
  lines.push(`       入金を受け取れるか: ${yesNo(account.payouts_enabled)}、情報の提出は、完了しているか: ${yesNo(account.details_submitted)}`);

  // 機能ごとの状態。card_payments(カードの決済)が active でないと、課金できない
  const capabilities = account.capabilities || {};
  const capabilityNames = ['card_payments', 'jcb_payments', 'transfers'].filter((name) => capabilities[name]);
  if (capabilityNames.length) {
    lines.push(`       機能の状態: ${capabilityNames.map((name) => `${name}=${capabilities[name]}`).join('、')}(active なら、使える。pending は、Stripe が確認中。inactive は、使えない)`);
  }
  const profile = [account.country && `国: ${account.country}`, account.business_type && `事業の種類: ${account.business_type}`, account.default_currency && `通貨: ${account.default_currency}`].filter(Boolean);
  if (profile.length) lines.push(`       ${profile.join('、')}`);

  const req = account.requirements || {};
  if (req.disabled_reason) lines.push(`       止められている理由(Stripe の表記): ${req.disabled_reason}`);
  if (req.current_deadline) lines.push(`       提出の期限: ${new Date(req.current_deadline * 1000).toISOString().slice(0, 10)}`);
  const groups = [
    ['今すぐ、必要な項目', req.currently_due],
    ['期限を過ぎている項目', req.past_due],
    ['確認中の項目', req.pending_verification],
    ['あとで、必要になる項目', req.eventually_due]
  ];
  for (const [title, items] of groups) {
    if (Array.isArray(items) && items.length) lines.push(`       ${title}: ${[...new Set(items.map(labelOf))].join('、')}`);
  }
  if (!charges && !Array.isArray(req.currently_due) && !req.disabled_reason) {
    lines.push('       足りない項目は、返されませんでした。ダッシュボードの「アカウントを有効化」の案内を、確認してください');
  }
  return lines;
}

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
    lines.push(...describeAccount(account));
  } catch {
    lines.push(`(アカウントの状態は、この鍵の権限では、読み取れませんでした)`);
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
