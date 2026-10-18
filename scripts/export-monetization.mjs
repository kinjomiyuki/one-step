// 課金まわりのファイルを、別のアプリのフォルダにコピーする(テンプレートとして使う)。
//
// 使い方(このプロジェクトのフォルダで):
//   node scripts/export-monetization.mjs ../new-app            コピー先に、すでにあるファイルは、上書きしない
//   node scripts/export-monetization.mjs ../new-app --force    上書きする
//   node scripts/export-monetization.mjs ../new-app --no-ai    チャットの AI 回答と費用の上限は、コピーしない
//
// コピーしたあとに、手で直すところは、docs/monetization-template.md を見る。
import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// そのまま使える、課金の部分
export const CORE_FILES = [
  'netlify/functions/checkout.mjs',
  'netlify/functions/entitlement.mjs',
  'netlify/functions/portal.mjs',
  'netlify/functions/login-link.mjs',
  'netlify/functions/stripe-webhook.mjs',
  'netlify/functions/config.mjs',
  'netlify/lib/http.mjs',
  'netlify/lib/config.mjs',
  'netlify/lib/membership.mjs',
  'netlify/lib/stripe.mjs',
  'netlify/lib/token.mjs',
  'netlify/lib/webhook.mjs',
  'scripts/setup-stripe.mjs',
  'scripts/check-setup.mjs',
  'src/hooks/useEntitlement.js',
  'src/utils/entitlement.js',
  'src/utils/plans.js',
  'src/components/Paywall.jsx',
  'src/components/LockedLevel.jsx',
  'src/components/AccountBar.jsx',
  'src/components/Notice.jsx',
  'src/components/RestoreForm.jsx',
  'src/components/LegalLinks.jsx',
  'src/components/LegalPage.jsx',
  'src/data/business.js',
  'src/data/legalTexts.js',
  'tests/token.test.mjs',
  'tests/entitlement.test.mjs',
  'tests/setup-stripe.test.mjs',
  'tests/webhook.test.mjs',
  'tests/check-setup.test.mjs',
  'tests/legal.test.mjs',
  'docs/premium-setup.md',
  '.claude/skills/monetize-app/SKILL.md'
];

// AI の回答と、その費用の上限(functions.test.mjs は、chat.mjs の確認を含む)
export const AI_FILES = [
  'netlify/functions/chat.mjs',
  'netlify/lib/budget.mjs',
  'tests/budget.test.mjs',
  'tests/functions.test.mjs'
];

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export function exportMonetization(target, { force = false, ai = true, from = root, log = console.log } = {}) {
  const result = { copied: [], skipped: [], missing: [] };
  for (const file of [...CORE_FILES, ...(ai ? AI_FILES : [])]) {
    const source = join(from, file);
    const destination = join(target, file);
    if (!existsSync(source)) {
      result.missing.push(file);
    } else if (existsSync(destination) && !force) {
      result.skipped.push(file);
    } else {
      mkdirSync(dirname(destination), { recursive: true });
      cpSync(source, destination);
      result.copied.push(file);
    }
  }
  log(`コピーしました: ${result.copied.length} 件、すでにあるので、飛ばしました: ${result.skipped.length} 件`);
  if (result.skipped.length) log(`飛ばしたもの(上書きするには --force): ${result.skipped.join('、')}`);
  if (result.missing.length) log(`コピー元に見つからなかったもの: ${result.missing.join('、')}`);
  return result;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2);
  const target = args.find((arg) => !arg.startsWith('--'));
  if (!target) {
    console.error('コピー先のフォルダを指定してください。例: node scripts/export-monetization.mjs ../new-app');
    process.exit(1);
  }
  const destination = resolve(target);
  if (destination === root) {
    console.error('コピー先が、このプロジェクト自身です。別のフォルダを指定してください。');
    process.exit(1);
  }
  exportMonetization(destination, { force: args.includes('--force'), ai: !args.includes('--no-ai') });
  console.log('次に、docs/monetization-template.md の「コピーしたあとに、手で直すところ」を、進めてください。');
}
