import { STEPS } from '../utils/progress';
import ProgressSegments from './ProgressSegments';

const LEVEL_LABELS = { beginner: '初級', intermediate: '中級', advanced: '上級' };

// 「続きの 1 問」。ホームで、いちばん大きく見せる
export default function ResumeCard({ resume, onSelectCourse }) {
  const { course, target } = resume;
  const finished = Boolean(target.completedLevel);
  const remaining = target.total - target.lessonIndex;

  return (
    <section className="neu-card p-5 md:p-6 mb-8" aria-label="続きから">
      <p className="text-xs md:text-sm" style={{ color: 'var(--neu-text-muted)' }}>
        {finished ? `${LEVEL_LABELS[target.completedLevel]}を完了しました` : '続きから'} ・ {course.name} {LEVEL_LABELS[target.level]}
      </p>
      <h2 className="text-lg md:text-2xl font-bold mt-1 mb-4" style={{ color: 'var(--neu-text)' }}>
        {target.lesson.title}
      </h2>
      <ProgressSegments
        total={target.total}
        done={target.lessonIndex}
        current={finished ? -1 : target.lessonIndex}
        label={`${target.lessonIndex} / ${target.total} 完了`}
      />
      <p className="text-xs md:text-sm mt-2 mb-5" style={{ color: 'var(--neu-text-muted)' }}>
        {STEPS.find((s) => s.key === target.lesson.step)?.label} ・ {target.lessonIndex + 1} / {target.total}
        {!finished && ` ・ このレベルは、残り ${remaining} レッスン`}
      </p>
      <button onClick={() => onSelectCourse(course)} className="neu-btn neu-btn-primary w-full py-4 text-base md:text-lg">
        {finished ? `${LEVEL_LABELS[target.level]}に進む` : '続きの 1 問へ'}
      </button>
    </section>
  );
}
