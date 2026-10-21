const TABS = [
  { key: 'home', label: 'ホーム' },
  { key: 'courses', label: 'コース' },
  { key: 'record', label: '記録' }
];

// 画面の下の、移動のタブ。学習中の画面では、出さない
export default function BottomTabs({ active, onSelect }) {
  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-20 grid grid-cols-3 gap-2 px-4 pt-2 pb-3"
      style={{ background: 'var(--neu-bg)', boxShadow: '0 -6px 14px rgba(198, 203, 214, 0.5)' }}
      aria-label="画面の切り替え"
    >
      {TABS.map(({ key, label }) => {
        const current = key === active;
        return (
          <button
            key={key}
            onClick={() => onSelect(key)}
            aria-current={current ? 'page' : undefined}
            className="py-3 text-sm font-bold"
            style={{
              borderRadius: '14px',
              background: current ? 'var(--neu-accent)' : 'transparent',
              color: current ? 'var(--neu-on-accent)' : 'var(--neu-text-muted)'
            }}
          >
            {label}
          </button>
        );
      })}
    </nav>
  );
}
