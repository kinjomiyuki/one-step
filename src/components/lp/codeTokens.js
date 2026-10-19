// コードの 1 行を、色分けの単位(トークン)に分ける。本格的な解析ではなく、見た目のための、簡易な色分け
const KEYWORDS = new Set([
  'const', 'let', 'var', 'function', 'return', 'import', 'export', 'from', 'default', 'if', 'else', 'for', 'while',
  'class', 'new', 'def', 'in', 'async', 'await', 'interface', 'type', 'extends', 'declare', 'use', 'echo',
  'SELECT', 'FROM', 'JOIN', 'ON', 'WHERE', 'GROUP', 'BY', 'ORDER', 'LIMIT', 'AS', 'COUNT', 'display', 'grid'
]);

const PATTERN = /("[^"]*"|'[^']*'|`[^`]*`)|(<\/?[A-Za-z!][\w-]*|\/?>)|(\b\d+(?:\.\d+)?\b)|(\b[A-Za-z_]+\b)/g;

export function tokenizeLine(line) {
  const trimmed = line.trim();
  if (trimmed.startsWith('//') || trimmed.startsWith('#') || trimmed.startsWith('--')) {
    return [{ type: 'comment', text: line }];
  }
  const tokens = [];
  let last = 0;
  for (const match of line.matchAll(PATTERN)) {
    if (match.index > last) tokens.push({ type: 'plain', text: line.slice(last, match.index) });
    const [text, string, tag, number, word] = match;
    let type = 'plain';
    if (string) type = 'string';
    else if (tag) type = 'tag';
    else if (number) type = 'number';
    else if (word && KEYWORDS.has(word)) type = 'keyword';
    tokens.push({ type, text });
    last = match.index + text.length;
  }
  if (last < line.length) tokens.push({ type: 'plain', text: line.slice(last) });
  return tokens;
}

// 明るい背景でも、読める濃さにした、色(飾りなので、控えめ)
export const TOKEN_COLORS = {
  plain: '#6b7184',
  keyword: '#c98f00',
  string: '#4f8a68',
  tag: '#3d6ea3',
  number: '#b4543c',
  comment: '#a6abb8'
};
