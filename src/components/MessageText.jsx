// チャットの回答に含まれる簡単な記法(**太字**、`コード`、```コードブロック```)を表示する
function renderInline(text) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return <code key={i} className="message-code">{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

export default function MessageText({ text }) {
  // split の結果は、偶数番目が通常の文章、奇数番目がコードブロックの中身
  const parts = text.split(/```[\w-]*\n?([\s\S]*?)```/);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <pre key={i} className="message-pre"><code>{part.replace(/\n$/, '')}</code></pre>
      : part.trim() && <p key={i}>{renderInline(part.trim())}</p>
  );
}
