// 解約などで、有料プランが無効になった顧客の記録。Stripe の Webhook が書き込み、チャットが読む。
// 保存先は Netlify Blobs。記録は、顧客ごとに1件(active が false の顧客だけが、失効している)。
let makeStore = async () => {
  // 使うときだけ読み込む(Blobs を使わない処理と、テストに影響させない)
  const { getStore } = await import('@netlify/blobs');
  return getStore({ name: 'membership', consistency: 'strong' });
};

// テスト用: 保存先を差し替える
export const setStoreFactory = (factory) => {
  makeStore = factory;
};

const keyFor = (customerId) => `customer-${customerId}`;

export async function setMembershipActive(customerId, active, now = Date.now()) {
  const store = await makeStore();
  await store.setJSON(keyFor(customerId), { active, at: now });
}

// 失効している顧客か。読み取りに失敗したときは、支払い中の人を締め出さないよう、失効していない扱いにする
export async function isRevoked(customerId) {
  if (!customerId) return false;
  try {
    const store = await makeStore();
    const saved = await store.get(keyFor(customerId), { type: 'json' });
    return saved?.active === false;
  } catch (e) {
    console.error('membership read failed', e.message);
    return false;
  }
}
