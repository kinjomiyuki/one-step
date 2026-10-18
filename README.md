# OneStep

[![CI](https://github.com/kinjomiyuki/one-step/actions/workflows/ci.yml/badge.svg)](https://github.com/kinjomiyuki/one-step/actions/workflows/ci.yml)

問いに答えながら進む、問答形式のプログラミング学習プラットフォームです。

**Demo:** https://one-step-programing.netlify.app/

## Overview

解説を読むだけで終わらせず、一問ずつ答えて理解を積み上げる学習アプリです。
各コースは「初級・中級・上級」の3レベルに分かれ、レベルごとに次の4ステップで進みます。

1. 基礎知識
2. 知識テスト(選択式のクイズと解説)
3. 実践シミュレーション
4. 思考力トレーニング(自分の言葉で答え、観点のチェックと模範解答で振り返る)

## Courses

| Course | Topic |
|---|---|
| HTML | マークアップの基本 |
| SCSS | スタイルの書き方と設計 |
| JavaScript基礎入門 | 変数、データ型、演算子など |
| JavaScript web操作入門 | DOM操作、イベント、非同期処理 |
| Python | 基礎から実践まで |
| React | コンポーネント、状態管理、フック |
| Laravel | PHPフレームワークの基本 |
| CSS | セレクタ、ボックスモデル、レイアウト、レスポンシブ |
| SQL | データの取得・更新、集計、JOIN、設計と性能 |
| TypeScript | 型の基本、ユニオン型、ジェネリクス、型を使った設計 |

## Features

- 初回のオンボーディング
- レッスンごとのステップ表示と、完了状況の管理
- 質問用のチャット(AI が回答。質問履歴はブラウザに保存)
- PWA 対応(ホーム画面に追加でき、オフラインでも学習の画面を開ける)
- プレミアムプラン(初級は無料、中級・上級と AI 回答は月額。Stripe。設定は docs/premium-setup.md。スイッチを入れるまでは、全員が無料)
- 学習の進捗と回答は、ブラウザの localStorage に保存(アカウント登録は不要)

## Tech Stack

| Area | Tech |
|---|---|
| Frontend | React 19, Vite |
| Styling | Tailwind CSS 4 |
| Lint | Oxlint |
| Hosting | Netlify (GitHub Actions で自動デプロイ) |
| Dev | Claude Code |

## Getting Started

Node.js 20 以上が必要です。

```bash
git clone https://github.com/kinjomiyuki/one-step.git
cd one-step
npm install
npm run dev
```

| Command | Description |
|---|---|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番ビルド(`dist/` に出力) |
| `npm run preview` | ビルド結果の確認 |
| `npm run lint` | Oxlint で静的チェック |

## Project Structure

```
one-step/
├── src/
│   ├── components/   画面ごとのコンポーネント
│   ├── data/         コースと問題のデータ(courses.js)
│   └── utils/        進捗管理など
├── scripts/          問題データを生成・更新するスクリプト
└── public/
```

## Deploy

`main` ブランチへの push で、GitHub Actions がビルドして Netlify に公開します。
利用するには、リポジトリの Secrets に `NETLIFY_AUTH_TOKEN` と `NETLIFY_SITE_ID` を登録してください。

## Development with AI

Claude Code を使って、設計、実装、動作確認を短いサイクルで回して開発しています。
プロジェクトのルールは [CLAUDE.md](./CLAUDE.md) にまとめています。
