import { GREEN_CARD_STYLE, ON_GREEN_TEXT } from './greenCard';

// 学習アプリ(/)へ進むボタン。LP の中の、主な行動は、これ。カードと同じ、蛍光グリーンの地に、濃い文字
export default function LpCtaButton({ children, large = false }) {
  return (
    <a
      href="/"
      className={`neu-btn inline-block text-center font-bold ${large ? 'px-8 py-4 text-base md:text-lg' : 'px-5 py-2 text-sm'}`}
      style={{ ...GREEN_CARD_STYLE, ...ON_GREEN_TEXT }}
    >
      {children}
    </a>
  );
}
