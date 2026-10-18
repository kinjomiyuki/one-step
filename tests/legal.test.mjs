import test from 'node:test';
import assert from 'node:assert/strict';
import { BUSINESS, isBusinessInfoComplete } from '../src/data/business.js';
import { LEGAL_PAGES, legalPageFor } from '../src/data/legalTexts.js';

const filled = { seller: 'A', representative: 'B', address: 'C', phone: 'D', email: 'e@example.com' };

test('isBusinessInfoComplete: すべての項目が、空でないときだけ、true', () => {
  assert.equal(isBusinessInfoComplete(filled), true);
  assert.equal(isBusinessInfoComplete({ ...filled, phone: '' }), false);
  assert.equal(isBusinessInfoComplete({ ...filled, email: '   ' }), false);
  assert.equal(isBusinessInfoComplete({}), false);
});

test('BUSINESS: 事業者の情報は、記入するまでは空で、そのままでは、リンクを出さない', () => {
  // 記入したら、このテストは、「記入済み」を確かめる内容に変えてよい
  assert.equal(isBusinessInfoComplete(BUSINESS), Object.values(BUSINESS).every((v) => v.trim() !== ''));
});

test('legalPageFor: パスから、法務ページを選ぶ', () => {
  assert.equal(legalPageFor('/tokushoho'), 'tokushoho');
  assert.equal(legalPageFor('/terms/'), 'terms');
  assert.equal(legalPageFor('/privacy'), 'privacy');
  assert.equal(legalPageFor('/'), null);
  assert.equal(legalPageFor('/other'), null);
});

test('特定商取引法の表記: 価格・支払い・解約など、必須の項目がそろっている', () => {
  const labels = LEGAL_PAGES.tokushoho.rows(filled).map(([label]) => label);
  for (const required of ['販売事業者', '運営責任者', '所在地', '電話番号', '販売価格', '支払方法', '支払時期', '提供時期', '解約・キャンセル', '返金']) {
    assert.ok(labels.includes(required), `${required} がありません`);
  }
  const price = LEGAL_PAGES.tokushoho.rows(filled).find(([l]) => l === '販売価格')[1];
  assert.match(price, /980/);
});
