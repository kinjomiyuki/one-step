import { Fragment } from 'react';

// 見出しを、読点(、)の位置で折り返す。単語の途中で、切れないようにする
export default function BreakText({ children }) {
  const parts = String(children).split(/(?<=、)/);
  return (
    <span style={{ wordBreak: 'keep-all', overflowWrap: 'anywhere' }}>
      {parts.map((part, i) => (
        <Fragment key={i}>{part}{i < parts.length - 1 && <wbr />}</Fragment>
      ))}
    </span>
  );
}
