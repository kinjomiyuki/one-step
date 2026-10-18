import test from 'node:test';
import assert from 'node:assert/strict';
import { createToken, verifyToken, bearerToken } from '../netlify/lib/token.mjs';

const SECRET = 'x'.repeat(40);
const NOW = Date.UTC(2026, 9, 18, 0, 0, 0);
const make = (over = {}) => createToken({ type: 'a', customerId: 'cus_1', ttlSeconds: 100, ...over }, SECRET, NOW);

test('署名したトークンは、同じ秘密の値で確かめられ、中身を取り出せる', () => {
  const { token, expiresAt } = make();
  assert.equal(expiresAt, NOW / 1000 + 100);
  assert.deepEqual(verifyToken(token, { type: 'a' }, SECRET, NOW), { t: 'a', c: 'cus_1', e: NOW / 1000 + 100 });
});

test('別の秘密の値、改ざん、形式の違うトークンは、受け付けない', () => {
  const { token } = make();
  assert.equal(verifyToken(token, { type: 'a' }, 'y'.repeat(40), NOW), null);

  const [body, signature] = token.split('.');
  const forged = Buffer.from(JSON.stringify({ t: 'a', c: 'cus_other', e: NOW / 1000 + 100 })).toString('base64url');
  assert.equal(verifyToken(`${forged}.${signature}`, { type: 'a' }, SECRET, NOW), null);
  assert.equal(verifyToken(`${body}.`, { type: 'a' }, SECRET, NOW), null);
  assert.equal(verifyToken('abc', { type: 'a' }, SECRET, NOW), null);
  assert.equal(verifyToken(undefined, { type: 'a' }, SECRET, NOW), null);
});

test('トークンの種類が違うと、受け付けない(ログイン用リンクで、利用はできない)', () => {
  const { token } = make({ type: 'l' });
  assert.equal(verifyToken(token, { type: 'a' }, SECRET, NOW), null);
  assert.ok(verifyToken(token, { type: 'l' }, SECRET, NOW));
});

test('期限が切れると受け付けないが、猶予の期間内なら、更新のために受け付ける', () => {
  const { token } = make();
  const later = NOW + 101 * 1000;
  assert.equal(verifyToken(token, { type: 'a' }, SECRET, later), null);
  assert.ok(verifyToken(token, { type: 'a', graceSeconds: 60 }, SECRET, later));
  assert.equal(verifyToken(token, { type: 'a', graceSeconds: 60 }, SECRET, NOW + 200 * 1000), null);
});

test('秘密の値が未設定、または短いときは、エラーにする', () => {
  const saved = process.env.ENTITLEMENT_SECRET;
  try {
    delete process.env.ENTITLEMENT_SECRET;
    assert.throws(() => createToken({ type: 'a', customerId: 'c', ttlSeconds: 1 }), /ENTITLEMENT_SECRET/);
    process.env.ENTITLEMENT_SECRET = 'short';
    assert.throws(() => createToken({ type: 'a', customerId: 'c', ttlSeconds: 1 }), /ENTITLEMENT_SECRET/);
  } finally {
    if (saved === undefined) delete process.env.ENTITLEMENT_SECRET;
    else process.env.ENTITLEMENT_SECRET = saved;
  }
});

test('bearerToken は、Authorization ヘッダーからトークンを取り出す', () => {
  const req = (h) => new Request('https://example.com', { headers: h });
  assert.equal(bearerToken(req({ Authorization: 'Bearer abc.def' })), 'abc.def');
  assert.equal(bearerToken(req({ Authorization: 'Basic abc' })), '');
  assert.equal(bearerToken(req({})), '');
});
