import test from 'node:test';
import assert from 'node:assert/strict';
import { costYen, dailyBudgetYen, dayKey } from '../netlify/lib/budget.mjs';

test('costYen: 入力と出力の料金と、円への換算レートで、費用を計算する', () => {
  // (1,000,000 × 0.10 + 1,000,000 × 0.50) ドル = 0.6ドル × 160円
  assert.ok(Math.abs(costYen({ input_tokens: 1_000_000, output_tokens: 1_000_000 }, {}) - 96) < 1e-9);
  assert.equal(costYen(undefined, {}), 0);
});

test('costYen: 環境変数で、料金とレートを変えられ、キャッシュの料金も数える', () => {
  const env = { ANTHROPIC_PRICE_INPUT: '1', ANTHROPIC_PRICE_OUTPUT: '5', USD_JPY: '150' };
  assert.ok(Math.abs(costYen({ input_tokens: 1_000_000, output_tokens: 1_000_000 }, env) - 900) < 1e-9);
  // キャッシュの書き込みは 1.25 倍、読み込みは 0.1 倍
  const cached = costYen({ cache_creation_input_tokens: 1_000_000, cache_read_input_tokens: 1_000_000 }, env);
  assert.ok(Math.abs(cached - 1.35 * 150) < 1e-9);
  // 不正な値は、既定に戻す
  assert.ok(Math.abs(costYen({ input_tokens: 1_000_000 }, { USD_JPY: 'abc' }) - 16) < 1e-9);
});

test('dailyBudgetYen: 既定は 50 円。数値で変更でき、0 と off は、上限なし', () => {
  assert.equal(dailyBudgetYen({}), 50);
  assert.equal(dailyBudgetYen({ CHAT_DAILY_BUDGET_YEN: '' }), 50);
  assert.equal(dailyBudgetYen({ CHAT_DAILY_BUDGET_YEN: '120' }), 120);
  assert.equal(dailyBudgetYen({ CHAT_DAILY_BUDGET_YEN: '0' }), 0);
  assert.equal(dailyBudgetYen({ CHAT_DAILY_BUDGET_YEN: 'OFF' }), 0);
  assert.equal(dailyBudgetYen({ CHAT_DAILY_BUDGET_YEN: 'abc' }), 50);
  assert.equal(dailyBudgetYen({ CHAT_DAILY_BUDGET_YEN: '-5' }), 50);
});

test('dayKey: 日本時間の日付', () => {
  assert.equal(dayKey(Date.UTC(2026, 9, 18, 0, 0, 0)), '2026-10-18');
  assert.equal(dayKey(Date.UTC(2026, 11, 31, 15, 0, 0)), '2027-01-01');
});
