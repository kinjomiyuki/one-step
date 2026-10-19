// 学習アプリ(/)へ進むボタン。LP の中の、主な行動は、これ
export default function LpCtaButton({ children, large = false }) {
  return (
    <a
      href="/"
      className={`neu-btn neu-btn-primary inline-block text-center font-bold ${large ? 'px-8 py-4 text-base md:text-lg' : 'px-5 py-2 text-sm'}`}
    >
      {children}
    </a>
  );
}
