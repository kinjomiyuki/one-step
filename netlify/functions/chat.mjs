// 学習アシスタントの回答を Claude API で生成する Netlify Function。
// APIキーは Netlify の環境変数 ANTHROPIC_API_KEY に設定する(コードには書かない)。
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-haiku-5-5';
const MAX_MESSAGES = 10;
const MAX_TEXT_LENGTH = 1000;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });

function buildSystemPrompt(context) {
  const lines = [
    'あなたはプログラミング学習アプリ「OneStep」の学習アシスタントです。',
    '学習者の質問に、日本語で、初心者にも分かるように具体的に答えてください。',
    '- 必要ならコード例を短く示す。長くても300字程度に収める。',
    '- 質問が曖昧なときは、推測した前提を一言添えて答える。',
    '- プログラミングや学習と無関係な質問には、簡潔にその旨を伝える。',
    '- 問題の答えをそのまま聞かれたら、答えを断定する前に考え方のヒントを示す。'
  ];
  if (context?.course) {
    const place = [context.course, context.level, context.lesson].filter(Boolean).join(' / ');
    lines.push(`学習者は今「${place}」を学んでいます。関連があれば、その内容に沿って答えてください。`);
  }
  return lines.join('\n');
}

export default async (req) => {
  if (req.method !== 'POST') return json({ error: 'Method Not Allowed' }, 405);

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return json({ error: 'ANTHROPIC_API_KEY が設定されていません' }, 500);

  let payload;
  try {
    payload = await req.json();
  } catch {
    return json({ error: 'リクエストが不正です' }, 400);
  }

  const messages = (Array.isArray(payload.messages) ? payload.messages : [])
    .filter(m => (m?.role === 'user' || m?.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
    .slice(-MAX_MESSAGES)
    .map(m => ({ role: m.role, content: m.content.slice(0, MAX_TEXT_LENGTH) }));

  // API は user から始まり user で終わる必要がある
  while (messages.length && messages[0].role !== 'user') messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== 'user') {
    return json({ error: '質問が空です' }, 400);
  }

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 700,
      system: buildSystemPrompt(payload.context),
      messages
    })
  });

  if (!res.ok) return json({ error: `AI の呼び出しに失敗しました (${res.status})` }, 502);

  const data = await res.json();
  const text = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  if (!text) return json({ error: '回答を生成できませんでした' }, 502);
  return json({ reply: text });
};
