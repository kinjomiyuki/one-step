# CLAUDE.md

## Project

OneStep は、問答形式で学ぶプログラミング学習アプリ(React 19 + Vite + Tailwind CSS 4)。
Netlify に公開している。バックエンドはなく、進捗や回答はブラウザの localStorage に保存する。

## Commands

- `npm install`: 依存関係のインストール
- `npm run dev`: 開発サーバー(ポート 5173)
- `npm run build`: 本番ビルド(`dist/`)
- `npm run lint`: Oxlint

## Structure

- `src/components/`: 画面ごとのコンポーネント
- `src/data/courses.js`: コースと問題のデータ。全コース共通の構造(初級/中級/上級 × 基礎・クイズ・シミュレーション・思考力)
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

- `main` への push で GitHub Actions が Netlify に公開する(`.github/workflows/deploy.yml`)
- Secrets: `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`
