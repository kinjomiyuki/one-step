// コースの系統(つながり)と、色。同じ系統は同じ色合いで、学ぶ順に、少しずつ濃くする
// 色は、地の色と、その上の文字色(コントラストを保つ濃い色)の組
export const GROUPS = [
  {
    key: 'web-look',
    label: 'Web ページを作る',
    hint: '骨組みを作り、見た目を整える',
    courseIds: ['html', 'css', 'scss'],
    colors: [['#cfe3f7', '#143a5c'], ['#b3d3f2', '#143a5c'], ['#94c0ec', '#143a5c']]
  },
  {
    key: 'web-script',
    label: 'ブラウザで動かす',
    hint: '動きをつけ、大きなアプリへ',
    courseIds: ['js-basics', 'js-web', 'typescript', 'react'],
    colors: [['#ddd3f5', '#2e1d5c'], ['#cbbdf0', '#2e1d5c'], ['#b8a6ea', '#2e1d5c'], ['#a58fe3', '#2e1d5c']]
  },
  {
    key: 'server-data',
    label: 'データとサーバー',
    hint: 'データを扱い、Web アプリを作る',
    courseIds: ['sql', 'php', 'laravel'],
    colors: [['#cfeedd', '#1c4a2d'], ['#b4e3c8', '#1c4a2d'], ['#98d7b1', '#1c4a2d']]
  },
  {
    key: 'automation',
    label: '自動化とデータ処理',
    hint: '作業を、プログラムに任せる',
    courseIds: ['python'],
    colors: [['#fbd9c9', '#5c2a14']]
  }
];

export function getGroup(courseId) {
  return GROUPS.find((g) => g.courseIds.includes(courseId));
}

// コースの色(地の色と、文字色)。どの系統にも入っていないコースは、アクセントの黄色
export function getCourseColor(courseId) {
  const group = getGroup(courseId);
  if (!group) return { background: 'var(--neu-accent)', color: 'var(--neu-on-accent)' };
  const [background, color] = group.colors[group.courseIds.indexOf(courseId)];
  return { background, color };
}
