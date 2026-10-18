import { BUSINESS, isBusinessInfoComplete } from '../data/business';
import { LEGAL_PAGES } from '../data/legalTexts';

export default function LegalPage({ page }) {
  const content = LEGAL_PAGES[page];
  const ready = isBusinessInfoComplete();

  return (
    <div style={{ background: 'var(--neu-bg)', minHeight: '100vh' }} className="py-6 md:py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="neu-btn inline-block px-5 py-2 text-sm font-semibold mb-6">コース一覧に戻る</a>

        <div className="neu-card p-6 md:p-8">
          <h1 className="text-xl md:text-3xl font-bold mb-6" style={{ color: 'var(--neu-text)' }}>{content.title}</h1>

          {!ready && page === 'tokushoho' ? (
            <p style={{ color: 'var(--neu-text-muted)' }}>現在、準備中です。</p>
          ) : content.kind === 'table' ? (
            <dl className="space-y-4">
              {content.rows(BUSINESS).map(([label, value]) => (
                <div key={label} className="md:flex md:gap-6">
                  <dt className="font-bold md:w-48 flex-shrink-0 mb-1" style={{ color: 'var(--neu-text)' }}>{label}</dt>
                  <dd className="text-sm md:text-base" style={{ color: 'var(--neu-text-muted)' }}>{value}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <div className="space-y-6">
              {content.sections.map(([heading, body], i) => (
                <section key={heading}>
                  <h2 className="font-bold mb-2" style={{ color: 'var(--neu-text)' }}>第{i + 1}条({heading})</h2>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--neu-text-muted)' }}>{body}</p>
                </section>
              ))}
              {ready && (
                <section>
                  <h2 className="font-bold mb-2" style={{ color: 'var(--neu-text)' }}>お問い合わせ先</h2>
                  <p className="text-sm md:text-base" style={{ color: 'var(--neu-text-muted)' }}>
                    {BUSINESS.seller}({BUSINESS.email})
                  </p>
                </section>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
