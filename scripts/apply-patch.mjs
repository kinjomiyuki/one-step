import { readFile, writeFile } from 'node:fs/promises';
import { courses } from '../src/data/courses.js';

const contentPath = process.argv[2];
if (!contentPath) throw new Error('使い方: node scripts/apply-patch.mjs <contentファイル>');

const { courseId, lessons = {}, projects = {} } = await import(
  new URL(contentPath, `file://${process.cwd()}/`).href
);

const course = courses.find(c => c.id === courseId);
if (!course) throw new Error(`コースが見つかりません: ${courseId}`);

const allLessons = ['beginner', 'intermediate', 'advanced'].flatMap(lv => course.lessons[lv] || []);
let changed = 0;

for (const [title, patches] of Object.entries(lessons)) {
  const lesson = allLessons.find(l => l.title === title);
  if (!lesson) throw new Error(`レッスンが見つかりません: ${courseId} / ${title}`);
  patches.forEach((p, i) => {
    const q = lesson.questions[i];
    if (!q) throw new Error(`設問が見つかりません: ${title} Q${i + 1}`);
    if (p.text) q.text = p.text;
    if (p.options) q.options = p.options;
    q.hint = p.hint;
    q.explanation = p.explanation;
    changed++;
  });
}

for (const [level, spec] of Object.entries(projects)) {
  const lesson = course.lessons.projects?.[level]?.[0];
  if (!lesson) throw new Error(`プロジェクトが見つかりません: ${courseId} / ${level}`);
  lesson.title = spec.title;
  lesson.content = spec.content;
  spec.questions.forEach((p, i) => {
    const q = lesson.questions[i];
    if (!q) throw new Error(`プロジェクト設問が見つかりません: ${level} Q${i + 1}`);
    q.text = p.text;
    q.options = p.options;
    q.hint = p.hint;
    q.explanation = p.explanation;
    changed++;
  });
}

const path = new URL('../src/data/courses.js', import.meta.url);
const before = (await readFile(path, 'utf8')).length;
await writeFile(path, `export const courses = ${JSON.stringify(courses, null, 2)}\n`);
console.log(`${courseId}: 書き換えた設問 ${changed}件 / サイズ ${before} -> ${(await readFile(path, 'utf8')).length}`);
