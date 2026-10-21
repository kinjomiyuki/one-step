export const LEVELS = ['beginner', 'intermediate', 'advanced'];

// 各レベルの学習ステップ。データの置き場所（course.lessons のキー）と表示名
export const STEPS = [
  { key: 'basics', source: 'basics', label: '基礎知識' },
  { key: 'quiz', source: null, label: '知識テスト' },
  { key: 'simulation', source: 'projects', label: '実践シミュレーション' },
  { key: 'thinking', source: 'thinking', label: '思考力トレーニング' }
];

// レベル内の学習内容をステップ順に並べたもの。各項目に step（STEPS の key）を付ける
export function getLevelContent(course, level) {
  return STEPS.flatMap(({ key, source }) => {
    const items = source ? course.lessons[source]?.[level] : course.lessons[level];
    return (items || []).map(item => ({ ...item, step: key }));
  });
}

// レッスンIDを完了済みに追加した新しいコース進捗を返す
export function markLessonCompleted(courseProgress, lessonId) {
  const completed = courseProgress?.completed || [];
  if (completed.includes(lessonId)) return { ...courseProgress, completed };
  return { ...courseProgress, completed: [...completed, lessonId] };
}

export function isLevelCompleted(course, level, courseProgress) {
  const completed = courseProgress?.completed || [];
  return getLevelContent(course, level).every(item => completed.includes(item.id));
}

// 全コース・全レベルのうち完了したレッスンの割合（0〜100）
export function getCompletionPercentage(courses, progress) {
  let total = 0;
  let done = 0;
  courses.forEach(course => {
    const completed = progress[course.id]?.completed || [];
    LEVELS.forEach(level => {
      getLevelContent(course, level).forEach(item => {
        total += 1;
        if (completed.includes(item.id)) done += 1;
      });
    });
  });
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

// コースを開いたときに始める位置。完了済みレベルなら次のレベルの先頭、全レベル完了なら null
export function getResumeTarget(course, courseProgress) {
  if (!courseProgress) return null;
  const level = courseProgress.level || LEVELS[0];
  const content = getLevelContent(course, level);

  if (isLevelCompleted(course, level, courseProgress)) {
    const nextLevel = LEVELS[LEVELS.indexOf(level) + 1];
    if (!nextLevel) return null;
    const nextContent = getLevelContent(course, nextLevel);
    return { level: nextLevel, lessonIndex: 0, lesson: nextContent[0], total: nextContent.length, completedLevel: level };
  }

  const saved = courseProgress.lastLesson;
  const lessonIndex = Number.isInteger(saved) && saved >= 0 && saved < content.length ? saved : 0;
  return { level, lessonIndex, lesson: content[lessonIndex], total: content.length, completedLevel: null };
}

// 最後に学習したコースと再開位置（再開できるものがなければ null）
export function getLatestResume(courses, progress) {
  let latest = null;
  courses.forEach(course => {
    const courseProgress = progress[course.id];
    const target = getResumeTarget(course, courseProgress);
    if (!target) return;
    const updatedAt = courseProgress.updatedAt || 0;
    if (!latest || updatedAt > latest.updatedAt) {
      latest = { course, target, updatedAt };
    }
  });
  return latest;
}

// 旧形式の保存データ（完了記録なし）を補正する。レッスンは順番にしか進めないため、
// 今いるレベルで lastLesson より前のレッスンは完了済みとみなす
export function migrateProgress(courses, progress) {
  const migrated = { ...progress };
  courses.forEach(course => {
    const courseProgress = progress[course.id];
    if (!courseProgress || !courseProgress.level) return;
    const content = getLevelContent(course, courseProgress.level);
    const passedCount = Math.min(Number.isInteger(courseProgress.lastLesson) ? courseProgress.lastLesson : 0, content.length);
    let next = { ...courseProgress, completed: courseProgress.completed || [] };
    content.slice(0, passedCount).forEach(item => { next = markLessonCompleted(next, item.id); });
    migrated[course.id] = next;
  });
  return migrated;
}

// コースの、レベルごとの、完了したレッスン数と全体の数
export function getLevelProgress(course, courseProgress) {
  const completed = courseProgress?.completed || [];
  return LEVELS.map((level) => {
    const content = getLevelContent(course, level);
    return { level, done: content.filter((item) => completed.includes(item.id)).length, total: content.length };
  });
}
