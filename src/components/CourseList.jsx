import { getLatestResume } from '../utils/progress';
import Onboarding from './Onboarding';
import AccountBar from './AccountBar';
import LegalLinks from './LegalLinks';
import HomeGreeting from './HomeGreeting';
import StudyStats from './StudyStats';
import ResumeCard from './ResumeCard';
import CourseRow from './CourseRow';

// 初心者におすすめの目印を付けるコース
const BEGINNER_FRIENDLY = ['html', 'python'];

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
  const others = resume ? courses.filter((c) => c.id !== resume.course.id) : courses;

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

        <h2 className="font-bold text-base md:text-lg mb-3" style={{ color: 'var(--neu-text)' }}>
          {resume ? 'ほかのコース' : 'コース'}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {others.map((course) => (
            <CourseRow
              key={course.id}
              course={course}
              progress={progress}
              recommended={BEGINNER_FRIENDLY.includes(course.id)}
              onSelect={onSelectCourse}
            />
          ))}
        </div>

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
