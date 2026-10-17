import { useRef, useState } from 'react';
import { CodeBlock } from './BasicsView';

const ANSWERS_KEY = 'oneStepThinkingAnswers';
const MIN_LENGTH = 30;

function loadAnswers() {
  try {
    return JSON.parse(localStorage.getItem(ANSWERS_KEY)) || {};
  } catch {
    return {};
  }
}

function saveAnswers(answers) {
  try {
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
  } catch {
    // 保存できない環境でも、この画面の中では回答を保持できる
  }
}

function feedbackFor(checked, total) {
  if (checked === total) return 'すべての観点を押さえられています。模範解答と比べて、自分ならではの工夫も確かめてみましょう。';
  if (checked * 2 >= total) return 'よく考えられています。チェックが付かなかった観点を、模範解答で確かめましょう。';
  return '模範解答を読み、足りなかった観点を書き足してみましょう。書き直すと考えが定着します。';
}

// ④ 思考力トレーニング：考えを書く → 観点チェックで自己採点 → 模範解答と見比べる
export default function ThinkingTraining({ lesson, completeButton }) {
  const [promptIndex, setPromptIndex] = useState(0);
  const [answers, setAnswers] = useState(loadAnswers);
  const [revealed, setRevealed] = useState({});
  const [checks, setChecks] = useState({});
  const cardRef = useRef(null);

  const prompt = lesson.prompts[promptIndex];
  const answer = answers[prompt.id] || '';
  const isRevealed = revealed[prompt.id];
  const isLast = promptIndex === lesson.prompts.length - 1;
  const promptChecks = checks[prompt.id] || [];
  const checkedCount = promptChecks.filter(Boolean).length;
  const canReveal = answer.trim().length >= MIN_LENGTH;

  const handleChange = (text) => {
    const next = { ...answers, [prompt.id]: text };
    setAnswers(next);
    saveAnswers(next);
  };

  const goNextPrompt = () => {
    setPromptIndex(promptIndex + 1);
    cardRef.current?.scrollIntoView({ block: 'start' });
  };

  const toggleCheck = (i) => {
    const next = [...promptChecks];
    next[i] = !next[i];
    setChecks({ ...checks, [prompt.id]: next });
  };

  return (
    <div ref={cardRef} className="neu-card p-6 md:p-8">
      <p className="text-xs md:text-sm font-semibold mb-2" style={{ color: 'var(--neu-text-muted)' }}>状況</p>
      <div className="neu-inset rounded-2xl p-4 mb-4">
        <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--neu-text)' }}>{prompt.scenario}</p>
      </div>
      {prompt.code && <CodeBlock code={prompt.code} />}
      <h3 className="text-base md:text-xl font-bold mb-4" style={{ color: 'var(--neu-text)' }}>{prompt.question}</h3>

      <textarea
        value={answer}
        onChange={(e) => handleChange(e.target.value)}
        readOnly={isRevealed}
        placeholder="考えたことを自分の言葉で書いてみましょう。箇条書きでもかまいません。"
        className="neu-input w-full p-4 text-sm md:text-base rounded-xl mb-2"
        rows="7"
        aria-label="あなたの考え"
      />
      {!isRevealed && (
        <>
          <p className="text-xs md:text-sm mb-4" style={{ color: 'var(--neu-text-muted)' }}>
            {canReveal ? `${answer.trim().length}文字` : `${MIN_LENGTH}文字以上書くと見直しに進めます（今 ${answer.trim().length}文字）`}
          </p>
          <button
            onClick={() => setRevealed({ ...revealed, [prompt.id]: true })}
            disabled={!canReveal}
            className="neu-btn neu-btn-primary w-full py-3 text-sm md:text-base font-semibold"
          >
            書けたので見直す
          </button>
        </>
      )}

      {isRevealed && (
        <div className="mt-4 space-y-6">
          <div>
            <p className="text-sm md:text-base font-bold mb-1" style={{ color: 'var(--neu-text)' }}>観点チェック</p>
            <p className="text-xs md:text-sm mb-3" style={{ color: 'var(--neu-text-muted)' }}>自分の答えに含まれていた観点にチェックを付けましょう。</p>
            <ul className="space-y-2">
              {prompt.checkpoints.map((point, i) => (
                <li key={point}>
                  <label className="flex items-start gap-3 cursor-pointer text-sm md:text-base" style={{ color: 'var(--neu-text)' }}>
                    <input
                      type="checkbox"
                      checked={!!promptChecks[i]}
                      onChange={() => toggleCheck(i)}
                      className="mt-1 w-4 h-4 flex-shrink-0"
                    />
                    <span>{point}</span>
                  </label>
                </li>
              ))}
            </ul>
            <div className="neu-inset rounded-2xl p-4 mt-4">
              <p className="text-sm md:text-base font-bold mb-1" style={{ color: 'var(--neu-text)' }}>
                {checkedCount} / {prompt.checkpoints.length} の観点を押さえられました
              </p>
              <p className="text-xs md:text-sm" style={{ color: 'var(--neu-text)' }}>{feedbackFor(checkedCount, prompt.checkpoints.length)}</p>
            </div>
          </div>

          <div>
            <p className="text-sm md:text-base font-bold mb-2" style={{ color: 'var(--neu-text)' }}>模範解答の一例</p>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--neu-text)' }}>{prompt.modelAnswer}</p>
          </div>

          {prompt.tip && (
            <div className="neu-inset rounded-2xl p-4">
              <p className="text-xs md:text-sm font-semibold mb-1" style={{ color: 'var(--neu-text-muted)' }}>考え方のコツ</p>
              <p className="text-sm md:text-base" style={{ color: 'var(--neu-text)' }}>{prompt.tip}</p>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-3">
            <button
              onClick={() => setRevealed({ ...revealed, [prompt.id]: false })}
              className="neu-btn flex-1 py-3 text-sm md:text-base font-semibold"
            >
              答えを書き直す
            </button>
            {isLast ? (
              <div className="flex-1 flex">{completeButton}</div>
            ) : (
              <button
                onClick={goNextPrompt}
                className="neu-btn neu-btn-success flex-1 py-3 text-sm md:text-base font-semibold"
              >
                次のお題へ
              </button>
            )}
          </div>
        </div>
      )}

      <p className="text-center mt-6 text-sm md:text-base" style={{ color: 'var(--neu-text-muted)' }}>
        お題 {promptIndex + 1} / {lesson.prompts.length}
      </p>
    </div>
  );
}
