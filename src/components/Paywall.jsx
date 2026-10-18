import { useState } from 'react';
import RestoreForm from './RestoreForm';
import { PRICE_LABEL } from '../utils/plans';

const BENEFITS = [
  '全コースの、中級・上級が学べます',
  'チャットで、質問に AI がお答えします',
  '新しいコースが増えたときも、追加料金はありません'
];

export default function Paywall({ title, busy, onUpgrade, onRestore }) {
  const [showRestore, setShowRestore] = useState(false);

  return (
    <div className="neu-card p-6 md:p-8">
      <p className="text-sm font-semibold mb-2" style={{ color: 'var(--neu-text-muted)' }}>プレミアムプラン</p>
      <h2 className="text-lg md:text-2xl font-bold mb-4" style={{ color: 'var(--neu-text)' }}>
        {title || 'この先は、プレミアムプランで学べます'}
      </h2>

      <ul className="mb-6 space-y-2 text-sm md:text-base" style={{ color: 'var(--neu-text)' }}>
        {BENEFITS.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>

      <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: 'var(--neu-text)' }}>{PRICE_LABEL}</p>
      <p className="text-xs md:text-sm mb-6" style={{ color: 'var(--neu-text-muted)' }}>
        いつでも解約できます。お支払いは、Stripe で安全に処理されます。
      </p>

      <button
        onClick={onUpgrade}
        disabled={busy}
        className="neu-btn neu-btn-primary w-full py-3 text-sm md:text-base font-semibold mb-4 disabled:opacity-50"
      >
        プレミアムを始める
      </button>

      <button
        onClick={() => setShowRestore(!showRestore)}
        className="text-sm underline mb-3"
        style={{ color: 'var(--neu-text-muted)' }}
      >
        すでに購入済みの方はこちら
      </button>
      {showRestore && <RestoreForm busy={busy} onRestore={onRestore} />}
    </div>
  );
}
