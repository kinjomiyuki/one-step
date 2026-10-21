import { getStreak, getWeekCount } from '../utils/streak';
import WeekChart from './WeekChart';
import RecordCourseRow from './RecordCourseRow';

const LEVEL_LABELS = { beginner: '初級', intermediate: '中級', advanced: '上級' };

// バッジの名前は「コース名-レベル」。表示用に、分ける
function badgeLabel(badge) {
  const at = badge.lastIndexOf('-');
  const level = LEVEL_LABELS[badge.slice(at + 1)];
  return level ? `${badge.slice(0, at)} ${level}を完了` : badge;
}

// 記録の画面。学習の積み重ねと、コースごとの進み具合を、1 か所で見る
export default function RecordView({ courses, progress, activity, userStats }) {
  const totalDone = Object.values(progress).reduce((sum, p) => sum + (p?.completed?.length || 0), 0);
  const started = courses.filter((c) => progress[c.id]?.completed?.length > 0);
  const badges = userStats.badges || [];
  const stats = [
    [`${getStreak(activity)} 日`, '連続で学習'],
    [`${getWeekCount(activity)} 回`, '今週、終えたレッスン'],
    [`${totalDone} 個`, '終えたレッスンの合計'],
    [`${badges.length} 個`, '完了したレベル']
  ];

  return (
    <div style={{ background: 'var(--neu-bg)', minHeight: '100vh' }} className="pt-8 pb-28 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mb-5" style={{ color: 'var(--neu-text)' }}>記録</h1>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {stats.map(([value, label]) => (
            <div key={label} className="neu-card-flat p-4">
              <p className="text-2xl font-bold" style={{ color: 'var(--neu-text)' }}>{value}</p>
              <p className="text-xs md:text-sm" style={{ color: 'var(--neu-text-muted)' }}>{label}</p>
            </div>
          ))}
        </div>

        <section className="neu-card p-5 mb-8" aria-label="直近 7 日間">
          <h2 className="font-bold mb-4" style={{ color: 'var(--neu-text)' }}>直近 7 日間</h2>
          <WeekChart activity={activity} />
        </section>

        <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--neu-text)' }}>コースごとの進み具合</h2>
        {started.length === 0 ? (
          <p className="text-sm mb-8" style={{ color: 'var(--neu-text-muted)' }}>まだ、始めたコースはありません。ホームから、最初の 1 問に進みましょう。</p>
        ) : (
          <ul className="space-y-4 mb-8">
            {started.map((course) => <RecordCourseRow key={course.id} course={course} courseProgress={progress[course.id]} />)}
          </ul>
        )}

        <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--neu-text)' }}>完了したレベル</h2>
        {badges.length === 0 ? (
          <p className="text-sm" style={{ color: 'var(--neu-text-muted)' }}>レベルを最後まで終えると、ここに並びます。</p>
        ) : (
          <ul className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <li key={badge} className="neu-badge px-4 py-2 text-sm" style={{ color: 'var(--neu-on-green)', background: 'var(--neu-green)' }}>{badgeLabel(badge)}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
