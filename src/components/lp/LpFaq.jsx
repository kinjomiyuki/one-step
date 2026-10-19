import LpSection from './LpSection';
import { FAQ } from '../../data/lpContent';

// 開閉は、ブラウザ標準の details で行う(スクリプトは、要らない)
export default function LpFaq() {
  return (
    <LpSection title="よくある質問">
      <div className="space-y-4 max-w-3xl mx-auto">
        {FAQ.map(([q, a]) => (
          <details key={q} className="neu-inset p-5">
            <summary className="font-bold cursor-pointer text-sm md:text-base" style={{ color: 'var(--neu-text)' }}>{q}</summary>
            <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: 'var(--neu-text-muted)' }}>{a}</p>
          </details>
        ))}
      </div>
    </LpSection>
  );
}
