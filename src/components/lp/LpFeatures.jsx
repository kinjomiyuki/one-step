import LpSection from './LpSection';
import { FEATURES } from '../../data/lpContent';

export default function LpFeatures() {
  return (
    <LpSection title={`続けやすい、${FEATURES.length} つの理由。`} lead="時間も、お金も、限られている人が、無理なく、続けられるように。">
      <ul className="grid gap-5 md:grid-cols-2">
        {FEATURES.map(([title, body]) => (
          <li
            key={title}
            className="neu-card p-6"
            style={{ background: '#39ff14', borderColor: '#39ff14', boxShadow: '0 0 24px rgba(57, 255, 20, 0.35)' }}
          >
            <h3 className="font-bold pb-2 mb-3 border-b" style={{ color: '#03210a', borderColor: 'rgba(3, 33, 10, 0.35)' }}>{title}</h3>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: '#06351a' }}>{body}</p>
          </li>
        ))}
      </ul>
    </LpSection>
  );
}
