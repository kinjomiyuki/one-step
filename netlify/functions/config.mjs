// 画面が、有料プランを有効にするかどうかを、サーバーに確かめるための Function。
import { json } from '../lib/http.mjs';
import { isPremiumEnabled } from '../lib/config.mjs';

export default async () => json({ premium: isPremiumEnabled() });
