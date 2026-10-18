// 購入時のメールアドレスに、ログイン用のリンク(15分有効)を送る。別の端末で、購入済みの状態に戻すために使う。
// メールアドレスが登録されているかどうかは、応答から分からないようにする(常に ok を返す)。
// 環境変数: STRIPE_SECRET_KEY, ENTITLEMENT_SECRET, RESEND_API_KEY, MAIL_FROM(例: OneStep <noreply@example.com>)
import { json, readJson, siteOrigin } from '../lib/http.mjs';
import { findCustomersByEmail, hasActiveSubscription } from '../lib/stripe.mjs';
import { createToken, LOGIN_TTL_SECONDS } from '../lib/token.mjs';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function sendEmail({ to, link }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.MAIL_FROM,
      to,
      subject: 'OneStep のログイン用リンク',
      text: [
        'OneStep のプレミアムプランを、この端末で使うためのリンクです。',
        '15分以内に、次のリンクを開いてください。',
        '',
        link,
        '',
        'このメールに心当たりがない場合は、何もせず、破棄してください。'
      ].join('\n')
    })
  });
  if (!res.ok) throw new Error(`メール送信に失敗 (${res.status})`);
}

export default async (req) => {
  if (req.method !== 'POST') return json({ error: 'Method Not Allowed' }, 405);
  if (!process.env.RESEND_API_KEY || !process.env.MAIL_FROM) {
    return json({ error: 'メールの送信が、まだ設定されていません' }, 503);
  }

  const { email } = await readJson(req);
  if (typeof email !== 'string' || !EMAIL.test(email.trim())) {
    return json({ error: 'メールアドレスの形式が正しくありません' }, 400);
  }

  try {
    for (const customer of await findCustomersByEmail(email.trim().toLowerCase())) {
      if (await hasActiveSubscription(customer.id)) {
        const { token } = createToken({ type: 'l', customerId: customer.id, ttlSeconds: LOGIN_TTL_SECONDS });
        await sendEmail({ to: email.trim(), link: `${siteOrigin(req)}/?login=${token}` });
        break;
      }
    }
  } catch (e) {
    console.error('login-link failed', e.message);
    return json({ error: 'メールを送れませんでした。時間をおいて、もう一度お試しください' }, 502);
  }
  return json({ ok: true });
};
