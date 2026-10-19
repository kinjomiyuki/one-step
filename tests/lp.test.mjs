import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { courses } from '../src/data/courses.js';
import { PRICE_LABEL, FREE_LEVELS } from '../src/utils/plans.js';
import * as lp from '../src/data/lpContent.js';

const allText = () => JSON.stringify(lp);

test('LP: 紹介しているコースが、実際のコースと、同じ名前・同じ順番', () => {
  assert.deepEqual(lp.COURSE_NAMES, courses.map((c) => c.name));
});

test('LP: 料金の表示が、アプリの料金と同じ。無料なのは、初級だけ', () => {
  assert.equal(lp.PLANS[1].price, PRICE_LABEL);
  assert.deepEqual(FREE_LEVELS, ['beginner']);
  assert.match(lp.PLANS[0].items.join(), /初級/);
});

test('LP: 「すべての問題に、ヒントと解説がある」の裏づけ(全問に、ヒントと解説がある)', () => {
  const missing = [];
  for (const course of courses) {
    for (const level of ['beginner', 'intermediate', 'advanced']) {
      for (const lesson of [...course.lessons[level], ...(course.lessons.projects?.[level] || [])]) {
        for (const q of lesson.questions) {
          if (!q.hint || !q.explanation || !q.example) missing.push(q.id);
        }
      }
    }
  }
  assert.deepEqual(missing, []);
});

test('LP: 結果を約束する、言い回しを使っていない', () => {
  const banned = ['必ず', '絶対', '稼げ', '稼ぐ', '就職できる', '転職できる', '収入が増', '年収', '100%', '誰でも簡単', '確実に'];
  const text = allText();
  for (const word of banned) assert.equal(text.includes(word), false, `使えない言い回し: ${word}`);
});

test('LP: 解約・返金・未成年の注意書きが、ある', () => {
  const notes = lp.PLAN_NOTES.join();
  assert.match(notes, /解約/);
  assert.match(notes, /返金/);
  assert.match(notes, /保護者/);
});

test('LP: 共有時の見出し・説明・正規の URL が、静的な HTML に書かれている', () => {
  const html = readFileSync(new URL('../lp/index.html', import.meta.url), 'utf8');
  for (const tag of ['<title>', 'name="description"', 'property="og:title"', 'property="og:description"', 'property="og:image"', 'rel="canonical"', 'name="viewport"']) {
    assert.ok(html.includes(tag), `${tag} がありません`);
  }
  assert.ok(html.includes(`${lp.SITE_URL}/lp/`));
});

test('LP: ヒーローに使うアプリの画面の画像が、ある', () => {
  assert.ok(existsSync(new URL('../public/lp/app-quiz.jpg', import.meta.url)));
});
