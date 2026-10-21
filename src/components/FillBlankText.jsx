// 問題文の「______」を、穴埋めの枠として見せる。答えを選ぶと、枠の中に、選んだ答えが入る
const BLANK = /_{2,}/;

export default function FillBlankText({ text, answer, correct }) {
  const parts = text.split(/(_{2,})/);
  const firstBlank = parts.findIndex((part) => BLANK.test(part));

  return (
    <>
      {parts.map((part, i) => {
        if (!BLANK.test(part)) return part;
        const showAnswer = i === firstBlank && answer !== null;
        const style = showAnswer
          ? correct
            ? { background: 'var(--neu-green)', color: 'var(--neu-on-green)' }
            : { background: 'var(--neu-red)', color: 'var(--neu-on-red)' }
          : { background: 'var(--neu-surface)', color: 'transparent', borderBottom: '3px solid var(--neu-accent)' };
        return (
          <span
            key={i}
            className={`neu-inset inline-block align-baseline px-3 mx-1 min-w-[4.5em] text-center text-base md:text-xl font-bold ${showAnswer ? '' : 'select-none'}`}
            style={{ ...style, borderRadius: '10px' }}
            aria-label={showAnswer ? `選んだ答え: ${answer}` : '空欄'}
          >
            {showAnswer ? answer : '　　　'}
          </span>
        );
      })}
    </>
  );
}
