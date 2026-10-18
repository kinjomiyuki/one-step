import { PRICE_LABEL } from '../utils/plans';

// コース一覧の上に出す、現在のプランの表示と、購入・管理のボタン
export default function AccountBar({ isPro, busy, onUpgrade, onManage }) {
  return (
    <div className="max-w-6xl mx-auto mb-6 flex flex-col md:flex-row md:items-center md:justify-end gap-3">
      <span className="text-sm font-semibold text-center md:text-right" style={{ color: 'var(--neu-text-muted)' }}>
        {isPro ? 'プレミアムプランをご利用中です' : '無料プラン(初級が学べます)'}
      </span>
      <button
        onClick={isPro ? onManage : onUpgrade}
        disabled={busy}
        className={`neu-btn px-5 py-2 text-sm font-semibold disabled:opacity-50 ${isPro ? '' : 'neu-btn-primary'}`}
      >
        {isPro ? '契約の管理' : `プレミアムを始める(${PRICE_LABEL})`}
      </button>
    </div>
  );
}
