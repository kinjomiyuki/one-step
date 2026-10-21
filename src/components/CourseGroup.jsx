import { getCourseColor } from '../data/courseMeta';
import CourseRow from './CourseRow';

const BEGINNER_FRIENDLY = ['html', 'python'];

// 同じ系統のコースを、学ぶ順に並べる。見出しの「学ぶ順」でも、同じ色を使って、つながりを見せる
export default function CourseGroup({ group, courses, excludeId, progress, onSelect }) {
  const ordered = group.courseIds.filter((id) => id !== excludeId).map((id) => courses.find((c) => c.id === id)).filter(Boolean);
  if (ordered.length === 0) return null;

  return (
    <section className="mb-8" aria-label={group.label}>
      <h3 className="font-bold text-base md:text-lg" style={{ color: 'var(--neu-text)' }}>{group.label}</h3>
      <p className="text-xs md:text-sm mb-2" style={{ color: 'var(--neu-text-muted)' }}>{group.hint}</p>
      {group.courseIds.length > 1 && (
        <ol className="flex flex-wrap items-center gap-x-1 gap-y-2 mb-3" aria-label="学ぶ順">
          {group.courseIds.map((id, i) => {
            const course = courses.find((c) => c.id === id);
            if (!course) return null;
            return (
              <li key={id} className="flex items-center gap-1">
                {i > 0 && <span className="text-xs" style={{ color: 'var(--neu-text-muted)' }} aria-hidden="true">→</span>}
                <span className="text-xs font-bold px-3 py-1" style={{ ...getCourseColor(id), borderRadius: '10px' }}>{course.name}</span>
              </li>
            );
          })}
        </ol>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {ordered.map((course) => (
          <CourseRow
            key={course.id}
            course={course}
            progress={progress}
            recommended={BEGINNER_FRIENDLY.includes(course.id)}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}
