import LpCtaButton from './LpCtaButton';
import LpPhoneMock from './LpPhoneMock';
import BreakText from './BreakText';
import { HERO } from '../../data/lpContent';

export default function LpHero() {
  return (
    <section className="max-w-5xl mx-auto px-4 pt-8 pb-12 md:pt-14 md:pb-20 grid gap-10 md:grid-cols-2 md:items-center">
      <div className="text-center md:text-left">
        <p className="neu-badge px-4 py-1 text-xs md:text-sm mb-6" style={{ color: 'var(--neu-text-muted)' }}>
          16 歳から 30 歳の、学びたいあなたへ
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: 'var(--neu-text)' }}>
          <BreakText>{HERO.title}</BreakText>
        </h1>
        <p className="text-sm md:text-lg leading-relaxed mb-8" style={{ color: 'var(--neu-text-muted)' }}>{HERO.lead}</p>
        <LpCtaButton large>{HERO.cta}</LpCtaButton>
        <p className="mt-4 text-xs md:text-sm" style={{ color: 'var(--neu-text-muted)' }}>{HERO.note}</p>
        <p className="mt-6 text-sm">
          <a href="#courses" className="underline" style={{ color: 'var(--neu-text-muted)' }}>学べるコースを見る</a>
        </p>
      </div>
      <LpPhoneMock />
    </section>
  );
}
