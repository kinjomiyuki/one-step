export const courses = [
  {
    "id": "html",
    "name": "HTML",
    "description": "HTMLの構造とセマンティクスを学びます",
    "icon": "fa-brands fa-html5",
    "lessons": {
      "beginner": [
        {
          "id": "html-beginner-1",
          "title": "基本構造",
          "content": "基本構造について学びます。重要なトピック：DOCTYPE, タグの基礎, 要素と属性",
          "questions": [
            {
              "id": "q-beg-基本構造-1",
              "text": "文書の先頭に書く <!DOCTYPE html> の役割は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "ブラウザに標準モードで解釈させること",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "文字コードを指定すること",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "ページのタイトルを決めること",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "外部の CSS を読み込むこと",
                  "correct": false
                }
              ],
              "explanation": "DOCTYPE 宣言はブラウザに標準モードで解釈するよう伝えます。省略すると互換モードになり、レイアウトが意図せず崩れることがあります。HTML5 では <!DOCTYPE html> の1行だけで済みます。文字コードの指定は meta charset の役割です。",
              "hint": "これを書き忘れると、ブラウザが古い互換モードで表示することがあります。",
              "example": "新しくページを作るときは、必ず1行目に <!DOCTYPE html> を書きます。書き忘れると、同じCSSなのに古いブラウザの表示ルールで解釈され、余白や幅がずれることがあります。"
            },
            {
              "id": "q-beg-基本構造-2",
              "text": "HTML 文書で <head> と <body> の役割の違いは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "head は文書の情報を、body は画面に表示する内容を入れる",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "head は上部に、body は下部に表示される",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "head は CSS 専用、body は JavaScript 専用である",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "head は任意で、body は必須である",
                  "correct": false
                }
              ],
              "explanation": "head には文字コード、タイトル、外部ファイルの読み込みなど、文書に関する情報を書きます。これらは画面には直接表示されません。body には見出しや段落など、実際に表示される内容を入れます。head の内容が上部に表示されるわけではありません。",
              "hint": "title や meta は画面本体に表示されるでしょうか。",
              "example": "ブラウザのタブに出るページ名は <head> の <title> に、画面に見せる見出しや文章は <body> に書き分けます。"
            },
            {
              "id": "q-beg-基本構造-3",
              "text": "<img src=\"cat.jpg\" alt=\"猫\"> の alt 属性が果たす役割は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "画像が表示できないときの代替テキストとなり、読み上げにも使われる",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "画像のファイル形式を指定する",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "画像の表示サイズを決める",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "画像を遅延読み込みにする",
                  "correct": false
                }
              ],
              "explanation": "alt は画像が読み込めないときに表示され、スクリーンリーダーにも読み上げられます。内容を伝える画像には必ず書き、装飾目的の画像は alt=\"\" として読み上げ対象から外します。サイズは width と height、遅延読み込みは loading 属性の役割です。",
              "hint": "目で見られない状況でも内容が伝わるようにする属性です。",
              "example": "ネットショップの商品写真に alt=\"白いリネンのシャツ（正面）\" と書いておくと、目の不自由な人が読み上げで内容を知ることができ、通信が遅く画像が出ないときも何の画像か分かります。"
            },
            {
              "id": "q-beg-基本構造-4",
              "text": "要素と属性の関係を正しく説明しているのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "要素はタグで囲まれたひとまとまり、属性は開始タグに書く追加情報",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "要素と属性はどちらも同じもので呼び方が違うだけ",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "属性は閉じタグに書く",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "属性は1つの要素に1つまでしか書けない",
                  "correct": false
                }
              ],
              "explanation": "要素は開始タグから終了タグまでのひとまとまりを指し、属性はその要素に追加の情報を与えるものです。属性は開始タグの中に書き、スペースで区切って複数並べられます。終了タグには書きません。",
              "hint": "<a href=\"...\" target=\"_blank\"> の中で、a と href はそれぞれ何にあたるでしょうか。",
              "example": "<a href=\"https://...\"> の a が要素、href が属性です。「リンクという部品に、行き先という追加情報を付ける」と考えると書き分けられます。"
            }
          ]
        },
        {
          "id": "html-beginner-2",
          "title": "よく使うタグ",
          "content": "よく使うタグについて学びます。重要なトピック：見出し, 段落, リスト",
          "questions": [
            {
              "id": "q-beg-よく使うタグ-1",
              "text": "見出しタグ h1 から h6 を使うときの原則は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "文書の階層構造に沿って順に使う",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "文字の大きさを基準に選ぶ",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "1ページに h1 を必ず複数置く",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "装飾したい箇所すべてに使う",
                  "correct": false
                }
              ],
              "explanation": "見出しは文書の階層を表すため、レベルを飛ばさず順に使います。支援技術は見出しを手がかりに文書を読み進めるため、構造が正しいと利用しやすくなります。文字の大きさは CSS で調整するもので、タグの選択基準にはしません。",
              "hint": "見出しは見た目のためではなく、文書の構造を示すためのものです。",
              "example": "ブログ記事でタイトルを <h1>、「材料」「作り方」のような章を <h2>、その中の小見出しを <h3> と、目次のような順で使います。"
            },
            {
              "id": "q-beg-よく使うタグ-2",
              "text": "<p> タグの中に <div> を入れられない理由は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "p はテキストを表す要素で、ブロック要素を含められない決まりのため",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "div が非推奨になったため",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "p が1行しか表示できないため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "ブラウザによって表示が異なるため",
                  "correct": false
                }
              ],
              "explanation": "p は段落テキストを表す要素で、中に置けるのはテキストや span などのインライン要素です。div を書くとブラウザが自動的に p を閉じてしまい、意図しない構造になります。まとまりを作りたい場合は div の中に p を置きます。",
              "hint": "HTML には、どの要素の中に何を置けるかという決まりがあります。",
              "example": "段落の中に囲み枠を入れたくなったら、<p> を閉じてから <div> を置きます。p の中に入れると、ブラウザが勝手にタグを閉じて表示が崩れます。"
            },
            {
              "id": "q-beg-よく使うタグ-3",
              "text": "順序が意味を持たない項目を並べるとき、適切なリストは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "<ul>（順序なしリスト）",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "<ol>（順序付きリスト）",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "<dl>（説明リスト）",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "<table>（表）",
                  "correct": false
                }
              ],
              "explanation": "ul は順序に意味がない項目の並びに使い、ol は手順やランキングなど順番自体が情報になる場合に使います。dl は用語とその説明の組に、table は行と列の関係を持つデータに使います。見た目ではなく意味で選びます。",
              "hint": "手順書なら順番に意味がありますが、特徴の列挙ならどうでしょうか。",
              "example": "サイトのメニュー（会社概要・サービス・お問い合わせ）のように、順番に意味がない項目は <ul> で並べます。料理の手順のように順番が大事なら <ol> です。"
            },
            {
              "id": "q-beg-よく使うタグ-4",
              "text": "<strong> と <b> の違いは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "strong は重要性を表し、b は見た目上の太字を表す",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "strong は太字、b は斜体になる",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "どちらも同じで strong は非推奨である",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "b は HTML5 で廃止された",
                  "correct": false
                }
              ],
              "explanation": "strong は内容の重要性を示す要素で、支援技術にもそれが伝わります。b は特に意味を持たせずに視覚的な太字を表します。同様に em は強調、i は見た目上の斜体です。表示だけが目的なら CSS で指定するのが望ましい方法です。",
              "hint": "同じ太字でも、意味を持たせたいかどうかで使い分けます。",
              "example": "「返品は購入後7日以内に限ります」のように見落とされると困る注意書きには <strong> を使います。単に見た目を太くしたいだけならCSSで指定します。"
            }
          ]
        }
      ],
      "intermediate": [
        {
          "id": "html-intermediate-1",
          "title": "フォーム",
          "content": "フォームについて学びます。重要なトピック：input要素, textarea, select",
          "questions": [
            {
              "id": "q-int-フォーム-1",
              "text": "<label> を入力欄と正しく結び付ける方法は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "label の for 属性に input の id を指定する",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "label の name 属性に input の name を指定する",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "label を input の直後に置くだけでよい",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "label に class を付けて CSS で揃える",
                  "correct": false
                }
              ],
              "explanation": "for 属性に input の id を指定すると両者が関連付けられ、ラベルをクリックすると入力欄が選択されます。スクリーンリーダーも項目名を正しく読み上げます。label で input を包む方法でも同じ効果が得られます。近くに置くだけでは関連付けになりません。",
              "hint": "ラベルをクリックしたとき、入力欄にカーソルが移るようにしたい場面です。",
              "example": "ログイン画面で「メールアドレス」という文字をクリックしても入力欄にカーソルが移るよう、label の for と input の id をそろえます。スマホでも押しやすくなります。"
            },
            {
              "id": "q-int-フォーム-2",
              "text": "複数行のテキストを入力させたいとき、使う要素は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "<textarea>",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "<input type=\"text\">",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "<input type=\"longtext\">",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "<div contenteditable>",
                  "correct": false
                }
              ],
              "explanation": "textarea は複数行の入力欄で、rows と cols または CSS で大きさを指定します。input type=\"text\" は1行専用で、longtext という型は存在しません。contenteditable でも編集はできますが、フォームの値として送信されないため入力欄には向きません。",
              "hint": "1行用の入力欄では改行を含む文章を扱えません。",
              "example": "お問い合わせフォームの「ご質問内容」欄のように、何行にもわたる文章を書いてもらう場所に <textarea> を使います。"
            },
            {
              "id": "q-int-フォーム-3",
              "text": "<select> の中で選択肢を表す要素は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "<option>",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "<item>",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "<choice>",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "<li>",
                  "correct": false
                }
              ],
              "explanation": "select の中には option を並べ、value 属性に送信される値を、タグの中身に表示される文字を書きます。選択肢をグループ化する場合は optgroup で囲みます。li はリスト項目用で、select の中では使えません。",
              "hint": "選択肢をグループにまとめたい場合は optgroup を使います。",
              "example": "会員登録フォームの「都道府県」のように、決まった選択肢から1つ選ばせるときに <select> と <option> で一覧を作ります。"
            },
            {
              "id": "q-int-フォーム-4",
              "text": "HTML の required 属性だけに頼った入力チェックが不十分な理由は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "開発者ツールなどで容易に回避できるため",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "古いブラウザで文字化けするため",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "送信速度が遅くなるため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "CSS が適用されなくなるため",
                  "correct": false
                }
              ],
              "explanation": "required はブラウザ上での入力補助であり、開発者ツールで属性を外したり、直接リクエストを送ったりすれば回避できます。体験を良くする効果はありますが、サーバー側での検証を必ず併せて行う必要があります。",
              "hint": "ブラウザ側の仕組みは、利用者の手元で無効にできます。",
              "example": "フォームに required を付けても、サーバー側（PHPやLaravelなど）でも必ずもう一度チェックします。悪意のある人はブラウザのチェックを外して送信できるからです。"
            }
          ]
        },
        {
          "id": "html-intermediate-2",
          "title": "セマンティクス",
          "content": "セマンティクスについて学びます。重要なトピック：header, nav, article, footer",
          "questions": [
            {
              "id": "q-int-セマンティクス-1",
              "text": "セマンティックな HTML を書く目的は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "内容の意味を機械にも伝え、支援技術や検索エンジンが理解できるようにするため",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "記述量を減らして読み込みを速くするため",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "CSS を書かずに装飾するため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "JavaScript の実行を不要にするため",
                  "correct": false
                }
              ],
              "explanation": "セマンティックなタグは、その部分が何であるかを機械にも伝えます。スクリーンリーダーは nav や main を手がかりに読み飛ばしや移動を提供し、検索エンジンは構造を理解します。見た目は CSS が担うため、装飾や速度のための使い分けではありません。",
              "hint": "div だけでも見た目は作れます。それでもタグを使い分ける理由を考えてみましょう。",
              "example": "見た目は同じでも <div class=\"header\"> ではなく <header> と書くと、検索エンジンや読み上げソフトが「ここはヘッダー」と理解できます。"
            },
            {
              "id": "q-int-セマンティクス-2",
              "text": "<article> と <section> の使い分けとして正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "article は単体で完結する内容、section は文書内のまとまりに使う",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "article は文字が多い箇所、section は少ない箇所に使う",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "どちらも同じで、好みで選んでよい",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "article は1ページに1つしか置けない",
                  "correct": false
                }
              ],
              "explanation": "article はブログ記事やニュースのように、単体で取り出しても意味が通る内容に使います。section は文書の中のテーマごとのまとまりで、通常は見出しを伴います。分量で選ぶものではなく、article は1ページに複数置けます。",
              "hint": "その部分だけを切り出して別の場所に置いても意味が通るかどうかが判断材料になります。",
              "example": "ニュースサイトで、1本1本の記事は他のサイトに転載しても意味が通じるので <article>、記事の中の「背景」「今後の見通し」などの章は <section> にします。"
            },
            {
              "id": "q-int-セマンティクス-3",
              "text": "<main> 要素について正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "ページの主要な内容を表し、1ページに1つだけ置く",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "ページの最上部に必ず置く必要がある",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "1ページに複数置いてよい",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "header の中に入れる",
                  "correct": false
                }
              ],
              "explanation": "main はそのページ固有の主要な内容を示し、1ページに1つだけ置きます。ヘッダーやナビゲーション、フッターのように複数ページで共通する部分は含めません。支援技術は main を本文への移動先として利用します。",
              "hint": "「このページの本題はここ」と1か所だけ示すための要素です。",
              "example": "ページの本文部分を <main> で囲んでおくと、読み上げソフトの利用者は「本文へ移動」でヘッダーやメニューを飛ばせます。"
            },
            {
              "id": "q-int-セマンティクス-4",
              "text": "ナビゲーションのリンク群を <nav> で囲む利点は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "支援技術がナビゲーションとして認識し、読み飛ばしや移動ができる",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "リンクが自動的に横並びになる",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "リンクの色が自動で変わる",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "リンク先が新しいタブで開く",
                  "correct": false
                }
              ],
              "explanation": "nav で囲むと支援技術がナビゲーション領域として認識し、利用者はまとめて読み飛ばしたり、そこへ直接移動したりできます。見た目や挙動は変わらないため、横並びや色は CSS、タブでの表示は target 属性で指定します。",
              "hint": "毎ページ同じリンクの並びを読み上げられると、利用者はどう感じるでしょうか。",
              "example": "サイト上部のメニューを <nav> で囲むと、キーボードや読み上げで操作する人が、メニューに直接移動したり飛ばしたりできます。"
            }
          ]
        }
      ],
      "advanced": [
        {
          "id": "html-advanced-1",
          "title": "メタデータと最適化",
          "content": "メタデータと最適化について学びます。重要なトピック：メタタグ, OGP, アクセシビリティ",
          "questions": [
            {
              "id": "q-adv-メタデータと最適化-1",
              "text": "<meta charset=\"UTF-8\"> を head の早い位置に書く理由は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "ブラウザが文字コードを判断する前に解釈させ、文字化けを防ぐため",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "ページの読み込み速度を上げるため",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "検索順位を上げるため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "CSS の適用順を決めるため",
                  "correct": false
                }
              ],
              "explanation": "ブラウザは文書の先頭から解釈を始めるため、文字コードの指定が遅いと誤った解釈のまま読み進め、文字化けや再解析が起きます。そのため head の先頭付近に置きます。速度や検索順位、CSS の適用順とは直接関係しません。",
              "hint": "判断が遅れると、ブラウザは途中まで別の文字コードで読んでしまいます。",
              "example": "日本語のページが「縺薙ｓ縺ｫ縺｡縺ｯ」のように文字化けするのを防ぐため、<head> の一番最初に <meta charset=\"UTF-8\"> を書きます。"
            },
            {
              "id": "q-adv-メタデータと最適化-2",
              "text": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> の役割は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "端末の画面幅に合わせて表示し、レスポンシブ対応を有効にする",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "画像を自動的に縮小する",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "ページの最大幅を固定する",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "タッチ操作を無効にする",
                  "correct": false
                }
              ],
              "explanation": "viewport の指定により、ブラウザは端末の実際の幅を基準に描画します。これが無いと既定の幅で描画してから全体を縮小するため、文字が小さく読みにくくなります。メディアクエリを正しく効かせるためにも必要です。",
              "hint": "これが無いと、スマートフォンでは PC 向けの幅で表示され全体が縮小されます。",
              "example": "パソコンでは問題ないのにスマホで見ると文字が豆粒のように小さい、というときは、viewport の指定が抜けていないか確認します。"
            },
            {
              "id": "q-adv-メタデータと最適化-3",
              "text": "OGP（og:title や og:image）を設定すると______になります。",
              "options": [
                {
                  "id": "a",
                  "text": "SNS で共有されたときの表示内容を指定できる",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "検索結果で必ず上位に表示される",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "ページの読み込みが速くなる",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "画像が自動的に圧縮される",
                  "correct": false
                }
              ],
              "explanation": "OGP は SNS などでリンクが共有された際に表示されるタイトル、説明文、画像を指定する仕組みです。設定しないとサービス側が推測するため、意図しない画像や文言が使われることがあります。検索順位や読み込み速度を直接左右するものではありません。",
              "hint": "リンクを貼ったときに出るカードの見た目を制御するための仕組みです。",
              "example": "ブログ記事をXやLINEで共有したとき、記事のタイトルとアイキャッチ画像がきれいに表示されるよう og:title と og:image を設定します。"
            },
            {
              "id": "q-adv-メタデータと最適化-4",
              "text": "アクセシビリティを高める記述として適切なのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "html 要素に lang 属性を指定し、見出しの階層を正しく保つ",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "すべての要素に aria 属性を付ける",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "画像の alt をすべて空にする",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "文字色と背景色のコントラストを下げる",
                  "correct": false
                }
              ],
              "explanation": "lang 属性は読み上げの言語を決める重要な指定で、見出しの階層は文書内の移動に使われます。aria は適切なタグで表現できない場合の補助であり、むやみに付けるとかえって誤った情報を伝えます。alt を空にするのは装飾画像に限り、コントラストは十分に確保します。",
              "hint": "支援技術が正しく読み上げるために、まず必要な情報は何でしょうか。",
              "example": "<html lang=\"ja\"> と書いておくと、読み上げソフトが日本語として正しく発音します。書かないと英語読みされることがあります。"
            }
          ]
        }
      ],
      "projects": {
        "beginner": [
          {
            "id": "html-project-beginner-1",
            "title": "HTML 初級プロジェクト",
            "content": "基本構造とよく使うタグを組み合わせ、意味の伝わる1ページを組み立てながら確認します。",
            "questions": [
              {
                "id": "q-beg-HTML初級プロジェクト-1",
                "text": "自己紹介ページを作るとき、名前の見出しに使うべきなのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "<h1>（ページの主題を表す見出し）",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "<div class=\"title\">（class で見出しらしく見せる）",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "<p><b>名前</b></p>（太字で強調する）",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "<span style=\"font-size:32px\">（文字を大きくする）",
                    "correct": false
                  }
                ],
                "explanation": "ページの主題を表す見出しには h1 を使います。これにより支援技術や検索エンジンがページの主題を把握できます。div や span を大きく表示しても、それが見出しであるという情報は伝わりません。",
                "hint": "見た目を大きくすることと、見出しであると伝えることは別です。",
                "example": "ポートフォリオサイトのトップで、自分の名前をページで一番大事な見出しとして <h1> にすると、検索エンジンにも「この人のページだ」と伝わります。"
              },
              {
                "id": "q-beg-HTML初級プロジェクト-2",
                "text": "趣味を3つ列挙するとき、適切なマークアップは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "<ul> と <li> を使う",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "<p> を3つ並べ、先頭に「・」を書く",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "<br> で改行して並べる",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "<table> で1列の表を作る",
                    "correct": false
                  }
                ],
                "explanation": "ul と li を使えば、項目の集まりであることが機械にも伝わり、支援技術は件数を読み上げられます。記号や br で並べても見た目が似るだけで構造の情報はありません。table は行と列の関係を持つデータ向けです。",
                "hint": "「・」は文字であって、項目の並びであるという情報は持ちません。",
                "example": "「好きなこと：写真・旅行・料理」のような並びを <ul><li> で書くと、読み上げソフトが「3項目のリスト」と伝えてくれます。"
              },
              {
                "id": "q-beg-HTML初級プロジェクト-3",
                "text": "外部サイトへのリンクを新しいタブで開くとき、あわせて指定すべきなのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "rel=\"noopener\"（開いた先から元ページを操作されるのを防ぐ）",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "download（ファイルとして保存させる）",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "hidden（リンクを隠す）",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "disabled（リンクを無効にする）",
                    "correct": false
                  }
                ],
                "explanation": "target=\"_blank\" で開いたページは window.opener を通じて元のページを操作できるため、rel=\"noopener\" を付けて参照を切ります。多くの最新ブラウザは既定で対応していますが、明示しておくのが安全です。",
                "hint": "target=\"_blank\" だけでは、開いた先のページから元のページを参照できてしまいます。",
                "example": "ブログから参考サイトへ target=\"_blank\" でリンクするとき、rel=\"noopener\" を付けておくと、開いた先のページから元のページを勝手に書き換えられる危険を防げます。"
              },
              {
                "id": "q-beg-HTML初級プロジェクト-4",
                "text": "画像に alt を書くとき、装飾目的の画像に対しては______します。",
                "options": [
                  {
                    "id": "a",
                    "text": "alt=\"\" として読み上げ対象から外す",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "alt に画像のファイル名を書く",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "alt 属性そのものを省略する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "alt に「画像」と書く",
                    "correct": false
                  }
                ],
                "explanation": "装飾目的の画像は alt=\"\" とすることで、支援技術が読み飛ばします。属性そのものを省略するとファイル名が読み上げられることがあり、ファイル名や「画像」という語を書いても情報になりません。内容を伝える画像には、その内容を説明する文を書きます。",
                "hint": "意味を持たない画像を読み上げられると、かえって邪魔になります。",
                "example": "見出しの横に置いた飾りの線や模様の画像は alt=\"\" にして、読み上げで「画像、画像」と意味のない音声が流れるのを防ぎます。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "html-project-intermediate-1",
            "title": "HTML 中級プロジェクト",
            "content": "フォームとセマンティックなタグを使い、入力しやすく構造の明確なページを作りながら確認します。",
            "questions": [
              {
                "id": "q-int-HTML中級プロジェクト-1",
                "text": "メールアドレスの入力欄に type=\"email\" を指定する利点は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "形式の簡易チェックが働き、スマートフォンで適したキーボードが出る",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "サーバー側の検証が不要になる",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "入力内容が暗号化される",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "文字数が自動的に制限される",
                    "correct": false
                  }
                ],
                "explanation": "type=\"email\" はブラウザによる簡易的な形式チェックを有効にし、モバイルでは @ を含むキーボードが表示されます。ただしこれは補助であり、サーバー側の検証は必須です。暗号化は HTTPS の役割で、文字数は maxlength で指定します。",
                "hint": "入力のしやすさと、簡単な形式チェックの両方に効きます。",
                "example": "会員登録フォームのメール欄を type=\"email\" にすると、スマホで「@」付きのキーボードが出て、「@」がないまま送信しようとすると警告も出ます。"
              },
              {
                "id": "q-int-HTML中級プロジェクト-2",
                "text": "問い合わせフォーム全体を囲む要素として適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "<form>（送信先と送信方法を指定できる）",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "<div>（自由にレイアウトできる）",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "<section>（意味のまとまりを表せる）",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "<fieldset>（項目をグループ化できる）",
                    "correct": false
                  }
                ],
                "explanation": "form は action と method で送信先と方法を指定し、Enter キーでの送信やブラウザの自動入力を有効にします。div や section では送信の仕組みが働きません。fieldset はフォーム内で関連項目をまとめる要素で、全体を囲むものではありません。",
                "hint": "Enter キーでの送信やブラウザの入力支援は、どの要素があると働くでしょうか。",
                "example": "お問い合わせフォーム全体を <form action=\"/contact\" method=\"post\"> で囲み、送信ボタンを押したときにどこへどう送るかを指定します。"
              },
              {
                "id": "q-int-HTML中級プロジェクト-3",
                "text": "ページの骨組みを組むとき、共通のロゴとサイト名を置く領域に使うのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "<header>",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "<head>",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "<top>",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "<div id=\"header\">",
                    "correct": false
                  }
                ],
                "explanation": "header は表示されるヘッダー領域を表すセマンティックな要素です。head は文書のメタ情報を入れる別の要素で画面には現れません。top という要素は存在せず、div に id を付けても意味は機械に伝わりません。",
                "hint": "文書情報を入れる要素と、表示されるヘッダー領域は別物です。",
                "example": "コーポレートサイトの全ページ共通のロゴとメニューを <header> にまとめます。"
              },
              {
                "id": "q-int-HTML中級プロジェクト-4",
                "text": "関連する複数のラジオボタンをまとめて説明したいとき、使うとよいのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "<fieldset> と <legend>",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "<label> を1つだけ置く",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "<h3> で見出しを付ける",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "<div> で囲んで CSS で枠を描く",
                    "correct": false
                  }
                ],
                "explanation": "fieldset で関連する項目をまとめ、legend にグループ全体の説明を書くと、支援技術が各選択肢を読み上げる際にその文脈を伝えられます。見出しや枠線では見た目は整いますが、グループであるという関係は伝わりません。",
                "hint": "グループ全体の問いかけを、支援技術にも伝えたい場面です。",
                "example": "アンケートの「満足度：満足・普通・不満」のラジオボタン群を <fieldset> で囲み、<legend> で「満足度」と書くと、読み上げで何の選択肢かが伝わります。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "html-project-advanced-1",
            "title": "HTML 上級プロジェクト",
            "content": "メタデータとアクセシビリティを踏まえ、共有と読み上げに配慮したページ設計を確認します。",
            "questions": [
              {
                "id": "q-adv-HTML上級プロジェクト-1",
                "text": "複数ページのサイトで、各ページの <title> に持たせるべき内容は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "そのページ固有の内容を先に、サイト名を後ろに書く",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "すべてのページで同じサイト名だけを書く",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "検索されたい語をできるだけ多く並べる",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "空にしてブラウザに任せる",
                    "correct": false
                  }
                ],
                "explanation": "title はタブ、ブックマーク、検索結果、読み上げの冒頭で使われます。固有の内容を先に置けば、表示が途中で切れても区別できます。全ページ同じでは見分けられず、語を詰め込むと読みにくく評価も下がります。",
                "hint": "タブが多数開いているとき、どこまで見えるかを考えてみましょう。",
                "example": "「料金プラン｜○○クリニック」のようにページ固有の名前を先に書くと、タブをたくさん開いたときや検索結果で、どのページか見分けやすくなります。"
              },
              {
                "id": "q-adv-HTML上級プロジェクト-2",
                "text": "本文へ素早く移動するためのスキップリンクを置く目的は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "キーボード利用者が繰り返しのナビゲーションを飛ばせるようにするため",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "ページの読み込みを速くするため",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "検索エンジンに本文を伝えるため",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "スクロールバーを非表示にするため",
                    "correct": false
                  }
                ],
                "explanation": "キーボードだけで操作する利用者は Tab キーで順に移動するため、共通のナビゲーションを毎回通過することになります。先頭にスキップリンクを置けば main へ直接移動できます。読み込み速度や検索評価のための仕組みではありません。",
                "hint": "マウスを使わない利用者は、毎ページ同じリンクを順に辿ることになります。",
                "example": "メニュー項目が20個あるサイトで、ページ最上部に「本文へスキップ」リンクを置くと、キーボードで操作する人が毎回Tabを20回押さずに済みます。"
              },
              {
                "id": "q-adv-HTML上級プロジェクト-3",
                "text": "aria 属性を使う際の原則は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "適切なセマンティック要素で表せる場合は、そちらを優先する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "すべての要素に role を付けて意味を明示する",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "div にすべての役割を集約する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "aria は古い仕様なので使わない",
                    "correct": false
                  }
                ],
                "explanation": "button や nav などの要素は、役割・キーボード操作・フォーカスが最初から備わっています。div に role を付けて同じ挙動を再現するには追加の実装が必要で、抜け漏れが起きやすくなります。aria は既存要素で表現できない場合の補助として使います。",
                "hint": "button 要素と、role=\"button\" を付けた div ではどちらが確実でしょうか。",
                "example": "ボタンを作るときは <div role=\"button\"> ではなく、最初から <button> を使います。キーボード操作や読み上げへの対応が最初から入っています。"
              },
              {
                "id": "q-adv-HTML上級プロジェクト-4",
                "text": "画像の読み込みを後回しにして初期表示を速くしたいとき、使えるのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "loading=\"lazy\" 属性",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "hidden 属性",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "defer 属性",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "async 属性",
                    "correct": false
                  }
                ],
                "explanation": "loading=\"lazy\" を指定すると、画面外の画像は表示位置に近づくまで読み込まれません。ただし最初から見える主要な画像に付けると表示が遅れるため避けます。defer と async は script 用の属性で、hidden は要素そのものを非表示にします。",
                "hint": "画面外の画像を、スクロールされるまで読み込まないようにしたい場面です。",
                "example": "写真がたくさん並ぶギャラリーページで、画面の下のほうにある画像に loading=\"lazy\" を付けると、スクロールして近づくまで読み込まれず、最初の表示が速くなります。"
              }
            ]
          }
        ]
      },
      "basics": {
        "beginner": [
          {
            "id": "html-basics-beginner",
            "title": "HTML の骨組みと、よく使うタグ",
            "content": "HTML は Web ページの骨組みを作る言語です。見た目ではなく「これは見出し」「これはリスト」という意味を伝えるのが役割です。基本の形を押さえましょう。",
            "sections": [
              {
                "heading": "ページの基本の形",
                "body": "1行目の <!DOCTYPE html> は「今の標準の HTML として読んでください」という宣言で、書き忘れると古い表示ルールで解釈されて崩れることがあります。<head> にはタイトルや文字コードなどページの情報を、<body> には画面に表示する内容を書きます。",
                "code": "<!DOCTYPE html>\n<html lang=\"ja\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>山田花子のポートフォリオ</title>\n</head>\n<body>\n  <h1>山田花子</h1>\n</body>\n</html>"
              },
              {
                "heading": "要素と属性",
                "body": "開始タグと終了タグで囲まれたまとまりを「要素」、開始タグに書く追加情報を「属性」と呼びます。<a href=\"...\"> なら、a がリンクという要素、href が行き先という属性です。"
              },
              {
                "heading": "見出しは階層の順に使う",
                "body": "<h1>〜<h6> は文字の大きさではなく、文書の構造を表します。ページの主題を <h1>、大きな章を <h2>、その中の小見出しを <h3> のように、目次の順で使います。文字を大きくしたいだけなら CSS で指定します。",
                "code": "<h1>カレーの作り方</h1>\n<h2>材料</h2>\n<h2>作り方</h2>\n<h3>下ごしらえ</h3>"
              },
              {
                "heading": "リストと強調の使い分け",
                "body": "順番に意味がない項目は <ul>、手順のように順番が大事なものは <ol> で並べ、各項目は <li> にします。<strong> は「重要」という意味を表し、<b> は意味を持たない見た目の太字です。段落を表す <p> の中には <div> のようなブロック要素を入れられません。",
                "code": "<ul>\n  <li>写真</li>\n  <li>旅行</li>\n</ul>\n<p><strong>返品は購入後7日以内に限ります。</strong></p>"
              },
              {
                "heading": "画像の alt と、新しいタブで開くリンク",
                "body": "画像には alt で内容を説明する文章を付けます。読み上げソフトで内容を伝えたり、画像が表示できないときに代わりに表示されたりします。飾りの画像は alt=\"\" にして読み上げを省きます。リンクを新しいタブで開くときは rel=\"noopener\" を付け、開いた先から元のページを操作されるのを防ぎます。",
                "code": "<img src=\"shirt.jpg\" alt=\"白いリネンのシャツ（正面）\">\n<img src=\"line.png\" alt=\"\">\n<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">参考サイト</a>"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "html-basics-intermediate",
            "title": "使いやすいフォームと、意味の伝わる構造",
            "content": "入力フォームは、使う人が迷わず入力できることが大切です。ページ全体を意味のある要素で組み立てると、検索エンジンや読み上げソフトにも内容が伝わります。",
            "sections": [
              {
                "heading": "フォームの基本と label",
                "body": "<form> で入力欄をまとめ、送信先（action）と送信方法（method）を指定します。<label> の for と入力欄の id をそろえると、ラベルを押しても入力欄が選ばれ、読み上げでも項目名が伝わります。",
                "code": "<form action=\"/contact\" method=\"post\">\n  <label for=\"email\">メールアドレス</label>\n  <input type=\"email\" id=\"email\" name=\"email\" required>\n  <button>送信</button>\n</form>"
              },
              {
                "heading": "入力の種類に合った部品を選ぶ",
                "body": "メールなら type=\"email\"、電話番号なら type=\"tel\" にすると、スマホで入力しやすいキーボードが出て、簡単な形式チェックも働きます。複数行の文章は <textarea>、決まった選択肢から選ぶなら <select> と <option> を使います。",
                "code": "<textarea name=\"message\" rows=\"5\"></textarea>\n<select name=\"pref\">\n  <option value=\"tokyo\">東京都</option>\n  <option value=\"osaka\">大阪府</option>\n</select>"
              },
              {
                "heading": "ラジオボタンは fieldset と legend でまとめる",
                "body": "関連する選択肢は <fieldset> で囲み、<legend> で何の質問かを書きます。読み上げソフトで「満足度：満足」のように、質問と選択肢がセットで伝わります。",
                "code": "<fieldset>\n  <legend>満足度</legend>\n  <label><input type=\"radio\" name=\"rating\" value=\"good\"> 満足</label>\n  <label><input type=\"radio\" name=\"rating\" value=\"bad\"> 不満</label>\n</fieldset>"
              },
              {
                "heading": "ブラウザのチェックだけに頼らない",
                "body": "required などのブラウザによる入力チェックは、使う人の助けにはなりますが、開発者ツールなどで簡単に外せます。悪意ある送信を防ぐため、サーバー側でも必ずもう一度チェックします。"
              },
              {
                "heading": "セマンティックな要素でページを組み立てる",
                "body": "<div> だけで作らず、意味を持つ要素を使います。共通のロゴやメニューは <header>、メニューのリンク群は <nav>、ページの主な内容は <main>（1ページに1つ）、単体で完結する記事は <article>、記事の中の章は <section> です。読み上げソフトの利用者は、これを手がかりにページの中を移動できます。",
                "code": "<header>\n  <nav>...</nav>\n</header>\n<main>\n  <article>\n    <h1>記事タイトル</h1>\n    <section><h2>背景</h2>...</section>\n  </article>\n</main>"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "html-basics-advanced",
            "title": "メタデータ・アクセシビリティ・表示速度",
            "content": "見た目には出ない部分の作り込みが、検索・共有・使いやすさ・速さの差になります。公開できる品質のページに必要なことを押さえましょう。",
            "sections": [
              {
                "heading": "文字コードと viewport",
                "body": "<meta charset=\"UTF-8\"> は <head> のできるだけ最初に書き、ブラウザが文字を読み始める前に文字コードを伝えて文字化けを防ぎます。viewport の指定がないと、スマホでもパソコン向けの幅で表示されて文字が小さくなります。",
                "code": "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
              },
              {
                "heading": "title と OGP",
                "body": "<title> はタブ・ブックマーク・検索結果に使われます。「料金プラン｜○○クリニック」のように、ページ固有の内容を先に、サイト名を後ろに書きます。OGP（og:title、og:image など）を設定すると、SNS で共有されたときのタイトルや画像を指定できます。",
                "code": "<title>料金プラン｜さくら歯科クリニック</title>\n<meta property=\"og:title\" content=\"料金プラン｜さくら歯科クリニック\">\n<meta property=\"og:image\" content=\"https://example.com/ogp.png\">"
              },
              {
                "heading": "lang 属性とスキップリンク",
                "body": "<html lang=\"ja\"> と書くと、読み上げソフトが日本語として正しく発音します。ページの最初に「本文へスキップ」のリンクを置くと、キーボードで操作する人が毎回メニューを飛ばして本文に移れます。",
                "code": "<a href=\"#main\" class=\"skip-link\">本文へスキップ</a>\n...\n<main id=\"main\">...</main>"
              },
              {
                "heading": "aria は「最後の手段」",
                "body": "aria 属性は、HTML の要素だけでは意味を伝えられないときに補うものです。ボタンなら <div role=\"button\"> ではなく <button> を使うのが基本です。<button> にはキーボード操作や読み上げへの対応が最初から入っています。"
              },
              {
                "heading": "画像の遅延読み込み",
                "body": "loading=\"lazy\" を付けた画像は、スクロールして画面に近づくまで読み込まれません。写真がたくさん並ぶページで最初の表示を速くできます。ただし、ページを開いてすぐに見える一番上の画像には付けません。",
                "code": "<img src=\"gallery-12.jpg\" alt=\"夕焼けの海\" loading=\"lazy\" width=\"600\" height=\"400\">"
              }
            ]
          }
        ]
      },
      "thinking": {
        "beginner": [
          {
            "id": "html-thinking-beginner",
            "title": "意味の伝わるマークアップを考える",
            "content": "正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。",
            "prompts": [
              {
                "id": "html-thinking-beginner-1",
                "scenario": "友人が作った自己紹介ページの HTML です。ブラウザで見ると見た目はそれらしく表示されていますが、「読み上げソフトで聞くと分かりにくい」と言われたそうです。",
                "code": "<div class=\"big\">山田花子</div>\n<b>好きなこと</b>\n<div>・写真<br>・旅行<br>・料理</div>\n<img src=\"me.jpg\">\n<img src=\"flower-line.png\">\n<a href=\"https://example.com\" target=\"_blank\">ブログ</a>",
                "question": "このコードの問題点を挙げ、どう書き直すとよいかを理由とともに説明してください。",
                "checkpoints": [
                  "名前を見出し（h1）、「好きなこと」を見出し（h2 など）にするべきだと指摘している",
                  "「・」と <br> で並べた項目を <ul> と <li> のリストにするべきだと指摘している",
                  "写真に内容を表す alt、飾りの画像に alt=\"\" を付けるべきだと指摘している",
                  "新しいタブで開くリンクに rel=\"noopener\" を付けることに触れている"
                ],
                "modelAnswer": "この HTML は見た目を整えるために書かれていて、意味が伝わりません。名前は大きな文字の div ではなく、ページの主題として <h1>山田花子</h1> にします。「好きなこと」は太字ではなく章の見出しなので <h2> にします。見出しにしておくと、読み上げソフトの利用者は見出しから見出しへ移動してページの内容をつかめます。「・」と <br> で並べた項目は <ul><li>写真</li><li>旅行</li><li>料理</li></ul> にすると、「リスト、3項目」と伝わります。写真には alt=\"山田花子の写真（海辺で笑っている）\" のように内容を書き、飾りの花の線は alt=\"\" にして読み上げを省きます。最後に、新しいタブで開くリンクには rel=\"noopener\" を付け、開いた先のページから元のページを操作されるのを防ぎます。",
                "tip": "「画面を見られない人が、この HTML だけを聞いたらどう伝わるか」を想像すると、選ぶべきタグが見えてきます。"
              },
              {
                "id": "html-thinking-beginner-2",
                "scenario": "あなたは近所のパン屋のホームページを作ることになりました。トップページには、お店の名前、お知らせ（3件）、おすすめのパン（写真付きで4種類）、パンを作る手順の紹介（こね・発酵・成形・焼成の4段階）、営業時間、Instagram へのリンクを載せます。",
                "question": "各部分にどのタグを使うかを決め、その理由を書いてください。",
                "checkpoints": [
                  "お店の名前を <h1>、各コーナーの見出しを <h2> にしている",
                  "順番に意味のない「お知らせ」「おすすめ」を <ul>、順番が大事な「手順」を <ol> にしている",
                  "パンの写真に、パンの名前や特徴が分かる alt を付けている",
                  "Instagram へのリンクの書き方（rel=\"noopener\" など）や、見出しの階層の順に触れている"
                ],
                "modelAnswer": "お店の名前はページの主題なので <h1> にし、「お知らせ」「おすすめのパン」「パンができるまで」「営業時間」はそれぞれ <h2> の見出しにします。こうすると見出しが目次のような階層になります。お知らせとおすすめのパンは順番に意味がないので <ul> と <li> で並べ、パンの手順は「こね→発酵→成形→焼成」と順番が大事なので <ol> にします。パンの写真には alt=\"バターがしみたクロワッサン\" のように名前と特徴を書き、読み上げでもどんなパンか伝わるようにします。営業時間は段落 <p> で書きます。Instagram へのリンクを新しいタブで開くなら target=\"_blank\" と rel=\"noopener\" をセットで付けます。",
                "tip": "迷ったら「順番を入れ替えたら意味が変わるか？」で ul と ol を、「目次に載せたいか？」で見出しにするかを決めましょう。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "html-thinking-intermediate",
            "title": "迷わず使えるフォームとページ構造を設計する",
            "content": "使う人の立場に立って、フォームとページの構造を設計する練習です。理由まで書いてみましょう。",
            "prompts": [
              {
                "id": "html-thinking-intermediate-1",
                "scenario": "歯科医院の予約フォームを作ります。項目は、お名前、メールアドレス、電話番号、希望日、診療内容（検診・虫歯の治療・ホワイトニングから1つ選ぶ）、ご相談内容（自由記述）です。スマホから予約する人が7割います。",
                "question": "各項目にどの部品（タグや type）を使うかを決め、使いやすさと正しく送信されるための工夫を書いてください。",
                "checkpoints": [
                  "メールに type=\"email\"、電話番号に type=\"tel\"、希望日に type=\"date\" など、内容に合った type を選んでいる",
                  "診療内容をラジオボタン（fieldset と legend）や select で選ばせている",
                  "すべての入力欄に label を for と id で結び付けている",
                  "必須項目に required を付けつつ、サーバー側でもチェックする必要に触れている"
                ],
                "modelAnswer": "フォーム全体を <form action=\"/reserve\" method=\"post\"> で囲みます。お名前は type=\"text\"、メールアドレスは type=\"email\"、電話番号は type=\"tel\"、希望日は type=\"date\" にします。スマホでは、それぞれ@付きのキーボード、数字のキーボード、カレンダーが出るので入力が楽になり、メールの形式チェックも働きます。診療内容は3つから1つを選ぶので、<fieldset> と <legend>診療内容</legend> で囲んだラジオボタンにし、何の質問かが読み上げでも伝わるようにします。ご相談内容は複数行になるので <textarea> にします。すべての入力欄に <label for=\"...\"> を付け、ラベルを押しても入力欄が選ばれるようにします。小さな画面では押しやすさが大切だからです。お名前・連絡先・希望日には required を付けますが、ブラウザのチェックは外せるので、サーバー側でも必ずもう一度確かめます。",
                "tip": "フォームの部品は「スマホでどんなキーボードが出るか」「ラベルを押したらどうなるか」を想像して選びましょう。"
              },
              {
                "id": "html-thinking-intermediate-2",
                "scenario": "ニュースサイトの記事ページが、すべて <div> だけで作られています。ページには、サイトのロゴとメニュー、記事本文（見出し、公開日、本文、「背景」「今後の見通し」の2つの章）、関連記事の一覧、著作権表示があります。",
                "question": "セマンティックな要素を使って骨組みを書き直す方針と、そうする利点を書いてください。",
                "checkpoints": [
                  "ロゴとメニューを <header> と <nav>、著作権表示を <footer> にしている",
                  "本文部分を <main>（1ページに1つ）で囲んでいる",
                  "記事を <article>、記事の中の章を <section>（見出し付き）にしている",
                  "読み上げソフトでの移動や、検索エンジンへの伝わりやすさなどの利点を説明している"
                ],
                "modelAnswer": "ロゴとメニューは <header> にまとめ、メニューのリンク群を <nav> で囲みます。ページの主な内容は <main> で囲み、その中の記事本体を <article> にします。記事は単体で読んでも意味が通じるまとまりだからです。<article> の中に <h1> の見出しと <time datetime=\"2026-10-02\"> の公開日を置き、「背景」「今後の見通し」はそれぞれ <section> に <h2> の見出しを付けて書きます。関連記事の一覧は <aside> にし、著作権表示は <footer> にします。こうすると、読み上げソフトの利用者は「メインへ移動」「ナビゲーションを飛ばす」といった操作ができ、検索エンジンにもどこが記事の本体かが伝わります。見た目は CSS で今までどおりに整えられます。",
                "tip": "<div> を書く前に「この部分には名前の付いた役割があるか？」と考えると、適切な要素が見つかります。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "html-thinking-advanced",
            "title": "公開前の品質チェックを設計する",
            "content": "見た目が完成しても、公開できる品質とは限りません。検索・共有・使いやすさ・速さの視点で点検する練習です。",
            "prompts": [
              {
                "id": "html-thinking-advanced-1",
                "scenario": "個人経営の歯科医院のサイト（トップ・料金・アクセス・予約の4ページ）が完成しました。院長から「Google で探しにくい」「LINE で送ると画像が出ない」「スマホだと文字が小さい」と言われています。調べると、全ページの <title> が「さくら歯科」だけで、<head> には <title> しか書かれていませんでした。",
                "question": "院長の3つの不満の原因と、<head> に何をどう書けばよいかを説明してください。",
                "checkpoints": [
                  "各ページの <title> を「ページ固有の内容｜サイト名」の形にすることを提案している",
                  "og:title・og:image などの OGP を設定して、共有時の表示を整えることを提案している",
                  "viewport の meta を書いて、スマホの幅に合わせた表示にすることを提案している",
                  "meta charset を先頭に書く、description を書く、lang=\"ja\" を付けるなどの追加の点検に触れている"
                ],
                "modelAnswer": "「Google で探しにくい」のは、4ページとも <title> が「さくら歯科」だけで、検索結果でどのページか区別できず、内容も伝わらないからです。「料金プラン｜さくら歯科クリニック（○○駅徒歩3分）」のように、ページ固有の内容を先に書きます。あわせて <meta name=\"description\"> でページの要約を書くと、検索結果の説明文に使われます。「LINE で画像が出ない」のは OGP がないからです。og:title、og:description、og:image（共有用の画像の URL）を設定します。「スマホで文字が小さい」のは viewport の指定がなく、パソコン向けの幅で縮小表示されているからです。<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> を書きます。ほかにも、<meta charset=\"UTF-8\"> を <head> の先頭に書いて文字化けを防ぎ、<html lang=\"ja\"> を付けて読み上げを正しくします。",
                "tip": "<head> の中身は画面に見えないぶん抜けやすいので、「検索」「共有」「スマホ」「文字」の4つで点検しましょう。"
              },
              {
                "id": "html-thinking-advanced-2",
                "scenario": "写真家のポートフォリオサイトのトップページに、高画質の写真が60枚並んでいます。スマホで開くと表示まで10秒以上かかります。また、キーボードだけで操作すると、上部の20個のメニューを毎回 Tab で通過しないと写真にたどり着けません。写真をクリックすると拡大する機能は <div onclick=\"...\"> で作られています。",
                "question": "表示の速さと、キーボードでの使いやすさを改善する方法を、それぞれ理由とともに書いてください。",
                "checkpoints": [
                  "画面の下のほうの写真に loading=\"lazy\" を付け、最初に見える写真には付けないことに触れている",
                  "写真に width と height を指定する、適切なサイズの画像を用意するなど、追加の改善を挙げている（任意）",
                  "ページ先頭に「本文へスキップ」のリンクを置くことを提案している",
                  "<div onclick> を <button> に置き換え、キーボードで操作できるようにすることを提案している"
                ],
                "modelAnswer": "表示の速さについては、60枚すべてを最初に読み込んでいるのが原因です。画面の下のほうにある写真に loading=\"lazy\" を付ければ、スクロールして近づくまで読み込まれず、最初の表示が速くなります。ただし、開いてすぐ見える最初の数枚には付けません。付けると、かえって表示が遅れるからです。あわせて、各画像に width と height を書いて読み込み中のレイアウトのずれを防ぎ、一覧には縮小版の画像を使うとさらに速くなります。キーボードの使いやすさについては、ページの先頭に「本文へスキップ」のリンクを置き、写真一覧の <main id=\"main\"> に移動できるようにします。また、写真を拡大する <div onclick> は Tab で選べず Enter でも動かないので、<button> に置き換えます。<button> ならキーボード操作と読み上げへの対応が最初から入っています。",
                "tip": "「スマホの遅い回線で開いたら」「マウスを使わずに操作したら」の2つを実際に試すと、改善点が見つかります。"
              }
            ]
          }
        ]
      }
    },
    "shortLabel": "HT"
  },
  {
    "id": "css",
    "name": "CSS",
    "description": "セレクタ、ボックスモデル、レイアウトなど、見た目を整える基本を学びます",
    "icon": "fa-brands fa-css3-alt",
    "lessons": {
      "projects": {
        "beginner": [
          {
            "id": "css-project-beginner-1",
            "title": "CSS 初級プロジェクト",
            "content": "カード部品を作りながら、ボックスモデル、色、動きの基本を確認します。",
            "questions": [
              {
                "id": "q-beg-CSS初級プロジェクト-1",
                "text": "ページ全体で、padding や border を含めて大きさを計算しやすくするために、最初に書いておくとよい指定は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "全要素に margin: 0 を指定する",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "全要素に box-sizing: border-box を指定する",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "全要素に display: block を指定する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "全要素に position: relative を指定する",
                    "correct": false
                  }
                ],
                "explanation": "box-sizing: border-box を全体に指定しておくと、width に padding と border が含まれ、計算が楽になります。margin のリセットや display の指定は、別の目的の指定で、大きさの計算には影響しません。",
                "hint": "width: 300px と書いたとき、見た目の幅がそのまま 300px になってほしい場面を考えます。",
                "example": "* { box-sizing: border-box; } を、スタイルシートの最初に書いておけば、あとから padding や border を足しても、幅が崩れません。新しいページを作るたびの定番の1行です。"
              },
              {
                "id": "q-beg-CSS初級プロジェクト-2",
                "text": "カードの中身と枠線の間に、背景色が塗られた余白を作りたいときに使うのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "margin",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "gap",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "outline",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "padding",
                    "correct": true
                  }
                ],
                "explanation": "padding は内側の余白で、背景色が塗られます。margin は外側の余白で、背景は塗られません。gap は Flexbox や Grid の中で、アイテム同士の間隔を空けるときに使います。",
                "hint": "背景色が塗られるのは、要素の内側か外側のどちらでしょうか。",
                "example": "カードの中の文字が、枠線にくっつかないよう、.card { padding: 16px; } で内側に余白を作ります。カードどうしを離したいときは、margin や gap を使います。"
              },
              {
                "id": "q-beg-CSS初級プロジェクト-3",
                "text": "カードにマウスを乗せたときの変化を滑らかにするために使うのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "display: smooth",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "animation-name: hover",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "transition",
                    "correct": true
                  },
                  {
                    "id": "d",
                    "text": "visibility: slow",
                    "correct": false
                  }
                ],
                "explanation": "transition は、プロパティの値が変わるとき、指定した時間をかけて少しずつ変化させます。.card { transition: transform 0.2s; } と書き、.card:hover { transform: translateY(-4px); } とすれば、ふわっと浮く動きになります。",
                "hint": "変化の「前」と「後」の間を、少しずつ補間して動かします。",
                "example": "カードにマウスを乗せたとき、transform: translateY(-4px) で少し浮かせ、transition: transform 0.2s を付けると、ふわっとした動きになり、押せることが伝わります。"
              },
              {
                "id": "q-beg-CSS初級プロジェクト-4",
                "text": "背景が白いカードの文字色を決めるとき、最も重視すべきなのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "ブランドカラーを、必ず使うこと",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "背景に近い色にして、上品に見せること",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "文字を、できるだけ細くすること",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "背景とのコントラストが十分にあり、読みやすいこと",
                    "correct": true
                  }
                ],
                "explanation": "文字は、背景との明るさの差（コントラスト）が十分でないと読みにくくなります。薄いグレーの文字を白い背景に置くのは、よくある失敗です。デザインの好みより先に、読みやすさを確保します。",
                "hint": "明るい場所や、視力に差がある人が読む場合も想像してみましょう。",
                "example": "薄いグレーの文字を白い背景に置くと、スマホを屋外で見たときに読めなくなります。色を決めたら、背景とのコントラストを確認します。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "css-project-intermediate-1",
            "title": "CSS 中級プロジェクト",
            "content": "幅に応じて列の数が変わるカード一覧を作りながら、レイアウトの考え方を確認します。",
            "questions": [
              {
                "id": "q-int-CSS中級プロジェクト-1",
                "text": "画面の幅に応じて、カードの列の数が自動で変わる Grid を作る指定は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "grid-template-columns: repeat(3, 1fr)",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "grid-template-columns: 240px",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "grid-auto-flow: column",
                    "correct": false
                  }
                ],
                "explanation": "repeat(auto-fit, minmax(240px, 1fr)) は、最小 240px の列が入るだけ並び、余った幅は均等に分けられます。メディアクエリを書かなくても、画面の幅に応じて列の数が変わります。",
                "hint": "「1枚の幅が最低 240px で、入るだけ並べる」という指定です。",
                "example": "商品一覧で、幅に応じて列の数が3列、2列、1列と変わってほしいとき、repeat(auto-fit, minmax(240px, 1fr)) と書けば、メディアクエリなしで実現できます。"
              },
              {
                "id": "q-int-CSS中級プロジェクト-2",
                "text": "カードどうしの間隔を、マージンの相殺や端の余分な余白を気にせずに空ける方法は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "すべてのカードに、margin: 10px を付ける",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "カードの間に、空の div を入れる",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "コンテナに gap を指定する",
                    "correct": true
                  },
                  {
                    "id": "d",
                    "text": "<br> タグを入れる",
                    "correct": false
                  }
                ],
                "explanation": "gap は、Flexbox や Grid のアイテムどうしの間だけに間隔を作ります。margin を使うと、端のカードの外側にも余白ができたり、調整が必要になったりします。空の要素や <br> で間隔を作るのは、HTML を汚すので避けます。",
                "hint": "Flexbox や Grid では、アイテムどうしの間だけを空けるプロパティがあります。",
                "example": "カードの間隔を空けるとき、gap: 16px と書けば、カードの間だけ16pxになります。margin で調整すると、端のカードの外側にも余白ができて、ずれることがあります。"
              },
              {
                "id": "q-int-CSS中級プロジェクト-3",
                "text": "画像が親の幅からはみ出さないようにするために、よく使う指定は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "img { overflow: hidden; }",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "img { width: 100vw; }",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "img { max-width: 100%; height: auto; }",
                    "correct": true
                  },
                  {
                    "id": "d",
                    "text": "img { position: fixed; }",
                    "correct": false
                  }
                ],
                "explanation": "max-width: 100% は、画像が親の幅を超えないようにします。height: auto を合わせて指定すると、縦横比を保ったまま縮みます。width: 100vw は画面幅いっぱいになり、親からはみ出すことがあります。",
                "hint": "画像本来の大きさより大きくならず、親が狭いときだけ縮んでほしい場面です。",
                "example": "記事の画像が、大きな写真のまま親の枠からはみ出し、スマホで横スクロールが出てしまうときは、img { max-width: 100%; height: auto; } を指定します。"
              },
              {
                "id": "q-int-CSS中級プロジェクト-4",
                "text": "メディアクエリのブレークポイント（切り替えの幅）を決めるときの考え方として適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "特定の機種の画面幅に、ぴったり合わせる",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "レイアウトが崩れる幅や、読みにくくなる幅を基準にする",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "必ず 320px、640px、1280px のいずれかにする",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "少なければ少ないほどよいので、必ず1つだけにする",
                    "correct": false
                  }
                ],
                "explanation": "機種の数は多く、画面幅も毎年変わるので、特定の機種に合わせるのは現実的ではありません。内容が窮屈になったり、行が長すぎて読みにくくなったりする幅を基準にします。決まった数字はなく、サイトの内容によって変わります。",
                "hint": "ブラウザの幅を少しずつ変えてみて、内容が窮屈になるところを探します。",
                "example": "画面の幅を、少しずつ縮めて、文字が窮屈になった幅をブレークポイントにします。特定の機種の幅に合わせると、新しい機種が出るたびに、見直しが必要になります。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "css-project-advanced-1",
            "title": "CSS 上級プロジェクト",
            "content": "色や余白の決まりごとを、カスタムプロパティで一元管理し、ダークモードにも対応させます。",
            "questions": [
              {
                "id": "q-adv-CSS上級プロジェクト-1",
                "text": "色や余白のデザインの決まりを、サイト全体で共有するために、カスタムプロパティをどこに定義するのが一般的か。答えは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "各ボタンの中",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "head の中の title タグ",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "img 要素",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": ":root（ページ全体に適用されるルート）",
                    "correct": true
                  }
                ],
                "explanation": ":root は html 要素を指し、ここで定義したカスタムプロパティは、ページ内のすべての要素から参照できます。色、余白、角丸などを :root にまとめておけば、デザインの変更も1か所で済みます。",
                "hint": "ページのどこからでも var(--名前) で取り出せる場所が必要です。",
                "example": "色、余白、角丸などを :root にカスタムプロパティとしてまとめておけば、「全体の青を少し明るく」といった変更も、1か所の修正で、全ページに反映されます。"
              },
              {
                "id": "q-adv-CSS上級プロジェクト-2",
                "text": "OS やブラウザのダークモード設定に自動で合わせるために使うのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "@media (min-width: dark)",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "@supports (color: dark)",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "@font-face { color: dark }",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "@media (prefers-color-scheme: dark)",
                    "correct": true
                  }
                ],
                "explanation": "prefers-color-scheme は、利用者が OS やブラウザで選んでいる配色の設定を調べるためのメディアクエリです。@media (prefers-color-scheme: dark) の中で、:root のカスタムプロパティの値を、暗い配色に差し替えます。",
                "hint": "利用者の設定（好み）を調べるメディアクエリです。",
                "example": "OS をダークモードにしている人には、最初から暗い配色で表示したいとき、@media (prefers-color-scheme: dark) の中で、:root の値を差し替えます。"
              },
              {
                "id": "q-adv-CSS上級プロジェクト-3",
                "text": "利用者がボタンで、ライトとダークを手動で切り替えられるようにするとき、適切な方法は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "ボタンを押すたびに、別の CSS ファイルを読み込み直す",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "すべての要素に、個別に色を指定する",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "html に data-theme 属性を付け替え、属性ごとにカスタムプロパティの値を定義する",
                    "correct": true
                  },
                  {
                    "id": "d",
                    "text": "ページを2つ作り、リンクで行き来する",
                    "correct": false
                  }
                ],
                "explanation": "[data-theme=\"dark\"] { --bg: #1e1e1e; } のように、属性ごとに値を定義しておき、ボタンで html の data-theme を付け替えます。CSS は1つのままで、全体の配色が一度に変わります。ファイルの読み込み直しは、ちらつきの原因になります。",
                "hint": "見た目の切り替えを、HTML の属性1つの変更だけで済ませたい場面です。",
                "example": "サイトのヘッダーにある「ライト／ダーク」の切り替えボタンは、html の data-theme を付け替えるだけです。CSS ファイルは1つのままで、画面全体の配色が変わります。"
              },
              {
                "id": "q-adv-CSS上級プロジェクト-4",
                "text": "部品のスタイルを、あとから上書きしやすく保つために、セレクタの書き方で気をつけるのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "できるだけ ID セレクタを使う",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "クラスセレクタ1つを基本にし、詳細度を低く揃える",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "親から子まで、長く繋げて書く",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "すべてに !important を付ける",
                    "correct": false
                  }
                ],
                "explanation": "ID セレクタや、長く繋げたセレクタは詳細度が高く、上書きするためにさらに強い指定が必要になります。クラスセレクタ1つを基本にして詳細度を揃えておくと、後ろに書いたものが勝つ、という単純なルールで管理できます。",
                "hint": "詳細度が高いスタイルを上書きするには、さらに高い詳細度が必要になります。",
                "example": "部品のスタイルを、クラス1つに揃えておくと、あとからバリエーション用のクラスを追加するだけで、見た目を上書きできます。ID や長いセレクタは、あとで困ります。"
              }
            ]
          }
        ]
      },
      "beginner": [
        {
          "id": "css-beginner-1",
          "title": "セレクタと詳細度",
          "content": "どの要素にどのスタイルを当てるかを決めるセレクタと、スタイルが衝突したときの優先順位を学びます。",
          "questions": [
            {
              "id": "q-beg-セレクタと詳細度-1",
              "text": "クラスセレクタを書くとき、クラス名の前に付ける記号は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "#（例: #card）",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": ".（例: .card）",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "@（例: @card）",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": ":（例: :card）",
                  "correct": false
                }
              ],
              "explanation": "クラスセレクタはドット（.）で始めます。# は ID セレクタ、: は :hover のような擬似クラスに使います。クラスは同じ名前を複数の要素に付けられるので、部品のスタイルを当てるときの基本になります。",
              "hint": "HTML の class=\"card\" に当てるスタイルです。ID セレクタとは別の記号を使います。",
              "example": ".card { ... } と書けば、class=\"card\" を付けた要素すべてに、同じ見た目をまとめて当てられます。ボタンやカードのような、繰り返し使う部品のスタイルの基本です。"
            },
            {
              "id": "q-beg-セレクタと詳細度-2",
              "text": "同じ要素に、要素セレクタ（h1）とクラスセレクタ（.title）が別々の色を指定しているとき、適用されるのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "クラスセレクタの色（詳細度が高いため）",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "要素セレクタの色（先に書かれているため）",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "2つの色が混ざった色",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "どちらも適用されず、ブラウザの初期色になる",
                  "correct": false
                }
              ],
              "explanation": "スタイルが衝突すると、まず詳細度（セレクタの強さ）が比べられ、強いほうが勝ちます。要素セレクタよりクラスセレクタのほうが強いので、.title の色が適用されます。詳細度が同じときだけ、後ろに書かれたものが勝ちます。",
              "hint": "「どちらが後ろに書かれたか」の前に、セレクタの強さを比べます。",
              "example": "ページ全体の p には灰色を指定し、特に目立たせたい注意書きだけ .notice で赤にするとき、強いほう（.notice）の色が優先されるので、順番を気にせず書けます。"
            },
            {
              "id": "q-beg-セレクタと詳細度-3",
              "text": "CSS の「継承」の説明として正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "すべてのプロパティが、親から子に自動で引き継がれる",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "子要素のスタイルが、親要素に引き継がれる",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "継承させるには、すべてのプロパティに inherit を書く必要がある",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "color や font-family などは、親要素の値が子要素にも引き継がれる",
                  "correct": true
                }
              ],
              "explanation": "color や font-family のような文字に関するプロパティは、親の値が子に引き継がれます。一方、margin や border などは引き継がれません。引き継がれないプロパティでも、inherit を指定すれば親の値を使えます。",
              "hint": "body に文字色を指定すると、中の段落の文字色も変わることを思い出してみましょう。",
              "example": "body に font-family を指定しておけば、見出しや段落にいちいち書かなくても、ページ全体で同じフォントになります。border は継承されないので、子要素に枠線は付きません。"
            },
            {
              "id": "q-beg-セレクタと詳細度-4",
              "text": "!important を多用しないほうがよい理由は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "ブラウザによっては、!important が無視されるため",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "後から上書きするのが難しくなり、スタイルの管理が難しくなるため",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "ページの読み込みが遅くなるため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "クラスセレクタと一緒に使えないため",
                  "correct": false
                }
              ],
              "explanation": "!important は詳細度を無視して優先されるため、後から上書きするには、さらに !important を重ねるしかなくなります。そうなるとスタイルの優先順位が追いにくくなります。まずはセレクタの書き方や順番を見直し、どうしても必要なときだけ使います。",
              "hint": "!important が付いたスタイルを、後から変えたくなったときのことを考えてみましょう。",
              "example": "「どうしても直らない」からと !important を付けると、次に直す人も !important を付けるしかなくなります。まず、セレクタが他と競合していないかを確かめます。"
            }
          ]
        },
        {
          "id": "css-beginner-2",
          "title": "ボックスモデルと単位",
          "content": "すべての要素は四角い箱として扱われます。箱の構造と、大きさを表す単位の違いを学びます。",
          "questions": [
            {
              "id": "q-beg-ボックスモデルと単位-1",
              "text": "ボックスモデルで、内側から外側へ並ぶ順番として正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "content → margin → border → padding",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "content → border → padding → margin",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "content → padding → border → margin",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "padding → content → margin → border",
                  "correct": false
                }
              ],
              "explanation": "内容（content）、内側の余白（padding）、枠線（border）、外側の余白（margin）の順です。padding は背景色が塗られる内側の余白で、margin は要素どうしの距離を空ける外側の余白です。",
              "hint": "中身のまわりに余白（内側）があり、その外側に枠線、さらに外側に他の要素との距離があります。",
              "example": "ボタンが思ったより大きく表示されるときは、padding と border を確認します。内側から content、padding、border、margin の順に重なっているので、どの層が大きいのかを見分けられます。"
            },
            {
              "id": "q-beg-ボックスモデルと単位-2",
              "text": "box-sizing: border-box を指定したときの width は______を含んだ大きさになります。",
              "options": [
                {
                  "id": "a",
                  "text": "padding と border",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "margin だけ",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "padding、border、margin のすべて",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "何も含まず、content の幅だけ",
                  "correct": false
                }
              ],
              "explanation": "border-box では、width に padding と border が含まれます。width: 300px と書けば、見た目の幅が 300px に収まるので、計算が楽になります。多くのサイトでは、* { box-sizing: border-box; } を最初に指定しています。",
              "hint": "初期値（content-box）では、width に padding と border が足されて、実際の見た目が大きくなります。",
              "example": "幅 300px のカードに padding: 20px を付けると、content-box では見た目が 340px に広がります。border-box にしておけば 300px のまま収まるので、横にはみ出しません。"
            },
            {
              "id": "q-beg-ボックスモデルと単位-3",
              "text": "rem 単位の基準になる大きさは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "親要素のフォントサイズ",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "html 要素（ルート）のフォントサイズ",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "ブラウザ画面の幅",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "その要素自身の幅",
                  "correct": false
                }
              ],
              "explanation": "rem は html 要素のフォントサイズが基準です。多くのブラウザでは初期値が 16px なので、1rem = 16px になります。em は親要素の影響を受けて、入れ子になると大きさが積み重なりますが、rem は常に同じ基準なので、扱いやすくなります。",
              "hint": "em は親要素が基準です。rem の r は「root（ルート）」を表します。",
              "example": "見出しの文字サイズを rem で書いておけば、利用者がブラウザの文字サイズを大きくしたとき、ページ全体の文字がそろって大きくなります。px 固定だと、変わらないことがあります。"
            },
            {
              "id": "q-beg-ボックスモデルと単位-4",
              "text": "縦に隣り合う2つの要素の margin が、重なって大きいほうだけが有効になる現象を______といいます。",
              "options": [
                {
                  "id": "a",
                  "text": "マージンの継承",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "マージンのリセット",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "マージンの相殺",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "マージンのオーバーフロー",
                  "correct": false
                }
              ],
              "explanation": "縦方向に隣り合う margin は、足し算されず、大きいほうの値だけが採用されます。これをマージンの相殺といいます。上の例では間隔は 30px になります。左右の margin や、Flexbox・Grid の中では相殺は起きません。",
              "hint": "上の要素に margin-bottom: 20px、下の要素に margin-top: 30px を付けたときの間隔は、50px にはなりません。",
              "example": "見出しの margin-bottom: 20px と、次の段落の margin-top: 30px の間隔が 50px にならず、30px になる理由を調べたいとき、マージンの相殺を思い出します。"
            }
          ]
        }
      ],
      "intermediate": [
        {
          "id": "css-intermediate-1",
          "title": "Flexbox",
          "content": "要素を横や縦に並べ、揃えるための仕組みです。親と子の役割と、主なプロパティを学びます。",
          "questions": [
            {
              "id": "q-int-Flexbox-1",
              "text": "display: flex を指定した要素の直接の子要素は、______になります。",
              "options": [
                {
                  "id": "a",
                  "text": "フレックスコンテナ",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "フレックスアイテム",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "グリッドアイテム",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "インライン要素",
                  "correct": false
                }
              ],
              "explanation": "display: flex を指定した親がフレックスコンテナで、その直接の子要素がフレックスアイテムです。孫要素は並び方の対象になりません。並べ方を指定するプロパティは、コンテナに書くものとアイテムに書くものに分かれています。",
              "hint": "親は「容れ物（コンテナ）」、その中に並べられるものは「項目（アイテム）」です。",
              "example": "ナビゲーションのリンクを横一列に並べるとき、ul に display: flex を指定すると、直接の子の li が、フレックスアイテムとして横に並びます。"
            },
            {
              "id": "q-int-Flexbox-2",
              "text": "flex-direction: row のとき、justify-content が揃える方向は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "縦方向",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "斜め方向",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "横方向（主軸）",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "奥行き方向",
                  "correct": false
                }
              ],
              "explanation": "justify-content は主軸方向、align-items は交差軸方向の揃え方を決めます。row では主軸が横なので、justify-content は横方向の揃えです。column にすると主軸が縦になるので、役割が入れ替わります。",
              "hint": "justify-content は主軸、align-items は交差軸に沿って揃えます。row の主軸は左から右です。",
              "example": "ヘッダーで、ロゴを左に、メニューを右に離して置きたいとき、justify-content: space-between を使います。縦の中央に揃えたいときは、align-items: center です。"
            },
            {
              "id": "q-int-Flexbox-3",
              "text": "フレックスアイテムに flex: 1 を指定したときの動きは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "余った空間を、他のアイテムと分け合って伸びる",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "大きさが 1px に固定される",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "他のアイテムより先に縮む",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "1 行目にだけ表示される",
                  "correct": false
                }
              ],
              "explanation": "flex: 1 は、余った空間を伸びて埋める指定です。複数のアイテムにすべて flex: 1 を付ければ、同じ幅で均等に分け合います。サイドバーを固定幅にして、本文だけ flex: 1 にすれば、残りの幅をすべて使わせることができます。",
              "hint": "flex: 1 は flex-grow: 1 を含む短縮記法です。",
              "example": "サイドバーに width: 240px を指定し、本文に flex: 1 を指定すると、本文が残りの幅をすべて使います。画面幅が変わっても、サイドバーは 240px のままです。"
            },
            {
              "id": "q-int-Flexbox-4",
              "text": "フレックスアイテムが1行に収まらないとき、折り返して次の行に並べるための指定は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "flex-direction: wrap",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "flex-flow: none",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "justify-content: wrap",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "flex-wrap: wrap",
                  "correct": true
                }
              ],
              "explanation": "flex-wrap: wrap をコンテナに指定すると、収まらないアイテムが次の行に折り返されます。初期値の nowrap のままだと、アイテムが縮んだり、はみ出したりします。カード一覧のような並びでは、wrap と gap を組み合わせるのが定番です。",
              "hint": "初期値は nowrap で、収まらなくても折り返さず、縮められます。",
              "example": "タグの一覧は、数が増えると1行に収まりません。flex-wrap: wrap を付けておけば、次の行に折り返して並びます。間隔は gap で空けます。"
            }
          ]
        },
        {
          "id": "css-intermediate-2",
          "title": "Grid とレスポンシブ",
          "content": "行と列で配置する Grid と、画面の幅に応じて見た目を切り替える方法を学びます。",
          "questions": [
            {
              "id": "q-int-Gridとレスポンシブ-1",
              "text": "grid-template-columns: repeat(3, 1fr) と書いたときの表示は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "幅 1px の列が3本できる",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "同じ幅の列が3本できる",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "3 行にわたって 1 つの列ができる",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "1 列目だけが、3 倍の幅になる",
                  "correct": false
                }
              ],
              "explanation": "repeat(3, 1fr) は、1fr の列を3本並べる指定です。fr は、余ったスペースを分け合う比率の単位なので、3本とも同じ幅になります。1fr 2fr 1fr のように書けば、真ん中だけ2倍の幅にできます。",
              "hint": "repeat(3, 1fr) は、1fr を3回繰り返すという意味です。",
              "example": "商品カードを、同じ幅で3列に並べたいとき、grid-template-columns: repeat(3, 1fr) と書きます。1fr 2fr 1fr のように、列ごとに幅の比率を変えることもできます。"
            },
            {
              "id": "q-int-Gridとレスポンシブ-2",
              "text": "Flexbox と Grid の使い分けとして、最も適切なのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "Flexbox は PC 用、Grid はスマホ用",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "Grid のほうが新しいので、Flexbox はもう使わない",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "Flexbox は1方向の並び、Grid は行と列の2方向のレイアウトに向いている",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Flexbox は文字用、Grid は画像用",
                  "correct": false
                }
              ],
              "explanation": "Flexbox は、横一列や縦一列に並べる1方向のレイアウトが得意です。Grid は、行と列の両方を使った2次元のレイアウトに向いています。どちらかだけを使うのではなく、ページ全体は Grid、部品の中の並びは Flexbox のように、組み合わせるのが一般的です。",
              "hint": "ナビゲーションのように1列に並べるものと、ページ全体の格子状のレイアウトを思い浮かべてみましょう。",
              "example": "ページ全体（ヘッダー・サイドバー・本文・フッター）の配置は Grid、ヘッダーの中のメニューの並びは Flexbox、というように、場面ごとに使い分けます。"
            },
            {
              "id": "q-int-Gridとレスポンシブ-3",
              "text": "モバイルファーストの書き方で、広い画面向けのスタイルを追加するときに使うのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "@media (max-width: 767px)",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "@media print",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "@media (min-width: 768px)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "@media (orientation: landscape)",
                  "correct": false
                }
              ],
              "explanation": "モバイルファーストでは、基本のスタイルをスマホ向けに書き、min-width のメディアクエリで広い画面向けの変更を足していきます。スマホは軽い指定だけで済み、書く量も少なくなります。max-width は、逆に小さい画面向けの指定を足すときに使います。",
              "hint": "まず小さい画面用のスタイルを書き、画面が広くなったら上書きしていきます。",
              "example": "まず、スマホ向けに、縦に1列に並べるスタイルを書きます。そのあと @media (min-width: 768px) の中で、横に2列に並べる指定を足します。"
            },
            {
              "id": "q-int-Gridとレスポンシブ-4",
              "text": "スマホで見たときにレイアウトが崩れないよう、HTML の head に書いておくべきなのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "<meta name=\"description\" content=\"...\">",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "<meta charset=\"UTF-8\">",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "<link rel=\"stylesheet\" href=\"style.css\">",
                  "correct": false
                }
              ],
              "explanation": "viewport の meta タグは、スマホの画面幅に合わせて表示するための指定です。ないと、スマホは約 980px の幅で描画して縮小表示するため、メディアクエリも期待どおりに動きません。レスポンシブなページには必須の1行です。",
              "hint": "これがないと、スマホはパソコン向けの広い幅で描画してから縮小して表示してしまいます。",
              "example": "スマホで見たら、PC 用のページが縮んで、小さく表示された場合は、まず head に viewport の meta タグがあるかを確認します。"
            }
          ]
        }
      ],
      "advanced": [
        {
          "id": "css-advanced-1",
          "title": "設計と最新の機能",
          "content": "大きなサイトでも崩れにくい書き方と、最近使えるようになった機能の使いどころを学びます。",
          "questions": [
            {
              "id": "q-adv-設計と最新の機能-1",
              "text": "CSS カスタムプロパティ（CSS 変数）を定義して使う書き方は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "$main: #3b82f6; を定義し、color: $main; で使う",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "--main: #3b82f6; を定義し、color: var(--main); で使う",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "@main: #3b82f6; を定義し、color: @main; で使う",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "main = #3b82f6 を定義し、color: main で使う",
                  "correct": false
                }
              ],
              "explanation": "カスタムプロパティは、-- で始まる名前で定義し、var() で取り出します。:root に書けばページ全体で使えます。SCSS の変数と違って、表示中に値を書き換えられるので、ダークモードなどの切り替えにも使えます。",
              "hint": "SCSS の $ や Less の @ とは違い、CSS 自身の仕組みです。",
              "example": ":root { --primary: #3b82f6; } とし、ボタンもリンクも var(--primary) で参照すれば、ブランドカラーの変更は1行で済みます。表示中に書き換えることもできます。"
            },
            {
              "id": "q-adv-設計と最新の機能-2",
              "text": "BEM の命名で、.card__title--large が表しているのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "card という要素の中の large という要素",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "title というブロックに属する card という要素",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "card ブロックの title 要素で、large という修飾（見た目の違い）が付いたもの",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "card と title と large の3つの独立したブロック",
                  "correct": false
                }
              ],
              "explanation": "BEM は、ブロック__要素--修飾子 の形で名前を付けます。.card__title--large は、card ブロックの中の title 要素で、large という違いがあるもの、という意味です。名前から構造が分かり、詳細度を揃えやすいのも利点です。",
              "hint": "BEM は Block（ブロック）、Element（要素）、Modifier（修飾子）の頭文字です。",
              "example": ".card__title--large のように、名前に構造が入っていれば、HTML を見ただけで、どの部品の何の部分かが分かります。チームで開発するときに、名前の迷いが減ります。"
            },
            {
              "id": "q-adv-設計と最新の機能-3",
              "text": "コンテナクエリ（@container）が、メディアクエリと違う点は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "印刷時にだけ使える",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "JavaScript がないと動かない",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "画面全体の幅ではなく、親のコンテナの幅に応じてスタイルを切り替えられる",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "詳細度を無視して、常に優先される",
                  "correct": false
                }
              ],
              "explanation": "メディアクエリは画面全体の幅で切り替えますが、コンテナクエリは、置かれている親の幅で切り替えます。同じ部品を、広い場所と狭い場所の両方で使うとき、置き場所に応じた見た目にできるので、部品単位の設計に向いています。",
              "hint": "同じカード部品が、広いメイン領域と狭いサイドバーのどちらにも置かれる場面を考えてみましょう。",
              "example": "同じカードを、広いメイン領域では横並びに、狭いサイドバーでは縦並びにしたいとき、画面幅ではなく、親の幅で切り替わるコンテナクエリが役に立ちます。"
            },
            {
              "id": "q-adv-設計と最新の機能-4",
              "text": "font-size: clamp(16px, 2vw, 24px) の説明として正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "画面幅に応じて変わるが、16px 未満にも 24px 超にもならない",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "16px から 24px まで、2 秒かけて大きくなる",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "常に 2vw で、16px と 24px は無視される",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "16px、2vw、24px の平均値になる",
                  "correct": false
                }
              ],
              "explanation": "clamp(最小, 理想, 最大) は、理想の値（ここでは 2vw）を使いつつ、最小値より小さくならず、最大値より大きくならないようにします。メディアクエリを使わずに、文字サイズを画面幅に滑らかに合わせたいときに便利です。",
              "hint": "clamp は、最小値、理想の値、最大値の3つを受け取ります。",
              "example": "見出しの文字を、スマホでは 16px、PC では 24px にしたい場面で、clamp(16px, 2vw, 24px) と1行書けば、メディアクエリなしで、滑らかに変わります。"
            }
          ]
        }
      ],
      "basics": {
        "beginner": [
          {
            "id": "css-basics-beginner",
            "title": "セレクタ・詳細度・ボックスモデル",
            "content": "CSS は「どの要素に」「どんな見た目を」当てるかを書く言語です。まずは、当てる相手の選び方と、すべての要素の土台になる箱の考え方を押さえましょう。",
            "sections": [
              {
                "heading": "セレクタで対象を選ぶ",
                "body": "要素の名前（p）、クラス（.card）、ID（#header）などで、スタイルを当てる相手を選びます。繰り返し使う部品には、クラスを使うのが基本です。ID は、ページに1つだけの要素向けですが、強すぎて上書きしにくいため、スタイルを当てる目的ではあまり使いません。",
                "code": "p { color: #333; }          /* 要素セレクタ */\n.card { padding: 16px; }   /* クラスセレクタ */\n.card:hover { opacity: .8; } /* 擬似クラス */",
                "example": "ボタンの見た目を .button にまとめておけば、class=\"button\" を付けた要素すべてに、同じスタイルを当てられます。"
              },
              {
                "heading": "詳細度と、後ろが勝つルール",
                "body": "同じ要素に矛盾するスタイルがあるとき、まず詳細度（セレクタの強さ）が比べられ、強いほうが勝ちます。目安は「要素 < クラス < ID < インラインスタイル」です。詳細度が同じなら、後ろに書いたほうが勝ちます。!important は、この仕組みを無視するため、最後の手段です。",
                "code": "p { color: gray; }\n.notice { color: red; }  /* クラスのほうが強い */\n/* <p class=\"notice\"> は red になる */"
              },
              {
                "heading": "継承",
                "body": "color や font-family など、文字に関するプロパティは、親の値が子にも引き継がれます。body に指定しておけば、ページ全体に効きます。margin や border のように、引き継がれないプロパティもあります。",
                "code": "body {\n  font-family: sans-serif;\n  color: #333;\n}\n/* 中の p や h1 にも、同じフォントと色が適用される */"
              },
              {
                "heading": "ボックスモデル",
                "body": "すべての要素は、内側から content（中身）、padding（内側の余白）、border（枠線）、margin（外側の余白）という層でできた箱です。初期値では、width は content だけの幅ですが、box-sizing: border-box を指定すると、padding と border も含まれ、計算が楽になります。",
                "code": "* { box-sizing: border-box; }\n.card {\n  width: 300px;\n  padding: 16px;\n  border: 1px solid #ddd;\n  margin-bottom: 24px;\n}"
              },
              {
                "heading": "単位の使い分けと、マージンの相殺",
                "body": "px は固定の大きさ、rem は html のフォントサイズを基準にした大きさです。文字や余白に rem を使うと、利用者が文字サイズを変えたときに、ページ全体が合わせて拡大されます。縦に隣り合う margin は、足されず、大きいほうだけが有効になる（相殺）ので、間隔が思ったより小さくなることがあります。",
                "code": "h2 { font-size: 1.5rem; margin-bottom: 20px; }\np  { margin-top: 30px; }\n/* h2 と p の間隔は、50px ではなく 30px */"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "css-basics-intermediate",
            "title": "Flexbox と Grid、レスポンシブ",
            "content": "要素を並べて配置する仕組みと、画面の幅に合わせて見た目を切り替える方法を学びます。現在の CSS のレイアウトは、この2つが中心です。",
            "sections": [
              {
                "heading": "Flexbox で1方向に並べる",
                "body": "display: flex を親に指定すると、直接の子が横一列に並びます。justify-content は主軸方向（横）の揃え、align-items は交差軸方向（縦）の揃えを決めます。間隔は gap で空けます。",
                "code": ".header {\n  display: flex;\n  justify-content: space-between; /* 左右に離す */\n  align-items: center;            /* 縦の中央 */\n  gap: 16px;\n}",
                "example": "ロゴを左、メニューを右に置くヘッダーは、space-between の定番の使い方です。"
              },
              {
                "heading": "flex の伸び縮みと折り返し",
                "body": "アイテムに flex: 1 を付けると、余った空間を埋めるように伸びます。固定幅のサイドバーと、残りを使う本文という組み合わせがよく使われます。1行に収まらないときは、コンテナに flex-wrap: wrap を指定すると折り返されます。",
                "code": ".layout { display: flex; gap: 24px; }\n.side { width: 240px; }\n.main { flex: 1; }"
              },
              {
                "heading": "Grid で行と列に配置する",
                "body": "display: grid と grid-template-columns で、列の数と幅を決めます。fr は余ったスペースを分け合う比率の単位です。repeat(auto-fit, minmax(240px, 1fr)) と書くと、画面の幅に応じて列の数が自動で変わります。",
                "code": ".cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 16px;\n}"
              },
              {
                "heading": "Flexbox と Grid の使い分け",
                "body": "1方向（横一列、縦一列）に並べるなら Flexbox、行と列の両方を使った格子状のレイアウトなら Grid が向いています。ページ全体のレイアウトは Grid、その中の部品の並びは Flexbox、というように組み合わせるのが一般的です。"
              },
              {
                "heading": "レスポンシブとメディアクエリ",
                "body": "head に viewport の meta タグを書き、スマホ向けのスタイルを基本にして、広い画面向けの指定を min-width のメディアクエリで足す方法（モバイルファースト）が定番です。切り替えの幅は、特定の機種ではなく、内容が窮屈になる幅を基準に決めます。",
                "code": "/* 基本（スマホ） */\n.cards { grid-template-columns: 1fr; }\n\n/* 広い画面 */\n@media (min-width: 768px) {\n  .cards { grid-template-columns: repeat(2, 1fr); }\n}"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "css-basics-advanced",
            "title": "設計とモダンな CSS",
            "content": "規模が大きくなっても崩れにくい書き方と、最近の CSS の機能を学びます。「動く」から「保守しやすい」へ、目線を広げましょう。",
            "sections": [
              {
                "heading": "カスタムプロパティで決まりごとを一元管理する",
                "body": "--名前: 値; で定義し、var(--名前) で使います。:root に色や余白をまとめておけば、デザインの変更が1か所で済みます。SCSS の変数とは違い、表示中に値を書き換えられるので、ダークモードなどの切り替えにも使えます。",
                "code": ":root {\n  --color-primary: #3b82f6;\n  --space: 8px;\n}\n.button {\n  background: var(--color-primary);\n  padding: calc(var(--space) * 2);\n}"
              },
              {
                "heading": "ダークモードに対応する",
                "body": "@media (prefers-color-scheme: dark) の中でカスタムプロパティの値を差し替えると、OS の設定に自動で合わせられます。利用者が手動で切り替えたいときは、html の data-theme 属性ごとに値を定義し、ボタンで属性を付け替えます。",
                "code": ":root { --bg: #fff; --text: #222; }\n[data-theme=\"dark\"] { --bg: #1e1e1e; --text: #eee; }\nbody { background: var(--bg); color: var(--text); }"
              },
              {
                "heading": "命名規則と詳細度の管理",
                "body": "BEM は、ブロック__要素--修飾子 の形で名前を付ける規則です。クラスセレクタ1つを基本にして詳細度を揃えると、「後ろに書いたものが勝つ」という単純なルールで管理できます。ID セレクタや長く繋げたセレクタは、上書きが難しくなります。",
                "code": ".card { ... }\n.card__title { ... }\n.card__title--large { font-size: 1.5rem; }"
              },
              {
                "heading": "コンテナクエリで部品単位に切り替える",
                "body": "メディアクエリは画面全体の幅で切り替えますが、コンテナクエリは、部品が置かれている親の幅で切り替えます。同じ部品が、広い場所にも狭い場所にも置かれるとき、置き場所に合った見た目にできます。",
                "code": ".wrapper { container-type: inline-size; }\n\n@container (min-width: 400px) {\n  .card { display: flex; }\n}"
              },
              {
                "heading": "clamp() で滑らかに変化させる",
                "body": "clamp(最小, 理想, 最大) は、理想の値を使いつつ、最小値と最大値の範囲に収めます。文字サイズや余白を、画面幅に応じて滑らかに変えるのに便利で、メディアクエリを減らせます。",
                "code": "h1 { font-size: clamp(1.5rem, 4vw, 2.5rem); }\n.section { padding-block: clamp(24px, 6vw, 64px); }"
              }
            ]
          }
        ]
      },
      "thinking": {
        "beginner": [
          {
            "id": "css-thinking-beginner",
            "title": "崩れた見た目の原因を探る",
            "content": "正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。",
            "prompts": [
              {
                "id": "css-thinking-beginner-1",
                "scenario": "幅 300px のカードを並べたところ、padding: 20px と border: 1px を付けた途端、カードが横にはみ出し、2枚並べるはずの場所に収まらなくなりました。幅の指定は、width: 300px のままです。",
                "code": ".card {\n  width: 300px;\n  padding: 20px;\n  border: 1px solid #ddd;\n}",
                "question": "なぜ、はみ出すのかを説明し、直し方を書いてください。",
                "checkpoints": [
                  "初期値（content-box）では、width が content だけの幅で、padding と border が外側に足されることを説明している",
                  "実際の見た目の幅が、300 + 40 + 2 = 342px になることなど、具体的に計算している",
                  "box-sizing: border-box を指定すると、padding と border が width に含まれることを示している",
                  "全要素に * { box-sizing: border-box; } を指定しておく、という方法に触れている"
                ],
                "modelAnswer": "初期値の box-sizing: content-box では、width は中身（content）だけの幅です。そこに padding（左右で 40px）と border（左右で 2px）が外側に足されるため、実際の見た目は 342px になり、枠からはみ出します。直し方は、box-sizing: border-box を指定することです。border-box では、width に padding と border が含まれるので、width: 300px と書けば、見た目も 300px のまま収まります。毎回書くのは大変なので、スタイルシートの最初に * { box-sizing: border-box; } と書き、全要素に指定しておくのが定番です。",
                "tip": "レイアウトが「思ったより大きい」ときは、ボックスの4つの層のどこが大きいのかを疑いましょう。"
              },
              {
                "id": "css-thinking-beginner-2",
                "scenario": "あるサイトで、.notice に color: red を指定したのに、なぜか文字が黒のままです。調べると、別のファイルに、次のようなスタイルが書かれていました。",
                "code": ".content p { color: black; }   /* 別のファイル */\n.notice { color: red; }        /* 自分が書いた */\n/* <div class=\"content\"><p class=\"notice\">注意</p></div> */",
                "question": "なぜ、赤にならないのかを、詳細度の考え方で説明してください。そのうえで、!important を使わない直し方を書いてください。",
                "checkpoints": [
                  ".content p（クラス + 要素）のほうが、.notice（クラスだけ）より詳細度が高いことを説明している",
                  "詳細度が違うときは、後ろに書いたかどうかは関係ないことを理解している",
                  "!important を使うと、後から直すときに、さらに !important が必要になる問題を指摘している",
                  ".content .notice のように詳細度を合わせる、または、既存のセレクタの書き方を見直す案を示している"
                ],
                "modelAnswer": ".content p は、クラス1つと要素1つなので、.notice（クラス1つ）より詳細度が高くなります。詳細度が違うときは、強いほうが勝つため、後ろに書いても、.notice の赤は負けて、黒のままです。!important を付ければ赤になりますが、次にこの色を変えたい人も、さらに !important を付けるしかなくなり、管理が難しくなります。そこで、.content .notice { color: red; } のように、詳細度を同じ以上に揃える方法があります。より根本的には、.content p のように、要素に直接当たる書き方をやめ、.content__text のようなクラスにして、詳細度を低く揃えておくと、上書きしやすくなります。",
                "tip": "色が変わらないときは、ブラウザの開発者ツールで、どのセレクタが適用され、どれが打ち消されているかを確かめましょう。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "css-thinking-intermediate",
            "title": "レイアウトの手段を選ぶ",
            "content": "同じ見た目でも、作り方は複数あります。どの手段を選ぶかを、理由まで書いてみましょう。",
            "prompts": [
              {
                "id": "css-thinking-intermediate-1",
                "scenario": "商品カードを一覧にします。画面が広いときは4列、タブレットでは2列、スマホでは1列に、自動で変わるようにしたいです。後輩は、メディアクエリを3つ書いて、それぞれの幅で、幅を計算した float のレイアウトを作る案を出しています。",
                "question": "この案の問題点を指摘し、Grid を使った、より良い書き方を提案してください。",
                "checkpoints": [
                  "列数や幅を、画面ごとに手計算する必要があり、変更や追加に弱いことを指摘している",
                  "repeat(auto-fit, minmax(…, 1fr)) を使う案を示している",
                  "最小幅を決めるだけで、列の数が自動で変わる利点を説明している",
                  "間隔を gap で空ける方法に触れている"
                ],
                "modelAnswer": "画面ごとに列数と幅を計算して float で組む方法では、メディアクエリを何本も書く必要があり、間隔の計算も複雑になります。カードを1枚増やす、列の数を変える、といった変更のたびに、見直しが必要です。Grid なら、.cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; } の数行で済みます。1枚の最小幅を 240px と決めておくだけで、画面の幅に応じて、入るだけの列が並び、余った幅は均等に分けられます。メディアクエリがなくても、4列、2列、1列と自然に変わります。間隔は gap で空けるので、margin の計算も不要です。",
                "tip": "「画面幅で列の数が変わる」ときは、まず auto-fit と minmax で書けないかを考えましょう。"
              },
              {
                "id": "css-thinking-intermediate-2",
                "scenario": "ヘッダーを作ります。左にロゴ、右にメニュー（リンク4つ）を置き、縦は中央に揃えたいです。メニューは、スマホでは幅が足りなくなる可能性があります。",
                "question": "Flexbox で、どのように書くかを示し、幅が足りないときの対応も書いてください。",
                "checkpoints": [
                  "ヘッダーに display: flex を指定している",
                  "justify-content: space-between でロゴとメニューを左右に離している",
                  "align-items: center で縦の中央に揃えている",
                  "幅が足りないときの対応（flex-wrap: wrap、メニューを折り返す、ブレークポイントで縦並びにするなど）を示している"
                ],
                "modelAnswer": "ヘッダーに display: flex を指定し、justify-content: space-between で、ロゴを左端、メニューを右端に離します。縦の揃えは align-items: center で、中央にします。メニュー自体も、ul に display: flex と gap を指定して横に並べます。幅が足りなくなる場合は、ヘッダーに flex-wrap: wrap を指定して、収まらないメニューを次の行に折り返す方法があります。または、メディアクエリ（min-width）を使い、スマホでは flex-direction: column でロゴの下にメニューを縦に並べ、広い画面で横並びにする方法もあります。どちらの場合も、折り返しやすいように gap で間隔を空けておきます。",
                "tip": "横に並べる部品は、「収まらなかったときにどうなるか」まで考えて作りましょう。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "css-thinking-advanced",
            "title": "保守しやすい CSS の設計判断",
            "content": "大きなサイトでは、動くかどうかよりも、後から直しやすいかどうかが重要です。判断の理由まで書いてみましょう。",
            "prompts": [
              {
                "id": "css-thinking-advanced-1",
                "scenario": "サイトにダークモードを付けることになりました。今のスタイルシートには、色が、あちこちに #333、#fff、#3b82f6 と直接書かれています。ダークモード用に、すべての色を書き直す必要があり、見積もりが膨らんでいます。",
                "question": "今後の保守を見据えて、どのように整理するかと、ダークモードを実現する方法を書いてください。",
                "checkpoints": [
                  "色の値を、カスタムプロパティ（--color-bg など）にまとめ、各所から var() で参照する方針を示している",
                  "意味のある名前（--bg、--text など）を付ける利点に触れている",
                  "prefers-color-scheme や data-theme で、カスタムプロパティの値だけを差し替える方法を示している",
                  "色の変更が1か所で済む、という利点を説明している"
                ],
                "modelAnswer": "まず、色を直接書くのをやめ、:root に --color-bg、--color-text、--color-primary のように、役割を表す名前のカスタムプロパティとして定義します。各所の色の指定は、var(--color-text) のような参照に置き換えます。名前を役割で付けておけば、後から「どこに使われる色か」が分かります。そのうえで、ダークモードは、カスタムプロパティの値だけを差し替えます。OS の設定に合わせるなら @media (prefers-color-scheme: dark) の中で、手動で切り替えるなら [data-theme=\"dark\"] の中で、:root と同じ名前に暗い色を定義します。各部品のスタイルは1行も変えずに、配色だけが切り替わります。色を変えたい場合も、定義の1か所を直すだけで済みます。",
                "tip": "色や余白は、「値」ではなく「役割の名前」で管理すると、変更に強くなります。"
              },
              {
                "id": "css-thinking-advanced-2",
                "scenario": "長く運用されているサイトで、あるボタンの色を変えようとしたところ、何度スタイルを書いても反映されません。調べると、過去の開発者が、詳細度の高いセレクタや !important を多用していました。",
                "code": "#main .content div.box ul li a.btn { color: blue !important; }",
                "question": "このような状況を、なぜ避けるべきかと、新しく書くときに気をつけることを書いてください。",
                "checkpoints": [
                  "詳細度が高いスタイルを上書きするには、さらに高い詳細度か !important が必要になる、悪循環を指摘している",
                  "ID セレクタ、長く繋げたセレクタ、!important を避ける方針を示している",
                  "クラスセレクタ1つを基本にし、詳細度を低く揃える方針を示している",
                  "BEM のような命名規則で、構造を名前に持たせる考え方に触れている"
                ],
                "modelAnswer": "この書き方は、詳細度が非常に高く、さらに !important まで付いているため、上書きするには、もっと高い詳細度か、同じく !important を重ねるしかなくなります。次の人も同じ問題に当たり、悪循環になって、CSS がどんどん複雑になります。新しく書くときは、ID セレクタや、親から子まで長く繋げたセレクタを避け、.btn のようなクラスセレクタ1つを基本にして、詳細度を低く揃えます。こうしておけば、「後ろに書いたほうが勝つ」という単純なルールで管理でき、バリエーションは .btn--danger のような修飾クラスを足すだけで作れます。BEM のように、ブロック__要素--修飾子 の命名にしておけば、名前に構造が表れるので、長いセレクタで場所を指定する必要もなくなります。",
                "tip": "「あとで上書きしたくなったとき、楽か」を、セレクタを書くたびに自分に問いましょう。"
              }
            ]
          }
        ]
      }
    },
    "shortLabel": "CS"
  },
  {
    "id": "scss",
    "name": "SCSS",
    "description": "SCSS/SASSでスタイリングを効率的に行います",
    "icon": "fa-brands fa-sass",
    "lessons": {
      "beginner": [
        {
          "id": "scss-beginner-1",
          "title": "SCSS基本",
          "content": "SCSS基本について学びます。重要なトピック：変数, ネスト, コメント",
          "questions": [
            {
              "id": "q-beg-SCSS基本-1",
              "text": "SCSS で変数を宣言するときに使う記号は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "$（例: $primary: #333;）",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "@（例: @primary: #333;）",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "--（例: --primary: #333;）",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "%（例: %primary: #333;）",
                  "correct": false
                }
              ],
              "explanation": "SCSS の変数は $ で宣言します。@ は Less の記法、-- は CSS カスタムプロパティの記法です。SCSS の変数はコンパイル時に値が埋め込まれるため、実行時に切り替えたい場合は CSS カスタムプロパティを併用します。",
              "hint": "Less では別の記号を使いますが、SCSS は独自の記号を使います。",
              "example": "ブランドカラーを $primary: #e85d75; と1か所で決めておけば、ボタン・リンク・見出しの色を一度に変えたいとき、その1行を直すだけで済みます。"
            },
            {
              "id": "q-beg-SCSS基本-2",
              "text": "SCSS のネストを使う利点と注意点の組み合わせとして正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "親子関係を表現できるが、深くしすぎると詳細度が上がり上書きしにくくなる",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "記述量が必ず減り、深くするほど保守しやすくなる",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "コンパイル後の CSS のファイルサイズが必ず小さくなる",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "ネストした分だけ読み込み速度が上がる",
                  "correct": false
                }
              ],
              "explanation": "ネストは HTML の構造に沿って書けるため見通しがよくなりますが、深くするとセレクタが長くなり詳細度が上がって上書きしにくくなります。出力サイズも増えます。3階層程度に抑え、BEM のような命名と組み合わせると管理しやすくなります。",
              "hint": "出力される CSS のセレクタが、ネストの分だけ長くなることを思い出してみましょう。",
              "example": "カード部品の中の .title や .text を .card の中にまとめて書くと、どの部品のスタイルか分かりやすくなります。ただし3階層程度までにとどめます。"
            },
            {
              "id": "q-beg-SCSS基本-3",
              "text": "SCSS の // コメントと /* */ コメントの違いは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "// はコンパイル後の CSS に残らず、/* */ は残る",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "// は変数の中でのみ使える",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "/* */ は SCSS では使えない",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "どちらもコンパイル後に必ず削除される",
                  "correct": false
                }
              ],
              "explanation": "// で始まる行コメントは SCSS のコンパイル時に取り除かれ、出力 CSS には現れません。/* */ は CSS の標準的なコメントなので出力に残ります。開発時のメモは //、ライセンス表記など残したいものは /* */ を使います。",
              "hint": "開発者向けのメモを出力ファイルに残したいかどうかで使い分けます。",
              "example": "「ここは後で消す」などの作業メモは // で書き、公開するCSSに残しません。著作権表示のように残したい注記は /* */ で書きます。"
            },
            {
              "id": "q-beg-SCSS基本-4",
              "text": "ネストの中で & を使うと______を参照できます。",
              "options": [
                {
                  "id": "a",
                  "text": "親セレクタ",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "直前に定義した変数",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "読み込んだファイル名",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "メディアクエリの条件",
                  "correct": false
                }
              ],
              "explanation": "& は親セレクタに置き換わります。.btn の中で &:hover と書けば .btn:hover に、&--primary と書けば .btn--primary になります。BEM のような命名規則と組み合わせると、クラス名を繰り返さずに済みます。",
              "hint": ".btn の中で &:hover と書くと、.btn:hover になります。",
              "example": "ボタンのスタイルの中に &:hover や &.is-active と書くと、ホバー時や選択中の見た目をボタン本体の近くにまとめて書けます。"
            }
          ]
        },
        {
          "id": "scss-beginner-2",
          "title": "ミックスイン",
          "content": "ミックスインについて学びます。重要なトピック：ミックスイン定義, 引数, 再利用",
          "questions": [
            {
              "id": "q-beg-ミックスイン-1",
              "text": "ミックスインを定義して呼び出すキーワードの組み合わせは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "@mixin で定義し、@include で呼び出す",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "@function で定義し、@return で呼び出す",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "@extend で定義し、@use で呼び出す",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "@import で定義し、@apply で呼び出す",
                  "correct": false
                }
              ],
              "explanation": "@mixin でスタイルのまとまりを定義し、@include で呼び出します。@function は値を返す仕組みで @return と対になり、@extend は既存のセレクタを継承する別の機能です。@use と @import はファイルの読み込みに使います。",
              "hint": "定義と呼び出しでキーワードが分かれています。",
              "example": "影や角丸など、カード・モーダル・ボタンで何度も書くスタイルを @mixin にまとめ、必要な場所で @include して使い回します。"
            },
            {
              "id": "q-beg-ミックスイン-2",
              "text": "ミックスインに引数を渡せることの利点は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "同じ構造のスタイルを、値だけ変えて使い回せる",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "コンパイル時間が短縮される",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "CSS の詳細度が下がる",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "ブラウザの対応範囲が広がる",
                  "correct": false
                }
              ],
              "explanation": "引数を受け取るミックスインは、構造は同じで値だけ異なるスタイルを1か所にまとめられます。既定値を設定しておけば、呼び出し時に省略もできます。詳細度やコンパイル時間、ブラウザ対応とは無関係です。",
              "hint": "余白だけが違う同じ形のスタイルを、何度も書きたくない場面です。",
              "example": "@mixin button($color) と作っておけば、青い「送信」ボタンも赤い「削除」ボタンも、色を渡すだけで作り分けられます。"
            },
            {
              "id": "q-beg-ミックスイン-3",
              "text": "@extend ではなく @include を使ったほうがよいのは______場合です。",
              "options": [
                {
                  "id": "a",
                  "text": "引数で値を変えたい、またはメディアクエリの中で使いたい",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "常に @extend より @include が優れている",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "まったく同じスタイルを共有したい",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "セレクタをまとめて出力したい",
                  "correct": false
                }
              ],
              "explanation": "@extend は共通のスタイルを持つセレクタをまとめて出力するため記述は減りますが、値を変えられず、メディアクエリをまたいだ継承もできません。値を変えたい場合や条件付きで使いたい場合は @include を使います。まったく同じスタイルの共有には @extend が有効な場面もあります。",
              "hint": "@extend はセレクタを結合するため、値を変えることができません。",
              "example": "スマホ用の文字サイズ調整のように、メディアクエリの中でも同じスタイルを使いたい場面では、@extend ではなく @include を使います。"
            },
            {
              "id": "q-beg-ミックスイン-4",
              "text": "ミックスインに追加のスタイルをその場で渡したいとき、使う仕組みは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "@content（呼び出し側のブロックを受け取る）",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "@return（値を返す）",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "@debug（値を出力する）",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "@at-root（ネストの外に出す）",
                  "correct": false
                }
              ],
              "explanation": "@content はミックスインの中に置くと、@include で渡されたブロックがその位置に展開されます。ブレークポイントをミックスインにまとめ、中身は呼び出し側で書く用途でよく使われます。@return は関数用、@debug は開発時の出力、@at-root はネストから抜ける機能です。",
              "hint": "メディアクエリのミックスインで、中身を呼び出し側から渡したい場面です。",
              "example": "@include sp { font-size: 14px; } のように、「スマホのときだけ」の中身を呼び出し側で自由に書ける仕組みを作ります。"
            }
          ]
        }
      ],
      "intermediate": [
        {
          "id": "scss-intermediate-1",
          "title": "関数と計算",
          "content": "関数と計算について学びます。重要なトピック：計算機能, 関数, リスト操作",
          "questions": [
            {
              "id": "q-int-関数と計算-1",
              "text": "SCSS で 100% - 20px のように単位が異なる値を扱うとき______します。",
              "options": [
                {
                  "id": "a",
                  "text": "calc() を使い、ブラウザ側で計算させる",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "SCSS がそのまま計算して数値にする",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "単位を無視して数値だけ引かれる",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "小さいほうの単位に自動で揃えられる",
                  "correct": false
                }
              ],
              "explanation": "% の実寸は表示時にしか決まらないため、SCSS はコンパイル時に計算できません。calc(100% - 20px) と書けばブラウザが表示時に計算します。SCSS 変数を混ぜる場合は calc(100% - #{$gap}) のように補間します。",
              "hint": "コンパイル時点では % が実際に何ピクセルになるか分かりません。",
              "example": "画面幅いっぱいからサイドバーの幅 240px を引いた残りを本文の幅にしたいとき、width: calc(100% - 240px) と書きます。"
            },
            {
              "id": "q-int-関数と計算-2",
              "text": "色を少し明るくしたいとき、SCSS の組み込み機能として用意されているのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "color.adjust や color.scale などの色関数",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "brightness() という CSS 関数",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "@lighten というディレクティブ",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "変数に 0.5 を掛ける計算",
                  "correct": false
                }
              ],
              "explanation": "Sass には色を操作する関数があり、モジュールシステムでは color.adjust や color.scale を使います（以前の lighten / darken は非推奨方向です）。基準色から派生色を生成すれば、配色の変更が1か所で済みます。色に数値を掛ける計算では意図した明るさになりません。",
              "hint": "色そのものを操作する関数群が標準で用意されています。",
              "example": "ボタンにマウスを乗せたとき、元の色より少しだけ明るくしたい場面で色関数を使います。色コードを別にもう1つ用意する必要がありません。"
            },
            {
              "id": "q-int-関数と計算-3",
              "text": "SCSS の関数（@function）とミックスインの違いは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "関数は値を返し、ミックスインはスタイルの宣言を展開する",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "関数は引数を取れず、ミックスインは取れる",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "関数はネストの中で使えない",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "両者に違いはなく呼び方が異なるだけ",
                  "correct": false
                }
              ],
              "explanation": "@function は @return で値を返し、プロパティの値として使えます。@mixin は宣言のまとまりを展開するもので、値としては使えません。どちらも引数を取れます。px を rem に変換する処理などは関数が適しています。",
              "hint": "$size: rem(16px); のように使いたいのはどちらでしょうか。",
              "example": "px を rem に変換する計算のように、「値を1つ受け取って値を返す」処理は @function にします。スタイルの塊を書き出したいならミックスインです。"
            },
            {
              "id": "q-int-関数と計算-4",
              "text": "マップ（$map: (key: value)）から値を取り出す方法は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "map.get($map, key)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "$map[key]",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "$map.key",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "map-value($map, key)",
                  "correct": false
                }
              ],
              "explanation": "マップからの取得は map.get($map, key) を使います（旧記法は map-get）。角かっこやドットでのアクセスは SCSS の構文にありません。キーの存在確認には map.has-key を使い、色やブレークポイントの一覧を管理する用途に向いています。",
              "hint": "配列のような角かっこ記法は SCSS にはありません。",
              "example": "$colors: (primary: blue, danger: red) から map.get($colors, danger) で赤を取り出し、エラーメッセージの色に使います。"
            }
          ]
        },
        {
          "id": "scss-intermediate-2",
          "title": "インポートとパーシャル",
          "content": "インポートとパーシャルについて学びます。重要なトピック：ファイル分割, パーシャル, インポート",
          "questions": [
            {
              "id": "q-int-インポートとパーシャル-1",
              "text": "パーシャルファイルの名前の先頭に _ を付ける理由は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "単体では CSS ファイルとして出力されないようにするため",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "読み込み順を先頭にするため",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "変数専用のファイルであることを示すため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "コンパイルを高速にするため",
                  "correct": false
                }
              ],
              "explanation": "_ で始まるファイルはパーシャルとして扱われ、単体では CSS に出力されません。他のファイルから読み込まれて初めて内容が展開されます。読み込む側では _ と拡張子を省略して指定できます。",
              "hint": "_variables.scss から _variables.css が出力されると困ります。",
              "example": "_variables.scss や _buttons.scss は部品なので、単体のCSSファイルとして出力されないよう、名前の先頭に _ を付けます。"
            },
            {
              "id": "q-int-インポートとパーシャル-2",
              "text": "現在推奨されている読み込み方法は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "@use（名前空間を持ち、重複読み込みを避けられる）",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "@import（何度でも読み込める）",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "@include（スタイルを展開する）",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "@extend（セレクタを継承する）",
                  "correct": false
                }
              ],
              "explanation": "@use は同じファイルを複数回読み込んでも一度しか展開されず、名前空間によってどこ由来の変数かが明確になります。@import は重複して展開され、変数がグローバルに混ざるため非推奨になりました。@include と @extend は読み込みの機能ではありません。",
              "hint": "同じファイルを複数箇所から読み込んだとき、内容が重複しない仕組みです。",
              "example": "新しく作るプロジェクトでは @import ではなく @use で読み込みます。同じファイルを何度も読み込んでCSSが重複するのを防げます。"
            },
            {
              "id": "q-int-インポートとパーシャル-3",
              "text": "@use で読み込んだモジュールの変数を参照するときの書き方は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "名前空間を付けて variables.$primary のように書く",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "読み込むだけで $primary と書ける",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "@use の直後に @import を重ねる",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "変数名の先頭に _ を付ける",
                  "correct": false
                }
              ],
              "explanation": "@use \"variables\"; と書くと、その中の変数は variables.$primary のように名前空間付きで参照します。as で別名を付けたり、as * で名前空間なしにもできますが、衝突の危険があるため通常は既定のままにします。",
              "hint": "既定の名前空間はファイル名になります。",
              "example": "@use \"variables\"; と読み込んだら、variables.$primary と書きます。どのファイルの変数かがひと目で分かります。"
            },
            {
              "id": "q-int-インポートとパーシャル-4",
              "text": "ファイルを分割して管理する主な目的は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "役割ごとに整理して、目的の記述を見つけやすくするため",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "ブラウザへの HTTP リクエストを増やすため",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "コンパイル後の CSS を複数に分けるため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "変数を使えるようにするため",
                  "correct": false
                }
              ],
              "explanation": "変数、ミックスイン、レイアウト、コンポーネントのように役割で分けると、修正箇所を見つけやすくなります。パーシャルは最終的に1つの CSS にまとめられるため、リクエスト数は増えません。変数の利用には分割は不要です。",
              "hint": "分割しても、最終的に出力される CSS は1つにまとめられます。",
              "example": "「ボタンの色を直したい」とき、_buttons.scss を開けばすぐ見つかるように、ヘッダー・ボタン・フォームなど役割ごとにファイルを分けます。"
            }
          ]
        }
      ],
      "advanced": [
        {
          "id": "scss-advanced-1",
          "title": "高度なテクニック",
          "content": "高度なテクニックについて学びます。重要なトピック：マップ, ループ, 条件分岐",
          "questions": [
            {
              "id": "q-adv-高度なテクニック-1",
              "text": "マップと @each を組み合わせると______ができます。",
              "options": [
                {
                  "id": "a",
                  "text": "定義した一覧から、規則的なクラス群をまとめて生成する",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "実行時に値を切り替える",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "セレクタの詳細度を下げる",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "ブラウザの対応状況を判定する",
                  "correct": false
                }
              ],
              "explanation": "マップにキーと値の組を定義し、@each で回せば規則的なクラス群をまとめて生成できます。追加も一覧に1行足すだけで済みます。実行時の切り替えは CSS カスタムプロパティ、対応状況の判定は @supports の役割です。",
              "hint": "色の一覧から .text-red、.text-blue … をまとめて作りたい場面です。",
              "example": "色の一覧をマップに書いて @each で回すと、.bg-red、.bg-blue、.bg-green などのクラスを1つずつ手書きせずにまとめて作れます。"
            },
            {
              "id": "q-adv-高度なテクニック-2",
              "text": "SCSS の @if と CSS の @media の違いは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "@if はコンパイル時に評価され、@media は表示時に評価される",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "どちらもコンパイル時に評価される",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "どちらも表示時に評価される",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "@if は画面幅の判定にのみ使える",
                  "correct": false
                }
              ],
              "explanation": "@if はコンパイル時に条件を評価し、真の分岐だけが CSS に出力されます。@media は出力に残り、閲覧時の画面幅などに応じて適用されます。そのため @if で画面幅を判定することはできません。",
              "hint": "出力された CSS に残るのはどちらでしょうか。",
              "example": "「テーマ設定が dark のときだけ影を付けないCSSを書き出す」のように、CSSを作る時点で決まる分岐は @if、画面幅によって表示中に切り替えたいものは @media です。"
            },
            {
              "id": "q-adv-高度なテクニック-3",
              "text": "@for と @each の使い分けとして正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "@for は回数を指定した繰り返し、@each はリストやマップの要素を順に処理する",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "@for は文字列専用、@each は数値専用",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "どちらも同じで書き方が違うだけ",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "@each はネストの中では使えない",
                  "correct": false
                }
              ],
              "explanation": "@for は @for $i from 1 through 12 のように回数を指定する繰り返しで、グリッドの生成などに向きます。@each はリストやマップの要素を順に取り出すため、色やサイズの一覧を扱うのに適しています。",
              "hint": "1 から 12 までのカラムを作るのと、色の一覧を回すのとで適した構文が違います。",
              "example": "余白クラス .mt-1〜.mt-5 のように回数で決まるものは @for、色の名前の一覧のように「リストを順番に」処理したいものは @each を使います。"
            },
            {
              "id": "q-adv-高度なテクニック-4",
              "text": "SCSS 変数と CSS カスタムプロパティを使い分ける基準は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "実行時に切り替えたい値はカスタムプロパティ、固定値は SCSS 変数にする",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "常に SCSS 変数を使うほうがよい",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "常にカスタムプロパティを使うほうがよい",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "両者は同じもので違いはない",
                  "correct": false
                }
              ],
              "explanation": "SCSS 変数はコンパイル時に値が埋め込まれるため、実行時に変更できません。テーマの切り替えのように表示中に値を変えたい場合は CSS カスタムプロパティを使い、JavaScript やクラスの付け替えで上書きします。ブレークポイントの数値など固定値は SCSS 変数が適しています。",
              "hint": "ダークモードの切り替えのように、表示中に値を変えたい場面を考えてみましょう。",
              "example": "ダークモードの切り替えのように、表示中に値を変えたいものは CSS カスタムプロパティ（--color-bg）にします。ブレークポイントの幅のように変えない値は SCSS 変数にします。"
            }
          ]
        }
      ],
      "projects": {
        "beginner": [
          {
            "id": "scss-project-beginner-1",
            "title": "SCSS 初級プロジェクト",
            "content": "変数とネストを使って、配色と余白に一貫性のあるスタイルを組み立てながら確認します。",
            "questions": [
              {
                "id": "q-beg-SCSS初級プロジェクト-1",
                "text": "同じ色コードが十数か所に散らばっている状態を整理する第一歩は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "変数にまとめ、各所から参照する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "コメントで色名を書き添える",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "色コードを大文字に統一する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "ファイルを分割する",
                    "correct": false
                  }
                ],
                "explanation": "変数にまとめれば、変更が1か所で済み、名前によって意図も伝わります。コメントや表記の統一では重複そのものは解消せず、ファイル分割は整理には役立ちますが同じ値の散在は残ります。",
                "hint": "ブランド色を変更するとき、何か所直すことになるかを考えてみましょう。",
                "example": "クライアントから「メインの青をもう少し明るく」と頼まれても、色が変数にまとまっていれば1か所の修正で全ページに反映できます。"
              },
              {
                "id": "q-beg-SCSS初級プロジェクト-2",
                "text": "ネストが5階層を超えたときに起きやすい問題は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "セレクタが長くなり詳細度が上がって上書きしにくくなる",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "コンパイルエラーになる",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "変数が使えなくなる",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "コメントが出力されなくなる",
                    "correct": false
                  }
                ],
                "explanation": "深いネストは .a .b .c .d .e のような長いセレクタを生み、詳細度が高くなって後から上書きしにくくなります。出力サイズも増えます。エラーにはなりませんが保守性が下がるため、3階層程度を目安にします。",
                "hint": "出力される CSS のセレクタを想像してみましょう。",
                "example": "ネストを深くしすぎて、別のページで .button の色を変えようとしても上書きできない、というトラブルを防ぐため、ネストは浅く保ちます。"
              },
              {
                "id": "q-beg-SCSS初級プロジェクト-3",
                "text": ".card の中でホバー時のスタイルを書くとき、正しい記述は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "&:hover { ... }",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": ":hover { ... }",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": ".card:hover { ... }（ネストの中で）",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "&.hover { ... }",
                    "correct": false
                  }
                ],
                "explanation": "&:hover は .card:hover に展開されます。& を付けずに :hover と書くと .card :hover となり、子孫要素が対象になってしまいます。ネストの中で .card:hover と書くと .card .card:hover になり意図と異なります。&.hover はクラスの同時指定です。",
                "hint": "& は親セレクタそのものに置き換わります。",
                "example": "カード一覧で、マウスを乗せたカードだけ少し浮き上がる動きを、.card の中に &:hover と書いて作ります。"
              },
              {
                "id": "q-beg-SCSS初級プロジェクト-4",
                "text": "余白の値を 8px の倍数で統一したいとき、有効な方法は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "基準値を変数にし、その倍数で指定する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "都度ちょうどよい値を目分量で指定する",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "すべての余白を同じ値にする",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "margin ではなく padding だけを使う",
                    "correct": false
                  }
                ],
                "explanation": "基準値を変数として持ち、その倍数で指定すれば全体のリズムが揃い、後から間隔をまとめて調整できます。都度の目分量では統一感が失われ、すべて同じ値にすると情報の階層が表現できません。margin と padding は目的が異なるため使い分けます。",
                "hint": "基準を1か所に持てば、全体の間隔をまとめて調整できます。",
                "example": "$space: 8px; として余白を $space * 2（16px）や $space * 3（24px）で指定すると、デザイン全体の余白のリズムがそろいます。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "scss-project-intermediate-1",
            "title": "SCSS 中級プロジェクト",
            "content": "ミックスインとファイル分割を使って、繰り返しを整理した構成を作りながら確認します。",
            "questions": [
              {
                "id": "q-int-SCSS中級プロジェクト-1",
                "text": "ブレークポイントごとのメディアクエリをミックスイン化する利点は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "幅の値を1か所で管理でき、呼び出し側は意図だけを書ける",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "メディアクエリの評価がコンパイル時に行われる",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "出力される CSS が必ず小さくなる",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "古いブラウザでも動作するようになる",
                    "correct": false
                  }
                ],
                "explanation": "ミックスインにすれば @include md { ... } のように意図だけを書け、幅の値は定義側の1か所で管理できます。メディアクエリ自体は出力に残り閲覧時に評価されます。出力量はむしろ増えることがあり、ブラウザ対応も変わりません。",
                "hint": "ブレークポイントを変更するとき、何か所直すことになるでしょうか。",
                "example": "@include mq(tablet) のように書けば、「768pxだっけ？」と毎回調べなくて済みます。画面幅の基準を変えるときも1か所の修正で済みます。"
              },
              {
                "id": "q-int-SCSS中級プロジェクト-2",
                "text": "ファイルを役割ごとに分けるとき、最初に読み込むべきなのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "変数やミックスインなど、他から参照される定義",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "コンポーネントのスタイル",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "ページ固有の上書き",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "リセット CSS のみ",
                    "correct": false
                  }
                ],
                "explanation": "変数やミックスインは他のファイルから参照されるため、先に読み込んでおく必要があります。@use では利用する側のファイルごとに読み込むため順序の影響は小さくなりますが、依存関係を意識した構成にすると見通しがよくなります。",
                "hint": "参照される側と参照する側、どちらが先に必要でしょうか。",
                "example": "main.scss の最初で変数とミックスインのファイルを読み込み、その後にヘッダーやボタンのファイルを読み込みます。"
              },
              {
                "id": "q-int-SCSS中級プロジェクト-3",
                "text": "ボタンの色違いを作るとき、重複を減らせる書き方は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "共通部分をミックスインにし、色だけ引数で渡す",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "色ごとにスタイル全体をコピーする",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "色ごとに別ファイルを作る",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "色を !important で上書きする",
                    "correct": false
                  }
                ],
                "explanation": "共通の形をミックスインにまとめ、色を引数で受け取れば、追加時も1行の呼び出しで済みます。全体のコピーは修正漏れの原因になり、ファイル分割だけでは重複は残ります。!important は上書きの連鎖を招くため避けます。",
                "hint": "形は同じで色だけが違う、という構造を活かします。",
                "example": "「保存（青）」「削除（赤）」「キャンセル（グレー）」のボタンを、共通のミックスインに色だけ渡して3行で作ります。"
              },
              {
                "id": "q-int-SCSS中級プロジェクト-4",
                "text": "@use で読み込んだ変数が「未定義」とエラーになるとき、確認すべきなのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "名前空間を付けて参照しているか",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "ファイル名が大文字になっていないか",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "コメントの書き方が正しいか",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "変数の値が空でないか",
                    "correct": false
                  }
                ],
                "explanation": "@use は名前空間を作るため、variables.$primary のように接頭辞を付けて参照する必要があります。@import の感覚で $primary とだけ書くと未定義になります。as * を使えば省略できますが、衝突の危険があるため通常は名前空間を付けます。",
                "hint": "@import と違い、@use は読み込んだ内容をグローバルには広げません。",
                "example": "他のファイルで決めた $primary を使ったらエラーになったとき、variables.$primary のように名前空間を付け忘れていないかを確認します。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "scss-project-advanced-1",
            "title": "SCSS 上級プロジェクト",
            "content": "マップとループ、条件分岐を使って、一覧から規則的なスタイルを生成する設計を確認します。",
            "questions": [
              {
                "id": "q-adv-SCSS上級プロジェクト-1",
                "text": "配色の一覧から .text-* のようなクラス群をまとめて生成するとき、適した組み合わせは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "マップに定義し、@each で回して生成する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "@for で回数を指定して生成する",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "@if で1つずつ条件分岐して書く",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "@extend で継承して生成する",
                    "correct": false
                  }
                ],
                "explanation": "マップにキーと値の組を定義し、@each で回せば色の追加が一覧への1行追加で済みます。@for は回数指定の繰り返しでキーを扱えず、@if での分岐は色の数だけ記述が増えます。@extend は継承の仕組みで生成には向きません。",
                "hint": "色名と値の組を順に取り出したい場面です。",
                "example": "$colors マップに色を足すだけで、.text-○○ と .bg-○○ のクラスが自動で増える仕組みを作ると、色の追加作業が1行で済みます。"
              },
              {
                "id": "q-adv-SCSS上級プロジェクト-2",
                "text": "ダークモードのように表示中に配色を切り替えたい場合、使うべきなのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "CSS カスタムプロパティ",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "SCSS 変数",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "@if による分岐",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "マップと @each",
                    "correct": false
                  }
                ],
                "explanation": "SCSS 変数はコンパイル時に値が埋め込まれるため、表示中に変更できません。CSS カスタムプロパティなら、クラスの付け替えやメディアクエリで値を上書きでき、参照している箇所すべてに即座に反映されます。SCSS 側は定義の生成に使い、切り替える値はカスタムプロパティに持たせる構成が有効です。",
                "hint": "SCSS 変数の値が決まるのは、いつでしょうか。",
                "example": "画面右上の「ダークモード」スイッチを押したら、ページを読み込み直さずに配色が切り替わる機能を、CSS カスタムプロパティで作ります。"
              },
              {
                "id": "q-adv-SCSS上級プロジェクト-3",
                "text": "生成したクラスが使われず出力だけが肥大化するのを防ぐには______します。",
                "options": [
                  {
                    "id": "a",
                    "text": "生成する組み合わせを実際に使うものだけに絞る",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "すべての組み合わせを先に生成しておく",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "ネストを深くして詳細度を上げる",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "!important を付けて確実に適用させる",
                    "correct": false
                  }
                ],
                "explanation": "組み合わせを網羅すると出力が急激に増え、その大半は使われません。必要な組み合わせに絞る、あるいは使用状況をもとに生成範囲を決めると無駄を抑えられます。ネストや !important は出力量の問題を解決せず、保守性を下げます。",
                "hint": "色5種類×余白10段階×画面幅3種類を全部作ると、何個になるでしょうか。",
                "example": "色10種類×余白10段階×画面幅3種類のクラスを全部作ったら、CSSファイルが何倍にも膨らんでページが重くなった。そんなときに、使う組み合わせだけに絞ります。"
              },
              {
                "id": "q-adv-SCSS上級プロジェクト-4",
                "text": "ミックスインの中で @content を使うと______できます。",
                "options": [
                  {
                    "id": "a",
                    "text": "呼び出し側が書いたスタイルを、ミックスイン内の指定位置に展開",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "ミックスインから値を返す",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "親セレクタを参照",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "ファイルを読み込む",
                    "correct": false
                  }
                ],
                "explanation": "@content は @include に渡されたブロックを、ミックスイン内のその位置へ展開します。ブレークポイントの条件だけをミックスインに持たせ、中身は呼び出し側で自由に書けるため、条件の管理と個別のスタイルを分離できます。値を返すのは @function の役割です。",
                "hint": "メディアクエリのミックスインで、中身だけ呼び出し側から渡したい場面です。",
                "example": "@include pc { ... } の中身を呼び出し側で書けるようにしておけば、画面幅の条件はミックスインに任せ、ページごとに自由なスタイルを書けます。"
              }
            ]
          }
        ]
      },
      "basics": {
        "beginner": [
          {
            "id": "scss-basics-beginner",
            "title": "変数・ネスト・ミックスインで CSS を整理する",
            "content": "SCSS は CSS を書きやすくするための言語で、最後は普通の CSS に変換（コンパイル）されて使われます。同じ記述の繰り返しを減らす基本の機能を押さえましょう。",
            "sections": [
              {
                "heading": "変数で値を1か所にまとめる",
                "body": "$ で始まる変数に色やサイズを入れておくと、何度も使う値を1か所で管理できます。色を変えたいときも変数の1行を直すだけで、使っているすべての場所に反映されます。",
                "code": "$primary: #e85d75;\n$space: 8px;\n\n.button {\n  background: $primary;\n  padding: $space * 2;  // 16px\n}",
                "example": "余白を 8px の倍数（8・16・24px）で統一すると、ページ全体の間隔のリズムがそろいます。"
              },
              {
                "heading": "ネストは浅く保つ",
                "body": "セレクタを入れ子に書くと、部品ごとにまとまって読みやすくなります。ただし深くすると出力される CSS のセレクタが長くなり、詳細度が上がって後から上書きしにくくなります。3階層程度までにとどめます。",
                "code": ".card {\n  padding: 16px;\n  .title { font-weight: bold; }\n}\n/* 出力: .card .title { font-weight: bold; } */"
              },
              {
                "heading": "& で親セレクタを参照する",
                "body": "ネストの中の & は親のセレクタを表します。ホバーや状態のクラスを、本体の近くにまとめて書けます。",
                "code": ".button {\n  background: $primary;\n  &:hover { opacity: 0.8; }\n  &.is-active { font-weight: bold; }\n}"
              },
              {
                "heading": "ミックスインでスタイルの塊を使い回す",
                "body": "@mixin で定義したスタイルの塊を、@include で呼び出します。引数を付ければ、同じ形のスタイルを値だけ変えて作れます。@content を使うと、呼び出し側が書いたスタイルをミックスインの中に差し込めます。",
                "code": "@mixin button($color) {\n  padding: 8px 16px;\n  border-radius: 8px;\n  background: $color;\n}\n.save   { @include button(blue); }\n.delete { @include button(red); }\n\n@mixin sp {\n  @media (max-width: 767px) { @content; }\n}\n.title { font-size: 24px; @include sp { font-size: 18px; } }"
              },
              {
                "heading": "// と /* */ のコメント",
                "body": "// のコメントはコンパイル後の CSS に残りません。作業メモはこちらで書きます。/* */ のコメントは CSS に残るので、ライセンス表示など残したい注記に使います。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "scss-basics-intermediate",
            "title": "計算・関数と、ファイルの分け方",
            "content": "値を計算したり、ルールを関数にしたりすると、デザインの決まりごとをコードで表せます。ファイルを役割ごとに分けて管理する方法も学びます。",
            "sections": [
              {
                "heading": "計算と calc()",
                "body": "SCSS では同じ単位どうしなら計算できます（16px * 2 など）。100% - 240px のように単位が違う値は、表示時にブラウザに計算してもらうため calc() を使います。",
                "code": ".main {\n  width: calc(100% - 240px);  // サイドバーの幅を引く\n}"
              },
              {
                "heading": "色の関数とマップ",
                "body": "sass:color モジュールの関数を使うと、色を少し明るくするなどの調整ができます。マップ（キーと値の組）に色の一覧をまとめ、map.get で取り出せます。",
                "code": "@use \"sass:color\";\n@use \"sass:map\";\n\n$colors: (primary: #3b82f6, danger: #ef4444);\n.alert { color: map.get($colors, danger); }\n.button:hover { background: color.adjust(#3b82f6, $lightness: 10%); }"
              },
              {
                "heading": "@function と @mixin の違い",
                "body": "@function は値を1つ返し、プロパティの値として使います。@mixin はスタイルの宣言（複数行）をその場に展開します。「値がほしい」なら関数、「スタイルの塊がほしい」ならミックスインです。",
                "code": "@use \"sass:math\";\n\n@function rem($px) {\n  @return math.div($px, 16) * 1rem;\n}\n.title { font-size: rem(24); }  // 1.5rem"
              },
              {
                "heading": "パーシャルと @use",
                "body": "ファイル名を _ で始めると「部品のファイル」になり、単体の CSS としては出力されません。読み込みには @use を使います。@use は名前空間を持ち、同じファイルを何度読み込んでも1回分しか出力されません。",
                "code": "// _variables.scss\n$primary: #3b82f6;\n\n// main.scss\n@use \"variables\";\n.button { background: variables.$primary; }"
              },
              {
                "heading": "役割ごとにファイルを分ける",
                "body": "変数・ミックスイン（他から使われる定義）、ベース、レイアウト、部品（ボタン・カード）のように役割ごとに分けると、目的の記述をすぐ見つけられます。他から参照される定義を先に読み込みます。ブレークポイントもミックスインにまとめると、幅の値を1か所で管理できます。",
                "code": "// main.scss\n@use \"variables\";\n@use \"mixins\";\n@use \"base\";\n@use \"components/button\";\n@use \"components/card\";"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "scss-basics-advanced",
            "title": "クラスの自動生成と、テーマの切り替え",
            "content": "マップと繰り返しを組み合わせると、規則的なクラスをまとめて作れます。便利な反面、作りすぎにも注意が必要です。実行時に切り替える値との使い分けも学びます。",
            "sections": [
              {
                "heading": "マップと @each でクラスを生成する",
                "body": "色の一覧をマップに定義し、@each で回すと、.text-primary や .bg-danger のようなクラスをまとめて生成できます。色を1つ追加すれば、関連するクラスも自動で増えます。",
                "code": "$colors: (primary: #3b82f6, danger: #ef4444, success: #22c55e);\n\n@each $name, $color in $colors {\n  .text-#{$name} { color: $color; }\n  .bg-#{$name}   { background: $color; }\n}"
              },
              {
                "heading": "@for と @each の使い分け",
                "body": "@for は「1から5まで」のように回数を指定して繰り返します。@each はリストやマップの要素を順に処理します。余白クラスの段階のように数で決まるものは @for、色の名前のように一覧で決まるものは @each が向いています。",
                "code": "@for $i from 1 through 5 {\n  .mt-#{$i} { margin-top: $i * 8px; }\n}"
              },
              {
                "heading": "@if はコンパイル時、@media は表示時",
                "body": "@if は CSS を作る時点で評価され、条件に合った CSS だけが出力されます。@media は CSS の中に残り、画面幅などに応じて表示中に切り替わります。「書き出す CSS を変えたい」のか「表示中に切り替えたい」のかで選びます。"
              },
              {
                "heading": "SCSS 変数と CSS カスタムプロパティ",
                "body": "SCSS の変数はコンパイル時に値が埋め込まれ、表示中には変えられません。ダークモードのように表示中に切り替えたい値は、CSS カスタムプロパティ（--color-bg）にします。ブレークポイントの幅のように変えない値は SCSS 変数で十分です。",
                "code": ":root { --color-bg: #ffffff; --color-text: #222222; }\n[data-theme=\"dark\"] { --color-bg: #1e1e1e; --color-text: #eeeeee; }\nbody { background: var(--color-bg); color: var(--color-text); }"
              },
              {
                "heading": "生成しすぎに注意する",
                "body": "色10種類×余白10段階×画面幅3種類のように組み合わせを全部作ると、CSS は一気に膨らみ、そのほとんどは使われません。実際に使う組み合わせだけに絞って生成します。"
              }
            ]
          }
        ]
      },
      "thinking": {
        "beginner": [
          {
            "id": "scss-thinking-beginner",
            "title": "繰り返しの多い CSS を整理する",
            "content": "正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。",
            "prompts": [
              {
                "id": "scss-thinking-beginner-1",
                "scenario": "あるサイトの CSS で、ブランドカラーの #3b82f6 が15か所に直接書かれています。余白も 7px、10px、15px、18px などバラバラです。クライアントから「ブランドカラーを少し明るくしたい」「全体の余白をそろえたい」と頼まれました。",
                "question": "SCSS を使ってどう整理するか、手順と理由を書いてください。",
                "checkpoints": [
                  "ブランドカラーを変数（$primary など）にまとめ、15か所から参照する方針を示している",
                  "色の変更が変数1か所の修正で済む、という利点を説明している",
                  "余白の基準値（8px など）を変数にし、その倍数で指定する方針を示している",
                  "バラバラの値を基準に合わせて置き換える手順や、置き換え時の確認に触れている"
                ],
                "modelAnswer": "まず、ブランドカラーを $primary: #3b82f6; という変数にし、15か所の色の指定をすべて $primary に置き換えます。そうすれば「少し明るく」という依頼には、変数の1行を書き換えるだけで、全ページに一度で反映できます。直接書いたままだと15か所を探して直す必要があり、1か所でも漏れると色がそろいません。余白は、基準を $space: 8px; と決め、$space（8px）、$space * 2（16px）、$space * 3（24px）の3段階程度で指定します。今の 7px や 10px は 8px に、15px や 18px は 16px に、というように近い段階に寄せて置き換えます。置き換え後は、各ページを見て崩れている所がないかを確かめます。",
                "tip": "同じ値が3回以上出てきたら、変数にするタイミングです。"
              },
              {
                "id": "scss-thinking-beginner-2",
                "scenario": "ボタンが「保存（青）」「削除（赤）」「キャンセル（グレー）」の3種類あります。今は、角丸・余白・文字の太さ・ホバー時の透明度などの同じ指定を3回書いていて、色だけが違います。",
                "code": ".btn-save   { padding: 8px 16px; border-radius: 8px; font-weight: bold; background: blue; }\n.btn-save:hover { opacity: 0.8; }\n.btn-delete { padding: 8px 16px; border-radius: 8px; font-weight: bold; background: red; }\n.btn-delete:hover { opacity: 0.8; }\n.btn-cancel { padding: 8px 16px; border-radius: 8px; font-weight: bold; background: gray; }\n.btn-cancel:hover { opacity: 0.8; }",
                "question": "ミックスインを使ってどう書き直すかを示し、今後ボタンの種類が増えたときや、共通部分を変えたいときにどう楽になるかを説明してください。",
                "checkpoints": [
                  "共通部分を、色を引数で受け取るミックスインにまとめている",
                  "ホバーの指定を & を使ってミックスインの中にまとめている",
                  "各ボタンは @include で色を渡すだけにしている",
                  "種類の追加や共通部分の変更が1か所で済む、という利点を説明している"
                ],
                "modelAnswer": "@mixin button($color) { padding: 8px 16px; border-radius: 8px; font-weight: bold; background: $color; &:hover { opacity: 0.8; } } というミックスインを作り、.btn-save { @include button(blue); }、.btn-delete { @include button(red); }、.btn-cancel { @include button(gray); } と書き直します。共通の指定はミックスインの中に1回だけ書き、ボタンごとの違いである色だけを引数で渡します。ホバーの指定も & でミックスインの中にまとめられます。こうしておけば、「注意（黄色）」のボタンが増えても1行で作れますし、「角丸をもう少し大きく」と言われても、ミックスインの1か所を直すだけで全部のボタンに反映されます。",
                "tip": "「ほとんど同じで、一部の値だけ違う」スタイルを見つけたら、違う部分を引数にしたミックスインを考えましょう。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "scss-thinking-intermediate",
            "title": "SCSS のファイル構成を設計する",
            "content": "プロジェクトが大きくなるほど、ファイルの分け方と読み込み方が作業のしやすさを左右します。理由まで書いてみましょう。",
            "prompts": [
              {
                "id": "scss-thinking-intermediate-1",
                "scenario": "コーポレートサイトのスタイルが、2,000行ある1つの style.scss に書かれています。中には変数、ミックスイン、全体の基本設定、ヘッダー、フッター、ボタン、カード、フォーム、各ページ固有のスタイルが混ざっています。チームの3人が同時に編集するとよくぶつかります。",
                "question": "どのようにファイルを分け、どの順で読み込むかを設計し、その理由を書いてください。",
                "checkpoints": [
                  "変数・ミックスイン、ベース、レイアウト、部品、ページなど、役割ごとにファイルを分けている",
                  "部品のファイルを _ で始まるパーシャルにしている",
                  "他から参照される変数・ミックスインを最初に読み込む順番にしている",
                  "@use で読み込み、名前空間を付けて参照することに触れている"
                ],
                "modelAnswer": "役割ごとに、_variables.scss（色・余白・ブレークポイント）、_mixins.scss（ボタンやメディアクエリのミックスイン）、_base.scss（全体の基本設定）、layout/_header.scss・_footer.scss、components/_button.scss・_card.scss・_form.scss、pages/_top.scss・_about.scss のように分けます。どれも単体では CSS として出力しない部品なので、名前を _ で始めるパーシャルにします。main.scss では、他のファイルから使われる変数とミックスインを最初に、次にベース、レイアウト、部品、ページの順に @use で読み込みます。各ファイルでも @use \"variables\"; と読み込み、variables.$primary のように名前空間を付けて参照するので、どの値がどこで決められたものかが分かります。ファイルが分かれていれば、「ボタンを直す人」と「フッターを直す人」が別のファイルを編集でき、ぶつかりにくくなります。",
                "tip": "ファイルを分けるときは「この記述を直したいとき、どのファイルを開くか、すぐ分かるか」を基準にしましょう。"
              },
              {
                "id": "scss-thinking-intermediate-2",
                "scenario": "レスポンシブ対応で、@media (max-width: 767px) と @media (min-width: 768px) and (max-width: 1023px) が、いろいろなファイルに合計80か所書かれています。デザイナーから「タブレットの境目を 1024px から 1080px に変えたい」と言われました。",
                "question": "この状態の問題点と、ミックスインと変数を使った改善案を書いてください。",
                "checkpoints": [
                  "画面幅の値が80か所に直接書かれ、変更が大変で漏れやすいことを指摘している",
                  "ブレークポイントの値を変数（またはマップ）にまとめている",
                  "@content を使ったメディアクエリのミックスイン（mq(tablet) など）を作る案を示している",
                  "呼び出し側は「どの画面幅か」という意図だけを書けばよくなる、という利点を説明している"
                ],
                "modelAnswer": "画面幅の値が80か所に直接書かれているので、境目を変えるには全部を探して直す必要があり、1か所でも漏れると、その部分だけ崩れます。改善案として、まず $breakpoints: (sp: 767px, tablet: 1023px); のように境目の値をマップにまとめます。次に、@mixin mq($name) { @media (max-width: map.get($breakpoints, $name)) { @content; } } のようなミックスインを作ります。各ファイルでは .title { @include mq(sp) { font-size: 18px; } } のように、「スマホのとき」「タブレットのとき」という意図だけを書けばよくなります。境目を変えたいときは、マップの値を1か所直すだけで、80か所すべてに反映されます。",
                "tip": "デザインの「決まりごと」の数値は、変数やミックスインにして1か所で管理するのが基本です。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "scss-thinking-advanced",
            "title": "仕組みで作る CSS の設計判断",
            "content": "自動生成やテーマ切り替えは便利ですが、使いどころを誤ると重く、扱いにくくなります。判断の理由まで書いてみましょう。",
            "prompts": [
              {
                "id": "scss-thinking-advanced-1",
                "scenario": "サイトにダークモードを付けることになりました。後輩は「SCSS の変数で $bg-light と $bg-dark を用意して、ダークモード用の CSS ファイルを別に作り、ボタンが押されたらファイルを読み込み直す」という案を出しています。",
                "question": "この案の問題点を説明し、より良い実現方法を、SCSS 変数と CSS カスタムプロパティの違いをふまえて書いてください。",
                "checkpoints": [
                  "SCSS 変数はコンパイル時に値が埋め込まれ、表示中には切り替えられないことを説明している",
                  "CSS ファイルを読み込み直す方法は、ちらつきや二重管理の問題があることを指摘している",
                  "CSS カスタムプロパティで色を定義し、data-theme などの属性やクラスで値を切り替える方法を示している",
                  "ブレークポイントなど変えない値は SCSS 変数のままでよい、という使い分けに触れている"
                ],
                "modelAnswer": "SCSS の変数は CSS に変換する時点で値が埋め込まれるため、表示中に値を変えることはできません。そのため後輩の案では、ライト用とダーク用の2つの CSS を作って管理することになり、スタイルを1つ直すたびに両方を直す二重管理になります。ボタンでファイルを読み込み直すと、読み込みの間に画面がちらつく問題もあります。より良い方法は、CSS カスタムプロパティを使うことです。:root { --color-bg: #fff; --color-text: #222; } と [data-theme=\"dark\"] { --color-bg: #1e1e1e; --color-text: #eee; } を定義し、各部品は background: var(--color-bg) のように参照します。ボタンが押されたら <html> の data-theme を切り替えるだけで、CSS は1つのまま、即座に配色が変わります。ブレークポイントや余白の基準のように表示中に変えない値は、SCSS 変数のままで問題ありません。",
                "tip": "「その値は、ページを表示している最中に変わるか？」で、SCSS 変数とカスタムプロパティを使い分けましょう。"
              },
              {
                "id": "scss-thinking-advanced-2",
                "scenario": "便利クラスを自動生成する仕組みを作ったところ、CSS ファイルが 1.2MB になり、スマホでの表示が遅くなりました。調べると、実際の HTML で使われている便利クラスは全体の5%ほどでした。",
                "code": "$colors: (red, blue, green, yellow, purple, orange, pink, gray, black, white);\n$sizes: (0, 4, 8, 12, 16, 20, 24, 32, 40, 48);\n$screens: (sp, tablet, pc);\n\n@each $screen in $screens {\n  @each $color in $colors {\n    @each $size in $sizes {\n      // 色×余白×画面幅の全組み合わせのクラスを生成\n    }\n  }\n}",
                "question": "ファイルが大きくなった原因と、どう見直すかを書いてください。見直すときの判断の基準も含めてください。",
                "checkpoints": [
                  "組み合わせの数が掛け算で増え、そのほとんどが使われていないことを指摘している",
                  "実際に使う色・段階・画面幅に絞って生成する方針を示している",
                  "色と余白のように、組み合わせる必要のないものは別々に生成する、などの工夫に触れている",
                  "「使われているか」「デザインの決まりに沿っているか」など、生成する対象を決める基準を示している"
                ],
                "modelAnswer": "原因は、色10種類×余白10段階×画面幅3種類の組み合わせを、すべてクラスとして生成していることです。組み合わせは掛け算で増えるので、使うかどうかに関係なく大量のクラスが作られ、実際に使われているのは5%しかありません。見直しの方針は3つです。1つ目は、色と余白は本来別々の性質なので、組み合わせずに「色のクラス」「余白のクラス」として別々に生成することです。これだけで掛け算が足し算になります。2つ目は、色をデザインで決めたブランドの色に、余白を 8px の倍数の数段階に絞ることです。3つ目は、画面幅ごとのクラスは、実際に画面幅で切り替える必要がある余白などに限ることです。生成する対象は、「今の HTML で実際に使われているか」「デザインの決まりに含まれているか」の2つを満たすものに限ります。",
                "tip": "自動生成を書く前に、「いくつのクラスができるか」を掛け算で見積もってみましょう。"
              }
            ]
          }
        ]
      }
    },
    "shortLabel": "SC"
  },
  {
    "id": "js-basics",
    "name": "JavaScript基礎入門",
    "description": "変数、データ型、演算子などJavaScriptの基本を学びます",
    "icon": "fa-solid fa-code",
    "lessons": {
      "beginner": [
        {
          "id": "js-basics-beginner-1",
          "title": "変数とは",
          "content": "変数とはについて学びます。重要なトピック：var, let, const, 変数の宣言と代入, スコープ基礎",
          "questions": [
            {
              "id": "q-beg-変数とは-1",
              "text": "JavaScriptで変数を宣言する際、var、let、constの3つがありますが、これらの最大の違いは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "スコープの範囲と再代入の可否",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "処理速度の違い",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "使用できるデータ型",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "変数名の長さ制限",
                  "correct": false
                }
              ],
              "explanation": "var は関数スコープを持ち、同じ名前で何度でも再宣言できてしまいます。let と const は {} で囲まれたブロックスコープを持ち、同じスコープ内での再宣言はエラーになります。再代入できるのは let だけで、const は不可です。意図しない上書きを防げるため、まず const を使い、値を変える必要があるときだけ let を選びます。",
              "hint": "var は関数単位、let と const はブロック単位で有効範囲が決まります。あわせて、あとから値を入れ替えられるかどうかも整理してみましょう。",
              "example": "ネットショップのカート画面で、税率のように決して変わらない値は const、カートに入っている商品数のように増減する値は let で宣言します。後から読んだ人も「どれが変わる値か」が一目で分かります。"
            },
            {
              "id": "q-beg-変数とは-2",
              "text": "変数の「宣言」とはメモリに変数の存在を登録することで、「代入」とは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "その変数に値を格納する処理",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "変数をコピーする処理",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "変数をサーバーに送信する処理",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "変数の名前を変更する処理",
                  "correct": false
                }
              ],
              "explanation": "宣言は変数の名前をメモリ上に用意する操作、代入はその入れ物に実際の値を入れる操作です。let x; だけでは値が入っていないため x は undefined になり、x = 5 として初めて値を持ちます。let x = 5; は宣言と代入を1行でまとめた書き方です。",
              "hint": "let x; と書いた時点で x の中身は何になっているでしょうか。そこに x = 5; を足すと何が変わるかを考えてみましょう。",
              "example": "会員登録フォームで、最初は let userName; と入れ物だけ用意し、入力が終わった時点で userName = input.value; と値を入れる、という流れで使います。"
            },
            {
              "id": "q-beg-変数とは-3",
              "text": "スコープとは、変数に______できる範囲のこと。{}内でlet/constで宣言した変数は、そのブロック外ではアクセスできません。",
              "options": [
                {
                  "id": "a",
                  "text": "アクセスして使用",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "表示・出力",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "コピー・複製",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "保存・記録",
                  "correct": false
                }
              ],
              "explanation": "スコープは変数を参照できる範囲のことです。let と const で宣言した変数はブロックスコープを持つため、{} の外から参照すると ReferenceError になります。範囲を狭く保つほど、名前の衝突や意図しない書き換えが起きにくくなります。",
              "hint": "{} の中で let を使って宣言した変数を、その外側から呼び出そうとするとどうなるでしょうか。",
              "example": "ボタンのクリック処理の中だけで使う一時的な計算結果を {} の中で let で宣言しておくと、ページの別の場所で同じ名前の変数を使っても値が混ざりません。"
            },
            {
              "id": "q-beg-変数とは-4",
              "text": "var、let、const のスコープと再代入の可否を正しくまとめているのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "varは関数スコープで再代入・再宣言が可能。letはブロックスコープで再代入可能。constはブロックスコープで再代入不可（定数）。モダン開発ではlet/constの使用が推奨される。",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "すべてグローバルスコープを持ち、再代入も可能。",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "パフォーマンスの違いが最大の特徴で、const がもっとも高速。",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "使用できるデータ型が異なり、var は数値、let は文字列、const はブール値のみ。",
                  "correct": false
                }
              ],
              "explanation": "var は関数スコープで再代入も再宣言も可能、let はブロックスコープで再代入のみ可能、const はブロックスコープで再代入不可です。3つとも扱えるデータ型に違いはなく、実行速度の差を理由に選ぶものでもありません。現在は const を基本にし、再代入が必要な箇所だけ let を使う書き方が一般的です。",
              "hint": "3つの違いは「有効範囲」と「あとから値を変えられるか」の2軸で整理できます。速度や扱えるデータ型の違いではありません。",
              "example": "古いサイトのコードを修正するときに var を見つけたら、値を変えない箇所は const、変える箇所は let に書き換えると、思わぬ上書きによるバグを防げます。"
            }
          ],
          "qa": [
            {
              "question": "なぜ var じゃなくて let や const を使うのですか？",
              "answer": "var は古い仕様で「関数スコープ」を使い、予期しないバグを生みやすいです。let と const は「ブロックスコープ」で、{}の中だけでの有効範囲が明確。プロのチームは let/const を必須としており、バグ削減と可読性向上に役立ちます。",
              "relatedTopics": [
                "let と const の違い",
                "スコープとクロージャー"
              ]
            }
          ]
        },
        {
          "id": "js-basics-beginner-2",
          "title": "let と const の違い",
          "content": "let と const の違いについて学びます。重要なトピック：再代入, 定数の使用, ブロックスコープ",
          "questions": [
            {
              "id": "q-beg-let-と-const-の違い-1",
              "text": "let で宣言した変数は後から新しい値を______ことができますが、const で宣言した変数は一度代入したら変更できません。",
              "options": [
                {
                  "id": "a",
                  "text": "再代入",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "初期化",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "リセット",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "アップデート",
                  "correct": false
                }
              ],
              "explanation": "let は宣言後に何度でも新しい値を代入できます。const は再代入できず、代入しようとすると TypeError になります。ただし const が固定するのは「変数が指す先」であり、オブジェクトや配列の中身は書き換えられる点に注意が必要です。",
              "hint": "const で宣言した変数にあとから別の値を入れようとすると、実行時に何が起きるでしょうか。",
              "example": "クイズアプリで正解数を数えるとき、let score = 0; として正解のたびに score = score + 1; と値を入れ替えます。"
            },
            {
              "id": "q-beg-let-と-const-の違い-2",
              "text": "const で宣言する変数は定数として扱われるため、設定値や変わらないデータを保持するのに使い、______ を軽減できます。",
              "options": [
                {
                  "id": "a",
                  "text": "バグやエラーのリスク",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "メモリ使用量",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "処理速度の低下",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "ファイルサイズ",
                  "correct": false
                }
              ],
              "explanation": "const は再代入されないことがコード上で保証されるため、設定値や固定の定義に適しています。let は集計途中の値やカウンタなど、処理の中で変化する値に使います。まず const で書き、再代入が必要になった時点で let に変えると、変更される変数が一目で分かるコードになります。",
              "hint": "消費税率のように途中で変わらない値と、カートの合計のように変わる値。それぞれどちらで宣言すべきかを考えてみましょう。",
              "example": "APIのURLや1ページに表示する件数のように、アプリ全体で決めた設定値を const API_URL = \"...\" と書いておくと、うっかり別の値で上書きする事故を防げます。"
            },
            {
              "id": "q-beg-let-と-const-の違い-3",
              "text": "let と const はブロックスコープを持つため、{}の外からは変数に______、var はブロック外からもアクセスできる可能性があります。",
              "options": [
                {
                  "id": "a",
                  "text": "アクセスできません",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "代入できます",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "読み込めます",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "参照できます",
                  "correct": false
                }
              ],
              "explanation": "let と const はブロックスコープを持つため、{} の外からは参照できません。var は関数スコープのため、ブロックの外からでも参照できてしまい、ループ内の変数が意図せず共有される原因になります。この違いが、var を避けて let と const を使う大きな理由です。",
              "hint": "for 文の中で var と let のそれぞれでカウンタを宣言し、ループの外から参照してみるとどうなるでしょうか。",
              "example": "for 文の中で let i を使うと、ループが終わった後に i がうっかり使われることがありません。ループ用の変数が外に漏れないので、同じ名前を別の場所でも安心して使えます。"
            },
            {
              "id": "q-beg-let-と-const-の違い-4",
              "text": "「再代入」とは______を指します。",
              "options": [
                {
                  "id": "a",
                  "text": "let で宣言した変数に新しい値を代入する処理。一度代入した後も何度でも異なる値を再代入できる。",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "変数の名前を変更する処理。",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "オブジェクトをコピーしながら値を変更する処理。",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "変数の最初の値を設定すること。",
                  "correct": false
                }
              ],
              "explanation": "再代入は、すでに宣言済みの変数に新しい値を入れ直す操作です。let では何度でも行えます。最初に値を入れることは初期化と呼び、変数名そのものをあとから変えることはできません。const は再代入だけが禁止されており、宣言時の初期化は必須です。",
              "hint": "同じ変数に、あとから別の値を入れ直す操作のことです。名前を変えることでも、最初の1回の代入のことでもありません。",
              "example": "タイマーアプリで残り秒数を let remaining = 60; と宣言し、1秒ごとに remaining = remaining - 1; と再代入して画面の表示を更新します。"
            }
          ],
          "qa": [
            {
              "question": "const でオブジェクトのプロパティは変更できますか？",
              "answer": "はい。const はオブジェクト「自体」の再代入は禁止しますが、中身は変更可能です。const user = {name: \"John\"}; user.name = \"Jane\"; は可。これはプロの開発でよくある。オブジェクト構造の変化を防ぎつつ、内部状態は変更可。",
              "relatedTopics": [
                "データ型"
              ]
            }
          ]
        }
      ],
      "intermediate": [
        {
          "id": "js-basics-intermediate-1",
          "title": "データ型",
          "content": "データ型について学びます。重要なトピック：Number, String, Boolean, 型変換, typeof演算子",
          "questions": [
            {
              "id": "q-int-データ型-1",
              "text": "Number は数値（1, 3.14など）、String はテキスト（\"Hello\"など）、Boolean は______を表すデータ型です。",
              "options": [
                {
                  "id": "a",
                  "text": "真偽値（true/false）",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "配列（複数のデータ）",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "オブジェクト（属性集合）",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "undefined（未定義）",
                  "correct": false
                }
              ],
              "explanation": "Number は 1 や 3.14 のような数値、String は \"Hello\" のような文字列、Boolean は true と false の2値だけを取る真偽値です。この3つは JavaScript の基本的なデータ型で、計算や条件分岐の土台になります。",
              "hint": "それぞれが扱うのは「数」「文字」「はい・いいえ」のどれにあたるかを対応させてみましょう。",
              "example": "ログイン状態を isLoggedIn = true / false の真偽値で持っておき、true ならマイページのボタン、false ならログインボタンを表示する、というように画面を切り替えます。"
            },
            {
              "id": "q-int-データ型-2",
              "text": "String(\"123\") や Number(\"456\") のように、データをあるデータ型から別のデータ型に変換することを______と呼びます。",
              "options": [
                {
                  "id": "a",
                  "text": "型変換",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "型判定",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "型確認",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "型チェック",
                  "correct": false
                }
              ],
              "explanation": "型変換は、ある型の値を別の型へ変換する操作です。Number(\"456\") は文字列を数値の 456 に、String(123) は数値を文字列の \"123\" にします。フォームから受け取った値は文字列なので、計算前に数値へ変換しないと意図しない連結が起きます。",
              "hint": "Number(\"456\") を実行すると、戻ってくる値の型は何になるでしょうか。",
              "example": "フォームに入力された「3」（文字列）を Number() で数値に変えてから、商品の個数×単価の計算に使います。"
            },
            {
              "id": "q-int-データ型-3",
              "text": "typeof 演算子を使うと、値のデータ型を______の形で返します。例：typeof 123 は \"number\"。",
              "options": [
                {
                  "id": "a",
                  "text": "文字列",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "boolean値",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "オブジェクト",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "配列",
                  "correct": false
                }
              ],
              "explanation": "typeof は値の型を表す文字列を返します。typeof 123 は \"number\"、typeof \"abc\" は \"string\"、typeof true は \"boolean\" です。返り値が文字列なので、判定は typeof x === \"number\" のように文字列と比較して行います。",
              "hint": "typeof 123 の結果を === で比較するとき、右辺は \"number\" と引用符付きで書きます。この形がヒントです。",
              "example": "APIから届いたデータの値段が数値なのか文字列なのか分からないとき、typeof data.price で調べてから計算処理を書きます。"
            },
            {
              "id": "q-int-データ型-4",
              "text": "Number、String、Boolean の3つが表す値の組み合わせとして正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "Number は数値（1, 3.14など）、String はテキスト文字列（\"Hello\"など）、Boolean は真偽値（true/false）。これら3つはJavaScriptの基本的なデータ型。",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "すべて文字列として扱われる。",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "メモリ使用量が異なる。",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "演算子によって自動的に型が変わる。",
                  "correct": false
                }
              ],
              "explanation": "Number は数値、String は文字列、Boolean は true / false の真偽値を表します。すべてが文字列として扱われるわけではなく、3つは明確に別の型です。演算子によって型が変換される場面はありますが、それは型変換という別の仕組みであり、型そのものの定義ではありません。",
              "hint": "3つはそれぞれ異なる種類の値を表します。メモリ使用量の違いや、自動変換の話ではありません。",
              "example": "商品データを作るとき、価格は Number（1980）、商品名は String（\"Tシャツ\"）、在庫ありかどうかは Boolean（true）のように、値の性質に合った型を選びます。"
            }
          ],
          "qa": [
            {
              "question": "null と undefined の違いは何ですか？",
              "answer": "undefined は「未定義」（変数は宣言されたが値がない状態）。null は「明示的に空」（開発者が意図的に設定）。プロのコードでは、API 応答が存在しないときは null を返すなど、区別して使い分けます。",
              "relatedTopics": [
                "変数とは"
              ]
            }
          ]
        },
        {
          "id": "js-basics-intermediate-2",
          "title": "演算子",
          "content": "演算子について学びます。重要なトピック：算術演算子, 比較演算子, 論理演算子",
          "questions": [
            {
              "id": "q-int-演算子-1",
              "text": "算術演算子のうち %（剰余）を使って 7 % 3 を計算すると、結果は______になります。",
              "options": [
                {
                  "id": "a",
                  "text": "1（7 を 3 で割った余り）",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "2.333…（7 を 3 で割った商）",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "21（7 と 3 の積）",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "10（7 と 3 の和）",
                  "correct": false
                }
              ],
              "explanation": "% は剰余演算子で、割り算の余りを返します。7 ÷ 3 は商が 2、余りが 1 なので 7 % 3 は 1 です。偶数判定（n % 2 === 0）や、一定間隔ごとの処理によく使われます。商そのものが必要な場合は Math.floor(7 / 3) を使います。",
              "hint": "% は割り算の「余り」を求める演算子です。7 を 3 で割ると商は 2、では余りはいくつでしょうか。",
              "example": "表の行を1行おきに色分けしたいとき、index % 2 === 0 で偶数行かどうかを判定します。"
            },
            {
              "id": "q-int-演算子-2",
              "text": "比較演算子の == と === の違いは、=== が値に加えて______の一致も求める点です。",
              "options": [
                {
                  "id": "a",
                  "text": "データ型",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "変数名",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "宣言された順序",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "メモリ上の位置",
                  "correct": false
                }
              ],
              "explanation": "== は比較の前に型変換を行うため '5' == 5 は true になります。=== は型変換をせず、値と型の両方が一致する場合だけ true を返すので '5' === 5 は false です。暗黙の型変換は意図しない結果を生みやすいため、通常は === を使います。",
              "hint": "'5' == 5 は true ですが、'5' === 5 は false になります。文字列と数値で何が違うかを考えてみましょう。",
              "example": "フォームの入力値が \"0\" なのか 0 なのかで判定が変わるような場面では、=== を使って型まで含めて比べ、意図しない一致を防ぎます。"
            },
            {
              "id": "q-int-演算子-3",
              "text": "論理演算子 && は、左側が偽と評価された時点で右側を評価せずに結果を返します。この動作を______と呼びます。",
              "options": [
                {
                  "id": "a",
                  "text": "短絡評価（ショートサーキット）",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "再帰評価",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "遅延束縛",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "暗黙の型強制",
                  "correct": false
                }
              ],
              "explanation": "&& は左辺が偽なら全体が必ず偽になるため、右辺を評価せずに左辺の値を返します。|| は逆に、左辺が真なら右辺を評価しません。これを短絡評価と呼び、user && user.name のように存在確認とアクセスを1行でまとめる用途によく使われます。",
              "hint": "false && heavyFunction() と書いたとき、右側の関数が実際に実行されるかどうかを考えてみましょう。",
              "example": "user && user.name のように書くと、ログインしていない（user がない）ときはエラーにならず、ログイン中だけ名前を表示できます。"
            },
            {
              "id": "q-int-演算子-4",
              "text": "1 + 2 + '3' を評価した結果は______になります。",
              "options": [
                {
                  "id": "a",
                  "text": "'33'（先に 1 + 2 が 3 になり、文字列と連結される）",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "6（すべて数値として加算される）",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "'123'（すべて文字列として連結される）",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "エラーになる",
                  "correct": false
                }
              ],
              "explanation": "+ は左から順に評価されます。まず 1 + 2 が数値として計算されて 3 になり、次に 3 + '3' では片方が文字列のため数値が文字列へ変換され、連結されて '33' になります。+ は数値の加算と文字列の連結を兼ねるため、意図しない型変換が起きやすい演算子です。",
              "hint": "+ は左から順に評価されます。まず 1 + 2 がどうなり、その次に文字列が来ると何が起きるかを追ってみましょう。",
              "example": "「合計: \" + 1 + 2」のように文字列と数値を混ぜて表示したら「合計: 12」になってしまった、というときに、計算を () で先に済ませる必要があると気づけます。"
            }
          ]
        }
      ],
      "advanced": [
        {
          "id": "js-basics-advanced-1",
          "title": "スコープとクロージャー",
          "content": "スコープとクロージャーについて学びます。重要なトピック：関数スコープ, クロージャー, 変数キャプチャ",
          "questions": [
            {
              "id": "q-adv-スコープとクロージャー-1",
              "text": "関数の内側で宣言した変数（特に var）は、その______内だけでアクセス可能で、関数の外からはアクセスできません。",
              "options": [
                {
                  "id": "a",
                  "text": "関数スコープ",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "グローバルスコープ",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "一時メモリ",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "キャッシュ領域",
                  "correct": false
                }
              ],
              "explanation": "関数の内側で宣言した変数はその関数の中でのみ有効で、外部からは参照できません。これを関数スコープと呼びます。外から触れられないことで、変数名の衝突や意図しない書き換えを防げます。",
              "hint": "関数の中で var を使って宣言した変数を、関数の外から呼び出すとどうなるでしょうか。",
              "example": "関数の中だけで使う計算用の変数を外に出さないことで、別の関数が同じ名前の変数を使っていても互いに影響しません。"
            },
            {
              "id": "q-adv-スコープとクロージャー-2",
              "text": "クロージャーとは、関数が定義されたときの外側の変数を「______」し、後で参照できる現象のことです。",
              "options": [
                {
                  "id": "a",
                  "text": "記憶・保持",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "暗号化",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "圧縮",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "キャッシュ",
                  "correct": false
                }
              ],
              "explanation": "クロージャーは、関数が定義された時点の外側のスコープを覚えたまま持ち運ぶ仕組みです。外側の関数の実行が終わったあとでも、内側の関数はその変数を参照し続けられます。カウンタの状態を隠して保持したり、設定値を閉じ込めたりする用途に使われます。",
              "hint": "関数を返す関数を書いたとき、返された側から外側の変数がまだ見えるかどうかを考えてみましょう。",
              "example": "ボタンごとに「何回押されたか」を別々に数えたいとき、カウンターを作る関数の中に回数の変数を閉じ込めます。ボタンAとボタンBのカウントが混ざりません。"
            },
            {
              "id": "q-adv-スコープとクロージャー-3",
              "text": "変数キャプチャとは、内側の関数が定義された時点での外側の変数を______して保持することで、クロージャーの基本メカニズムです。",
              "options": [
                {
                  "id": "a",
                  "text": "捕捉",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "削除",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "リセット",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "アップロード",
                  "correct": false
                }
              ],
              "explanation": "内側の関数は外側の変数を参照として保持し続けます。そのため外側の値があとから変わると、内側から見える値も変わります。ループ内で var を使うと最後の値だけが共有されてしまうのはこのためで、let を使えば繰り返しごとに別の変数が作られ、意図した値が保持されます。",
              "hint": "内側の関数が覚えているのは「値のコピー」でしょうか、それとも「変数そのもの」でしょうか。",
              "example": "「あなたは3番目のボタンです」と表示する処理を、ループで作った各ボタンに付けるとき、その時点の番号を内側の関数が覚えておく仕組みを使います。"
            },
            {
              "id": "q-adv-スコープとクロージャー-4",
              "text": "「関数スコープ」とは______という性質を指します。",
              "options": [
                {
                  "id": "a",
                  "text": "関数の内側で宣言した変数（特に var）は、その関数内だけでアクセス可能で、関数の外からはアクセスできない。",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "変数を暗号化する機能。",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "メモリ効率を高める専用機能。",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "データをキャッシュする専用機能。",
                  "correct": false
                }
              ],
              "explanation": "関数スコープとは、関数の内側で宣言した変数がその関数の中だけで有効になる性質のことです。var で宣言した変数はこの関数スコープに従います。結果として変数は保護されますが、暗号化やメモリ効率の最適化、データのキャッシュを目的とした機能ではありません。",
              "hint": "関数の中で宣言した変数がどこから見えるか、という話です。暗号化やキャッシュのための仕組みではありません。",
              "example": "複数のスクリプトを読み込むページで、それぞれの処理を関数で包んで中の変数を外から見えなくすると、他のスクリプトとの名前の衝突を防げます。"
            }
          ],
          "qa": [
            {
              "question": "クロージャーの実世界の使用例は何ですか？",
              "answer": "プライベート変数の実装。function createCounter() { let count = 0; return () => ++count; } で、count は外部からアクセス不可。状態管理ライブラリ（Redux）や、イベントハンドラのデータ保持に活躍。",
              "relatedTopics": [
                "関数とモジュール"
              ]
            }
          ]
        }
      ],
      "projects": {
        "beginner": [
          {
            "id": "js-basics-project-beginner-1",
            "title": "JavaScript基礎入門 初級プロジェクト",
            "content": "変数・型・スコープの基本を使って、小さなカウンターと合計計算を作りながら確認します。",
            "questions": [
              {
                "id": "q-beg-JavaScript基礎入門初級プロジェクト-1",
                "text": "カウンターアプリで「現在の数値」を保持する変数を用意します。ボタンを押すたびに値が変わるため、宣言に使うべきなのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "let（あとから値を入れ替える必要があるため）",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "const（値を保護できるため）",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "var（関数スコープが必要なため）",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "宣言は不要（未宣言のまま代入すればよい）",
                    "correct": false
                  }
                ],
                "explanation": "カウントは操作のたびに書き換わるため、再代入できる let を使います。const は再代入できないためカウント値には使えません。var はブロックスコープを持たず意図しない参照を招きやすいので避けます。一方で、上限値など変化しない設定は const で宣言します。",
                "hint": "ボタンを押すたびに値が書き換わります。再代入できる宣言はどれでしょうか。",
                "example": "いいねボタンの押された回数を数えるとき、回数は let で、上限の「最大99」のような決まった値は const で用意します。"
              },
              {
                "id": "q-beg-JavaScript基礎入門初級プロジェクト-2",
                "text": "入力された金額の合計を表示する機能を作ります。入力値は文字列で得られるため、正しく合計するには______が必要です。",
                "options": [
                  {
                    "id": "a",
                    "text": "Number() などで数値へ変換してから加算する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "そのまま + でつなげば数値として合計される",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "変数を const で宣言し直す",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "typeof で型を調べるだけでよい",
                    "correct": false
                  }
                ],
                "explanation": "フォームから取得した値は文字列なので、'100' + '200' は '100200' という連結になります。Number('100') や parseInt で数値へ変換してから加算する必要があります。変換に失敗すると NaN になるため、Number.isNaN で確認してから合計に加えると安全です。",
                "hint": "'100' + '200' がどうなるかを思い出してみましょう。",
                "example": "割り勘計算アプリで「1200」と「800」を入力したのに「1200800」と表示されたら、Number() で数値に変えてから足すことで「2000」と正しく計算できます。"
              },
              {
                "id": "q-beg-JavaScript基礎入門初級プロジェクト-3",
                "text": "合計金額が意図せず「00」のような文字列になりました。原因を切り分けるとき、最初に確認すべきなのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "console.log で変数の型と値を確認する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "変数名をすべて短く書き換える",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "const をすべて let に変更する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "ブラウザを再起動する",
                    "correct": false
                  }
                ],
                "explanation": "数値のはずが文字列として連結されている場合、計算前の値が文字列のままである可能性が高いです。console.log(typeof value, value) で型と中身を同時に確認すると原因を素早く特定できます。型が string であれば、取得直後に Number() で変換する処理が抜けていると判断できます。",
                "hint": "結果が文字列になっているということは、計算に使った値の「型」に手がかりがあります。",
                "example": "計算結果がおかしいときに console.log(typeof price, price) と書いて開発者ツールで確かめると、数値のつもりが文字列だった、という原因がすぐ見つかります。"
              },
              {
                "id": "q-beg-JavaScript基礎入門初級プロジェクト-4",
                "text": "クリック処理の中で let total = 0 と宣言したところ、次のクリックで前回の合計が消えました。原因は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "関数が呼ばれるたびに total が作り直され 0 に初期化されるため",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "let は数値を保持できないため",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "const で宣言していないため値が失われる",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "ブラウザが変数を自動的に削除するため",
                    "correct": false
                  }
                ],
                "explanation": "関数の内側で宣言した変数は、その関数が呼ばれるたびに新しく作られて初期化されます。累計を保持したい場合は関数の外側で宣言してスコープを広げるか、クロージャーやオブジェクトに保持します。スコープは「値がどこで生き続けるか」を決める重要な概念です。",
                "hint": "その変数がどのブロックの中にあるか、そしていつ作られ直すのかを考えてみましょう。",
                "example": "「押した回数を覚えておく」機能では、回数の変数を関数の外で宣言しておきます。関数の中に書くと、押すたびに0に戻ってしまいます。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "js-basics-project-intermediate-1",
            "title": "JavaScript基礎入門 中級プロジェクト",
            "content": "配列操作と型変換を組み合わせて、商品リストの絞り込みと集計を実装しながら確認します。",
            "questions": [
              {
                "id": "q-int-JavaScript基礎入門中級プロジェクト-1",
                "text": "商品リストから価格が1000円以上のものだけを取り出したいとき、配列に対して使うと簡潔に書けるのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "filter（条件に合う要素だけの新しい配列を返す）",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "forEach（各要素を順に処理するが値を返さない）",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "push（配列の末尾に要素を追加する）",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "typeof（値のデータ型を調べる）",
                    "correct": false
                  }
                ],
                "explanation": "filter は各要素に条件式を適用し、true になった要素だけを集めた新しい配列を返します。元の配列は変更されません。forEach は戻り値が undefined のため絞り込みには使えず、値を変換したい場合は map を使います。",
                "hint": "「条件に合うものだけを集めた新しい配列」がほしい場面です。",
                "example": "通販サイトの「1000円以上の商品だけ表示」の絞り込みボタンを products.filter(p => p.price >= 1000) で作ります。"
              },
              {
                "id": "q-int-JavaScript基礎入門中級プロジェクト-2",
                "text": "配列の各要素を2倍にした新しい配列を作るとき、適しているのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "map（各要素を変換した新しい配列を返す）",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "filter（条件に合う要素だけを残す）",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "find（条件に合う最初の要素を1つ返す）",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "sort（要素を並べ替える）",
                    "correct": false
                  }
                ],
                "explanation": "map は各要素に関数を適用し、その戻り値を集めた同じ長さの新しい配列を返します。filter は要素数が減り、find は要素を1つだけ返し、sort は並び順を変えるだけで値そのものは変換しません。目的が「変換」なら map が適切です。",
                "hint": "要素の「数」は変えずに、それぞれの「値」だけを変換したい場面です。",
                "example": "すべての商品価格に税込み表示を付けたいとき、prices.map(p => Math.floor(p * 1.1)) で税込み価格の配列を作ります。"
              },
              {
                "id": "q-int-JavaScript基礎入門中級プロジェクト-3",
                "text": "合計金額を計算する関数をテストするとき、通常の値に加えて必ず確認すべきなのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "空の配列や0件など、境界となる入力",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "関数名のスペルが正しいこと",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "コメントが書かれていること",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "変数がすべて const であること",
                    "correct": false
                  }
                ],
                "explanation": "不具合は境界値で表面化しやすいため、空配列、0、負の値、想定外の型といった端のケースを確認します。たとえば商品が0件のときに合計が 0 になるか、NaN になっていないかを検証します。通常の入力だけを試すと、こうした条件が見落とされたまま公開されてしまいます。",
                "hint": "不具合は「普通の入力」より「端の入力」で出ます。商品が1つもないときはどうなるでしょうか。",
                "example": "カートの合計金額の関数を作ったら、商品が0件のときに「0円」と表示されるか、エラーにならないかを必ず試します。"
              },
              {
                "id": "q-int-JavaScript基礎入門中級プロジェクト-4",
                "text": "同じ計算結果を何度も使う処理で、毎回計算し直すのを避けるには______のが有効です。",
                "options": [
                  {
                    "id": "a",
                    "text": "計算結果を変数に保存して再利用する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "計算式を1行にまとめて書く",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "変数名を短くする",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "const を let に置き換える",
                    "correct": false
                  }
                ],
                "explanation": "同じ入力に対して同じ結果を返す計算は、一度実行した結果を変数に保持して使い回せば無駄な処理を省けます。ループの中で毎回同じ値を求め直している箇所は、事前に変数へ取り出すと速度と読みやすさの両方が改善します。変数名の長さや行数は実行速度に影響しません。",
                "hint": "同じ答えが返ってくる計算を、何度も走らせる必要があるかを考えてみましょう。",
                "example": "一覧の合計金額を画面の複数箇所に表示するとき、一度計算した結果を const total に入れて使い回すと、無駄な計算がなくなります。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "js-basics-project-advanced-1",
            "title": "JavaScript基礎入門 上級プロジェクト",
            "content": "クロージャーと非同期処理を踏まえ、実行回数の制御・描画性能・入力の安全な扱いを確認します。",
            "questions": [
              {
                "id": "q-adv-JavaScript基礎入門上級プロジェクト-1",
                "text": "入力欄に文字を打つたびに重い検索処理が走るのを抑えたいとき、有効な手法は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "デバウンス（最後の入力から一定時間後にまとめて実行する）",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "再帰（関数が自分自身を呼び出す）",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "巻き上げ（宣言が先頭に持ち上げられる）",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "暗黙の型強制（値の型が自動変換される）",
                    "correct": false
                  }
                ],
                "explanation": "デバウンスは、イベントが連続して発生したとき、最後の発生から一定時間が経過してはじめて処理を実行する手法です。setTimeout と clearTimeout を組み合わせて実装します。一定間隔で必ず実行したい場合は、スロットリングと使い分けます。",
                "hint": "打つたびに実行するのではなく、「打ち終わってから」実行したい場面です。",
                "example": "商品検索の入力欄で、1文字打つたびにサーバーへ問い合わせるのをやめ、入力が0.3秒止まってから1回だけ検索します。サーバーの負担が減り、画面も軽くなります。"
              },
              {
                "id": "q-adv-JavaScript基礎入門上級プロジェクト-2",
                "text": "1000件の要素をループで1つずつ DOM に追加すると描画が遅くなります。改善策として有効なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "DocumentFragment にまとめてから一度だけ DOM に追加する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "ループを for から while に書き換える",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "変数をすべて const で宣言する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "要素のクラス名を短くする",
                    "correct": false
                  }
                ],
                "explanation": "DOM へ追加するたびにレイアウト計算と再描画が発生するため、1000回追加すると負荷が跳ね上がります。DocumentFragment に組み立ててから一度だけ挿入すれば再描画は1回で済みます。ループ構文の違いやクラス名の長さは、この規模では体感差になりません。",
                "hint": "遅さの原因はループそのものより、画面を作り直す回数のほうにあります。",
                "example": "1000件の商品一覧を表示するとき、DocumentFragment に1件ずつ組み立ててから最後に1回だけ画面に追加すると、表示の待ち時間が大きく減ります。"
              },
              {
                "id": "q-adv-JavaScript基礎入門上級プロジェクト-3",
                "text": "ユーザーが入力した文字列をそのまま innerHTML に代入すると______の危険があります。",
                "options": [
                  {
                    "id": "a",
                    "text": "XSS（入力に含まれるスクリプトが実行される）",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "メモリリーク（解放されない領域が増え続ける）",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "暗黙の型強制（値が別の型に変換される）",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "巻き上げ（宣言が先頭に移動する）",
                    "correct": false
                  }
                ],
                "explanation": "innerHTML は渡された文字列を HTML として解釈するため、悪意のあるタグが含まれているとスクリプトが実行されます。これがクロスサイトスクリプティング（XSS）です。文字列をそのまま表示したい場合は textContent を使い、HTML を扱う必要がある場合はサニタイズ処理を通します。",
                "hint": "入力欄に <script> や onerror 付きのタグを書き込まれたら何が起きるかを考えてみましょう。",
                "example": "コメント欄の投稿を表示するとき、innerHTML ではなく textContent を使います。悪意ある人が <script> を書き込んでも、ただの文字として表示されるだけになります。"
              },
              {
                "id": "q-adv-JavaScript基礎入門上級プロジェクト-4",
                "text": "非同期処理を順番に実行したいとき、コールバックの深い入れ子を避けて読みやすく書けるのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "async / await",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "var による変数宣言",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "typeof 演算子",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "三項演算子",
                    "correct": false
                  }
                ],
                "explanation": "async / await は Promise を同期処理のような見た目で書ける構文で、コールバックが深く入れ子になる状態を避けられます。await は Promise の解決を待って値を取り出し、エラーは try / catch で捕捉できます。複数の処理を並列に走らせたい場合は Promise.all と組み合わせます。",
                "hint": "Promise を「待ってから次へ進む」ように書ける構文があります。",
                "example": "「ユーザー情報を取得 → その人の注文履歴を取得 → 画面に表示」のように順番が大事な処理を、await で上から順に読める形で書きます。"
              }
            ]
          }
        ]
      },
      "basics": {
        "beginner": [
          {
            "id": "js-basics-basics-beginner",
            "title": "値をしまう「変数」と、let・const の使い分け",
            "content": "プログラムはデータを変数にしまい、取り出したり書き換えたりしながら動きます。知識テストの前に、変数の考え方を押さえましょう。",
            "sections": [
              {
                "heading": "変数は名前の付いた入れ物",
                "body": "変数は、値に名前を付けてしまっておく入れ物です。一度しまえば、名前を書くだけで何度でも値を取り出せます。値を直接書く代わりに名前で扱うことで、コードの意味が読みやすくなり、値を変えるときも1か所の修正で済みます。",
                "code": "const price = 1200;\nconst taxRate = 0.1;\nconsole.log(price * (1 + taxRate)); // 1320",
                "example": "「1200 * 1.1」とだけ書かれていると何の計算か分かりませんが、price と taxRate という名前があれば「税込み価格の計算」だとすぐに読み取れます。"
              },
              {
                "heading": "宣言と代入",
                "body": "「宣言」は入れ物を用意すること、「代入」はその入れ物に値を入れることです。let x; と宣言しただけの x には、まだ値が入っていないことを表す undefined が入っています。宣言と代入は1行にまとめて書くのが一般的です。",
                "code": "let userName;          // 宣言だけ（中身は undefined）\nuserName = \"佐藤\";     // 代入\nlet age = 20;          // 宣言と代入を同時に"
              },
              {
                "heading": "let は書き換えられる、const は書き換えられない",
                "body": "let で宣言した変数は、あとから別の値を入れ直す「再代入」ができます。const で宣言した変数は再代入できません。まず const で書き、値を変える必要がある変数だけ let にすると、うっかり上書きするバグを防げます。",
                "code": "let count = 0;\ncount = count + 1;     // OK\n\nconst TAX_RATE = 0.1;\nTAX_RATE = 0.08;       // エラー：const は再代入できない",
                "example": "クイズの正解数のように増えていく値は let、税率や1ページの表示件数のような決まった値は const にします。"
              },
              {
                "heading": "スコープ：変数が使える範囲",
                "body": "let と const は、{ } で囲まれたブロックの中だけで使えます（ブロックスコープ）。ブロックの外から使おうとするとエラーになります。範囲が狭いほど、名前の衝突や思わぬ書き換えが起きにくくなります。",
                "code": "if (true) {\n  const message = \"こんにちは\";\n  console.log(message); // 使える\n}\nconsole.log(message);   // エラー：ブロックの外"
              },
              {
                "heading": "古い書き方 var を避ける理由",
                "body": "var は昔からある宣言方法で、ブロックではなく関数単位で有効範囲が決まり、同じ名前で何度でも宣言し直せてしまいます。そのため意図しない上書きが起きやすく、今は let と const を使うのが基本です。古いコードで var を見かけたら、値を変えない箇所は const、変える箇所は let に置き換えます。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "js-basics-basics-intermediate",
            "title": "データの種類と、演算子・配列の便利な使い方",
            "content": "値には数値・文字列・真偽値などの「型」があり、型によって計算の結果が変わります。演算子の落とし穴と、配列をまとめて処理する方法も押さえましょう。",
            "sections": [
              {
                "heading": "基本の型：Number・String・Boolean",
                "body": "Number は数値（1、3.14）、String は文字列（\"Hello\"）、Boolean は真偽値（true / false）です。typeof を使うと、値の型を \"number\" のような文字列で確かめられます。",
                "code": "typeof 123        // \"number\"\ntypeof \"123\"      // \"string\"\ntypeof true       // \"boolean\""
              },
              {
                "heading": "型変換：入力欄の値は文字列",
                "body": "フォームの入力欄から取り出した値は、数字に見えても文字列です。文字列同士を + でつなぐと足し算ではなく連結になるため、計算の前に Number() で数値に変換します。",
                "code": "\"1200\" + \"800\"                  // \"1200800\"（連結）\nNumber(\"1200\") + Number(\"800\")  // 2000（足し算）",
                "example": "割り勘計算アプリで合計が「1200800」と表示されたら、文字列のまま足しているサインです。"
              },
              {
                "heading": "比較は === を使う",
                "body": "== は型が違うと自動で変換してから比べるため、\"0\" == 0 が true になるなど、思わぬ一致が起きます。=== は型まで含めて比べるので、基本は === を使います。",
                "code": "\"0\" == 0    // true（型を変換して比べる）\n\"0\" === 0   // false（型が違う）"
              },
              {
                "heading": "% と && の便利な使い方",
                "body": "% は割り算の余りを求めます。偶数・奇数の判定や「3つごとに区切る」処理に使えます。&& は左側が偽ならその時点で結果を返し、右側を評価しません（短絡評価）。これを使うと「値があるときだけ処理する」を短く書けます。",
                "code": "7 % 3                 // 1\nindex % 2 === 0       // 偶数行なら true\nuser && user.name     // user がいないときはエラーにならない"
              },
              {
                "heading": "配列をまとめて処理する filter と map",
                "body": "filter は条件に合う要素だけを集めた新しい配列を、map は各要素を変換した新しい配列を返します。どちらも元の配列は変えません。for 文より短く、何をしたいかが読み取りやすくなります。",
                "code": "const prices = [500, 1200, 3000];\nprices.filter(p => p >= 1000);      // [1200, 3000]\nprices.map(p => Math.floor(p * 1.1)); // [550, 1320, 3300]",
                "example": "通販サイトの「1000円以上だけ表示」は filter、「すべて税込み表示に」は map で作れます。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "js-basics-basics-advanced",
            "title": "スコープとクロージャー、実践で気をつけること",
            "content": "関数と変数の関係（スコープとクロージャー）を理解すると、状態を安全に閉じ込められます。あわせて、実際のアプリで重要になる性能と安全性の基本を押さえましょう。",
            "sections": [
              {
                "heading": "関数スコープ",
                "body": "関数の中で宣言した変数は、その関数の中でしか使えません。関数ごとに自分専用の変数を持てるので、別の関数が同じ名前を使っていても影響し合いません。",
                "code": "function calc() {\n  const result = 10;\n  return result;\n}\nconsole.log(result); // エラー：関数の外からは見えない"
              },
              {
                "heading": "クロージャー：関数が外側の変数を覚える",
                "body": "関数の中で作った関数は、作られたときの外側の変数を覚えていて、あとから呼ばれても使えます。これをクロージャーと呼びます。外から直接触れない「自分だけの状態」を持たせたいときに使います。",
                "code": "function createCounter() {\n  let count = 0;\n  return () => {\n    count += 1;\n    return count;\n  };\n}\nconst counterA = createCounter();\ncounterA(); // 1\ncounterA(); // 2（count を覚えている）",
                "example": "ボタンAとボタンBで別々に押された回数を数えたいとき、createCounter() を2回呼べば、それぞれ独立したカウンターになります。"
              },
              {
                "heading": "デバウンス：連続する処理をまとめる",
                "body": "入力欄で1文字打つたびに検索を走らせると、処理が何度も重なって重くなります。デバウンスは「入力が止まってから一定時間後に1回だけ実行する」仕組みで、内部ではクロージャーでタイマーを覚えています。",
                "code": "function debounce(fn, wait) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), wait);\n  };\n}"
              },
              {
                "heading": "画面に表示するときの安全性：textContent を使う",
                "body": "利用者が入力した文字列を innerHTML に入れると、<script> などのタグが解釈され、悪意あるコードが実行される危険があります（XSS）。文字として表示したいだけなら textContent を使います。"
              },
              {
                "heading": "非同期処理は async / await で順番に書く",
                "body": "データの取得のように時間のかかる処理は、結果を待たずに次へ進みます。順番が大事な処理は async 関数の中で await を使うと、上から順に読める形で書けます。",
                "code": "async function showOrders() {\n  const user = await fetchUser();\n  const orders = await fetchOrders(user.id);\n  render(orders);\n}"
              }
            ]
          }
        ]
      },
      "thinking": {
        "beginner": [
          {
            "id": "js-basics-thinking-beginner",
            "title": "変数の宣言を自分で設計する",
            "content": "正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。",
            "prompts": [
              {
                "id": "js-basics-thinking-beginner-1",
                "scenario": "後輩が作ったカウンターアプリのコードです。「＋」ボタンを押すと数字が1増え、10を超えたら止まる仕様ですが、押しても数字が増えません。",
                "code": "const MAX = 10;\n\nbutton.addEventListener(\"click\", () => {\n  let count = 0;\n  if (count < MAX) {\n    count = count + 1;\n  }\n  display.textContent = count;\n});",
                "question": "なぜ数字が増えないのか、どう直せばよいかを、後輩に説明するつもりで書いてください。",
                "checkpoints": [
                  "let count = 0 がクリック処理の中にあり、押すたびに0に戻ることを指摘している",
                  "count の宣言をクリック処理（関数）の外に移す、という直し方を示している",
                  "count は値が変わるので let、MAX は変わらないので const が適切だと説明している",
                  "スコープ（変数がどこで作られ、どこまで使えるか）の考え方に触れている"
                ],
                "modelAnswer": "count がクリック処理の関数の中で宣言されているため、ボタンを押すたびに新しい count が作られて 0 から始まります。そのため 1 増やしても次のクリックでまた 0 に戻り、画面にはいつも 1 しか出ません。直し方は、let count = 0; をクリック処理の外（MAX の下など）に移すことです。関数の外で宣言すれば、クリックのたびに同じ count が使い回され、値が積み上がっていきます。count は押すたびに変わるので let、上限の MAX は変わらないので const、という今の使い分けは正しいです。「その変数はいつ作られて、いつまで生きているか」を意識すると、同じ種類のバグを防げます。",
                "tip": "値が「リセットされる」「前の値が残らない」バグを見たら、まず変数がどこで宣言されているかを確かめましょう。"
              },
              {
                "id": "js-basics-thinking-beginner-2",
                "scenario": "ネットショップの商品ページを作っています。必要なデータは、商品名、価格、在庫数、税率、カートに入れた個数、1回に買える上限個数です。",
                "question": "それぞれを let と const のどちらで宣言するか決め、理由を書いてください。",
                "checkpoints": [
                  "在庫数やカートに入れた個数のように、操作で変わる値を let にしている",
                  "税率や購入上限のように、決まった値を const にしている",
                  "商品名・価格を、ページ表示中に変わらない値として const にしている（または変わる場面を想定して理由を説明している）",
                  "「まず const、変える必要があるものだけ let」という考え方に触れている"
                ],
                "modelAnswer": "基本は「まず const、変える必要があるものだけ let」で考えます。商品名と価格は、このページを表示している間は変わらないので const。税率と1回に買える上限個数も決まった値なので const です。一方、カートに入れた個数は「＋」「−」を押すたびに変わるので let、在庫数も購入されると減っていくので let にします。こうしておくと、税率のような変わってはいけない値を誤って書き換えたときにエラーで気づけますし、コードを読む人も「どれが変わる値か」がすぐに分かります。",
                "tip": "「この値は、このページが開いている間に変わる場面があるか？」と1つずつ問いかけると、迷わず決められます。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "js-basics-thinking-intermediate",
            "title": "型と配列の処理を説明する",
            "content": "「なぜそうなるのか」を言葉で説明できると、知識が実際に使える力になります。自分の言葉で書いてみましょう。",
            "prompts": [
              {
                "id": "js-basics-thinking-intermediate-1",
                "scenario": "割り勘計算アプリで、金額を2つ入力して合計を表示する機能を作りました。「1200」と「800」を入力したところ、合計が「1200800」と表示されました。",
                "code": "const a = document.querySelector(\"#price1\").value;\nconst b = document.querySelector(\"#price2\").value;\nresult.textContent = a + b;",
                "question": "原因と直し方、そして同じミスを防ぐために普段からできることを書いてください。",
                "checkpoints": [
                  "入力欄の value は文字列で、+ が連結になっていることを指摘している",
                  "Number() などで数値に変換してから足す直し方を示している",
                  "console.log や typeof で型を確かめる、という調べ方に触れている",
                  "数字以外が入力されたとき（NaN）の扱いなど、追加で気をつける点に触れている"
                ],
                "modelAnswer": "入力欄の value は、数字を入力しても文字列として取り出されます。文字列同士を + でつなぐと足し算ではなく連結になるため、\"1200\" と \"800\" がつながって \"1200800\" になりました。直すには、Number(a) + Number(b) のように数値に変換してから足します。普段から、計算結果がおかしいときは console.log(typeof a, a) で型と中身を確かめる習慣をつけると、原因にすぐ気づけます。また、数字以外が入力されると Number() の結果は NaN になるので、Number.isNaN() で確かめて「数字を入力してください」と表示するなどの対策もしておくと安心です。",
                "tip": "「見た目は数字なのに計算がおかしい」ときは、まず型を疑いましょう。"
              },
              {
                "id": "js-basics-thinking-intermediate-2",
                "scenario": "商品一覧のデータから、「在庫がある商品だけ」を「税込み価格（10%）の配列」にして表示したいと考えています。後輩は for 文と if 文で書こうとしています。",
                "code": "const products = [\n  { name: \"ペン\", price: 200, stock: 5 },\n  { name: \"ノート\", price: 300, stock: 0 },\n  { name: \"定規\", price: 150, stock: 2 }\n];",
                "question": "filter と map を使ってどう書くかを示し、for 文と比べた利点を説明してください。",
                "checkpoints": [
                  "filter で stock が0より大きい商品に絞っている",
                  "map で税込み価格（price × 1.1、端数処理を含む）に変換している",
                  "filter → map の順につなげる理由（先に絞ると無駄な計算が減る等）に触れている",
                  "「何をしたいかが読み取りやすい」「元の配列を変えない」などの利点を説明している"
                ],
                "modelAnswer": "products.filter(p => p.stock > 0).map(p => Math.floor(p.price * 1.1)) と書けます。まず filter で在庫のある商品だけに絞り、次に map で税込み価格に変換するので、結果は [220, 165] です。先に絞ってから変換するのは、使わない商品の計算を省けるからです。for 文でも書けますが、空の配列を用意して、if で判定して、push して…と手順を追わないと目的が分かりません。filter と map なら「絞り込む」「変換する」という意図が名前から読み取れ、元の products も書き換えないので、ほかの処理に影響を与えません。",
                "tip": "配列の処理は「絞る（filter）」「変える（map）」「まとめる（reduce）」のどれをしたいのかを先に言葉にすると、書き方が決まります。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "js-basics-thinking-advanced",
            "title": "性能と安全性から設計を考える",
            "content": "動くコードの先にある「速さ」と「安全さ」を判断する練習です。理由まで書けることを目指しましょう。",
            "prompts": [
              {
                "id": "js-basics-thinking-advanced-1",
                "scenario": "商品検索の入力欄に、1文字入力するたびにサーバーへ検索リクエストを送る機能があります。利用者が増えてサーバーが重くなり、入力中の画面もカクつくようになりました。",
                "code": "input.addEventListener(\"input\", (e) => {\n  search(e.target.value); // サーバーに問い合わせる\n});",
                "question": "何が問題で、どう改善するかを、仕組み（なぜ改善できるのか）も含めて書いてください。",
                "checkpoints": [
                  "1文字ごとにリクエストが送られ、回数が多すぎることを指摘している",
                  "デバウンス（入力が止まってから一定時間後に1回だけ実行）を提案している",
                  "タイマーを前回分取り消して張り直す、というクロージャーを使った仕組みを説明している",
                  "待ち時間（例：0.3秒）の決め方や、利用者の体感への影響に触れている"
                ],
                "modelAnswer": "「りんご」と打つだけで3〜4回、変換中の入力も含めるとさらに多くのリクエストが送られ、そのほとんどは途中の文字列で無駄になっています。そこで、デバウンスを使い「入力が0.3秒止まったら1回だけ検索する」ようにします。仕組みは、関数の外側にタイマーを覚えておき（クロージャー）、入力のたびに前のタイマーを clearTimeout で取り消して新しく setTimeout し直すことです。打ち続けている間はずっと取り消されるので、実行されるのは手が止まった後の1回だけになります。待ち時間は短すぎると効果が薄く、長すぎると「反応が遅い」と感じられるので、0.2〜0.5秒程度で試して決めます。",
                "tip": "「頻繁に起きるイベント」に重い処理が付いていたら、回数を減らせないかをまず考えましょう。"
              },
              {
                "id": "js-basics-thinking-advanced-2",
                "scenario": "掲示板アプリで、投稿されたコメントを一覧に表示する処理です。レビューで「このコードは危険」と指摘されました。",
                "code": "comments.forEach(c => {\n  list.innerHTML += `<li>${c.author}：${c.body}</li>`;\n});",
                "question": "このコードの問題点を2つ以上挙げ、それぞれの直し方を書いてください。",
                "checkpoints": [
                  "投稿内容を innerHTML に入れると、スクリプトが実行される XSS の危険があることを指摘している",
                  "createElement と textContent で文字として表示する直し方を示している",
                  "innerHTML += をループで繰り返すと、毎回一覧全体を作り直して遅くなることを指摘している",
                  "DocumentFragment などでまとめてから1回で追加する直し方を示している"
                ],
                "modelAnswer": "1つ目は安全性の問題です。投稿本文をそのまま innerHTML に入れているので、本文に <img src=x onerror=...> のようなタグを書かれると、それを見た全員のブラウザでコードが実行されてしまいます（XSS）。li を createElement で作り、li.textContent = `${c.author}：${c.body}` のように textContent で入れれば、タグはただの文字として表示されます。2つ目は性能の問題です。innerHTML += はループのたびに一覧全体の HTML を読み直して作り直すため、コメントが増えるほど遅くなります。作った li を DocumentFragment にためておき、最後に list.appendChild(fragment) で1回だけ追加すると、描き直しが1回で済みます。",
                "tip": "外から来た文字列を画面に出すときは「タグとして解釈されないか」、ループで画面を触るときは「何回描き直しているか」を必ず確かめましょう。"
              }
            ]
          }
        ]
      }
    },
    "shortLabel": "JS"
  },
  {
    "id": "js-web",
    "name": "JavaScript web操作入門",
    "description": "DOM操作、イベントリスナーなどウェブページの操作を学びます",
    "icon": "fa-solid fa-globe",
    "lessons": {
      "beginner": [
        {
          "id": "js-web-beginner-1",
          "title": "DOM基礎",
          "content": "DOM基礎について学びます。重要なトピック：HTMLの操作, 要素の選択, テキストの変更",
          "questions": [
            {
              "id": "q-beg-DOM基礎-1",
              "text": "DOM操作とは、JavaScriptからウェブページのHTML要素を______ことで、リアルタイムにページの内容や属性を変更できます。",
              "options": [
                {
                  "id": "a",
                  "text": "動的に操作・変更",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "サーバーに送信",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "ブラウザにキャッシュ",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "プリントアウト",
                  "correct": false
                }
              ],
              "explanation": "DOM はブラウザが読み込んだ HTML を、JavaScript から扱えるオブジェクトの木構造として表現したものです。この木をたどって要素を取得し、テキストや属性、スタイルを書き換えると、ページを再読み込みせずに表示が更新されます。",
              "hint": "ページを読み込み直さずに見出しの文字が変わる場面を思い浮かべてみましょう。それを可能にしているのが何かを考えます。",
              "example": "SNSで「いいね」を押した瞬間にハートが赤くなり、数字が1増える。ページを読み込み直さずに見た目が変わるのは、JavaScriptがDOMを書き換えているからです。"
            },
            {
              "id": "q-beg-DOM基礎-2",
              "text": "document.getElementById() や querySelector() を使用して、ウェブページから特定の要素を______処理を「要素の選択」と呼びます。",
              "options": [
                {
                  "id": "a",
                  "text": "指定・取得",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "デザイン・装飾",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "削除・消去",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "コピー・複製",
                  "correct": false
                }
              ],
              "explanation": "getElementById は id を手がかりに要素を1つ取得します。querySelector は \".card > p\" のような CSS セレクタで指定でき、条件に一致した最初の要素を返します。複数まとめて取得したい場合は querySelectorAll を使い、返ってきた NodeList を forEach で処理します。",
              "hint": "id はページ内で1つだけ、CSS セレクタは複数の条件を書けます。どちらがより柔軟に指定できるでしょうか。",
              "example": "お問い合わせフォームの送信ボタンを document.querySelector(\"#submit\") で取り出し、押されたときの処理を付ける、というように「操作したい部品をまず見つける」場面で使います。"
            },
            {
              "id": "q-beg-DOM基礎-3",
              "text": "element.textContent = \"新しいテキスト\" で、選択した要素の中身を______だけで変更でき、HTMLタグは反映されません。",
              "options": [
                {
                  "id": "a",
                  "text": "テキスト",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "HTML",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "スタイル情報",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "クラス属性",
                  "correct": false
                }
              ],
              "explanation": "textContent は渡された値を純粋な文字列として扱い、タグが含まれていてもそのまま文字として表示します。innerHTML は HTML として解釈するため、利用者の入力をそのまま渡すとスクリプトが実行される危険があります。文字を差し替えるだけなら textContent が安全です。",
              "hint": "同じ文字列を innerHTML に入れた場合と textContent に入れた場合で、タグが書かれていたときの扱いがどう違うかを考えてみましょう。",
              "example": "ユーザー名を「ようこそ、○○さん」と表示するとき、textContent を使えば、名前に < や > が含まれていてもタグとして解釈されず、そのまま文字で表示されます。"
            },
            {
              "id": "q-beg-DOM基礎-4",
              "text": "DOM 操作が「ページを再読み込みせずに表示を更新できる」のは、DOM が______だからです。",
              "options": [
                {
                  "id": "a",
                  "text": "読み込んだ HTML を JavaScript から操作できるオブジェクトの木構造として表しているため",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "HTML ファイルそのものをディスク上で書き換えているため",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "サーバーに変更内容を送信して新しい HTML を受け取っているため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "ブラウザが一定間隔でページを自動再読み込みしているため",
                  "correct": false
                }
              ],
              "explanation": "DOM はブラウザがメモリ上に構築した、HTML に対応するオブジェクトの木です。JavaScript がこの木を書き換えるとブラウザが再描画するため、表示だけが更新されます。元の HTML ファイルは変更されず、サーバーとの通信も発生しません。",
              "hint": "JavaScript が書き換えているのは、ディスク上のファイルでしょうか、それともブラウザがメモリ上に持っている構造でしょうか。",
              "example": "チャットアプリで新しいメッセージが届いたとき、ページ全体を読み込み直さずに、メッセージ一覧の末尾に1件だけ追加して表示できます。"
            }
          ],
          "qa": [
            {
              "question": "textContent と innerHTML の使い分けは？",
              "answer": "textContent はテキストのみ、innerHTML は HTML として解析。セキュリティのため、ユーザー入力は textContent を使用（XSS 対策）。innerHTML は、チェック済みの HTML テンプレート構築時のみ。",
              "relatedTopics": [
                "DOM操作応用"
              ]
            }
          ]
        }
      ],
      "intermediate": [
        {
          "id": "js-web-intermediate-1",
          "title": "イベント処理",
          "content": "イベント処理について学びます。重要なトピック：クリックイベント, イベントリスナー, 非同期処理",
          "questions": [
            {
              "id": "q-int-イベント処理-1",
              "text": "クリックイベントはユーザーが要素をマウスボタンで______したときに発生する重要なイベントです。",
              "options": [
                {
                  "id": "a",
                  "text": "クリック",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "ダブルクリック",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "ホバー・通過",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "ドラッグ",
                  "correct": false
                }
              ],
              "explanation": "クリックは利用者が要素をマウスで押したときに発生するイベントです。ブラウザはイベントが起きると、その要素に登録された処理を呼び出します。ボタンやリンクなど、操作の起点となる要素で最もよく使われます。",
              "hint": "ボタンを押したとき、リンクを押したとき。利用者の操作に反応するために何が起きているかを考えてみましょう。",
              "example": "アコーディオン形式の「よくある質問」で、質問をクリックしたら答えが開く動きを click イベントで作ります。"
            },
            {
              "id": "q-int-イベント処理-2",
              "text": "addEventListener(\"click\", 関数) は特定のイベントが発生したときに実行する処理を登録する仕組みで、これを______と呼びます。",
              "options": [
                {
                  "id": "a",
                  "text": "イベントリスナー",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "イベントハンドラ",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "イベントキャッチ",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "イベント処理",
                  "correct": false
                }
              ],
              "explanation": "addEventListener は指定したイベントが起きたときに呼ばれる関数を登録します。同じ要素に何度でも登録でき、複数の処理を並行して動かせます。onclick への代入は上書きになるため、後から代入した処理だけが残ります。不要になった登録は removeEventListener で解除します。",
              "hint": "同じボタンに2つの異なる処理を登録したいとき、onclick への代入ではどうなるかを考えてみましょう。",
              "example": "パスワード入力欄の「表示」ボタンに addEventListener を付け、押されるたびに入力欄の type を password と text で切り替えます。"
            },
            {
              "id": "q-int-イベント処理-3",
              "text": "fetch() や setTimeout() を使った処理は、結果を待たずに次の処理を続ける______です。単一スレッドのJavaScriptで重要。",
              "options": [
                {
                  "id": "a",
                  "text": "非同期処理",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "並列処理",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "順序処理",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "バッチ処理",
                  "correct": false
                }
              ],
              "explanation": "非同期処理は、結果を待たずに次の処理へ進み、完了したときにあらためて登録しておいた処理を実行する仕組みです。fetch や setTimeout がこれにあたります。待っている間もブラウザは他の処理を続けられるため、画面が固まりません。結果は then や await で受け取ります。",
              "hint": "サーバーからの応答を待つ間、ページの他の操作が止まってしまうと困ります。その間ブラウザは何をしているでしょうか。",
              "example": "天気予報サイトで fetch で最新の天気を取りに行っている間も、画面のスクロールやボタン操作が固まらずに使えます。"
            },
            {
              "id": "q-int-イベント処理-4",
              "text": "同じボタンに複数の処理を登録したいとき、onclick への代入ではなく addEventListener を使うべき理由は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "addEventListener は同じイベントに複数の処理を重ねて登録できるため",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "addEventListener のほうが処理速度が速いため",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "onclick では click 以外のイベントを扱えないため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "onclick は最新のブラウザで動作しなくなったため",
                  "correct": false
                }
              ],
              "explanation": "onclick はプロパティへの代入なので、2回代入すると後の値で上書きされ、先に書いた処理は失われます。addEventListener は登録を積み重ねるため、複数の処理を共存させられます。速度の違いはなく、onclick も動作はしますが、拡張性の面で addEventListener が推奨されます。",
              "hint": "同じプロパティに2回代入したら、1回目の値はどうなるでしょうか。",
              "example": "送信ボタン1つに「入力チェック」と「アクセス解析への記録」を別々に登録したいとき、addEventListener なら両方とも動きます。"
            }
          ],
          "qa": [
            {
              "question": "addEventListener と on属性（onclick）の違いは？",
              "answer": "addEventListener は複数のリスナー登録可、on属性は 1 つだけ。addEventListener でイベント伝播制御（キャプチャ・バブル）可能。モダン開発は addEventListener が標準。React は合成イベント使用。",
              "relatedTopics": [
                "DOM基礎"
              ]
            }
          ]
        }
      ],
      "advanced": [
        {
          "id": "js-web-advanced-1",
          "title": "DOM操作応用",
          "content": "DOM操作応用について学びます。重要なトピック：要素の追加削除, クラスの変更, アニメーション",
          "questions": [
            {
              "id": "q-adv-DOM操作応用-1",
              "text": "createElement() で新しい要素を作成し、appendChild() で______ことで、実行時に動的にHTMLを追加できます。",
              "options": [
                {
                  "id": "a",
                  "text": "ページに追加",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "サーバーに送信",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "ファイルに保存",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "変数に格納",
                  "correct": false
                }
              ],
              "explanation": "createElement は要素を作るだけで、まだ DOM の木には属していないため画面には現れません。appendChild や append で既存の要素の子として追加して、はじめて表示されます。多数の要素を追加する場合は DocumentFragment にまとめてから一度で挿入すると、再描画の回数を減らせます。",
              "hint": "createElement で作った時点では、その要素はまだ画面のどこにも現れません。表示するには何が足りないでしょうか。",
              "example": "「行を追加」ボタンを押すたびに、入力欄付きの新しい行を createElement で作り、表に appendChild して増やしていきます。"
            },
            {
              "id": "q-adv-DOM操作応用-2",
              "text": "classList.add()、remove()、toggle() を使ってHTML要素のCSS ______を操作し、プログラムから要素のスタイルを制御します。",
              "options": [
                {
                  "id": "a",
                  "text": "クラス",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "プロパティ",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "ID属性",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "背景色",
                  "correct": false
                }
              ],
              "explanation": "classList はクラスの付け外しを通じて見た目を切り替える仕組みです。add で追加、remove で削除、toggle で有無を反転します。見た目の定義は CSS 側に残るため、style を直接書き換えるより保守しやすく、状態の切り替えを1行で表現できます。",
              "hint": "style を直接書き換える方法と比べて、見た目の定義を CSS 側に残せるのはどちらでしょうか。",
              "example": "ダークモード切替ボタンで document.body.classList.toggle(\"dark\") を呼び、色の指定はCSSの .dark クラスにまとめておきます。"
            },
            {
              "id": "q-adv-DOM操作応用-3",
              "text": "CSS animation や requestAnimationFrame() を使って、時間とともに要素の見た目（位置、色など）を______させることをアニメーションと呼びます。",
              "options": [
                {
                  "id": "a",
                  "text": "滑らかに変化",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "急激に変更",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "ランダムに変動",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "予測不能に動作",
                  "correct": false
                }
              ],
              "explanation": "requestAnimationFrame はブラウザの描画タイミングに合わせて処理を呼び出すため、滑らかで無駄のないアニメーションになります。setInterval は描画と無関係な間隔で動くためカクつきが出やすく、タブが非表示のときも動き続けます。単純な動きであれば CSS animation に任せるのが最も軽量です。",
              "hint": "1秒間に何度も位置を更新する処理を setInterval で書くと、画面の更新タイミングとずれることがあります。",
              "example": "ページ上部へ戻るボタンを押したとき、一瞬で飛ぶのではなく、なめらかにスクロールして戻る動きを作るのに使います。"
            },
            {
              "id": "q-adv-DOM操作応用-4",
              "text": "createElement() で作った要素が画面に表示されないとき、原因として最も多いのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "appendChild などで既存の要素に追加していないため",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "要素にテキストを設定していないため",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "クラス名を指定していないため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "ページを再読み込みしていないため",
                  "correct": false
                }
              ],
              "explanation": "createElement は要素をメモリ上に作るだけで、DOM の木には接続されていないため画面に現れません。appendChild や append で親要素の子として追加して、はじめて描画されます。テキストやクラス名の有無は表示の可否とは無関係で、再読み込みはむしろ追加した要素を消してしまいます。",
              "hint": "作っただけの要素は、まだ DOM の木のどこにもぶら下がっていません。",
              "example": "通知のポップアップを作ったのに表示されないとき、document.body.appendChild(toast) を書き忘れていないかを最初に確認します。"
            }
          ],
          "qa": [
            {
              "question": "removeChild と remove の違いは？",
              "answer": "removeChild は親.removeChild(子)、remove は要素.remove() で呼び出し。modern ブラウザは remove が便利。ただし IE11 対応なら removeChild が必要。プロは環境に合わせ選択。",
              "relatedTopics": [
                "DOM基礎"
              ]
            }
          ]
        }
      ],
      "projects": {
        "beginner": [
          {
            "id": "js-web-project-beginner-1",
            "title": "JavaScript web操作入門 初級プロジェクト",
            "content": "要素の取得とテキストの書き換えを使って、入力内容を画面に反映する小さな機能を作りながら確認します。",
            "questions": [
              {
                "id": "q-beg-JavaScript-web操作入門初級プロジェクト-1",
                "text": "入力欄に打った名前を画面の見出しに反映したいとき、取得した要素に対して使うべきなのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "textContent に代入する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "innerHTML に代入する",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "value に代入する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "id に代入する",
                    "correct": false
                  }
                ],
                "explanation": "表示したいのは文字そのものなので textContent を使います。innerHTML は渡された文字列を HTML として解釈するため、入力に < script > などが含まれていると実行されてしまいます。value は入力欄の値を読み書きする属性で、見出しの表示には使いません。",
                "hint": "利用者が打った文字をそのまま表示したい場面です。タグとして解釈されると困ります。",
                "example": "年賀状作成サイトで、入力欄に名前を打つとプレビューの宛名がその場で切り替わる機能を textContent で作ります。"
              },
              {
                "id": "q-beg-JavaScript-web操作入門初級プロジェクト-2",
                "text": "ボタンを押したときに処理を動かすため、addEventListener に渡す第2引数は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "イベント発生時に呼び出したい関数",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "関数を実行した結果の値",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "要素の id を表す文字列",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "イベントが発生するまでの待ち時間",
                    "correct": false
                  }
                ],
                "explanation": "addEventListener には呼び出したい関数そのものを渡します。handler と書けば関数が登録されますが、handler() と書くとその場で実行された戻り値が渡されてしまい、クリックしても何も起きません。第1引数はイベント名の文字列です。",
                "hint": "handler() と書くか handler と書くかで意味が変わります。登録したいのは「呼ばれる関数そのもの」です。",
                "example": "「カートに入れる」ボタンに addEventListener(\"click\", addToCart) と登録し、押されたときだけ addToCart を動かします。"
              },
              {
                "id": "q-beg-JavaScript-web操作入門初級プロジェクト-3",
                "text": "querySelector で取得した要素が null になり、処理が止まりました。原因として考えられるのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "スクリプトが要素より先に実行され、対象がまだ存在しないため",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "要素にスタイルが当たっていないため",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "変数を const で宣言しているため",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "セレクタに CSS クラスを使ったため",
                    "correct": false
                  }
                ],
                "explanation": "スクリプトが対象要素より先に実行されると、その時点では要素が存在しないため querySelector は null を返します。script タグを body の末尾に置くか、defer 属性を付けるか、DOMContentLoaded を待ってから処理すると解決します。スタイルや宣言方法は取得の可否に影響しません。",
                "hint": "head の中で読み込んだスクリプトは、body の要素が作られる前に動きます。",
                "example": "<head> の中で読み込んだスクリプトが動かないとき、<script> を </body> の直前に移すか defer を付けると、要素ができてから処理が動くようになります。"
              },
              {
                "id": "q-beg-JavaScript-web操作入門初級プロジェクト-4",
                "text": "入力欄が空のまま送信されたときに処理を止めたい場合、書くべき判定は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "入力値の前後の空白を取り除いたうえで、空文字かどうかを確認する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "入力値の文字数が0より大きいかどうかだけを確認する",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "入力欄の id が存在するかどうかを確認する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "入力値が数値に変換できるかどうかを確認する",
                    "correct": false
                  }
                ],
                "explanation": "空白だけの入力は長さが0ではないため、単純な長さの判定では通過してしまいます。trim() で前後の空白を除いてから空文字と比較すると、実質的に未入力の状態を正しくはじけます。id の有無や数値変換は、入力が空かどうかの判定とは無関係です。",
                "hint": "スペースだけが入力された場合、文字数は0ではありません。",
                "example": "問い合わせフォームで、スペースだけ入力して送信されるのを防ぐため、value.trim() === \"\" なら「名前を入力してください」と表示して処理を止めます。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "js-web-project-intermediate-1",
            "title": "JavaScript web操作入門 中級プロジェクト",
            "content": "イベントと非同期処理を組み合わせ、一覧の操作と読み込み中の表示を扱いながら確認します。",
            "questions": [
              {
                "id": "q-int-JavaScript-web操作入門中級プロジェクト-1",
                "text": "一覧の各項目すべてにクリック処理を付けたいとき、項目が後から追加される場合でも動く方法は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "親要素にひとつ登録し、event.target で押された項目を判定する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "項目の数だけ addEventListener を繰り返し登録する",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "各項目の onclick 属性を HTML に直接書く",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "一定間隔で登録処理を実行し直す",
                    "correct": false
                  }
                ],
                "explanation": "イベントは子要素から親要素へ伝わるため、親にひとつ登録しておけば、後から追加された子の操作も受け取れます。これをイベント委譲と呼びます。押された要素は event.target で判定します。個別登録は追加分に対応できず、定期的な登録し直しは無駄が大きく重複登録の原因にもなります。",
                "hint": "後から増えた項目には、登録済みのリスナーは付いていません。最初から存在している要素はどれでしょうか。",
                "example": "ToDoリストで、新しく追加したタスクにも削除ボタンを効かせたいとき、リスト全体（<ul>）に1つだけクリック処理を付け、event.target で押されたタスクを判断します。"
              },
              {
                "id": "q-int-JavaScript-web操作入門中級プロジェクト-2",
                "text": "fetch でデータを取得する間、二重送信を防ぐために行うべきなのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "送信ボタンを無効化し、完了後に戻す",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "取得したデータを変数に保存する",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "取得処理を setTimeout で遅らせる",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "ボタンのラベルを短くする",
                    "correct": false
                  }
                ],
                "explanation": "非同期処理の完了を待つ間もボタンは押せるため、連打すると同じリクエストが何度も飛びます。処理の開始時に disabled を立て、finally で戻せば、成功しても失敗しても必ず操作可能な状態に復帰します。遅延させるだけでは二重送信そのものは防げません。",
                "hint": "応答を待っている間も、利用者はボタンを押せてしまいます。",
                "example": "決済ボタンを連打されて二重に注文が入るのを防ぐため、押した瞬間にボタンを disabled にし、通信が終わったら元に戻します。"
              },
              {
                "id": "q-int-JavaScript-web操作入門中級プロジェクト-3",
                "text": "fetch の通信が失敗したときに備えて書くべき処理は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "catch でエラーを受け取り、利用者に失敗を伝える",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "then の中で成功時の処理だけを書く",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "通信前に console.log を入れる",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "取得件数を数えて表示する",
                    "correct": false
                  }
                ],
                "explanation": "通信は回線状況やサーバー側の都合で失敗します。catch（または try / catch）で失敗を受け取り、メッセージを表示して次の操作を促す必要があります。何も書かないと画面が読み込み中のまま止まり、利用者は原因が分かりません。fetch は通信自体が成立すれば 404 でも成功扱いになるため、response.ok の確認も併せて行います。",
                "hint": "通信は必ず成功するとは限りません。失敗したとき、画面は何も起きないままになっていませんか。",
                "example": "電波の悪い場所で投稿に失敗したとき、何も表示されないと利用者は投稿できたと思い込みます。catch で「送信に失敗しました。もう一度お試しください」と伝えます。"
              },
              {
                "id": "q-int-JavaScript-web操作入門中級プロジェクト-4",
                "text": "読み込み中であることを利用者に伝えるため、fetch の前後で行うべきなのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "開始時に読み込み表示を出し、完了時に必ず消す",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "完了してから読み込み表示を出す",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "読み込み表示は出さずに待たせる",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "読み込み表示を常に画面に出しておく",
                    "correct": false
                  }
                ],
                "explanation": "通信の開始時に読み込み表示を出し、finally で必ず消すのが基本です。then の中だけで消すと、失敗したときに表示が残って操作不能に見えてしまいます。待っている間に何も変化がないと、利用者は操作が受け付けられたか分からず連打の原因にもなります。",
                "hint": "成功した場合だけ消す書き方だと、失敗したときに表示が残り続けます。",
                "example": "検索結果を読み込んでいる間はくるくる回る読み込み表示を出し、成功しても失敗しても finally で必ず消すことで、表示が出しっぱなしになるのを防ぎます。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "js-web-project-advanced-1",
            "title": "JavaScript web操作入門 上級プロジェクト",
            "content": "要素の動的生成とアニメーションを扱い、描画性能と安全な表示の両立を確認します。",
            "questions": [
              {
                "id": "q-adv-JavaScript-web操作入門上級プロジェクト-1",
                "text": "取得した100件のデータを一覧に描画するとき、再描画の回数を抑える書き方は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "DocumentFragment に組み立ててから一度だけ追加する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "1件ごとに appendChild で追加する",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "1件ごとに innerHTML へ文字列を足していく",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "追加のたびに一覧を空にしてから描き直す",
                    "correct": false
                  }
                ],
                "explanation": "DOM に要素を追加するたびにレイアウト計算と再描画が発生します。DocumentFragment に100件を組み立ててから一度だけ挿入すれば、再描画は1回で済みます。innerHTML への文字列追加は毎回すべてを解析し直すため最も重く、既存の要素に付けたイベントも失われます。",
                "hint": "画面を作り直す回数を減らしたい場面です。追加のたびに DOM に触れると何が起きるでしょうか。",
                "example": "APIから届いた100件の商品データを一覧表示するとき、1件ずつ画面に足すと何度も描き直しが起きて重くなります。まとめて組み立ててから1回で追加します。"
              },
              {
                "id": "q-adv-JavaScript-web操作入門上級プロジェクト-2",
                "text": "外部から取得したコメント本文を一覧に表示するとき、安全な方法は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "要素を作って textContent に本文を入れる",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "innerHTML にテンプレート文字列で本文を埋め込む",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "document.write で本文を書き出す",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "eval で本文を評価してから表示する",
                    "correct": false
                  }
                ],
                "explanation": "外部から来た文字列は何が含まれているか分からないため、HTML として解釈させてはいけません。textContent なら中身は必ず文字として表示され、XSS を防げます。innerHTML への埋め込みや eval は、スクリプトを実行させる典型的な経路になります。",
                "hint": "本文に HTML タグが含まれていた場合、それをタグとして解釈させたいかどうかを考えてみましょう。",
                "example": "口コミサイトで、投稿された本文を textContent で表示すれば、悪意のあるスクリプトが埋め込まれていても実行されません。"
              },
              {
                "id": "q-adv-JavaScript-web操作入門上級プロジェクト-3",
                "text": "スクロールに追従する処理が重いとき、実行回数を抑える手法として適しているのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "スロットリング（一定間隔にひとつだけ実行する）",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "再帰（関数が自分自身を呼び出す）",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "イベント委譲（親要素でまとめて受け取る）",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "分割代入（オブジェクトから値を取り出す）",
                    "correct": false
                  }
                ],
                "explanation": "スロットリングは、連続して発生するイベントに対して一定間隔ごとに1回だけ処理を実行する手法です。スクロール追従のように途中経過も反映したい処理に向きます。最後の1回だけでよい検索入力などにはデバウンスを使い、目的に応じて使い分けます。",
                "hint": "スクロール中は1秒間に何十回もイベントが発生します。「最後に1回」ではなく「一定間隔で」動かしたい場面です。",
                "example": "スクロールに合わせて「ページ上部へ戻る」ボタンの表示を切り替える処理を、0.1秒に1回だけ動かすようにして、スクロールのカクつきを防ぎます。"
              },
              {
                "id": "q-adv-JavaScript-web操作入門上級プロジェクト-4",
                "text": "要素をなめらかに移動させるアニメーションで、位置の更新に適しているのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "requestAnimationFrame（ブラウザの描画タイミングに合わせて呼ばれる）",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "setInterval（指定した間隔で繰り返し呼ばれる）",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "setTimeout の入れ子（一定時間後に1回ずつ呼ぶ）",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "while ループ（条件を満たす間くり返す）",
                    "correct": false
                  }
                ],
                "explanation": "requestAnimationFrame はブラウザが次に描画する直前に呼ばれるため、更新と描画のタイミングが揃い、なめらかに動きます。タブが非表示のときは自動的に止まるため無駄な処理も減ります。setInterval は描画と無関係な間隔で動くためずれが生じ、while ループは処理を占有して画面が固まります。",
                "hint": "画面の更新タイミングと処理のタイミングがずれると、動きがカクつきます。",
                "example": "ゲームのキャラクターやスライドショーを動かすとき、requestAnimationFrame で画面の描き換えのタイミングに合わせて位置を更新すると、カクつかずになめらかに動きます。"
              }
            ]
          }
        ]
      },
      "basics": {
        "beginner": [
          {
            "id": "js-web-basics-beginner",
            "title": "DOM：JavaScript から画面を書き換える仕組み",
            "content": "ボタンを押すと表示が変わる、入力した文字がすぐ反映される。こうした動きはすべて DOM 操作で作られています。基本の流れを押さえましょう。",
            "sections": [
              {
                "heading": "DOM はページを表す「部品の木」",
                "body": "ブラウザは HTML を読み込むと、見出しやボタンなどの部品を木のような構造のオブジェクトにします。これが DOM です。JavaScript から DOM を書き換えると、ページを読み込み直さなくても画面がすぐに変わります。",
                "example": "SNS で「いいね」を押した瞬間にハートが赤くなり数字が増えるのは、JavaScript がその部分の DOM だけを書き換えているからです。"
              },
              {
                "heading": "要素を選ぶ：querySelector",
                "body": "操作したい部品は、まず選んで取り出します。querySelector は CSS と同じ書き方（#id、.class、タグ名）で最初に見つかった要素を返します。見つからなければ null を返します。",
                "code": "const title = document.querySelector(\"#title\");\nconst firstItem = document.querySelector(\".item\");\nconst buttons = document.querySelectorAll(\"button\"); // 全部"
              },
              {
                "heading": "中身を変える：textContent",
                "body": "textContent に文字列を代入すると、要素の中身がその文字に置き換わります。タグは解釈されず文字のまま表示されるので、利用者の入力を表示するときも安全です。",
                "code": "title.textContent = `ようこそ、${name}さん`;"
              },
              {
                "heading": "操作に反応する：addEventListener",
                "body": "「クリックされたら」「入力されたら」などのタイミングで処理を動かすには、addEventListener でイベントと関数を登録します。第2引数には、そのとき呼び出したい関数を渡します。",
                "code": "button.addEventListener(\"click\", () => {\n  title.textContent = \"押されました\";\n});"
              },
              {
                "heading": "よくあるつまずき：要素がまだない、空の入力",
                "body": "HTML の <head> で読み込んだスクリプトは、ボタンなどの要素ができる前に動くため、querySelector が null を返して止まります。<script> を </body> の直前に置くか defer を付けます。また、入力欄はスペースだけでも「空ではない」と判定されるので、trim() で前後の空白を取ってから空かどうかを確かめます。",
                "code": "<script src=\"app.js\" defer></script>\n\nif (input.value.trim() === \"\") {\n  error.textContent = \"名前を入力してください\";\n  return;\n}"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "js-web-basics-intermediate",
            "title": "イベントと非同期処理を使いこなす",
            "content": "実際のアプリでは、たくさんの部品へのイベント登録や、サーバーとの通信が欠かせません。使い勝手の良い画面を作るための考え方を学びます。",
            "sections": [
              {
                "heading": "イベントリスナーは何個でも登録できる",
                "body": "onclick = 関数 という書き方は、後から代入すると前の処理が消えてしまいます。addEventListener なら同じイベントに複数の処理を重ねて登録でき、互いに上書きしません。"
              },
              {
                "heading": "イベント委任：親に1つだけ登録する",
                "body": "リストの項目1つずつにクリック処理を付けると、後から追加した項目には処理が付きません。親要素に1つだけ登録し、event.target で「どの項目が押されたか」を判断すれば、後から増えた項目にも効きます。",
                "code": "list.addEventListener(\"click\", (event) => {\n  const item = event.target.closest(\"li\");\n  if (!item) return;\n  item.classList.toggle(\"done\");\n});",
                "example": "ToDo リストで、新しく追加したタスクにも完了・削除の操作を効かせたいときに使います。"
              },
              {
                "heading": "非同期処理：待っている間も画面は動く",
                "body": "fetch や setTimeout のように時間のかかる処理は、結果を待たずに次の処理へ進みます（非同期処理）。そのおかげで、通信中もスクロールや他の操作ができます。結果を使う処理は await や then で「結果が来てから」動かします。"
              },
              {
                "heading": "通信中の画面をていねいに作る",
                "body": "通信中は読み込み表示を出し、送信ボタンを無効にして二重送信を防ぎます。失敗したときは catch で受け取り、利用者に伝えます。読み込み表示とボタンは、成功しても失敗しても finally で必ず元に戻します。",
                "code": "button.disabled = true;\nloading.hidden = false;\ntry {\n  const res = await fetch(\"/api/posts\", { method: \"POST\", body });\n  if (!res.ok) throw new Error(\"送信失敗\");\n  message.textContent = \"送信しました\";\n} catch {\n  message.textContent = \"送信に失敗しました。もう一度お試しください\";\n} finally {\n  button.disabled = false;\n  loading.hidden = true;\n}"
              },
              {
                "heading": "fetch は「通信できたか」と「成功したか」が別",
                "body": "fetch は、サーバーが 404 や 500 を返しても「通信自体はできた」としてエラーになりません。res.ok で成功したかを確かめ、失敗なら自分でエラーとして扱う必要があります。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "js-web-basics-advanced",
            "title": "要素の生成・見た目の切り替え・なめらかな動き",
            "content": "画面に部品を増やしたり、見た目を切り替えたり、動かしたりする応用操作を学びます。数が多いときの速さと安全性も大切なポイントです。",
            "sections": [
              {
                "heading": "要素を作って追加する",
                "body": "createElement で新しい要素を作っても、それだけでは画面に出ません。appendChild などで既存の要素の中に追加して初めて表示されます。",
                "code": "const li = document.createElement(\"li\");\nli.textContent = \"新しいタスク\";\nlist.appendChild(li); // ここで初めて表示される"
              },
              {
                "heading": "見た目は classList で切り替える",
                "body": "JavaScript で style を1つずつ書き換えるより、見た目は CSS のクラスにまとめておき、classList.add / remove / toggle で付け外しするほうが管理しやすくなります。",
                "code": "document.body.classList.toggle(\"dark\");\n/* CSS 側 */\n.dark { background: #222; color: #eee; }",
                "example": "ダークモードの切り替えボタンは、body に dark クラスを付け外しするだけで作れます。"
              },
              {
                "heading": "たくさん追加するときは DocumentFragment",
                "body": "100件の要素を1つずつ画面に追加すると、そのたびにブラウザが配置の計算をやり直します。DocumentFragment という画面外の入れ物にまとめて組み立て、最後に1回だけ追加すると速くなります。",
                "code": "const fragment = document.createDocumentFragment();\nitems.forEach(item => {\n  const li = document.createElement(\"li\");\n  li.textContent = item.name;\n  fragment.appendChild(li);\n});\nlist.appendChild(fragment); // 1回だけ"
              },
              {
                "heading": "スクロールのような頻繁なイベントは間引く",
                "body": "scroll や resize は1秒に何十回も発生します。毎回重い処理をすると画面がカクつくので、「一定間隔に1回だけ実行する」スロットリングで回数を抑えます。"
              },
              {
                "heading": "アニメーションは requestAnimationFrame",
                "body": "setInterval で位置を少しずつ変えると、画面の描き換えのタイミングとずれてカクつきます。requestAnimationFrame は、ブラウザが次に画面を描く直前に呼ばれるので、なめらかに動きます。単純な動きなら CSS の transition や animation で済むことも多くあります。",
                "code": "function step() {\n  x += 2;\n  box.style.transform = `translateX(${x}px)`;\n  if (x < 300) requestAnimationFrame(step);\n}\nrequestAnimationFrame(step);"
              }
            ]
          }
        ]
      },
      "thinking": {
        "beginner": [
          {
            "id": "js-web-thinking-beginner",
            "title": "画面が動かない原因を突き止める",
            "content": "正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。",
            "prompts": [
              {
                "id": "js-web-thinking-beginner-1",
                "scenario": "名前を入力してボタンを押すと「ようこそ、○○さん」と表示されるページを作りました。ところが開いた瞬間に開発者ツールに「Cannot read properties of null (reading 'addEventListener')」と表示され、何も動きません。",
                "code": "<head>\n  <script src=\"app.js\"></script>\n</head>\n<body>\n  <input id=\"name\">\n  <button id=\"greet\">あいさつ</button>\n  <p id=\"message\"></p>\n</body>\n\n// app.js\ndocument.querySelector(\"#greet\").addEventListener(\"click\", () => {\n  const name = document.querySelector(\"#name\").value;\n  document.querySelector(\"#message\").textContent = `ようこそ、${name}さん`;\n});",
                "question": "エラーの原因と直し方を説明し、あわせてこの機能で他に気をつけるべき点を挙げてください。",
                "checkpoints": [
                  "スクリプトが <head> で読み込まれ、ボタンができる前に実行されていることを指摘している",
                  "querySelector が null を返し、null の addEventListener を呼んでエラーになる流れを説明している",
                  "defer を付ける、または <script> を </body> の直前に移す直し方を示している",
                  "空欄やスペースだけで押されたときの扱い（trim して確認する）など、追加の注意点を挙げている"
                ],
                "modelAnswer": "ブラウザは HTML を上から順に読みます。<head> の中の app.js はその場で実行されますが、その時点では <body> の中のボタンがまだ作られていません。そのため querySelector(\"#greet\") は null を返し、null に対して addEventListener を呼んだことでエラーになりました。直し方は、<script src=\"app.js\" defer></script> のように defer を付けるか、<script> を </body> の直前に移すことです。どちらも要素ができてからスクリプトが動きます。もう1つ、名前が空欄やスペースだけのまま押されると「ようこそ、 さん」と表示されてしまうので、value.trim() が空なら「名前を入力してください」と表示して処理を止めると親切です。",
                "tip": "「null の〜を読めない」というエラーは、多くの場合「探した要素が見つかっていない」サインです。要素名のつづりと、スクリプトが動くタイミングを確かめましょう。"
              },
              {
                "id": "js-web-thinking-beginner-2",
                "scenario": "ToDo リストを作っています。入力欄にタスクを書いて「追加」を押すと一覧に増え、各タスクの横の「完了」ボタンで打ち消し線が付く仕様です。",
                "question": "この機能を作るときの処理の流れを、「どの要素を選ぶか」「どのイベントで何をするか」「どう表示を変えるか」に分けて、手順として書いてください。",
                "checkpoints": [
                  "入力欄・追加ボタン・一覧（ul）など、最初に選ぶ要素を挙げている",
                  "追加ボタンの click で、入力値を確かめてから li を作って一覧に追加する流れを書いている",
                  "表示を変える方法として textContent や classList（打ち消し線用のクラス）を使っている",
                  "後から追加したタスクの「完了」ボタンにも処理が効くようにする方法（イベント委任など）に触れている"
                ],
                "modelAnswer": "1. 最初に、入力欄（#task）、追加ボタン（#add）、一覧（#list）を querySelector で取り出しておきます。2. 追加ボタンに click のイベントを登録します。押されたら入力値を trim して、空なら何もしません。空でなければ createElement で li を作り、textContent にタスク名を入れ、「完了」ボタンも作って li に入れてから一覧に appendChild します。追加後は入力欄を空に戻します。3. 完了の操作は、ボタン1つずつではなく一覧（ul）に click を1つだけ登録し、event.target が「完了」ボタンなら、その li に classList.toggle(\"done\") で打ち消し線用のクラスを付け外しします。こうすると、後から追加したタスクにも同じ処理が効きます。",
                "tip": "作る前に「選ぶ → 待つ（イベント） → 変える」の3段階に分けて書き出すと、DOM 操作の流れが整理できます。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "js-web-thinking-intermediate",
            "title": "通信を伴う画面の使い勝手を設計する",
            "content": "「動く」だけでなく「迷わず、安心して使える」画面を考える練習です。利用者の目線で書いてみましょう。",
            "prompts": [
              {
                "id": "js-web-thinking-intermediate-1",
                "scenario": "問い合わせフォームの送信処理です。テストした人から「送信ボタンを押しても反応がないので何度も押したら、同じ問い合わせが3件届いた」「電波が悪いときに送信したら、何も表示されず送れたのか分からない」という報告がありました。",
                "code": "form.addEventListener(\"submit\", async (e) => {\n  e.preventDefault();\n  await fetch(\"/api/contact\", { method: \"POST\", body: new FormData(form) });\n  message.textContent = \"送信しました\";\n});",
                "question": "2つの報告の原因を説明し、どう改善するかをコードの流れも含めて書いてください。",
                "checkpoints": [
                  "通信中にボタンが押せたままで、反応も見えないため二重送信が起きていることを指摘している",
                  "送信開始時にボタンを無効にし、読み込み中の表示を出す改善を示している",
                  "失敗時に catch でエラーを受け取り、利用者に伝える改善を示している",
                  "res.ok を確認する、finally でボタンと表示を必ず戻す、のどちらかに触れている"
                ],
                "modelAnswer": "1つ目の原因は、通信している間もボタンが押せる状態のままで、画面にも何の変化もないことです。利用者は反応がないと思って何度も押し、そのたびに送信されました。2つ目の原因は、失敗したときの処理がないことです。通信に失敗すると await の行でエラーになり、その後の行が実行されないため何も表示されません。改善としては、送信を始めたらすぐ button.disabled = true にして「送信中…」と表示します。fetch は try の中で行い、res.ok でなければエラーとして扱い、catch で「送信に失敗しました。時間をおいてもう一度お試しください」と表示します。最後に finally でボタンを押せる状態に戻し、送信中の表示を消します。",
                "tip": "通信する画面では「待っている間」「成功したとき」「失敗したとき」の3つの状態で、それぞれ何が見えるかを書き出してみましょう。"
              },
              {
                "id": "js-web-thinking-intermediate-2",
                "scenario": "1,000件ある商品一覧のそれぞれに「お気に入り」ボタンがあります。今は、すべてのボタンに1つずつ addEventListener でクリック処理を付けています。「もっと見る」で商品を追加すると、追加分のボタンが反応しないという不具合も出ています。",
                "question": "この作り方の問題点と、イベント委任を使った改善案を、仕組みが分かるように説明してください。",
                "checkpoints": [
                  "1,000個のリスナー登録はムダが多いこと、後から追加した要素には処理が付かないことを指摘している",
                  "親要素に1つだけリスナーを登録するイベント委任を提案している",
                  "event.target（closest など）で押されたボタンと対象の商品を判別する方法を説明している",
                  "クリックが子から親へ伝わる（バブリング）ので親で受け取れる、という仕組みに触れている"
                ],
                "modelAnswer": "今の作り方では、ボタンの数だけ処理を登録しているのでメモリと準備の時間にムダがあります。さらに登録は「その時点で画面にあるボタン」にしか行われないため、「もっと見る」で後から増えたボタンには処理が付かず、反応しません。改善案は、商品一覧の親要素に click の処理を1つだけ登録するイベント委任です。クリックは押された要素から親へと順に伝わっていく（バブリング）ので、親で受け取れます。処理の中で event.target.closest(\".fav-button\") を調べ、お気に入りボタンが押されたときだけ、その商品の ID（data-id など）を使ってお気に入りを切り替えます。こうすれば登録は1回で済み、後から追加した商品にも自動で効きます。",
                "tip": "「同じ種類の部品がたくさんある」「後から増える」の2つがそろったら、イベント委任を考えましょう。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "js-web-thinking-advanced",
            "title": "速さと安全さを両立させる",
            "content": "実際のサービスでは、データが多くても速く、外から来たデータでも安全に表示できる必要があります。判断の理由まで書いてみましょう。",
            "prompts": [
              {
                "id": "js-web-thinking-advanced-1",
                "scenario": "ニュースサイトで、画面を下までスクロールすると記事を20件ずつ読み込んで一覧に追加する「無限スクロール」を作っています。記事データは外部の API から届き、タイトルと本文の冒頭が入っています。",
                "question": "「スクロールの検知」「記事の追加」「記事の表示」の3つの場面で、それぞれ気をつけるべき点と具体的な方法を書いてください。",
                "checkpoints": [
                  "スクロールイベントは頻繁に起きるので、スロットリングなどで判定の回数を抑えている（または交差の監視など別の方法を挙げている）",
                  "読み込み中に重ねて読み込まないよう、読み込み中フラグなどで制御している",
                  "20件を DocumentFragment などでまとめて1回で追加している",
                  "外部から来た文字を textContent で表示し、XSS を防いでいる"
                ],
                "modelAnswer": "スクロールの検知：scroll イベントは1秒に何十回も起きるので、毎回「一番下まで来たか」を計算すると重くなります。スロットリングで0.2秒に1回程度に間引くか、一覧の最後に置いた目印の要素が画面に入ったことを IntersectionObserver で知る方法が適しています。また、読み込み中は isLoading のような目印を立て、通信が終わるまで次の読み込みを始めないようにします。記事の追加：20件を1件ずつ追加するとそのたびに配置の計算が走るので、DocumentFragment に組み立ててから1回で一覧に追加します。記事の表示：タイトルや本文は外部から来た文字なので、innerHTML ではなく createElement と textContent で入れ、タグが混ざっていても実行されないようにします。",
                "tip": "「頻度」「量」「出どころ」の3つの視点で処理を見直すと、性能と安全性の問題を見つけやすくなります。"
              },
              {
                "id": "js-web-thinking-advanced-2",
                "scenario": "ページ上部へ戻るボタンを作りました。押すと画面が上までなめらかに戻るよう、次のように書きましたが、動きがカクカクして、端末によって速さも変わります。",
                "code": "let y = window.scrollY;\nconst timer = setInterval(() => {\n  y -= 20;\n  window.scrollTo(0, y);\n  if (y <= 0) clearInterval(timer);\n}, 10);",
                "question": "カクつく理由と改善方法を、複数の選択肢を比べながら書いてください。",
                "checkpoints": [
                  "setInterval の実行タイミングが画面の描き換えとずれていることを理由に挙げている",
                  "requestAnimationFrame を使う改善を示している",
                  "scrollTo({ behavior: \"smooth\" }) や CSS の scroll-behavior など、より簡単な方法も比べている",
                  "経過時間をもとに位置を決めるなど、端末による速さの違いを減らす工夫に触れている"
                ],
                "modelAnswer": "setInterval(…, 10) は画面の描き換え（多くの端末で約16ミリ秒ごと）と関係なく動くため、1回の描画の間に2回動いたり、まったく動かなかったりして、ガタついて見えます。また、処理が詰まると間隔が延び、端末の性能によって速さが変わります。改善方法は大きく3つあります。1つ目は、ブラウザに任せる window.scrollTo({ top: 0, behavior: \"smooth\" }) で、1行で済み最も手軽です。2つ目は、CSS の html { scroll-behavior: smooth; } で、リンクによる移動もまとめてなめらかにできます。3つ目は、動き方を細かく決めたい場合に requestAnimationFrame を使い、開始からの経過時間をもとに位置を計算する方法です。経過時間で決めれば、端末の速さに関係なく同じ時間で上に戻ります。まずは1つ目で十分かを確かめ、足りなければ3つ目を選びます。",
                "tip": "アニメーションは「自分で動かす」前に、ブラウザや CSS の標準の機能で足りないかを確かめましょう。"
              }
            ]
          }
        ]
      }
    },
    "shortLabel": "DOM"
  },
  {
    "id": "typescript",
    "name": "TypeScript",
    "description": "JavaScript に型を加えて、間違いに早く気づける書き方を学びます",
    "icon": "fa-solid fa-code",
    "lessons": {
      "projects": {
        "beginner": [
          {
            "id": "typescript-project-beginner-1",
            "title": "TypeScript 初級プロジェクト",
            "content": "ToDo アプリのデータに型を付けながら、型注釈と型エラーの読み方を確認します。",
            "questions": [
              {
                "id": "q-beg-TypeScript初級プロジェクト-1",
                "text": "ToDo の「id、タイトル、完了したかどうか」を表す型として、適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "interface Todo { id: string; title: number; done: string }",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "interface Todo { id: number; title: string; done: boolean }",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "interface Todo { id: any; title: any; done: any }",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "interface Todo { id; title; done }",
                    "correct": false
                  }
                ],
                "explanation": "id は数値、title は文字列、完了したかどうかは true / false の boolean が自然です。any にすると、型のチェックが効かなくなります。プロパティの意味に合う型を付けるのが、型を使う第一歩です。",
                "hint": "完了したかどうかは、「はい」か「いいえ」の2択です。",
                "example": "ToDo アプリで、id は数値、タイトルは文字列、完了したかどうかは true / false。それぞれに合った型を付けると、画面側でも、補完が正しく効きます。"
              },
              {
                "id": "q-beg-TypeScript初級プロジェクト-2",
                "text": "ToDo を複数持つ配列を、関数の引数として受け取るときの書き方は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "function show(todos: Todo)",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "function show(todos: Todo[])",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "function show(todos: [Todo])",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "function show(todos: array)",
                    "correct": false
                  }
                ],
                "explanation": "Todo[] は、Todo の配列を表します。Todo だけでは、1件を意味します。[Todo] は、「要素が1つだけのタプル」という別の意味になるので、注意が必要です。",
                "hint": "1つの Todo ではなく、Todo が並んだものです。",
                "example": "一覧を表示する関数に、todos: Todo[] と書いておけば、Todo ではないものの配列を渡したときに、すぐエラーで分かります。"
              },
              {
                "id": "q-beg-TypeScript初級プロジェクト-3",
                "text": "const todo: Todo = { id: 1, title: \"買い物\", done: false }; のあとに todo.done = \"yes\"; と書いたとき、型エラーになるのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "const todo の宣言（id が 1 のため）",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "どちらの行も、エラーにならない",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "どちらの行も、エラーになる",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "todo.done = \"yes\" の代入（done は boolean のため）",
                    "correct": true
                  }
                ],
                "explanation": "done は boolean 型なので、文字列 \"yes\" は代入できません。最初の行は、定義どおりの値なので問題ありません。エラーメッセージには、「string 型は boolean 型に割り当てられない」と出ます。型エラーは、メッセージをよく読むのが解決の近道です。",
                "hint": "done は、boolean 型で宣言されています。",
                "example": "「完了」の列に、うっかり \"yes\" と文字列を代入すると、エラーになります。メッセージには、「string は boolean に割り当てられない」と書かれています。"
              },
              {
                "id": "q-beg-TypeScript初級プロジェクト-4",
                "text": "関数 toggle(todo: Todo): Todo の、戻り値の型を書いておく利点は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "関数の実行が、速くなる",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "引数を、省略できるようになる",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "うっかり別の型を返す間違いを、書いた時点で見つけられる",
                    "correct": true
                  },
                  {
                    "id": "d",
                    "text": "関数の名前を、短くできる",
                    "correct": false
                  }
                ],
                "explanation": "戻り値の型を書いておくと、関数の中で、約束と違う値（例えば、完了を表す文字列）を返したときに、エラーで気づけます。関数を使う側も、中身を読まなくても、何が返るかが分かります。",
                "hint": "戻り値の型は、関数が約束する「出力」の形です。",
                "example": "ToDo の完了を切り替える関数に、戻り値の型を書いておけば、関数の中で、別の形のオブジェクトを返してしまったときに、その場で気づけます。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "typescript-project-intermediate-1",
            "title": "TypeScript 中級プロジェクト",
            "content": "API から取得したデータの状態を、型で表しながら、ユニオン型と絞り込みを確認します。",
            "questions": [
              {
                "id": "q-int-TypeScript中級プロジェクト-1",
                "text": "読み込み中、成功、失敗の3つの状態を、型で安全に表したいとき、適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "loading: boolean, data?: User, error?: string のように、全部を省略可能にする",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "すべての状態を、any で扱う",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "string の1つの型で、状態も中身も表す",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "{ status: \"loading\" } | { status: \"success\"; data: User } | { status: \"error\"; message: string }",
                    "correct": true
                  }
                ],
                "explanation": "状態ごとに必要なプロパティを分けたユニオン型にすると、status を調べた分岐の中で、その状態に合うプロパティだけが使えます。省略可能なプロパティを並べるだけだと、矛盾した組み合わせを許してしまいます。",
                "hint": "「失敗なのに data がある」といった矛盾した状態を、作れなくしたいところです。",
                "example": "商品一覧の画面で、読み込み中、成功、失敗の3つの状態を、status で表しておけば、状態ごとの表示を、漏れなく書けます。"
              },
              {
                "id": "q-int-TypeScript中級プロジェクト-2",
                "text": "ユーザーの一部の項目だけを更新する関数の引数に、適切な型は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "User",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "Partial<User>",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "Readonly<User>",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "unknown",
                    "correct": false
                  }
                ],
                "explanation": "Partial<User> は、User のすべてのプロパティを省略可能にします。変更したい項目だけを渡せます。User をそのまま使うと、全項目の指定が必須になり、更新のたびに、全部を渡す必要があります。",
                "hint": "名前だけ、メールアドレスだけ、といった一部の指定を許したい場面です。",
                "example": "プロフィールの更新で、変更した項目だけをサーバーに送る関数は、引数を Partial<User> にします。全項目の指定を求めると、使いにくくなります。"
              },
              {
                "id": "q-int-TypeScript中級プロジェクト-3",
                "text": "ユーザーを検索して、見つからなければ undefined を返す関数 find(id): User | undefined の結果を使うときに、必要なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "undefined は、起きないものとして、そのまま使う",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "as User で、型を上書きして使う",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "undefined の場合の処理を書き、絞り込んでから使う",
                    "correct": true
                  },
                  {
                    "id": "d",
                    "text": "try ~ catch で、すべて囲む",
                    "correct": false
                  }
                ],
                "explanation": "User | undefined の値は、undefined の場合を扱わずに、user.name のようにアクセスすると、エラーになります。if (!user) { return; } のように分岐して、絞り込んでから使います。as で上書きすると、実行時に undefined のとき、不具合になります。",
                "hint": "型に undefined が含まれているのは、「見つからないことがある」というコンパイラからの注意です。",
                "example": "ID で会員を検索する関数が、見つからなければ undefined を返すとき、呼び出す側では、「見つからなかった場合」の処理を、必ず書きます。"
              },
              {
                "id": "q-int-TypeScript中級プロジェクト-4",
                "text": "async function fetchUser(): Promise<User> の Promise<User> が表すのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "非同期の処理が終わると、User が得られる",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "必ず User の配列になる",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "User 型が、使えなくなる",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "エラーが、必ず発生する",
                    "correct": false
                  }
                ],
                "explanation": "Promise<User> は、非同期の処理が完了したときに、User 型の値が得られることを表します。await すると、User 型として受け取れます。ジェネリクスで、「何が得られるか」を型で表している例です。",
                "hint": "Promise<T> は、ジェネリクスの一例です。T の部分は、何を表すでしょうか。",
                "example": "データを取得する関数が、Promise<User> を返すと宣言しておけば、await したあとの値が User 型として扱え、補完も効きます。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "typescript-project-advanced-1",
            "title": "TypeScript 上級プロジェクト",
            "content": "想定外のデータや、状態の追加漏れを、型で防ぐ設計を確認します。",
            "questions": [
              {
                "id": "q-adv-TypeScript上級プロジェクト-1",
                "text": "JSON.parse の結果を、安全に扱うために適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "const data = JSON.parse(text) as User; として、そのまま使う",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "unknown として受け取り、型ガード関数や検証で確かめてから使う",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "any のまま、使い続ける",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "何もせず、型注釈もしない",
                    "correct": false
                  }
                ],
                "explanation": "JSON.parse は、実行時の文字列から作った値なので、型は保証されません。unknown として受け取り、中身を検証してから使うのが安全です。as で済ませると、データが違ったとき、実行時の不具合になります。",
                "hint": "実行時に、本当に期待どおりの形かどうかを確かめる必要があります。",
                "example": "外部から届いた JSON を、unknown として受け取り、「name が文字列か」「age が数値か」を確かめてから、User として扱います。"
              },
              {
                "id": "q-adv-TypeScript上級プロジェクト-2",
                "text": "function isUser(x: unknown): x is User のように、戻り値を x is User と書く関数の働きは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "x を、自動で User に変換する",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "x の型を、any に変える",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "true が返った分岐の中で、x を User 型として扱えるようにする",
                    "correct": true
                  },
                  {
                    "id": "d",
                    "text": "x が、必ず User であることを保証する",
                    "correct": false
                  }
                ],
                "explanation": "x is User は、型述語といい、関数が true を返したら、その後ろの分岐で、x を User 型として扱ってよいことを、コンパイラに伝えます。ただし、関数の中身の検証が間違っていると、型は嘘になるので、中身の検証は、しっかり書く必要があります。",
                "hint": "型ガード関数と呼ばれます。結果が true なら、型を絞り込めます。",
                "example": "isUser(x: unknown): x is User のような関数を用意しておけば、if (isUser(data)) の中だけ、data を User として安全に使えます。"
              },
              {
                "id": "q-adv-TypeScript上級プロジェクト-3",
                "text": "状態の種類が増えたときに、switch の処理の追加漏れを、コンパイル時に検出する方法は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "default で、never 型の変数に代入しておき、漏れがあれば型エラーにする",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "すべての分岐の末尾に、break を書く",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "コメントで、「追加漏れに注意」と書いておく",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "switch を、使わない",
                    "correct": false
                  }
                ],
                "explanation": "判別可能なユニオン型のすべての種類を処理したあと、default では、型が never になります。const _check: never = state; と書いておけば、新しい状態を追加して、処理を書き忘れたとき、never に代入できず、コンパイルエラーで気づけます。",
                "hint": "すべての分岐で絞り込んだあとは、残りの型が「存在しない（never）」になるはずです。",
                "example": "決済の状態に、新しく \"refunded\" を追加したときに、画面側の switch に、処理を書き忘れていると、コンパイルエラーで教えてくれます。"
              },
              {
                "id": "q-adv-TypeScript上級プロジェクト-4",
                "text": "型の設計で目指すべき方向として、適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "できるだけ広い型（any や string）にして、エラーを減らす",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "不正な状態を、そもそも表現できないような型にする",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "すべてのプロパティを、オプショナルにする",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "型を付けず、テストだけで品質を守る",
                    "correct": false
                  }
                ],
                "explanation": "「失敗なのに、data が入っている」のような、ありえない状態を、型の上でも作れなくすると、バグの余地が減ります。広い型や、省略可能なプロパティを多用すると、不正な状態を許してしまい、型の効果が薄れます。",
                "hint": "「ありえない組み合わせ」を、型の上で作れないようにする、という考え方です。",
                "example": "「失敗なのに、データが入っている」ような、ありえない組み合わせを、型の上でも作れないようにしておけば、考える手間と、バグの余地が減ります。"
              }
            ]
          }
        ]
      },
      "beginner": [
        {
          "id": "typescript-beginner-1",
          "title": "型の基本",
          "content": "TypeScript が JavaScript に何を加えるのかと、型の書き方の基本を学びます。",
          "questions": [
            {
              "id": "q-beg-型の基本-1",
              "text": "TypeScript と JavaScript の関係として、正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "TypeScript は、JavaScript とは全く別の言語で、互換性はない",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "TypeScript は、ブラウザがそのまま実行できる",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "JavaScript に型の仕組みを加えた言語で、最終的には JavaScript に変換して実行する",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "TypeScript は、サーバー側でしか使えない",
                  "correct": false
                }
              ],
              "explanation": "TypeScript は、JavaScript に型を加えた言語です。書いたコードは、コンパイル（変換）されて JavaScript になり、それが実行されます。JavaScript の書き方は、そのまま TypeScript でも使えます。",
              "hint": "ブラウザが実行できるのは JavaScript です。TypeScript のコードは、どうなるでしょうか。",
              "example": "React や Node.js のプロジェクトで、.ts や .tsx のファイルを書いて、ビルドすると JavaScript に変換されます。ブラウザが実行するのは、変換後の JavaScript です。"
            },
            {
              "id": "q-beg-型の基本-2",
              "text": "let age: number = 20; のあとで、age = \"二十歳\"; と書いたときに起きるのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "何も起きず、そのまま実行される",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "コンパイル時（エディタ上）に、型のエラーになる",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "自動で、数値に変換される",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "実行したときにだけ、エラーになる",
                  "correct": false
                }
              ],
              "explanation": "型注釈（: number）が付いた変数に、文字列を代入しようとすると、コードを実行する前に、エディタやコンパイラがエラーとして教えてくれます。JavaScript では、実行して初めて気づく間違いに、書いている最中に気づけるのが、TypeScript の利点です。",
              "hint": ": number は、この変数に入れてよい値の種類を表しています。",
              "example": "価格を number で宣言した変数に、フォームから受け取った文字列をそのまま代入しようとすると、実行前に赤い波線が出て、間違いに気づけます。"
            },
            {
              "id": "q-beg-型の基本-3",
              "text": "let name = \"太郎\"; と、型を書かずに宣言したとき、name の型は______になります。",
              "options": [
                {
                  "id": "a",
                  "text": "any",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "object",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "unknown",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "string",
                  "correct": true
                }
              ],
              "explanation": "初期値から、型を自動で決める仕組みを、型推論といいます。\"太郎\" は文字列なので、name は string 型になります。型推論が効く場面では、型注釈を省略して、コードを簡潔に書けます。",
              "hint": "初期値から、型を読み取る仕組みがあります。",
              "example": "const count = 0; と書くだけで、count は number 型として扱われます。毎回、型を書かなくても、補完とチェックが効くのが、型推論の便利なところです。"
            },
            {
              "id": "q-beg-型の基本-4",
              "text": "any 型を多用しないほうがよい理由は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "型のチェックが効かなくなり、TypeScript を使う意味が薄れるため",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "any を使うと、コードが実行できなくなるため",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "any は、数値にしか使えないため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "ブラウザによっては、any が使えないため",
                  "correct": false
                }
              ],
              "explanation": "any を付けた値は、型のチェックがすべて無効になり、間違った使い方もエラーになりません。必要な場面（型が分からない移行中のコードなど）に限り、できるだけ具体的な型を付けます。",
              "hint": "any は「何でも入れてよい」という型です。",
              "example": "ライブラリの型が分からず、とりあえず any を付けると、タイプミスのプロパティ名も、エラーになりません。あとで困るので、できるだけ具体的な型を探します。"
            }
          ]
        },
        {
          "id": "typescript-beginner-2",
          "title": "配列・オブジェクト・関数の型",
          "content": "まとまったデータと、関数に型を付ける方法を学びます。",
          "questions": [
            {
              "id": "q-beg-配列・オブジェクト・関数の型-1",
              "text": "文字列だけが入る配列の型を表す書き方は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "string",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "array<string>",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "string[]",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "[string]",
                  "correct": false
                }
              ],
              "explanation": "string[]（または Array<string>）が、文字列の配列を表します。string だけでは、1つの文字列を意味します。数値の配列なら number[] です。配列に別の型の値を入れようとすると、エラーになります。",
              "hint": "要素の型の後ろに、角括弧を付けます。",
              "example": "商品名の一覧を string[]、金額の一覧を number[] と宣言しておけば、金額の配列に、うっかり文字列を入れる間違いを防げます。"
            },
            {
              "id": "q-beg-配列・オブジェクト・関数の型-2",
              "text": "ユーザーのように、決まった形のオブジェクトの型を定義するときに使うのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "interface User { name: string; age: number }",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "class User = { name: string }",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "object User(name, age)",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "var User: { name, age }",
                  "correct": false
                }
              ],
              "explanation": "interface（または type）で、オブジェクトがどんなプロパティを持つかを定義します。定義したあと、const user: User = { name: \"太郎\", age: 20 } のように使うと、足りないプロパティや、型が違う値をエラーにできます。",
              "hint": "オブジェクトの「形」に名前を付ける仕組みです。",
              "example": "会員の情報を interface User { name: string; age: number } と定義しておけば、name を name2 とタイプミスしたり、age を入れ忘れたりしたときに、エラーで教えてくれます。"
            },
            {
              "id": "q-beg-配列・オブジェクト・関数の型-3",
              "text": "function add(a: number, b: number): number のうち、最後の : number が表すのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "引数の個数",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "関数の名前",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "関数の実行時間",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "関数の戻り値の型",
                  "correct": true
                }
              ],
              "explanation": "括弧の後ろの型は、戻り値の型です。この関数は、number を返すと宣言しています。戻り値の型を書いておけば、うっかり文字列を返しても、エラーで気づけます。",
              "hint": "引数の型は、引数名の後ろに付いています。括弧の外に付いているものは？",
              "example": "税込み価格を計算する関数に、: number と戻り値の型を書いておけば、うっかり、文字列（\"1,100円\"）を返したときに、すぐ気づけます。"
            },
            {
              "id": "q-beg-配列・オブジェクト・関数の型-4",
              "text": "interface Profile { name: string; nickname?: string } の nickname について、正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "必ず指定しなければならない",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "省略してもよく、省略した場合は undefined になる",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "数値を入れなければならない",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "空文字を入れなければならない",
                  "correct": false
                }
              ],
              "explanation": "プロパティ名の後ろの ? は、オプション（省略可能）を表します。省略すると undefined になるので、nickname の型は、実質 string | undefined として扱われます。使うときは、undefined の場合も考える必要があります。",
              "hint": "名前の後ろの ? は、あってもなくてもよいことを表します。",
              "example": "プロフィール画面で、ニックネームは任意入力にしたいとき、nickname?: string と書きます。表示するときは、未入力（undefined）の場合の表示も、考えておきます。"
            }
          ]
        }
      ],
      "intermediate": [
        {
          "id": "typescript-intermediate-1",
          "title": "ユニオン型と絞り込み",
          "content": "「AかBのどちらか」を表す型と、使う前に型を絞り込む方法を学びます。",
          "questions": [
            {
              "id": "q-int-ユニオン型と絞り込み-1",
              "text": "let id: string | number; と宣言したとき、id に入れられる値は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "文字列と数値の両方を、同時に",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "文字列か数値の、どちらか1つ",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "文字列だけ",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "何でも入れられる",
                  "correct": false
                }
              ],
              "explanation": "A | B はユニオン型で、「A か B のどちらか」を表します。id は、string か number のどちらかの値を持てます。ただし、メソッドを呼ぶには、どちらの型かを絞り込む必要があります。",
              "hint": "| は「または」を表します。",
              "example": "ID が、「数値のこともあれば、文字列のこともある」システムで、string | number と書いて、両方を受け付けます。"
            },
            {
              "id": "q-int-ユニオン型と絞り込み-2",
              "text": "string | number 型の値 x に対して、文字列のときだけ x.toUpperCase() を呼びたいときの書き方は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "そのまま x.toUpperCase() と書く",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "x as string と書いて、毎回、型を上書きする",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "if (typeof x === \"string\") { x.toUpperCase() }",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "x を any に変えてから、呼び出す",
                  "correct": false
                }
              ],
              "explanation": "typeof などで分岐すると、その分岐の中では、型が自動で絞り込まれます（型の絞り込み）。そのまま呼ぶと、number の可能性があるため、エラーになります。as や any で黙らせるより、絞り込むほうが安全です。",
              "hint": "実行時に、値が何の型かを調べて、分岐します。",
              "example": "数値か文字列かで、処理を分けたいとき、typeof で調べると、その中では、型が自動で絞り込まれ、文字列用のメソッドが安全に使えます。"
            },
            {
              "id": "q-int-ユニオン型と絞り込み-3",
              "text": "type Status = \"loading\" | \"success\" | \"error\"; のように、決まった文字列だけを許す型を______といいます。",
              "options": [
                {
                  "id": "a",
                  "text": "列挙型の継承",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "リテラル型（のユニオン）",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "関数型",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "タプル型",
                  "correct": false
                }
              ],
              "explanation": "特定の値そのものを型にしたものをリテラル型といい、それを | でつなぐと、「この中のどれか」だけを許す型になります。タイプミス（\"sucess\" など）を、書いた時点でエラーにできます。",
              "hint": "\"loading\" のような、特定の値そのものを型として使います。",
              "example": "通信の状態を \"loading\" | \"success\" | \"error\" と書くと、\"sucess\" のようなタイプミスは、書いた時点でエラーになります。"
            },
            {
              "id": "q-int-ユニオン型と絞り込み-4",
              "text": "user?.address?.city という書き方の働きは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "user が、必ず存在すると断言する",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "user を、address と city に分解する",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "city を、自動で文字列に変換する",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "user や address が null か undefined のとき、エラーにせず undefined を返す",
                  "correct": true
                }
              ],
              "explanation": "?. は、手前の値が null または undefined のとき、その先を評価せず、undefined を返します。エラーで止まらず、値がない場合も安全に扱えます。ただし、結果が undefined の可能性は、型にも残ります。",
              "hint": "?. は、オプショナルチェーンと呼ばれます。",
              "example": "ユーザーの住所が未登録でも、user?.address?.city と書けば、エラーで止まらず、undefined が返ります。表示側で、「未登録」と出せます。"
            }
          ]
        },
        {
          "id": "typescript-intermediate-2",
          "title": "ジェネリクスと便利な型",
          "content": "型を引数のように使うジェネリクスと、既存の型から新しい型を作る方法を学びます。",
          "questions": [
            {
              "id": "q-int-ジェネリクスと便利な型-1",
              "text": "ジェネリクス（Array<T> の T）の役割は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "配列の、長さを決める",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "型を引数のように受け取り、さまざまな型に使い回せるようにする",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "配列を、昇順に並べ替える",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "null を、禁止する",
                  "correct": false
                }
              ],
              "explanation": "ジェネリクスは、型を引数のように受け取る仕組みです。Array<T> の T に string を渡せば文字列の配列、number を渡せば数値の配列になります。同じ処理を、型ごとに書き直さずに済みます。",
              "hint": "Array<string> と Array<number> は、同じ Array を、別の型で使っています。",
              "example": "配列の型 Array<T> のように、同じ仕組みを、文字列にも数値にも使い回せます。自分でも、「どんな型でも受け取って、そのまま返す関数」などを作れます。"
            },
            {
              "id": "q-int-ジェネリクスと便利な型-2",
              "text": "Partial<User> が表す型は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "User の、一部のプロパティだけを削除した型",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "User と全く同じ型",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "User のすべてのプロパティを、省略可能にした型",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "User の、すべてのプロパティを読み取り専用にした型",
                  "correct": false
                }
              ],
              "explanation": "Partial<T> は、T のすべてのプロパティに ? を付けたのと同じ型です。更新処理で、変更したい項目だけを渡す場合に使います。読み取り専用にするのは Readonly<T> です。",
              "hint": "「一部だけ指定すればよい」ことを表すのに便利です。",
              "example": "プロフィールの更新画面で、名前だけ、メールアドレスだけ、といった一部の項目の変更を受け付けたいとき、Partial<User> を引数の型にします。"
            },
            {
              "id": "q-int-ジェネリクスと便利な型-3",
              "text": "unknown と any の違いとして、正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "まったく同じで、書き方の好みである",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "unknown は、any よりも、型のチェックが緩い",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "unknown は、型を絞り込んでからでないと、値を使えない",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "unknown は、数値専用である",
                  "correct": false
                }
              ],
              "explanation": "unknown は「何が入っているか分からない」という型で、使う前に、typeof などで型を絞り込む必要があります。any は、チェックが無効になるのに対し、unknown は、安全を保ったまま、分からない値を受け取れます。",
              "hint": "型が分からない値を、安全に扱いたい場面を考えてみます。",
              "example": "外部から届く、型が分からない値を、unknown として受け取れば、使う前に、typeof などで確かめる必要があり、安全に扱えます。"
            },
            {
              "id": "q-int-ジェネリクスと便利な型-4",
              "text": "interface と type の違いについて、実務で押さえておくべきことは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "interface は、オブジェクトにしか使えず、type は使えない",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "どちらもオブジェクトの形を表せるが、interface は同名で宣言を追加でき、type はユニオンなども表せる",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "type は、古い書き方で、現在は使えない",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "interface のほうが、必ず高速に動く",
                  "correct": false
                }
              ],
              "explanation": "オブジェクトの形は、どちらでも表せます。interface は、同じ名前で宣言を重ねて拡張でき、type は、ユニオンやリテラル型など、より幅広い型に名前を付けられます。プロジェクトでは、どちらを使うか、ルールを決めておくと混乱しません。",
              "hint": "「A | B」のような型に名前を付けられるのは、どちらでしょうか。",
              "example": "チームで、「オブジェクトの形は interface、ユニオン型は type」のようにルールを決めておけば、書き方がそろって、コードが読みやすくなります。"
            }
          ]
        }
      ],
      "advanced": [
        {
          "id": "typescript-advanced-1",
          "title": "型を使った設計",
          "content": "型の力で、間違った状態をそもそも作れないようにする設計と、型の限界を学びます。",
          "questions": [
            {
              "id": "q-adv-型を使った設計-1",
              "text": "判別可能なユニオン型（kind のような共通のプロパティで分ける型）の利点は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "kind を調べるだけで、型が絞り込まれ、状態ごとに使えるプロパティを安全に扱える",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "どんな型でも、any として扱える",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "実行速度が、大きく向上する",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "プロパティを、1つも書かなくてよくなる",
                  "correct": false
                }
              ],
              "explanation": "共通の kind プロパティで状態を判別できると、switch や if で kind を調べた分岐の中で、その状態に合うプロパティだけが使えるように、型が絞り込まれます。「エラーなのに value を読む」といった間違いを、書いた時点で防げます。",
              "hint": "type Result = { kind: \"ok\"; value: number } | { kind: \"error\"; message: string } のような型です。",
              "example": "決済の結果を、{ kind: \"ok\", value } と { kind: \"error\", message } で表しておけば、kind を調べた分岐の中で、エラー時に value を読むような、間違いを防げます。"
            },
            {
              "id": "q-adv-型を使った設計-2",
              "text": "as による型アサーション（const x = data as User）の注意点は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "実行時に、自動で User 型に変換される",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "必ず、正しい型であることが保証される",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "どんな型にも使え、まったく危険はない",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "コンパイラを黙らせるだけで、実行時に実際の値が合っている保証はない",
                  "correct": true
                }
              ],
              "explanation": "as は、コンパイラに「この型として扱ってほしい」と伝えるだけで、値を検査したり、変換したりはしません。実際の値が違えば、実行時に不具合になります。使うのは、本当に型が確かな場面に限り、できるだけ型の絞り込みを使います。",
              "hint": "as は、「この値は、この型だと私が保証します」という宣言です。",
              "example": "API の結果を、とりあえず as User で型を付けて、そのまま使うと、データが違ったときに、実行時にだけ不具合が出ます。as は、型が確かなときに限って使います。"
            },
            {
              "id": "q-adv-型を使った設計-3",
              "text": "tsconfig.json で \"strict\": true を指定する意味は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "コードの、実行速度が上がる",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "null の扱いなど、厳密な型チェックをまとめて有効にする",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "コメントを、禁止する",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "型注釈を、すべて必須にする",
                  "correct": false
                }
              ],
              "explanation": "strict は、strictNullChecks（null や undefined を厳密に扱う）など、厳密な型チェックを、まとめて有効にする設定です。新しいプロジェクトでは、有効にしておくのが基本で、型の安全性が大きく高まります。",
              "hint": "より多くの間違いを、コンパイル時に見つけるための設定です。",
              "example": "新しいプロジェクトを作るときは、tsconfig.json に \"strict\": true を書いておきます。null や undefined の扱い漏れを、最初から検出できます。"
            },
            {
              "id": "q-adv-型を使った設計-4",
              "text": "外部の API から受け取った JSON に、型を付けて安心できない理由は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "JSON には、型を付けられないため",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "TypeScript は、API の通信に対応していないため",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "型は実行時には存在せず、実際に届いたデータが、型どおりである保証はないため",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "JSON は、必ず文字列になるため",
                  "correct": false
                }
              ],
              "explanation": "型は、コンパイル時に消え、実行時には残りません。API のレスポンスは、実行時に届くデータなので、約束と違う形で届く可能性があります。必要に応じて、実行時に中身を検証する（型ガード関数や、検証用のライブラリを使う）必要があります。",
              "hint": "TypeScript の型は、コードを実行する前の、チェックのための仕組みです。",
              "example": "外部の API が、ドキュメントと違う形でデータを返すことがあります。型だけでは守れないため、受け取った値を、実行時にも検証します。"
            }
          ]
        }
      ],
      "basics": {
        "beginner": [
          {
            "id": "typescript-basics-beginner",
            "title": "型を付けて、間違いに早く気づく",
            "content": "TypeScript は、JavaScript に「型」を加えた言語です。値の種類をあらかじめ書いておくことで、実行する前に、多くの間違いに気づけます。基本の型の書き方を押さえましょう。",
            "sections": [
              {
                "heading": "TypeScript とは",
                "body": "JavaScript に型の仕組みを加えた言語です。ブラウザは TypeScript を直接実行できないため、書いたコードは JavaScript に変換（コンパイル）されます。JavaScript の書き方は、そのまま使えます。",
                "example": "React や Node.js の開発では、.ts や .tsx のファイルで書き、ビルドで JavaScript に変換して使います。"
              },
              {
                "heading": "型注釈と型推論",
                "body": "変数の後ろに : 型 を書くのが型注釈です。数値の変数に文字列を入れる、といった間違いは、実行前にエラーになります。初期値がある場合は、型が自動で決まる（型推論）ので、型注釈を省略しても構いません。",
                "code": "let age: number = 20;\nage = \"二十歳\"; // エラー\n\nlet name = \"太郎\"; // string と推論される"
              },
              {
                "heading": "any は、できるだけ使わない",
                "body": "any は、何でも入れてよい型で、型のチェックがすべて無効になります。便利に見えますが、間違いに気づけなくなるので、TypeScript を使う意味が薄れます。型が分からない値には、後述の unknown を検討します。"
              },
              {
                "heading": "配列とオブジェクトの型",
                "body": "配列は、string[] や number[] のように、要素の型の後ろに [] を付けます。オブジェクトの形は、interface（または type）で定義します。プロパティ名の後ろの ? は、省略してもよいことを表します。",
                "code": "interface User {\n  name: string;\n  age: number;\n  nickname?: string; // 省略可能\n}\n\nconst users: User[] = [{ name: \"太郎\", age: 20 }];"
              },
              {
                "heading": "関数の型",
                "body": "引数の型と、戻り値の型を書きます。戻り値の型を書いておくと、関数の中で、約束と違う値を返したときに、エラーで気づけます。",
                "code": "function add(a: number, b: number): number {\n  return a + b;\n}"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "typescript-basics-intermediate",
            "title": "ユニオン型・絞り込み・ジェネリクス",
            "content": "現実のデータは、「Aかもしれないし、Bかもしれない」ものがたくさんあります。そうした値を、安全に扱うための型の使い方を学びます。",
            "sections": [
              {
                "heading": "ユニオン型",
                "body": "A | B と書くと、「A か B のどちらか」を表します。決まった文字列だけを許す、リテラル型のユニオンも、よく使います。タイプミスを、書いた時点でエラーにできます。",
                "code": "let id: string | number;\ntype Status = \"loading\" | \"success\" | \"error\";"
              },
              {
                "heading": "型の絞り込み",
                "body": "ユニオン型の値は、どちらの型かを調べてから使います。typeof などで分岐すると、その分岐の中では、型が自動で絞り込まれます。as で型を上書きするより、絞り込みのほうが安全です。",
                "code": "function show(x: string | number) {\n  if (typeof x === \"string\") {\n    console.log(x.toUpperCase()); // string として扱える\n  }\n}"
              },
              {
                "heading": "undefined と、オプショナルチェーン",
                "body": "省略できる値や、見つからないかもしれない値は、undefined を含む型になります。使う前に、undefined でないことを確かめます。?. を使うと、値がないとき、エラーにせず undefined を返します。",
                "code": "const city = user?.address?.city; // user や address がなければ undefined"
              },
              {
                "heading": "ジェネリクス",
                "body": "ジェネリクスは、型を引数のように受け取る仕組みです。Array<string> は文字列の配列、Promise<User> は、終わると User が得られる非同期の処理を表します。同じ仕組みを、さまざまな型に使い回せます。",
                "code": "const names: Array<string> = [\"太郎\", \"花子\"];\n\nasync function fetchUser(): Promise<User> { /* ... */ }"
              },
              {
                "heading": "Partial と unknown",
                "body": "Partial<User> は、User のすべてのプロパティを省略可能にした型で、一部の項目だけを渡す更新処理に便利です。unknown は、何が入っているか分からない値の型で、any と違い、型を絞り込んでからでないと使えません。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "typescript-basics-advanced",
            "title": "型で設計し、型の限界を知る",
            "content": "型は、単にエラーを防ぐだけでなく、「ありえない状態を作れなくする」設計の道具です。同時に、型にも限界があります。両方を理解しましょう。",
            "sections": [
              {
                "heading": "判別可能なユニオン型",
                "body": "kind や status のような共通のプロパティで状態を分けると、それを調べた分岐の中で、その状態に合うプロパティだけが使えるように、型が絞り込まれます。「失敗なのに、データがある」といった矛盾を、型の上で作れなくできます。",
                "code": "type Result =\n  | { kind: \"ok\"; value: number }\n  | { kind: \"error\"; message: string };\n\nfunction show(r: Result) {\n  if (r.kind === \"ok\") console.log(r.value);\n  else console.log(r.message);\n}"
              },
              {
                "heading": "網羅性のチェック（never）",
                "body": "判別可能なユニオン型のすべての種類を処理したあと、残る型は never（存在しない型）になります。default で never に代入しておけば、新しい種類を追加して、処理を書き忘れたとき、コンパイルエラーで気づけます。",
                "code": "default: {\n  const _check: never = r; // 種類を足して、処理を忘れるとエラー\n  return _check;\n}"
              },
              {
                "heading": "型アサーション（as）の危険",
                "body": "as は、コンパイラに「この型として扱ってほしい」と伝えるだけで、実際の値を検査したり、変換したりはしません。実際の値が違えば、実行時に不具合になります。使うのは、型が確かな場面に限り、できるだけ型の絞り込みを使います。"
              },
              {
                "heading": "型は、実行時には存在しない",
                "body": "型は、コンパイルのときに消え、実行時には残りません。そのため、外部の API が返す JSON や、利用者の入力は、型を付けただけでは、安全にはなりません。unknown として受け取り、型ガード関数（x is User）や、検証用のライブラリで、中身を確かめてから使います。",
                "code": "function isUser(x: unknown): x is User {\n  return typeof x === \"object\" && x !== null\n    && typeof (x as { name?: unknown }).name === \"string\";\n}"
              },
              {
                "heading": "strict を有効にする",
                "body": "tsconfig.json の \"strict\": true は、null や undefined の厳密な扱いなど、厳しい型チェックをまとめて有効にします。新しいプロジェクトでは、最初から有効にしておくのが基本で、あとから有効にすると、直す量が大きくなります。"
              }
            ]
          }
        ]
      },
      "thinking": {
        "beginner": [
          {
            "id": "typescript-thinking-beginner",
            "title": "型エラーを、読んで直す",
            "content": "正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。",
            "prompts": [
              {
                "id": "typescript-thinking-beginner-1",
                "scenario": "後輩が書いた関数で、フォームから受け取った価格（文字列）を、そのまま number の変数に代入していて、エディタに赤い波線が出ています。後輩は、「動くのに、うるさい」と言って、any を付けて、波線を消そうとしています。",
                "code": "let price: number = 0;\nconst input = document.querySelector(\"input\")!.value; // string\nprice = input; // エラー",
                "question": "波線が出る理由と、any で消してはいけない理由を説明し、正しい直し方を書いてください。",
                "checkpoints": [
                  "フォームの値は文字列で、number 型の変数に代入できないことを説明している",
                  "any で消すと型のチェックが無効になり、本当の間違いに気づけなくなることを指摘している",
                  "Number() や parseInt で、文字列を数値に変換してから代入する方法を示している",
                  "変換に失敗した場合（数値でない入力）にも触れている"
                ],
                "modelAnswer": "フォームから取得した value は、数値のように見えても、型は string です。number 型の price に代入しようとしているので、型が合わず、エラーになっています。波線は、「実行すると、数値として計算できず、不具合になる」という、重要な警告です。any を付けて消すと、型のチェックが無効になり、本当に間違ったコードでも、気づけなくなります。正しくは、Number(input) で、文字列を数値に変換してから代入します。さらに、入力が数値でない場合（\"abc\" など）は、変換の結果が NaN になるので、Number.isNaN で確かめ、エラーメッセージを表示するなどの対応も必要です。",
                "tip": "型エラーは、「この組み合わせは、実行すると失敗するかもしれない」という、先回りの知らせです。消す前に、中身を読みましょう。"
              },
              {
                "id": "typescript-thinking-beginner-2",
                "scenario": "ユーザー情報を扱うコードで、プロパティ名をタイプミスした（user.nmae）のに、実行するまで気づかず、画面に「undefined」と表示されてしまいました。チームでは、「TypeScript を導入すれば、防げたのでは」という話が出ています。",
                "question": "TypeScript を使うと、どのようにこの問題を防げるかを説明し、interface をどう使うか、書いてください。",
                "checkpoints": [
                  "ユーザーのプロパティを、interface などで定義することを示している",
                  "存在しないプロパティ（nmae）を書くと、実行前にエラーになることを説明している",
                  "エディタの補完が効き、そもそもタイプミスしにくくなる利点に触れている",
                  "型を付けるだけでは防げない問題（実行時の値の確認など）が残る可能性にも触れている"
                ],
                "modelAnswer": "interface User { name: string; age: number } のように、ユーザーが持つプロパティを定義し、変数や関数の引数に User 型を付けます。すると、user.nmae のように、定義にないプロパティを書いたとき、実行する前に、「nmae は User に存在しない」というエラーが出ます。書いている最中にも、補完で正しいプロパティ名の候補が出るので、そもそもタイプミスしにくくなります。JavaScript のときは、実行してから「undefined」が表示されて、初めて気づいていた間違いを、書いた時点で防げます。ただし、外部から届くデータが、定義どおりの形であるかどうかは、型だけでは保証できないので、その部分は別に確認する必要があります。",
                "tip": "型を付けるときは、「このデータには、どんなプロパティがあるか」を、先に書き出すところから始めましょう。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "typescript-thinking-intermediate",
            "title": "「ないかもしれない値」を、安全に扱う",
            "content": "実行時のエラーの多くは、「値がないのに、使おうとした」ことが原因です。型を使って、それをどう防ぐかを考えてみましょう。",
            "prompts": [
              {
                "id": "typescript-thinking-intermediate-1",
                "scenario": "会員検索の関数 findUser(id: number): User | undefined を使って、画面にユーザー名を表示するコードを書きました。しかし、存在しない id で検索したとき、画面が真っ白になる不具合が出ました。",
                "code": "const user = findUser(999);\nconsole.log(user.name); // エラー",
                "question": "なぜエラーになるのかと、型がどのように教えてくれていたかを説明し、直し方を書いてください。",
                "checkpoints": [
                  "見つからないとき、findUser は undefined を返し、undefined の name は読めないことを説明している",
                  "戻り値の型 User | undefined が、undefined の可能性を、あらかじめ示していたことを説明している",
                  "if で undefined を調べ、絞り込んでから使う（または ?. を使う）直し方を示している",
                  "見つからなかったときに、何を表示するか（メッセージなど）を決める必要があることに触れている"
                ],
                "modelAnswer": "存在しない id では、findUser は undefined を返します。undefined に対して user.name を読もうとするので、エラーになり、画面が真っ白になります。実は、戻り値の型が User | undefined になっているので、TypeScript は、「undefined の可能性がある」と、事前にエラーで教えてくれていました。直し方は、使う前に、if (!user) { /* 見つからなかったときの処理 */ return; } のように分岐し、undefined でないことを確かめてから、user.name を使います。この分岐のあとでは、user は User 型に絞り込まれます。「見つかりませんでした」と表示するなど、見つからなかったときの、利用者向けの動作も、決めておく必要があります。",
                "tip": "型に undefined が含まれていたら、「見つからない場合に、何をするか」を考えるサインです。"
              },
              {
                "id": "typescript-thinking-intermediate-2",
                "scenario": "通信の状態を、次のような型で表しています。画面では、loading が true のときはスピナー、error があればメッセージ、data があれば一覧を表示しています。ところが、まれに、loading が true のまま、data も表示されるという、おかしな画面が出ます。",
                "code": "interface State {\n  loading: boolean;\n  data?: Item[];\n  error?: string;\n}",
                "question": "この型の問題点を指摘し、判別可能なユニオン型を使った、より良い型を書いてください。",
                "checkpoints": [
                  "すべてが独立しているため、loading と data が同時にある、といった矛盾した組み合わせが作れてしまうことを指摘している",
                  "status のような共通のプロパティで、状態を分けるユニオン型を示している",
                  "状態ごとに、必要なプロパティだけを持たせている",
                  "状態を調べた分岐の中で、型が絞り込まれる利点を説明している"
                ],
                "modelAnswer": "loading、data、error が、それぞれ独立しているので、「loading が true なのに data もある」「error と data が同時にある」といった、ありえない組み合わせが、型の上では許されてしまいます。それを、更新のしかたの間違いで作ってしまうのが、不具合の原因です。type State = { status: \"loading\" } | { status: \"success\"; data: Item[] } | { status: \"error\"; message: string } のように、status で状態を分けて、状態ごとに、必要なプロパティだけを持たせます。こうすると、「loading なのに data がある」状態は、そもそも作れません。画面側でも、status を調べた分岐の中で、その状態に合うプロパティだけが使えるように、型が絞り込まれるので、書き間違いも減ります。",
                "tip": "「同時に存在してはいけない」ものを、別々の省略可能なプロパティにしていないか、見直してみましょう。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "typescript-thinking-advanced",
            "title": "型を、どこまで信じるか",
            "content": "型は強力ですが、実行時のデータまでは守れません。型の力と限界を、理由まで書いて整理してみましょう。",
            "prompts": [
              {
                "id": "typescript-thinking-advanced-1",
                "scenario": "外部の API から受け取った JSON を、as User で型を付けて使っています。ある日、API の仕様が変わり、name が null で返ってくるようになりました。TypeScript のコンパイルは通っているのに、画面でエラーが出ました。",
                "code": "const res = await fetch(\"/api/user/1\");\nconst user = (await res.json()) as User;\nconsole.log(user.name.toUpperCase());",
                "question": "なぜ、コンパイルが通ったのに、エラーが出たのかを説明し、安全にするための対策を書いてください。",
                "checkpoints": [
                  "as は、コンパイラに型を伝えるだけで、実際の値を検査しないことを説明している",
                  "型は実行時には存在せず、API の実際のデータを守れないことを説明している",
                  "unknown で受け取り、型ガード関数や検証用のライブラリで確かめる対策を示している",
                  "検証に失敗したときの処理（エラー表示や、記録）にも触れている"
                ],
                "modelAnswer": "as User は、「この値を User として扱ってほしい」とコンパイラに伝えているだけで、実際のデータの中身は検査していません。コンパイルは、「約束どおりなら、問題ない」という前提で通りますが、型は実行時には消えるので、API が約束と違う形（name が null）で返してきたときは、守れません。対策は、まず json() の結果を unknown として受け取ることです。そのうえで、isUser(x: unknown): x is User のような型ガード関数や、検証用のライブラリを使い、name が文字列であることなどを実行時に確かめます。検証に成功したときだけ、User として扱います。失敗したときは、エラーメッセージの表示や、記録を残すなど、あらかじめ決めた対応をします。",
                "tip": "型は「コードを書くときの約束」を守る道具で、「実行時に届くデータ」は、別に確かめる必要があります。"
              },
              {
                "id": "typescript-thinking-advanced-2",
                "scenario": "決済の状態を、\"pending\" | \"paid\" | \"failed\" で管理しています。新しい要件で、\"refunded\"（返金済み）を追加することになりました。画面には、状態ごとの表示を、switch で書いた箇所が、20 か所以上あります。",
                "question": "追加のときに、処理の書き忘れを防ぐために、型でどんな工夫ができるかを書いてください。また、その仕組みの利点も説明してください。",
                "checkpoints": [
                  "switch の default で、never 型の変数に代入するなど、網羅性をチェックする工夫を示している",
                  "新しい状態を追加すると、処理が足りない箇所が、コンパイルエラーとして見つかることを説明している",
                  "20 か所を、目で探す必要がなくなる利点に触れている",
                  "状態を、リテラル型のユニオンや、判別可能なユニオンで定義しておく前提を説明している"
                ],
                "modelAnswer": "状態を、リテラル型のユニオン（または判別可能なユニオン）で定義しておき、各 switch の default で、const _check: never = status; のように、never 型の変数に代入します。すべての状態を処理していれば、default に来る値の型は never になり、問題ありません。しかし、\"refunded\" を追加したのに、その分岐を書き忘れていると、default に来る型が \"refunded\" になり、never に代入できないため、コンパイルエラーになります。この仕組みの利点は、20 か所以上ある switch のうち、対応が必要な箇所を、コンパイラが、すべて見つけてくれることです。目で探したり、テストで気づいたりする必要がなく、書き忘れによる不具合を、リリース前に防げます。",
                "tip": "「あとから種類が増えるもの」は、型で網羅性をチェックできるように書いておくと、変更に強くなります。"
              }
            ]
          }
        ]
      }
    },
    "shortLabel": "TS"
  },
  {
    "id": "react",
    "name": "React",
    "description": "React.jsでUIコンポーネントを作成する方法を学びます",
    "icon": "fa-brands fa-react",
    "lessons": {
      "beginner": [
        {
          "id": "react-beginner-1",
          "title": "JSXと要素",
          "content": "JSXと要素について学びます。重要なトピック：JSX構文, Reactコンポーネント, 要素のレンダリング",
          "questions": [
            {
              "id": "q-beg-JSXと要素-1",
              "text": "JSX で HTML の class 属性にあたるものを書くとき、使う属性名は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "className",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "class",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "classname",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "styleClass",
                  "correct": false
                }
              ],
              "explanation": "JSX は JavaScript の中に書かれるため、予約語である class は使えず className を使います。同様に for 属性は htmlFor になります。その他の属性はキャメルケースで書き、onclick は onClick、tabindex は tabIndex となります。",
              "hint": "class は JavaScript の予約語です。そのままでは属性名として使えません。",
              "example": "デザイナーから受け取ったHTMLをReactに移すとき、class=\"card\" を className=\"card\" に書き換えてから貼り付けます。"
            },
            {
              "id": "q-beg-JSXと要素-2",
              "text": "JSX の中に JavaScript の式を埋め込むときに使う記号は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "波かっこ {}",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "二重の波かっこ {{}}",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "ドル記号と波かっこ ${}",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "角かっこ []",
                  "correct": false
                }
              ],
              "explanation": "JSX では {} の中に JavaScript の式を書けます。{user.name} や {items.length} のように値を埋め込み、条件分岐には三項演算子や && を使います。文（if や for）は書けないため、事前に変数へ入れておくか式の形にします。${} はテンプレートリテラルの記法で、JSX では使いません。",
              "hint": "変数をそのまま表示したいとき、{name} のように囲みます。",
              "example": "プロフィールカードで <h2>{user.name}さん</h2> のように、データの値を見た目の中に埋め込んで表示します。"
            },
            {
              "id": "q-beg-JSXと要素-3",
              "text": "コンポーネントが複数の要素を並べて返したいとき、余分な DOM を増やさずに囲む方法は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "フラグメント（<>...</> または <React.Fragment>）で囲む",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "div で囲む",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "配列に入れずにそのまま並べて返す",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "span で囲む",
                  "correct": false
                }
              ],
              "explanation": "コンポーネントが返せる要素は1つなので、複数並べる場合は何かで囲む必要があります。フラグメントは実際の DOM 要素を生成せずに複数の要素をまとめられるため、レイアウトに影響する余分な div を避けられます。囲まずに並べて返すと構文エラーになります。",
              "hint": "返せるのは1つの塊だけですが、そのために本当に div を増やしたいとは限りません。",
              "example": "表の1行を表すコンポーネントで、<tr> の中に <td> を2つ返したいとき、<div> で囲むと表が崩れるので <></> で囲みます。"
            },
            {
              "id": "q-beg-JSXと要素-4",
              "text": "React のコンポーネント名を大文字で始める必要があるのは______だからです。",
              "options": [
                {
                  "id": "a",
                  "text": "小文字で始まる名前は HTML タグとして扱われるため",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "JavaScript の変数名の規則で大文字が必須のため",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "小文字だとファイルを読み込めないため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "大文字のほうが描画が速いため",
                  "correct": false
                }
              ],
              "explanation": "JSX は小文字で始まるタグを HTML の組み込み要素、大文字で始まるタグをコンポーネントとして扱います。そのため myButton と書くと未知の HTML タグとみなされ、意図した描画になりません。ファイル名は自由ですが、コンポーネント名は必ず大文字で始めます。",
              "hint": "<button> と <Button> を、React はどう区別しているでしょうか。",
              "example": "自分で作った <Button> を <button> と書き間違えると、ただのHTMLのボタンとして表示されます。大文字の名前で書くことで区別されます。"
            }
          ]
        }
      ],
      "intermediate": [
        {
          "id": "react-intermediate-1",
          "title": "State と Props",
          "content": "State と Propsについて学びます。重要なトピック：ステート管理, プロップの受け渡し, 状態更新",
          "questions": [
            {
              "id": "q-int-State-と-Props-1",
              "text": "props と state の違いは、props が______という点です。",
              "options": [
                {
                  "id": "a",
                  "text": "親から渡される読み取り専用の値である",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "コンポーネント内部で自由に書き換えられる値である",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "画面の再描画を起こさない値である",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "ブラウザに保存される値である",
                  "correct": false
                }
              ],
              "explanation": "props は親コンポーネントから渡される入力値で、受け取った側では読み取り専用です。state はコンポーネントが自分で持ち、setState 系の関数を通じて更新する値です。どちらも変化すると再描画が起きますが、props を直接書き換えると親との整合性が崩れるため禁止されています。",
              "hint": "受け取った側が勝手に書き換えてよいのはどちらでしょうか。",
              "example": "商品カードの名前や価格は親から props で受け取り、「お気に入りに追加したか」というカード自身が覚える状態は state で持ちます。"
            },
            {
              "id": "q-int-State-と-Props-2",
              "text": "useState で得た更新関数を使わず、状態の変数に直接代入すると______になります。",
              "options": [
                {
                  "id": "a",
                  "text": "値は変わっても再描画が起きず、画面に反映されない",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "即座に再描画され、正しく反映される",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "構文エラーになり実行できない",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "前回の値に自動的に戻される",
                  "correct": false
                }
              ],
              "explanation": "React は更新関数が呼ばれたことを手がかりに再描画を判断します。変数へ直接代入しても React は変化を検知できないため、画面は古いままです。必ず setCount のような更新関数を通して変更します。",
              "hint": "React はどうやって「状態が変わった」ことを知るのでしょうか。",
              "example": "count = count + 1 と書いてもボタンの数字が変わらない、というときに、setCount を使えば画面が更新されると分かります。"
            },
            {
              "id": "q-int-State-と-Props-3",
              "text": "直前の値をもとに状態を更新するとき、安全な書き方は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "setCount(prev => prev + 1) のように関数を渡す",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "setCount(count + 1) のように現在の変数を使う",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "count++ と書いてから setCount(count) を呼ぶ",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "更新前に一度 setCount(0) を呼ぶ",
                  "correct": false
                }
              ],
              "explanation": "React は複数の更新をまとめて処理することがあり、そのとき count は更新前の値のままです。同じ処理内で2回増やしても1回分しか反映されない、といったずれが起きます。関数形式で渡せば、React が持つ最新の値を引数として受け取れるため確実です。",
              "hint": "更新がまとめて処理されるとき、count はいつの時点の値でしょうか。",
              "example": "「+3」ボタンで setCount を3回呼んでも1しか増えない、という不具合を、prev => prev + 1 の形で書いて直します。"
            },
            {
              "id": "q-int-State-と-Props-4",
              "text": "子コンポーネントから親の状態を変えたいとき、一般的な方法は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "親が更新用の関数を props として渡し、子がそれを呼ぶ",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "子が props を直接書き換える",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "子が親と同じ useState を独自に宣言する",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "グローバル変数を経由して値を渡す",
                  "correct": false
                }
              ],
              "explanation": "React ではデータが親から子へ一方向に流れます。子から状態を変えたい場合は、親が更新用の関数を props として渡し、子はそれを呼ぶだけにします。props を直接書き換えることはできず、子で別途 useState を宣言しても親の状態とは別物になります。",
              "hint": "データは上から下へ流れます。では変更の合図はどう伝えるとよいでしょうか。",
              "example": "モーダルの中の「閉じる」ボタンを押したときに、親が持つ「モーダルを開いているか」の状態を変えるため、親から onClose 関数を渡します。"
            }
          ]
        }
      ],
      "advanced": [
        {
          "id": "react-advanced-1",
          "title": "Hooks",
          "content": "Hooksについて学びます。重要なトピック：useStateフック, useEffectフック, カスタムフック",
          "questions": [
            {
              "id": "q-adv-Hooks-1",
              "text": "useState が返す2つの値は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "現在の状態と、それを更新する関数",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "初期値と、前回の値",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "状態の配列と、その要素数",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "更新関数と、再描画を止める関数",
                  "correct": false
                }
              ],
              "explanation": "useState は現在の状態と更新関数のペアを配列で返し、分割代入で受け取ります。引数に渡した値は初回描画時の初期値としてのみ使われ、以降の再描画では無視されます。名前は自由ですが、setXxx の形にするのが慣例です。",
              "hint": "const [count, setCount] = useState(0) の2つが何にあたるかを考えてみましょう。",
              "example": "const [isOpen, setIsOpen] = useState(false) で、メニューが開いているかどうかと、それを切り替える関数を受け取ります。"
            },
            {
              "id": "q-adv-Hooks-2",
              "text": "useEffect の第2引数に空の配列 [] を渡すと、処理が実行されるのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "初回の描画後に1回だけ",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "再描画のたび毎回",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "一度も実行されない",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "コンポーネントが消えるときだけ",
                  "correct": false
                }
              ],
              "explanation": "第2引数は依存配列で、そこに並べた値が変化したときに処理が再実行されます。空配列なら変化するものがないため、初回描画後の1回だけ実行されます。省略すると毎回の描画後に実行され、無限ループの原因になりやすいので注意が必要です。",
              "hint": "配列は「何が変わったら再実行するか」を指定します。空なら、変わるものは何もありません。",
              "example": "ページを開いたときに一度だけユーザー情報をAPIから取ってくる処理を、依存配列を [] にした useEffect に書きます。"
            },
            {
              "id": "q-adv-Hooks-3",
              "text": "useEffect の中で登録したタイマーやイベントを後始末するには______します。",
              "options": [
                {
                  "id": "a",
                  "text": "エフェクトから後始末用の関数を返す",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "コンポーネントの外で clearInterval を呼ぶ",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "依存配列に関数名を追加する",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "別の useEffect を空配列で追加する",
                  "correct": false
                }
              ],
              "explanation": "useEffect の中で関数を返すと、React はコンポーネントが消えるときと、次に同じエフェクトを実行する前にその関数を呼びます。ここで clearInterval や removeEventListener を行えば、登録が積み重なる問題やメモリリークを防げます。",
              "hint": "エフェクトが返した関数を、React はどのタイミングで呼んでくれるでしょうか。",
              "example": "ストップウォッチ画面で setInterval を開始したら、画面を閉じたときに clearInterval する関数を返しておきます。これで裏でタイマーが動き続けません。"
            },
            {
              "id": "q-adv-Hooks-4",
              "text": "フックを if 文の中で呼び出してはいけない理由は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "React が呼び出し順で状態を対応づけているため、順序が変わると崩れる",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "条件分岐の中では変数を宣言できないため",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "if 文の中では再描画が起きないため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "フックが非同期に実行されるため",
                  "correct": false
                }
              ],
              "explanation": "React はフックが呼ばれた順番で内部の状態と対応づけます。条件によって呼ばれたり呼ばれなかったりすると順序がずれ、別の状態を参照してしまいます。そのためフックは必ずコンポーネントの最上位で、毎回同じ順序で呼び出します。条件分岐はフックの内側に書きます。",
              "hint": "React はフックに名前ではなく「何番目に呼ばれたか」で状態を結びつけています。",
              "example": "「ログイン中だけ useState を呼ぶ」ように書くと、ログイン状態が変わった瞬間に別の state の値が入れ替わるバグになります。条件分岐はフックの呼び出しより後に書きます。"
            }
          ]
        }
      ],
      "projects": {
        "beginner": [
          {
            "id": "react-project-beginner-1",
            "title": "React 初級プロジェクト",
            "content": "JSX とコンポーネント分割を使って、一覧表示のある小さな画面を組み立てながら確認します。",
            "questions": [
              {
                "id": "q-beg-React初級プロジェクト-1",
                "text": "配列から一覧を描画するとき、各要素に key を付ける理由は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "React が要素の対応関係を判断し、差分だけを更新できるようにするため",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "要素に一意な CSS を当てるため",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "配列の並び順を固定するため",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "要素をクリック可能にするため",
                    "correct": false
                  }
                ],
                "explanation": "key は再描画前後で同じ要素を対応づけるための目印です。適切な key があれば、React は変わった部分だけを更新できます。key に配列の添字を使うと、並び替えや削除のときに対応がずれて入力内容が別の行に残るなどの不具合が起きるため、データ固有の id を使います。",
                "hint": "並び替えや削除が起きたとき、React はどの要素がどれだったかをどう見分けるでしょうか。",
                "example": "ToDoリストで項目を削除したとき、key に配列の番号ではなく ID を使っておくと、別の項目のチェック状態がずれる不具合が起きません。"
              },
              {
                "id": "q-beg-React初級プロジェクト-2",
                "text": "条件によって要素を出し分けるとき、JSX の中に書けるのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "三項演算子や && を使った式",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "if 文をそのまま書いた形",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "for 文をそのまま書いた形",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "return を含むブロック",
                    "correct": false
                  }
                ],
                "explanation": "JSX の {} には値を生む式だけを書けます。分岐は {isOpen ? <A /> : <B />} や {isOpen && <A />} の形で表現します。if 文で分けたい場合は JSX の外で変数に代入しておき、その変数を埋め込みます。",
                "hint": "{} の中に書けるのは「式」であって「文」ではありません。",
                "example": "ログインしていれば「マイページ」、していなければ「ログイン」ボタンを、{isLoggedIn ? <MyPage /> : <Login />} で出し分けます。"
              },
              {
                "id": "q-beg-React初級プロジェクト-3",
                "text": "大きくなったコンポーネントを分割する基準として適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "1つの役割ごとに分け、再利用できる単位にまとめる",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "行数が一定を超えたら機械的に半分にする",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "ファイル数が増えないよう1つにまとめ続ける",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "使っている HTML タグの種類ごとに分ける",
                    "correct": false
                  }
                ],
                "explanation": "コンポーネントは「何を担当しているか」で分けると、名前から役割が伝わり再利用もしやすくなります。行数だけを基準に切ると関係のない処理が同居し、かえって読みにくくなります。1ファイルに詰め込み続けると変更の影響範囲が把握できなくなります。",
                "hint": "分ける目的は行数を減らすことではなく、読みやすさと再利用です。",
                "example": "ECサイトの商品ページを、写真・価格・レビュー・購入ボタンといった役割ごとのコンポーネントに分けておくと、レビュー部分を別のページでも使い回せます。"
              },
              {
                "id": "q-beg-React初級プロジェクト-4",
                "text": "親から子へ複数の値を渡すとき、props の受け取り方として簡潔なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "引数で分割代入する（function Item({ title, price })）",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "props.title のように毎回 props を経由する",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "グローバル変数に入れて参照する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "子の中で再度 useState を宣言する",
                    "correct": false
                  }
                ],
                "explanation": "引数で分割代入すると、そのコンポーネントが何を必要としているかが宣言の時点で分かります。props 経由でも動作は同じですが記述が冗長になります。グローバル変数は依存関係が見えなくなり、子で useState を宣言しても親の値とは結びつきません。",
                "hint": "受け取った直後に必要な値だけ取り出せる書き方があります。",
                "example": "商品カードで function ProductCard({ name, price, image }) と書けば、props.name のように毎回 props と書かずに済み、何を受け取るかもひと目で分かります。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "react-project-intermediate-1",
            "title": "React 中級プロジェクト",
            "content": "状態管理とフォームの扱いを通じて、入力と表示を同期させる実装を確認します。",
            "questions": [
              {
                "id": "q-int-React中級プロジェクト-1",
                "text": "入力欄の値を state で管理する制御コンポーネントでは、input に______を指定します。",
                "options": [
                  {
                    "id": "a",
                    "text": "value と onChange の両方",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "value だけ",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "onChange だけ",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "defaultValue と onBlur",
                    "correct": false
                  }
                ],
                "explanation": "制御コンポーネントでは value に state を渡して表示を決め、onChange で入力のたびに state を更新します。value だけを渡すと値が固定され入力できず、onChange だけでは表示が state と同期しません。両方を組み合わせて初めて双方向に動きます。",
                "hint": "片方だけだと、表示は固定されたまま入力できなくなります。",
                "example": "パスワード入力欄で、入力するたびに「8文字以上必要です」とその場で表示するには、入力値を state で管理する必要があります。"
              },
              {
                "id": "q-int-React中級プロジェクト-2",
                "text": "state のオブジェクトを更新するとき、正しい書き方は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "スプレッド構文で新しいオブジェクトを作って渡す",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "既存のオブジェクトのプロパティを直接書き換える",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "JSON.stringify してから渡す",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "delete で古いキーを消してから渡す",
                    "correct": false
                  }
                ],
                "explanation": "React は state が新しいオブジェクトに置き換わったかどうかで再描画を判断します。既存のオブジェクトを書き換えても参照が同じままなので、変化が検知されません。{ ...prev, name: value } のように新しいオブジェクトを作って渡します。配列も同様に新しい配列を作ります。",
                "hint": "React は前回と同じオブジェクトかどうかで変化を判断します。",
                "example": "ユーザー設定の中で通知の ON/OFF だけを変えるとき、{...settings, notify: true} と新しいオブジェクトを作って渡すと、画面が正しく更新されます。"
              },
              {
                "id": "q-int-React中級プロジェクト-3",
                "text": "複数のコンポーネントが同じ値を必要とするとき、一般的な解決策は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "共通の親に状態を移動し、props で配る",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "各コンポーネントが同じ状態を個別に持つ",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "グローバル変数に値を保存する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "DOM から直接値を読み取る",
                    "correct": false
                  }
                ],
                "explanation": "共通の親へ状態を引き上げ（リフトアップ）、そこから props で配ると、値がひとつに保たれ食い違いが起きません。個別に持つと同期が取れず、グローバル変数や DOM からの読み取りは React の再描画の仕組みから外れて不整合の原因になります。階層が深い場合は Context の利用を検討します。",
                "hint": "同じ値を別々に持つと、片方だけ古くなります。",
                "example": "ヘッダーのカート件数と商品一覧の「カートに入れる」ボタンが同じ件数を使うとき、カートの状態を共通の親（App）に置いて両方へ渡します。"
              },
              {
                "id": "q-int-React中級プロジェクト-4",
                "text": "フォーム送信時にページが再読み込みされてしまうのを防ぐには______します。",
                "options": [
                  {
                    "id": "a",
                    "text": "イベントオブジェクトの preventDefault() を呼ぶ",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "button の type を submit にする",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "form タグを div に置き換える",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "onChange の中で状態を更新する",
                    "correct": false
                  }
                ],
                "explanation": "form の送信はブラウザの既定でページ遷移を起こします。onSubmit のハンドラで e.preventDefault() を呼べばこれを止め、JavaScript 側で処理を続けられます。form を div に置き換えると Enter キーでの送信やブラウザの入力支援が失われるため、form のまま既定動作だけを抑えるのが適切です。",
                "hint": "form の送信はブラウザの既定動作です。それを止める必要があります。",
                "example": "検索フォームで Enter を押したときにページが白く読み込み直されてしまうのを、e.preventDefault() で止めて、その場で検索結果を表示します。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "react-project-advanced-1",
            "title": "React 上級プロジェクト",
            "content": "フックの設計と副作用の管理を通じて、再描画とデータ取得を安全に扱う方法を確認します。",
            "questions": [
              {
                "id": "q-adv-React上級プロジェクト-1",
                "text": "useEffect の中でデータを取得し、その結果を state に入れる処理が無限ループになりました。原因は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "依存配列を省略したため、更新のたびにエフェクトが再実行されている",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "fetch が非同期だから",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "state の初期値が空だから",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "useEffect を複数書いたから",
                    "correct": false
                  }
                ],
                "explanation": "依存配列を省略すると毎回の描画後にエフェクトが実行されます。その中で state を更新すれば再描画が起き、またエフェクトが走るという循環になります。取得が1回でよければ空配列を渡し、特定の値の変化に応じたいならその値だけを依存配列に並べます。",
                "hint": "依存配列がないエフェクトは、いつ実行されるでしょうか。",
                "example": "ユーザー一覧を取得するエフェクトが延々とAPIを呼び続けてしまったときに、依存配列を確認して原因を見つけます。"
              },
              {
                "id": "q-adv-React上級プロジェクト-2",
                "text": "取得処理の途中でコンポーネントが消えたときに備えて行うべきなのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "後始末の関数で取得を中断する、または結果を破棄する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "取得完了まで画面を操作できないようにする",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "取得処理を同期的に書き換える",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "依存配列にすべての変数を並べる",
                    "correct": false
                  }
                ],
                "explanation": "エフェクトが返す後始末の関数で AbortController を使って通信を中断するか、フラグを立てて結果を無視します。これを怠ると、すでに不要になった応答で state を更新しようとします。同期処理に書き換えることはできず、依存配列に無関係な値を並べると再実行が増えるだけです。",
                "hint": "消えたコンポーネントに対して state を更新しようとすると、無駄な処理や警告の原因になります。",
                "example": "検索結果の読み込み中に別のページへ移動すると、もう存在しない画面を更新しようとして警告が出ます。後始末の関数で通信を中断して防ぎます。"
              },
              {
                "id": "q-adv-React上級プロジェクト-3",
                "text": "複数の場所で使う同じロジックをまとめたいとき、React で用意されている仕組みは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "カスタムフック（use で始まる関数に切り出す）",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "通常のユーティリティ関数にまとめる",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "クラスを作って継承する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "グローバルオブジェクトに登録する",
                    "correct": false
                  }
                ],
                "explanation": "フックを内部で呼ぶロジックはカスタムフックとして切り出します。名前を use で始めることで、React はフックの規則が適用される関数だと認識し、静的解析でも誤用を検出できます。フックを含まない純粋な計算であれば通常の関数で構いません。",
                "hint": "内部で useState や useEffect を呼ぶ処理は、普通の関数には切り出せません。",
                "example": "複数のページで「APIからデータを取る・読み込み中・エラー」の同じ処理を書いているなら、useFetch というカスタムフックにまとめます。"
              },
              {
                "id": "q-adv-React上級プロジェクト-4",
                "text": "再描画のたびに重い計算が走るのを避けたいとき、使えるのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "useMemo で計算結果を記憶する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "useState で結果を保存する",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "useEffect で計算する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "コンポーネントを分割する",
                    "correct": false
                  }
                ],
                "explanation": "useMemo は依存配列の値が変わらない限り、前回の計算結果を再利用します。useEffect は描画後に走るため描画中の値には使えず、useState に入れる方法は更新の管理が煩雑になります。ただし過剰な使用は複雑さを増すため、実際に重い処理に絞って使います。",
                "hint": "依存する値が変わらない限り、前回の結果を使い回したい場面です。",
                "example": "1万件の商品を並べ替えて表示する画面で、関係ない入力欄に文字を打つたびに並べ替えが走らないよう、useMemo で結果を覚えておきます。"
              }
            ]
          }
        ]
      },
      "basics": {
        "beginner": [
          {
            "id": "react-basics-beginner",
            "title": "JSX とコンポーネントで画面を組み立てる",
            "content": "React では、画面を「コンポーネント」という部品に分けて作ります。部品の書き方である JSX の決まりと、一覧や条件による出し分けの基本を押さえましょう。",
            "sections": [
              {
                "heading": "コンポーネントは画面の部品",
                "body": "コンポーネントは、見た目と動きをひとまとめにした関数です。名前は大文字で始めます。小文字で始めると <div> のような HTML のタグとして扱われてしまいます。",
                "code": "function Greeting() {\n  return <h1>こんにちは</h1>;\n}\n\n// 使うとき\n<Greeting />"
              },
              {
                "heading": "JSX の決まり：className と {}",
                "body": "JSX は HTML に似ていますが、いくつか違いがあります。class の代わりに className と書き、JavaScript の値や式は {} の中に書きます。",
                "code": "function Profile({ user }) {\n  return <p className=\"name\">{user.name}さん（{user.age}歳）</p>;\n}"
              },
              {
                "heading": "複数の要素はフラグメントで囲む",
                "body": "コンポーネントが返せる要素は1つだけです。複数の要素を並べたいときは、余計な <div> を増やさずに <></>（フラグメント）で囲みます。表の行の中など、<div> を入れると崩れる場所で特に役立ちます。",
                "code": "function Row({ item }) {\n  return (\n    <>\n      <td>{item.name}</td>\n      <td>{item.price}円</td>\n    </>\n  );\n}"
              },
              {
                "heading": "一覧表示には key を付ける",
                "body": "配列から一覧を作るときは map を使い、各要素に key を付けます。key は React が「どの要素がどれか」を見分ける目印で、追加・削除・並べ替えのときに正しく更新するために必要です。配列の番号ではなく、ID のような変わらない値を使います。",
                "code": "function TodoList({ todos }) {\n  return (\n    <ul>\n      {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}\n    </ul>\n  );\n}"
              },
              {
                "heading": "条件による出し分けと props の受け取り",
                "body": "条件で表示を変えるときは、JSX の中に三項演算子や && を書きます。親から渡された値（props）は、引数で分割代入して受け取ると、何を受け取るかが一目で分かります。",
                "code": "function Header({ isLoggedIn, userName }) {\n  return isLoggedIn ? <p>{userName}さん</p> : <button>ログイン</button>;\n}"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "react-basics-intermediate",
            "title": "state と props：データの流れを設計する",
            "content": "React の画面は「データが変わると表示が変わる」仕組みで動きます。どこにデータを置き、どう渡すかを学びましょう。",
            "sections": [
              {
                "heading": "props は親から、state は自分で持つ",
                "body": "props は親から渡される値で、受け取った側は書き換えません。state はコンポーネント自身が覚えておく値で、変わると画面が描き直されます。「この値は誰が持つべきか」を考えるのが設計の第一歩です。",
                "code": "function ProductCard({ name, price }) {      // props\n  const [liked, setLiked] = useState(false);   // state\n  return <button onClick={() => setLiked(!liked)}>{liked ? \"♥\" : \"♡\"} {name}</button>;\n}"
              },
              {
                "heading": "state は更新関数で変える",
                "body": "state の変数に直接代入しても、React は変化に気づかず画面は変わりません。必ず更新関数（setCount など）を使います。直前の値をもとに更新するときは、関数を渡す形にすると確実です。",
                "code": "count = count + 1;           // 画面は変わらない\nsetCount(count + 1);         // OK\nsetCount(prev => prev + 1);  // 直前の値をもとにする確実な書き方"
              },
              {
                "heading": "オブジェクトや配列は新しく作って渡す",
                "body": "state のオブジェクトの一部を書き換えても、同じオブジェクトのままなので React は変化に気づきません。スプレッド構文で新しいオブジェクトを作って渡します。",
                "code": "setSettings({ ...settings, notify: true });\nsetTodos([...todos, newTodo]);"
              },
              {
                "heading": "子から親の state を変える",
                "body": "データは親から子へ流れます。子の操作で親の state を変えたいときは、親が更新用の関数を props として渡し、子はそれを呼びます。複数のコンポーネントが同じ値を使うなら、その値を共通の親に置きます（state の持ち上げ）。",
                "code": "function App() {\n  const [open, setOpen] = useState(false);\n  return <Modal open={open} onClose={() => setOpen(false)} />;\n}"
              },
              {
                "heading": "フォームは value と onChange で管理する",
                "body": "入力欄の値を state で持ち、value と onChange の両方を指定すると、入力内容をいつでも使えます（制御コンポーネント）。送信時は preventDefault() でページの再読み込みを止めます。",
                "code": "const [email, setEmail] = useState(\"\");\n<form onSubmit={e => { e.preventDefault(); send(email); }}>\n  <input value={email} onChange={e => setEmail(e.target.value)} />\n</form>"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "react-basics-advanced",
            "title": "Hooks で副作用と再利用を扱う",
            "content": "データの取得やタイマーのように、描画以外の処理（副作用）は useEffect で扱います。正しい使い方と、ロジックを再利用する方法を学びます。",
            "sections": [
              {
                "heading": "useEffect と依存配列",
                "body": "useEffect は描画の後に実行される処理です。第2引数の依存配列で「いつ実行するか」を決めます。[] なら初回だけ、[id] なら id が変わったときだけ実行されます。依存配列を省略すると毎回の描画後に実行されるため、中で state を更新すると無限ループになります。",
                "code": "useEffect(() => {\n  fetchUser(id).then(setUser);\n}, [id]); // id が変わったときだけ"
              },
              {
                "heading": "後始末の関数を返す",
                "body": "タイマーやイベント登録、通信などは、コンポーネントが消えるときに止める必要があります。useEffect から関数を返すと、それが後始末として呼ばれます。",
                "code": "useEffect(() => {\n  const timer = setInterval(tick, 1000);\n  return () => clearInterval(timer);\n}, []);\n\nuseEffect(() => {\n  const controller = new AbortController();\n  fetch(url, { signal: controller.signal });\n  return () => controller.abort(); // 画面を離れたら通信を中断\n}, [url]);"
              },
              {
                "heading": "フックは毎回同じ順番で呼ぶ",
                "body": "React は、フックが呼ばれた順番で「どの state がどれか」を覚えています。if 文の中でフックを呼ぶと順番が変わり、別の state と取り違えます。フックは必ずコンポーネントの先頭で、条件なしに呼びます。"
              },
              {
                "heading": "カスタムフックでロジックを再利用する",
                "body": "複数の画面で同じ「データ取得・読み込み中・エラー」の処理を書いているなら、use で始まる関数にまとめます。これがカスタムフックです。",
                "code": "function useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  useEffect(() => {\n    fetch(url).then(r => r.json()).then(setData).finally(() => setLoading(false));\n  }, [url]);\n  return { data, loading };\n}"
              },
              {
                "heading": "重い計算は useMemo で覚えておく",
                "body": "再描画のたびに重い計算（大量のデータの並べ替えなど）が走ると、関係ない入力でも画面が重くなります。useMemo を使うと、依存する値が変わったときだけ計算し直します。",
                "code": "const sorted = useMemo(\n  () => [...products].sort((a, b) => a.price - b.price),\n  [products]\n);"
              }
            ]
          }
        ]
      },
      "thinking": {
        "beginner": [
          {
            "id": "react-thinking-beginner",
            "title": "画面をコンポーネントに分ける",
            "content": "正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。",
            "prompts": [
              {
                "id": "react-thinking-beginner-1",
                "scenario": "ネットショップの商品一覧ページを React で作ります。ページには、ヘッダー（ロゴとカートの件数）、検索欄、商品カードの一覧（写真・名前・価格・在庫切れ表示・カートに入れるボタン）、フッターがあります。",
                "question": "どのようなコンポーネントに分けるか、それぞれの役割と受け取る props を書いてください。分ける理由も含めてください。",
                "checkpoints": [
                  "Header・SearchBox・ProductList・ProductCard・Footer など、役割ごとに分けている",
                  "商品カードを1つのコンポーネントにし、一覧では map で並べる設計にしている",
                  "各コンポーネントが受け取る props（商品データ、カートの件数など）を挙げている",
                  "分ける理由（再利用できる、変更の影響が小さい、読みやすい等）を説明している"
                ],
                "modelAnswer": "App の中を、Header、SearchBox、ProductList、Footer に分けます。Header は cartCount を受け取り、ロゴとカートの件数を表示します。SearchBox は keyword と onChange を受け取ります。ProductList は products を受け取り、products.map(p => <ProductCard key={p.id} product={p} onAdd={...} />) のように並べます。ProductCard は1つの商品を表す部品で、product（写真・名前・価格・在庫）と onAdd を受け取り、在庫が0なら {product.stock === 0 && <span>在庫切れ</span>} のように表示を切り替えます。商品カードを独立させておけば、お気に入り一覧やおすすめ欄でも使い回せ、カードの見た目を直すときも1か所の修正で済みます。役割ごとに分けると、どこに何が書いてあるかも探しやすくなります。",
                "tip": "画面を紙に描き、「繰り返し出てくるまとまり」と「役割が違う場所」に線を引くと、コンポーネントの区切りが見えてきます。"
              },
              {
                "id": "react-thinking-beginner-2",
                "scenario": "ToDo リストで、タスクを削除すると、別のタスクのチェック状態がずれてしまう不具合が起きています。",
                "code": "{todos.map((todo, index) => (\n  <li key={index}>\n    <input type=\"checkbox\" />\n    {todo.title}\n    <button onClick={() => remove(todo.id)}>削除</button>\n  </li>\n))}",
                "question": "なぜチェック状態がずれるのかを、key の役割から説明し、直し方を書いてください。",
                "checkpoints": [
                  "key は React が要素を見分ける目印であることを説明している",
                  "配列の番号を key にすると、削除で番号が詰まり、別のタスクと取り違えることを説明している",
                  "todo.id のような変わらない値を key にする直し方を示している",
                  "チェック状態も todo のデータとして持つ、などさらに確実にする工夫に触れている（任意）"
                ],
                "modelAnswer": "key は、React が「前回の描画のどの要素と、今回のどの要素が同じものか」を見分ける目印です。配列の番号（index）を key にすると、1番目のタスクを削除したとき、2番目だったタスクが番号 0 になります。React は key が 0 の要素を「前と同じ要素」とみなすので、前の1番目のチェック状態をそのまま引き継いでしまい、チェックがずれて見えます。直し方は、key={todo.id} のように、タスクごとに変わらない ID を key にすることです。さらに、チェック状態を input の中だけで持たず、todo.done のようにデータとして持ち、checked={todo.done} で表示すれば、データと表示が常に一致して確実です。",
                "tip": "並べ替えや削除がある一覧で key に index を使っていたら、ずれのバグを疑いましょう。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "react-thinking-intermediate",
            "title": "state をどこに置くか設計する",
            "content": "React のアプリは「state をどこに置くか」で作りやすさが大きく変わります。理由まで書いて考えてみましょう。",
            "prompts": [
              {
                "id": "react-thinking-intermediate-1",
                "scenario": "ネットショップで、ヘッダーに「カートの件数」、商品一覧の各カードに「カートに入れる」ボタン、ページ右側に「カートの中身と合計金額」を表示します。今はそれぞれのコンポーネントが自分でカートの state を持っていて、件数と中身が合わないことがあります。",
                "question": "カートの state をどこに置き、どう渡すように設計し直すかを、理由とともに書いてください。",
                "checkpoints": [
                  "同じデータを複数の場所で別々に持つと食い違うことを指摘している",
                  "カートの state を、3つのコンポーネントの共通の親（App など）に1つだけ持つ設計にしている",
                  "表示側には props でデータを、追加ボタンには更新用の関数を渡す流れを説明している",
                  "件数や合計金額は state から計算して求め、別の state として持たない工夫に触れている"
                ],
                "modelAnswer": "同じカートのデータを3か所で別々に持っているので、1か所を更新しても他に伝わらず、件数と中身が食い違います。カートの state は、ヘッダー・商品一覧・カート欄の共通の親である App に1つだけ持たせます（state の持ち上げ）。App で const [cart, setCart] = useState([]) とし、ヘッダーには cartCount={cart.length}、カート欄には items={cart} を props で渡します。商品カードには onAdd={product => setCart([...cart, product])} のような更新用の関数を渡し、ボタンが押されたらそれを呼びます。件数や合計金額は cart から毎回計算すれば求まるので、別の state として持ちません。持つと、更新のし忘れでまた食い違いが起きるからです。",
                "tip": "「同じ値を2か所で持っていないか」「計算で求められる値を state にしていないか」を確かめると、食い違いのバグを防げます。"
              },
              {
                "id": "react-thinking-intermediate-2",
                "scenario": "会員登録フォームで、メールアドレスとパスワードを入力してもらいます。パスワードは入力中に「8文字以上必要です」とその場で表示し、送信時に通信している間は送信ボタンを押せないようにしたいです。",
                "question": "このフォームで必要な state と、入力・送信のときの処理の流れを書いてください。",
                "checkpoints": [
                  "email・password・送信中（isSubmitting など）の state を挙げている",
                  "入力欄に value と onChange を指定する制御コンポーネントにしている",
                  "パスワードの長さの判定は、password から計算して表示する（別の state にしない）設計にしている",
                  "送信時に preventDefault() でページの再読み込みを止め、通信中はボタンを無効にしている"
                ],
                "modelAnswer": "state は email、password、isSubmitting（送信中かどうか）の3つです。入力欄は <input value={password} onChange={e => setPassword(e.target.value)} /> のように value と onChange を指定し、入力のたびに state を更新します。パスワードの長さのメッセージは、password.length < 8 で毎回計算して表示すれば十分なので、別の state にはしません。送信は form の onSubmit で受け取り、まず e.preventDefault() でページの再読み込みを止めます。次に setIsSubmitting(true) にして、ボタンに disabled={isSubmitting} を指定して押せなくします。通信が終わったら、成功しても失敗しても setIsSubmitting(false) に戻します。",
                "tip": "フォームの state は「利用者が入力したもの」と「画面の状態（送信中など）」に分け、それ以外は計算で求められないかを考えましょう。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "react-thinking-advanced",
            "title": "useEffect の不具合を診断し、設計を改善する",
            "content": "Hooks の不具合は、仕組みが分かっていれば原因を説明できます。原因 → 直し方 → 再発防止の順で書いてみましょう。",
            "prompts": [
              {
                "id": "react-thinking-advanced-1",
                "scenario": "ユーザー一覧を表示する画面で、開発者ツールを見ると API へのリクエストが止まらずに送られ続けています。",
                "code": "function UserList() {\n  const [users, setUsers] = useState([]);\n  useEffect(() => {\n    fetch(\"/api/users\")\n      .then(res => res.json())\n      .then(data => setUsers(data));\n  });\n  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n}",
                "question": "リクエストが止まらない理由を、描画と useEffect の流れから説明し、直し方を書いてください。画面を離れたときの扱いにも触れてください。",
                "checkpoints": [
                  "依存配列がないため、描画のたびに useEffect が実行されることを指摘している",
                  "setUsers で state が変わる → 再描画 → また fetch、という無限ループの流れを説明している",
                  "依存配列に [] を指定して初回だけ実行する直し方を示している",
                  "画面を離れたときに通信を中断する（AbortController と後始末の関数）ことに触れている"
                ],
                "modelAnswer": "useEffect に依存配列を指定していないので、描画が終わるたびに毎回実行されます。流れとしては、①描画 → ②useEffect で fetch → ③結果を setUsers で保存 → ④state が変わったので再描画 → ⑤また useEffect で fetch…と、③から①に戻る輪が止まりません。直し方は、useEffect の第2引数に [] を指定して、最初の描画の後に1回だけ実行することです。さらに、読み込みの途中で別の画面へ移動すると、もう表示されていないコンポーネントの state を更新しようとしてしまいます。AbortController を作って fetch に signal を渡し、useEffect から () => controller.abort() を返しておけば、画面を離れたときに通信が中断されます。",
                "tip": "useEffect の中で state を更新しているときは、必ず「この effect はいつ実行されるか」を依存配列で確かめましょう。"
              },
              {
                "id": "react-thinking-advanced-2",
                "scenario": "商品一覧・ユーザー一覧・お知らせ一覧の3つの画面で、ほぼ同じ「API からデータを取得し、読み込み中は『読み込み中…』、失敗したら『エラーが発生しました』と表示する」コードをそれぞれ書いています。商品一覧は1万件あり、並べ替えのボタンとは関係ない検索欄に文字を打つだけで画面が重くなります。",
                "question": "3つの画面の重複と、商品一覧の重さを、それぞれどう改善するかを書いてください。",
                "checkpoints": [
                  "共通の処理をカスタムフック（useFetch など）にまとめる提案をしている",
                  "カスタムフックが返す値（data・loading・error など）と、使う側の書き方を示している",
                  "重さの原因として、再描画のたびに1万件の並べ替えが走っていることを指摘している",
                  "useMemo で並べ替えの結果を覚え、依存する値が変わったときだけ計算し直す改善を示している"
                ],
                "modelAnswer": "重複については、取得・読み込み中・エラーの処理を function useFetch(url) というカスタムフックにまとめます。中で data、loading、error の state と useEffect を持ち、{ data, loading, error } を返します。各画面は const { data, loading, error } = useFetch(\"/api/products\") と1行で使え、表示の切り替えだけを書けばよくなります。直す場所も1か所になります。商品一覧の重さは、検索欄に打つたびに state が変わって再描画され、そのたびに1万件の並べ替えが計算し直されているのが原因です。const sorted = useMemo(() => [...products].sort(compare), [products, sortKey]) とすれば、商品データか並べ替えの条件が変わったときだけ計算し、検索欄の入力では前回の結果を使い回せます。",
                "tip": "「同じコードが3回出てきたらカスタムフック」「関係ない操作で重くなったら、毎回の描画で何が計算されているか」を確かめましょう。"
              }
            ]
          }
        ]
      }
    },
    "shortLabel": "Re"
  },
  {
    "id": "python",
    "name": "Python",
    "description": "Pythonの基礎から簡単なプログラミングを学びます",
    "icon": "fa-brands fa-python",
    "lessons": {
      "beginner": [
        {
          "id": "python-beginner-1",
          "title": "Pythonの基本",
          "content": "Pythonの基本について学びます。重要なトピック：変数と型, print関数, コメント",
          "questions": [
            {
              "id": "q-beg-Pythonの基本-1",
              "text": "変数はデータを保存する箱で、型はそのデータの種類（int、str、float、bool など）を表し、Python は型を______判定します。",
              "options": [
                {
                  "id": "a",
                  "text": "自動",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "手動",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "明示的に",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "サーバー側で",
                  "correct": false
                }
              ],
              "explanation": "変数は値を入れておく名前で、型はその値の種類を表します。Python では宣言時に型を書かず、代入された値から型が自動的に決まります。int は整数、str は文字列、float は小数、bool は真偽値です。型は type(x) で確認できます。",
              "hint": "x = 10 と書いたあと x = \"hello\" と書き換えても Python は動きます。ここから型の扱い方が読み取れます。",
              "example": "家計簿スクリプトで food = 1200 と書けば数値、memo = \"ランチ\" と書けば文字列として、型を宣言しなくてもそのまま使えます。"
            },
            {
              "id": "q-beg-Pythonの基本-2",
              "text": "print() は引数の内容をコンソール（ターミナル）に______する関数で、プログラムのデバッグや出力に使用されます。",
              "options": [
                {
                  "id": "a",
                  "text": "表示",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "ファイルに保存",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "暗号化",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "メモリに記憶",
                  "correct": false
                }
              ],
              "explanation": "print() は渡した値を標準出力に表示します。開発中に変数の中身や処理の到達点を確認する、最も手軽な手段です。カンマで区切って複数の値を並べられ、sep や end で区切り文字と行末を変更できます。",
              "hint": "プログラムの途中経過を目で確かめたいとき、いちばん手軽に使える関数です。",
              "example": "売上を集計するスクリプトの途中で print(total) を入れ、計算が思った通りに進んでいるかをターミナルで確かめます。"
            },
            {
              "id": "q-beg-Pythonの基本-3",
              "text": "# で始まるコメントはプログラムの説明文で、インタプリタに______、コードの理解と保守に重要な役割です。",
              "options": [
                {
                  "id": "a",
                  "text": "実行されません",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "最初に実行されます",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "複数回実行されます",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "サーバーに送信されます",
                  "correct": false
                }
              ],
              "explanation": "# から行末まではコメントで、インタプリタは実行時に読み飛ばします。動作には影響しないため、なぜその処理が必要なのかという背景を残す用途に使います。複数行の説明には、関数やクラスの先頭に置く docstring を使います。",
              "hint": "# を付けた行は、実行結果に何の影響も与えません。誰のために書かれているのかを考えてみましょう。",
              "example": "「# 消費税率は2019年10月の改定に合わせて10%」のように、数字の理由を書き残しておくと、半年後の自分やチームの人が迷いません。"
            },
            {
              "id": "q-beg-Pythonの基本-4",
              "text": "Python における変数と型の扱いを正しく説明しているのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "変数は値を入れる名前で、型は代入された値から自動的に決まる",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "変数を使う前に、開発者が明示的に型を指定する必要がある",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "変数は型を宣言してからでなければ使用できない",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "変数の型はサーバー側で判定される",
                  "correct": false
                }
              ],
              "explanation": "Python は動的型付けの言語で、代入された値から型が自動的に決まります。事前の型宣言は不要で、同じ変数に別の型の値を入れ直すこともできます。型ヒントを書くこともできますが、これは読みやすさと静的解析のためのもので、実行時に強制されるわけではありません。",
              "hint": "x = 10 と書くとき、int と書き添える必要があったかどうかを思い出してみましょう。",
              "example": "CSVから読み込んだ値をそのまま変数に入れると文字列になります。数値として計算したいときは型を意識して変換する必要がある、と気づけます。"
            }
          ],
          "qa": [
            {
              "question": "Python の型は動的ですが、型チェックは必要ですか？",
              "answer": "はい。大規模プロジェクトでは型ヒント（type hints）を使う。def greet(name: str) -> str: と書くで意図明確。MyPy で静的チェック可能。Google、Meta など大手は型チェック必須。",
              "relatedTopics": [
                "制御フロー"
              ]
            }
          ]
        }
      ],
      "intermediate": [
        {
          "id": "python-intermediate-1",
          "title": "制御フロー",
          "content": "制御フローについて学びます。重要なトピック：if文, ループ, break/continue",
          "questions": [
            {
              "id": "q-int-制御フロー-1",
              "text": "if 文で複数の条件を順に判定したいとき、2つ目以降の条件に使うキーワードは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "elif",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "else if",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "elseif",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "switch",
                  "correct": false
                }
              ],
              "explanation": "Python では2つ目以降の条件分岐に elif を使います。else if や elseif は構文エラーになり、switch 文は Python 3.10 未満には存在しません（3.10 以降は match 文が使えます）。elif は何個でも並べられ、どれにも当てはまらない場合の処理を else に書きます。",
              "hint": "Python は else if を1語に縮めた独自のキーワードを使います。",
              "example": "テストの点数から成績を付けるとき、if 80点以上なら「A」、elif 60点以上なら「B」、else は「C」のように、上から順に条件を判定します。"
            },
            {
              "id": "q-int-制御フロー-2",
              "text": "range(1, 5) を for 文で回したとき、実際に取り出される値は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "1, 2, 3, 4（終了値の 5 は含まれない）",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "1, 2, 3, 4, 5（開始値と終了値の両方を含む）",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "0, 1, 2, 3, 4（0 から数え始める）",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "5, 4, 3, 2, 1（終了値から逆順に並ぶ）",
                  "correct": false
                }
              ],
              "explanation": "range(開始, 終了) は開始値を含み、終了値は含みません。range(1, 5) は 1, 2, 3, 4 の4個を返します。引数が1つの range(5) は 0 から 4 になり、第3引数で増分を指定できます。要素数は「終了 − 開始」で求められます。",
              "hint": "range は開始値を含み、終了値を含みません。要素数は 5 − 1 で求められます。",
              "example": "請求書を1番から10番まで連番で作るとき、range(1, 11) のように「終わりの数＋1」を指定します。"
            },
            {
              "id": "q-int-制御フロー-3",
              "text": "ループの中で break と continue を使ったとき、それぞれの動作は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "break はループ全体を抜け、continue は次の繰り返しへ進む",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "break は次の繰り返しへ進み、continue はループ全体を抜ける",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "どちらもループ全体を抜けるが、break だけ戻り値を返す",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "どちらも次の繰り返しへ進むが、continue だけ条件を再評価する",
                  "correct": false
                }
              ],
              "explanation": "break はループそのものを終了して次の処理へ移ります。continue は残りの処理を飛ばして次の繰り返しに進みます。目的の要素を見つけて打ち切りたいときは break、条件に合わない要素だけ読み飛ばしたいときは continue を使います。",
              "hint": "探し物が見つかった時点でループをやめたいのはどちらでしょうか。読み飛ばしたいだけならもう一方です。",
              "example": "フォルダの中のファイルを順に調べ、目的のファイルが見つかったら break で探索を終わらせます。隠しファイルは continue で飛ばします。"
            },
            {
              "id": "q-int-制御フロー-4",
              "text": "if x: と書いたとき、x が空のリスト [] であれば条件は______と判定されます。",
              "options": [
                {
                  "id": "a",
                  "text": "偽（空のリストは偽として扱われる）",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "真（リストが存在するため真になる）",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "エラー（真偽値以外は判定できない）",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "None（判定結果が未定義になる）",
                  "correct": false
                }
              ],
              "explanation": "Python は真偽値以外も条件として評価でき、0、空文字列、空のリストや辞書、None は偽として扱われます。それ以外の値は真です。そのため if items: と書くだけで「中身があるか」を判定できます。要素数を明示したい場合は len(items) > 0 と書きます。",
              "hint": "Python では 0、空文字、空リスト、None などが偽として扱われます。",
              "example": "検索結果のリストが空のとき、if results: の判定で「該当するデータはありません」と表示を切り替えられます。"
            }
          ]
        }
      ],
      "advanced": [
        {
          "id": "python-advanced-1",
          "title": "関数とモジュール",
          "content": "関数とモジュールについて学びます。重要なトピック：関数定義, パラメータ, リターン値",
          "questions": [
            {
              "id": "q-adv-関数とモジュール-1",
              "text": "関数を定義するときに使うキーワードと、処理のまとまりを示す方法の組み合わせは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "def を使い、インデントで処理の範囲を示す",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "function を使い、波かっこで処理の範囲を囲む",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "def を使い、波かっこで処理の範囲を囲む",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "func を使い、end で処理の終わりを示す",
                  "correct": false
                }
              ],
              "explanation": "Python の関数は def 名前(引数): で定義し、その下のインデントされた行が関数の中身になります。波かっこは使わず、字下げの深さがそのままブロックの範囲を表します。インデントが揃っていないと IndentationError になります。",
              "hint": "Python は他の多くの言語と違い、かっこではなく字下げでブロックを表します。",
              "example": "「売上CSVを読み込む」「合計を出す」「グラフにする」をそれぞれ def で関数に分けておくと、どこで問題が起きているかを探しやすくなります。"
            },
            {
              "id": "q-adv-関数とモジュール-2",
              "text": "引数にデフォルト値を設定した def greet(name, greeting=\"こんにちは\") を greet(\"田中\") と呼び出すと______になります。",
              "options": [
                {
                  "id": "a",
                  "text": "greeting には \"こんにちは\" が使われる",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "引数が足りずエラーになる",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "greeting は None になる",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "name と greeting の両方に \"田中\" が入る",
                  "correct": false
                }
              ],
              "explanation": "デフォルト値を持つ引数は、呼び出し時に省略するとその値が使われます。greet(\"田中\") では greeting が \"こんにちは\" になります。デフォルト値を持つ引数は、持たない引数より後ろに並べる必要があります。なお可変オブジェクトをデフォルト値にすると呼び出し間で共有されるため避けます。",
              "hint": "デフォルト値は「渡されなかったときに使われる値」です。",
              "example": "メール送信の関数で、件名を指定しなければ「お知らせ」が使われるようにしておくと、ほとんどの呼び出しで件名を書かずに済みます。"
            },
            {
              "id": "q-adv-関数とモジュール-3",
              "text": "return を書かずに処理を終えた関数を変数に代入すると、その変数の中身は______になります。",
              "options": [
                {
                  "id": "a",
                  "text": "None",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "0",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "空文字列",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "最後に評価した値",
                  "correct": false
                }
              ],
              "explanation": "return を書かない関数、または値を伴わない return で終わる関数は None を返します。そのため戻り値を使うつもりの関数で return を書き忘れると、後続の処理で None に対する操作となりエラーの原因になります。複数の値を返したい場合はタプルにまとめて返します。",
              "hint": "「何も返さない」ことを表す専用の値が Python にはあります。",
              "example": "計算結果を返すつもりの関数で return を書き忘れ、結果が None になった。そんなときに原因をすぐ見抜けます。"
            },
            {
              "id": "q-adv-関数とモジュール-4",
              "text": "別ファイルに書いた関数を使いたいとき、必要になるのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "import でそのモジュールを読み込む",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "そのファイルを同じフォルダに置くだけでよい",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "関数をすべて1つのファイルにコピーする",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "関数名の先頭に module_ を付ける",
                  "correct": false
                }
              ],
              "explanation": "モジュールは import で読み込んで初めて使えます。import utils と書けば utils.func() の形で、from utils import func と書けば func() の形で呼び出せます。同じフォルダに置くだけでは名前空間に取り込まれず、NameError になります。",
              "hint": "同じフォルダにあっても、読み込む宣言がなければ名前は見つかりません。",
              "example": "日付の計算処理を utils.py にまとめ、売上集計スクリプトと勤怠集計スクリプトの両方から import して使い回します。"
            }
          ]
        }
      ],
      "projects": {
        "beginner": [
          {
            "id": "python-project-beginner-1",
            "title": "Python 初級プロジェクト",
            "content": "変数・型・print を使って、入力を受け取り結果を表示する小さなプログラムを作りながら確認します。",
            "questions": [
              {
                "id": "q-beg-Python初級プロジェクト-1",
                "text": "input() で受け取った年齢を数値として計算に使いたいとき、必要な処理は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "int() で整数に変換する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "str() で文字列に変換する",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "そのまま計算に使える",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "print() で表示してから使う",
                    "correct": false
                  }
                ],
                "explanation": "input() は入力内容を常に文字列として返します。そのまま足し算すると文字列の連結になったり、比較でエラーになったりします。int() で整数に、float() で小数に変換してから計算します。数値でない文字列を渡すと ValueError になるため、try / except で受け止めると安全です。",
                "hint": "input() が返す値の型を type() で確かめてみましょう。",
                "example": "「生まれた年を入力すると年齢を計算する」スクリプトで、input() で受け取った \"1995\" を int() で数値にしてから、今年から引き算します。"
              },
              {
                "id": "q-beg-Python初級プロジェクト-2",
                "text": "計算結果を「合計は 1200 円です」の形で表示したいとき、簡潔に書ける方法は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "f文字列を使い、f\"合計は {total} 円です\" と書く",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "文字列と数値を + でつなぐ",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "print に値をカンマで渡して改行を調整する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "数値を1文字ずつ取り出して連結する",
                    "correct": false
                  }
                ],
                "explanation": "f文字列は文字列リテラルの前に f を付け、{} の中に変数や式を書ける記法です。型変換を明示しなくても値が文字列化されるため読みやすくなります。+ でつなぐ場合は数値を str() で変換しないと TypeError になります。",
                "hint": "変数を文字列の中に直接埋め込める記法があります。",
                "example": "請求書を作るスクリプトで、f\"{name}様 ご請求額は {total:,} 円です\" と書くと、変数を埋め込んだ文章を読みやすく作れます。"
              },
              {
                "id": "q-beg-Python初級プロジェクト-3",
                "text": "入力が数値でなかったときにプログラムを止めないためには______を使います。",
                "options": [
                  {
                    "id": "a",
                    "text": "try / except で変換の失敗を受け止める",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "if 文で変数が None かどうかを調べる",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "入力を必ず str() に変換する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "コメントで注意書きを残す",
                    "correct": false
                  }
                ],
                "explanation": "int(\"abc\") は ValueError を送出してプログラムを停止させます。try の中で変換を行い、except ValueError で受け止めれば、入力し直しを促すなどの処理を続けられます。None の判定では変換の失敗を捉えられません。",
                "hint": "例外が起きたときに、その場で処理を引き継ぐ構文があります。",
                "example": "数量の入力に「三」と打たれてもエラーで止まらず、「数字で入力してください」と表示してもう一度聞き直せます。"
              },
              {
                "id": "q-beg-Python初級プロジェクト-4",
                "text": "同じ「税込価格を求める」計算を何度も書いている場合、整理する方法として適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "関数にまとめて、必要な場所から呼び出す",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "コードをコピーして各所に貼り付ける",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "計算式を1行に詰めて書く",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "変数名を短くして行数を減らす",
                    "correct": false
                  }
                ],
                "explanation": "同じ処理を関数にまとめれば、修正が1か所で済み、名前によって意図も伝わります。コピーして貼り付けると、税率の変更時に直し漏れが起きます。1行に詰めたり変数名を短くしたりしても、重複そのものは解消しません。",
                "hint": "税率が変わったとき、何か所を直すことになるかを考えてみましょう。",
                "example": "レシート集計・見積もり・請求書の3つのスクリプトで同じ税込み計算をしているとき、関数にまとめておけば、税率が変わっても1か所を直すだけで済みます。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "python-project-intermediate-1",
            "title": "Python 中級プロジェクト",
            "content": "条件分岐とループを使って、データの集計と絞り込みを行う処理を作りながら確認します。",
            "questions": [
              {
                "id": "q-int-Python中級プロジェクト-1",
                "text": "リストの中から条件に合う要素だけを集めるとき、Python らしく簡潔に書けるのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "リスト内包表記（[x for x in items if 条件]）",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "空のリストを作り、for と append で追加する",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "while 文で添字を進めながら取り出す",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "sort で並べ替えてから先頭を取り出す",
                    "correct": false
                  }
                ],
                "explanation": "リスト内包表記は繰り返しと条件をひとつの式で書ける記法で、意図が読み取りやすく実行も高速です。append を使うやり方でも同じ結果は得られますが行数が増えます。while は添字の管理が必要でミスが起きやすく、sort は並べ替えであって絞り込みではありません。",
                "hint": "1行で「繰り返し」と「絞り込み」をまとめて書ける記法があります。",
                "example": "社員名簿から「勤続10年以上の人」だけを [p for p in staff if p[\"years\"] >= 10] の1行で取り出し、表彰リストを作ります。"
              },
              {
                "id": "q-int-Python中級プロジェクト-2",
                "text": "辞書に対して for key, value in データ.items() と書くと、取り出せるのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "キーと値の両方",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "キーのみ",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "値のみ",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "辞書の要素数",
                    "correct": false
                  }
                ],
                "explanation": "items() はキーと値の組を順に返すため、両方を同時に受け取れます。keys() はキーだけ、values() は値だけを返します。辞書をそのまま for で回した場合はキーのみが得られるため、値も必要なら items() を使います。",
                "hint": "keys() と values() を同時に扱いたいときに使うメソッドです。",
                "example": "商品名と在庫数の辞書をループし、「りんご：残り3個」のように名前と数を並べた在庫レポートを作ります。"
              },
              {
                "id": "q-int-Python中級プロジェクト-3",
                "text": "集計処理をループで書いたとき、合計を入れる変数の初期化を忘れると______が起きます。",
                "options": [
                  {
                    "id": "a",
                    "text": "NameError（未定義の変数を参照したため）",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "ZeroDivisionError（0 で割ったため）",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "IndexError（範囲外を参照したため）",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "エラーは起きず 0 として扱われる",
                    "correct": false
                  }
                ],
                "explanation": "total += x は total の現在値を読み取るため、事前に total = 0 と初期化していないと NameError になります。Python は未定義の名前を自動で 0 にはしません。ループの前に必ず初期値を用意します。",
                "hint": "Python は宣言されていない名前を自動的に 0 とはみなしません。",
                "example": "月ごとの売上を足し合わせる前に total = 0 を書き忘れると、エラーで止まります。集計処理では最初に合計の入れ物を用意します。"
              },
              {
                "id": "q-int-Python中級プロジェクト-4",
                "text": "ループの中でリストから要素を削除すると、要素が飛ばされることがあります。安全な方法は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "条件に合う要素だけを集めた新しいリストを作る",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "ループの中で remove を呼ぶ",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "ループの回数を1回増やす",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "削除のたびに添字を1つ戻す",
                    "correct": false
                  }
                ],
                "explanation": "走査中に元のリストを変更すると添字がずれ、要素が読み飛ばされます。内包表記やフィルタで新しいリストを作り、それを使う（または元の変数に代入し直す）のが安全です。添字を手動で調整する方法は複雑になり、間違いの温床になります。",
                "hint": "走査している最中に元の列の長さが変わると、位置がずれます。",
                "example": "メールの一覧から迷惑メールを取り除くとき、元のリストから消していくのではなく、残したいメールだけを集めた新しいリストを作ります。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "python-project-advanced-1",
            "title": "Python 上級プロジェクト",
            "content": "関数とモジュールの設計を踏まえ、再利用しやすく壊れにくいコードの書き方を確認します。",
            "questions": [
              {
                "id": "q-adv-Python上級プロジェクト-1",
                "text": "def add_item(item, items=[]) のようにリストをデフォルト値にすると______という問題が起きます。",
                "options": [
                  {
                    "id": "a",
                    "text": "同じリストが呼び出し間で共有され、前回の内容が残る",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "呼び出すたびにエラーになる",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "リストが毎回コピーされ、処理が遅くなる",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "デフォルト値が無視され None になる",
                    "correct": false
                  }
                ],
                "explanation": "デフォルト値は関数の定義時に一度だけ評価され、以降の呼び出しで同じオブジェクトが使い回されます。そのためリストに追加した内容が次の呼び出しにも残ります。items=None を既定にし、関数の中で None のときに新しいリストを作るのが定石です。",
                "hint": "デフォルト値が評価されるのは、関数を定義したときでしょうか、呼び出すたびでしょうか。",
                "example": "「カートに商品を追加する関数」を呼ぶたびに、前のお客さんの商品がカートに残っている、という不思議なバグの原因がこれです。初期値は None にして、関数の中で新しいリストを作ります。"
              },
              {
                "id": "q-adv-Python上級プロジェクト-2",
                "text": "モジュールに書いた動作確認用のコードが、import しただけで実行されてしまうのを防ぐには______します。",
                "options": [
                  {
                    "id": "a",
                    "text": "if __name__ == \"__main__\": の中に書く",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "コードを関数の外に出す",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "ファイル名の先頭に _ を付ける",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "コメントアウトして残す",
                    "correct": false
                  }
                ],
                "explanation": "__name__ は直接実行されたときに \"__main__\" になり、import されたときはモジュール名になります。この判定の中に動作確認用の処理を置けば、import 時には実行されません。ファイル名や関数の位置では制御できず、コメントアウトでは実行できなくなります。",
                "hint": "直接実行されたときだけ真になる特別な変数があります。",
                "example": "便利な関数をまとめた tools.py に動作確認のコードを書いても、if __name__ == \"__main__\": の中に入れておけば、他のスクリプトから import したときには動きません。"
              },
              {
                "id": "q-adv-Python上級プロジェクト-3",
                "text": "ファイルを開いて読み込む処理で、閉じ忘れを防げる書き方は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "with open(...) as f: を使う",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "open した後に必ず close を書く",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "読み込み後に変数へ None を代入する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "ファイルサイズを事前に確認する",
                    "correct": false
                  }
                ],
                "explanation": "with は処理の途中で例外が起きても、ブロックを抜けるときに必ずファイルを閉じます。close を手で書く方法は、例外が起きた経路で呼ばれず閉じ忘れが残ります。None の代入やサイズ確認は後始末とは無関係です。",
                "hint": "ブロックを抜けるときに自動で後始末をしてくれる構文があります。",
                "example": "毎日のログファイルを読み込むスクリプトで with open() を使うと、途中でエラーが起きてもファイルが確実に閉じられます。"
              },
              {
                "id": "q-adv-Python上級プロジェクト-4",
                "text": "関数が想定しない値を受け取ったとき、呼び出し側に原因を伝える方法として適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "適切な例外を送出する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "None を返して処理を続ける",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "print で警告を出して続行する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "何もせず黙って既定値を使う",
                    "correct": false
                  }
                ],
                "explanation": "不正な入力には raise ValueError(...) のように例外を送出し、何が問題かを明示します。None を返すと呼び出し側が確認を忘れたときに原因の遠い場所で落ち、print は処理系によっては見過ごされます。黙って既定値を使うと誤った結果がそのまま流れていきます。",
                "hint": "呼び出し側が「失敗した」と確実に気づけるのはどれでしょうか。",
                "example": "金額の計算関数にマイナスの値が渡されたとき、raise ValueError(\"金額は0以上で指定してください\") と知らせれば、呼び出し側が原因をすぐ見つけられます。"
              }
            ]
          }
        ]
      },
      "basics": {
        "beginner": [
          {
            "id": "python-basics-beginner",
            "title": "Python の基本：変数・型・表示・入力",
            "content": "Python はシンプルな文法で、作業の自動化やデータ処理によく使われます。まずは値の扱い方と、入力・表示の基本を押さえましょう。",
            "sections": [
              {
                "heading": "変数と型は自動で決まる",
                "body": "Python では、変数に値を代入するだけで使えます。型（int：整数、float：小数、str：文字列、bool：真偽値）は、代入した値から自動で決まります。type() で確かめられます。",
                "code": "price = 1200        # int\nrate = 0.1          # float\nname = \"りんご\"      # str\nin_stock = True     # bool\nprint(type(price))  # <class 'int'>"
              },
              {
                "heading": "print() で結果を確かめる",
                "body": "print() は値を画面（ターミナル）に表示します。完成したプログラムの出力だけでなく、途中の値を確かめるデバッグにも使います。f文字列を使うと、文章の中に変数を埋め込めます。",
                "code": "total = 1200\nprint(f\"合計は {total:,} 円です\")  # 合計は 1,200 円です"
              },
              {
                "heading": "コメントは「なぜ」を書く",
                "body": "# から行末まではコメントで、実行されません。コードを読めば分かる「何をしているか」より、「なぜそうしているか」を書いておくと、後で読む人の助けになります。",
                "code": "TAX_RATE = 0.1  # 2019年10月の改定に合わせた税率"
              },
              {
                "heading": "input() の値は必ず文字列",
                "body": "input() で受け取った値は、数字を入力しても文字列（str）です。計算に使うときは int() や float() で数値に変換します。",
                "code": "age = int(input(\"年齢を入力: \"))\nprint(age + 1)"
              },
              {
                "heading": "失敗に備える try / except と、まとめる def",
                "body": "数字以外が入力されると int() はエラーでプログラムが止まります。try / except で失敗を受け止めれば、メッセージを出して続けられます。同じ計算を何度も書くときは、def で関数にまとめます。",
                "code": "def with_tax(price):\n    return int(price * 1.1)\n\ntry:\n    price = int(input(\"価格: \"))\n    print(with_tax(price))\nexcept ValueError:\n    print(\"数字で入力してください\")"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "python-basics-intermediate",
            "title": "条件分岐・繰り返し・データのまとめ方",
            "content": "条件によって処理を変える、同じ処理を繰り返す、たくさんのデータをまとめて扱う。自動化の中心になる書き方を学びます。",
            "sections": [
              {
                "heading": "if / elif / else で条件を順に判定",
                "body": "条件は上から順に調べられ、最初に当てはまったものだけが実行されます。範囲で分けるときは、厳しい条件から順に書きます。Python ではインデント（字下げ）で処理のまとまりを表します。",
                "code": "if score >= 80:\n    grade = \"A\"\nelif score >= 60:\n    grade = \"B\"\nelse:\n    grade = \"C\""
              },
              {
                "heading": "for と range",
                "body": "for はリストなどの要素を順に取り出して繰り返します。range(1, 5) は 1, 2, 3, 4 を作り、終わりの数は含みません。break でループ全体を抜け、continue で次の繰り返しに進みます。",
                "code": "for i in range(1, 11):   # 1〜10\n    if i % 2 == 0:\n        continue          # 偶数は飛ばす\n    print(i)"
              },
              {
                "heading": "空のリストは「偽」",
                "body": "if の条件では、空のリスト []、空の文字列 \"\"、0、None は偽として扱われます。「データがあるかどうか」を if results: と短く書けます。",
                "code": "results = search(keyword)\nif results:\n    print(f\"{len(results)}件見つかりました\")\nelse:\n    print(\"該当するデータはありません\")"
              },
              {
                "heading": "辞書とリスト内包表記",
                "body": "辞書（dict）は「キーと値」の組でデータを持ちます。.items() でキーと値を同時に取り出せます。リスト内包表記を使うと、条件に合う要素を集める処理を1行で書けます。",
                "code": "stock = {\"りんご\": 3, \"みかん\": 0, \"ぶどう\": 5}\nfor name, count in stock.items():\n    print(f\"{name}：残り{count}個\")\n\nin_stock = [name for name, count in stock.items() if count > 0]"
              },
              {
                "heading": "ループで集計するときの注意",
                "body": "合計を求めるなら、ループの前に total = 0 のように入れ物を用意します。また、ループ中のリストから要素を削除すると、要素が詰まって飛ばされることがあります。残したい要素だけを集めた新しいリストを作るのが安全です。",
                "code": "total = 0\nfor price in prices:\n    total += price\n\nkept = [m for m in mails if not m.is_spam]  # 削除ではなく選び直す"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "python-basics-advanced",
            "title": "関数とモジュールで整理し、安全に動かす",
            "content": "処理が大きくなったら、関数やファイルに分けて整理します。あわせて、思わぬバグを防ぐ書き方と、エラーの伝え方を学びます。",
            "sections": [
              {
                "heading": "関数の定義と戻り値",
                "body": "def で関数を定義し、インデントで処理の範囲を示します。return で結果を返します。return を書かずに終わった関数は None を返すので、結果を使うつもりなら return を忘れないようにします。",
                "code": "def total_price(prices):\n    return sum(prices)\n\nresult = total_price([100, 200])  # 300"
              },
              {
                "heading": "デフォルト引数と、その落とし穴",
                "body": "引数に初期値を設定すると、呼び出し時に省略できます。ただし、リストや辞書のように中身を変えられる値を初期値にすると、関数を呼ぶたびに同じリストが使い回され、前回の内容が残ってしまいます。初期値は None にして、関数の中で新しく作ります。",
                "code": "def add_item(item, items=None):\n    if items is None:\n        items = []\n    items.append(item)\n    return items"
              },
              {
                "heading": "モジュールに分けて import する",
                "body": "関数を別ファイル（モジュール）にまとめると、複数のスクリプトから import して使い回せます。モジュールに書いた動作確認用のコードは if __name__ == \"__main__\": の中に入れておくと、import されたときには実行されません。",
                "code": "# utils.py\ndef with_tax(price):\n    return int(price * 1.1)\n\nif __name__ == \"__main__\":\n    print(with_tax(100))  # 直接実行したときだけ動く\n\n# main.py\nfrom utils import with_tax"
              },
              {
                "heading": "ファイルは with で開く",
                "body": "with open(...) as f: で開いたファイルは、ブロックを抜けると自動で閉じられます。途中でエラーが起きても確実に閉じられるので、閉じ忘れを防げます。",
                "code": "with open(\"sales.csv\", encoding=\"utf-8\") as f:\n    for line in f:\n        print(line.strip())"
              },
              {
                "heading": "おかしな値は例外で知らせる",
                "body": "関数が想定外の値を受け取ったとき、黙って変な結果を返すと、原因の発見が遅れます。raise で例外を送出し、何が問題かをメッセージで伝えます。",
                "code": "def with_tax(price):\n    if price < 0:\n        raise ValueError(\"価格は0以上で指定してください\")\n    return int(price * 1.1)"
              }
            ]
          }
        ]
      },
      "thinking": {
        "beginner": [
          {
            "id": "python-thinking-beginner",
            "title": "小さな自動化スクリプトを組み立てる",
            "content": "正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。",
            "prompts": [
              {
                "id": "python-thinking-beginner-1",
                "scenario": "「商品の価格と個数を入力すると、税込みの合計金額を表示する」スクリプトを作ったところ、次のエラーで止まりました。TypeError: can't multiply sequence by non-int of type 'str'",
                "code": "price = input(\"価格: \")\ncount = input(\"個数: \")\ntotal = price * count * 1.1\nprint(\"合計は\" + total + \"円です\")",
                "question": "エラーの原因を説明し、正しく動くように直したコードの考え方を書いてください。数字以外が入力された場合も考えてください。",
                "checkpoints": [
                  "input() の値が文字列で、そのまま掛け算しているのが原因だと説明している",
                  "int() で数値に変換してから計算する直し方を示している",
                  "最後の print で数値と文字列を + でつなげない（f文字列などを使う）ことに触れている",
                  "数字以外が入力されたときに try / except で受け止める工夫を挙げている"
                ],
                "modelAnswer": "input() で受け取った値は、数字を入力しても文字列です。文字列同士の掛け算はできないため、price * count の時点でエラーになりました。直すには、price = int(input(\"価格: \")) のように int() で整数に変換してから計算します。また、税込み金額は小数になることがあるので int(price * count * 1.1) で整数にします。最後の行も、数値と文字列は + でつなげないので、print(f\"合計は {total:,} 円です\") のように f文字列で書きます。さらに、数字以外が入力されると int() で ValueError が起きて止まるので、try / except ValueError で受け止めて「数字で入力してください」と表示すると、使う人に親切です。",
                "tip": "エラーメッセージの最後の行には「何の型で、何ができなかったか」が書かれています。英語でも単語を拾えば原因の手がかりになります。"
              },
              {
                "id": "python-thinking-beginner-2",
                "scenario": "お店の会計係から「レシートの合計」「見積書の合計」「請求書の合計」の3つのスクリプトで、どれも同じ「税込み金額を求める計算」をコピーして書いている、と相談されました。来月から一部の商品の税率が変わる予定です。",
                "question": "どう整理するのがよいかを、その理由と、整理後に税率が変わったときの対応も含めて書いてください。",
                "checkpoints": [
                  "同じ計算を関数にまとめることを提案している",
                  "税率を関数の引数や定数にして、変更しやすくしている",
                  "コピーのままだと修正漏れが起きる、という問題点を説明している",
                  "3つのスクリプトから共通して使う方法（1つのファイルにまとめて読み込む等）に触れている"
                ],
                "modelAnswer": "税込み計算を def with_tax(price, rate=0.1): return int(price * (1 + rate)) のような関数にまとめることを提案します。今のようにコピーしていると、税率が変わったときに3か所すべてを直す必要があり、1か所でも直し忘れると書類ごとに金額が食い違います。関数にしておけば、直すのは1か所だけです。税率を引数にしておけば、軽減税率の商品は with_tax(price, 0.08) と呼び分けることもできます。さらに、この関数を tax.py のような1つのファイルに置き、3つのスクリプトから読み込んで使えば、計算のルールがいつも1つにそろいます。",
                "tip": "同じ処理を2回コピーしたくなったら、関数にまとめるタイミングです。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "python-thinking-intermediate",
            "title": "データを集計・整理する処理を考える",
            "content": "実際のデータ処理では、条件分岐と繰り返しを組み合わせて考えます。処理の手順と、つまずきやすい点まで書いてみましょう。",
            "prompts": [
              {
                "id": "python-thinking-intermediate-1",
                "scenario": "小テストの点数のリストから、平均点と、評価ごと（80点以上はA、60点以上はB、それ未満はC）の人数を出す処理を作ります。点数が1件もない（空のリスト）こともあります。",
                "code": "scores = [85, 72, 90, 55, 64, 78]",
                "question": "どのような手順で処理を書くか、つまずきやすい点も含めて説明してください。",
                "checkpoints": [
                  "if / elif / else を、厳しい条件（80点以上）から順に書く理由を説明している",
                  "評価ごとの人数を数える入れ物（辞書など）をループの前に用意している",
                  "平均点の計算で、空のリストのときに0で割らないよう確認している",
                  "処理の手順（初期化 → ループで判定・集計 → 結果の表示）が順序立てて書かれている"
                ],
                "modelAnswer": "まず、評価ごとの人数を数える counts = {\"A\": 0, \"B\": 0, \"C\": 0} をループの前に用意します。次に for score in scores: で1人ずつ取り出し、if score >= 80 なら A、elif score >= 60 なら B、else なら C の人数を1増やします。条件は厳しいものから順に書く必要があります。もし先に score >= 60 を書くと、90点の人も B になってしまうからです。平均点は sum(scores) / len(scores) で求めますが、リストが空だと 0 で割ることになりエラーになります。そこで if scores: で中身があるときだけ計算し、空なら「データがありません」と表示します。最後に平均点と各評価の人数を表示します。",
                "tip": "集計の処理は「入れ物を用意する → 1件ずつ判定して足す → 最後に表示する」の3段階に分けて考えると、抜けが減ります。"
              },
              {
                "id": "python-thinking-intermediate-2",
                "scenario": "受信メールのリストから迷惑メールを取り除く処理を書いたところ、迷惑メールが2件続いていると、片方が残ってしまいます。",
                "code": "for mail in mails:\n    if mail[\"spam\"]:\n        mails.remove(mail)",
                "question": "なぜ迷惑メールが残ってしまうのかを説明し、安全な書き方を2つ以上比べてください。",
                "checkpoints": [
                  "ループ中に削除すると要素が前に詰まり、次の要素が飛ばされる仕組みを説明している",
                  "リスト内包表記で「残したいものだけ」を集めた新しいリストを作る方法を示している",
                  "コピーに対してループする、filter を使うなど、別の方法とも比べている",
                  "どの方法を選ぶか、理由（読みやすさ・元データを壊さない等）を述べている"
                ],
                "modelAnswer": "for 文は「今何番目か」を数えながら進みます。2番目の迷惑メールを削除すると、後ろの要素が1つずつ前に詰まり、3番目にあった迷惑メールが2番目に移ります。しかしループは次に3番目を見るので、詰まって移動したメールは調べられずに残ってしまいます。安全な方法の1つ目は、リスト内包表記で mails = [m for m in mails if not m[\"spam\"]] と、残したいメールだけを集めた新しいリストを作る方法です。2つ目は for mail in mails[:]: のようにコピーに対してループし、元のリストから削除する方法です。3つ目は filter() を使う方法です。私は1つ目を選びます。「迷惑メール以外を残す」という意図が1行で読み取れ、ループ中に元のリストを変える危うさもないからです。",
                "tip": "「ループしながら、そのリスト自体を変える」コードを見つけたら、要注意のサインです。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "python-thinking-advanced",
            "title": "再利用しやすく、壊れにくい関数を設計する",
            "content": "作ったものを他の人や将来の自分が安心して使えるように、関数とモジュールを設計する練習です。理由まで書いてみましょう。",
            "prompts": [
              {
                "id": "python-thinking-advanced-1",
                "scenario": "ネットショップの注文処理で、カートに商品を追加する関数を作りました。テストで「2人目のお客さんのカートに、1人目のお客さんの商品が入っている」という不具合が見つかりました。",
                "code": "def add_to_cart(item, cart=[]):\n    cart.append(item)\n    return cart\n\ncart_a = add_to_cart(\"ペン\")\ncart_b = add_to_cart(\"ノート\")\nprint(cart_b)  # [\"ペン\", \"ノート\"] になってしまう",
                "question": "不具合の原因を、デフォルト引数の仕組みから説明し、直し方と、同じミスを防ぐための考え方を書いてください。",
                "checkpoints": [
                  "デフォルト値のリストは関数を定義したときに1回だけ作られ、呼び出しの間で共有されることを説明している",
                  "cart=None にして、関数の中で新しいリストを作る直し方を示している",
                  "リストや辞書のような「中身を変えられる値」を初期値にしない、という一般的な注意としてまとめている",
                  "テストで2回以上呼び出して確かめる、など防ぐための工夫に触れている"
                ],
                "modelAnswer": "Python では、デフォルト引数の値は関数を定義したときに1回だけ作られます。cart=[] のリストも1つしかなく、引数を省略して呼ぶたびに同じリストが使い回されます。そのため1回目に追加した「ペン」が残ったまま、2回目の呼び出しで「ノート」が足されました。直し方は、def add_to_cart(item, cart=None): とし、関数の中で if cart is None: cart = [] と新しいリストを作ることです。これで呼び出すたびに別のカートになります。一般的な注意として、リストや辞書のように中身を変えられる値はデフォルト値にしない、と覚えておきます。また、こうした不具合は1回の呼び出しでは見つからないので、テストでは同じ関数を2回以上呼んで結果が混ざらないかを確かめます。",
                "tip": "「前回の値が残っている」不具合を見たら、共有されている入れ物がないかを探しましょう。"
              },
              {
                "id": "python-thinking-advanced-2",
                "scenario": "毎月の売上CSVを読み込んで集計する、200行ほどの1つのスクリプトがあります。今後、同じ「CSVの読み込み」と「税込み計算」を在庫管理のスクリプトでも使いたいと言われました。今のスクリプトは、ファイルを開いて閉じ忘れていることがあり、マイナスの金額が入っていても気づかず集計しています。",
                "question": "このスクリプトをどう整理し直すか、設計の方針を書いてください。",
                "checkpoints": [
                  "共通で使う処理を関数にし、別のモジュール（ファイル）に分ける方針を示している",
                  "モジュールの動作確認コードを if __name__ == \"__main__\": の中に入れることに触れている",
                  "with open() でファイルを確実に閉じる書き方を取り入れている",
                  "マイナスの金額などおかしな値を、raise で知らせる（または検出する）方針を示している"
                ],
                "modelAnswer": "まず、売上と在庫の両方で使う「CSVを読み込む関数」と「税込み計算の関数」を、csv_utils.py のような別のファイル（モジュール）に切り出します。売上集計のスクリプトと在庫管理のスクリプトは、どちらもそこから import して使います。モジュールに動作確認用のコードを書くときは if __name__ == \"__main__\": の中に入れ、import しただけでは動かないようにします。ファイルの読み込みは with open(path, encoding=\"utf-8\") as f: に書き換え、途中でエラーが起きても必ず閉じられるようにします。さらに、金額がマイナスなど想定外の値を見つけたら、raise ValueError(f\"{line_no}行目の金額が不正です\") のように例外を送出して処理を止め、どの行がおかしいかを伝えます。黙って集計を続けると、間違った数字のまま報告されてしまうからです。",
                "tip": "整理の方針は「何度も使うものは切り出す」「必ず後片付けする」「おかしな値は早めに止める」の3つで考えると、まとまりやすくなります。"
              }
            ]
          }
        ]
      }
    },
    "shortLabel": "Py"
  },
  {
    "id": "sql",
    "name": "SQL",
    "description": "データベースからデータを取り出し、追加・更新・集計するための基本を学びます",
    "icon": "fa-solid fa-database",
    "lessons": {
      "projects": {
        "beginner": [
          {
            "id": "sql-project-beginner-1",
            "title": "SQL 初級プロジェクト",
            "content": "顧客テーブルから、条件に合うデータを探しながら、取り出しの基本を確認します。",
            "questions": [
              {
                "id": "q-beg-SQL初級プロジェクト-1",
                "text": "名前に「田」を含む顧客を探すために、WHERE の中で使うのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "name CONTAINS '田'",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "name LIKE '%田%'",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "name = '%田%'",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "name HAS '田'",
                    "correct": false
                  }
                ],
                "explanation": "LIKE は、パターンに一致する文字列を探します。% は「任意の文字列」を表すので、'%田%' は、「田」を含むものすべてです。= では、% がただの文字として扱われ、部分一致にはなりません。",
                "hint": "部分一致の検索には、パターンを使える専用の演算子があります。",
                "example": "顧客の名簿から、名字に「田」が付く人を探したいとき、WHERE name LIKE '%田%' と書きます。先頭一致だけなら、'田%' とします。"
              },
              {
                "id": "q-beg-SQL初級プロジェクト-2",
                "text": "結果の最初の10行だけを取り出すために、末尾に付けるのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "TOP 10 を末尾に付ける",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "WHERE ROWNUM = 10",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "LIMIT 10",
                    "correct": true
                  },
                  {
                    "id": "d",
                    "text": "FIRST 10",
                    "correct": false
                  }
                ],
                "explanation": "LIMIT は、取り出す行数の上限を決めます。MySQL や PostgreSQL、SQLite などで使えます。SQL Server では TOP、Oracle では FETCH FIRST のように、データベースごとに書き方が異なる点に注意します。",
                "hint": "取り出す行数の上限を決めるキーワードです。",
                "example": "一覧画面で、最初の10件だけを表示したいときは、LIMIT 10 を使います。データが大量にあっても、先頭の10件だけを読み込めば済むので、画面が速く表示されます。"
              },
              {
                "id": "q-beg-SQL初級プロジェクト-3",
                "text": "顧客がどの都道府県に住んでいるかを、重複なく一覧にしたいときに使うのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "SELECT DISTINCT prefecture FROM customers;",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "SELECT UNIQUE prefecture FROM customers;",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "SELECT ONLY prefecture FROM customers;",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "SELECT prefecture FROM customers GROUP;",
                    "correct": false
                  }
                ],
                "explanation": "SELECT DISTINCT は、結果から重複する行を取り除きます。同じ都道府県が何度出てきても、1回だけ表示されます。重複を取り除かないときは、DISTINCT を付けません。",
                "hint": "同じ値の行を1つにまとめて、重複を取り除くキーワードがあります。",
                "example": "顧客がどの都道府県に住んでいるかを、重複なく一覧にしたいとき、SELECT DISTINCT prefecture を使います。選択肢のプルダウンを作るときにも便利です。"
              },
              {
                "id": "q-beg-SQL初級プロジェクト-4",
                "text": "20 歳以上、かつ 30 歳以下の顧客を取り出す書き方として、適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "WHERE age >= 20 OR age <= 30",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "WHERE age BETWEEN 20 AND 30",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "WHERE age > 20 AND age < 30",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "WHERE age IN (20, 30)",
                    "correct": false
                  }
                ],
                "explanation": "BETWEEN 20 AND 30 は、20 以上 30 以下（両端を含む）です。OR でつなぐと、ほぼ全員が対象になってしまいます。> と < では、20 と 30 が除かれます。IN は、列挙した値のどれかに一致するものです。",
                "hint": "BETWEEN は、両端の値を含む範囲を指定できます。",
                "example": "「20 代の顧客」を取り出したいとき、WHERE age BETWEEN 20 AND 29 と書きます。両端を含む範囲なので、29 歳までが対象です。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "sql-project-intermediate-1",
            "title": "SQL 中級プロジェクト",
            "content": "顧客と注文のデータを組み合わせて、売上の集計をしながら、JOIN と GROUP BY を確認します。",
            "questions": [
              {
                "id": "q-int-SQL中級プロジェクト-1",
                "text": "顧客ごとの注文の合計金額を求めるクエリの骨組みとして、正しいのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "SELECT customer_id, SUM(amount) FROM orders ORDER BY customer_id;",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "SELECT customer_id, SUM(amount) FROM orders GROUP BY customer_id;",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "SELECT customer_id, SUM(amount) FROM orders WHERE customer_id;",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "SELECT SUM(customer_id, amount) FROM orders;",
                    "correct": false
                  }
                ],
                "explanation": "SUM のような集計関数と、集計しない列（customer_id）を一緒に取り出すときは、その列で GROUP BY します。ORDER BY は並べ替えるだけで、まとめる働きはありません。",
                "hint": "「顧客ごと」にまとめて合計するには、グループ化が必要です。",
                "example": "「顧客ごとの累計購入額ランキング」を作るとき、orders を customer_id で GROUP BY し、SUM(amount) を求めて、ORDER BY SUM(amount) DESC で並べます。"
              },
              {
                "id": "q-int-SQL中級プロジェクト-2",
                "text": "注文が一度もない顧客を探すために、LEFT JOIN の後に付ける条件は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "WHERE orders.id = 0",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "WHERE orders.id = NULL",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "WHERE customers.id IS NULL",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "WHERE orders.id IS NULL",
                    "correct": true
                  }
                ],
                "explanation": "customers LEFT JOIN orders で、注文のない顧客の行は、orders 側の列がすべて NULL になります。そこで orders.id IS NULL の行だけに絞れば、注文のない顧客を取り出せます。= NULL では、常に一致しません。",
                "hint": "LEFT JOIN で、右のテーブルに一致する行がないとき、右側の列は何になるでしょうか。",
                "example": "「購入歴のない顧客にクーポンを送る」ときは、customers LEFT JOIN orders の結果から、WHERE orders.id IS NULL の顧客だけを取り出します。"
              },
              {
                "id": "q-int-SQL中級プロジェクト-3",
                "text": "月ごとの売上合計を求めるときに、まず必要になるのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "注文日から、年月の部分を取り出して、それで GROUP BY する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "注文日の列を、そのまま SUM する",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "注文を 1 件ずつ、手作業で数える",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "注文日を ORDER BY して、先頭の月だけを使う",
                    "correct": false
                  }
                ],
                "explanation": "日付をそのまま GROUP BY すると、日ごとの集計になります。月ごとにするには、年月の部分だけを取り出して（例えば DATE_TRUNC や、年月のフォーマット関数を使って）、それでグループ化します。関数の名前は、データベースごとに異なります。",
                "hint": "日付のままでは、日ごとに別のグループになってしまいます。",
                "example": "「月別の売上推移」のグラフを作るとき、注文日から年月を取り出して、GROUP BY し、SUM(amount) を求めます。日付のままでは、日別の集計になります。"
              },
              {
                "id": "q-int-SQL中級プロジェクト-4",
                "text": "顧客が複数回注文していても、顧客数を1回ずつ数えるための書き方は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "COUNT(customer_id)",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "COUNT(*)",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "SUM(customer_id)",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "COUNT(DISTINCT customer_id)",
                    "correct": true
                  }
                ],
                "explanation": "COUNT(DISTINCT 列名) は、重複を除いた値の数を数えます。COUNT(customer_id) や COUNT(*) は、行ごとに数えるので、同じ顧客の注文が複数あると、その回数分が数えられます。",
                "hint": "同じ顧客が、何行にもわたって出てくる場合を考えます。",
                "example": "「購入した顧客の人数」を知りたいときは、COUNT(DISTINCT customer_id) を使います。COUNT(*) では、注文の件数になってしまいます。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "sql-project-advanced-1",
            "title": "SQL 上級プロジェクト",
            "content": "運用中のデータを扱う場面で、性能と安全性の判断を確認します。",
            "questions": [
              {
                "id": "q-adv-SQL上級プロジェクト-1",
                "text": "注文テーブルの検索が遅いとき、最初に調べるべきなのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "遅い SQL の実行計画（EXPLAIN）を見て、インデックスが使われているかを確認する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "再起動して、様子を見る",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "すべての列に、インデックスを付ける",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "テーブルを、複数のファイルにコピーする",
                    "correct": false
                  }
                ],
                "explanation": "EXPLAIN で実行計画を見ると、インデックスが使われているか、全行を読んでいるかなどが分かります。原因が分かってから、WHERE や JOIN に使う列に、インデックスを足すなどの対策を行います。何でも付けると、書き込みが遅くなります。",
                "hint": "推測で対策する前に、データベースがどう処理しているかを見ます。",
                "example": "一覧画面が急に遅くなったとき、闇雲にインデックスを足す前に、EXPLAIN で実行計画を見て、全行を読んでいる箇所を見つけます。"
              },
              {
                "id": "q-adv-SQL上級プロジェクト-2",
                "text": "商品の在庫を減らしながら、注文を登録する処理で、トランザクションを使う理由は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "処理を、速くするため",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "SQL を、短く書くため",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "途中で失敗しても、在庫だけが減って注文が残らない、という矛盾を防ぐため",
                    "correct": true
                  },
                  {
                    "id": "d",
                    "text": "テーブルの構造を、変えるため",
                    "correct": false
                  }
                ],
                "explanation": "在庫の更新と注文の登録を、1つのトランザクションにすれば、片方が失敗したとき、ROLLBACK で両方を取り消せます。在庫が減ったのに注文が記録されない、といった矛盾を防げます。",
                "hint": "在庫の更新と、注文の登録の、どちらか一方だけが成功した状態を考えてみます。",
                "example": "決済処理で、在庫の更新と注文の登録のうち、片方だけが成功して止まると、返金や在庫の調整といった、後始末が大変になります。トランザクションで、一緒に確定させます。"
              },
              {
                "id": "q-adv-SQL上級プロジェクト-3",
                "text": "本番のデータに対して、条件付きで大量に UPDATE する前にすべきことは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "とりあえず実行して、結果を見てから考える",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "WHERE は、最後に付け足す",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "同じ WHERE 条件で SELECT して対象の行を確かめ、バックアップやトランザクションも用意する",
                    "correct": true
                  },
                  {
                    "id": "d",
                    "text": "夜中に、こっそり実行する",
                    "correct": false
                  }
                ],
                "explanation": "同じ WHERE で SELECT し、対象の行数と中身が意図どおりかを確かめます。そのうえで、バックアップを取り、トランザクションの中で実行して、結果が確認できてから COMMIT します。取り返しがつかなくなる前の備えです。",
                "hint": "取り消せない書き換えを、間違った範囲に実行したときの被害を考えます。",
                "example": "「割引対象の商品の価格を 10% 下げる」UPDATE を本番で実行する前に、同じ WHERE で SELECT して、対象の件数と中身を、必ず確かめます。"
              },
              {
                "id": "q-adv-SQL上級プロジェクト-4",
                "text": "WHERE 句の中で、インデックスが効きにくくなる書き方は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "WHERE id = 100",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "WHERE created_at >= '2026-01-01'",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "WHERE email = 'a@example.com'",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "WHERE LOWER(email) = 'a@example.com'（列に関数を適用している）",
                    "correct": true
                  }
                ],
                "explanation": "列に関数を適用すると、索引に保存されている値と比べられなくなり、全行を読むことになりがちです。条件は、列を加工する側ではなく、比較する値の側で合わせるのが基本です。必要なら、関数用のインデックスを作る方法もあります。",
                "hint": "索引は、列の値そのものをもとに作られています。",
                "example": "WHERE LOWER(email) = ... のように、列に関数を使うと、email のインデックスが効かず、全行を読むことになります。比較する値のほうで、大文字小文字をそろえます。"
              }
            ]
          }
        ]
      },
      "beginner": [
        {
          "id": "sql-beginner-1",
          "title": "データの取り出しと絞り込み",
          "content": "SELECT でテーブルからデータを取り出し、条件で絞り込み、並べ替える基本を学びます。",
          "questions": [
            {
              "id": "q-beg-データの取り出しと絞り込み-1",
              "text": "users テーブルのすべての列、すべての行を取り出す書き方は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "GET * FROM users;",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "SELECT * FROM users;",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "SELECT users FROM *;",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "FETCH ALL users;",
                  "correct": false
                }
              ],
              "explanation": "SELECT の後に取り出す列を書き、FROM の後にテーブル名を書きます。* は「すべての列」を表します。実際の開発では、必要な列だけを書くほうが、速く、意図も伝わります。",
              "hint": "SQL でデータを取り出す命令は SELECT で、取り出す先のテーブルは FROM で指定します。",
              "example": "管理画面で、会員の一覧を表示するとき、SELECT id, name, email FROM users; のように、必要な列だけを取り出すと、速く、意図も分かりやすくなります。"
            },
            {
              "id": "q-beg-データの取り出しと絞り込み-2",
              "text": "年齢が 20 歳以上のユーザーだけを取り出すために、条件を書くキーワードは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "IF",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "FILTER",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "LIMIT",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "WHERE",
                  "correct": true
                }
              ],
              "explanation": "WHERE の後に条件を書くと、条件に合う行だけが取り出されます。SELECT * FROM users WHERE age >= 20; のように書きます。LIMIT は、取り出す行数の上限を決めるもので、条件の指定ではありません。",
              "hint": "「どこ（Where）の行か」を指定するキーワードです。",
              "example": "「20 歳以上の会員だけにお知らせを送りたい」とき、WHERE age >= 20 で対象の行だけを取り出します。条件が複数なら、AND や OR でつなぎます。"
            },
            {
              "id": "q-beg-データの取り出しと絞り込み-3",
              "text": "価格の高い順に並べ替えるための書き方は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "ORDER BY price ASC",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "SORT BY price DESC",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "ORDER BY price DESC",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "GROUP BY price DESC",
                  "correct": false
                }
              ],
              "explanation": "ORDER BY 列名 DESC で、大きい順（降順）に並べ替えます。ASC は小さい順（昇順）で、省略したときの初期値です。GROUP BY は、行をまとめて集計するためのもので、並べ替えではありません。",
              "hint": "並べ替えは ORDER BY、小さい順は ASC、大きい順は DESC です。",
              "example": "商品の一覧を「価格の高い順」「新着順」で並べ替えたいとき、ORDER BY price DESC や ORDER BY created_at DESC を使います。"
            },
            {
              "id": "q-beg-データの取り出しと絞り込み-4",
              "text": "email 列が空（NULL）の行を取り出す条件として正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "WHERE email = NULL",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "WHERE email = ''",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "WHERE email == NULL",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "WHERE email IS NULL",
                  "correct": true
                }
              ],
              "explanation": "NULL は値ではなく「ない」状態なので、= で比べると、結果は常に不明になり、行が取り出されません。IS NULL と IS NOT NULL を使います。空文字（''）は、NULL とは別のものです。",
              "hint": "NULL は「値が不明」という状態で、普通の値のように = では比べられません。",
              "example": "メールアドレスが未登録の会員を探して連絡したいとき、WHERE email IS NULL を使います。email = NULL と書くと、1件も見つかりません。"
            }
          ]
        },
        {
          "id": "sql-beginner-2",
          "title": "データの追加・更新・削除",
          "content": "データを書き換える命令と、書き換えるときに気をつけることを学びます。",
          "questions": [
            {
              "id": "q-beg-データの追加・更新・削除-1",
              "text": "users テーブルに新しい行を追加する命令は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "ADD users VALUES (...);",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "INSERT INTO users (name, age) VALUES ('田中', 25);",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "CREATE users (name, age) VALUES (...);",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "APPEND INTO users (...);",
                  "correct": false
                }
              ],
              "explanation": "INSERT INTO テーブル名 (列名...) VALUES (値...) で行を追加します。文字列はシングルクォートで囲みます。CREATE は、テーブルそのものを作る命令で、行の追加には使いません。",
              "hint": "「挿入する」という意味の英単語が使われます。",
              "example": "会員登録フォームから送信された内容を保存するとき、INSERT INTO users (name, email) VALUES (...) で、新しい行を1件追加します。"
            },
            {
              "id": "q-beg-データの追加・更新・削除-2",
              "text": "UPDATE 文で WHERE を付け忘れたときに起きるのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "エラーになり、何も更新されない",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "先頭の1行だけが更新される",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "テーブルのすべての行が更新される",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "何も起きない",
                  "correct": false
                }
              ],
              "explanation": "WHERE がないと、すべての行が対象になります。UPDATE users SET age = 0; と書くと、全ユーザーの年齢が 0 になります。DELETE も同じです。実行前に、同じ WHERE で SELECT して、対象の行を確かめる習慣が大切です。",
              "hint": "WHERE は、どの行を対象にするかを決める条件です。それがないと対象は？",
              "example": "「田中さんのメールアドレスだけを変更」するつもりで、WHERE を忘れて UPDATE users SET email = ... と実行すると、全会員のメールアドレスが同じになってしまいます。"
            },
            {
              "id": "q-beg-データの追加・更新・削除-3",
              "text": "主キー（PRIMARY KEY）の役割は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "データを暗号化する",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "列の値を、自動で大文字にする",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "テーブルの各行を、重複なく一意に識別する",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "テーブルを、読み取り専用にする",
                  "correct": false
                }
              ],
              "explanation": "主キーは、各行を一意に識別するための列（または列の組み合わせ）です。重複や NULL は許されません。「id = 3 の行」のように、特定の行を確実に指し示せるので、更新や削除、他のテーブルとの関連付けの基準になります。",
              "hint": "id のような列が、よく主キーに使われます。",
              "example": "会員の id を、1、2、3 と一意にしておくことで、「id = 3 の会員の住所を変更」のように、特定の1人を確実に指定できます。"
            },
            {
              "id": "q-beg-データの追加・更新・削除-4",
              "text": "SQL で文字列の値を書くときのルールとして正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "シングルクォート（'田中'）で囲む",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "クォートは付けない",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "バッククォート（`田中`）で囲む",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "角括弧（[田中]）で囲む",
                  "correct": false
                }
              ],
              "explanation": "標準的な SQL では、文字列の値はシングルクォートで囲みます。ダブルクォートは、列名などの名前を囲むために使われる場合があり、データベースによって扱いが異なります。値と名前を混同しないように気をつけます。",
              "hint": "一般的な SQL では、文字列の値と、列名やテーブル名は区別されます。",
              "example": "名前が '田中' の会員を探すときは WHERE name = '田中' と、シングルクォートで囲みます。クォートを忘れると、列名として解釈され、エラーになります。"
            }
          ]
        }
      ],
      "intermediate": [
        {
          "id": "sql-intermediate-1",
          "title": "集計とグループ化",
          "content": "件数や合計を求める集計関数と、グループごとに集計する方法を学びます。",
          "questions": [
            {
              "id": "q-int-集計とグループ化-1",
              "text": "orders テーブルの行数（注文件数）を数える書き方は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "SELECT SUM(*) FROM orders;",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "SELECT NUMBER(*) FROM orders;",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "SELECT COUNT(*) FROM orders;",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "SELECT LENGTH(*) FROM orders;",
                  "correct": false
                }
              ],
              "explanation": "COUNT(*) は、行の数を数えます。SUM は列の合計、AVG は平均、MAX と MIN は最大値と最小値を求めます。COUNT(列名) と書くと、その列が NULL でない行だけを数える点が違います。",
              "hint": "集計関数の COUNT は、行の数を数えます。",
              "example": "ダッシュボードに、今月の注文件数を表示したいとき、SELECT COUNT(*) FROM orders WHERE ... で、件数だけを求めます。"
            },
            {
              "id": "q-int-集計とグループ化-2",
              "text": "部署ごとの人数を求めるために、SELECT の最後に付けるのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "ORDER BY department",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "WHERE department",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "LIMIT department",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "GROUP BY department",
                  "correct": true
                }
              ],
              "explanation": "GROUP BY 列名 で、同じ値の行を1つのグループにまとめ、グループごとに COUNT などを計算します。SELECT department, COUNT(*) FROM employees GROUP BY department; のように書きます。",
              "hint": "「部署ごと」に行をまとめて、集計関数を適用します。",
              "example": "部署ごとの人数や、商品カテゴリごとの在庫数のように、「〜ごと」の集計をしたいときは、GROUP BY を使います。"
            },
            {
              "id": "q-int-集計とグループ化-3",
              "text": "WHERE と HAVING の違いとして正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "WHERE は集計の後、HAVING は集計の前に使う",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "WHERE はグループ化の前の行を絞り、HAVING はグループ化した後の結果を絞る",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "どちらも同じ意味で、書き方の好みである",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "HAVING は SELECT 文では使えない",
                  "correct": false
                }
              ],
              "explanation": "WHERE は、グループ化の前に、個々の行を絞ります。集計関数の結果は、グループ化の後でないと分からないので、それで絞るときは HAVING を使います。例: GROUP BY department HAVING COUNT(*) >= 5。",
              "hint": "集計関数の結果（COUNT(*) > 5 など）で絞りたいときは、どちらを使うでしょうか。",
              "example": "「5 件以上注文した顧客だけを探す」ときは、集計した結果で絞りたいので、GROUP BY customer_id HAVING COUNT(*) >= 5 と書きます。WHERE ではできません。"
            },
            {
              "id": "q-int-集計とグループ化-4",
              "text": "AVG(score) の結果について、正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "NULL の行も、0 として計算される",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "NULL の行があると、エラーになる",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "最初の行の値が返される",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "NULL の行は、計算から除外される",
                  "correct": true
                }
              ],
              "explanation": "AVG、SUM、COUNT(列名) などの集計関数は、NULL の行を無視して計算します。そのため、NULL を 0 として平均したいときは、COALESCE(score, 0) のように、明示的に変換する必要があります。",
              "hint": "集計関数は、NULL を「値がない」と扱います。",
              "example": "アンケートの平均点を出すとき、未回答（NULL）の人は計算から外れます。未回答を 0 点として平均したいなら、COALESCE(score, 0) を使います。"
            }
          ]
        },
        {
          "id": "sql-intermediate-2",
          "title": "JOIN とサブクエリ",
          "content": "複数のテーブルを結び付けて、必要なデータを取り出す方法を学びます。",
          "questions": [
            {
              "id": "q-int-JOINとサブクエリ-1",
              "text": "orders テーブルと users テーブルを user_id で結び付けて、両方に存在する行だけを取り出すのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "INNER JOIN",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "LEFT JOIN",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "CROSS JOIN",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "UNION",
                  "correct": false
                }
              ],
              "explanation": "INNER JOIN は、結合の条件に一致する行だけを返します。一致しない行は、どちらのテーブルのものも結果に出ません。書き方は、FROM orders INNER JOIN users ON orders.user_id = users.id のようになります。",
              "hint": "「内側」の、両方に一致する行だけです。",
              "example": "注文一覧に、注文した人の名前も一緒に表示したいとき、orders と users を user_id で INNER JOIN して、名前の列を取り出します。"
            },
            {
              "id": "q-int-JOINとサブクエリ-2",
              "text": "注文が1件もないユーザーも含めて、全ユーザーを一覧にしたいときに使うのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "users INNER JOIN orders",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "orders LEFT JOIN users",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "users LEFT JOIN orders",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "users CROSS JOIN orders",
                  "correct": false
                }
              ],
              "explanation": "LEFT JOIN は、左のテーブルの行をすべて残し、右に一致する行がなければ、その列を NULL にします。「全ユーザー」を残したいので、users を左に書きます。orders LEFT JOIN users では、全注文が残るので、意図と逆になります。",
              "hint": "LEFT JOIN は、左側に書いたテーブルのすべての行を残します。",
              "example": "「まだ一度も注文していない会員」も含めて、会員ごとの注文件数を出したいときは、users を左に書いて LEFT JOIN します。"
            },
            {
              "id": "q-int-JOINとサブクエリ-3",
              "text": "JOIN で ON の条件を書き忘れると、起きるのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "結果が空になる",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "両方のテーブルの行のすべての組み合わせ（直積）が返る",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "先頭の行どうしだけが結び付く",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "必ずエラーになる",
                  "correct": false
                }
              ],
              "explanation": "結合の条件がないと、左の各行と右の各行のすべての組み合わせが返されます。100行と100行なら 10,000 行です。予想外に件数が増えたときは、ON の条件が漏れていないか、確認します。",
              "hint": "「どの行どうしを結ぶか」の条件がないと、全部の組み合わせになります。",
              "example": "JOIN の ON を書き忘れると、1,000 件の注文と 1,000 人の会員のすべての組み合わせ、100 万件が返ってきます。件数が異常に多いときは、ON を疑います。"
            },
            {
              "id": "q-int-JOINとサブクエリ-4",
              "text": "外部キー（FOREIGN KEY）の役割は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "行を、自動で並べ替える",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "列の値を、暗号化して保存する",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "テーブルの、読み込みを速くする",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "他のテーブルの主キーを参照し、存在しない値が入らないように保つ",
                  "correct": true
                }
              ],
              "explanation": "外部キーは、他のテーブルの行への参照を表します。存在しない user_id の注文を登録しようとするとエラーにでき、データの整合性が保たれます。JOIN で結び付けるときの、基準になる列でもあります。",
              "hint": "orders.user_id には、実際に存在する users.id だけが入ってほしいはずです。",
              "example": "存在しない会員の id で、注文を登録しようとしても、外部キーがあれば、エラーになります。「持ち主のいない注文」が紛れ込むのを防げます。"
            }
          ]
        }
      ],
      "advanced": [
        {
          "id": "sql-advanced-1",
          "title": "設計・性能・安全性",
          "content": "大きなデータや、複数の利用者を前提にしたときに、気をつける点を学びます。",
          "questions": [
            {
              "id": "q-adv-設計・性能・安全性-1",
              "text": "インデックスについて、正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "検索は速くなりやすいが、追加や更新は遅くなり、容量も使う",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "付ければ付けるほど、すべての処理が速くなる",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "SELECT にしか影響せず、デメリットはない",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "テーブルの並び順を、永久に固定する",
                  "correct": false
                }
              ],
              "explanation": "インデックスは、検索を速くするための索引です。ただし、行を追加・更新するたびに、索引も更新するため、書き込みは遅くなり、容量も使います。WHERE や JOIN によく使う列に、必要なものだけ付けるのが基本です。",
              "hint": "本の巻末の索引を思い出してみましょう。索引を作る手間と、引くときの速さの関係です。",
              "example": "会員が 100 万人いて、メールアドレスで検索するログイン処理が遅いとき、email 列にインデックスを付けると、速くなります。ただし、登録のたびに、索引も更新されます。"
            },
            {
              "id": "q-adv-設計・性能・安全性-2",
              "text": "トランザクションを使う目的は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "SELECT の結果を、自動でキャッシュする",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "テーブルの構造を、あとから変えやすくする",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "複数の更新を、ひとまとまりとして、すべて成功か、すべて取り消しにする",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "データベースの接続を、速くする",
                  "correct": false
                }
              ],
              "explanation": "トランザクションは、複数の処理をひとまとまりとして扱い、COMMIT ですべてを確定するか、ROLLBACK ですべてを取り消します。途中で失敗しても、引き落としだけが行われた、といった中途半端な状態を防げます。",
              "hint": "「口座 A から引き落とし、口座 B に入金する」という、途中で止まってはいけない処理を考えます。",
              "example": "ECサイトで、「在庫を減らす」と「注文を登録する」は、どちらも成功するか、どちらも取り消しか、のどちらかでなければなりません。トランザクションにまとめます。"
            },
            {
              "id": "q-adv-設計・性能・安全性-3",
              "text": "正規化の目的として最も適切なのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "テーブルの数を、できるだけ減らす",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "すべての列を、1つのテーブルにまとめる",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "SELECT を、書かなくて済むようにする",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "同じ情報の重複を減らし、更新のずれや矛盾を防ぐ",
                  "correct": true
                }
              ],
              "explanation": "正規化は、同じ情報が複数の場所に重複しないよう、テーブルを分ける設計です。顧客の住所を customers テーブルだけに持たせれば、変更は1か所で済み、注文ごとにずれることもありません。",
              "hint": "顧客の住所が、注文のたびに書かれていると、変更したときに何が起きるでしょうか。",
              "example": "顧客の住所を、注文のたびに書いていると、引っ越しの変更が必要になったとき、過去の注文の住所とずれます。顧客テーブルに1か所だけ持たせます。"
            },
            {
              "id": "q-adv-設計・性能・安全性-4",
              "text": "アプリケーションから SQL を組み立てるとき、利用者の入力を、文字列として SQL に直接つなげてはいけない理由は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "文字数が増えて、SQL が遅くなるため",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "SQL インジェクションにより、意図しない SQL を実行される恐れがあるため",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "入力が、日本語だと動かなくなるため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "大文字と小文字が、区別されなくなるため",
                  "correct": false
                }
              ],
              "explanation": "入力をそのまま SQL に連結すると、入力の中に書かれた SQL が、そのまま実行される恐れがあります（SQL インジェクション）。値は、プレースホルダ（?）などで別に渡す、プリペアドステートメントを使います。",
              "hint": "入力欄に、SQL の一部になる文字列を書かれたら、どうなるでしょうか。",
              "example": "ログイン画面の入力欄に、SQL の断片を書き込まれても、プレースホルダで値を渡していれば、SQL としては実行されません。文字列連結で作ると、危険です。"
            }
          ]
        }
      ],
      "basics": {
        "beginner": [
          {
            "id": "sql-basics-beginner",
            "title": "テーブルとデータの基本操作",
            "content": "データベースは、表（テーブル）の形でデータを管理します。SQL は、その表に「問い合わせ」をするための言語です。取り出す、追加する、更新する、削除する、の4つの基本を押さえましょう。",
            "sections": [
              {
                "heading": "テーブル、行、列、主キー",
                "body": "テーブルは、行（1件のデータ）と列（項目）でできた表です。各行を一意に識別するための列を主キー（PRIMARY KEY）といい、id のような列がよく使われます。主キーがあるので、「id が 3 の行」のように、特定の1件を確実に指せます。",
                "example": "会員テーブルなら、1行が1人の会員、列が名前やメールアドレスです。id が、その会員の識別番号になります。"
              },
              {
                "heading": "SELECT で取り出す",
                "body": "SELECT の後に取り出す列を、FROM の後にテーブル名を書きます。* はすべての列を表しますが、実際の開発では、必要な列だけを書くのが基本です。",
                "code": "SELECT name, email FROM users;\nSELECT * FROM users;"
              },
              {
                "heading": "WHERE と ORDER BY で絞り込み・並べ替え",
                "body": "WHERE で条件に合う行だけを取り出し、ORDER BY で並べ替えます。ASC は小さい順（初期値）、DESC は大きい順です。NULL（値がない）かどうかは、= ではなく IS NULL で調べます。",
                "code": "SELECT name, age FROM users\nWHERE age >= 20 AND email IS NOT NULL\nORDER BY age DESC;"
              },
              {
                "heading": "INSERT・UPDATE・DELETE",
                "body": "行を追加するには INSERT、更新するには UPDATE、削除するには DELETE を使います。UPDATE と DELETE は、WHERE を付け忘れると、全行が対象になります。実行前に、同じ条件で SELECT して、対象を確かめる習慣が大切です。",
                "code": "INSERT INTO users (name, age) VALUES ('田中', 25);\nUPDATE users SET age = 26 WHERE id = 1;\nDELETE FROM users WHERE id = 1;"
              },
              {
                "heading": "文字列の書き方と部分一致",
                "body": "文字列の値は、シングルクォートで囲みます。部分一致で探すときは LIKE を使い、% は「任意の文字列」を表します。",
                "code": "SELECT * FROM users WHERE name = '田中';\nSELECT * FROM users WHERE name LIKE '%田%';"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "sql-basics-intermediate",
            "title": "集計と、複数のテーブルの結合",
            "content": "実際のデータは、複数のテーブルに分けて保存されます。件数や合計を求める集計と、テーブルを結び付ける JOIN が、実務の中心です。",
            "sections": [
              {
                "heading": "集計関数",
                "body": "COUNT（件数）、SUM（合計）、AVG（平均）、MAX と MIN（最大と最小）が、基本の集計関数です。NULL の行は、計算から除外されます。COUNT(*) は行数を、COUNT(列名) は、その列が NULL でない行の数を数えます。",
                "code": "SELECT COUNT(*), SUM(amount), AVG(amount) FROM orders;"
              },
              {
                "heading": "GROUP BY と HAVING",
                "body": "GROUP BY で、同じ値の行をグループにまとめ、グループごとに集計します。WHERE はグループ化の前の行を絞り、HAVING はグループ化した後の結果（集計の結果）を絞ります。",
                "code": "SELECT department, COUNT(*) AS members\nFROM employees\nWHERE active = 1\nGROUP BY department\nHAVING COUNT(*) >= 5;"
              },
              {
                "heading": "INNER JOIN と LEFT JOIN",
                "body": "JOIN で、複数のテーブルを、共通の列（外部キーと主キー）で結び付けます。INNER JOIN は、両方に一致する行だけを返します。LEFT JOIN は、左のテーブルの行をすべて残し、右に一致する行がなければ、右側の列を NULL にします。",
                "code": "SELECT u.name, o.amount\nFROM users u\nLEFT JOIN orders o ON o.user_id = u.id;"
              },
              {
                "heading": "ON を書き忘れない",
                "body": "JOIN で結合の条件（ON）を書き忘れると、左右のすべての組み合わせ（直積）が返され、行数が急激に増えます。件数が予想よりずっと多いときは、まず ON を疑います。"
              },
              {
                "heading": "外部キーとデータの整合性",
                "body": "外部キーは、他のテーブルの主キーへの参照です。orders.user_id に、存在する users.id だけが入るよう保つことで、「持ち主のいない注文」のような矛盾を防げます。JOIN で結び付ける基準にもなります。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "sql-basics-advanced",
            "title": "設計・性能・安全性",
            "content": "データが増え、複数の人が同時に使うようになると、速さと正しさの両方が求められます。判断の理由まで理解しましょう。",
            "sections": [
              {
                "heading": "インデックス",
                "body": "インデックスは、検索を速くするための索引です。WHERE や JOIN によく使う列に付けると効果があります。ただし、行を追加・更新するたびに索引も更新され、容量も使うため、むやみに付けないようにします。列に関数を適用した条件では、効かなくなることがあります。",
                "code": "CREATE INDEX idx_users_email ON users (email);\n\n-- 効く:   WHERE email = 'a@example.com'\n-- 効きにくい: WHERE LOWER(email) = 'a@example.com'"
              },
              {
                "heading": "実行計画（EXPLAIN）",
                "body": "遅いクエリは、推測ではなく、EXPLAIN で実行計画を見て原因を調べます。インデックスが使われているか、全行を読んでいないかを確かめてから、対策を決めます。",
                "code": "EXPLAIN SELECT * FROM orders WHERE customer_id = 100;"
              },
              {
                "heading": "トランザクション",
                "body": "複数の更新を、ひとまとまりとして扱う仕組みです。COMMIT ですべてを確定し、ROLLBACK ですべてを取り消します。途中で失敗しても、中途半端な状態が残りません。",
                "code": "BEGIN;\nUPDATE stocks SET quantity = quantity - 1 WHERE product_id = 10;\nINSERT INTO orders (product_id, user_id) VALUES (10, 3);\nCOMMIT;"
              },
              {
                "heading": "正規化",
                "body": "同じ情報が、複数の場所に重複しないよう、テーブルを分ける設計です。顧客の住所を customers だけに持たせれば、変更は1か所で済み、注文ごとにずれることがありません。分けすぎると、JOIN が増えて複雑になるため、バランスを考えます。"
              },
              {
                "heading": "SQL インジェクションと、安全な書き換え",
                "body": "利用者の入力を、文字列として SQL に連結すると、入力に含まれた SQL が実行される危険があります。値は、プレースホルダで別に渡す（プリペアドステートメント）ようにします。また、本番のデータを書き換える前は、同じ WHERE で SELECT して対象を確かめ、バックアップとトランザクションを用意します。",
                "code": "-- 危険: \"SELECT * FROM users WHERE name = '\" + input + \"'\"\n-- 安全: SELECT * FROM users WHERE name = ?   -- 値は別に渡す"
              }
            ]
          }
        ]
      },
      "thinking": {
        "beginner": [
          {
            "id": "sql-thinking-beginner",
            "title": "書き換えの前に、確かめる",
            "content": "正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。",
            "prompts": [
              {
                "id": "sql-thinking-beginner-1",
                "scenario": "新人のあなたは、「会員 id 5 の田中さんのメールアドレスを変更する」作業を頼まれました。先輩が、次の SQL を書いて、「本番に流して」と言って席を立ちました。",
                "code": "UPDATE users SET email = 'tanaka-new@example.com';",
                "question": "この SQL に、どんな問題があるかを説明し、実行前にどんな確認をするべきかを書いてください。",
                "checkpoints": [
                  "WHERE がないため、全会員のメールアドレスが書き換わることを指摘している",
                  "WHERE id = 5 を付ける、という修正案を示している",
                  "同じ WHERE で SELECT して、対象が1行であることを確かめる、という手順に触れている",
                  "本番の変更前に、バックアップやトランザクションを用意する、などの備えに触れている"
                ],
                "modelAnswer": "この SQL には WHERE がないため、全会員のメールアドレスが、同じ値に書き換わってしまいます。意図は「id 5 の田中さんだけ」なので、WHERE id = 5 を付ける必要があります。流す前に、まず同じ条件で SELECT * FROM users WHERE id = 5; を実行し、対象が田中さんの1行だけであることを確かめます。そのうえで、念のためバックアップを取り、トランザクションの中で UPDATE を実行して、更新された行数が1行であることを確認してから COMMIT します。もし1行でなければ、ROLLBACK で取り消せます。本番の書き換えは、実行後に取り消せないことがあるため、実行前の確認がいちばん大切です。",
                "tip": "UPDATE と DELETE を書いたら、実行する前に、WHERE が付いているかを必ず目で確認しましょう。"
              },
              {
                "id": "sql-thinking-beginner-2",
                "scenario": "会員テーブルの email 列が、空（NULL）の会員に、メールアドレスの登録をお願いするお知らせを送りたいです。後輩が、次の SQL を書きましたが、1件もヒットしません。",
                "code": "SELECT * FROM users WHERE email = NULL;",
                "question": "なぜヒットしないのかを説明し、正しい書き方を示してください。",
                "checkpoints": [
                  "NULL は「値がない」状態で、通常の値のように = で比べられないことを説明している",
                  "= NULL の結果は、真にならず、どの行も一致しないことに触れている",
                  "IS NULL を使った正しい書き方を示している",
                  "空文字（''）と NULL は別物で、両方を対象にしたいときは条件を足す必要があることに触れている"
                ],
                "modelAnswer": "NULL は、「値が不明」あるいは「値がない」状態を表すもので、普通の値と違い、= で比べられません。email = NULL の結果は、真ではなく「不明」になるため、どの行も一致せず、1件もヒットしません。正しくは、WHERE email IS NULL と書きます。逆に、NULL でないものは IS NOT NULL です。なお、空文字（''）は、NULL とは別のものです。画面から空のまま登録された場合、NULL ではなく空文字で保存されている場合もあるため、両方を対象にするなら、WHERE email IS NULL OR email = '' のように、条件を足します。",
                "tip": "NULL の判定は、= ではなく IS NULL。これだけは、体に染み込ませておきましょう。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "sql-thinking-intermediate",
            "title": "集計の結果を、正しく読む",
            "content": "集計や JOIN は、書き方を少し間違えるだけで、一見もっともらしい、誤った数字が出ます。原因を考えてみましょう。",
            "prompts": [
              {
                "id": "sql-thinking-intermediate-1",
                "scenario": "会員（users）と、注文（orders）のテーブルがあります。「会員ごとの注文件数」の一覧を作るため、次の SQL を書いたところ、一度も注文していない会員が一覧に出てきません。",
                "code": "SELECT u.name, COUNT(o.id) AS order_count\nFROM users u\nINNER JOIN orders o ON o.user_id = u.id\nGROUP BY u.id, u.name;",
                "question": "なぜ、注文のない会員が出ないのかを説明し、直し方を書いてください。",
                "checkpoints": [
                  "INNER JOIN は、両方に一致する行だけを返すため、注文のない会員が除かれることを説明している",
                  "LEFT JOIN に変える、という修正案を示している",
                  "注文のない会員は、o.id が NULL になり、COUNT(o.id) が 0 になることを説明している",
                  "COUNT(*) だと、注文のない会員も 1 件と数えてしまう、といった注意点に触れている"
                ],
                "modelAnswer": "INNER JOIN は、users と orders の両方に一致する行だけを返します。そのため、一度も注文していない会員は、結合の結果に出ず、一覧からも消えます。全会員を残したいので、users を左に書いて LEFT JOIN に変えます。LEFT JOIN では、注文のない会員も行が残り、orders 側の列は NULL になります。COUNT(o.id) は、NULL を数えないので、注文のない会員の件数は 0 になり、期待どおりの一覧になります。ここで COUNT(*) を使うと、結合後の行が 1 行あるため、注文のない会員も 1 件と数えてしまうので、COUNT(o.id) のように、注文側の列を数えるのがポイントです。",
                "tip": "「全部の〇〇を残したい」と思ったら、残したいほうを左に書いて LEFT JOIN、と考えましょう。"
              },
              {
                "id": "sql-thinking-intermediate-2",
                "scenario": "月次レポートで、「今月の売上合計」を出したところ、経理の数字より、ずっと大きくなりました。調べると、注文（orders）と注文明細（order_items）を JOIN して、注文の金額（orders.total）を SUM していました。1つの注文には、明細が複数あります。",
                "code": "SELECT SUM(o.total)\nFROM orders o\nJOIN order_items i ON i.order_id = o.id;",
                "question": "数字が大きくなった理由を説明し、正しい集計の方法を書いてください。",
                "checkpoints": [
                  "1つの注文に明細が複数あると、JOIN で注文の行が明細の数だけ複製されることを説明している",
                  "複製された行の orders.total が、何度も足されて、二重に数えられることを指摘している",
                  "注文だけで集計する、または明細の金額（単価 × 数量）を SUM する、などの対策を示している",
                  "JOIN の前後で、行数がどう変わるかを確かめる習慣に触れている"
                ],
                "modelAnswer": "1つの注文に明細が3行あれば、JOIN すると、その注文の行が3行に複製されます。orders.total は注文単位の金額なので、複製された分だけ、何度も足され、売上が二重、三重に数えられて、大きくなります。正しい集計は、2通りあります。1つは、注文単位の金額なので、JOIN せず、orders だけで SUM(total) を求める方法です。もう1つは、明細の金額（単価 × 数量）を、order_items 側で SUM する方法です。集計の前に、JOIN した後の行数が、元のテーブルより増えていないかを確かめておくと、このような二重カウントに早く気づけます。",
                "tip": "「1対多」の JOIN をしたら、1側の金額の列を SUM してはいけない、と覚えておきましょう。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "sql-thinking-advanced",
            "title": "運用での判断",
            "content": "本番のデータベースでは、「動くか」だけでなく、「速いか」「安全か」「取り返しがつくか」を考える必要があります。判断の理由まで書いてみましょう。",
            "prompts": [
              {
                "id": "sql-thinking-advanced-1",
                "scenario": "会員テーブル（500 万行）の、メールアドレスでのログイン検索が遅くなり、ユーザーから苦情が出ています。先輩は、「とりあえず、全部の列にインデックスを付けよう」と言っています。",
                "question": "この案の問題点を指摘し、どんな順で原因を調べて、対策を決めるべきかを書いてください。",
                "checkpoints": [
                  "全部の列にインデックスを付けると、書き込みが遅くなり、容量も使うことを指摘している",
                  "EXPLAIN で実行計画を見て、全行を読んでいないかを確認する手順を示している",
                  "WHERE で使っている email 列に、必要なインデックスを付ける案を示している",
                  "列に関数を適用していないか、といった、インデックスが効かない書き方の確認に触れている"
                ],
                "modelAnswer": "全部の列にインデックスを付けると、会員の登録や更新のたびに、すべての索引を更新することになり、書き込みが遅くなります。容量も大きく増えるので、感心しません。まず EXPLAIN で、ログインの検索 SQL の実行計画を見て、500 万行を全部読んでいる（全件スキャン）かを確認します。WHERE email = ... で検索しているのなら、email 列に、インデックスを1つ付ければ、大きく改善する可能性が高いです。ただし、WHERE LOWER(email) = ... のように、列に関数を適用していると、インデックスが効かないので、書き方も確認します。付けたあとに、もう一度 EXPLAIN で効いていることを確かめ、実際の検索時間も測って、効果を確認します。",
                "tip": "「遅い」ときは、推測で対策せず、まず計測。インデックスは、必要な列に必要な分だけ付けます。"
              },
              {
                "id": "sql-thinking-advanced-2",
                "scenario": "あなたのチームでは、商品の購入処理で、「在庫を1減らす」「注文を登録する」「ポイントを付ける」の3つの SQL を、順番に別々に実行しています。ある日、サーバーが途中で止まり、「在庫は減ったのに、注文が登録されていない」という不具合が、複数件見つかりました。",
                "question": "原因と、同じ問題を防ぐための対策を書いてください。また、対策を入れたときに、利用者の入力を扱うコードで気をつけることも書いてください。",
                "checkpoints": [
                  "3つの更新が別々に確定され、途中で止まると、中途半端な状態が残ることを説明している",
                  "3つの更新を1つのトランザクションにまとめ、失敗時は ROLLBACK で取り消す対策を示している",
                  "トランザクションを使えば、すべて成功か、すべて取り消しのどちらかになることを説明している",
                  "入力値は、文字列連結ではなく、プレースホルダ（プリペアドステートメント）で渡す、という SQL インジェクション対策に触れている"
                ],
                "modelAnswer": "原因は、3つの更新を、それぞれ別々に実行して、確定しているためです。途中でサーバーが止まると、「在庫は減ったが、注文は登録されていない」という中途半端な状態が、そのまま残ります。対策は、3つの更新を1つのトランザクションにまとめることです。BEGIN で始めて、3つの更新を実行し、すべて成功したら COMMIT、途中で失敗したら ROLLBACK で、すべてを取り消します。これで、「すべて成功」か「すべて取り消し」のどちらかになり、矛盾した状態が残りません。また、商品の id や数量など、利用者の入力から来る値を SQL に組み込むときは、文字列として連結せず、プレースホルダで別に渡します。連結すると、SQL インジェクションで、意図しない SQL を実行される危険があるためです。",
                "tip": "「途中で止まったら、どうなるか」を考えるクセをつけると、トランザクションの必要な場面に気づけます。"
              }
            ]
          }
        ]
      }
    },
    "shortLabel": "SQ"
  },
  {
    "id": "php",
    "name": "PHP",
    "description": "サーバー側で動く言語 PHP で、画面に値を出す、フォームを受け取る、データを安全に扱う、基本を学びます",
    "icon": "fa-brands fa-php",
    "lessons": {
      "projects": {
        "beginner": [
          {
            "id": "php-project-beginner-1",
            "title": "PHP 初級プロジェクト",
            "content": "商品の一覧を、配列で持ち、foreach で表示しながら、金額の計算と表示を確認します。",
            "questions": [
              {
                "id": "q-beg-PHP初級プロジェクト-1",
                "text": "商品を、名前と価格の組で、複数持つデータとして、適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "$products = \"りんご,120,みかん,80\";",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "$products = [['name' => 'りんご', 'price' => 120], ['name' => 'みかん', 'price' => 80]];",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "$products = 'りんご' + 120;",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "$products = [りんご, 120];",
                    "correct": false
                  }
                ],
                "explanation": "連想配列を、さらに配列に入れると、「複数の商品」を、整理して持てます。foreach で、1件ずつ取り出して、$product['name'] のように、使えます。",
                "hint": "1つの商品が、名前と価格を持ち、それが複数あります。",
                "example": "商品を、名前と価格の組にして、配列に入れておけば、一覧表示も、合計の計算も、同じデータを使って行えます。"
              },
              {
                "id": "q-beg-PHP初級プロジェクト-2",
                "text": "商品一覧を、HTML の <li> で、1行ずつ出力する書き方として、適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "foreach ($products as $p) { echo \"<li>\" . $p['name'] . \"</li>\"; }",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "echo \"<li>\" . $products . \"</li>\";",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "foreach ($p as $products) { echo $p; }",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "for ($products) { echo \"<li>\"; }",
                    "correct": false
                  }
                ],
                "explanation": "foreach で、$products から、1件ずつ $p に取り出し、その name を、<li> で囲んで出力します。なお、利用者が入力した値を出力する場合は、htmlspecialchars() を通すのが、安全です。",
                "hint": "配列の要素を、1つずつ取り出して、その中の名前を出力します。",
                "example": "商品一覧の HTML を、foreach の中に、1 回だけ書けば、商品が、何件あっても、同じ見た目で、並べられます。"
              },
              {
                "id": "q-beg-PHP初級プロジェクト-3",
                "text": "価格 1000 円の、消費税 10% を加えた金額を、小数が出ないように計算する書き方は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "1000 + 10",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "1000 * \"1.1\"",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "1000 . 1.1",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "(int) round(1000 * 1.1)",
                    "correct": true
                  }
                ],
                "explanation": "1000 * 1.1 は、小数の計算になるので、round() で丸めて、整数にします。金額の計算は、端数の扱い（切り捨て、四捨五入など）を、あらかじめ決めておくことが大切です。",
                "hint": "掛け算で求めたあと、整数に整えます。",
                "example": "税抜 1000 円の商品の、税込価格は、round(1000 * 1.1) で求めます。端数の扱い（切り捨て、四捨五入）は、先に決めておきます。"
              },
              {
                "id": "q-beg-PHP初級プロジェクト-4",
                "text": "1234567 を、3桁区切りの「1,234,567」にして表示する関数は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "format_comma(1234567)",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "number_format(1234567)",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "sprintf(1234567)",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "str_comma(1234567)",
                    "correct": false
                  }
                ],
                "explanation": "number_format() は、数値を、3桁区切りなどの書式に整えます。第2引数で、小数点以下の桁数も指定できます。金額の表示に、よく使います。",
                "hint": "「数値の書式」という意味の関数です。",
                "example": "number_format(1234567) で、「1,234,567」と表示できます。価格が大きくなるほど、読みやすくなります。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "php-project-intermediate-1",
            "title": "PHP 中級プロジェクト",
            "content": "お問い合わせフォームを作りながら、入力の確認と、安全な出力、送信後の動きを確認します。",
            "questions": [
              {
                "id": "q-int-PHP中級プロジェクト-1",
                "text": "お問い合わせフォームで、名前が「未入力、または、空白だけ」のときにエラーにしたい場合、適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "if ($_POST['name'] == 0)",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "if (isset($_POST['name']))",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "if (trim($_POST['name'] ?? '') === '')",
                    "correct": true
                  },
                  {
                    "id": "d",
                    "text": "if ($_POST['name'] === null)",
                    "correct": false
                  }
                ],
                "explanation": "trim() で、前後の空白を取り除き、空文字かどうかを調べます。?? '' を付けておくと、フォームの項目自体が、届かなかったときも、警告なしで扱えます。入力の確認は、利用者の操作に頼らず、必ず、サーバー側で行います。",
                "hint": "前後の空白を取り除いてから、空かどうかを調べます。",
                "example": "お問い合わせフォームで、名前が、空白だけで送られたときに、trim() で空白を取り除いて、空かどうかを調べ、「名前を入力してください」と表示します。"
              },
              {
                "id": "q-int-PHP中級プロジェクト-2",
                "text": "メールアドレスの形式を、確認するのに使える関数は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "check_mail($email)",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "filter_var($email, FILTER_VALIDATE_EMAIL)",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "is_email($email)",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "strlen($email) > 5",
                    "correct": false
                  }
                ],
                "explanation": "filter_var() に FILTER_VALIDATE_EMAIL を指定すると、メールアドレスとして、正しい形式かを調べられます。形式が正しいだけで、実在することまでは、保証されない点に、注意が必要です。",
                "hint": "値の検証や、変換をする、標準の関数があります。",
                "example": "メールアドレスの入力欄に、「abc」のような、形式の違う値が入ったときに、filter_var() で見つけて、やり直しを促せます。"
              },
              {
                "id": "q-int-PHP中級プロジェクト-3",
                "text": "確認画面で、入力された内容を、表示するときに、必要なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "出力する前に、strtoupper() を通す",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "出力する前に、htmlspecialchars() を通す",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "何もせず、そのまま出力する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "出力する前に、md5() を通す",
                    "correct": false
                  }
                ],
                "explanation": "利用者の入力を、HTML にそのまま出力すると、スクリプトを埋め込まれる危険（XSS）があります。画面に出す直前に、htmlspecialchars() を通すのが基本です。",
                "hint": "入力された文字列は、信用できない値として、扱います。",
                "example": "確認画面に、入力した内容を表示するときは、htmlspecialchars() を通します。入力欄に書かれた <script> が、実行されるのを防げます。"
              },
              {
                "id": "q-int-PHP中級プロジェクト-4",
                "text": "送信が完了したあと、header('Location: thanks.php'); exit; で、別のページに移動させる主な目的は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "画面を再読み込みしたときに、同じ内容が、もう一度送信されるのを防ぐため",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "ページを、速く表示するため",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "データを、暗号化するため",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "PHP のバージョンを、切り替えるため",
                    "correct": false
                  }
                ],
                "explanation": "送信の結果を、そのまま表示すると、再読み込みで、同じ POST が、もう一度送られてしまいます。完了後に、別のページへ移動させる（リダイレクト）と、二重送信を防げます。header() のあとは、exit で、処理を止めます。",
                "hint": "POST した直後の画面を、再読み込みすると、何が起きるでしょうか。",
                "example": "送信が完了したあと、header('Location: thanks.php'); で、お礼のページへ移動します。画面を再読み込みしても、同じ問い合わせが、もう一度送られません。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "php-project-advanced-1",
            "title": "PHP 上級プロジェクト",
            "content": "ログイン機能を作りながら、パスワード、セッション、データベース検索の安全な書き方を確認します。",
            "questions": [
              {
                "id": "q-adv-PHP上級プロジェクト-1",
                "text": "ログイン時に、入力されたパスワードと、データベースの値を、照合する方法は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "入力されたパスワードを、== で、保存された値と比べる",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "保存された値を、画面に表示して、目で確かめる",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "password_verify($入力, $保存されたハッシュ) で確かめる",
                    "correct": true
                  },
                  {
                    "id": "d",
                    "text": "入力されたパスワードを、SQL の WHERE に、直接書き込む",
                    "correct": false
                  }
                ],
                "explanation": "保存されているのは、ハッシュなので、入力されたパスワードと、直接は、比べられません。password_verify() は、入力から、ハッシュと一致するかを、安全に判定します。",
                "hint": "保存されているのは、元に戻せない形（ハッシュ）です。",
                "example": "ログイン処理では、password_verify() で、入力されたパスワードと、保存されたハッシュを、照合します。データベースの値を、画面に出す必要は、ありません。"
              },
              {
                "id": "q-adv-PHP上級プロジェクト-2",
                "text": "ログインに成功した直後に、session_regenerate_id(true); を呼ぶ目的は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "パスワードを、再び入力させるため",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "セッションの、保存期間を長くするため",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "データベースの接続を、切るため",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "セッション ID を新しくして、他人に、事前に仕込まれた ID を使われる攻撃（セッション固定）を防ぐため",
                    "correct": true
                  }
                ],
                "explanation": "セッション ID を、ログインの前後で、そのまま使うと、攻撃者に、あらかじめ知られた ID で、ログイン状態を、乗っ取られる危険があります。ログイン成功の直後に、ID を作り直すと、この攻撃を防げます。",
                "hint": "ログインの前後で、識別用の ID を、変えておきます。",
                "example": "ログインに成功した直後に、session_regenerate_id(true) を呼んで、セッション ID を作り直します。他人に、先に仕込まれた ID で、乗っ取られるのを防げます。"
              },
              {
                "id": "q-adv-PHP上級プロジェクト-3",
                "text": "ユーザーを、メールアドレスで検索する処理として、適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "$pdo->query(\"SELECT * FROM users WHERE email = '\" . $email . \"'\")",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "$stmt = $pdo->prepare('SELECT * FROM users WHERE email = :email'); $stmt->execute(['email' => $email]);",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "$pdo->query(\"SELECT * FROM users WHERE email = $email\")",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "file_get_contents('users.txt') で、全件を読み込んで探す",
                    "correct": false
                  }
                ],
                "explanation": "入力された値を、SQL 文に、直接つなげると、SQL インジェクションの危険があります。プレースホルダ（:email）を使い、値は、execute() で、別に渡します。",
                "hint": "SQL の形と、値を、分けて渡す方法です。",
                "example": "ユーザーの検索は、prepare() と execute() で、メールアドレスを、別に渡します。入力された値が、SQL の命令として解釈されません。"
              },
              {
                "id": "q-adv-PHP上級プロジェクト-4",
                "text": "ログインに失敗したとき、利用者に出すメッセージとして、適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "「このメールアドレスは、登録されていません」",
                    "correct": false
                  },
                  {
                    "id": "b",
                    "text": "「メールアドレスまたはパスワードが、正しくありません」",
                    "correct": true
                  },
                  {
                    "id": "c",
                    "text": "「パスワードが、1文字違います」",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "データベースの、エラーメッセージを、そのまま表示する",
                    "correct": false
                  }
                ],
                "explanation": "「メールアドレスが、登録されていません」と伝えると、攻撃者に、登録済みのメールアドレスを、推測する手がかりを与えます。どちらが違うのかを、特定できない、共通のメッセージにします。内部のエラーの内容も、利用者には、見せません。",
                "hint": "攻撃者に、手がかりを与えない言い方を、考えます。",
                "example": "ログインに失敗したときは、「メールアドレスまたはパスワードが正しくありません」と、共通のメッセージを出します。登録されているメールアドレスを、推測されにくくなります。"
              }
            ]
          }
        ]
      },
      "beginner": [
        {
          "id": "php-beginner-1",
          "title": "PHP の基本",
          "content": "PHP がどこで動くのかと、変数・文字列・出力の基本を学びます。",
          "questions": [
            {
              "id": "q-beg-PHPの基本-1",
              "text": "PHP のコードが実行される場所として、正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "閲覧者のブラウザの中",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "Web サーバーの中。実行結果の HTML が、ブラウザに届く",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "閲覧者のパソコンの、OS の中",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "どこでも実行されず、そのまま画面に表示される",
                  "correct": false
                }
              ],
              "explanation": "PHP は、サーバー側で実行されます。ブラウザに届くのは、実行した結果の HTML などで、PHP のコード自体は届きません。そのため、閲覧者は、ソースを表示しても、PHP のコードを見ることができません。",
              "hint": "ブラウザに届くものは、何でしょうか。",
              "example": "会員の名前を表示するマイページは、サーバー側の PHP が、データベースから名前を取り出して、HTML にして、ブラウザに返します。閲覧者は、PHP のコードを見ることはできません。"
            },
            {
              "id": "q-beg-PHPの基本-2",
              "text": "PHP で、変数 name に \"太郎\" を入れる書き方は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "let name = \"太郎\";",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "name = \"太郎\"",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "var name = \"太郎\";",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "$name = \"太郎\";",
                  "correct": true
                }
              ],
              "explanation": "PHP の変数は、名前の前に $ を付けます。let や var は、PHP では使いません。文の終わりには、セミコロン（;）を付けます。",
              "hint": "PHP の変数には、名前の前に付ける印があります。",
              "example": "$price = 980; のように、値に名前を付けておくと、あとから、同じ値を、何度も使えます。PHP の変数は、名前の前に $ を付けます。"
            },
            {
              "id": "q-beg-PHPの基本-3",
              "text": "文字列 \"山田\" と \"さん\" をつなげて、\"山田さん\" にする書き方は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "\"山田\" + \"さん\"",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "\"山田\" . \"さん\"",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "\"山田\" & \"さん\"",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "\"山田\" , \"さん\"",
                  "correct": false
                }
              ],
              "explanation": "PHP で文字列をつなぐ演算子は、ピリオド（.）です。+ は、数値の足し算に使います。文字列に + を使うと、意図した結果にならないので、注意が必要です。",
              "hint": "JavaScript では + を使いますが、PHP は違います。",
              "example": "\"山田\" . \"さん\" のように、名前と敬称を、ピリオドでつなぎます。PHP では、文字列のつなぎに、+ ではなく、ピリオドを使います。"
            },
            {
              "id": "q-beg-PHPの基本-4",
              "text": "$name = \"太郎\"; のとき、echo \"こんにちは、$name さん\"; と echo 'こんにちは、$name さん'; の違いは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "どちらも、「こんにちは、太郎 さん」と出る",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "どちらも、「こんにちは、$name さん」と出る",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "ダブルクォートは、$name が値に置き換わり、シングルクォートは、そのまま「$name」と出る",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "ダブルクォートは、エラーになる",
                  "correct": false
                }
              ],
              "explanation": "ダブルクォート（\"）の中では、変数が値に置き換わります。シングルクォート（'）の中は、書いたとおりの文字列として扱われます。変数を埋め込みたいときは、ダブルクォートを使います。",
              "hint": "変数を文字列の中に埋め込めるのは、どちらの引用符でしょうか。",
              "example": "メールの文面を、\"{$name} 様、ご注文ありがとうございます\" のように、ダブルクォートの中に、変数を埋め込んで作れます。シングルクォートでは、変数が展開されません。"
            }
          ]
        },
        {
          "id": "php-beginner-2",
          "title": "配列と繰り返し",
          "content": "複数の値をまとめる配列と、それを順番に処理する foreach を学びます。",
          "questions": [
            {
              "id": "q-beg-配列と繰り返し-1",
              "text": "商品名と価格のような「名前と値の組」を持つ配列を、PHP では______といいます。",
              "options": [
                {
                  "id": "a",
                  "text": "数値配列",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "多次元配列",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "連想配列",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "ハッシュ関数",
                  "correct": false
                }
              ],
              "explanation": "['name' => 'りんご', 'price' => 120] のように、キーと値の組でできた配列を、連想配列といいます。$item['name'] のように、キーを指定して、値を取り出します。",
              "hint": "名前（キー）で、値を取り出せる配列です。",
              "example": "商品名と価格を、['name' => 'りんご', 'price' => 120] のように持てば、$item['name'] で、名前を取り出せます。データの意味が、読み取りやすくなります。"
            },
            {
              "id": "q-beg-配列と繰り返し-2",
              "text": "配列 $users の要素を、1つずつ取り出して処理する書き方は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "foreach ($users as $user) { ... }",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "for each $users in $user { ... }",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "while ($users) { ... }",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "loop ($users => $user) { ... }",
                  "correct": false
                }
              ],
              "explanation": "foreach ($配列 as $要素) { ... } で、配列の要素を、先頭から順に取り出して処理できます。連想配列では、foreach ($配列 as $キー => $値) のように、キーも一緒に取り出せます。",
              "hint": "「配列の各要素について」という意味の命令です。",
              "example": "商品の一覧ページで、配列の商品を、foreach で 1 件ずつ取り出して、<li> を、1 件ずつ出力します。商品が増えても、コードは、変わりません。"
            },
            {
              "id": "q-beg-配列と繰り返し-3",
              "text": "配列に、いくつの要素が入っているかを調べる関数は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "length($array)",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "size_of($array)",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "$array.length",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "count($array)",
                  "correct": true
                }
              ],
              "explanation": "count($array) で、要素の数を取得できます。PHP の配列には、JavaScript のような length プロパティは、ありません。",
              "hint": "「数える」という意味の英単語です。",
              "example": "買い物かごに入っている商品の数を、count($cart) で数えて、「カートに 3 点」と表示できます。"
            },
            {
              "id": "q-beg-配列と繰り返し-4",
              "text": "\"1\" == 1 は true になりますが、\"1\" === 1 は______になります。",
              "options": [
                {
                  "id": "a",
                  "text": "true",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "false",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "エラー",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "null",
                  "correct": false
                }
              ],
              "explanation": "== は、型を合わせてから比べるので、\"1\"（文字列）と 1（数値）は、等しいと判断されます。=== は、値と型が、どちらも同じときだけ true です。意図しない一致を避けるため、基本は === を使います。",
              "hint": "=== は、値だけでなく、型も同じか調べます。",
              "example": "入力された値が \"0\" のときに、== で比べると、意図しない一致が起きることがあります。=== を使えば、型も含めて、厳密に比べられます。"
            }
          ]
        }
      ],
      "intermediate": [
        {
          "id": "php-intermediate-1",
          "title": "フォームと安全な出力",
          "content": "フォームから届く値の受け取り方と、画面に出すときの安全な書き方を学びます。",
          "questions": [
            {
              "id": "q-int-フォームと安全な出力-1",
              "text": "method=\"post\" のフォームで、name=\"email\" の入力欄に入れた値を受け取る書き方は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "$_GET['email']",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "$email",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "$_POST['email']",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "post('email')",
                  "correct": false
                }
              ],
              "explanation": "POST で送られたフォームの値は、$_POST という配列に入ります。GET（URL に付く値）は、$_GET です。name 属性の値が、配列のキーになります。",
              "hint": "POST で送られた値は、決まった名前の配列に入ります。",
              "example": "お問い合わせフォームで、method=\"post\" で送られたメールアドレスは、$_POST['email'] で受け取ります。"
            },
            {
              "id": "q-int-フォームと安全な出力-2",
              "text": "ユーザーが入力した文字列を、HTML に表示するときに、htmlspecialchars() を通す目的は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "文字列を、短くするため",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "文字列を、暗号化するため",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "文字列を、数値に変換するため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "< や > などを無害な表記に変えて、悪意のあるスクリプトが実行されるのを防ぐため",
                  "correct": true
                }
              ],
              "explanation": "入力された文字列を、そのまま HTML に出力すると、<script> などが実行される危険があります（XSS）。htmlspecialchars() は、< や > などを、安全な表記に変えるので、画面に出す直前に、必ず通します。",
              "hint": "入力欄に <script> と書かれたら、どうなるでしょうか。",
              "example": "利用者が、名前の欄に <script> と書いても、画面に出す前に htmlspecialchars() を通せば、ただの文字として、表示されます。"
            },
            {
              "id": "q-int-フォームと安全な出力-3",
              "text": "検索フォームは GET、会員登録フォームは POST にするのが適切な理由は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "GET は、パスワードを暗号化して送れるため",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "GET は、条件が URL に残り、共有や再読み込みに向く。登録のようにデータを変える処理は、POST にするのが基本のため",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "POST は、URL が長くなるため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "どちらでも、まったく違いはないため",
                  "correct": false
                }
              ],
              "explanation": "GET は、値が URL に付くので、検索結果を共有したり、ブックマークしたりできます。一方、登録や更新のように、データを変える処理は、POST で送るのが基本です。なお、POST にしても、値が暗号化されるわけではありません。",
              "hint": "URL に値が付くと、何が起きるでしょうか。",
              "example": "商品の検索は、GET にすれば、検索結果の URL を、そのまま共有できます。会員登録のような、データを変える処理は、POST にします。"
            },
            {
              "id": "q-int-フォームと安全な出力-4",
              "text": "フォームの値が未入力でも、警告を出さずに、既定値を使いたいとき、$name = ______; と書けます。",
              "options": [
                {
                  "id": "a",
                  "text": "$_POST['name'] or '名無し'",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "$_POST['name'] ?? '名無し'",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "$_POST['name'] || '名無し'",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "$_POST['name'] : '名無し'",
                  "correct": false
                }
              ],
              "explanation": "?? は、null 合体演算子で、左側が、存在しない、または null のとき、右側の値を使います。未入力で、キー自体がないときも、警告が出ません。",
              "hint": "「なければ、右側の値を使う」という演算子です。",
              "example": "検索ページで、キーワードが未入力のときに、$keyword = $_GET['q'] ?? ''; と書けば、警告を出さずに、空文字として扱えます。"
            }
          ]
        },
        {
          "id": "php-intermediate-2",
          "title": "データベースとセッション",
          "content": "PDO でデータベースを安全に扱う方法と、ログイン状態を保つセッションを学びます。",
          "questions": [
            {
              "id": "q-int-データベースとセッション-1",
              "text": "ユーザーが入力したメールアドレスで、データベースを検索するとき、安全なのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "プレースホルダを使ったプリペアドステートメントで、値を別に渡す",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "SQL 文に、入力された文字列を、そのままつなげる",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "SQL 文に、htmlspecialchars() を通した文字列を、つなげる",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "どの書き方でも、安全性は同じ",
                  "correct": false
                }
              ],
              "explanation": "SQL 文に、入力された文字列を直接つなげると、SQL を書き換えられる攻撃（SQL インジェクション）の危険があります。プリペアドステートメントは、SQL の形と値を分けて、データベースに渡すので、値が命令として解釈されません。",
              "hint": "SQL の命令と、値を、分けて扱う方法があります。",
              "example": "ログイン画面で、入力されたメールアドレスから、ユーザーを探すときは、プレースホルダを使い、値を別に渡します。SQL インジェクションを防げます。"
            },
            {
              "id": "q-int-データベースとセッション-2",
              "text": "PDO で、検索結果を、列名をキーにした連想配列として、1行ずつ取り出したいとき、使うのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "$stmt->fetch(PDO::FETCH_NUM)",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "$stmt->fetch(PDO::FETCH_OBJ_ONLY)",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "$stmt->fetch(PDO::FETCH_ASSOC)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "$stmt->get()",
                  "correct": false
                }
              ],
              "explanation": "PDO::FETCH_ASSOC を指定すると、列名をキーにした連想配列で、行を取得できます。$row['email'] のように、列名で、値を取り出せるので、読みやすくなります。",
              "hint": "ASSOC は、連想配列（associative array）の略です。",
              "example": "$stmt->fetch(PDO::FETCH_ASSOC) で、取り出した 1 行を、$row['name'] のように、列名で読み取れます。"
            },
            {
              "id": "q-int-データベースとセッション-3",
              "text": "設定ファイルを読み込むとき、require と include の違いは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "require は、何度でも読み込め、include は、1回だけ",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "require は、ブラウザ側で動き、include は、サーバー側で動く",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "ファイルが見つからないとき、require は処理を止め、include は警告を出して続ける",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "違いは、まったくない",
                  "correct": false
                }
              ],
              "explanation": "require は、ファイルを読み込めないと、致命的なエラーとして、処理を止めます。include は、警告を出して、処理を続けます。設定ファイルのように、なければ動かないものは、require を使います。",
              "hint": "読み込めなかったときの、動きが違います。",
              "example": "データベースの設定を書いたファイルは、require で読み込みます。ファイルがないのに、処理が続くと、原因の分かりにくい不具合になるためです。"
            },
            {
              "id": "q-int-データベースとセッション-4",
              "text": "ログイン状態を保つために、session_start() を使う理由は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "ブラウザに、パスワードそのものを保存するため",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "サーバー側に、ユーザーごとのデータを保存し、ブラウザには、その識別用の ID だけを持たせるため",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "データベースを、自動で作るため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "ページの表示を、速くするため",
                  "correct": false
                }
              ],
              "explanation": "セッションは、ユーザーごとのデータを、サーバー側に保存し、ブラウザには、それを見つけるための ID（Cookie）だけを持たせる仕組みです。パスワードのような、重要な情報を、ブラウザ側に置かずに済みます。session_start() は、その処理の開始を宣言します。",
              "hint": "ブラウザに持たせる情報は、できるだけ少なくします。",
              "example": "ログイン後、ページを移動しても、ログイン状態を保つために、session_start() を呼んで、$_SESSION にユーザーの ID を入れます。"
            }
          ]
        }
      ],
      "advanced": [
        {
          "id": "php-advanced-1",
          "title": "安全で、読みやすい設計",
          "content": "パスワードの扱い、例外、型宣言、ライブラリの管理など、実務で必要な考え方を学びます。",
          "questions": [
            {
              "id": "q-adv-安全で、読みやすい設計-1",
              "text": "会員のパスワードをデータベースに保存する方法として、適切なのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "そのままの文字列で保存する",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "base64 で変換して保存する",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "password_hash() で、ハッシュ化して保存し、確認には password_verify() を使う",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "md5() で、ハッシュ化して保存する",
                  "correct": false
                }
              ],
              "explanation": "password_hash() は、安全な方式で、パスワードをハッシュ化します。元の文字列には戻せないので、データが漏れても、パスワードそのものは、分かりません。ログイン時は、password_verify() で、入力と保存した値が一致するかを確かめます。md5 は、現在は、パスワードの保存には、不適切です。",
              "hint": "パスワードは、元の文字列に戻せない形で保存します。",
              "example": "会員登録時に、password_hash() で、パスワードをハッシュ化して保存します。データベースが漏れても、元のパスワードは、分かりません。"
            },
            {
              "id": "q-adv-安全で、読みやすい設計-2",
              "text": "失敗するかもしれない処理（ファイルの読み込みなど）を、安全に扱う書き方は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "失敗しても、何も書かずに無視する",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "echo でメッセージを出して、そのまま続ける",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "どんな処理も、必ず成功するものとして書く",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "try { ... } catch (Exception $e) { ... } で、例外を受け取って、対処する",
                  "correct": true
                }
              ],
              "explanation": "try の中で、例外が投げられると、catch に処理が移ります。ここで、エラーを記録したり、利用者に分かりやすいメッセージを出したりできます。エラーを握りつぶすと、原因が分からなくなるので、必ず何らかの対処をします。",
              "hint": "エラーが起きたときの、処理を、別に書く構文です。",
              "example": "ファイルの保存や、外部サービスへの接続のように、失敗しうる処理は、try-catch で囲み、失敗したときの、案内を決めておきます。"
            },
            {
              "id": "q-adv-安全で、読みやすい設計-3",
              "text": "ファイルの先頭に declare(strict_types=1); を書くと、______になります。",
              "options": [
                {
                  "id": "a",
                  "text": "すべての変数に、型を書かないと、エラーになる",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "関数が、速く実行される",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "関数の引数に、宣言と違う型の値（例えば、int に \"5\"）を渡すと、自動で変換されず、TypeError になる",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "PHP のバージョンが、自動で上がる",
                  "correct": false
                }
              ],
              "explanation": "strict_types=1 を指定すると、型宣言のある関数に、違う型の値を渡したとき、自動変換されず、エラーになります。意図しない型の値が、紛れ込む間違いを、早く見つけられます。",
              "hint": "型を、どこまで厳しく見るかの設定です。",
              "example": "金額を計算する関数に、int の型を宣言し、strict_types=1 を指定しておけば、\"1,000\" のような、文字列を渡す間違いを、すぐに、見つけられます。"
            },
            {
              "id": "q-adv-安全で、読みやすい設計-4",
              "text": "Composer の役割として、正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "PHP のコードを、速く実行する",
                  "correct": false
                },
                {
                  "id": "b",
                  "text": "ライブラリの導入とバージョンの管理をし、クラスを自動で読み込む仕組み（オートロード）を用意する",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "データベースを、作成する",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "Web サーバーを、起動する",
                  "correct": false
                }
              ],
              "explanation": "Composer は、PHP のパッケージ管理ツールです。composer require で、ライブラリを導入でき、composer.json にバージョンが記録されます。vendor/autoload.php を読み込めば、クラスが自動で読み込まれ、require を大量に書かずに済みます。",
              "hint": "他の人が作った部品を、使うための道具です。",
              "example": "メール送信や、日付の処理に、便利なライブラリを、composer require で導入し、vendor/autoload.php を読み込んで、使えます。"
            }
          ]
        }
      ],
      "basics": {
        "beginner": [
          {
            "id": "php-basics-beginner",
            "title": "サーバーで動く PHP の基本",
            "content": "PHP は、Web サーバーの中で動く言語です。ここでは、PHP がどこで動くのかと、変数・文字列・配列・繰り返しの、基本の書き方を押さえましょう。",
            "sections": [
              {
                "heading": "PHP とは",
                "body": "Web サーバーの中で実行される言語です。実行した結果の HTML が、ブラウザに届きます。そのため、閲覧者は、ソースを表示しても、PHP のコードを見ることができません。PHP のコードは、<?php と ?> の間に書きます。",
                "example": "会員ごとに表示が変わるマイページや、フォームの内容をデータベースに保存する処理は、サーバー側の PHP が行います。"
              },
              {
                "heading": "変数と文字列",
                "body": "変数は、名前の前に $ を付けます。文の終わりには、セミコロンを付けます。文字列をつなぐ演算子は、ピリオド（.）です。ダブルクォートの中では、変数が値に置き換わりますが、シングルクォートの中では、置き換わりません。",
                "code": "<?php\n$name = \"太郎\";\necho \"こんにちは、\" . $name . \"さん\";\necho \"こんにちは、$name さん\"; // 変数が展開される\necho 'こんにちは、$name さん'; // そのまま出る"
              },
              {
                "heading": "配列と連想配列",
                "body": "複数の値は、配列にまとめます。名前（キー）と値の組でできた配列を、連想配列といいます。キーを指定して、値を取り出します。要素の数は、count() で調べます。",
                "code": "$colors = [\"赤\", \"青\", \"緑\"];\n$item = [\"name\" => \"りんご\", \"price\" => 120];\necho $item[\"name\"]; // りんご\necho count($colors); // 3"
              },
              {
                "heading": "foreach で繰り返す",
                "body": "配列の要素を、1つずつ取り出して処理するときは、foreach を使います。連想配列では、キーも一緒に取り出せます。",
                "code": "foreach ($colors as $color) {\n  echo \"<li>$color</li>\";\n}"
              },
              {
                "heading": "== と ===",
                "body": "== は、型を合わせてから比べます。=== は、値と型が、どちらも同じときだけ、true になります。意図しない一致を避けるため、基本は、=== を使います。",
                "code": "var_dump(\"1\" == 1);  // true\nvar_dump(\"1\" === 1); // false"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "php-basics-intermediate",
            "title": "フォームの受け取りと、安全な出力・保存",
            "content": "Web アプリの多くは、利用者の入力を、受け取って処理します。入力は、信用できない値として扱い、出力と保存のときに、安全に処理する習慣を身につけましょう。",
            "sections": [
              {
                "heading": "フォームの値の受け取り",
                "body": "POST で送られた値は $_POST、URL に付いた値は $_GET に入ります。name 属性の値が、キーになります。値がない場合に備えて、?? で、既定値を決めておくと、警告を避けられます。検索は GET、登録や更新は POST が、基本です。",
                "code": "$name = $_POST[\"name\"] ?? \"\";\n$keyword = $_GET[\"q\"] ?? \"\";"
              },
              {
                "heading": "出力のときの、エスケープ",
                "body": "利用者の入力を、HTML にそのまま出力すると、<script> などを埋め込まれて、実行される危険があります（XSS）。画面に出す直前に、htmlspecialchars() を通します。",
                "code": "function e(string $s): string {\n  return htmlspecialchars($s, ENT_QUOTES, \"UTF-8\");\n}\necho e($name);"
              },
              {
                "heading": "入力の確認は、サーバー側で",
                "body": "必須かどうか、形式が正しいかは、サーバー側で、必ず確認します。画面側（ブラウザ）の確認は、書き換えられるので、補助にすぎません。メールアドレスは、filter_var() で形式を調べられます。",
                "code": "if (trim($name) === \"\") { $errors[] = \"名前を入力してください\"; }\nif (!filter_var($email, FILTER_VALIDATE_EMAIL)) { $errors[] = \"メールアドレスの形式が正しくありません\"; }"
              },
              {
                "heading": "データベースは、プリペアドステートメントで",
                "body": "SQL 文に、入力された値を、直接つなげると、SQL を書き換えられる攻撃（SQL インジェクション）の危険があります。PDO のプリペアドステートメントで、SQL の形と値を分けて渡します。",
                "code": "$stmt = $pdo->prepare(\"SELECT * FROM users WHERE email = :email\");\n$stmt->execute([\"email\" => $email]);\n$user = $stmt->fetch(PDO::FETCH_ASSOC);"
              },
              {
                "heading": "セッションと、二重送信の防止",
                "body": "ログイン状態などは、セッションで保持します。サーバー側にデータを置き、ブラウザには、識別用の ID だけを持たせます。また、送信が完了したら、別のページへ移動させる（リダイレクト）と、再読み込みによる、二重送信を防げます。",
                "code": "session_start();\n$_SESSION[\"user_id\"] = $user[\"id\"];\n\nheader(\"Location: thanks.php\");\nexit;"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "php-basics-advanced",
            "title": "認証・例外・型・ライブラリの管理",
            "content": "実務の PHP では、安全性と、読みやすさの両方が、求められます。パスワードの扱い、例外、型宣言、Composer など、品質を支える仕組みを学びます。",
            "sections": [
              {
                "heading": "パスワードは、ハッシュ化して保存",
                "body": "パスワードは、そのままでは保存せず、password_hash() で、ハッシュ化します。元の文字列には戻せないので、データが漏れても、パスワードそのものは分かりません。ログイン時は、password_verify() で、照合します。",
                "code": "$hash = password_hash($password, PASSWORD_DEFAULT);\n// ログイン時\nif (password_verify($input, $hash)) { /* 成功 */ }"
              },
              {
                "heading": "セッション固定対策と、エラーメッセージ",
                "body": "ログインに成功した直後に、session_regenerate_id(true) で、セッション ID を作り直します。また、ログイン失敗の理由は、「メールアドレスまたはパスワードが正しくありません」のように、どちらが違うのかを、特定できない形で伝えます。",
                "code": "if (password_verify($input, $user[\"password_hash\"])) {\n  session_regenerate_id(true);\n  $_SESSION[\"user_id\"] = $user[\"id\"];\n}"
              },
              {
                "heading": "例外で、エラーを扱う",
                "body": "失敗するかもしれない処理は、try { ... } catch (Exception $e) { ... } で囲み、例外を受け取って、対処します。エラーを握りつぶさず、記録を残し、利用者には、内部の詳細を見せずに、分かりやすい案内を出します。",
                "code": "try {\n  $pdo = new PDO($dsn, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);\n} catch (PDOException $e) {\n  error_log($e->getMessage());\n  echo \"ただいま、混み合っています\";\n}"
              },
              {
                "heading": "型宣言と strict_types",
                "body": "引数や戻り値に型を書くと、意図しない型の値が、紛れ込む間違いを、早く見つけられます。ファイルの先頭に declare(strict_types=1); を書くと、自動変換が行われず、型の違いが、エラーになります。",
                "code": "<?php\ndeclare(strict_types=1);\n\nfunction price_with_tax(int $price): int {\n  return (int) round($price * 1.1);\n}"
              },
              {
                "heading": "Composer で、部品を管理する",
                "body": "Composer は、ライブラリの導入と、バージョンの管理をする道具です。composer require で、部品を入れると、composer.json に記録されます。vendor/autoload.php を読み込めば、クラスが自動で読み込まれます。",
                "code": "composer require vlucas/phpdotenv\n\n// PHP\nrequire __DIR__ . \"/vendor/autoload.php\";"
              }
            ]
          }
        ]
      },
      "thinking": {
        "beginner": [
          {
            "id": "php-thinking-beginner",
            "title": "値の扱いと、出力を考える",
            "content": "正解は1つではありません。ここまでの知識を使って、自分の言葉で、考えを書いてみましょう。書き終えたら、観点チェックと、模範解答で、見直します。",
            "prompts": [
              {
                "id": "php-thinking-beginner-1",
                "scenario": "新人が書いた PHP で、挨拶を表示しようとしたのに、画面には「こんにちは、$name さん」と、変数名がそのまま出てしまいました。",
                "code": "<?php\n$name = \"太郎\";\necho 'こんにちは、$name さん';",
                "question": "変数名が、そのまま出た理由を説明し、直し方を、2通り書いてください。",
                "checkpoints": [
                  "シングルクォートの中では、変数が値に置き換わらないことを説明している",
                  "ダブルクォートに変える直し方を示している",
                  "ピリオド（.）で文字列をつなぐ直し方を示している",
                  "PHP で文字列をつなぐ演算子が、+ ではないことに触れている"
                ],
                "modelAnswer": "文字列を、シングルクォート（'）で囲むと、中身が、書いたとおりの文字列として扱われ、$name も、変数ではなく、ただの文字になります。直し方は、2通りあります。1つ目は、ダブルクォート（\"）に変えることです。ダブルクォートの中では、変数が値に置き換わるので、「こんにちは、太郎 さん」と出ます。2つ目は、ピリオドでつなぐことです。'こんにちは、' . $name . 'さん' と書けば、変数の値が、文字列の間に入ります。PHP で、文字列をつなぐ演算子は、ピリオドで、+ は、数値の足し算に使うので、注意が必要です。",
                "tip": "迷ったら、「変数を入れたいかどうか」で、引用符を選びましょう。"
              },
              {
                "id": "php-thinking-beginner-2",
                "scenario": "商品の一覧ページを作っています。商品は、名前と価格のデータを、5件持っています。同じ HTML を、5回、コピーして書いている新人に、アドバイスをします。",
                "question": "商品のデータを、どのように持ち、どのように、画面に出すのがよいか、説明してください。",
                "checkpoints": [
                  "商品を、連想配列（名前と価格の組）で持ち、それを配列にまとめることを示している",
                  "foreach で、1件ずつ取り出して、同じ HTML を、繰り返し出力することを説明している",
                  "商品が増えても、コードを、書き足さずに済む利点に触れている",
                  "出力する値が、利用者の入力に由来するなら、htmlspecialchars() を通すことに触れている"
                ],
                "modelAnswer": "商品を、名前と価格の組（連想配列）にして、それを、配列にまとめます。例えば、[[\"name\" => \"りんご\", \"price\" => 120], ...] のように持ちます。表示は、foreach で、1件ずつ取り出し、その中で、同じ HTML の書き方を、1回だけ書きます。こうすると、商品が、5件でも、50件でも、コードを書き足す必要がなく、変更も、1か所で済みます。価格の表示は、number_format() で、3桁区切りにできます。また、商品名が、利用者の入力に由来する場合は、画面に出す直前に、htmlspecialchars() を通して、安全にします。",
                "tip": "同じことを、何度も書いていたら、「配列と繰り返し」に、まとめられないかを、考えましょう。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "php-thinking-intermediate",
            "title": "利用者の入力を、安全に扱う",
            "content": "入力は、信用できない値です。受け取り、確認し、表示し、保存する、それぞれの場面で、何に気をつけるかを、考えます。",
            "prompts": [
              {
                "id": "php-thinking-intermediate-1",
                "scenario": "お問い合わせフォームの確認画面で、入力された内容を、そのまま画面に表示しています。テストで、名前の欄に <script>alert(1)</script> と入力したところ、画面にダイアログが出ました。",
                "code": "<p>お名前: <?php echo $_POST[\"name\"]; ?></p>",
                "question": "何が起きているか、どんな危険があるか、直し方を、説明してください。",
                "checkpoints": [
                  "入力された文字列が、HTML として、そのまま解釈されていることを説明している",
                  "スクリプトを、埋め込まれる攻撃（XSS）の危険があることを指摘している",
                  "出力する直前に、htmlspecialchars() を通すことを示している",
                  "入力の時点ではなく、出力のときに、エスケープする考え方に触れている"
                ],
                "modelAnswer": "入力された <script> が、文字としてではなく、HTML として解釈され、スクリプトが実行されています。悪意のある人が、他の利用者の画面で、スクリプトを実行させたり、Cookie を盗んだりできる、XSS（クロスサイトスクリプティング）という脆弱性です。直し方は、画面に出す直前に、htmlspecialchars($_POST[\"name\"], ENT_QUOTES, \"UTF-8\") を通すことです。< や > などが、無害な表記に変わり、入力した文字が、そのまま画面に表示されるだけになります。エスケープは、出力する場面に合わせて、出力のときに行うのが基本です。",
                "tip": "出力するたびに書くのが、面倒なら、e() のような、短い関数を作って、使いましょう。"
              },
              {
                "id": "php-thinking-intermediate-2",
                "scenario": "会員検索の機能で、入力された名前を、SQL 文に、直接つなげています。先輩に、「SQL インジェクションの危険がある」と、指摘されました。",
                "code": "$sql = \"SELECT * FROM members WHERE name = '\" . $_GET[\"name\"] . \"'\";\n$rows = $pdo->query($sql)->fetchAll();",
                "question": "なぜ危険なのかを説明し、安全な書き方に、直してください。",
                "checkpoints": [
                  "入力された文字列が、SQL の命令の一部として、解釈されうることを説明している",
                  "全件の取得や、データの削除などの、被害の例を挙げている",
                  "プリペアドステートメント（プレースホルダ）を使う書き方を示している",
                  "SQL の形と、値を、別々に渡す仕組みであることを説明している"
                ],
                "modelAnswer": "入力された文字列が、SQL 文に、そのまま入るため、「' OR '1' = '1」のような値を入れられると、条件が常に真になり、全会員の情報が、取得されてしまいます。ほかにも、データの書き換えや削除を、される恐れがあります。直し方は、プリペアドステートメントです。$stmt = $pdo->prepare(\"SELECT * FROM members WHERE name = :name\"); $stmt->execute([\"name\" => $_GET[\"name\"]]); のように、SQL の形と、値を別々に渡します。値は、命令としては解釈されず、ただの値として扱われるので、攻撃を防げます。",
                "tip": "SQL に、変数を、直接つなげたくなったら、まず、プレースホルダに、できないかを考えましょう。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "php-thinking-advanced",
            "title": "認証と、エラーの扱いを設計する",
            "content": "ログインや、エラー処理は、安全性が問われる部分です。何を守りたいかを、先に考えてから、書き方を選びます。",
            "prompts": [
              {
                "id": "php-thinking-advanced-1",
                "scenario": "会員のパスワードを、データベースに、そのままの文字列で保存している既存のシステムを、引き継ぎました。ログインの処理は、保存された値と、入力された値を、比べています。",
                "question": "この設計の問題点と、安全な保存と照合の方法を、説明してください。",
                "checkpoints": [
                  "データが漏れると、パスワードが、そのまま知られてしまうことを指摘している",
                  "password_hash() で、ハッシュ化して保存することを示している",
                  "ログイン時に、password_verify() で、照合することを示している",
                  "既存の会員のパスワードを、どう移行するか（次回ログイン時に、ハッシュ化するなど）に触れている"
                ],
                "modelAnswer": "パスワードを、そのまま保存していると、データベースが、漏れたときに、全員のパスワードが、そのまま知られてしまいます。多くの人が、同じパスワードを、他のサービスでも使っているので、被害が広がります。安全な方法は、password_hash() で、ハッシュ化して保存することです。ハッシュは、元の文字列に戻せません。ログイン時は、password_verify($入力, $保存されたハッシュ) で、照合します。既存の会員の移行は、平文のパスワードを、一括で変換するのではなく、次にログインしたときに、入力された値で照合し、成功したら、ハッシュ化して、保存し直す方法が、現実的です。",
                "tip": "パスワードを、「保存する」のではなく、「照合できる形で残す」と、考えましょう。"
              },
              {
                "id": "php-thinking-advanced-2",
                "scenario": "ログインに失敗したとき、「このメールアドレスは、登録されていません」と、「パスワードが違います」の、2種類のメッセージを、出し分けているシステムがあります。また、データベースに接続できないときは、エラーの詳細が、画面に表示されます。",
                "question": "それぞれの、問題点と、直し方を、説明してください。",
                "checkpoints": [
                  "2種類のメッセージから、登録済みのメールアドレスを、推測されてしまうことを指摘している",
                  "「メールアドレスまたはパスワードが正しくありません」のような、共通のメッセージにすることを示している",
                  "エラーの詳細が、攻撃の手がかりになることを説明している",
                  "try-catch で受け取り、詳細は、ログに残し、利用者には、簡単な案内だけを出すことを示している"
                ],
                "modelAnswer": "出し分けると、攻撃者は、メッセージの違いから、「このメールアドレスは、登録されている」と、推測できるので、そのアドレスに絞って、パスワードを試せます。直し方は、「メールアドレスまたはパスワードが、正しくありません」のように、どちらが違うのか、特定できない、共通のメッセージにすることです。また、データベースのエラーの詳細（接続先や、SQL 文など）を、画面に出すと、内部の構成が、攻撃の手がかりになります。try-catch で例外を受け取り、詳細は、error_log() でログに残し、利用者には、「ただいま、混み合っています」のような、簡単な案内だけを出します。",
                "tip": "利用者に見せる情報と、開発者が見る情報は、分けて考えましょう。"
              }
            ]
          }
        ]
      }
    },
    "shortLabel": "PHP"
  },
  {
    "id": "laravel",
    "name": "Laravel",
    "description": "PHPのLaravelフレームワークでWebアプリを開発します",
    "icon": "fa-brands fa-laravel",
    "lessons": {
      "beginner": [
        {
          "id": "laravel-beginner-1",
          "title": "ルーティング基礎",
          "content": "ルーティング基礎について学びます。重要なトピック：ルートの定義, HTTPメソッド, パラメータ",
          "questions": [
            {
              "id": "q-beg-ルーティング基礎-1",
              "text": "ルートを定義するファイルのうち、ウェブ画面向けのものは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "routes/web.php",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "routes/api.php",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "config/routes.php",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "app/Http/routes.php",
                  "correct": false
                }
              ],
              "explanation": "ウェブ画面向けのルートは routes/web.php に書きます。このファイルのルートには web ミドルウェアグループが適用され、セッションや CSRF 保護が有効になります。routes/api.php は状態を持たない API 用で、プレフィックスや認証の扱いが異なります。",
              "hint": "API 用とは別に、セッションや CSRF 保護が効くファイルが用意されています。",
              "example": "ブログに「お問い合わせ」ページを増やすとき、routes/web.php に Route::get(\"/contact\", ...) を1行足して、URLと画面をつなぎます。"
            },
            {
              "id": "q-beg-ルーティング基礎-2",
              "text": "フォームからのデータ送信を受け取るルートで使う HTTP メソッドは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "POST",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "GET",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "HEAD",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "OPTIONS",
                  "correct": false
                }
              ],
              "explanation": "新しいデータの作成や送信には POST を使います。値が URL に現れず、ブラウザの履歴やログに残らないためです。GET は取得用で、同じリクエストを何度送っても状態が変わらない操作に使います。更新には PUT や PATCH、削除には DELETE を使い分けます。",
              "hint": "URL に値が残らず、送信内容が本文に入る方法はどちらでしょうか。",
              "example": "お問い合わせフォームの「送信」ボタンで入力内容をサーバーへ送るとき、受け取り側のルートを Route::post で定義します。"
            },
            {
              "id": "q-beg-ルーティング基礎-3",
              "text": "Route::get(\"/users/{id}\", ...) の {id} は______を表します。",
              "options": [
                {
                  "id": "a",
                  "text": "URL の一部を受け取るルートパラメータ",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "クエリ文字列の名前",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "ビューに渡す変数名",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "省略可能なコメント",
                  "correct": false
                }
              ],
              "explanation": "{id} はルートパラメータで、URL のその位置の値がコントローラやクロージャの引数として渡されます。/users/5 なら 5 が入ります。{id?} と書けば省略可能になり、where で形式を絞り込めます。?key=value の形はクエリ文字列で、request() から取得します。",
              "hint": "/users/5 にアクセスしたとき、5 がどこへ渡るかを考えてみましょう。",
              "example": "商品詳細ページを /products/1、/products/2 と商品ごとに作らず、/products/{id} の1つのルートで、URLの番号に応じた商品を表示します。"
            },
            {
              "id": "q-beg-ルーティング基礎-4",
              "text": "ルートに名前を付けておくと______という利点があります。",
              "options": [
                {
                  "id": "a",
                  "text": "URL を変更してもリンクの生成箇所を書き換えずに済む",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "ページの表示速度が向上する",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "認証が自動的に有効になる",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "データベース接続が最適化される",
                  "correct": false
                }
              ],
              "explanation": "name() で付けた名前は route(\"users.show\", $id) のようにリンク生成で使えます。URL の綴りを変更しても名前が同じなら生成箇所を直す必要がありません。速度や認証、データベース接続とは無関係です。",
              "hint": "テンプレート中に URL を直書きしていると、パスを変えたとき何が起きるでしょうか。",
              "example": "サイトのURLを /about から /company に変えることになっても、route(\"about\") でリンクを作っていれば、ナビゲーションのリンクを1つずつ直さずに済みます。"
            }
          ]
        },
        {
          "id": "laravel-beginner-2",
          "title": "ビューとテンプレート",
          "content": "ビューとテンプレートについて学びます。重要なトピック：Bladeテンプレート, データの渡し方",
          "questions": [
            {
              "id": "q-beg-ビューとテンプレート-1",
              "text": "Blade で変数を HTML エスケープしたうえで出力する記法は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "{{ $name }}",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "{!! $name !!}",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "<?= $name ?>",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "${ $name }",
                  "correct": false
                }
              ],
              "explanation": "{{ }} は値を HTML エスケープして出力するため、利用者の入力をそのまま渡しても XSS になりません。{!! !!} はエスケープせずに出力するので、信頼できる HTML にのみ使います。素の PHP タグはテンプレートの可読性を損なうため Blade では使いません。",
              "hint": "2種類の出力記法があり、片方はエスケープせずにそのまま出します。",
              "example": "会員登録したユーザーの名前を「ようこそ {{ $user->name }} さん」と表示します。名前に <script> が入っていても文字として表示されるので安全です。"
            },
            {
              "id": "q-beg-ビューとテンプレート-2",
              "text": "コントローラからビューへデータを渡す書き方は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "view(\"users.index\", [\"users\" => $users])",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "view(\"users.index\")->$users",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "return $users;",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "echo view(\"users.index\", $users);",
                  "correct": false
                }
              ],
              "explanation": "view() の第2引数に連想配列を渡すと、キーがそのままビュー内の変数名になります。例の書き方なら Blade 側で $users として使えます。compact(\"users\") や ->with(\"users\", $users) でも同じことができます。",
              "hint": "キーがビュー側での変数名になります。",
              "example": "コントローラで取り出した商品一覧を view(\"products.index\", [\"products\" => $products]) で画面に渡し、一覧表を作ります。"
            },
            {
              "id": "q-beg-ビューとテンプレート-3",
              "text": "共通のレイアウトを使い回すために Blade が用意している仕組みは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "@extends と @section による継承",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "@include のみによる読み込み",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "PHP の require による取り込み",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "ルートの重複定義",
                  "correct": false
                }
              ],
              "explanation": "@extends でレイアウトを継承し、@section で差し込む内容を定義します。レイアウト側は @yield でその位置を示します。@include は部品を読み込む用途で、共通の骨組みを定義する仕組みではありません。コンポーネント指向で書きたい場合は Blade コンポーネントを使います。",
              "hint": "共通の骨組みを1か所に置き、各ページは中身だけを差し込みたい場面です。",
              "example": "ヘッダーとフッターを layouts/app.blade.php に1つだけ作り、各ページは @extends で引き継ぐと、メニューの変更が全ページに一度で反映されます。"
            },
            {
              "id": "q-beg-ビューとテンプレート-4",
              "text": "Blade で配列を繰り返し表示するとき、空の場合の表示も同時に書ける構文は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "@forelse 〜 @empty 〜 @endforelse",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "@foreach 〜 @endforeach",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "@for 〜 @endfor",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "@while 〜 @endwhile",
                  "correct": false
                }
              ],
              "explanation": "@forelse は繰り返しの直後に @empty を置けるため、要素が0件のときの表示を同じブロックにまとめられます。@foreach で同じことをするには if で件数を判定する必要があり、記述が分かれます。",
              "hint": "「1件もないときはこう表示する」を同じブロックに書ける構文があります。",
              "example": "お知らせ一覧で、記事があれば一覧を、1件もなければ「現在お知らせはありません」と表示する画面を @forelse で1つにまとめて書きます。"
            }
          ]
        }
      ],
      "intermediate": [
        {
          "id": "laravel-intermediate-1",
          "title": "コントローラー",
          "content": "コントローラーについて学びます。重要なトピック：コントローラー作成, アクションメソッド, リクエスト処理",
          "questions": [
            {
              "id": "q-int-コントローラー-1",
              "text": "コントローラを生成する Artisan コマンドは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "php artisan make:controller UserController",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "php artisan new:controller UserController",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "php artisan create:controller UserController",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "php artisan generate:controller UserController",
                  "correct": false
                }
              ],
              "explanation": "Laravel の生成コマンドは make: で始まります。--resource を付ければ index から destroy までの7つのメソッドが用意され、--invokable なら単一のアクションだけを持つコントローラになります。",
              "hint": "Laravel の生成系コマンドは make: で統一されています。",
              "example": "商品管理の機能を作り始めるとき、php artisan make:controller ProductController で雛形のファイルを一発で作ります。"
            },
            {
              "id": "q-int-コントローラー-2",
              "text": "コントローラのメソッドで Request $request と型宣言すると______が行われます。",
              "options": [
                {
                  "id": "a",
                  "text": "サービスコンテナが依存を解決し、自動で注入される",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "引数が文字列に変換される",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "リクエストが検証なしで許可される",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "ルートパラメータが無視される",
                  "correct": false
                }
              ],
              "explanation": "Laravel のサービスコンテナが型宣言を見て、必要なインスタンスを自動的に生成し引数へ渡します。これを依存性注入と呼びます。ルートパラメータと併用する場合は、注入する引数を先に、ルートパラメータを後ろに並べます。",
              "hint": "自分で new しなくてもインスタンスが渡ってきます。誰が用意しているのでしょうか。",
              "example": "検索フォームから送られたキーワードを、コントローラの引数に Request $request と書くだけで $request->input(\"q\") として受け取れます。"
            },
            {
              "id": "q-int-コントローラー-3",
              "text": "入力値の検証に失敗したとき、$request->validate() は______します。",
              "options": [
                {
                  "id": "a",
                  "text": "自動的に直前のページへリダイレクトし、エラーを渡す",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "null を返して処理を続行する",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "例外を無視して次の行へ進む",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "データベースに不正な値を保存する",
                  "correct": false
                }
              ],
              "explanation": "validate() は失敗すると ValidationException を送出し、Laravel がこれを捕捉して直前のページへリダイレクトします。入力値とエラーメッセージはセッションに積まれ、Blade 側では $errors と old() で参照できます。API リクエストの場合は 422 の JSON が返ります。",
              "hint": "検証に失敗したあと、自分でリダイレクトを書く必要があったか思い出してみましょう。",
              "example": "会員登録フォームでメールアドレスが空のまま送信されたとき、validate() が自動で入力画面に戻し、「メールアドレスは必須です」と表示してくれます。"
            },
            {
              "id": "q-int-コントローラー-4",
              "text": "リソースコントローラで一覧表示を担当するメソッド名は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "index",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "list",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "all",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "show",
                  "correct": false
                }
              ],
              "explanation": "リソースコントローラでは index が一覧、show が1件の詳細、create と store が作成、edit と update が更新、destroy が削除を担当します。Route::resource で一括登録すると、この命名に沿ったルートが自動生成されます。",
              "hint": "show は1件の詳細表示です。一覧はそれとは別の決まった名前があります。",
              "example": "商品の一覧・登録・編集・削除をまとめて作るとき、リソースコントローラなら一覧は index、詳細は show と担当が決まっているので、迷わずに書けます。"
            }
          ]
        },
        {
          "id": "laravel-intermediate-2",
          "title": "データベース",
          "content": "データベースについて学びます。重要なトピック：Eloquent ORM, モデル定義, クエリビルダ",
          "questions": [
            {
              "id": "q-int-データベース-1",
              "text": "Eloquent モデル User に対応するテーブル名は、規約上______になります。",
              "options": [
                {
                  "id": "a",
                  "text": "users（小文字・複数形）",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "User（クラス名と同じ）",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "user（小文字・単数形）",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "tbl_users（接頭辞付き）",
                  "correct": false
                }
              ],
              "explanation": "Eloquent はモデル名をスネークケースの複数形にしたものをテーブル名とみなします。User なら users、BlogPost なら blog_posts です。規約から外れる場合は、モデルに protected $table = \"...\" を書いて明示します。",
              "hint": "Laravel はクラス名をスネークケースの複数形に変換します。",
              "example": "Order モデルを作れば、特に設定しなくても orders テーブルを読み書きしてくれるので、テーブル名を毎回書かずに済みます。"
            },
            {
              "id": "q-int-データベース-2",
              "text": "Eloquent で主キーからレコードを1件取得し、無ければ 404 にするメソッドは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "findOrFail()",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "find()",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "first()",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "get()",
                  "correct": false
                }
              ],
              "explanation": "findOrFail() は該当レコードが無いと ModelNotFoundException を送出し、Laravel がこれを 404 応答に変換します。find() は null を返すため、呼び出し側で判定が必要です。first() は条件に合う先頭の1件、get() は複数件を返します。",
              "hint": "見つからなかったときに null を返すのではなく、例外を投げてほしい場面です。",
              "example": "注文詳細ページで Order::findOrFail($id) と書けば、存在しない注文番号のURLが開かれても自動で404ページを表示できます。"
            },
            {
              "id": "q-int-データベース-3",
              "text": "一覧表示で各レコードの関連データを参照した結果、クエリが大量に発行される問題を______と呼びます。",
              "options": [
                {
                  "id": "a",
                  "text": "N+1問題",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "デッドロック",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "インジェクション",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "レースコンディション",
                  "correct": false
                }
              ],
              "explanation": "一覧を1回取得したあと、各レコードの関連を参照するたびにクエリが発行される状態を N+1 問題と呼びます。with(\"author\") のように eager loading を指定すれば、関連をまとめて取得して2回のクエリに抑えられます。件数が増えるほど影響が大きくなります。",
              "hint": "1回の一覧取得のあと、レコードの数だけ追加のクエリが走っている状態です。",
              "example": "ブログ一覧で記事50件それぞれの投稿者名を表示したら、データベースへの問い合わせが51回も走ってページが遅くなった。これがN+1問題です。"
            },
            {
              "id": "q-int-データベース-4",
              "text": "クエリビルダで値を where(\"name\", $input) のように渡したとき、SQL インジェクションを防いでいるのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "値がバインドされ、SQL 文と分離して扱われるため",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "値が自動的に大文字へ変換されるため",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "値の長さが制限されるため",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "値が HTML エスケープされるため",
                  "correct": false
                }
              ],
              "explanation": "クエリビルダは値をプレースホルダにバインドして渡すため、値が SQL 文の一部として解釈されません。これがインジェクション対策になります。一方 DB::raw や whereRaw で文字列を直接組み立てる場合は、この保護が働かないため自分でバインドを行う必要があります。",
              "hint": "SQL 文の組み立てと値の受け渡しが分かれている点が鍵です。",
              "example": "検索窓に「' OR 1=1 --」のような悪意ある文字列を入れられても、where に値として渡していれば、全会員データが漏れるような事故を防げます。"
            }
          ]
        }
      ],
      "advanced": [
        {
          "id": "laravel-advanced-1",
          "title": "マイグレーションと関係",
          "content": "マイグレーションと関係について学びます。重要なトピック：マイグレーションファイル, リレーション, バリデーション",
          "questions": [
            {
              "id": "q-adv-マイグレーションと関係-1",
              "text": "マイグレーションの down メソッドに書くべき処理は______です。",
              "options": [
                {
                  "id": "a",
                  "text": "up で行った変更を取り消す処理",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "up と同じ処理",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "テストデータを投入する処理",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "キャッシュを消す処理",
                  "correct": false
                }
              ],
              "explanation": "down は migrate:rollback のときに呼ばれ、up の変更を取り消します。テーブル作成なら dropIfExists、カラム追加なら dropColumn を書きます。ここが正しく書かれていないとロールバックできず、環境の作り直しが必要になります。",
              "hint": "ロールバックしたときに呼ばれるメソッドです。",
              "example": "「商品テーブルに割引率のカラムを追加する」マイグレーションの down に、そのカラムを削除する処理を書いておけば、問題があったときに元に戻せます。"
            },
            {
              "id": "q-adv-マイグレーションと関係-2",
              "text": "1人のユーザーが複数の投稿を持つ関係を User モデルに定義するとき、使うメソッドは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "hasMany(Post::class)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "belongsTo(Post::class)",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "hasOne(Post::class)",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "belongsToMany(Post::class)",
                  "correct": false
                }
              ],
              "explanation": "1対多の「1」の側には hasMany を定義します。外部キー user_id を持つ posts 側には belongsTo(User::class) を定義して対にします。1対1なら hasOne、多対多で中間テーブルを介する場合は belongsToMany を使います。",
              "hint": "外部キーを持っているのは users と posts のどちらのテーブルでしょうか。",
              "example": "$user->posts と書くだけで、そのユーザーが書いた記事の一覧を取り出せるよう、User モデルに hasMany を定義します。"
            },
            {
              "id": "q-adv-マイグレーションと関係-3",
              "text": "外部キー制約を持つカラムを追加するマイグレーションで、順序として正しいのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "参照先のテーブルを作成してから、参照する側を作成する",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "参照する側を先に作成する",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "順序は関係ない",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "両方を同じファイルにまとめれば順序は不要",
                  "correct": false
                }
              ],
              "explanation": "外部キーは参照先のテーブルが存在していないと作成できません。マイグレーションはファイル名の日時順に実行されるため、参照先のファイルが先になるよう配置します。同じファイルにまとめる場合も、記述の順序は参照先が先です。",
              "hint": "存在しないテーブルを参照する制約は作れません。",
              "example": "注文テーブル（orders）が顧客テーブル（customers）を参照するなら、先に customers を作るマイグレーションを実行しておきます。"
            },
            {
              "id": "q-adv-マイグレーションと関係-4",
              "text": "バリデーションルール \"required|email|unique:users,email\" のうち、重複を防いでいるのは______です。",
              "options": [
                {
                  "id": "a",
                  "text": "unique:users,email",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "required",
                  "correct": false
                },
                {
                  "id": "c",
                  "text": "email",
                  "correct": false
                },
                {
                  "id": "d",
                  "text": "すべてのルールが等しく関与している",
                  "correct": false
                }
              ],
              "explanation": "unique:users,email は users テーブルの email カラムに同じ値が無いかを問い合わせて重複を防ぎます。required は未入力でないこと、email は形式が正しいことを確認します。更新時は自分自身を除外するため、unique:users,email,{$id} のように ID を添えます。",
              "hint": "3つのルールはそれぞれ別の観点を確認しています。",
              "example": "会員登録で、すでに登録済みのメールアドレスが入力されたときに「このメールアドレスは既に使われています」と表示して止めます。"
            }
          ]
        }
      ],
      "projects": {
        "beginner": [
          {
            "id": "laravel-project-beginner-1",
            "title": "Laravel 初級プロジェクト",
            "content": "ルーティングと Blade を組み合わせて、一覧と詳細のある画面を作りながら確認します。",
            "questions": [
              {
                "id": "q-beg-Laravel初級プロジェクト-1",
                "text": "一覧ページから詳細ページへのリンクを生成するとき、保守しやすい書き方は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "route() にルート名を渡して生成する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "href に URL を直接書く",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "JavaScript で文字列を組み立てる",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "リダイレクトを経由させる",
                    "correct": false
                  }
                ],
                "explanation": "route() でルート名から URL を生成すれば、パスを変更しても名前が同じなら各所の記述を直す必要がありません。直書きすると変更のたびに全テンプレートを探すことになり、修正漏れが起きます。",
                "hint": "あとで URL の綴りを変えたとき、直す箇所が少ないのはどちらでしょうか。",
                "example": "ブログ一覧の各記事タイトルに route(\"posts.show\", $post) でリンクを付けておけば、後でURLの形を変えてもリンクが壊れません。"
              },
              {
                "id": "q-beg-Laravel初級プロジェクト-2",
                "text": "Blade で利用者名を表示する際、{{ }} を使うべき理由は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "値が HTML エスケープされ、XSS を防げるため",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "表示が中央揃えになるため",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "文字数が自動的に制限されるため",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "データベースへの問い合わせが減るため",
                    "correct": false
                  }
                ],
                "explanation": "{{ }} は出力前に値を HTML エスケープするため、タグが含まれていても文字として表示されスクリプトは実行されません。信頼できない値に {!! !!} を使うと XSS の入口になります。",
                "hint": "利用者が名前に HTML タグを入れてきた場合を考えてみましょう。",
                "example": "掲示板の投稿者名を {{ }} で表示すれば、名前欄に悪意のあるスクリプトを書かれても、他の利用者の画面で実行されません。"
              },
              {
                "id": "q-beg-Laravel初級プロジェクト-3",
                "text": "存在しない ID にアクセスされたときの扱いとして適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "findOrFail() を使い、404 を返す",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "find() の結果をそのままビューへ渡す",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "空の配列を返して一覧を表示する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "例外を握りつぶして白い画面を返す",
                    "correct": false
                  }
                ],
                "explanation": "findOrFail() は該当が無ければ例外を送出し、Laravel が 404 応答に変換します。find() の結果をそのまま渡すと null に対するプロパティ参照でエラーになります。白い画面は利用者にも開発者にも情報が残りません。",
                "hint": "見つからないことは異常ではなく、正しく「無い」と伝えるべき状態です。",
                "example": "削除済みの記事のURL（/posts/999）にアクセスされたとき、真っ白な画面やエラー画面ではなく「ページが見つかりません」の404を返します。"
              },
              {
                "id": "q-beg-Laravel初級プロジェクト-4",
                "text": "フォームを POST 送信する Blade テンプレートに必ず書く必要があるのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "@csrf",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "@method(\"GET\")",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "@include(\"header\")",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "@php",
                    "correct": false
                  }
                ],
                "explanation": "@csrf は CSRF トークンの hidden フィールドを出力します。web ミドルウェアは POST 時にこのトークンを検証するため、無いと 419 Page Expired になります。PUT や DELETE を送る場合は @method も併用します。",
                "hint": "これが無いと 419 のエラーになります。",
                "example": "お問い合わせフォームに @csrf を書き忘れると、送信時に419エラーになります。他サイトから勝手に送信される攻撃を防ぐための仕組みです。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "laravel-project-intermediate-1",
            "title": "Laravel 中級プロジェクト",
            "content": "コントローラと Eloquent を使って、登録と検索を備えた機能を実装しながら確認します。",
            "questions": [
              {
                "id": "q-int-Laravel中級プロジェクト-1",
                "text": "登録処理で入力値を検証する場所として適切なのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "コントローラの validate、またはフォームリクエストクラス",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "Blade テンプレートの中",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "JavaScript の入力チェックのみ",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "データベースの制約のみ",
                    "correct": false
                  }
                ],
                "explanation": "検証はサーバー側で必ず行います。コントローラの validate か、ルールが増えるならフォームリクエストクラスに切り出します。JavaScript のチェックは体験を良くするためのもので、迂回可能です。データベース制約だけに頼ると、利用者に分かりやすいメッセージを返せません。",
                "hint": "ブラウザ側のチェックは、開発者ツールから迂回できます。",
                "example": "イベント申込フォームで、名前は必須・メールは正しい形式・人数は1〜10人、というルールを validate にまとめて書きます。"
              },
              {
                "id": "q-int-Laravel中級プロジェクト-2",
                "text": "登録成功後にリダイレクトする理由は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "再読み込みによる二重送信を防ぐため",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "処理速度が上がるため",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "セッションが自動で破棄されるため",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "バリデーションが再実行されるため",
                    "correct": false
                  }
                ],
                "explanation": "POST の結果をそのまま表示すると、再読み込みで同じ送信が繰り返されます。処理後にリダイレクトして GET で結果を表示すれば、この二重送信を避けられます。完了メッセージは with() でセッションに載せて次の画面で表示します。",
                "hint": "POST の結果画面をそのまま表示すると、更新ボタンで何が起きるでしょうか。",
                "example": "注文完了後に「注文完了ページ」へリダイレクトしておけば、利用者がブラウザを再読み込みしても、同じ注文が二重に入りません。"
              },
              {
                "id": "q-int-Laravel中級プロジェクト-3",
                "text": "検索条件が指定されたときだけ絞り込みを追加したい場合、クエリビルダで使えるのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "when() で条件付きに句を追加する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "常に where を付けて空文字で比較する",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "取得後に PHP 側で絞り込む",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "条件ごとに別のメソッドを用意する",
                    "correct": false
                  }
                ],
                "explanation": "when($keyword, fn($q) => $q->where(...)) と書けば、値がある場合だけ句が追加されます。常に where を付けると該当0件になり、取得後に PHP で絞ると不要なレコードまで読み込むことになります。",
                "hint": "条件が無いときは句そのものを付けたくない場面です。",
                "example": "求人検索で「勤務地」が選ばれたときだけ絞り込みを足し、未選択なら全件を出す、という処理を when() で読みやすく書きます。"
              },
              {
                "id": "q-int-Laravel中級プロジェクト-4",
                "text": "一覧で関連するユーザー名を表示したところクエリが大量に出ました。対処は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "with() で関連をまとめて取得する（eager loading）",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "一覧の件数を減らす",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "キャッシュを無効にする",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "モデルを使わず生の SQL に書き換える",
                    "correct": false
                  }
                ],
                "explanation": "with(\"user\") を付けると、関連するユーザーをまとめて取得するためクエリは2回で済みます。件数を減らすのは一時しのぎにすぎず、キャッシュの設定や生 SQL への書き換えは N+1 そのものの解決になりません。",
                "hint": "レコードごとに関連を取りに行っている状態を、まとめて1回にしたい場面です。",
                "example": "記事一覧で Post::with(\"user\")->get() と書けば、投稿者の情報を1回の問い合わせでまとめて取得でき、ページの表示が速くなります。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "laravel-project-advanced-1",
            "title": "Laravel 上級プロジェクト",
            "content": "マイグレーションとリレーション設計を通じて、整合性を保てるデータ構造を確認します。",
            "questions": [
              {
                "id": "q-adv-Laravel上級プロジェクト-1",
                "text": "本番環境で既存テーブルに NOT NULL のカラムを追加するとき、安全な手順は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "デフォルト値または NULL 許可で追加し、既存行を埋めてから制約を付ける",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "いきなり NOT NULL で追加する",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "テーブルを作り直す",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "マイグレーションを使わず手作業で追加する",
                    "correct": false
                  }
                ],
                "explanation": "既存行に値が無い状態で NOT NULL を付けると追加に失敗します。まず NULL 許可またはデフォルト値付きで追加し、既存行を埋めてから制約を付ける手順に分けます。テーブルの作り直しはデータ消失につながり、手作業は履歴が残りません。",
                "hint": "既存の行には、その列の値がまだありません。",
                "example": "利用者が大勢いる本番サイトの会員テーブルに「電話番号（必須）」を追加するとき、まず空でもよい形で追加し、既存会員の値を埋めてから必須にします。"
              },
              {
                "id": "q-adv-Laravel上級プロジェクト-2",
                "text": "多対多の関係を扱うとき、Laravel が前提とする中間テーブル名の規約は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "2つのモデル名を単数形・アルファベット順に並べ、アンダースコアでつなぐ",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "2つのモデル名を複数形で並べる",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "任意の名前でよく、規約はない",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "必ず pivot という名前にする",
                    "correct": false
                  }
                ],
                "explanation": "Post と Tag なら post_tag のように、単数形をアルファベット順に並べた名前が規約です。規約から外れる場合は belongsToMany の第2引数でテーブル名を明示します。中間テーブルに追加の列を持たせたい場合は withPivot で取得対象に加えます。",
                "hint": "post と tag なら post_tag です。逆順にはなりません。",
                "example": "記事とタグのように「1つの記事に複数のタグ、1つのタグに複数の記事」の関係では、post_tag という名前の中間テーブルを作ります。"
              },
              {
                "id": "q-adv-Laravel上級プロジェクト-3",
                "text": "親レコードを削除したとき、関連する子レコードも確実に削除したい場合の方法は______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "外部キーに cascade を設定する、またはモデルイベントで削除する",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "子テーブルを参照しないようにする",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "削除のたびに手動で SQL を実行する",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "論理削除に切り替えれば自動的に解決する",
                    "correct": false
                  }
                ],
                "explanation": "外部キーに onDelete(\"cascade\") を設定すればデータベース側で連鎖削除されます。アプリ側で扱うならモデルの deleting イベントで子を削除します。論理削除は行を残す仕組みなので、関連の整合性は別途考慮が必要です。",
                "hint": "データベース側の制約で連鎖させるか、アプリ側で明示的に消すかの二択です。",
                "example": "退会したユーザーを削除したとき、その人の投稿やコメントも一緒に消えるよう cascade を設定しておけば、持ち主のいないデータが残りません。"
              },
              {
                "id": "q-adv-Laravel上級プロジェクト-4",
                "text": "複数の更新をまとめて行い、途中で失敗したら全て取り消したい場合に使うのは______です。",
                "options": [
                  {
                    "id": "a",
                    "text": "トランザクション（DB::transaction）",
                    "correct": true
                  },
                  {
                    "id": "b",
                    "text": "キャッシュのクリア",
                    "correct": false
                  },
                  {
                    "id": "c",
                    "text": "キューへの投入",
                    "correct": false
                  },
                  {
                    "id": "d",
                    "text": "ルートのミドルウェア",
                    "correct": false
                  }
                ],
                "explanation": "DB::transaction で囲むと、途中で例外が発生した場合にそれまでの変更がすべて取り消されます。在庫の減算と注文の作成のように、一方だけ成功すると整合性が崩れる処理で使います。キューやキャッシュは実行の分離や高速化の仕組みで、原子性は保証しません。",
                "hint": "全部成功するか、全部なかったことにするか、のどちらかにしたい場面です。",
                "example": "ネットショップの注文処理で「注文を記録」「在庫を減らす」「ポイントを付与」の途中で失敗したら、全部なかったことにします。在庫だけ減って注文がない、という食い違いを防げます。"
              }
            ]
          }
        ]
      },
      "basics": {
        "beginner": [
          {
            "id": "laravel-basics-beginner",
            "title": "URL と画面をつなぐ：ルーティングと Blade",
            "content": "Laravel では「どの URL にアクセスされたら、何を表示するか」をルートで決め、画面は Blade テンプレートで作ります。Web アプリの入口と出口を押さえましょう。",
            "sections": [
              {
                "heading": "ルートは URL と処理の対応表",
                "body": "画面向けのルートは routes/web.php に書きます。ページを表示するときは GET、フォームからデータを送るときは POST を使います。",
                "code": "Route::get('/contact', [ContactController::class, 'create']);\nRoute::post('/contact', [ContactController::class, 'store']);"
              },
              {
                "heading": "ルートパラメータと名前付きルート",
                "body": "{id} のように書くと、URL の一部を受け取れます。ルートに名前を付けておき、リンクは route() で作ると、URL の形を変えてもリンクを書き換えずに済みます。",
                "code": "Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show');\n\n<a href=\"{{ route('posts.show', $post) }}\">{{ $post->title }}</a>"
              },
              {
                "heading": "Blade で値を安全に表示する",
                "body": "コントローラから view() でデータを渡し、Blade では {{ }} で表示します。{{ }} は HTML のタグを無害な文字に変換（エスケープ）するので、利用者が入力した文字を表示しても XSS を防げます。",
                "code": "return view('users.index', ['users' => $users]);\n\n<p>ようこそ {{ $user->name }} さん</p>"
              },
              {
                "heading": "レイアウトの継承と繰り返し",
                "body": "共通のヘッダーやフッターは1つのレイアウトにまとめ、各ページは @extends で引き継ぎ、@section で中身を差し込みます。一覧は @forelse を使うと、データが0件のときの表示も一緒に書けます。",
                "code": "@extends('layouts.app')\n@section('content')\n  @forelse ($posts as $post)\n    <li>{{ $post->title }}</li>\n  @empty\n    <p>まだ記事がありません</p>\n  @endforelse\n@endsection"
              },
              {
                "heading": "フォームの @csrf と、見つからないときの 404",
                "body": "POST で送るフォームには必ず @csrf を書きます。他のサイトから勝手に送信される攻撃（CSRF）を防ぐ仕組みで、書き忘れると 419 エラーになります。また、存在しない ID でアクセスされたときは findOrFail() を使うと、自動で 404 ページを返せます。",
                "code": "<form method=\"POST\" action=\"{{ route('contact.store') }}\">\n  @csrf\n  ...\n</form>\n\n$post = Post::findOrFail($id);"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "laravel-basics-intermediate",
            "title": "コントローラとデータベースで機能を作る",
            "content": "リクエストを受け取って処理し、データベースとやり取りして結果を返す。Web アプリの中心になるコントローラと Eloquent の使い方を学びます。",
            "sections": [
              {
                "heading": "コントローラを作る",
                "body": "php artisan make:controller で雛形を作ります。一覧・詳細・作成・更新・削除をまとめて扱うリソースコントローラでは、一覧は index、詳細は show、保存は store のようにメソッド名の役割が決まっています。",
                "code": "php artisan make:controller PostController --resource"
              },
              {
                "heading": "Request を受け取り、入力を検証する",
                "body": "メソッドの引数に Request $request と書くと、Laravel が自動でリクエストの情報を渡してくれます。$request->validate() にルールを書くと、検証に失敗したときは自動で入力画面に戻り、エラーメッセージが渡されます。",
                "code": "public function store(Request $request)\n{\n    $validated = $request->validate([\n        'title' => 'required|max:100',\n        'email' => 'required|email',\n    ]);\n    Post::create($validated);\n    return redirect()->route('posts.index');\n}"
              },
              {
                "heading": "保存の後はリダイレクトする",
                "body": "登録処理の後にそのまま画面を返すと、利用者がブラウザを再読み込みしたときに同じデータがもう一度送信されます。保存が終わったら別の画面へリダイレクトして、二重登録を防ぎます。"
              },
              {
                "heading": "Eloquent でデータを扱う",
                "body": "モデル Post は、規約により posts テーブル（小文字・複数形）に対応します。where に値を渡すと、値は SQL 文と分けて扱われる（バインド）ので、SQL インジェクションを防げます。検索条件があるときだけ絞り込むなら when() が便利です。",
                "code": "$posts = Post::query()\n    ->when($request->keyword, fn ($q, $kw) => $q->where('title', 'like', \"%{$kw}%\"))\n    ->latest()\n    ->get();"
              },
              {
                "heading": "N+1問題と with()",
                "body": "記事一覧で各記事の投稿者名を表示すると、記事1件ごとに投稿者を問い合わせるため、50件なら51回もの問い合わせが走ります（N+1問題）。with() で関連データをまとめて取得すると、問い合わせは2回で済みます。",
                "code": "$posts = Post::with('user')->get();\n@foreach ($posts as $post)\n  {{ $post->user->name }}\n@endforeach"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "laravel-basics-advanced",
            "title": "テーブル設計とリレーション、安全な更新",
            "content": "データベースの構造をコードで管理するマイグレーションと、テーブル同士の関係（リレーション）を学びます。本番環境で安全にデータを扱うための考え方も押さえましょう。",
            "sections": [
              {
                "heading": "マイグレーションの up と down",
                "body": "マイグレーションは、テーブルの作成や変更をコードとして記録する仕組みです。up に変更内容、down にそれを取り消す処理を書きます。down があれば、問題が起きたときに元に戻せます。",
                "code": "public function up(): void\n{\n    Schema::table('products', function (Blueprint $table) {\n        $table->integer('discount_rate')->default(0);\n    });\n}\n\npublic function down(): void\n{\n    Schema::table('products', function (Blueprint $table) {\n        $table->dropColumn('discount_rate');\n    });\n}"
              },
              {
                "heading": "リレーション：hasMany と belongsTo",
                "body": "「1人のユーザーが複数の記事を持つ」関係は、User モデルに hasMany、Post モデルに belongsTo を定義します。すると $user->posts で記事の一覧を取り出せます。",
                "code": "class User extends Model {\n    public function posts() { return $this->hasMany(Post::class); }\n}\nclass Post extends Model {\n    public function user() { return $this->belongsTo(User::class); }\n}"
              },
              {
                "heading": "外部キーと削除時の扱い",
                "body": "他のテーブルを参照するカラムには外部キー制約を付けます。参照先のテーブルを先に作る必要があります。親を削除したときに子も一緒に消したいなら cascadeOnDelete を指定します。多対多の関係では、2つのモデル名を単数形・アルファベット順にした中間テーブル（post_tag など）を作ります。",
                "code": "$table->foreignId('user_id')->constrained()->cascadeOnDelete();"
              },
              {
                "heading": "ユニーク制約とバリデーション",
                "body": "同じメールアドレスで二重に会員登録されないよう、バリデーションに unique:users,email を書きます。データベース側にもユニーク制約を付けておくと、二重の守りになります。",
                "code": "'email' => 'required|email|unique:users,email',"
              },
              {
                "heading": "トランザクションと本番での変更",
                "body": "複数の更新を「全部成功するか、全部なかったことにするか」のどちらかにしたいときは DB::transaction を使います。また、データが入っている本番のテーブルに必須（NOT NULL）のカラムを追加するときは、いきなり必須にせず、NULL 許可やデフォルト値で追加 → 既存の行を埋める → 必須にする、の順で進めます。",
                "code": "DB::transaction(function () use ($order) {\n    $order->save();\n    $order->product->decrement('stock');\n    $order->user->increment('points', 10);\n});"
              }
            ]
          }
        ]
      },
      "thinking": {
        "beginner": [
          {
            "id": "laravel-thinking-beginner",
            "title": "画面とルートの設計を考える",
            "content": "正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。",
            "prompts": [
              {
                "id": "laravel-thinking-beginner-1",
                "scenario": "小さなブログを Laravel で作ります。必要な画面は「記事一覧」「記事の詳細」「記事の投稿フォーム」と、フォームから送られた記事を保存する処理です。",
                "question": "必要なルート（URL・HTTP メソッド・名前）を設計し、それぞれの画面で気をつけることを書いてください。",
                "checkpoints": [
                  "一覧・詳細・投稿フォームは GET、保存は POST にしている",
                  "詳細ページを /posts/{post} のようにルートパラメータで1つにまとめている",
                  "ルートに名前を付け、リンクは route() で作る方針を示している",
                  "投稿フォームの @csrf、存在しない記事の 404（findOrFail）、表示の {{ }} のいずれかに触れている"
                ],
                "modelAnswer": "ルートは次の4つにします。記事一覧は GET /posts（posts.index）、投稿フォームは GET /posts/create（posts.create）、保存は POST /posts（posts.store）、記事の詳細は GET /posts/{post}（posts.show）です。詳細ページは記事ごとにルートを作らず、{post} で記事の ID を受け取って1つのルートで表示します。一覧から詳細へのリンクは route(\"posts.show\", $post) で作っておけば、URL の形を変えてもリンクは直さずに済みます。投稿フォームには必ず @csrf を書きます。詳細ページでは Post::findOrFail($id) を使い、存在しない記事なら 404 を返します。記事のタイトルや本文は {{ }} で表示し、タグが書かれていても実行されないようにします。",
                "tip": "ルートを設計するときは「見る画面は GET、データを変える処理は POST」と分けて一覧表を作ると整理しやすくなります。"
              },
              {
                "id": "laravel-thinking-beginner-2",
                "scenario": "後輩が作った問い合わせフォームで、「送信すると 419 | Page Expired と表示される」「名前の欄に <b>太字</b> と書いて送ると、確認画面で本当に太字になってしまう」という報告がありました。",
                "code": "<form method=\"POST\" action=\"/contact\">\n  <input name=\"name\">\n  <button>送信</button>\n</form>\n\n{{-- 確認画面 --}}\n<p>お名前：{!! $name !!}</p>",
                "question": "2つの問題の原因と直し方を説明し、なぜその直し方が安全につながるのかも書いてください。",
                "checkpoints": [
                  "419 の原因が @csrf の書き忘れであることを指摘している",
                  "CSRF（他のサイトから勝手に送信される攻撃）を防ぐ仕組みであることを説明している",
                  "{!! !!} はエスケープせずに出力するため、タグが解釈されることを指摘している",
                  "{{ }} に変えて XSS を防ぐ直し方を示している"
                ],
                "modelAnswer": "1つ目の 419 エラーは、フォームに @csrf が書かれていないのが原因です。Laravel は POST の送信に、そのサイトが発行した合言葉（CSRF トークン）が付いているかを確かめます。付いていない送信は、他のサイトから利用者になりすまして送られた可能性があるので拒否されます。<form> の中に @csrf を1行書けば、合言葉が自動で入ります。2つ目は、確認画面で {!! $name !!} を使っているのが原因です。{!! !!} はタグをそのまま出力するので、<b> が太字として解釈されました。もし <script> を書かれたら、他の人の画面でプログラムが実行される危険（XSS）があります。{{ $name }} に変えれば、タグは無害な文字に変換されて表示されます。",
                "tip": "{!! !!} を見かけたら「この中身は本当に信頼できる HTML か？」と必ず確かめましょう。"
              }
            ]
          }
        ],
        "intermediate": [
          {
            "id": "laravel-thinking-intermediate",
            "title": "登録と検索の処理を設計する",
            "content": "入力の検証、保存、検索、表示の速さまで含めて、実際に使える機能を設計する練習です。",
            "prompts": [
              {
                "id": "laravel-thinking-intermediate-1",
                "scenario": "イベントの申込フォームを作ります。項目は名前（必須）、メールアドレス（必須・正しい形式）、参加人数（1〜10人）です。テストでは「申込完了の画面で再読み込みすると、同じ申込がもう1件登録される」という問題も見つかっています。",
                "question": "申込を受け付けるコントローラの処理の流れを、検証・保存・その後の画面の順に書いてください。",
                "checkpoints": [
                  "validate に required・email・数値の範囲（between:1,10 など）のルールを書いている",
                  "検証に失敗すると自動で入力画面に戻り、エラーが表示されることに触れている",
                  "検証済みのデータだけを保存する（$validated を使う）ことに触れている",
                  "保存後にリダイレクトして、再読み込みによる二重登録を防いでいる"
                ],
                "modelAnswer": "store メソッドで Request $request を受け取り、まず $validated = $request->validate(['name' => 'required|max:50', 'email' => 'required|email', 'people' => 'required|integer|between:1,10']); と検証します。ルールに合わなければ、Laravel が自動で入力画面に戻し、エラーメッセージと入力済みの値を渡してくれます。検証を通ったら、Entry::create($validated) のように検証済みのデータだけを保存します。リクエストの値を全部そのまま保存すると、想定外の項目まで書き込まれる恐れがあるからです。保存が終わったら、return redirect()->route('entries.thanks'); で完了画面へリダイレクトします。完了画面はただ表示するだけの GET なので、再読み込みしても申込は増えません。",
                "tip": "データを保存する処理は「検証 → 保存 → リダイレクト」の3点セットで書くと覚えておきましょう。"
              },
              {
                "id": "laravel-thinking-intermediate-2",
                "scenario": "求人サイトの一覧ページで、「勤務地」と「キーワード」で絞り込めます。どちらも空なら全件を表示します。今は if 文が入れ子になって読みにくいうえ、一覧で会社名を表示しているせいか、ページの表示に3秒以上かかっています。",
                "code": "$jobs = Job::all();\nif ($request->area) {\n    $jobs = Job::where('area', $request->area)->get();\n    if ($request->keyword) {\n        $jobs = Job::where('area', $request->area)\n            ->where('title', 'like', '%'.$request->keyword.'%')->get();\n    }\n} elseif ($request->keyword) {\n    $jobs = Job::where('title', 'like', '%'.$request->keyword.'%')->get();\n}\n\n@foreach ($jobs as $job)\n  {{ $job->company->name }}\n@endforeach",
                "question": "読みにくさと遅さ、それぞれの原因と改善方法を書いてください。",
                "checkpoints": [
                  "when() で「条件があるときだけ絞り込みを足す」書き方に整理している",
                  "最初に Job::all() で全件取得している無駄にも触れている（任意）",
                  "一覧で $job->company にアクセスするたびに問い合わせが走る N+1問題を指摘している",
                  "with('company') でまとめて取得する改善を示している"
                ],
                "modelAnswer": "読みにくさの原因は、条件の組み合わせごとに検索を書き分けているからです。条件が増えるたびに分岐が倍に増えていきます。when() を使い、Job::query()->when($request->area, fn ($q, $area) => $q->where('area', $area))->when($request->keyword, fn ($q, $kw) => $q->where('title', 'like', \"%{$kw}%\"))->get() と書けば、「値があるときだけ条件を足す」が1本の流れで表せます。最初の Job::all() で使わないかもしれない全件を取っている無駄もなくなります。遅さの原因は N+1問題です。一覧で $job->company->name を表示するたびに会社を1件ずつ問い合わせるので、求人が100件なら101回の問い合わせが走ります。検索に with('company') を加えれば、会社の情報はまとめて1回で取得され、問い合わせは2回で済みます。",
                "tip": "一覧ページが遅いときは、まず「ループの中で関連データを読んでいないか」を確かめましょう。"
              }
            ]
          }
        ],
        "advanced": [
          {
            "id": "laravel-thinking-advanced",
            "title": "データの整合性を守る設計を考える",
            "content": "本番のデータは「途中で失敗しても壊れない」「後から変えても困らない」ように設計する必要があります。理由まで書いてみましょう。",
            "prompts": [
              {
                "id": "laravel-thinking-advanced-1",
                "scenario": "ネットショップの注文処理で、「注文を保存する」「商品の在庫を減らす」「会員にポイントを付ける」の3つを順に行っています。先日、ポイント付与の処理でエラーが起きたところ、注文と在庫だけが更新され、データが食い違ってしまいました。",
                "code": "$order->save();\n$product->decrement('stock', $order->quantity);\n$user->increment('points', 10); // ここでエラー",
                "question": "なぜデータが食い違ったのかを説明し、どう直すかを書いてください。在庫が足りないときの扱いにも触れてください。",
                "checkpoints": [
                  "3つの更新が別々に確定するため、途中で失敗すると一部だけが反映されることを説明している",
                  "DB::transaction で3つの更新をまとめる直し方を示している",
                  "トランザクション内でエラーが起きると全部が取り消される（ロールバック）ことを説明している",
                  "在庫が足りないときは例外を投げて注文全体を取り消す、などの扱いに触れている"
                ],
                "modelAnswer": "今のコードでは、3つの更新がそれぞれその場でデータベースに確定します。ポイント付与で失敗しても、それより前の注文の保存と在庫の減少は確定済みなので、「注文と在庫はあるのにポイントがない」状態が残りました。直すには、3つの処理を DB::transaction(function () { ... }) の中に入れます。トランザクションの中でエラーが起きると、それまでの更新もすべて取り消され（ロールバック）、何もなかった状態に戻ります。全部成功したときだけ確定するので、食い違いは起きません。また、在庫が注文数より少ない場合は、トランザクションの中で在庫を確認し、足りなければ例外を投げて注文全体を取り消し、利用者には「在庫が不足しています」と伝えます。",
                "tip": "「この処理の途中で失敗したら、どんな状態が残るか」を1行ずつ想像すると、トランザクションが必要な場所が見えてきます。"
              },
              {
                "id": "laravel-thinking-advanced-2",
                "scenario": "会員が1万人いる本番サイトの users テーブルに、「電話番号（必須）」のカラムを追加することになりました。後輩は次のマイグレーションをそのまま本番で実行しようとしています。",
                "code": "Schema::table('users', function (Blueprint $table) {\n    $table->string('phone'); // NOT NULL で追加\n});",
                "question": "このまま実行すると何が起きるかを説明し、安全に追加する手順を書いてください。元に戻す方法にも触れてください。",
                "checkpoints": [
                  "既存の1万人の行に値がないため、必須のカラムを追加すると失敗する（または不正な値が入る）ことを説明している",
                  "まず NULL 許可（nullable）で追加する手順を示している",
                  "既存の会員の値を埋める（入力をお願いする、仮の値を入れる等）手順を示している",
                  "値がそろってから必須にする、down に取り消し処理を書く、のどちらかに触れている"
                ],
                "modelAnswer": "既存の1万人の会員には電話番号の値がありません。必須（NOT NULL）のカラムを追加すると、既存の行に入れる値がないため、データベースによってはマイグレーションが失敗したり、空文字のような意味のない値が全員に入ったりします。安全な手順は3段階です。1つ目のマイグレーションで $table->string('phone')->nullable() として、空でもよい形で追加します。次に、会員にログイン時に電話番号の登録をお願いするなどして、既存の会員の値を埋めていきます（新規登録ではバリデーションで必須にします）。全員の値がそろったことを確認してから、2つ目のマイグレーションで必須に変更します。それぞれのマイグレーションの down には、カラムの削除や nullable に戻す処理を書き、問題が起きたら戻せるようにしておきます。",
                "tip": "本番のテーブルを変えるときは「今あるデータはどうなるか」と「失敗したらどう戻すか」を必ずセットで考えましょう。"
              }
            ]
          }
        ]
      }
    },
    "shortLabel": "La"
  }
]
