import LpSection from './LpSection';
import { PROBLEMS } from '../../data/lpContent';
import { GREEN_CARD_STYLE, ON_GREEN_TEXT } from './greenCard';

export default function LpProblems() {
  return (
    <LpSection title="こんな気持ちは、ありませんか。">
      <ul className="grid gap-4 md:grid-cols-2">
        {PROBLEMS.map((text) => (
          <li key={text} className="neu-card p-6 text-sm md:text-base leading-relaxed" style={{ ...GREEN_CARD_STYLE, ...ON_GREEN_TEXT }}>
            {text}
          </li>
        ))}
      </ul>
    </LpSection>
  );
}
