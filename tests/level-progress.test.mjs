import test from 'node:test';
import assert from 'node:assert/strict';
import { courses } from '../src/data/courses.js';
import { getLevelProgress, getLevelContent } from '../src/utils/progress.js';

test('getLevelProgress: 進み具合がなければ、すべて 0 で、全体の数は、レベルの内容と同じ', () => {
  const html = courses.find((c) => c.id === 'html');
  const result = getLevelProgress(html, undefined);
  assert.deepEqual(result.map((r) => r.level), ['beginner', 'intermediate', 'advanced']);
  for (const r of result) {
    assert.equal(r.done, 0);
    assert.equal(r.total, getLevelContent(html, r.level).length);
  }
});

test('getLevelProgress: 完了したレッスンを、レベルごとに数える', () => {
  const html = courses.find((c) => c.id === 'html');
  const first = getLevelContent(html, 'beginner').slice(0, 2).map((i) => i.id);
  const result = getLevelProgress(html, { completed: first });
  assert.equal(result[0].done, 2);
  assert.equal(result[1].done, 0);
});
