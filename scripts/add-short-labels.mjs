import { writeFile } from 'node:fs/promises';
import { courses } from '../src/data/courses.js';

const labels = {
  'js-basics': 'JS',
  'js-web': 'DOM',
  python: 'Py',
  react: 'Re',
  laravel: 'La',
  html: 'HT',
  scss: 'SC',
  css: 'CS',
  sql: 'SQ',
  typescript: 'TS'
};

for (const course of courses) {
  const label = labels[course.id];
  if (!label) throw new Error(`短縮ラベルが未定義です: ${course.id}`);
  course.shortLabel = label;
}

const seen = new Set();
for (const c of courses) {
  if (seen.has(c.shortLabel)) throw new Error(`短縮ラベルが重複しています: ${c.shortLabel}`);
  seen.add(c.shortLabel);
}

await writeFile(
  new URL('../src/data/courses.js', import.meta.url),
  `export const courses = ${JSON.stringify(courses, null, 2)}\n`
);
console.log(courses.map(c => `${c.shortLabel.padEnd(4)} ${c.name}`).join('\n'));
