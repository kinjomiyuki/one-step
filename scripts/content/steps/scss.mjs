export const courseId = 'scss';

export const basics = {
  beginner: {
    title: '変数・ネスト・ミックスインで CSS を整理する',
    content: 'SCSS は CSS を書きやすくするための言語で、最後は普通の CSS に変換（コンパイル）されて使われます。同じ記述の繰り返しを減らす基本の機能を押さえましょう。',
    sections: [
      {
        heading: '変数で値を1か所にまとめる',
        body: '$ で始まる変数に色やサイズを入れておくと、何度も使う値を1か所で管理できます。色を変えたいときも変数の1行を直すだけで、使っているすべての場所に反映されます。',
        code: '$primary: #e85d75;\n$space: 8px;\n\n.button {\n  background: $primary;\n  padding: $space * 2;  // 16px\n}',
        example: '余白を 8px の倍数（8・16・24px）で統一すると、ページ全体の間隔のリズムがそろいます。'
      },
      {
        heading: 'ネストは浅く保つ',
        body: 'セレクタを入れ子に書くと、部品ごとにまとまって読みやすくなります。ただし深くすると出力される CSS のセレクタが長くなり、詳細度が上がって後から上書きしにくくなります。3階層程度までにとどめます。',
        code: '.card {\n  padding: 16px;\n  .title { font-weight: bold; }\n}\n/* 出力: .card .title { font-weight: bold; } */'
      },
      {
        heading: '& で親セレクタを参照する',
        body: 'ネストの中の & は親のセレクタを表します。ホバーや状態のクラスを、本体の近くにまとめて書けます。',
        code: '.button {\n  background: $primary;\n  &:hover { opacity: 0.8; }\n  &.is-active { font-weight: bold; }\n}'
      },
      {
        heading: 'ミックスインでスタイルの塊を使い回す',
        body: '@mixin で定義したスタイルの塊を、@include で呼び出します。引数を付ければ、同じ形のスタイルを値だけ変えて作れます。@content を使うと、呼び出し側が書いたスタイルをミックスインの中に差し込めます。',
        code: '@mixin button($color) {\n  padding: 8px 16px;\n  border-radius: 8px;\n  background: $color;\n}\n.save   { @include button(blue); }\n.delete { @include button(red); }\n\n@mixin sp {\n  @media (max-width: 767px) { @content; }\n}\n.title { font-size: 24px; @include sp { font-size: 18px; } }'
      },
      {
        heading: '// と /* */ のコメント',
        body: '// のコメントはコンパイル後の CSS に残りません。作業メモはこちらで書きます。/* */ のコメントは CSS に残るので、ライセンス表示など残したい注記に使います。'
      }
    ]
  },
  intermediate: {
    title: '計算・関数と、ファイルの分け方',
    content: '値を計算したり、ルールを関数にしたりすると、デザインの決まりごとをコードで表せます。ファイルを役割ごとに分けて管理する方法も学びます。',
    sections: [
      {
        heading: '計算と calc()',
        body: 'SCSS では同じ単位どうしなら計算できます（16px * 2 など）。100% - 240px のように単位が違う値は、表示時にブラウザに計算してもらうため calc() を使います。',
        code: '.main {\n  width: calc(100% - 240px);  // サイドバーの幅を引く\n}'
      },
      {
        heading: '色の関数とマップ',
        body: 'sass:color モジュールの関数を使うと、色を少し明るくするなどの調整ができます。マップ（キーと値の組）に色の一覧をまとめ、map.get で取り出せます。',
        code: '@use "sass:color";\n@use "sass:map";\n\n$colors: (primary: #3b82f6, danger: #ef4444);\n.alert { color: map.get($colors, danger); }\n.button:hover { background: color.adjust(#3b82f6, $lightness: 10%); }'
      },
      {
        heading: '@function と @mixin の違い',
        body: '@function は値を1つ返し、プロパティの値として使います。@mixin はスタイルの宣言（複数行）をその場に展開します。「値がほしい」なら関数、「スタイルの塊がほしい」ならミックスインです。',
        code: '@use "sass:math";\n\n@function rem($px) {\n  @return math.div($px, 16) * 1rem;\n}\n.title { font-size: rem(24); }  // 1.5rem'
      },
      {
        heading: 'パーシャルと @use',
        body: 'ファイル名を _ で始めると「部品のファイル」になり、単体の CSS としては出力されません。読み込みには @use を使います。@use は名前空間を持ち、同じファイルを何度読み込んでも1回分しか出力されません。',
        code: '// _variables.scss\n$primary: #3b82f6;\n\n// main.scss\n@use "variables";\n.button { background: variables.$primary; }'
      },
      {
        heading: '役割ごとにファイルを分ける',
        body: '変数・ミックスイン（他から使われる定義）、ベース、レイアウト、部品（ボタン・カード）のように役割ごとに分けると、目的の記述をすぐ見つけられます。他から参照される定義を先に読み込みます。ブレークポイントもミックスインにまとめると、幅の値を1か所で管理できます。',
        code: '// main.scss\n@use "variables";\n@use "mixins";\n@use "base";\n@use "components/button";\n@use "components/card";'
      }
    ]
  },
  advanced: {
    title: 'クラスの自動生成と、テーマの切り替え',
    content: 'マップと繰り返しを組み合わせると、規則的なクラスをまとめて作れます。便利な反面、作りすぎにも注意が必要です。実行時に切り替える値との使い分けも学びます。',
    sections: [
      {
        heading: 'マップと @each でクラスを生成する',
        body: '色の一覧をマップに定義し、@each で回すと、.text-primary や .bg-danger のようなクラスをまとめて生成できます。色を1つ追加すれば、関連するクラスも自動で増えます。',
        code: '$colors: (primary: #3b82f6, danger: #ef4444, success: #22c55e);\n\n@each $name, $color in $colors {\n  .text-#{$name} { color: $color; }\n  .bg-#{$name}   { background: $color; }\n}'
      },
      {
        heading: '@for と @each の使い分け',
        body: '@for は「1から5まで」のように回数を指定して繰り返します。@each はリストやマップの要素を順に処理します。余白クラスの段階のように数で決まるものは @for、色の名前のように一覧で決まるものは @each が向いています。',
        code: '@for $i from 1 through 5 {\n  .mt-#{$i} { margin-top: $i * 8px; }\n}'
      },
      {
        heading: '@if はコンパイル時、@media は表示時',
        body: '@if は CSS を作る時点で評価され、条件に合った CSS だけが出力されます。@media は CSS の中に残り、画面幅などに応じて表示中に切り替わります。「書き出す CSS を変えたい」のか「表示中に切り替えたい」のかで選びます。'
      },
      {
        heading: 'SCSS 変数と CSS カスタムプロパティ',
        body: 'SCSS の変数はコンパイル時に値が埋め込まれ、表示中には変えられません。ダークモードのように表示中に切り替えたい値は、CSS カスタムプロパティ（--color-bg）にします。ブレークポイントの幅のように変えない値は SCSS 変数で十分です。',
        code: ':root { --color-bg: #ffffff; --color-text: #222222; }\n[data-theme="dark"] { --color-bg: #1e1e1e; --color-text: #eeeeee; }\nbody { background: var(--color-bg); color: var(--color-text); }'
      },
      {
        heading: '生成しすぎに注意する',
        body: '色10種類×余白10段階×画面幅3種類のように組み合わせを全部作ると、CSS は一気に膨らみ、そのほとんどは使われません。実際に使う組み合わせだけに絞って生成します。'
      }
    ]
  }
};

export const thinking = {
  beginner: {
    title: '繰り返しの多い CSS を整理する',
    content: '正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。',
    prompts: [
      {
        scenario: 'あるサイトの CSS で、ブランドカラーの #3b82f6 が15か所に直接書かれています。余白も 7px、10px、15px、18px などバラバラです。クライアントから「ブランドカラーを少し明るくしたい」「全体の余白をそろえたい」と頼まれました。',
        question: 'SCSS を使ってどう整理するか、手順と理由を書いてください。',
        checkpoints: [
          'ブランドカラーを変数（$primary など）にまとめ、15か所から参照する方針を示している',
          '色の変更が変数1か所の修正で済む、という利点を説明している',
          '余白の基準値（8px など）を変数にし、その倍数で指定する方針を示している',
          'バラバラの値を基準に合わせて置き換える手順や、置き換え時の確認に触れている'
        ],
        modelAnswer: 'まず、ブランドカラーを $primary: #3b82f6; という変数にし、15か所の色の指定をすべて $primary に置き換えます。そうすれば「少し明るく」という依頼には、変数の1行を書き換えるだけで、全ページに一度で反映できます。直接書いたままだと15か所を探して直す必要があり、1か所でも漏れると色がそろいません。余白は、基準を $space: 8px; と決め、$space（8px）、$space * 2（16px）、$space * 3（24px）の3段階程度で指定します。今の 7px や 10px は 8px に、15px や 18px は 16px に、というように近い段階に寄せて置き換えます。置き換え後は、各ページを見て崩れている所がないかを確かめます。',
        tip: '同じ値が3回以上出てきたら、変数にするタイミングです。'
      },
      {
        scenario: 'ボタンが「保存（青）」「削除（赤）」「キャンセル（グレー）」の3種類あります。今は、角丸・余白・文字の太さ・ホバー時の透明度などの同じ指定を3回書いていて、色だけが違います。',
        code: '.btn-save   { padding: 8px 16px; border-radius: 8px; font-weight: bold; background: blue; }\n.btn-save:hover { opacity: 0.8; }\n.btn-delete { padding: 8px 16px; border-radius: 8px; font-weight: bold; background: red; }\n.btn-delete:hover { opacity: 0.8; }\n.btn-cancel { padding: 8px 16px; border-radius: 8px; font-weight: bold; background: gray; }\n.btn-cancel:hover { opacity: 0.8; }',
        question: 'ミックスインを使ってどう書き直すかを示し、今後ボタンの種類が増えたときや、共通部分を変えたいときにどう楽になるかを説明してください。',
        checkpoints: [
          '共通部分を、色を引数で受け取るミックスインにまとめている',
          'ホバーの指定を & を使ってミックスインの中にまとめている',
          '各ボタンは @include で色を渡すだけにしている',
          '種類の追加や共通部分の変更が1か所で済む、という利点を説明している'
        ],
        modelAnswer: '@mixin button($color) { padding: 8px 16px; border-radius: 8px; font-weight: bold; background: $color; &:hover { opacity: 0.8; } } というミックスインを作り、.btn-save { @include button(blue); }、.btn-delete { @include button(red); }、.btn-cancel { @include button(gray); } と書き直します。共通の指定はミックスインの中に1回だけ書き、ボタンごとの違いである色だけを引数で渡します。ホバーの指定も & でミックスインの中にまとめられます。こうしておけば、「注意（黄色）」のボタンが増えても1行で作れますし、「角丸をもう少し大きく」と言われても、ミックスインの1か所を直すだけで全部のボタンに反映されます。',
        tip: '「ほとんど同じで、一部の値だけ違う」スタイルを見つけたら、違う部分を引数にしたミックスインを考えましょう。'
      }
    ]
  },
  intermediate: {
    title: 'SCSS のファイル構成を設計する',
    content: 'プロジェクトが大きくなるほど、ファイルの分け方と読み込み方が作業のしやすさを左右します。理由まで書いてみましょう。',
    prompts: [
      {
        scenario: 'コーポレートサイトのスタイルが、2,000行ある1つの style.scss に書かれています。中には変数、ミックスイン、全体の基本設定、ヘッダー、フッター、ボタン、カード、フォーム、各ページ固有のスタイルが混ざっています。チームの3人が同時に編集するとよくぶつかります。',
        question: 'どのようにファイルを分け、どの順で読み込むかを設計し、その理由を書いてください。',
        checkpoints: [
          '変数・ミックスイン、ベース、レイアウト、部品、ページなど、役割ごとにファイルを分けている',
          '部品のファイルを _ で始まるパーシャルにしている',
          '他から参照される変数・ミックスインを最初に読み込む順番にしている',
          '@use で読み込み、名前空間を付けて参照することに触れている'
        ],
        modelAnswer: '役割ごとに、_variables.scss（色・余白・ブレークポイント）、_mixins.scss（ボタンやメディアクエリのミックスイン）、_base.scss（全体の基本設定）、layout/_header.scss・_footer.scss、components/_button.scss・_card.scss・_form.scss、pages/_top.scss・_about.scss のように分けます。どれも単体では CSS として出力しない部品なので、名前を _ で始めるパーシャルにします。main.scss では、他のファイルから使われる変数とミックスインを最初に、次にベース、レイアウト、部品、ページの順に @use で読み込みます。各ファイルでも @use "variables"; と読み込み、variables.$primary のように名前空間を付けて参照するので、どの値がどこで決められたものかが分かります。ファイルが分かれていれば、「ボタンを直す人」と「フッターを直す人」が別のファイルを編集でき、ぶつかりにくくなります。',
        tip: 'ファイルを分けるときは「この記述を直したいとき、どのファイルを開くか、すぐ分かるか」を基準にしましょう。'
      },
      {
        scenario: 'レスポンシブ対応で、@media (max-width: 767px) と @media (min-width: 768px) and (max-width: 1023px) が、いろいろなファイルに合計80か所書かれています。デザイナーから「タブレットの境目を 1024px から 1080px に変えたい」と言われました。',
        question: 'この状態の問題点と、ミックスインと変数を使った改善案を書いてください。',
        checkpoints: [
          '画面幅の値が80か所に直接書かれ、変更が大変で漏れやすいことを指摘している',
          'ブレークポイントの値を変数（またはマップ）にまとめている',
          '@content を使ったメディアクエリのミックスイン（mq(tablet) など）を作る案を示している',
          '呼び出し側は「どの画面幅か」という意図だけを書けばよくなる、という利点を説明している'
        ],
        modelAnswer: '画面幅の値が80か所に直接書かれているので、境目を変えるには全部を探して直す必要があり、1か所でも漏れると、その部分だけ崩れます。改善案として、まず $breakpoints: (sp: 767px, tablet: 1023px); のように境目の値をマップにまとめます。次に、@mixin mq($name) { @media (max-width: map.get($breakpoints, $name)) { @content; } } のようなミックスインを作ります。各ファイルでは .title { @include mq(sp) { font-size: 18px; } } のように、「スマホのとき」「タブレットのとき」という意図だけを書けばよくなります。境目を変えたいときは、マップの値を1か所直すだけで、80か所すべてに反映されます。',
        tip: 'デザインの「決まりごと」の数値は、変数やミックスインにして1か所で管理するのが基本です。'
      }
    ]
  },
  advanced: {
    title: '仕組みで作る CSS の設計判断',
    content: '自動生成やテーマ切り替えは便利ですが、使いどころを誤ると重く、扱いにくくなります。判断の理由まで書いてみましょう。',
    prompts: [
      {
        scenario: 'サイトにダークモードを付けることになりました。後輩は「SCSS の変数で $bg-light と $bg-dark を用意して、ダークモード用の CSS ファイルを別に作り、ボタンが押されたらファイルを読み込み直す」という案を出しています。',
        question: 'この案の問題点を説明し、より良い実現方法を、SCSS 変数と CSS カスタムプロパティの違いをふまえて書いてください。',
        checkpoints: [
          'SCSS 変数はコンパイル時に値が埋め込まれ、表示中には切り替えられないことを説明している',
          'CSS ファイルを読み込み直す方法は、ちらつきや二重管理の問題があることを指摘している',
          'CSS カスタムプロパティで色を定義し、data-theme などの属性やクラスで値を切り替える方法を示している',
          'ブレークポイントなど変えない値は SCSS 変数のままでよい、という使い分けに触れている'
        ],
        modelAnswer: 'SCSS の変数は CSS に変換する時点で値が埋め込まれるため、表示中に値を変えることはできません。そのため後輩の案では、ライト用とダーク用の2つの CSS を作って管理することになり、スタイルを1つ直すたびに両方を直す二重管理になります。ボタンでファイルを読み込み直すと、読み込みの間に画面がちらつく問題もあります。より良い方法は、CSS カスタムプロパティを使うことです。:root { --color-bg: #fff; --color-text: #222; } と [data-theme="dark"] { --color-bg: #1e1e1e; --color-text: #eee; } を定義し、各部品は background: var(--color-bg) のように参照します。ボタンが押されたら <html> の data-theme を切り替えるだけで、CSS は1つのまま、即座に配色が変わります。ブレークポイントや余白の基準のように表示中に変えない値は、SCSS 変数のままで問題ありません。',
        tip: '「その値は、ページを表示している最中に変わるか？」で、SCSS 変数とカスタムプロパティを使い分けましょう。'
      },
      {
        scenario: '便利クラスを自動生成する仕組みを作ったところ、CSS ファイルが 1.2MB になり、スマホでの表示が遅くなりました。調べると、実際の HTML で使われている便利クラスは全体の5%ほどでした。',
        code: '$colors: (red, blue, green, yellow, purple, orange, pink, gray, black, white);\n$sizes: (0, 4, 8, 12, 16, 20, 24, 32, 40, 48);\n$screens: (sp, tablet, pc);\n\n@each $screen in $screens {\n  @each $color in $colors {\n    @each $size in $sizes {\n      // 色×余白×画面幅の全組み合わせのクラスを生成\n    }\n  }\n}',
        question: 'ファイルが大きくなった原因と、どう見直すかを書いてください。見直すときの判断の基準も含めてください。',
        checkpoints: [
          '組み合わせの数が掛け算で増え、そのほとんどが使われていないことを指摘している',
          '実際に使う色・段階・画面幅に絞って生成する方針を示している',
          '色と余白のように、組み合わせる必要のないものは別々に生成する、などの工夫に触れている',
          '「使われているか」「デザインの決まりに沿っているか」など、生成する対象を決める基準を示している'
        ],
        modelAnswer: '原因は、色10種類×余白10段階×画面幅3種類の組み合わせを、すべてクラスとして生成していることです。組み合わせは掛け算で増えるので、使うかどうかに関係なく大量のクラスが作られ、実際に使われているのは5%しかありません。見直しの方針は3つです。1つ目は、色と余白は本来別々の性質なので、組み合わせずに「色のクラス」「余白のクラス」として別々に生成することです。これだけで掛け算が足し算になります。2つ目は、色をデザインで決めたブランドの色に、余白を 8px の倍数の数段階に絞ることです。3つ目は、画面幅ごとのクラスは、実際に画面幅で切り替える必要がある余白などに限ることです。生成する対象は、「今の HTML で実際に使われているか」「デザインの決まりに含まれているか」の2つを満たすものに限ります。',
        tip: '自動生成を書く前に、「いくつのクラスができるか」を掛け算で見積もってみましょう。'
      }
    ]
  }
};
