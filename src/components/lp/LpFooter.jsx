import LegalLinks from '../LegalLinks';

export default function LpFooter() {
  return (
    <footer className="max-w-5xl mx-auto px-4 py-10 space-y-4 text-center">
      <LegalLinks />
      <p className="text-xs" style={{ color: 'var(--neu-text-muted)' }}>OneStep</p>
    </footer>
  );
}
