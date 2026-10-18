const COLORS = {
  success: 'var(--neu-green)',
  error: 'var(--neu-red)',
  info: 'var(--neu-blue)'
};

// 購入やメール送信の結果を知らせる帯。閉じるまで表示する
export default function Notice({ notice, onClose }) {
  if (!notice) return null;
  return (
    <div
      role="status"
      className="neu-card max-w-3xl mx-auto mt-4 mb-2 px-5 py-4 flex items-start gap-4"
      style={{ borderLeft: `6px solid ${COLORS[notice.type] || COLORS.info}` }}
    >
      <p className="flex-1 text-sm md:text-base" style={{ color: 'var(--neu-text)' }}>{notice.text}</p>
      <button onClick={onClose} className="text-sm font-semibold underline" style={{ color: 'var(--neu-text-muted)' }}>
        閉じる
      </button>
    </div>
  );
}
