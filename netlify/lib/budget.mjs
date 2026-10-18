// チャットの AI 回答にかかる、API 費用の1日あたりの上限(サービス全体の合計)。
// 日付は日本時間で区切る。合計金額は、Netlify Blobs に、1日1件で保存する。
//
// 環境変数(すべて任意):
//   CHAT_DAILY_BUDGET_YEN   1日の上限(円)。既定は 50。0 または off で、上限なし
//   ANTHROPIC_PRICE_INPUT   入力の料金(ドル/100万トークン)。既定は 0.10(Claude Haiku 5.5)
//   ANTHROPIC_PRICE_OUTPUT  出力の料金(ドル/100万トークン)。既定は 0.50(Claude Haiku 5.5)
//   USD_JPY                 円への換算レート。既定は 160(実際より高めにして、上限を、確実に守る)
// モデルを変えたときは、料金も合わせて変える。
const DEFAULT_DAILY_BUDGET_YEN = 50;
const DEFAULT_PRICE_INPUT = 0.1;
const DEFAULT_PRICE_OUTPUT = 0.5;
const DEFAULT_USD_JPY = 160;
const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

const numberFrom = (value, fallback) => {
  const n = Number(value);
  return value !== undefined && value !== '' && Number.isFinite(n) && n >= 0 ? n : fallback;
};

// 1日の上限(円)。0 は、上限なし
export function dailyBudgetYen(env = process.env) {
  const raw = env.CHAT_DAILY_BUDGET_YEN;
  if (typeof raw === 'string' && raw.trim().toLowerCase() === 'off') return 0;
  return numberFrom(raw, DEFAULT_DAILY_BUDGET_YEN);
}

// 日本時間での日付(例: 2026-10-18)。上限は、日本時間の 0 時に戻る
export const dayKey = (now = Date.now()) => new Date(now + JST_OFFSET_MS).toISOString().slice(0, 10);

// API の応答の usage から、費用(円)を計算する
export function costYen(usage, env = process.env) {
  const priceIn = numberFrom(env.ANTHROPIC_PRICE_INPUT, DEFAULT_PRICE_INPUT);
  const priceOut = numberFrom(env.ANTHROPIC_PRICE_OUTPUT, DEFAULT_PRICE_OUTPUT);
  const rate = numberFrom(env.USD_JPY, DEFAULT_USD_JPY);

  // キャッシュの書き込みは入力の 1.25 倍、読み込みは 0.1 倍の料金
  const input =
    (usage?.input_tokens || 0) +
    (usage?.cache_creation_input_tokens || 0) * 1.25 +
    (usage?.cache_read_input_tokens || 0) * 0.1;
  const output = usage?.output_tokens || 0;
  return ((input * priceIn + output * priceOut) / 1_000_000) * rate;
}

let makeStore = async () => {
  // 使うときだけ読み込む(Blobs を使わない処理と、テストに影響させない)
  const { getStore } = await import('@netlify/blobs');
  return getStore({ name: 'chat-budget', consistency: 'strong' });
};

// テスト用: 保存先を差し替える
export const setStoreFactory = (factory) => {
  makeStore = factory;
};

const keyFor = (now) => `day-${dayKey(now)}`;

export async function readSpentYen(now = Date.now()) {
  const store = await makeStore();
  const saved = await store.get(keyFor(now), { type: 'json' });
  return Number(saved?.yen) || 0;
}

// 今日の合計に加え、新しい合計を返す。
// 読み取りと書き込みを同時に行う、複数の質問が重なったときは、わずかに超えることがある(目安としての上限)
export async function addSpentYen(yen, now = Date.now()) {
  const store = await makeStore();
  const total = (Number(((await store.get(keyFor(now), { type: 'json' })) || {}).yen) || 0) + yen;
  await store.setJSON(keyFor(now), { yen: total });
  return total;
}
