import { courses } from '../src/data/courses.js';

const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}]/u;
const counts = {};
const walkAll = ls => (ls || []).forEach(l =>
  (l.questions || []).forEach(q => (q.options || []).forEach(o => {
    counts[o.text] = (counts[o.text] || 0) + 1;
  }))
);
courses.forEach(c => ['beginner', 'intermediate', 'advanced'].forEach(lv => {
  walkAll(c.lessons?.[lv]);
  walkAll(c.lessons?.projects?.[lv]);
}));

const only = process.argv[2];
let grandTotal = 0, grandBad = 0;

for (const c of courses) {
  if (only && c.id !== only) continue;
  const s = { n: 0, reused: 0, tmplQ: 0, tmplH: 0, tmplE: 0, dup: 0, emoji: 0, flag: 0, empty: 0, noEx: 0, noStep: 0 };
  const walk = ls => (ls || []).forEach(l => {
    if (EMOJI.test(l.title)) s.emoji++;
    const texts = (l.questions || []).map(q => q.text);
    if (new Set(texts).size !== texts.length) s.dup++;
    (l.questions || []).forEach(q => {
      s.n++;
      s.reused += (q.options || []).filter(o => counts[o.text] > 2).length;
      if (/について：.*説明しなさい/.test(q.text)) s.tmplQ++;
      if (/について考えてみてください/.test(q.hint || '')) s.tmplH++;
      if (/より良いコードが書けます/.test(q.explanation || '')) s.tmplE++;
      if ((q.options || []).filter(o => o.correct).length !== 1) s.flag++;
      if ((q.options || []).some(o => !o.text?.trim())) s.empty++;
      if (!q.example?.trim()) s.noEx++;
      const ot = (q.options || []).map(o => o.text);
      if (new Set(ot).size !== ot.length) s.dup++;
    });
  });
  ['beginner', 'intermediate', 'advanced'].forEach(lv => {
    walk(c.lessons?.[lv]);
    walk(c.lessons?.projects?.[lv]);
    // ①基礎知識と④思考力トレーニングがレベルごとにそろっているか
    if (!c.lessons?.basics?.[lv]?.[0]?.sections?.length) s.noStep++;
    const prompts = c.lessons?.thinking?.[lv]?.[0]?.prompts || [];
    if (!prompts.length || prompts.some(p => !p.checkpoints?.length || !p.modelAnswer)) s.noStep++;
  });

  const bad = s.noStep + s.reused + s.tmplQ + s.tmplH + s.tmplE + s.dup + s.emoji + s.flag + s.empty + s.noEx;
  grandTotal += s.n;
  grandBad += bad;
  const mark = bad === 0 ? 'OK  ' : 'NG  ';
  console.log(
    `${mark}${c.id.padEnd(10)} ${String(s.n).padStart(3)}問  ` +
    `使回:${s.reused} 定型設問:${s.tmplQ} 定型ヒント:${s.tmplH} 定型解説:${s.tmplE} ` +
    `重複:${s.dup} 絵文字:${s.emoji} 正解異常:${s.flag} 空:${s.empty} 例なし:${s.noEx} ステップ欠け:${s.noStep}`
  );
}

console.log(`--- 合計 ${grandTotal}問 / 要修正 ${grandBad}件 ---`);
