// 販売事業者の情報。有料プランを始める前に、すべて記入する。
// 空の項目があるうちは、特定商取引法の表記などへのリンクを、画面に出さない。
// 個人で、住所や電話番号を公開しない場合は、「請求があった場合に、遅滞なく開示します」のように書く(表示の可否は、専門家や消費者庁の案内で確認する)。
export const BUSINESS = {
  seller: '藤田みゆき', // 販売事業者の名称(個人の場合は、氏名)
  representative: '藤田みゆき', // 運営責任者
  address: '沖縄県那覇市天久818番地', // 所在地
  phone: '09082944512', // 電話番号
  email: 'myk06w@gmail.com' // 問い合わせ先のメールアドレス
};

const REQUIRED = ['seller', 'representative', 'address', 'phone', 'email'];

export const isBusinessInfoComplete = (business = BUSINESS) =>
  REQUIRED.every((key) => typeof business[key] === 'string' && business[key].trim() !== '');
