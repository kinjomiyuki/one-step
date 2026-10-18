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
- `src/data/courses.js`: コースと問題のデータ。全コース共通の構造(初級/中級/上級 × 基礎・クイズ・シミュレーション・思考力)
- `netlify/functions/`: chat(Claude API を呼ぶ)、checkout・entitlement・portal・login-link(Stripe と購入の確認)、config(有料プランのスイッチ)
- `netlify/lib/`: Function の共通部分(Stripe の呼び出し、署名付きトークン)。パッケージは追加せず、fetch で Stripe を呼ぶ
- `src/hooks/useEntitlement.js`、`src/utils/entitlement.js`、`src/utils/plans.js`: プレミアムプランの確認と、無料のレベルの定義
- `public/sw.js`、`public/manifest.webmanifest`: PWA(Service Worker は、本番ビルドだけで登録する)
- `src/utils/progress.js`: レベルとステップの定義、進捗の判定
- `scripts/`: 問題データを生成・更新するスクリプト。`courses.js` を直接書き換えるので、実行前にコミットしておく

## Design rules

- デザインは Neumorphism。ベースカラーは白、ポイントカラーは黄色
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

GitHub の Secrets(Settings → Secrets and variables → Actions)に、次の2つが必要:

- `NETLIFY_AUTH_TOKEN`: Netlify の Personal access token
- `NETLIFY_SITE_ID`: `df24e90d-11bc-4e4b-89ea-fda4734d1db4`

Actions が使えないときの手動デプロイ(手元のプロジェクトのフォルダで):

1. `git pull origin main`
2. `npx netlify status` で `Current project: one-step-programing` と出ることを確認する(別サイトに連携されたままだと、別サイトを上書きする)
3. `npx netlify deploy --prod`

公開後は、チャットに質問して回答が返ることを確認する。

環境変数(Netlify の Environment variables に設定。値は secret にする。有料プランの設定は `docs/premium-setup.md`):

- `PREMIUM_ENABLED`: `true` にすると、有料プランが有効になる(未設定なら、全員が無料)
- `STRIPE_SECRET_KEY`、`STRIPE_PRICE_ID`、`ENTITLEMENT_SECRET`、`RESEND_API_KEY`、`MAIL_FROM`: 有料プラン用

- `ANTHROPIC_API_KEY`: チャットの Function が使う Claude API キー。変更したら再デプロイする
- `ANTHROPIC_MODEL`: 任意。チャットで使うモデルを変えたいとき(既定は `claude-haiku-5-5`)
- `ANTHROPIC_EFFORT`: 任意。チャットの考える量(既定は `low`。費用を抑えるため)。effort に対応していない古いモデルを使うときは、空にする

チャットが「AI に接続できません」と返すときの確認先: API のクレジット残高、`ANTHROPIC_API_KEY` の値、Netlify の Functions ログ(`chat`)。
