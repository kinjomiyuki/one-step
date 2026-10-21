import LevelSelector from './LevelSelector';
import Paywall from './Paywall';
import CourseMark from './CourseMark';

const LEVEL_LABELS = { beginner: '初級', intermediate: '中級', advanced: '上級' };

// プレミアムプランでないときに、中級・上級を開いた場合の画面
export default function LockedLevel({ course, level, busy, onChangeLevel, onBackToCourses, onUpgrade, onRestore }) {
  return (
    <div style={{ background: 'var(--neu-bg)', minHeight: '100vh' }} className="py-4 md:py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 md:mb-8">
          <button
            onClick={onBackToCourses}
            className="neu-btn px-4 md:px-6 py-2 text-sm md:text-base font-semibold w-full md:w-auto"
          >
            コース一覧に戻る
          </button>
        </div>

        <div className="neu-card p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <CourseMark course={course} className="w-10 h-10 md:w-12 md:h-12 text-sm md:text-base" />
            <h1 className="text-xl md:text-3xl font-bold" style={{ color: 'var(--neu-text)' }}>{course.name}</h1>
          </div>
          <LevelSelector level={level} isPro={false} onChange={onChangeLevel} />
        </div>

        <Paywall
          title={`${course.name}の${LEVEL_LABELS[level]}は、プレミアムプランで学べます`}
          busy={busy}
          onUpgrade={onUpgrade}
          onRestore={onRestore}
        />
      </div>
    </div>
  );
}
