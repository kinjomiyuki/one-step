import { getCompletionPercentage } from '../utils/progress';
import CourseMark from './CourseMark';

// コース 1 件の、コンパクトな行。全体が、1 つのボタン
export default function CourseRow({ course, progress, recommended, onSelect }) {
  const started = Boolean(progress[course.id]);
  const percent = started ? getCompletionPercentage([course], progress) : 0;

  return (
    <button onClick={() => onSelect(course)} className="neu-card p-4 text-left w-full flex items-center gap-4">
      <CourseMark course={course} />
      <span className="flex-1 min-w-0">
        <span className="flex items-center gap-2">
          <span className="font-bold text-base" style={{ color: 'var(--neu-text)' }}>{course.name}</span>
          {recommended && <span className="neu-badge neu-badge-beginner px-2 py-0.5 text-xs">初心者におすすめ</span>}
        </span>
        <span className="block text-xs md:text-sm truncate" style={{ color: 'var(--neu-text-muted)' }}>{course.description}</span>
        {started && (
          <span className="block mt-2">
            <span className="neu-progress-track h-2 block">
              <span className="neu-progress-fill h-2 block" style={{ width: `${percent}%` }} />
            </span>
          </span>
        )}
      </span>
      <span className="text-xs font-bold flex-shrink-0" style={{ color: 'var(--neu-text-muted)' }}>
        {started ? `${percent}%` : '始める'}
      </span>
    </button>
  );
}
