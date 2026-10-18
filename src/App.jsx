import { useState, useEffect } from 'react';
import { courses } from './data/courses';
import { getLevelContent, markLessonCompleted, isLevelCompleted, getResumeTarget, migrateProgress, LEVELS } from './utils/progress';
import CourseList from './components/CourseList';
import LessonView from './components/LessonView';
import ChatButton from './components/ChatButton';
import LockedLevel from './components/LockedLevel';
import Notice from './components/Notice';
import useEntitlement from './hooks/useEntitlement';
import { isLevelLocked } from './utils/plans';
import './index.css';

const LEVEL_LABELS = { beginner: '初級', intermediate: '中級', advanced: '上級' };

function loadSaved(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function App() {
  const [currentScreen, setCurrentScreen] = useState('courses');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  // 保存済みデータは初回描画時に読み込む（空データでの上書きを防ぐ）
  const [userStats, setUserStats] = useState(() => loadSaved('oneStepStats', {
    name: 'プログラマー',
    totalPoints: 0,
    badges: [],
    level: 1
  }));
  const [progress, setProgress] = useState(() => migrateProgress(courses, loadSaved('oneStepProgress', {})));
  const entitlement = useEntitlement();
  const [onboarded, setOnboarded] = useState(() => loadSaved('oneStepOnboarded', false));

  useEffect(() => {
    localStorage.setItem('oneStepProgress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem('oneStepStats', JSON.stringify(userStats));
  }, [userStats]);

  useEffect(() => {
    localStorage.setItem('oneStepOnboarded', JSON.stringify(onboarded));
  }, [onboarded]);

  const addPoints = (points, badge) => {
    setUserStats(prev => ({
      ...prev,
      totalPoints: prev.totalPoints + points,
      level: Math.floor((prev.totalPoints + points) / 100) + 1,
      badges: badge && !prev.badges.includes(badge) ? [...prev.badges, badge] : prev.badges
    }));
  };

  // 前回の続き（完了済みレベルなら次のレベル）から始める
  const handleSelectCourse = (course) => {
    const courseProgress = progress[course.id];
    const target = getResumeTarget(course, courseProgress);
    setSelectedCourse(course);
    setCurrentScreen('lesson');
    setSelectedLevel(target ? target.level : courseProgress?.level || LEVELS[0]);
    setCurrentLessonIndex(target ? target.lessonIndex : 0);
    window.scrollTo({ top: 0 });
  };

  // 初回ガイドのおすすめコースから始める
  const handleStartRecommended = (course) => {
    setOnboarded(true);
    handleSelectCourse(course);
  };

  const handleChangeLevel = (level) => {
    setSelectedLevel(level);
    setCurrentLessonIndex(0);
    // 有料のレベルを、プレミアムでない人が開いたときは、学習の記録(続きの位置)を、書き換えない
    if (isLevelLocked(level, entitlement.isPro)) return;
    setProgress({
      ...progress,
      [selectedCourse.id]: { ...progress[selectedCourse.id], level, lastLesson: 0, updatedAt: Date.now() }
    });
  };

  // 現在のレッスンを完了として記録し、次へ進む（最後ならレベル完了）
  const handleNextLesson = () => {
    const allContent = getLevelContent(selectedCourse, selectedLevel);
    const currentLesson = allContent[currentLessonIndex];
    const isLast = currentLessonIndex >= allContent.length - 1;
    const nextIndex = isLast ? currentLessonIndex : currentLessonIndex + 1;

    const courseProgress = {
      ...markLessonCompleted(progress[selectedCourse.id], currentLesson.id),
      level: selectedLevel,
      lastLesson: nextIndex,
      updatedAt: Date.now()
    };
    setProgress({ ...progress, [selectedCourse.id]: courseProgress });

    if (!isLast) {
      setCurrentLessonIndex(nextIndex);
    } else if (isLevelCompleted(selectedCourse, selectedLevel, courseProgress)) {
      // バッジ未獲得のときだけポイントを付与（やり直しで二重取りしない）
      const badge = `${selectedCourse.name}-${selectedLevel}`;
      if (!userStats.badges.includes(badge)) {
        addPoints(10, badge);
      }
    }
  };

  const handleBackToCourses = () => {
    setCurrentScreen('courses');
    setSelectedCourse(null);
    setSelectedLevel(null);
  };

  const lessonContext = selectedCourse && selectedLevel
    ? {
        course: selectedCourse.name,
        level: LEVEL_LABELS[selectedLevel],
        lesson: getLevelContent(selectedCourse, selectedLevel)[currentLessonIndex]?.title
      }
    : undefined;

  return (
    <div className="flex min-h-screen" style={{ background: 'var(--neu-bg)' }}>
      {/* メインコンテンツ */}
      <div className="flex-1 min-w-0">
        <Notice notice={entitlement.notice} onClose={entitlement.dismissNotice} />
        {currentScreen === 'courses' ? (
          <CourseList
            courses={courses}
            progress={progress}
            showOnboarding={!onboarded && Object.keys(progress).length === 0}
            onStartRecommended={handleStartRecommended}
            onDismissOnboarding={() => setOnboarded(true)}
            onSelectCourse={handleSelectCourse}
            account={{
              premiumEnabled: entitlement.premiumEnabled,
              isPro: entitlement.isPro,
              busy: entitlement.busy,
              onUpgrade: entitlement.upgrade,
              onManage: entitlement.manage
            }}
          />
        ) : isLevelLocked(selectedLevel, entitlement.isPro) ? (
          <LockedLevel
            course={selectedCourse}
            level={selectedLevel}
            busy={entitlement.busy}
            onChangeLevel={handleChangeLevel}
            onBackToCourses={handleBackToCourses}
            onUpgrade={entitlement.upgrade}
            onRestore={entitlement.restore}
          />
        ) : (
          <LessonView
            key={`${selectedCourse.id}-${selectedLevel}`}
            course={selectedCourse}
            courseProgress={progress[selectedCourse.id]}
            level={selectedLevel}
            isPro={entitlement.isPro}
            currentLessonIndex={currentLessonIndex}
            onChangeLevel={handleChangeLevel}
            onNextLesson={handleNextLesson}
            onBackToCourses={handleBackToCourses}
          />
        )}
      </div>

      {/* チャットボタン（質問ポップアップ） */}
      <ChatButton
        context={lessonContext}
        access={{ isPro: entitlement.isPro, token: entitlement.token, onUpgrade: entitlement.upgrade, onProRequired: entitlement.revalidate }}
      />
    </div>
  );
}

export default App;
