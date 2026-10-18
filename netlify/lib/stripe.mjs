// Stripe の REST API を、fetch で直接呼ぶ(パッケージは追加しない)。
// 秘密鍵は環境変数 STRIPE_SECRET_KEY に置く。
const API = 'https://api.stripe.com/v1';
const ACTIVE_STATUSES = ['active', 'trialing'];

export class StripeError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

// { a: { b: 1 }, c: [x] } を、a[b]=1&c[0]=x のような、Stripe の形式に変換する
function flatten(value, prefix = '', out = []) {
  if (value === undefined || value === null) return out;
  if (typeof value === 'object') {
    for (const [key, inner] of Object.entries(value)) {
      flatten(inner, prefix ? `${prefix}[${key}]` : key, out);
    }
  } else {
    out.push([prefix, String(value)]);
  }
  return out;
}

export async function request(method, path, params) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new StripeError('STRIPE_SECRET_KEY が設定されていません', 500);

  const query = params ? new URLSearchParams(flatten(params)).toString() : '';
  const isGet = method === 'GET';
  const res = await fetch(`${API}${path}${isGet && query ? `?${query}` : ''}`, {
    method,
    headers: {
      Authorization: `Bearer ${key}`,
      ...(isGet ? {} : { 'Content-Type': 'application/x-www-form-urlencoded' })
    },
    body: isGet ? undefined : query
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new StripeError(data?.error?.message || `Stripe エラー (${res.status})`, res.status);
  return data;
}

export const createCheckoutSession = ({ priceId, successUrl, cancelUrl }) =>
  request('POST', '/checkout/sessions', {
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: successUrl,
    cancel_url: cancelUrl,
    locale: 'ja',
    allow_promotion_codes: true
  });

export const retrieveCheckoutSession = (id) =>
  request('GET', `/checkout/sessions/${encodeURIComponent(id)}`, { expand: ['subscription'] });

export const createPortalSession = ({ customerId, returnUrl }) =>
  request('POST', '/billing_portal/sessions', { customer: customerId, return_url: returnUrl });

export const findCustomersByEmail = (email) =>
  request('GET', '/customers', { email, limit: 10 }).then((r) => r.data || []);

export const isActiveStatus = (status) => ACTIVE_STATUSES.includes(status);

// 顧客に、有効な(支払い中・お試し中の)サブスクがあるか
export async function hasActiveSubscription(customerId) {
  const list = await request('GET', '/subscriptions', { customer: customerId, status: 'all', limit: 20 });
  return (list.data || []).some((sub) => isActiveStatus(sub.status));
}
