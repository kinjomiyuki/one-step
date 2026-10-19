import LpSection from './LpSection';
import { STEPS } from '../../data/lpContent';

export default function LpSteps() {
  return (
    <LpSection title="始め方は、3 ステップ。">
      <ol className="grid gap-5 md:grid-cols-3">
        {STEPS.map(([title, body], i) => (
          <li key={title} className="neu-card p-6">
            <p className="neu-inset inline-flex items-center justify-center w-10 h-10 font-bold mb-3" style={{ color: 'var(--neu-text)', borderRadius: '12px' }}>{i + 1}</p>
            <h3 className="font-bold pb-2 mb-3 border-b" style={{ color: 'var(--neu-text)', borderColor: 'var(--lp-line)' }}>{title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--neu-text-muted)' }}>{body}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-center text-sm" style={{ color: 'var(--neu-text-muted)' }}>
        スマホのブラウザの「ホーム画面に追加」を使うと、アプリのように、ワンタップで開けます。
      </p>
    </LpSection>
  );
}
