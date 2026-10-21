import { getStreak, getWeekCount } from '../utils/streak';

// 連続日数と、今週のレッスン数。数字だけで、静かに、励ます
export default function StudyStats({ activity }) {
  if (activity.length === 0) return null;
  const items = [
    [`${getStreak(activity)} 日`, '連続で学習'],
    [`${getWeekCount(activity)} 回`, '今週、終えたレッスン']
  ];
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {items.map(([value, label]) => (
        <div key={label} className="neu-card-flat p-4">
          <p className="text-2xl font-bold" style={{ color: 'var(--neu-text)' }}>{value}</p>
          <p className="text-xs md:text-sm" style={{ color: 'var(--neu-text-muted)' }}>{label}</p>
        </div>
      ))}
    </div>
  );
}
