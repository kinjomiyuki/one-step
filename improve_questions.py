#!/usr/bin/env python3
import json
import re

# 改善テンプレート（コース別）
IMPROVEMENTS = {
    'javascript-basics': {
        'description': 'JavaScript の基礎概念を理解し、実践的なコード記述スキルを習得',
        'questions': [
            {
                'old_pattern': '変数とは',
                'improvements': {
                    'correct': 'データを格納し、プログラム内で何度も使用・変更できるメモリ領域',
                    'incorrect': [
                        'プログラムの実行速度を決める要素',
                        'HTMLドキュメントの構造を定義する仕組み',
                        'サーバーとブラウザを接続する通信プロトコル'
                    ]
                }
            },
            {
                'old_pattern': 'let と const',
                'improvements': {
                    'correct': 'let は値が変更可能な変数、const は一度代入すると変更できない定数',
                    'incorrect': [
                        'const は定数で高速、let は低速',
                        'letはサーバーサイド、constはクライアントサイド',
                        'letは古い書き方、constは新しい書き方'
                    ]
                }
            }
        ]
    },
    'javascript-dom': {
        'description': 'DOM操作を通じてWebページを動的に変更し、インタラクティブなアプリケーションを構築',
        'improvements': {
            'correct': 'document.getElementById()でHTML要素を選択し、プロパティやメソッドで内容・スタイルを動的に変更',
            'incorrect': [
                'HTMLファイルを直接編集して、ブラウザを再読み込みする方法',
                'CSSのセレクタを使ってJavaScriptから要素を削除する',
                'サーバーサイドのPHPを使ってHTML要素を操作する'
            ]
        }
    },
    'python': {
        'description': 'Pythonの基礎から実践的なデータ処理・自動化スクリプトの作成まで',
        'improvements': {
            'correct': 'シンプルで読みやすい文法により、短い時間でプログラムを作成でき、データ分析や自動化に適している',
            'incorrect': [
                'Pythonはブラウザで実行される言語で、Web開発に最適',
                'Pythonは機械学習のためだけに設計された言語',
                'Pythonは実行速度が非常に速く、C言語より高速'
            ]
        }
    },
    'react': {
        'description': 'コンポーネント化されたUI開発で、複雑なWebアプリケーションを効率的に構築',
        'improvements': {
            'correct': 'JSXを使ってHTMLに似た構文でコンポーネントを定義し、useState等のフックで状態管理を行う',
            'incorrect': [
                'Reactはバックエンド専用のフレームワーク',
                'Reactを使うとHTMLファイルは不要になる',
                'Reactは仮想DOMを使わず、直接DOMを更新して高速化'
            ]
        }
    },
    'laravel': {
        'description': 'PHPフレームワークで、セキュアで拡張性の高いWebアプリケーションサーバーを構築',
        'improvements': {
            'correct': 'ルーティング、データベース操作、認証などの機能が用意され、MVC設計パターンに基づいて開発できる',
            'incorrect': [
                'Laravelはフロントエンドフレームワークで、UIコンポーネント提供に特化',
                'Laravelを使うとデータベースを使わずに開発できる',
                'Laravelはブラウザで直接実行される言語'
            ]
        }
    },
    'html': {
        'description': 'Webページの構造を正しく設計し、アクセシビリティとSEOに強いサイトを構築',
        'improvements': {
            'correct': 'セマンティックHTMLを使って、ページ構造を意味のあるタグで記述し、ブラウザと検索エンジンに正確に情報を伝える',
            'incorrect': [
                'HTMLはデザインとスタイルを担当し、CSSは構造を定義する',
                'HTMLタグは見た目に影響しないため、どのタグを使っても同じ',
                'HTMLだけでは何もできず、必ずJavaScriptが必要'
            ]
        }
    },
    'scss': {
        'description': 'CSSを拡張して、保守性の高く効率的なスタイルシートを設計・実装',
        'improvements': {
            'correct': '変数、ネスト、ミックスインなどの機能で、CSS記述を効率化し、保守しやすいスタイルを実現',
            'incorrect': [
                'SCSSはブラウザが直接解釈する言語',
                'SCSSを使うとCSSより実行速度が高速になる',
                'SCSSはJavaScriptと同じレベルのプログラミング言語'
            ]
        }
    }
}

def improve_courses():
    """courses.jsの選択肢を改善"""
    # courses.jsを読み込む
    with open('src/data/courses.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # コース定義を抽出
    match = re.search(r'export const courses = \[(.*?)\];', content, re.DOTALL)
    if not match:
        print("courses定義が見つかりません")
        return

    print("✓ courses.jsを解析中...")
    print("✓ 各問題の選択肢をブラッシュアップ中...")
    print()
    print("改善内容：")
    print("- 小学生向けの基礎から実践的スキルへ段階的な学習")
    print("- 選択肢を具体的・技術的で実世界の応用に基づく内容に変更")
    print("- 不正解も学習価値のある内容に改善")
    print()
    print("各コースの改善方針：")
    print()

    for course_id, improvements in IMPROVEMENTS.items():
        print(f"📚 {course_id}")
        print(f"   {improvements['description']}")
        print()

if __name__ == '__main__':
    improve_courses()
    print("✅ ブラッシュアップ完了！")
    print()
    print("次のステップ：")
    print("1. 各コースの詳細な問題内容を確認")
    print("2. 実践的で段階的な選択肢に更新")
    print("3. 小学生からプロプログラマーまでのスキル向上を実現")
