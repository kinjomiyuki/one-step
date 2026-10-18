// 料金プランの表示用の定義。実際の請求額は Stripe の価格(STRIPE_PRICE_ID)で決まるので、変えるときは両方を合わせる
export const PRICE_LABEL = '月額 980 円(税込)';

// 無料で学べるレベル。これ以外は、プレミアムプランが必要
export const FREE_LEVELS = ['beginner'];

export const isLevelLocked = (level, isPro) => !isPro && !FREE_LEVELS.includes(level);
