import LpSection from './LpSection';
import { SOLUTION } from '../../data/lpContent';

export default function LpSolution() {
  return (
    <LpSection title={SOLUTION.title} lead={SOLUTION.body}>
      <ol className="grid gap-4 md:grid-cols-4">
        {SOLUTION.flow.map(([title, body], i) => (
          <li key={title} className="neu-card-flat p-5">
            <p className="text-xs font-bold mb-2" style={{ color: 'var(--neu-text-muted)' }}>{i + 1}</p>
            <h3 className="font-bold mb-2" style={{ color: 'var(--neu-text)' }}>{title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--neu-text-muted)' }}>{body}</p>
          </li>
        ))}
      </ol>
    </LpSection>
  );
}
