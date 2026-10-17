import { STEPS } from '../utils/progress';

// レベル内の4ステップ（基礎知識 → 知識テスト → 実践シミュレーション → 思考力トレーニング）の進み具合
export default function StepIndicator({ content, currentStep, completed }) {
  const steps = STEPS.filter(s => content.some(item => item.step === s.key));
  if (steps.length < 2) return null;

  return (
    <ol className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      {steps.map((s, i) => {
        const items = content.filter(item => item.step === s.key);
        const done = items.every(item => completed.includes(item.id));
        const current = s.key === currentStep;
        return (
          <li
            key={s.key}
            className={`${current ? 'neu-inset' : 'neu-card-flat'} rounded-2xl p-3 flex items-center gap-2`}
            aria-current={current ? 'step' : undefined}
          >
            <span
              className={`neu-square w-8 h-8 text-sm flex-shrink-0 ${current ? 'neu-square-accent' : ''}`}
              style={done && !current ? { background: 'var(--neu-green)', color: 'var(--neu-on-green)' } : undefined}
            >
              {i + 1}
            </span>
            <span className="text-xs md:text-sm font-semibold leading-tight" style={{ color: current ? 'var(--neu-text)' : 'var(--neu-text-muted)' }}>
              {s.label}
              {done && <span className="block text-xs font-normal">完了</span>}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
