import { getLatestResume, STEPS } from '../utils/progress';
import Onboarding from './Onboarding';
import AccountBar from './AccountBar';

const LEVELS = [
  { key: 'beginner', label: '初級' },
  { key: 'intermediate', label: '中級' },
  { key: 'advanced', label: '上級' }
];

// 初心者におすすめの目印を付けるコース
const BEGINNER_FRIENDLY = ['html', 'python'];

const levelLabel = (key) => LEVELS.find(l => l.key === key)?.label;

export default function CourseList({
  courses,
  progress,
  showOnboarding,
  onStartRecommended,
  onDismissOnboarding,
  onSelectCourse,
  account
}) {
  const resume = getLatestResume(courses, progress);

  return (
    <div style={{ background: 'var(--neu-bg)', minHeight: '100vh' }} className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {account.premiumEnabled && <AccountBar {...account} />}

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--neu-text)' }}>
            OneStep
          </h1>
          <p className="text-base md:text-xl" style={{ color: 'var(--neu-text-muted)' }}>
            問答形式で学ぶプログラミング学習プラットフォーム
          </p>
        </div>

        {/* Onboarding */}
        {showOnboarding && (
          <Onboarding courses={courses} onStart={onStartRecommended} onDismiss={onDismissOnboarding} />
        )}

        {/* Resume */}
        {resume && (
          <div className="neu-card p-6 md:p-8 mb-10 max-w-3xl mx-auto">
            <p className="text-sm font-semibold mb-2" style={{ color: 'var(--neu-text-muted)' }}>
              {resume.target.completedLevel ? `${levelLabel(resume.target.completedLevel)}を完了しました` : '前回の続き'}
            </p>
            <h2 className="text-lg md:text-2xl font-bold mb-1" style={{ color: 'var(--neu-text)' }}>
              {resume.course.name}・{levelLabel(resume.target.level)}
            </h2>
            <p className="text-sm md:text-base mb-6" style={{ color: 'var(--neu-text-muted)' }}>
              {STEPS.find(s => s.key === resume.target.lesson.step)?.label} {resume.target.lessonIndex + 1}/{resume.target.total}「{resume.target.lesson.title}」
            </p>
            <button
              onClick={() => onSelectCourse(resume.course)}
              className="neu-btn neu-btn-primary w-full py-3 text-sm md:text-base"
            >
              {resume.target.completedLevel ? `${levelLabel(resume.target.level)}に進む` : '続きから始める'}
            </button>
          </div>
        )}

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="neu-card p-6 cursor-pointer flex flex-col"
              onClick={() => onSelectCourse(course)}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="neu-square neu-square-accent w-12 h-12 text-base flex-shrink-0">
                  {course.shortLabel}
                </span>
                <div>
                  <h2 className="text-xl font-bold" style={{ color: 'var(--neu-text)' }}>
                    {course.name}
                  </h2>
                  {BEGINNER_FRIENDLY.includes(course.id) && (
                    <span className="neu-badge neu-badge-beginner px-2 py-0.5 text-xs mt-1 inline-block">
                      初心者におすすめ
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm mb-6 leading-relaxed flex-1" style={{ color: 'var(--neu-text-muted)' }}>
                {course.description}
              </p>

              <div className="flex gap-2 mb-6">
                {LEVELS.map(({ key, label }) => (
                  <span key={key} className={`neu-badge neu-badge-${key} px-3 py-1 text-xs`}>
                    {label}
                  </span>
                ))}
              </div>

              <button className="neu-btn neu-btn-primary w-full py-3 text-sm md:text-base">
                {progress[course.id] ? '続きから' : 'コースを始める'}
              </button>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="neu-card mt-16 p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--neu-text)' }}>
            OneStepについて
          </h3>
          <ul className="space-y-3 text-left" style={{ color: 'var(--neu-text-muted)' }}>
            <li>問答形式で楽しく学習できます</li>
            <li>選択肢から答えを選ぶだけです</li>
            <li>詳しい解説でなぜそれが正しいのかを理解できます</li>
            <li>初級 → 中級 → 上級と段階的に進みます</li>
            <li>進捗が自動的に保存されます</li>
            <li>ゲストモードで始められます（アカウント不要）</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
