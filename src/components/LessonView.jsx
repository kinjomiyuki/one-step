import { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import BasicsView from './BasicsView';
import ThinkingTraining from './ThinkingTraining';
import StepIndicator from './StepIndicator';
import LevelSelector from './LevelSelector';
import LessonPath from './LessonPath';
import ProgressSegments from './ProgressSegments';
import { getLevelContent, isLevelCompleted, STEPS } from '../utils/progress';
import CourseMark from './CourseMark';

const stepLabel = (key) => STEPS.find(s => s.key === key)?.label;

export default function LessonView({
  course,
  courseProgress,
  level,
  isPro,
  currentLessonIndex,
  onChangeLevel,
  onNextLesson,
  onBackToCourses
}) {
  const allContent = getLevelContent(course, level);
  const currentLesson = allContent[currentLessonIndex];
  const step = currentLesson.step;
  const isQuizStep = step === 'quiz' || step === 'simulation';
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  const currentQuestion = isQuizStep ? currentLesson.questions[currentQuestionIndex] : null;
  const userAnswer = currentQuestion ? userAnswers[currentQuestion.id] : undefined;

  const handleAnswerSelect = (optionId) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: optionId
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentLesson.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleNextLesson = () => {
    onNextLesson();
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    window.scrollTo({ top: 0 });
  };

  const handleRetryQuestion = () => {
    setUserAnswers({});
  };

  const handleRestartLesson = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
  };

  const isAnswered = userAnswer !== undefined;
  const isLastQuestion = isQuizStep && currentQuestionIndex === currentLesson.questions.length - 1;
  const isLastLesson = currentLessonIndex === allContent.length - 1;
  const isLevelDone = isLevelCompleted(course, level, courseProgress);
  const nextItem = allContent[currentLessonIndex + 1];

  const completeLabel = isLastLesson
    ? (isLevelDone ? 'このレベルは完了しました' : 'このレベルを完了する')
    : nextItem.step !== step
      ? `次へ：${stepLabel(nextItem.step)}`
      : step === 'simulation' ? '次のプロジェクトへ' : '次のレッスンへ';

  const renderCompleteButton = (disabled) => (
    <button
      onClick={handleNextLesson}
      disabled={disabled}
      className="neu-btn neu-btn-success flex-1 py-4 text-sm md:text-base font-semibold"
    >
      {completeLabel}
    </button>
  );

  const levelLabels = {
    beginner: '初級',
    intermediate: '中級',
    advanced: '上級'
  };

  return (
    <div style={{ background: 'var(--neu-bg)', minHeight: '100vh' }} className="py-4 md:py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8 gap-3">
          <button
            onClick={onBackToCourses}
            className="neu-btn px-4 md:px-6 py-2 text-sm md:text-base font-semibold w-full md:w-auto"
          >
            コース一覧に戻る
          </button>
          <span className={`neu-badge px-4 py-2 text-xs md:text-sm font-bold ${
            level === 'beginner' ? 'neu-badge-beginner' :
            level === 'intermediate' ? 'neu-badge-intermediate' :
            'neu-badge-advanced'
          }`}>
            {levelLabels[level]}
          </span>
        </div>

        {/* Course and Lesson Info */}
        <div className="neu-card p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <CourseMark course={course} className="w-10 h-10 md:w-12 md:h-12 text-sm md:text-base" />
            <h1 className="text-xl md:text-3xl font-bold" style={{ color: 'var(--neu-text)' }}>{course.name}</h1>
          </div>

          <p className="text-xs md:text-sm font-semibold mb-1" style={{ color: 'var(--neu-text-muted)' }}>
            {stepLabel(step)}
          </p>
          <h2 className="text-lg md:text-2xl font-semibold mb-2" style={{ color: 'var(--neu-on-accent)' }}>
            {currentLesson.title}
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed" style={{ color: 'var(--neu-text-muted)' }}>
            {currentLesson.content}
          </p>

          {/* レベルの進み具合 */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2" style={{ color: 'var(--neu-text-muted)' }}>
              <span>レベルの進み具合</span>
              <span>{currentLessonIndex + 1} / {allContent.length}</span>
            </div>
            <ProgressSegments
              total={allContent.length}
              done={currentLessonIndex}
              current={currentLessonIndex}
              label={`${currentLessonIndex + 1} / ${allContent.length}`}
            />
          </div>

          {/* 問題をすぐ見られるよう、ステップ・道すじ・レベルの切り替えは、たたんでおく */}
          <details>
            <summary className="cursor-pointer text-sm md:text-base font-semibold mb-4" style={{ color: 'var(--neu-text-muted)' }}>
              ステップ、道すじ、レベルを見る
            </summary>
            <StepIndicator content={allContent} currentStep={step} completed={courseProgress?.completed || []} />
            <LessonPath content={allContent} currentIndex={currentLessonIndex} completed={courseProgress?.completed || []} />
            <LevelSelector level={level} isPro={isPro} onChange={onChangeLevel} />
          </details>
        </div>

        {step === 'basics' && (
          <BasicsView
            lesson={currentLesson}
            navigation={<div className="flex">{renderCompleteButton(isLastLesson && isLevelDone)}</div>}
          />
        )}

        {step === 'thinking' && (
          <ThinkingTraining
            key={currentLesson.id}
            lesson={currentLesson}
            completeButton={renderCompleteButton(isLastLesson && isLevelDone)}
          />
        )}

        {isQuizStep && (
          <>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2" style={{ color: 'var(--neu-text-muted)' }}>
                <span>{step === 'simulation' ? '課題' : '問題'}</span>
                <span>{currentQuestionIndex + 1} / {currentLesson.questions.length}</span>
              </div>
              <ProgressSegments
                total={currentLesson.questions.length}
                done={currentQuestionIndex}
                current={currentQuestionIndex}
                label={`${currentQuestionIndex + 1} / ${currentLesson.questions.length}`}
              />
            </div>
            <QuizQuestion
              question={currentQuestion}
              selectedAnswer={userAnswer}
              onAnswerSelect={handleAnswerSelect}
              onRetry={handleRetryQuestion}
              onRestartLesson={handleRestartLesson}
              navigation={
                <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                  <button
                    onClick={handleNextQuestion}
                    disabled={!isAnswered || isLastQuestion}
                    className={`neu-btn flex-1 py-4 text-sm md:text-base font-semibold ${
                      !isAnswered || isLastQuestion
                        ? 'opacity-50 cursor-not-allowed'
                        : 'neu-btn-primary'
                    }`}
                  >
                    次の問題へ
                  </button>
                  {isLastQuestion && renderCompleteButton(!isAnswered || (isLastLesson && isLevelDone))}
                </div>
              }
            />
          </>
        )}
      </div>
    </div>
  );
}
