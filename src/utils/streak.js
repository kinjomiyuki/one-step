// 学習した日の記録(連続日数と、今週の学習数のため)。レッスンを 1 つ終えるごとに、その日の日付を 1 つ足す
const MAX_ENTRIES = 500;

const pad = (n) => String(n).padStart(2, '0');

// 端末の、今の日付(YYYY-MM-DD)
export function toDateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function shiftDays(date, days) {
  const next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  next.setDate(next.getDate() + days);
  return next;
}

// 保存データが壊れていても、画面が動くように、文字列だけを残す
export function sanitizeActivity(value) {
  return Array.isArray(value) ? value.filter((v) => typeof v === 'string').slice(-MAX_ENTRIES) : [];
}

export function recordActivity(activity, now = new Date()) {
  return [...sanitizeActivity(activity), toDateKey(now)].slice(-MAX_ENTRIES);
}

// 今日(まだ学習していなければ、昨日)から、さかのぼって、続いている日数
export function getStreak(activity, now = new Date()) {
  const days = new Set(sanitizeActivity(activity));
  let cursor = now;
  if (!days.has(toDateKey(cursor))) cursor = shiftDays(cursor, -1);
  let streak = 0;
  while (days.has(toDateKey(cursor))) {
    streak += 1;
    cursor = shiftDays(cursor, -1);
  }
  return streak;
}

// 今日を含む、直近 7 日間に終えたレッスンの数
export function getWeekCount(activity, now = new Date()) {
  const recent = new Set(Array.from({ length: 7 }, (_, i) => toDateKey(shiftDays(now, -i))));
  return sanitizeActivity(activity).filter((key) => recent.has(key)).length;
}

const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土'];

// 今日を含む、直近 7 日間の、日ごとのレッスン数(古い日から今日の順)
export function getDailyCounts(activity, now = new Date()) {
  const entries = sanitizeActivity(activity);
  return Array.from({ length: 7 }, (_, i) => {
    const date = shiftDays(now, i - 6);
    const key = toDateKey(date);
    return { key, label: WEEKDAYS[date.getDay()], count: entries.filter((e) => e === key).length };
  });
}
