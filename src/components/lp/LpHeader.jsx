import LpCtaButton from './LpCtaButton';

export default function LpHeader() {
  return (
    <header className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
      <span className="text-xl font-bold" style={{ color: 'var(--neu-text)' }}>OneStep</span>
      <LpCtaButton>無料で始める</LpCtaButton>
    </header>
  );
}
