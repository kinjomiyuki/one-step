import test from 'node:test';
import assert from 'node:assert/strict';
import { toDateKey, sanitizeActivity, recordActivity, getStreak, getWeekCount, getDailyCounts } from '../src/utils/streak.js';

const day = (y, m, d) => new Date(y, m - 1, d, 12);

test('toDateKey: 端末の日付を、YYYY-MM-DD にする', () => {
  assert.equal(toDateKey(day(2026, 3, 5)), '2026-03-05');
});

test('sanitizeActivity: 壊れた保存データは、空にする', () => {
  assert.deepEqual(sanitizeActivity(null), []);
  assert.deepEqual(sanitizeActivity({ a: 1 }), []);
  assert.deepEqual(sanitizeActivity(['2026-03-05', 7, null]), ['2026-03-05']);
});

test('recordActivity: 学習した日を、1 つ足す', () => {
  assert.deepEqual(recordActivity([], day(2026, 3, 5)), ['2026-03-05']);
  assert.deepEqual(recordActivity(['2026-03-05'], day(2026, 3, 5)), ['2026-03-05', '2026-03-05']);
});

test('getStreak: 今日まで、続いている日数を数える', () => {
  const a = ['2026-03-03', '2026-03-04', '2026-03-05'];
  assert.equal(getStreak(a, day(2026, 3, 5)), 3);
});

test('getStreak: 今日まだ学習していなくても、昨日までの連続は、保たれる', () => {
  const a = ['2026-03-03', '2026-03-04'];
  assert.equal(getStreak(a, day(2026, 3, 5)), 2);
});

test('getStreak: 1 日あくと、途切れる', () => {
  const a = ['2026-03-01', '2026-03-02'];
  assert.equal(getStreak(a, day(2026, 3, 5)), 0);
});

test('getStreak: 月をまたいでも、数えられる', () => {
  const a = ['2026-02-27', '2026-02-28', '2026-03-01'];
  assert.equal(getStreak(a, day(2026, 3, 1)), 3);
});

test('getWeekCount: 直近 7 日間の、レッスン数を数える(同じ日の複数回も、数える)', () => {
  const a = ['2026-02-26', '2026-02-28', '2026-03-05', '2026-03-05'];
  assert.equal(getWeekCount(a, day(2026, 3, 5)), 3);
});

test('getDailyCounts: 直近 7 日間を、古い日から並べ、日ごとの数を数える', () => {
  const a = ['2026-02-27', '2026-03-05', '2026-03-05', '2026-02-20'];
  const counts = getDailyCounts(a, day(2026, 3, 5));
  assert.equal(counts.length, 7);
  assert.equal(counts[0].key, '2026-02-27');
  assert.equal(counts[6].key, '2026-03-05');
  assert.deepEqual(counts.map((c) => c.count), [1, 0, 0, 0, 0, 0, 2]);
  assert.equal(counts[6].label, '木');
});
