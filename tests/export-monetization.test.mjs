import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { exportMonetization, CORE_FILES, AI_FILES } from '../scripts/export-monetization.mjs';

const quiet = () => {};

test('コピー対象のファイルは、すべて、このプロジェクトに存在する', () => {
  const target = mkdtempSync(join(tmpdir(), 'export-'));
  const result = exportMonetization(target, { log: quiet });
  assert.deepEqual(result.missing, []);
  assert.equal(result.copied.length, CORE_FILES.length + AI_FILES.length);
  assert.ok(existsSync(join(target, 'netlify/functions/stripe-webhook.mjs')));
  assert.ok(existsSync(join(target, '.claude/skills/monetize-app/SKILL.md')));
});

test('すでにあるファイルは、--force なしでは上書きしない。--force では、上書きする', () => {
  const target = mkdtempSync(join(tmpdir(), 'export-'));
  mkdirSync(join(target, 'src/data'), { recursive: true });
  const mine = join(target, 'src/data/business.js');
  writeFileSync(mine, '// 自分のもの');

  const kept = exportMonetization(target, { log: quiet });
  assert.ok(kept.skipped.includes('src/data/business.js'));
  assert.equal(readFileSync(mine, 'utf8'), '// 自分のもの');

  exportMonetization(target, { force: true, log: quiet });
  assert.notEqual(readFileSync(mine, 'utf8'), '// 自分のもの');
});

test('ai: false では、AI の回答と費用の上限は、コピーしない', () => {
  const target = mkdtempSync(join(tmpdir(), 'export-'));
  exportMonetization(target, { ai: false, log: quiet });
  assert.equal(existsSync(join(target, 'netlify/functions/chat.mjs')), false);
  assert.equal(existsSync(join(target, 'netlify/lib/budget.mjs')), false);
  assert.ok(existsSync(join(target, 'netlify/functions/checkout.mjs')));
});
