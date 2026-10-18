// Stripe の Webhook の署名の確認。署名は、Stripe-Signature ヘッダーの t=時刻,v1=署名 の形式。
// 署名の対象は「時刻.本文」で、Webhook のシークレット(whsec_...)を鍵にした HMAC-SHA256。
import { createHmac, timingSafeEqual } from 'node:crypto';

export const TOLERANCE_SECONDS = 300; // 古い通知の再送(リプレイ)を防ぐため、5分以内のものだけ受け付ける

export function verifyWebhook(rawBody, header, secret, now = Date.now()) {
  if (!secret || typeof header !== 'string') return false;

  const parts = header.split(',').map((part) => part.trim().split('='));
  const timestamp = Number(parts.find(([key]) => key === 't')?.[1]);
  const signatures = parts.filter(([key]) => key === 'v1').map(([, value]) => value);
  if (!Number.isFinite(timestamp) || signatures.length === 0) return false;
  if (Math.abs(now / 1000 - timestamp) > TOLERANCE_SECONDS) return false;

  const expected = createHmac('sha256', secret).update(`${timestamp}.${rawBody}`).digest();
  return signatures.some((signature) => {
    const given = Buffer.from(signature, 'hex');
    return given.length === expected.length && timingSafeEqual(given, expected);
  });
}
