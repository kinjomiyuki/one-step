import { useState } from 'react';

export default function QuizQuestion({ question, selectedAnswer, onAnswerSelect, onRetry, onRestartLesson, navigation }) {
  const [showQuestion, setShowQuestion] = useState(false);
  const [userQuestion, setUserQuestion] = useState('');
  const [submittedQuestions, setSubmittedQuestions] = useState([]);

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
        <h3 className="text-lg md:text-2xl font-bold text-gray-700 mb-4 whitespace-pre-wrap">
          {question.text}
        </h3>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option.id;
          const showResult = isAnswered && isSelected;

          return (
            <button
              key={option.id}
              onClick={() => !isAnswered && onAnswerSelect(option.id)}
              disabled={isAnswered}
              style={{
                background: isSelected && showResult && !isCorrect
                  ? '#fee2e2'
                  : isSelected && showResult && isCorrect
                  ? '#dcfce7'
                  : 'var(--neu-surface)',
                opacity: isAnswered && !isSelected ? 0.6 : 1
              }}
              className="neu-btn w-full p-4 text-left transition rounded-2xl flex items-center gap-3"
            >
              <span className="neu-square text-sm font-bold flex-shrink-0 w-8 h-8">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="break-words text-sm md:text-base font-medium flex-1" style={{color: 'var(--neu-text)'}}>
                {option.text}
              </span>
              {isSelected && showResult && (
                <>
                  {isCorrect ? (
                    <span className="text-xs md:text-sm font-bold" style={{color: '#16a34a'}}>正解</span>
                  ) : (
                    <span className="text-xs md:text-sm font-bold" style={{color: '#dc2626'}}>不正解</span>
                  )}
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {isAnswered && (
        <div className={`neu-inset p-6 mb-6 rounded-2xl ${
          isCorrect
            ? 'bg-green-50'
            : 'bg-pink-50'
        }`}>
          <div className="text-left">
            <h4 className={`font-bold text-lg mb-2 ${
              isCorrect ? 'text-green-800' : 'text-gray-800'
            }`}>
              {isCorrect ? '正解です' : 'もう一度考えてみましょう'}
            </h4>
            <p className={`text-sm md:text-base ${isCorrect ? 'text-green-700' : 'text-gray-700'} mb-3`}>
              {isCorrect ? question.explanation : question.hint || question.explanation}
            </p>
            {!isCorrect && question.explanation && (
              <div className="mt-3 pt-3 border-t-2 border-gray-300">
                <p className="text-xs md:text-sm font-semibold text-gray-700 mb-1">解説</p>
                <p className="text-xs md:text-sm text-gray-700">{question.explanation}</p>
              </div>
            )}
            {question.example && (
              <div className="mt-3 pt-3 border-t-2 border-gray-300">
                <p className="text-xs md:text-sm font-semibold text-gray-700 mb-1">こんな時に使う</p>
                <p className="text-xs md:text-sm text-gray-700">{question.example}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hint when not answered */}
      {!isAnswered && (
        <div className="neu-inset p-4 mb-6 rounded-xl text-center bg-blue-50">
          <p className="text-sm md:text-base text-gray-700 font-semibold">
            選択肢をクリックして回答してください
          </p>
        </div>
      )}

      {/* Retry Button */}
      {isAnswered && (
        <div className="mt-6 space-y-3">
          <button
            onClick={onRetry}
            className="neu-btn w-full py-3 font-semibold text-sm md:text-base"
          >
            もう一度解く
          </button>
          <button
            onClick={onRestartLesson}
            className="neu-btn w-full py-3 font-semibold text-sm md:text-base"
          >
            セクションの最初に戻る
          </button>
        </div>
      )}

      {/* Navigation */}
      {navigation && <div className="mt-6">{navigation}</div>}

      {/* Question Button */}
      <div className="mt-6">
        <button
          onClick={() => setShowQuestion(!showQuestion)}
          className="neu-btn neu-btn-primary w-full py-3 font-semibold text-sm md:text-base"
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
