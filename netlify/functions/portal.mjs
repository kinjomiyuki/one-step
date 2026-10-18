// 契約の管理(解約、支払い方法の変更)ができる、Stripe の画面の URL を返す。
// Stripe のダッシュボードで、カスタマーポータルを有効にしておく必要がある。
import { json, siteOrigin } from '../lib/http.mjs';
import { createPortalSession } from '../lib/stripe.mjs';
import { bearerToken, verifyToken, REFRESH_GRACE_SECONDS } from '../lib/token.mjs';

export default async (req) => {
  if (req.method !== 'POST') return json({ error: 'Method Not Allowed' }, 405);

  const payload = verifyToken(bearerToken(req), { type: 'a', graceSeconds: REFRESH_GRACE_SECONDS });
  if (!payload) return json({ error: '先に、購入の確認が必要です' }, 401);

  try {
    const session = await createPortalSession({ customerId: payload.c, returnUrl: `${siteOrigin(req)}/` });
    return json({ url: session.url });
  } catch (e) {
    console.error('portal failed', e.message);
    return json({ error: '契約の管理画面を開けませんでした' }, 502);
  }
};
