// プレミアムプランの確認。確認済みの利用トークンを localStorage に保存し、サーバー(Netlify Functions)とやり取りする。
// トークンの署名は、サーバーだけが確かめる。ここでは、保存と期限の確認だけを行う。
const KEY = 'oneStepEntitlement';
const REFRESH_AFTER_MS = 24 * 60 * 60 * 1000; // 1日に1回、Stripe への再確認を依頼する

export function loadEntitlement() {
  try {
    const value = JSON.parse(localStorage.getItem(KEY));
    return value && typeof value.token === 'string' && typeof value.expiresAt === 'number' ? value : null;
  } catch {
    return null;
  }
}

export function saveEntitlement(entitlement) {
  try {
    if (entitlement) localStorage.setItem(KEY, JSON.stringify(entitlement));
    else localStorage.removeItem(KEY);
  } catch {
    // 保存できない環境でも、画面は動かす
  }
}

// expiresAt は秒単位(サーバーと同じ)
export const isEntitled = (entitlement, now = Date.now()) =>
  Boolean(entitlement) && entitlement.expiresAt * 1000 > now;

export const needsRefresh = (entitlement, now = Date.now()) =>
  Boolean(entitlement) && now - (entitlement.checkedAt || 0) > REFRESH_AFTER_MS;

// サーバーの応答から、保存する形を作る
export const toEntitlement = (data, now = Date.now()) => ({
  token: data.token,
  expiresAt: data.expiresAt,
  checkedAt: now
});

// { ok, status, data } を返す。通信そのものに失敗したときは、status が 0
async function call(name, { body, token } = {}) {
  try {
    const res = await fetch(`/.netlify/functions/${name}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      },
      body: JSON.stringify(body || {})
    });
    return { ok: res.ok, status: res.status, data: await res.json().catch(() => ({})) };
  } catch {
    return { ok: false, status: 0, data: {} };
  }
}

export const verifyCheckoutSession = (sessionId) => call('entitlement', { body: { sessionId } });
export const refreshEntitlement = (token) => call('entitlement', { body: { token } });
export const exchangeLoginToken = (loginToken) => call('entitlement', { body: { loginToken } });
export const createCheckoutUrl = () => call('checkout');
export const createPortalUrl = (token) => call('portal', { token });
export const requestLoginLink = (email) => call('login-link', { body: { email } });
