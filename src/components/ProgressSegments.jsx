// 進み具合を、区切りのある細い帯で見せる。total 個の区切りのうち、done 個が終わり、current の位置が、いま
export default function ProgressSegments({ total, done, current = -1, label }) {
  return (
    <div className="flex gap-1" role="img" aria-label={label}>
      {Array.from({ length: total }, (_, i) => {
        const style = i < done
          ? { background: 'var(--neu-accent)' }
          : i === current
            ? { background: '#ffe08a' }
            : { background: 'var(--neu-surface)', boxShadow: 'inset 2px 2px 3px var(--neu-shadow-dark), inset -2px -2px 3px var(--neu-shadow-light)' };
        return <span key={i} className="flex-1 h-2" style={{ ...style, borderRadius: '5px' }} />;
      })}
    </div>
  );
}
