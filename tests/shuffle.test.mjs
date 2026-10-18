import test from 'node:test';
import assert from 'node:assert/strict';
import { shuffle } from '../src/utils/shuffle.js';

test('shuffle は、要素の過不足なく並べ替え、元の配列を変更しない', () => {
  const original = ['a', 'b', 'c', 'd'];
  const result = shuffle(original);
  assert.deepEqual([...result].sort(), ['a', 'b', 'c', 'd']);
  assert.deepEqual(original, ['a', 'b', 'c', 'd']);
});

test('shuffle は、乱数に応じて順番が変わる', () => {
  // 常に最小の値を返す乱数だと、末尾から順に先頭の要素と入れ替わる
  assert.deepEqual(shuffle(['a', 'b', 'c', 'd'], () => 0), ['b', 'c', 'd', 'a']);
});

test('shuffle を繰り返すと、先頭に来る要素が偏らない', () => {
  const counts = { a: 0, b: 0, c: 0, d: 0 };
  for (let i = 0; i < 4000; i++) counts[shuffle(['a', 'b', 'c', 'd'])[0]]++;
  for (const n of Object.values(counts)) assert.ok(n > 800 && n < 1200, `偏りがあります: ${JSON.stringify(counts)}`);
});
