// 購入の確認。サブスクが有効なら、利用トークン(7日間)を返す。状態は、毎回 Stripe に確かめる。
// 本文(どれか1つ):
//   { sessionId }  購入直後の、Checkout セッション ID
//   { token }      手持ちの利用トークンの更新(期限切れ後30日以内)
//   { loginToken } メールで届いた、ログイン用リンクのトークン
// 環境変数: STRIPE_SECRET_KEY, ENTITLEMENT_SECRET
import { json, readJson } from '../lib/http.mjs';
import { retrieveCheckoutSession, hasActiveSubscription, isActiveStatus } from '../lib/stripe.mjs';
import { isRevoked, setMembershipActive } from '../lib/membership.mjs';
import { createToken, verifyToken, ACCESS_TTL_SECONDS, REFRESH_GRACE_SECONDS } from '../lib/token.mjs';

const inactive = () => json({ active: false, error: '有効なプレミアムプランが見つかりません' }, 402);

async function customerFromRequest({ sessionId, token, loginToken }) {
  if (typeof sessionId === 'string' && sessionId) {
    const session = await retrieveCheckoutSession(sessionId);
    const subscription = session.subscription;
    const ok = session.status === 'complete' && subscription && isActiveStatus(subscription.status);
    return ok ? session.customer : null;
  }
  if (typeof token === 'string' && token) {
    return verifyToken(token, { type: 'a', graceSeconds: REFRESH_GRACE_SECONDS })?.c || null;
  }
  if (typeof loginToken === 'string' && loginToken) {
    return verifyToken(loginToken, { type: 'l' })?.c || null;
  }
  return null;
}

export default async (req) => {
  if (req.method !== 'POST') return json({ error: 'Method Not Allowed' }, 405);

  try {
    const customerId = await customerFromRequest(await readJson(req));
    if (!customerId) return inactive();
    if (!(await hasActiveSubscription(customerId))) return inactive();
    // 再契約したのに、失効の記録が残っているときは、Stripe の確認結果に合わせて直す
    try {
      if (await isRevoked(customerId)) await setMembershipActive(customerId, true);
    } catch (e) {
      console.error('membership repair failed', e.message);
    }

    const { token, expiresAt } = createToken({ type: 'a', customerId, ttlSeconds: ACCESS_TTL_SECONDS });
    return json({ active: true, token, expiresAt });
  } catch (e) {
    console.error('entitlement failed', e.message);
    return json({ error: '購入の確認に失敗しました。時間をおいて、もう一度お試しください' }, 502);
  }
};
