# CLAUDE.md

## Project

OneStep は、問答形式で学ぶプログラミング学習アプリ(React 19 + Vite + Tailwind CSS 4)。
Netlify に公開している。進捗や回答はブラウザの localStorage に保存する。
チャットの回答だけは、Netlify Function(`netlify/functions/chat.mjs`)経由で Claude API を呼んでいる。

## Commands

- `npm install`: 依存関係のインストール
- `npm run dev`: 開発サーバー(ポート 5173)
- `npm run build`: 本番ビルド(`dist/`)
- `npm run lint`: Oxlint

## Structure

- `src/components/`: 画面ごとのコンポーネント
- `src/data/courses.js`: コースと問題のデータ。全コース共通の構造(初級/中級/上級 × 基礎・クイズ・シミュレーション・思考力)
- `netlify/functions/chat.mjs`: チャットの回答を生成する Function(Claude API を呼ぶ)
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

公開サイト(`one-step-programing`)は、Git 連携ではなく Netlify CLI で手動デプロイしている。
`main` にマージしただけでは公開されない(CI は lint・テスト・ビルドの確認のみ)。

1. 変更を `main` にマージし、手元で `git pull origin main`
2. プロジェクトのフォルダで `npx netlify status` を実行し、`Current project: one-step-programing` と出ることを確認する(別サイトに連携されたままだと、別サイトを上書きする)
3. `npx netlify deploy --prod`
4. 公開後、チャットに質問して回答が返ることを確認する

初回やフォルダを作り直したときは、`npx netlify link --id df24e90d-11bc-4e4b-89ea-fda4734d1db4` で連携する。

環境変数(Netlify の Environment variables に設定。値は secret にする):

- `ANTHROPIC_API_KEY`: チャットの Function が使う Claude API キー。変更したら再デプロイする
- `ANTHROPIC_MODEL`: 任意。チャットで使うモデルを変えたいとき(既定は `claude-haiku-5-5`)

チャットが「AI に接続できません」と返すときの確認先: API のクレジット残高、`ANTHROPIC_API_KEY` の値、Netlify の Functions ログ(`chat`)。
