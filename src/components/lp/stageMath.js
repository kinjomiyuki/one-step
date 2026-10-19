// 3D スクロールの場面の、計算だけを置く(画面に依存しないので、テストできる)。
// 進み具合 p は、0(最初)から 1(最後)。カメラが、コードの板の廊下を、前へ進む。
export const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));

export const smooth = (a, b, x) => {
  const t = clamp((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

export const LAYER_COUNT = 7; // コードの板の枚数
export const SPAN = 2400; // 板が、手前へ進んで、また奥へ戻る、1周の長さ
export const TRAVEL = 2800; // スクロールの最初から最後までに、カメラが進む長さ
export const Z_FAR = -1750; // いちばん奥の位置。手前は、Z_FAR + SPAN(= 650)

// 板 i の、奥行きの位置。範囲を、ぐるっと回すので、廊下が、終わらずに続く
export function layerZ(i, p) {
  const base = -i * (SPAN / LAYER_COUNT);
  const raw = base + p * TRAVEL;
  return ((((raw - Z_FAR) % SPAN) + SPAN) % SPAN) + Z_FAR;
}

// 奥と手前の端では、透明にして、板が、突然、現れたり消えたりしないようにする
export const layerOpacity = (z) => smooth(Z_FAR, Z_FAR + 550, z) * (1 - smooth(250, 650, z));

// 場面の見え方: [現れ始め, 完全に見える, 薄れ始め, 消える] の、進み具合
// 場面どうしの間には、文字のない、コードだけが流れる時間を、あえて作る(重ならないようにする)
export const SCENE_WINDOWS = {
  intro: [-0.1, 0, 0.14, 0.22],
  message: [0.26, 0.34, 0.44, 0.5],
  phone: [0.54, 0.62, 0.76, 0.84],
  cta: [0.86, 0.93, 1, 1.1]
};

export const sceneOpacity = (p, [a, b, c, d]) => smooth(a, b, p) * (1 - smooth(c, d, p));

// 板の中のコードが、縦に流れる位置(px)。1 ブロックの高さで、ぐるっと回す。偶数は上へ、奇数は下へ流れる
export function flowOffset(i, p, blockHeight, speed) {
  const moved = (p * speed * blockHeight) % blockHeight;
  return i % 2 === 0 ? -moved : moved - blockHeight;
}
