import { getDailyCounts } from '../utils/streak';

// 直近 7 日間の、日ごとのレッスン数。縦の棒(角丸の四角)で見せる
export default function WeekChart({ activity }) {
  const days = getDailyCounts(activity);
  const max = Math.max(1, ...days.map((d) => d.count));
  return (
    <div className="grid grid-cols-7 gap-2 items-end h-32" role="img" aria-label={`直近 7 日間: ${days.map((d) => `${d.label} ${d.count} 回`).join('、')}`}>
      {days.map((d, i) => (
        <div key={d.key} className="flex flex-col items-center justify-end h-full gap-1">
          <span className="text-xs font-bold" style={{ color: 'var(--neu-text-muted)' }}>{d.count > 0 ? d.count : ''}</span>
          <span
            className="w-full"
            style={{
              height: `${d.count === 0 ? 6 : 14 + (d.count / max) * 56}px`,
              borderRadius: '8px',
              background: d.count === 0 ? 'var(--neu-surface)' : 'var(--neu-accent)',
              boxShadow: d.count === 0 ? 'inset 2px 2px 3px var(--neu-shadow-dark), inset -2px -2px 3px var(--neu-shadow-light)' : 'none'
            }}
          />
          <span className="text-xs" style={{ color: i === days.length - 1 ? 'var(--neu-text)' : 'var(--neu-text-muted)', fontWeight: i === days.length - 1 ? 800 : 400 }}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}
