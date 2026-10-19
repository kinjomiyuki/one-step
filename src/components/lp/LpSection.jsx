import { useEffect, useRef, useState } from 'react';
import BreakText from './BreakText';

// LP の、見出しつきの区切り。幅と余白を、ここでそろえる。画面に入ると、奥から、ふわっと現れる
export default function LpSection({ id, title, lead, children }) {
  const ref = useRef(null);
  // 動きを減らす設定や、対応していないブラウザでは、最初から、表示しておく
  const [shown, setShown] = useState(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)
  );

  useEffect(() => {
    if (shown) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShown(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [shown]);

  return (
    <section id={id} ref={ref} className="max-w-5xl mx-auto px-4 py-10 md:py-16">
      <div
        className="transition duration-700 ease-out"
        style={{
          opacity: shown ? 1 : 0,
          transform: shown ? 'none' : 'perspective(900px) translate3d(0, 36px, -60px) rotateX(8deg)'
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: 'var(--neu-text)' }}>
          <BreakText>{title}</BreakText>
        </h2>
        {lead && (
          <p className="text-center text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10" style={{ color: 'var(--neu-text-muted)' }}>{lead}</p>
        )}
        {!lead && <div className="mb-8 md:mb-10" />}
        {children}
      </div>
    </section>
  );
}
