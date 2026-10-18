# 課金の部分を、別のアプリに持っていく

OneStep の月額課金(Stripe)と、AI 回答の費用の上限を、新しいアプリにコピーして使うための手引き。手順と、つまずきやすい点は、スキル `.claude/skills/monetize-app` にまとめてある。

## 1. コピーする

このプロジェクトのフォルダで、コピー先を指定して実行する(コピー先は、新しいアプリのフォルダ)。

```
node scripts/export-monetization.mjs ../new-app
```

- すでにあるファイルは、上書きしない(上書きするときは `--force`)。
- AI の回答と、費用の上限が要らないときは、`--no-ai` を付ける(`chat.mjs`、`budget.mjs`、`functions.test.mjs` などが、コピーされない)。
- コピーされるファイルは、`scripts/export-monetization.mjs` の `CORE_FILES` と `AI_FILES` に、一覧がある。

## 2. コピーしたあとに、手で直すところ

### 新しいアプリの設定

- `package.json`: `@netlify/blobs` を、dependencies に入れる。`"test": "node --test"` を、scripts に入れる。
- `netlify.toml`: `[functions] directory = "netlify/functions"` と、Node 22 の指定。
- `.gitignore`: `.claude/*` と `!.claude/skills/` を入れる(スキルを、リポジトリに入れるため)。
- `CLAUDE.md`: 環境変数の一覧(`PREMIUM_ENABLED`、`STRIPE_SECRET_KEY`、`STRIPE_PRICE_ID`、`ENTITLEMENT_SECRET`、`STRIPE_WEBHOOK_SECRET`、`RESEND_API_KEY`、`MAIL_FROM`、AI を使うなら `ANTHROPIC_API_KEY` など)を、書く。

### アプリの名前や値を、書き換える

- `scripts/setup-stripe.mjs`: `NETLIFY_SITE_ID`(新しいサイトの ID)、商品名、価格(`PRICE_YEN`)、`PRICE_LOOKUP_KEY`、Webhook の既定の URL(`webhookUrl`)。
- `netlify/functions/login-link.mjs`: メールの文面の、アプリの名前。
- `netlify/functions/chat.mjs`(AI を使う場合): システムプロンプトの、アプリの名前と、役割。
- `src/data/legalTexts.js`: 利用規約・プライバシーポリシー・特定商取引法の表記の、サービス名と、内容。法務の文面は、案なので、必ず、見直す。
- `src/data/business.js`: 販売事業者の情報(5項目)。空のうちは、法務のリンクが、画面に出ない。
- `src/utils/plans.js`: `PRICE_LABEL`(画面に出す価格)、`FREE_LEVELS`(無料の範囲。アプリの構成に合わせて、変える)。

### 画面に、つなぐ(アプリごとに違うので、手で)

OneStep では、次のファイルで、つないでいる。新しいアプリの構成に合わせて、同じ形に、つなぐ。

- `src/App.jsx`: `useEntitlement()` を呼び、`isLevelLocked`(`src/utils/plans.js`)で、有料の部分を、ロックの画面(`LockedLevel`、`Paywall`)にする。`AccountBar` と `Notice` を、置く。
- `src/main.jsx`: `legalPageFor(window.location.pathname)` で、法務のページに、切り替える。
- `src/components/ChatPanel.jsx`(AI を使う場合): 有料でない人への案内と、402 のときの、`onProRequired`(解約の反映)。
- `LevelSelector.jsx` など、レベルの選択の画面: ロックの表示。

### サイトの側の準備

- Stripe、Resend、Netlify の設定は、スキルの手順のとおりに進める(`docs/premium-setup.md` にも、手順がある)。
  1. `node scripts/setup-stripe.mjs --netlify --entitlement --webhook`(テストモードの鍵で)
  2. `node scripts/check-setup.mjs` で確認
  3. テストカードで、購入のテスト
  4. 本番の鍵で、`--netlify --webhook --live`(`--entitlement` は付けない)
  5. `PREMIUM_ENABLED=true`、デプロイ

## 3. 確認

- `npm test` と `npm run lint` と `npm run build` が、通ること。
- `PREMIUM_ENABLED` が、未設定のまま、全員が無料で使えること(準備中も、サイトが壊れない)。

## 4. このテンプレートの限界

- 有料の内容が、画面のプログラムに含まれている作りでは、画面の制限は、技術のある人には破れる。守りたい内容は、サーバーから配信する作りに、変える必要がある。
- 購入の確認は、トークンと Stripe への確かめ直しで行い、データベースを持たない。購入者の一覧や、売上の集計が要るときは、Stripe のダッシュボードを使うか、保存先を、追加する。
