// LP の、見出しつきの区切り。幅と余白を、ここでそろえる
import BreakText from './BreakText';

export default function LpSection({ id, title, lead, children }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-4 py-10 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: 'var(--neu-text)' }}><BreakText>{title}</BreakText></h2>
      {lead && (
        <p className="text-center text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10" style={{ color: 'var(--neu-text-muted)' }}>{lead}</p>
      )}
      {!lead && <div className="mb-8 md:mb-10" />}
      {children}
    </section>
  );
}
