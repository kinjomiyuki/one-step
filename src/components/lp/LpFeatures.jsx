import LpSection from './LpSection';
import { FEATURES } from '../../data/lpContent';

export default function LpFeatures() {
  return (
    <LpSection title={`続けやすい、${FEATURES.length} つの理由。`} lead="時間も、お金も、限られている人が、無理なく、続けられるように。">
      <ul className="grid gap-5 md:grid-cols-2">
        {FEATURES.map(([title, body]) => (
          <li key={title} className="neu-card p-6">
            <h3 className="font-bold mb-2" style={{ color: 'var(--neu-text)' }}>{title}</h3>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--neu-text-muted)' }}>{body}</p>
          </li>
        ))}
      </ul>
    </LpSection>
  );
}
