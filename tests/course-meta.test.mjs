import test from 'node:test';
import assert from 'node:assert/strict';
import { courses } from '../src/data/courses.js';
import { GROUPS, getGroup, getCourseColor } from '../src/data/courseMeta.js';

test('すべてのコースが、ちょうど 1 つの系統に入っている', () => {
  const listed = GROUPS.flatMap((g) => g.courseIds);
  assert.equal(new Set(listed).size, listed.length, '同じコースが、複数の系統に入っている');
  for (const course of courses) assert.ok(listed.includes(course.id), `${course.id} が、どの系統にも入っていない`);
  for (const id of listed) assert.ok(courses.some((c) => c.id === id), `${id} は、存在しないコース`);
});

test('系統ごとに、コースの数と同じだけ、色がある', () => {
  for (const g of GROUPS) assert.equal(g.colors.length, g.courseIds.length, g.key);
});

test('同じ系統の色は、すべて違う(学ぶ順に、見分けられる)', () => {
  for (const g of GROUPS) assert.equal(new Set(g.colors.map(([bg]) => bg)).size, g.colors.length, g.key);
});

test('getCourseColor: 系統の色を返し、知らないコースは、黄色にする', () => {
  assert.equal(getCourseColor('html').background, '#cfe3f7');
  assert.equal(getCourseColor('css').background, '#b3d3f2');
  assert.equal(getGroup('react').key, 'web-script');
  assert.equal(getCourseColor('unknown').background, 'var(--neu-accent)');
});

// 地の色と文字色の、明るさの差(WCAG のコントラスト比)が、4.5 以上
const luminance = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
test('色は、文字が読める、コントラストを保つ', () => {
  for (const g of GROUPS) for (const [bg, fg] of g.colors) {
    const [a, b] = [luminance(bg), luminance(fg)].sort((x, y) => y - x);
    assert.ok((a + 0.05) / (b + 0.05) >= 4.5, `${g.key} ${bg}`);
  }
});
