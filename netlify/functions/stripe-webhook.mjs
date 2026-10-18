// Stripe からの通知を受け取り、解約などで、有料プランが無効になった顧客を記録する。
// 通知のたびに、顧客の購読の状態を Stripe に確かめ直す(通知の順番が前後しても、結果が正しくなる)。
// 環境変数: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET(whsec_...)
import { json } from '../lib/http.mjs';
import { hasActiveSubscription } from '../lib/stripe.mjs';
import { verifyWebhook } from '../lib/webhook.mjs';
import { setMembershipActive } from '../lib/membership.mjs';

export const WEBHOOK_EVENTS = [
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted',
  'customer.subscription.paused',
  'customer.subscription.resumed'
];

export default async (req) => {
  if (req.method !== 'POST') return json({ error: 'Method Not Allowed' }, 405);

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) return json({ error: 'STRIPE_WEBHOOK_SECRET が設定されていません' }, 500);

  const body = await req.text();
  if (!verifyWebhook(body, req.headers.get('stripe-signature'), secret)) {
    return json({ error: '署名を確認できませんでした' }, 400);
  }

  let event;
  try {
    event = JSON.parse(body);
  } catch {
    return json({ error: '通知の形式が正しくありません' }, 400);
  }

  // 関係のない通知は、受け取っただけで返す(Stripe に、再送させない)
  if (!WEBHOOK_EVENTS.includes(event.type)) return json({ received: true });

  const customerId = event.data?.object?.customer;
  if (typeof customerId !== 'string' || !customerId) return json({ received: true });

  try {
    await setMembershipActive(customerId, await hasActiveSubscription(customerId));
    return json({ received: true });
  } catch (e) {
    console.error('webhook failed', event.type, e.message);
    // 500 を返すと、Stripe が、あとで再送してくれる
    return json({ error: '処理に失敗しました' }, 500);
  }
};
