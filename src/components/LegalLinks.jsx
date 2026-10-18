import { isBusinessInfoComplete } from '../data/business';

const LINKS = [
  ['/tokushoho', '特定商取引法に基づく表記'],
  ['/terms', '利用規約'],
  ['/privacy', 'プライバシーポリシー']
];

// 事業者の情報が、すべて記入されるまでは、何も表示しない
export default function LegalLinks() {
  if (!isBusinessInfoComplete()) return null;
  return (
    <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs md:text-sm" aria-label="法務に関する表記">
      {LINKS.map(([href, label]) => (
        <a key={href} href={href} className="underline" style={{ color: 'var(--neu-text-muted)' }}>{label}</a>
      ))}
    </nav>
  );
}
