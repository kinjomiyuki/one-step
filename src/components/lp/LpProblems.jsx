import LpSection from './LpSection';
import { PROBLEMS } from '../../data/lpContent';

export default function LpProblems() {
  return (
    <LpSection title="こんな気持ちは、ありませんか。">
      <ul className="grid gap-4 md:grid-cols-2">
        {PROBLEMS.map((text) => (
          <li
            key={text}
            className="neu-inset p-5 text-sm md:text-base leading-relaxed font-bold"
            style={{ background: '#39ff14', color: '#03210a', borderColor: '#39ff14', boxShadow: '0 0 24px rgba(57, 255, 20, 0.35)' }}
          >
            {text}
          </li>
        ))}
      </ul>
    </LpSection>
  );
}
