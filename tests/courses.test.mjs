import test from 'node:test';
import assert from 'node:assert/strict';
import { courses } from '../src/data/courses.js';

const LEVELS = ['beginner', 'intermediate', 'advanced'];

test('コースが1つ以上あり、id が重複していない', () => {
  assert.ok(courses.length > 0);
  const ids = courses.map((c) => c.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('各コースに必要な項目がある', () => {
  for (const c of courses) {
    for (const key of ['id', 'name', 'description', 'icon', 'lessons']) {
      assert.ok(c[key], `${c.id}: ${key} がありません`);
    }
  }
});

test('各コースに、全レベルのレッスンがある', () => {
  for (const c of courses) {
    for (const level of LEVELS) {
      assert.ok(
        Array.isArray(c.lessons[level]) && c.lessons[level].length > 0,
        `${c.id}: ${level} のレッスンがありません`,
      );
    }
  }
});

test('レッスンと問題の id が、全体で重複していない', () => {
  const lessonIds = new Set();
  const questionIds = new Set();
  for (const c of courses) {
    for (const level of LEVELS) {
      for (const lesson of c.lessons[level]) {
        assert.ok(!lessonIds.has(lesson.id), `レッスン id が重複: ${lesson.id}`);
        lessonIds.add(lesson.id);
        for (const q of lesson.questions) {
          assert.ok(!questionIds.has(q.id), `問題 id が重複: ${q.id}`);
          questionIds.add(q.id);
        }
      }
    }
  }
});

test('各問題に、選択肢が2つ以上あり、正解がちょうど1つある', () => {
  for (const c of courses) {
    for (const level of LEVELS) {
      for (const lesson of c.lessons[level]) {
        for (const q of lesson.questions) {
          assert.ok(q.text, `${q.id}: 問題文がありません`);
          assert.ok(q.options.length >= 2, `${q.id}: 選択肢が足りません`);
          const correct = q.options.filter((o) => o.correct).length;
          assert.equal(correct, 1, `${q.id}: 正解が ${correct} 個あります`);
          assert.ok(q.explanation, `${q.id}: 解説がありません`);
        }
      }
    }
  }
});
