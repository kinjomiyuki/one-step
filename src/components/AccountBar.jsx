// コース一覧の上に出す、契約中の人向けの表示と、契約の管理のボタン(無料の人には、何も出さない)
export default function AccountBar({ isPro, busy, onManage }) {
  if (!isPro) return null;

  return (
    <div className="max-w-3xl mx-auto mb-4 flex flex-col md:flex-row md:items-center md:justify-end gap-3">
      <span className="text-sm font-semibold text-center md:text-right" style={{ color: 'var(--neu-text-muted)' }}>
        プレミアムプランをご利用中です
      </span>
      <button
        onClick={onManage}
        disabled={busy}
        className="neu-btn px-5 py-2 text-sm font-semibold disabled:opacity-50"
      >
        契約の管理
      </button>
    </div>
  );
}
