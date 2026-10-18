// 有料プランを開始するスイッチ。環境変数 PREMIUM_ENABLED が 'true' のときだけ、制限と課金が有効になる。
// Stripe などの準備が整うまでは、これまでどおり、全員が無料で使える。
export const isPremiumEnabled = () => process.env.PREMIUM_ENABLED === 'true';
