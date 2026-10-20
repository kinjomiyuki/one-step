import LpSection from './LpSection';
import { FEATURES } from '../../data/lpContent';
import { GREEN_CARD_STYLE, ON_GREEN_TEXT } from './greenCard';

export default function LpFeatures() {
  return (
    <LpSection title={`続けやすい、${FEATURES.length} つの理由。`} lead="時間も、お金も、限られている人が、無理なく、続けられるように。">
      <ul className="grid gap-5 md:grid-cols-2">
        {FEATURES.map(([title, body]) => (
          <li key={title} className="neu-card p-6" style={GREEN_CARD_STYLE}>
            <h3 className="font-bold pb-2 mb-3 border-b" style={{ ...ON_GREEN_TEXT, borderColor: '#ffffff' }}>{title}</h3>
            <p className="text-sm md:text-base leading-relaxed" style={ON_GREEN_TEXT}>{body}</p>
          </li>
        ))}
      </ul>
    </LpSection>
  );
}
