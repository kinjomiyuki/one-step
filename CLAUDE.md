# CLAUDE.md

## Project

OneStep は、問答形式で学ぶプログラミング学習アプリ(React 19 + Vite + Tailwind CSS 4)。
Netlify に公開している。進捗や回答はブラウザの localStorage に保存する。
チャットの回答は、Netlify Function(`netlify/functions/chat.mjs`)経由で Claude API を呼んでいる。
PWA(インストール、オフライン対応)で、初級は無料、中級・上級とチャットの AI 回答は、Stripe の月額プランで有料にできる(`PREMIUM_ENABLED` が `true` のときだけ有効。設定は `docs/premium-setup.md`)。

## Commands

- `npm install`: 依存関係のインストール
- `npm run dev`: 開発サーバー(ポート 5173)
- `npm run build`: 本番ビルド(`dist/`)
- `npm run lint`: Oxlint

## Structure

- `src/components/`: 画面ごとのコンポーネント
- `lp/index.html`、`src/lp-main.jsx`、`src/components/lp/`、`src/data/lpContent.js`: マーケティング用の LP(`/lp/`)。学習アプリ(`/`)とは別の入口で、コースのデータを読み込まず、軽く表示する。先頭は、スクロールで進む、コードの廊下の 3D の場面(`LpScrollStage.jsx`、計算は `stageMath.js`)。共有時の見出しや説明(OGP)は、`lp/index.html` に静的に書く。方針と注意は `docs/marketing-lp.md`
- `src/data/courses.js`: コースと問題のデータ。全コース共通の構造(初級/中級/上級 × 基礎・クイズ・シミュレーション・思考力)
- `netlify/functions/`: chat(Claude API を呼ぶ)、checkout・entitlement・portal・login-link・stripe-webhook(Stripe と購入の確認。stripe-webhook は、解約などを受け取って失効を記録する)、config(有料プランのスイッチ)
- `netlify/lib/`: Function の共通部分(Stripe の呼び出し、署名付きトークン、Webhook の署名の確認、失効した顧客の記録、チャットの1日の費用の上限)。Stripe は、パッケージを使わず、fetch で呼ぶ。保存が必要なものは、Netlify Blobs(`@netlify/blobs`)を使う
- `src/hooks/useEntitlement.js`、`src/utils/entitlement.js`、`src/utils/plans.js`: プレミアムプランの確認と、無料のレベルの定義
- `public/sw.js`、`public/manifest.webmanifest`: PWA(Service Worker は、本番ビルドだけで登録する)
- `src/utils/progress.js`: レベルとステップの定義、進捗の判定。`src/utils/streak.js`: 学習した日の記録(連続日数、今週のレッスン数、直近 7 日間。localStorage の `oneStepActivity`)。記録の画面は `RecordView.jsx`、下のタブは `BottomTabs.jsx`
- `scripts/`: 問題データを生成・更新するスクリプト。`courses.js` を直接書き換えるので、実行前にコミットしておく

## Skills

- `.claude/skills/monetize-app/`: アプリを月額課金で売り始めるまでの型(OneStep で通った手順と、つまずいた点)。マネタイズ・Stripe・有料プランの話のときに使う
- 別のアプリに、課金の部分を持っていくときは、`node scripts/export-monetization.mjs <コピー先>` でコピーし、`docs/monetization-template.md` に従って、手で直す

## Design rules

- デザインは Neumorphism。ベースカラーは白、ポイントカラーは黄色(LP は例外で、黒と蛍光グリーンの暗い配色。`index.css` の `.lp-dark` で、色の変数を入れ替えている)
- 新しいUIにはアイコンと絵文字を足さない
- 円形の装飾は入れない

## Code rules

- コンポーネントは小さく分け、1ファイル1責務にする
- スタイルは Tailwind のユーティリティで書く。独自CSSは最小限にする
- localStorage の読み書きは try/catch で囲む(保存できない環境でも画面が動くように)
- 変更後は `npm run lint` と `npm run build` が通ることを確認してから完了とする

## Security

- APIキーやシークレットはコードに書かない。必要になったら環境変数を使い、`.env` は Git に含めない
- 新しい依存を追加するときは、本当に必要か確認する

## Deploy

公開サイト(`one-step-programing`)は、`main` に入ると GitHub Actions(`.github/workflows/deploy.yml`)が Netlify に本番公開する。
流れは、lint → テスト → `netlify deploy --prod`(ビルドは `netlify.toml` に従い、Function も含む)。プルリクエストでは公開しない。

GitHub の Secrets(Settings → Secrets and variables → Actions の「Repository secrets」)に、次が必要:

- `NETLIFY_AUTH_TOKEN`: Netlify の Personal access token(Netlify の User settings → Applications → Personal access tokens で作る)
- `NETLIFY_SITE_ID`: 任意。未登録なら、ワークフローに書いた、`df24e90d-11bc-4e4b-89ea-fda4734d1db4` を使う

Actions が使えないときの手動デプロイ(手元のプロジェクトのフォルダで):

1. `git pull origin main`
2. `npx netlify status` で `Current project: one-step-programing` と出ることを確認する(別サイトに連携されたままだと、別サイトを上書きする)
3. `npx netlify deploy --prod`

公開後は、チャットに質問して回答が返ることを確認する。

環境変数(Netlify の Environment variables に設定。値は secret にする。有料プランの設定は `docs/premium-setup.md`):

- `PREMIUM_ENABLED`: `true` にすると、有料プランが有効になる(未設定なら、全員が無料)
- `STRIPE_SECRET_KEY`、`STRIPE_PRICE_ID`、`ENTITLEMENT_SECRET`、`STRIPE_WEBHOOK_SECRET`、`RESEND_API_KEY`、`MAIL_FROM`: 有料プラン用

- `ANTHROPIC_API_KEY`: チャットの Function が使う Claude API キー。変更したら再デプロイする
- `ANTHROPIC_MODEL`: 任意。チャットで使うモデルを変えたいとき(既定は `claude-haiku-5-5`)
- `ANTHROPIC_EFFORT`: 任意。チャットの考える量(既定は `low`。費用を抑えるため)。effort に対応していない古いモデルを使うときは、空にする
- `CHAT_DAILY_BUDGET_YEN`: 任意。チャットの API 費用の、1日の上限(円。サービス全体の合計、日本時間で区切る)。既定は 50。`0` か `off` で、上限なし。超えた日は、AI 回答を止める(`netlify/lib/budget.mjs`。合計は Netlify Blobs に保存)
- `ANTHROPIC_PRICE_INPUT`、`ANTHROPIC_PRICE_OUTPUT`、`USD_JPY`: 任意。上限のための費用の計算に使う料金(ドル/100万トークン)と換算レート。既定は Claude Haiku 5.5 の料金と 160 円。モデルを変えたら、合わせる

チャットが「AI に接続できません」と返すときの確認先: API のクレジット残高、`ANTHROPIC_API_KEY` の値、Netlify の Functions ログ(`chat`)。
