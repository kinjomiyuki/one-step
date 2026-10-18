// 学習アシスタントの回答を Claude API で生成する Netlify Function。
// APIキーは Netlify の環境変数 ANTHROPIC_API_KEY に設定する(コードには書かない)。
import { json } from '../lib/http.mjs';
import { bearerToken, verifyToken } from '../lib/token.mjs';
import { isPremiumEnabled } from '../lib/config.mjs';

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-haiku-5-5';

// 費用を抑えるための上限。入力(会話の履歴)と出力(回答)の両方が、課金の対象になる
const MAX_MESSAGES = 6; // 直近3往復まで。古い会話は送らない
const MAX_QUESTION_LENGTH = 1000; // 学習者の発言の、1件あたりの最大文字数
const MAX_HISTORY_ANSWER_LENGTH = 400; // 過去の AI の回答は、文脈として要点だけ送れば足りる
const MAX_OUTPUT_TOKENS = 600; // 回答の上限(考える処理の分も含む)。回答の目安は300字程度
// 初心者向けの短い回答には、深く考える必要がないので、考える量を最小にする(課金される出力トークンが減る)。
// effort に対応していない古いモデルを ANTHROPIC_MODEL に指定するときは、ANTHROPIC_EFFORT を空にして無効にする
const EFFORT = process.env.ANTHROPIC_EFFORT ?? 'low';
const TRUNCATED_NOTE = '\n\n(回答が長くなったため、ここまでです。続きは「続けて」と送ってください)';

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

  // 有料プランが有効なときは、AI での回答は、プレミアムプランの機能。API の費用がかかるため、サーバー側で確認する
  if (isPremiumEnabled()) {
    let member;
    try {
      member = verifyToken(bearerToken(req), { type: 'a' });
    } catch (e) {
      console.error('token check failed', e.message);
      return json({ error: 'サーバーの設定に問題があります' }, 500);
    }
    if (!member) return json({ error: 'AI での回答は、プレミアムプランの機能です', code: 'pro_required' }, 402);
  }

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
    .map(m => ({
      role: m.role,
      content: m.content.slice(0, m.role === 'user' ? MAX_QUESTION_LENGTH : MAX_HISTORY_ANSWER_LENGTH)
    }));

  // API は user から始まり user で終わる必要がある
  while (messages.length && messages[0].role !== 'user') messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== 'user') {
    return json({ error: '質問が空です' }, 400);
  }

  let res;
  try {
    res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_OUTPUT_TOKENS,
        ...(EFFORT ? { output_config: { effort: EFFORT } } : {}),
        system: buildSystemPrompt(payload.context),
        messages
      })
    });
  } catch (e) {
    return json({ error: `AI への接続に失敗しました: ${e.message}` }, 502);
  }

  if (!res.ok) {
    const detail = await res.json().then(d => d?.error?.message).catch(() => '');
    return json({ error: `AI がエラーを返しました (${res.status}) ${detail || ''}`.trim() }, 502);
  }

  const data = await res.json();
  const text = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  if (!text) return json({ error: '回答を生成できませんでした' }, 502);
  return json({ reply: data.stop_reason === 'max_tokens' ? text + TRUNCATED_NOTE : text });
};
