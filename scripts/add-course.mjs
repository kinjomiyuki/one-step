import { writeFile } from 'node:fs/promises';
import { courses } from '../src/data/courses.js';

// 新しいコースを丸ごと追加（同じ id があれば置き換え）する
const contentPath = process.argv[2];
if (!contentPath) throw new Error('使い方: node scripts/add-course.mjs <contentファイル>');

const { course, lessons, projects } = await import(
  new URL(contentPath, `file://${process.cwd()}/`).href
);

const LEVEL_PREFIX = { beginner: 'beg', intermediate: 'int', advanced: 'adv' };

const toQuestions = (questions, level, title) => questions.map((q, i) => ({
  id: `q-${LEVEL_PREFIX[level]}-${title.replace(/\s/g, '')}-${i + 1}`,
  text: q.text,
  options: q.options,
  explanation: q.explanation,
  hint: q.hint,
  example: q.example
}));

const built = {
  id: course.id,
  name: course.name,
  description: course.description,
  icon: course.icon,
  lessons: { projects: {} },
  shortLabel: course.shortLabel
};

for (const level of Object.keys(LEVEL_PREFIX)) {
  built.lessons[level] = (lessons[level] || []).map((l, i) => ({
    id: `${course.id}-${level}-${i + 1}`,
    title: l.title,
    content: l.content,
    questions: toQuestions(l.questions, level, l.title)
  }));
  const p = projects[level];
  if (p) {
    built.lessons.projects[level] = [{
      id: `${course.id}-project-${level}-1`,
      title: p.title,
      content: p.content,
      questions: toQuestions(p.questions, level, p.title)
    }];
  }
}

const index = courses.findIndex(c => c.id === course.id);
// 置き換え時も、add-steps.mjs で入れた基礎知識・思考力トレーニングは残す
if (index >= 0) {
  const { basics, thinking } = courses[index].lessons;
  if (basics) built.lessons.basics = basics;
  if (thinking) built.lessons.thinking = thinking;
}
if (index >= 0) courses[index] = built;
else courses.push(built);

const path = new URL('../src/data/courses.js', import.meta.url);
await writeFile(path, `export const courses = ${JSON.stringify(courses, null, 2)}\n`);
const count = Object.keys(LEVEL_PREFIX).reduce((n, lv) =>
  n + [...built.lessons[lv], ...(built.lessons.projects[lv] || [])].reduce((m, l) => m + l.questions.length, 0), 0);
console.log(`${course.id}: ${index >= 0 ? '置き換え' : '追加'} / 設問 ${count}問`);
