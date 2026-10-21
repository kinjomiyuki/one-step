import { useState } from 'react';

const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土'];

// ホームの先頭。今日の日付と、あいさつ
export default function HomeGreeting({ returning }) {
  const [weekday] = useState(() => WEEKDAYS[new Date().getDay()]);
  return (
    <header className="mb-5">
      <p className="text-xs md:text-sm" style={{ color: 'var(--neu-text-muted)' }}>
        今日は、{weekday}曜日
      </p>
      <h1 className="text-2xl md:text-4xl font-bold" style={{ color: 'var(--neu-text)' }}>
        {returning ? 'おかえりなさい' : 'OneStep'}
      </h1>
      {!returning && (
        <p className="text-sm md:text-base mt-1" style={{ color: 'var(--neu-text-muted)' }}>
          問答形式で学ぶ、プログラミング学習
        </p>
      )}
    </header>
  );
}
