// スマホの枠に、アプリの実際の画面(public/lp/app-quiz.jpg)を、はめ込む。枠は、CSS で描く(画像は、画面だけ)
export default function LpPhoneMock() {
  return (
    <div
      className="mx-auto w-56 md:w-72 p-2.5"
      style={{
        background: '#2b2e38',
        borderRadius: '2.5rem',
        boxShadow: '14px 14px 28px var(--neu-shadow-dark), -14px -14px 28px var(--neu-shadow-light)'
      }}
    >
      <div className="relative overflow-hidden" style={{ borderRadius: '2rem', background: 'var(--neu-bg)' }}>
        <img
          src="/lp/app-quiz.jpg"
          width="390"
          height="844"
          alt="OneStep の問題画面。4 つの選択肢から、1 つを選んで答える"
          fetchPriority="high"
          className="block w-full h-auto"
        />
        <span
          aria-hidden="true"
          className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4"
          style={{ background: '#2b2e38', borderRadius: '0.5rem' }}
        />
      </div>
    </div>
  );
}
