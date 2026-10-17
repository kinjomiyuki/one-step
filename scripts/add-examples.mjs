import { writeFile } from 'node:fs/promises';
import { courses } from '../src/data/courses.js';

// 既存コースの各設問に「こんな時に使う」（example）を書き込む
const paths = process.argv.slice(2);
if (paths.length === 0) throw new Error('使い方: node scripts/add-examples.mjs <examplesファイル>...');

for (const contentPath of paths) {
  const { courseId, examples } = await import(
    new URL(contentPath, `file://${process.cwd()}/`).href
  );
  const course = courses.find(c => c.id === courseId);
  if (!course) throw new Error(`コースが見つかりません: ${courseId}`);

  const allLessons = ['beginner', 'intermediate', 'advanced'].flatMap(lv => [
    ...(course.lessons[lv] || []),
    ...(course.lessons.projects?.[lv] || [])
  ]);

  const unknown = Object.keys(examples).filter(id => !allLessons.some(l => l.id === id));
  if (unknown.length) throw new Error(`${courseId}: 存在しないレッスンID ${unknown.join(', ')}`);

  let changed = 0;
  for (const lesson of allLessons) {
    const list = examples[lesson.id];
    if (!list) throw new Error(`${courseId}: 例がありません ${lesson.id}`);
    if (list.length !== lesson.questions.length) {
      throw new Error(`${courseId}: ${lesson.id} の例は ${list.length} 件、設問は ${lesson.questions.length} 問です`);
    }
    lesson.questions.forEach((q, i) => {
      q.example = list[i];
      changed++;
    });
  }
  console.log(`${courseId}: 例を書き込んだ設問 ${changed}件`);
}

const path = new URL('../src/data/courses.js', import.meta.url);
await writeFile(path, `export const courses = ${JSON.stringify(courses, null, 2)}\n`);
