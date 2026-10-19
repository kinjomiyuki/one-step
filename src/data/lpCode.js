// LP の背景に流れる、コードの素材。コースの言語(HTML・CSS・JavaScript・TypeScript・React・Python・SQL・PHP)から、短いものを集めた。
// 飾りなので、読み上げの対象にはしない(aria-hidden)。
export const SNIPPETS = [
  [
    '<!DOCTYPE html>',
    '<html lang="ja">',
    '  <head>',
    '    <title>はじめの一歩</title>',
    '  </head>',
    '  <body>',
    '    <h1>こんにちは、世界</h1>',
    '    <button id="start">はじめる</button>',
    '  </body>',
    '</html>'
  ],
  [
    '.card {',
    '  display: grid;',
    '  gap: 16px;',
    '  border-radius: 24px;',
    '  box-shadow: 9px 9px 18px #c6cbd6;',
    '}',
    '@media (min-width: 768px) {',
    '  .card { grid-template-columns: 1fr 1fr; }',
    '}'
  ],
  [
    'const questions = await fetch("/api/questions");',
    'for (const q of questions) {',
    '  if (q.answer === choice) {',
    '    score += 1;',
    '  }',
    '}',
    'console.log(`正解: ${score}問`);',
    'document.querySelector("#start")',
    '  .addEventListener("click", begin);'
  ],
  [
    'interface User {',
    '  name: string;',
    '  age: number;',
    '  nickname?: string;',
    '}',
    'function greet(user: User): string {',
    '  return `こんにちは、${user.name}さん`;',
    '}'
  ],
  [
    'export default function Quiz({ items }) {',
    '  const [index, setIndex] = useState(0);',
    '  const item = items[index];',
    '  return (',
    '    <section>',
    '      <h2>{item.text}</h2>',
    '      <button onClick={() => setIndex(index + 1)}>',
    '        次の問題へ',
    '      </button>',
    '    </section>',
    '  );',
    '}'
  ],
  [
    'def total_price(items, tax=0.1):',
    '    subtotal = sum(i["price"] for i in items)',
    '    return round(subtotal * (1 + tax))',
    '',
    'for name in ["りんご", "みかん"]:',
    '    print(f"{name}を、買いました")'
  ],
  [
    'SELECT name, COUNT(*) AS orders',
    'FROM customers',
    'JOIN orders ON orders.customer_id = customers.id',
    'WHERE orders.created_at >= "2026-01-01"',
    'GROUP BY name',
    'ORDER BY orders DESC',
    'LIMIT 10;'
  ],
  [
    '<?php',
    'declare(strict_types=1);',
    '$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");',
    '$stmt->execute(["email" => $email]);',
    '$user = $stmt->fetch(PDO::FETCH_ASSOC);',
    'if (password_verify($input, $user["password_hash"])) {',
    '    session_regenerate_id(true);',
    '}'
  ]
];

// 1 枚の板に並べる行数。スニペットを、板ごとに、違う順番でつなぎ、空行をはさんで、この行数にそろえる
export const LINES_PER_LAYER = 40;

export function buildLayerLines(layerIndex, count = LINES_PER_LAYER) {
  const lines = [];
  let n = layerIndex * 3;
  while (lines.length < count) {
    lines.push(...SNIPPETS[n % SNIPPETS.length], '');
    n += 1;
  }
  return lines.slice(0, count);
}
