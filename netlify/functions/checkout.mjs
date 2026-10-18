// プレミアムプラン(月額サブスク)の、Stripe Checkout の画面を作って、その URL を返す。
// 環境変数: STRIPE_SECRET_KEY, STRIPE_PRICE_ID
import { json, siteOrigin } from '../lib/http.mjs';
import { createCheckoutSession, StripeError } from '../lib/stripe.mjs';

export default async (req) => {
  if (req.method !== 'POST') return json({ error: 'Method Not Allowed' }, 405);

  const priceId = process.env.STRIPE_PRICE_ID;
  if (!priceId) return json({ error: 'STRIPE_PRICE_ID が設定されていません' }, 500);

  const origin = siteOrigin(req);
  try {
    const session = await createCheckoutSession({
      priceId,
      // {CHECKOUT_SESSION_ID} は、Stripe が購入ごとの ID に置き換える
      successUrl: `${origin}/?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${origin}/?checkout=cancel`
    });
    return json({ url: session.url });
  } catch (e) {
    console.error('checkout failed', e.message);
    return json({ error: '購入画面を開けませんでした' }, e instanceof StripeError && e.status === 500 ? 500 : 502);
  }
};
