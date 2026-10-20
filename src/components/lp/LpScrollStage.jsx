import { useEffect, useRef } from 'react';
import LpCodeLayer from './LpCodeLayer';
import LpCtaButton from './LpCtaButton';
import LpPhoneMock from './LpPhoneMock';
import BreakText from './BreakText';
import { HERO, SCENES } from '../../data/lpContent';
import {
  LAYER_COUNT, SCENE_WINDOWS, clamp, flowOffset, layerOpacity, layerZ, sceneOpacity, smooth
} from './stageMath';

// 黒い背景の上の、文字の枠と、色(蛍光の緑を、軸にする)
const DARK = {
  card: {
    background: 'rgba(5, 10, 6, 0.8)',
    border: '1px solid rgba(57, 255, 20, 0.35)',
    borderRadius: '24px',
    boxShadow: '0 0 48px rgba(57, 255, 20, 0.14)',
    backdropFilter: 'blur(6px)'
  },
  title: '#eafff0',
  text: '#9dd8ac',
  note: '#7fb98d'
};

const SCENE_IDS = ['intro', 'message', 'phone', 'cta'];
const LAYERS = Array.from({ length: LAYER_COUNT }, (_, i) => ({
  index: i,
  side: i % 2 === 0 ? -1 : 1, // 左と右に、交互に並べて、真ん中を、文字の場所にする
  speed: 1.2 + (i % 4) * 0.45 // 板ごとに、コードの流れる速さを変える
}));

// スクロールの間、画面に固定されて、カメラが、コードの板の廊下を、前へ進む 3D の場面。
// 進み具合は、CSS の変数や、React の状態ではなく、要素の style を、直接、書き換えて反映する(毎フレームの再描画を避けるため)
export default function LpScrollStage() {
  const trackRef = useRef(null);
  const worldRef = useRef(null);
  const layerRefs = useRef([]);
  const flowRefs = useRef([]);
  const sceneRefs = useRef({});
  const phoneRef = useRef(null);
  const barRef = useRef(null);
  const hintRef = useRef(null);

  useEffect(() => {
    let vw = window.innerWidth;
    let vh = window.innerHeight;
    let target = 0;
    let current = 0;
    let raf = 0;

    const lineHeight = () => (vw < 768 ? 14 : 16);
    const blockHeight = () => lineHeight() * 40;

    const layout = () => {
      vw = window.innerWidth;
      vh = window.innerHeight;
      const mobile = vw < 768;
      const width = mobile ? vw * 0.62 : Math.min(vw * 0.36, 520);
      const height = Math.min(blockHeight() * 0.9, vh * 0.85);
      layerRefs.current.forEach((el) => {
        if (!el) return;
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
        el.style.marginLeft = `${-width / 2}px`;
        el.style.marginTop = `${-height / 2}px`;
      });
    };

    const render = (p) => {
      const mobile = vw < 768;
      const offsetX = vw * (mobile ? 0.27 : 0.3);

      // 廊下全体を、スクロールに合わせて、わずかに傾ける(奥行きを、感じやすくする)
      if (worldRef.current) {
        worldRef.current.style.transform = `rotateX(${3 + p * 3}deg) rotateY(${(p - 0.5) * -10}deg)`;
      }

      LAYERS.forEach(({ index, side, speed }) => {
        const wrapper = layerRefs.current[index];
        const flow = flowRefs.current[index];
        if (!wrapper || !flow) return;
        const z = layerZ(index, p);
        const opacity = layerOpacity(z);
        wrapper.style.opacity = String(opacity);
        wrapper.style.visibility = opacity < 0.01 ? 'hidden' : 'visible';
        wrapper.style.transform = `translate3d(${side * offsetX}px, 0, ${z}px) rotateY(${side * -16}deg)`;
        flow.style.transform = `translate3d(0, ${flowOffset(index, p, blockHeight(), speed)}px, 0)`;
      });

      SCENE_IDS.forEach((id) => {
        const el = sceneRefs.current[id];
        if (!el) return;
        const o = sceneOpacity(p, SCENE_WINDOWS[id]);
        el.style.opacity = String(o);
        el.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        el.style.transform = `translate3d(0, ${(1 - o) * 28}px, 0)`;
        el.style.pointerEvents = o > 0.6 ? 'auto' : 'none';
      });

      if (phoneRef.current) {
        const s = sceneOpacity(p, SCENE_WINDOWS.phone);
        phoneRef.current.style.transform = `translate3d(0, ${(1 - s) * 40}vh, 0) rotateY(${(1 - s) * -24 + (p - 0.7) * 10}deg)`;
      }
      if (barRef.current) barRef.current.style.width = `${p * 100}%`;
      // 最後の場面では、「スクロールして」の案内は、要らない
      if (hintRef.current) hintRef.current.style.opacity = String(1 - smooth(0.85, 0.95, p));
    };

    const readTarget = () => {
      const rect = trackRef.current.getBoundingClientRect();
      const total = rect.height - vh;
      target = total > 0 ? clamp(-rect.top / total) : 0;
    };

    // スクロールに、少し遅れて追いつくように動かす(カクつきを、なめらかにする)
    const tick = () => {
      current += (target - current) * 0.14;
      if (Math.abs(target - current) < 0.0004) current = target;
      render(current);
      raf = current === target ? 0 : requestAnimationFrame(tick);
    };
    const kick = () => {
      readTarget();
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onResize = () => {
      layout();
      kick();
    };

    layout();
    readTarget();
    current = target;
    render(current);
    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', kick);
      window.removeEventListener('resize', onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const lineHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? 14 : 16;
  const setScene = (id) => (el) => { sceneRefs.current[id] = el; };
  const cardClass = 'p-6 md:p-10 text-center max-w-xl w-full';

  return (
    <div ref={trackRef} data-lp-stage className="relative" style={{ height: '480vh', background: '#000' }}>
      <div className="sticky top-0 overflow-hidden" style={{ height: '100svh', minHeight: '560px', background: '#000' }}>
        {/* コードの廊下(奥行き) */}
        <div className="absolute inset-0" style={{ perspective: '900px', perspectiveOrigin: '50% 45%' }}>
          <div ref={worldRef} className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
            {LAYERS.map(({ index }) => (
              <LpCodeLayer
                key={index}
                index={index}
                lineHeight={lineHeight}
                wrapperRef={(el) => { layerRefs.current[index] = el; }}
                flowRef={(el) => { flowRefs.current[index] = el; }}
              />
            ))}
          </div>
        </div>

        {/* 場面ごとの文章(スクロールの進み具合で、切り替わる) */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div ref={setScene('intro')} className={cardClass} style={DARK.card}>
            <p className="inline-block px-4 py-1 text-xs md:text-sm mb-5" style={{ color: DARK.text, border: '1px solid rgba(57, 255, 20, 0.35)', borderRadius: '12px' }}>
              16 歳から 30 歳の、学びたいあなたへ
            </p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: DARK.title }}>
              <BreakText>{HERO.title}</BreakText>
            </h1>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: DARK.text }}>{HERO.lead}</p>
            <LpCtaButton large>{HERO.cta}</LpCtaButton>
            <p className="mt-4 text-xs" style={{ color: DARK.note }}>{HERO.note}</p>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div ref={setScene('message')} className={cardClass} style={DARK.card}>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4" style={{ color: DARK.title }}>
              <BreakText>{SCENES.message.title}</BreakText>
            </h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: DARK.text }}>{SCENES.message.body}</p>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div ref={setScene('phone')} className="w-full max-w-4xl grid gap-6 md:grid-cols-2 md:items-center">
            <div className="p-6 md:p-10 text-center md:text-left" style={DARK.card}>
              <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4" style={{ color: DARK.title }}>
                <BreakText>{SCENES.phone.title}</BreakText>
              </h2>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: DARK.text }}>{SCENES.phone.body}</p>
            </div>
            <div ref={phoneRef} style={{ perspective: '900px' }}>
              <div className="scale-75 md:scale-100 origin-top -mb-24 md:mb-0">
                <LpPhoneMock glow />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div ref={setScene('cta')} className={cardClass} style={DARK.card}>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: DARK.title }}>
              <BreakText>{SCENES.cta.title}</BreakText>
            </h2>
            <p className="text-sm md:text-base mb-6" style={{ color: DARK.text }}>{SCENES.cta.body}</p>
            <LpCtaButton large>{SCENES.cta.button}</LpCtaButton>
          </div>
        </div>

        {/* スクロールの進み具合 */}
        <div ref={hintRef} className="absolute left-4 right-4 bottom-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-80" aria-hidden="true">
          <p className="text-center text-xs mb-2" style={{ color: DARK.note }}>{SCENES.hint}</p>
          <div className="h-2 overflow-hidden" style={{ borderRadius: '8px', background: '#0b130d', border: '1px solid rgba(57, 255, 20, 0.25)' }}>
            <div ref={barRef} className="h-full" style={{ width: '0%', background: '#39ff14', boxShadow: '0 0 10px rgba(57, 255, 20, 0.7)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
