import { useMemo, useState } from 'react';
import { shuffle } from '../utils/shuffle';
import FillBlankText from './FillBlankText';

export default function QuizQuestion({ question, selectedAnswer, onAnswerSelect, onRetry, onRestartLesson, navigation }) {
  const [showQuestion, setShowQuestion] = useState(false);
  const [userQuestion, setUserQuestion] = useState('');
  const [submittedQuestions, setSubmittedQuestions] = useState([]);

  // 正解が先頭に固定されないよう、問題ごとに選択肢の順番を並べ替える(同じ問題の間は固定)
  const options = useMemo(() => shuffle(question.options), [question]);

  const selectedOption = question.options.find(opt => opt.id === selectedAnswer);
  const isCorrect = selectedOption?.correct;
  const isAnswered = selectedAnswer !== undefined;

  const handleSubmitQuestion = () => {
    if (userQuestion.trim()) {
      setSubmittedQuestions([...submittedQuestions, userQuestion]);
      setUserQuestion('');
      setShowQuestion(false);
    }
  };

  return (
    <div className="neu-card p-6 md:p-8">
      {/* Question */}
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-bold leading-relaxed mb-4 whitespace-pre-wrap" style={{ color: 'var(--neu-text)' }}>
          <FillBlankText text={question.text} answer={selectedOption ? selectedOption.text : null} correct={Boolean(isCorrect)} />
        </h3>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {options.map((option, index) => {
          const isSelected = selectedAnswer === option.id;
          const showResult = isAnswered && isSelected;

          return (
            <button
              key={option.id}
              onClick={() => !isAnswered && onAnswerSelect(option.id)}
              disabled={isAnswered}
              style={{
                background: showResult ? (isCorrect ? 'var(--neu-green)' : 'var(--neu-red)') : 'var(--neu-surface)',
                color: showResult ? (isCorrect ? 'var(--neu-on-green)' : 'var(--neu-on-red)') : undefined,
                opacity: isAnswered && !isSelected ? 0.6 : 1
              }}
              className="neu-btn w-full p-4 text-left transition rounded-2xl flex items-center gap-3"
            >
              <span className="neu-square text-sm font-bold flex-shrink-0 w-8 h-8">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="break-words text-sm md:text-base font-medium flex-1" style={{ color: showResult ? 'inherit' : 'var(--neu-text)' }}>
                {option.text}
              </span>
              {isSelected && showResult && (
                <>
                  <span className="text-xs md:text-sm font-bold">{isCorrect ? '正解' : '不正解'}</span>
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback: 結果の帯、解説、こんな時に使う */}
      {isAnswered && (
        <div className="mb-6 space-y-3">
          <div
            className="p-4 rounded-2xl"
            style={{
              background: isCorrect ? 'var(--neu-green)' : 'var(--neu-red)',
              color: isCorrect ? 'var(--neu-on-green)' : 'var(--neu-on-red)'
            }}
          >
            <h4 className="font-bold text-lg">{isCorrect ? '正解です' : 'もう一度考えてみましょう'}</h4>
            {!isCorrect && (question.hint || question.explanation) && (
              <p className="text-sm md:text-base mt-1">{question.hint || question.explanation}</p>
            )}
          </div>
          {question.explanation && (
            <div className="neu-inset p-4 rounded-2xl">
              <p className="text-xs md:text-sm font-bold mb-1" style={{ color: 'var(--neu-text-muted)' }}>なぜ、そうなる?</p>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--neu-text)' }}>{question.explanation}</p>
            </div>
          )}
          {question.example && (
            <div className="neu-inset p-4 rounded-2xl">
              <p className="text-xs md:text-sm font-bold mb-1" style={{ color: 'var(--neu-text-muted)' }}>こんな時に使う</p>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--neu-text)' }}>{question.example}</p>
            </div>
          )}
        </div>
      )}

      {/* Hint when not answered */}
      {!isAnswered && (
        <p className="mb-6 text-center text-sm" style={{ color: 'var(--neu-text-muted)' }}>
          選択肢を、1 つ選んでください
        </p>
      )}

      {/* Navigation: 答えたあとの、いちばん大きな行動 */}
      {navigation && <div className="mb-4">{navigation}</div>}

      {/* Retry */}
      {isAnswered && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button onClick={onRetry} className="neu-btn w-full py-3 font-semibold text-sm md:text-base">
            もう一度解く
          </button>
          <button onClick={onRestartLesson} className="neu-btn w-full py-3 font-semibold text-sm md:text-base">
            セクションの最初に戻る
          </button>
        </div>
      )}

      {/* Question Button */}
      <div className="mt-6">
        <button
          onClick={() => setShowQuestion(!showQuestion)}
          className="neu-btn w-full py-3 font-semibold text-sm md:text-base"
        >
          {showQuestion ? '質問を閉じる' : 'この問題について質問する'}
        </button>
      </div>

      {/* Question Form */}
      {showQuestion && (
        <div className="mt-6 neu-inset p-6 rounded-2xl">
          <h4 className="font-bold text-lg text-gray-800 mb-4">質問を入力してください</h4>
          <textarea
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            placeholder="問題がわからない点や、詳しく知りたいことを入力してください..."
            className="neu-input w-full p-4 text-sm md:text-base resize-none mb-4 rounded-xl"
            rows="3"
          />
          <button
            onClick={handleSubmitQuestion}
            disabled={!userQuestion.trim()}
            className={`neu-btn w-full py-3 font-semibold text-sm md:text-base transition ${
              userQuestion.trim()
                ? 'neu-btn-primary'
                : 'opacity-50 cursor-not-allowed'
            }`}
          >
            質問を送信
          </button>
        </div>
      )}

      {/* Submitted Questions */}
      {submittedQuestions.length > 0 && (
        <div className="mt-6 neu-inset p-6 rounded-2xl">
          <h4 className="font-bold text-lg text-gray-800 mb-4">送信済みの質問</h4>
          <div className="space-y-2">
            {submittedQuestions.map((q, idx) => (
              <div key={idx} className="p-3 bg-white rounded-lg border border-gray-300 text-sm md:text-base text-gray-700">
                {idx + 1}. {q}
              </div>
            ))}
          </div>
          <p className="text-xs md:text-sm text-gray-600 mt-3">
            質問が記録されました。講師が確認してご連絡します。
          </p>
        </div>
      )}
    </div>
  );
}
