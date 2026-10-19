import LpCtaButton from './LpCtaButton';

// スクロールしても、上に残る。3D の場面の途中でも、いつでも、始められる
export default function LpHeader() {
  return (
    <header className="sticky top-0 z-30" style={{ background: 'var(--neu-bg)' }}>
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-xl font-bold" style={{ color: 'var(--neu-text)' }}>OneStep</span>
        <LpCtaButton>無料で始める</LpCtaButton>
      </div>
    </header>
  );
}
