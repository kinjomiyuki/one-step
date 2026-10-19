import LpSection from './LpSection';
import { PROBLEMS } from '../../data/lpContent';

export default function LpProblems() {
  return (
    <LpSection title="こんな気持ちは、ありませんか。">
      <ul className="grid gap-4 md:grid-cols-2">
        {PROBLEMS.map((text) => (
          <li key={text} className="neu-inset p-5 text-sm md:text-base leading-relaxed" style={{ color: 'var(--neu-text)' }}>{text}</li>
        ))}
      </ul>
    </LpSection>
  );
}
