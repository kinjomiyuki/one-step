import LpSection from './LpSection';
import { COURSE_NAMES, LEVELS } from '../../data/lpContent';

export default function LpCourses() {
  return (
    <LpSection
      id="courses"
      title={`${COURSE_NAMES.length} のコースを、3 つのレベルで。`}
      lead="Web の見た目づくりから、データベース、サーバー側まで。気になるものから、選べます。"
    >
      <ul className="flex flex-wrap justify-center gap-3 mb-10">
        {COURSE_NAMES.map((name) => (
          <li key={name} className="neu-badge px-4 py-2 text-sm" style={{ color: 'var(--neu-text)' }}>{name}</li>
        ))}
      </ul>
      <ol className="grid gap-4 md:grid-cols-3">
        {LEVELS.map(([name, body]) => (
          <li key={name} className="neu-inset p-5">
            <h3 className="font-bold mb-1" style={{ color: 'var(--neu-text)' }}>{name}</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--neu-text-muted)' }}>{body}</p>
          </li>
        ))}
      </ol>
    </LpSection>
  );
}
