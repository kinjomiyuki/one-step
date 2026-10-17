import { useState, useEffect } from 'react';
import { courses } from './data/courses';
import { getLevelContent, markLessonCompleted, isLevelCompleted, getResumeTarget, migrateProgress, LEVELS } from './utils/progress';
import CourseList from './components/CourseList';
import LessonView from './components/LessonView';
import ChatButton from './components/ChatButton';
import ChatPanel from './components/ChatPanel';
import './index.css';

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
  const [onboarded, setOnboarded] = useState(() => loadSaved('oneStepOnboarded', false));
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  return (
    <div className="flex min-h-screen" style={{ background: 'var(--neu-bg)' }}>
      {/* メインコンテンツ */}
      <div className="flex-1 min-w-0">
        {currentScreen === 'courses' ? (
          <CourseList
            courses={courses}
            progress={progress}
            showOnboarding={!onboarded && Object.keys(progress).length === 0}
            onStartRecommended={handleStartRecommended}
            onDismissOnboarding={() => setOnboarded(true)}
            onSelectCourse={handleSelectCourse}
          />
        ) : (
          <LessonView
            key={`${selectedCourse.id}-${selectedLevel}`}
            course={selectedCourse}
            courseProgress={progress[selectedCourse.id]}
            level={selectedLevel}
            currentLessonIndex={currentLessonIndex}
            onChangeLevel={handleChangeLevel}
            onNextLesson={handleNextLesson}
            onBackToCourses={handleBackToCourses}
          />
        )}
      </div>

      {/* 固定チャットパネル（デスクトップ） */}
      {isDesktop && (
        <div style={{ width: '320px', borderLeft: '1px solid #d1d5db', backgroundColor: 'white', overflow: 'hidden', flexShrink: 0 }}>
          <ChatPanel />
        </div>
      )}

      {/* チャットボタン（モバイル） */}
      {!isDesktop && <ChatButton />}
    </div>
  );
}

export default App;
