import { isLevelLocked } from '../utils/plans';

const LEVELS = [
  { key: 'beginner', label: '初級' },
  { key: 'intermediate', label: '中級' },
  { key: 'advanced', label: '上級' }
];

export default function LevelSelector({ level, isPro, onChange }) {
  return (
    <div className="flex gap-3 mb-6">
      {LEVELS.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`neu-btn px-4 py-2 font-semibold text-sm md:text-base ${level === key ? 'neu-btn-primary' : ''}`}
        >
          {label}
          {isLevelLocked(key, isPro) && (
            <span className="ml-1 text-xs font-bold" style={{ color: 'var(--neu-text-muted)' }}>有料</span>
          )}
        </button>
      ))}
    </div>
  );
}
