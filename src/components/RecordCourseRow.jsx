import { getLevelProgress } from '../utils/progress';
import CourseMark from './CourseMark';

const LEVEL_LABELS = { beginner: '初級', intermediate: '中級', advanced: '上級' };

// コース 1 件の、レベルごとの進み具合
export default function RecordCourseRow({ course, courseProgress }) {
  const levels = getLevelProgress(course, courseProgress);
  return (
    <li className="neu-card-flat p-4">
      <div className="flex items-center gap-3 mb-3">
        <CourseMark course={course} className="w-10 h-10 text-xs" />
        <span className="font-bold" style={{ color: 'var(--neu-text)' }}>{course.name}</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {levels.map(({ level, done, total }) => (
          <div key={level}>
            <p className="text-xs mb-1" style={{ color: 'var(--neu-text-muted)' }}>{LEVEL_LABELS[level]} {done} / {total}</p>
            <div className="neu-progress-track h-2">
              <div className="neu-progress-fill h-2" style={{ width: total === 0 ? '0%' : `${(done / total) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </li>
  );
}
