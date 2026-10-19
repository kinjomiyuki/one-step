import LpCtaButton from './LpCtaButton';
import BreakText from './BreakText';
import { FINAL_CTA } from '../../data/lpContent';

export default function LpFinalCta() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 md:py-20">
      <div className="neu-card p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--neu-text)' }}><BreakText>{FINAL_CTA.title}</BreakText></h2>
        <p className="text-sm md:text-base mb-8" style={{ color: 'var(--neu-text-muted)' }}>{FINAL_CTA.body}</p>
        <LpCtaButton large>{FINAL_CTA.cta}</LpCtaButton>
      </div>
    </section>
  );
}
