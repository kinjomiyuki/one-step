import { writeFile } from 'node:fs/promises';
import { courses } from '../src/data/courses.js';

// 既存コースに ①基礎知識（basics）と ④思考力トレーニング（thinking）を書き込む
const contentPath = process.argv[2];
if (!contentPath) throw new Error('使い方: node scripts/add-steps.mjs <stepsファイル>');

const { courseId, basics = {}, thinking = {} } = await import(
  new URL(contentPath, `file://${process.cwd()}/`).href
);
const course = courses.find(c => c.id === courseId);
if (!course) throw new Error(`コースが見つかりません: ${courseId}`);

const LEVELS = ['beginner', 'intermediate', 'advanced'];
course.lessons.basics = course.lessons.basics || {};
course.lessons.thinking = course.lessons.thinking || {};

for (const level of LEVELS) {
  const b = basics[level];
  if (b) {
    if (!b.sections?.length) throw new Error(`${courseId}/${level}: 基礎知識のセクションがありません`);
    course.lessons.basics[level] = [{
      id: `${courseId}-basics-${level}`,
      title: b.title,
      content: b.content,
      sections: b.sections
    }];
  }
  const t = thinking[level];
  if (t) {
    t.prompts.forEach((p, i) => {
      if (!p.scenario || !p.question || !p.modelAnswer || !p.checkpoints?.length) {
        throw new Error(`${courseId}/${level}: 思考力トレーニング ${i + 1} に足りない項目があります`);
      }
    });
    course.lessons.thinking[level] = [{
      id: `${courseId}-thinking-${level}`,
      title: t.title,
      content: t.content,
      prompts: t.prompts.map((p, i) => ({ id: `${courseId}-thinking-${level}-${i + 1}`, ...p }))
    }];
  }
}

const path = new URL('../src/data/courses.js', import.meta.url);
await writeFile(path, `export const courses = ${JSON.stringify(courses, null, 2)}\n`);
console.log(`${courseId}: 基礎知識 ${Object.keys(basics).length}レベル / 思考力トレーニング ${Object.keys(thinking).length}レベル`);
