// 学習アプリ(/)へ進むボタン。LP の中の、主な行動は、これ。glow は、黒い背景の上で使うとき(白い影の代わりに、黄色い光を出す)
export default function LpCtaButton({ children, large = false, glow = false }) {
  return (
    <a
      href="/"
      className={`neu-btn neu-btn-primary inline-block text-center font-bold ${large ? 'px-8 py-4 text-base md:text-lg' : 'px-5 py-2 text-sm'}`}
      style={glow ? { boxShadow: '0 0 28px rgba(255, 201, 60, 0.45)' } : undefined}
    >
      {children}
    </a>
  );
}
