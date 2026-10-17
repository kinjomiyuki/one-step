// 解説やお題に添えるコード例
export function CodeBlock({ code }) {
  return (
    <pre
      className="rounded-xl p-4 mb-3 overflow-x-auto text-xs md:text-sm leading-relaxed"
      style={{ background: '#2b2f3a', color: '#f1f3f7' }}
    >
      <code>{code}</code>
    </pre>
  );
}

// ① 基礎知識：テストの前に読む解説
export default function BasicsView({ lesson, navigation }) {
  return (
    <div className="neu-card p-6 md:p-8">
      <div className="space-y-6 mb-8">
        {lesson.sections.map((section, i) => (
          <section key={section.heading}>
            <h3 className="text-base md:text-xl font-bold mb-2" style={{ color: 'var(--neu-text)' }}>
              {i + 1}. {section.heading}
            </h3>
            <p className="text-sm md:text-base leading-relaxed mb-3" style={{ color: 'var(--neu-text)' }}>
              {section.body}
            </p>
            {section.code && <CodeBlock code={section.code} />}
            {section.example && (
              <div className="neu-inset rounded-2xl p-4">
                <p className="text-xs md:text-sm font-semibold mb-1" style={{ color: 'var(--neu-text-muted)' }}>例えば</p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--neu-text)' }}>{section.example}</p>
              </div>
            )}
          </section>
        ))}
      </div>
      {navigation}
    </div>
  );
}
