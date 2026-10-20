import LpSection from './LpSection';
import { FEATURES } from '../../data/lpContent';

// 白い文字が読めるように、地は、少し深いグリーン(白との差が、4.5 以上)。縁と光は、蛍光グリーンのまま
const TEXT_SHADOW = '0 1px 3px rgba(0, 40, 10, 0.55)';

export default function LpFeatures() {
  return (
    <LpSection title={`続けやすい、${FEATURES.length} つの理由。`} lead="時間も、お金も、限られている人が、無理なく、続けられるように。">
      <ul className="grid gap-5 md:grid-cols-2">
        {FEATURES.map(([title, body]) => (
          <li
            key={title}
            className="neu-card p-6"
            style={{ background: '#0a8522', borderColor: '#39ff14', boxShadow: '0 0 24px rgba(57, 255, 20, 0.35)' }}
          >
            <h3 className="font-bold pb-2 mb-3 border-b" style={{ color: '#ffffff', borderColor: '#ffffff', textShadow: TEXT_SHADOW }}>{title}</h3>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: '#ffffff', textShadow: TEXT_SHADOW }}>{body}</p>
          </li>
        ))}
      </ul>
    </LpSection>
  );
}
