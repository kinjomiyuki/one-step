// 購入者の確認に使う、署名付きトークン(HMAC-SHA256)。
// 形式: base64url(JSON).base64url(署名)。秘密の値は環境変数 ENTITLEMENT_SECRET に置く。
import { createHmac, timingSafeEqual } from 'node:crypto';

export const ACCESS_TTL_SECONDS = 7 * 24 * 60 * 60; // 利用トークン: 7日
export const LOGIN_TTL_SECONDS = 15 * 60; // ログイン用リンク: 15分
// 期限切れの利用トークンでも、この期間内なら、更新(再確認)を受け付ける
export const REFRESH_GRACE_SECONDS = 30 * 24 * 60 * 60;

const encode = (value) => Buffer.from(value).toString('base64url');

function sign(body, secret) {
  return createHmac('sha256', secret).update(body).digest('base64url');
}

export function getSecret() {
  const secret = process.env.ENTITLEMENT_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error('ENTITLEMENT_SECRET が未設定、または短すぎます(32文字以上)');
  }
  return secret;
}

// type: 'a'(利用) / 'l'(ログイン用リンク)、customerId: Stripe の顧客ID
export function createToken({ type, customerId, ttlSeconds }, secret = getSecret(), now = Date.now()) {
  const payload = { t: type, c: customerId, e: Math.floor(now / 1000) + ttlSeconds };
  const body = encode(JSON.stringify(payload));
  return { token: `${body}.${sign(body, secret)}`, expiresAt: payload.e };
}

// 署名と種類と期限を確かめ、正しければ中身を返す。正しくなければ null
export function verifyToken(token, { type, graceSeconds = 0 } = {}, secret = getSecret(), now = Date.now()) {
  if (typeof token !== 'string') return null;
  const [body, signature, ...rest] = token.split('.');
  if (!body || !signature || rest.length) return null;

  const expected = Buffer.from(sign(body, secret));
  const actual = Buffer.from(signature);
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return null;

  let payload;
  try {
    payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
  } catch {
    return null;
  }
  if (payload.t !== type || typeof payload.c !== 'string' || typeof payload.e !== 'number') return null;
  if (payload.e + graceSeconds < Math.floor(now / 1000)) return null;
  return payload;
}

export function bearerToken(req) {
  const header = req.headers.get('authorization') || '';
  return header.startsWith('Bearer ') ? header.slice(7) : '';
}
