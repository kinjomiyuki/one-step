import { memo, useMemo } from 'react';
import { buildLayerLines } from '../../data/lpCode';
import { tokenizeLine, TOKEN_COLORS } from './codeTokens';

// コードの板 1 枚。同じ内容を、2 回、縦に並べておき、流れ続けても、途切れないようにする。
// 位置と動きは、親(LpScrollStage)が、スクロールに合わせて、直接、書き換える
function LpCodeLayer({ index, lineHeight, wrapperRef, flowRef }) {
  const lines = useMemo(
    () => buildLayerLines(index).map((line) => ({ line, tokens: tokenizeLine(line) })),
    [index]
  );

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 overflow-hidden pointer-events-none select-none"
      style={{
        willChange: 'transform, opacity',
        opacity: 0,
        maskImage: 'linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent)'
      }}
    >
      <div ref={flowRef} style={{ willChange: 'transform' }}>
        {[0, 1].map((copy) => (
          <pre
            key={copy}
            className="m-0 font-mono whitespace-pre"
            style={{ fontSize: `${lineHeight - 4}px`, lineHeight: `${lineHeight}px`, textShadow: '0 0 6px rgba(57, 255, 20, 0.45)' }}
          >
            {lines.map(({ tokens }, row) => (
              <div key={row} style={{ height: `${lineHeight}px` }}>
                {tokens.map((t, k) => (
                  <span key={k} style={{ color: TOKEN_COLORS[t.type] }}>{t.text}</span>
                ))}
              </div>
            ))}
          </pre>
        ))}
      </div>
    </div>
  );
}

export default memo(LpCodeLayer);
