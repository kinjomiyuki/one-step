import { useState } from 'react';

// 選択肢ごとのおすすめコースと理由
const CHOICES = [
  {
    key: 'web',
    label: 'Webサイトを作ってみたい',
    courseId: 'html',
    reason: 'Webページの骨組みを作るHTMLは、書いた結果がすぐ画面に見えるので最初の一歩に最適です。'
  },
  {
    key: 'automation',
    label: '作業の自動化やデータ処理をしたい',
    courseId: 'python',
    reason: 'Pythonは文法がシンプルで、ファイル整理や集計などの自動化によく使われる言語です。'
  },
  {
    key: 'unsure',
    label: 'まだ分からない',
    courseId: 'html',
    reason: 'まずは画面に結果が見えるHTMLから始めると、プログラミングの感覚をつかみやすくなります。'
  }
];

export default function Onboarding({ courses, onStart, onDismiss }) {
  const [choice, setChoice] = useState(null);
  const course = choice && courses.find(c => c.id === choice.courseId);

  return (
    <div className="neu-card p-6 md:p-8 mb-8">
      {!course ? (
        <>
          <p className="text-sm font-semibold mb-2" style={{ color: 'var(--neu-text-muted)' }}>
            はじめての方へ
          </p>
          <h2 className="text-lg md:text-2xl font-bold mb-6" style={{ color: 'var(--neu-text)' }}>
            プログラミングで何をしてみたいですか？
          </h2>
          <div className="space-y-3 mb-6">
            {CHOICES.map(item => (
              <button
                key={item.key}
                onClick={() => setChoice(item)}
                className="neu-btn w-full py-3 px-4 text-left text-sm md:text-base font-semibold"
              >
                {item.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="text-sm font-semibold mb-2" style={{ color: 'var(--neu-text-muted)' }}>
            あなたへのおすすめ
          </p>
          <div className="flex items-center gap-3 mb-3">
            <span className="neu-square neu-square-accent w-12 h-12 text-base flex-shrink-0">
              {course.shortLabel}
            </span>
            <h2 className="text-lg md:text-2xl font-bold" style={{ color: 'var(--neu-text)' }}>
              {course.name}
            </h2>
          </div>
          <p className="text-sm md:text-base mb-2" style={{ color: 'var(--neu-text-muted)' }}>
            {course.description}
          </p>
          <p className="text-sm md:text-base mb-6" style={{ color: 'var(--neu-text)' }}>
            {choice.reason}
          </p>
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <button
              onClick={() => onStart(course)}
              className="neu-btn neu-btn-primary flex-1 py-3 text-sm md:text-base"
            >
              このコースで始める
            </button>
            <button
              onClick={onDismiss}
              className="neu-btn flex-1 py-3 text-sm md:text-base"
            >
              ほかのコースを見る
            </button>
          </div>
        </>
      )}
      <div className="text-center">
        <button
          onClick={onDismiss}
          className="text-sm underline"
          style={{ color: 'var(--neu-text-muted)' }}
        >
          スキップ
        </button>
      </div>
    </div>
  );
}
