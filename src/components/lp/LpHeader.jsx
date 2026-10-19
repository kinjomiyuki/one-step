import { useEffect, useState } from 'react';
import LpCtaButton from './LpCtaButton';

// スクロールしても、上に残る。黒い 3D の場面の上では、黒く、そのあとの白い区切りでは、白くなる
export default function LpHeader() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stage = document.querySelector('[data-lp-stage]');
    if (!stage || !('IntersectionObserver' in window)) return undefined;
    // 画面の上端(ヘッダーの位置)に、黒い場面が、重なっているかを見る
    const observer = new IntersectionObserver(([entry]) => setDark(entry.isIntersecting), {
      rootMargin: '0px 0px -94% 0px'
    });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 transition-colors duration-300" style={{ background: dark ? '#000' : 'var(--neu-bg)' }}>
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-xl font-bold transition-colors duration-300" style={{ color: dark ? '#eafff0' : 'var(--neu-text)' }}>OneStep</span>
        <LpCtaButton glow={dark}>無料で始める</LpCtaButton>
      </div>
    </header>
  );
}
