import { STEPS } from '../utils/progress';

const stepLabel = (key) => STEPS.find((s) => s.key === key)?.label;

// レベルの、レッスンの道すじ。終わったもの、いま、これから、を縦に並べる(見るだけ。順番に、進む)
export default function LessonPath({ content, currentIndex, completed }) {
  const doneCount = content.filter((item) => completed.includes(item.id)).length;
  return (
    <details className="mb-6">
      <summary className="cursor-pointer text-sm md:text-base font-semibold" style={{ color: 'var(--neu-text-muted)' }}>
        レベルの道すじ({doneCount} / {content.length} 完了)
      </summary>
      <ol className="mt-4 space-y-3">
        {content.map((item, i) => {
          const done = completed.includes(item.id);
          const now = i === currentIndex;
          const badge = now
            ? { className: 'neu-square-accent' }
            : done
              ? { style: { background: 'var(--neu-green)', color: 'var(--neu-on-green)' } }
              : {};
          return (
            <li
              key={item.id}
              className={`${now ? 'neu-card-flat' : 'neu-inset'} p-3 flex items-center gap-3 rounded-2xl`}
              aria-current={now ? 'step' : undefined}
            >
              <span className={`neu-square w-9 h-9 text-xs flex-shrink-0 ${badge.className || ''}`} style={badge.style}>{i + 1}</span>
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-bold truncate" style={{ color: done || now ? 'var(--neu-text)' : 'var(--neu-text-muted)' }}>{item.title}</span>
                <span className="block text-xs" style={{ color: 'var(--neu-text-muted)' }}>{stepLabel(item.step)}{done ? ' ・ 完了' : ''}</span>
              </span>
              {now && <span className="text-xs font-bold px-3 py-1" style={{ background: 'var(--neu-accent)', color: 'var(--neu-on-accent)', borderRadius: '10px' }}>いま</span>}
            </li>
          );
        })}
      </ol>
    </details>
  );
}
