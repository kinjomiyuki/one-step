import test from 'node:test';
import assert from 'node:assert/strict';
import { isEntitled, needsRefresh, toEntitlement } from '../src/utils/entitlement.js';
import { isLevelLocked, FREE_LEVELS } from '../src/utils/plans.js';

const NOW = Date.UTC(2026, 9, 18);
const entitlement = (over = {}) => ({ token: 't', expiresAt: NOW / 1000 + 3600, checkedAt: NOW, ...over });

test('isEntitled: 期限内の確認済みトークンがあるときだけ、true', () => {
  assert.equal(isEntitled(null, NOW), false);
  assert.equal(isEntitled(entitlement(), NOW), true);
  assert.equal(isEntitled(entitlement({ expiresAt: NOW / 1000 - 1 }), NOW), false);
});

test('needsRefresh: 最後の確認から1日以上たったら、更新を依頼する', () => {
  assert.equal(needsRefresh(null, NOW), false);
  assert.equal(needsRefresh(entitlement(), NOW + 60 * 60 * 1000), false);
  assert.equal(needsRefresh(entitlement(), NOW + 25 * 60 * 60 * 1000), true);
  assert.equal(needsRefresh(entitlement({ checkedAt: undefined }), NOW), true);
});

test('toEntitlement: サーバーの応答から、保存する形を作り、確認した時刻を記録する', () => {
  assert.deepEqual(toEntitlement({ token: 'abc', expiresAt: 123, active: true }, NOW), {
    token: 'abc', expiresAt: 123, checkedAt: NOW
  });
});

test('isLevelLocked: 初級は誰でも学べ、中級・上級は、プレミアムだけ', () => {
  assert.deepEqual(FREE_LEVELS, ['beginner']);
  assert.equal(isLevelLocked('beginner', false), false);
  assert.equal(isLevelLocked('intermediate', false), true);
  assert.equal(isLevelLocked('advanced', false), true);
  assert.equal(isLevelLocked('intermediate', true), false);
  assert.equal(isLevelLocked('advanced', true), false);
});
