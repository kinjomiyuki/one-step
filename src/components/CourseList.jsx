import { getLatestResume } from '../utils/progress';
import Onboarding from './Onboarding';
import AccountBar from './AccountBar';
import LegalLinks from './LegalLinks';
import HomeGreeting from './HomeGreeting';
import StudyStats from './StudyStats';
import ResumeCard from './ResumeCard';
import CourseGroup from './CourseGroup';
import { GROUPS } from '../data/courseMeta';

// ホーム。「続きの 1 問」を、いちばん大きく見せ、ほかのコースは、コンパクトな行で並べる
export default function CourseList({
  courses,
  progress,
  activity,
  showOnboarding,
  onStartRecommended,
  onDismissOnboarding,
  onSelectCourse,
  account
}) {
  const resume = getLatestResume(courses, progress);

  return (
    <div style={{ background: 'var(--neu-bg)', minHeight: '100vh' }} className="pt-8 pb-28 px-4">
      <div className="max-w-3xl mx-auto">
        {account.premiumEnabled && <AccountBar {...account} />}

        <HomeGreeting returning={Boolean(resume)} />

        {showOnboarding && (
          <Onboarding courses={courses} onStart={onStartRecommended} onDismiss={onDismissOnboarding} />
        )}

        <StudyStats activity={activity} />

        {resume && <ResumeCard resume={resume} onSelectCourse={onSelectCourse} />}

        <h2 id="courses" className="font-bold text-lg md:text-xl mb-1 scroll-mt-4" style={{ color: 'var(--neu-text)' }}>
          {resume ? 'ほかのコース' : 'コース'}
        </h2>
        <p className="text-xs md:text-sm mb-5" style={{ color: 'var(--neu-text-muted)' }}>
          同じ色のコースは、つながっています。上から順に学ぶと、進めやすくなります。
        </p>
        {GROUPS.map((group) => (
          <CourseGroup key={group.key} group={group} courses={courses} excludeId={resume?.course.id} progress={progress} onSelect={onSelectCourse} />
        ))}

        <details className="mt-10">
          <summary className="cursor-pointer text-sm font-semibold" style={{ color: 'var(--neu-text-muted)' }}>OneStep について</summary>
          <ul className="mt-3 space-y-2 text-sm" style={{ color: 'var(--neu-text-muted)' }}>
            <li>問答形式で、楽しく学習できます</li>
            <li>選択肢から答えを選び、詳しい解説で、理由まで確かめられます</li>
            <li>初級 → 中級 → 上級と、段階的に進みます</li>
            <li>進み具合は、自動的に保存されます</li>
            <li>ゲストモードで始められます(アカウント不要)</li>
          </ul>
        </details>

        {account.premiumEnabled && (
          <div className="mt-8 mb-4">
            <LegalLinks />
          </div>
        )}
      </div>
    </div>
  );
}
