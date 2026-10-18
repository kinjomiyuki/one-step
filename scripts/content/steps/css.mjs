export const courseId = 'css';

export const basics = {
  beginner: {
    title: 'セレクタ・詳細度・ボックスモデル',
    content: 'CSS は「どの要素に」「どんな見た目を」当てるかを書く言語です。まずは、当てる相手の選び方と、すべての要素の土台になる箱の考え方を押さえましょう。',
    sections: [
      {
        heading: 'セレクタで対象を選ぶ',
        body: '要素の名前（p）、クラス（.card）、ID（#header）などで、スタイルを当てる相手を選びます。繰り返し使う部品には、クラスを使うのが基本です。ID は、ページに1つだけの要素向けですが、強すぎて上書きしにくいため、スタイルを当てる目的ではあまり使いません。',
        code: 'p { color: #333; }          /* 要素セレクタ */\n.card { padding: 16px; }   /* クラスセレクタ */\n.card:hover { opacity: .8; } /* 擬似クラス */',
        example: 'ボタンの見た目を .button にまとめておけば、class="button" を付けた要素すべてに、同じスタイルを当てられます。'
      },
      {
        heading: '詳細度と、後ろが勝つルール',
        body: '同じ要素に矛盾するスタイルがあるとき、まず詳細度（セレクタの強さ）が比べられ、強いほうが勝ちます。目安は「要素 < クラス < ID < インラインスタイル」です。詳細度が同じなら、後ろに書いたほうが勝ちます。!important は、この仕組みを無視するため、最後の手段です。',
        code: 'p { color: gray; }\n.notice { color: red; }  /* クラスのほうが強い */\n/* <p class="notice"> は red になる */'
      },
      {
        heading: '継承',
        body: 'color や font-family など、文字に関するプロパティは、親の値が子にも引き継がれます。body に指定しておけば、ページ全体に効きます。margin や border のように、引き継がれないプロパティもあります。',
        code: 'body {\n  font-family: sans-serif;\n  color: #333;\n}\n/* 中の p や h1 にも、同じフォントと色が適用される */'
      },
      {
        heading: 'ボックスモデル',
        body: 'すべての要素は、内側から content（中身）、padding（内側の余白）、border（枠線）、margin（外側の余白）という層でできた箱です。初期値では、width は content だけの幅ですが、box-sizing: border-box を指定すると、padding と border も含まれ、計算が楽になります。',
        code: '* { box-sizing: border-box; }\n.card {\n  width: 300px;\n  padding: 16px;\n  border: 1px solid #ddd;\n  margin-bottom: 24px;\n}'
      },
      {
        heading: '単位の使い分けと、マージンの相殺',
        body: 'px は固定の大きさ、rem は html のフォントサイズを基準にした大きさです。文字や余白に rem を使うと、利用者が文字サイズを変えたときに、ページ全体が合わせて拡大されます。縦に隣り合う margin は、足されず、大きいほうだけが有効になる（相殺）ので、間隔が思ったより小さくなることがあります。',
        code: 'h2 { font-size: 1.5rem; margin-bottom: 20px; }\np  { margin-top: 30px; }\n/* h2 と p の間隔は、50px ではなく 30px */'
      }
    ]
  },
  intermediate: {
    title: 'Flexbox と Grid、レスポンシブ',
    content: '要素を並べて配置する仕組みと、画面の幅に合わせて見た目を切り替える方法を学びます。現在の CSS のレイアウトは、この2つが中心です。',
    sections: [
      {
        heading: 'Flexbox で1方向に並べる',
        body: 'display: flex を親に指定すると、直接の子が横一列に並びます。justify-content は主軸方向（横）の揃え、align-items は交差軸方向（縦）の揃えを決めます。間隔は gap で空けます。',
        code: '.header {\n  display: flex;\n  justify-content: space-between; /* 左右に離す */\n  align-items: center;            /* 縦の中央 */\n  gap: 16px;\n}',
        example: 'ロゴを左、メニューを右に置くヘッダーは、space-between の定番の使い方です。'
      },
      {
        heading: 'flex の伸び縮みと折り返し',
        body: 'アイテムに flex: 1 を付けると、余った空間を埋めるように伸びます。固定幅のサイドバーと、残りを使う本文という組み合わせがよく使われます。1行に収まらないときは、コンテナに flex-wrap: wrap を指定すると折り返されます。',
        code: '.layout { display: flex; gap: 24px; }\n.side { width: 240px; }\n.main { flex: 1; }'
      },
      {
        heading: 'Grid で行と列に配置する',
        body: 'display: grid と grid-template-columns で、列の数と幅を決めます。fr は余ったスペースを分け合う比率の単位です。repeat(auto-fit, minmax(240px, 1fr)) と書くと、画面の幅に応じて列の数が自動で変わります。',
        code: '.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 16px;\n}'
      },
      {
        heading: 'Flexbox と Grid の使い分け',
        body: '1方向（横一列、縦一列）に並べるなら Flexbox、行と列の両方を使った格子状のレイアウトなら Grid が向いています。ページ全体のレイアウトは Grid、その中の部品の並びは Flexbox、というように組み合わせるのが一般的です。'
      },
      {
        heading: 'レスポンシブとメディアクエリ',
        body: 'head に viewport の meta タグを書き、スマホ向けのスタイルを基本にして、広い画面向けの指定を min-width のメディアクエリで足す方法（モバイルファースト）が定番です。切り替えの幅は、特定の機種ではなく、内容が窮屈になる幅を基準に決めます。',
        code: '/* 基本（スマホ） */\n.cards { grid-template-columns: 1fr; }\n\n/* 広い画面 */\n@media (min-width: 768px) {\n  .cards { grid-template-columns: repeat(2, 1fr); }\n}'
      }
    ]
  },
  advanced: {
    title: '設計とモダンな CSS',
    content: '規模が大きくなっても崩れにくい書き方と、最近の CSS の機能を学びます。「動く」から「保守しやすい」へ、目線を広げましょう。',
    sections: [
      {
        heading: 'カスタムプロパティで決まりごとを一元管理する',
        body: '--名前: 値; で定義し、var(--名前) で使います。:root に色や余白をまとめておけば、デザインの変更が1か所で済みます。SCSS の変数とは違い、表示中に値を書き換えられるので、ダークモードなどの切り替えにも使えます。',
        code: ':root {\n  --color-primary: #3b82f6;\n  --space: 8px;\n}\n.button {\n  background: var(--color-primary);\n  padding: calc(var(--space) * 2);\n}'
      },
      {
        heading: 'ダークモードに対応する',
        body: '@media (prefers-color-scheme: dark) の中でカスタムプロパティの値を差し替えると、OS の設定に自動で合わせられます。利用者が手動で切り替えたいときは、html の data-theme 属性ごとに値を定義し、ボタンで属性を付け替えます。',
        code: ':root { --bg: #fff; --text: #222; }\n[data-theme="dark"] { --bg: #1e1e1e; --text: #eee; }\nbody { background: var(--bg); color: var(--text); }'
      },
      {
        heading: '命名規則と詳細度の管理',
        body: 'BEM は、ブロック__要素--修飾子 の形で名前を付ける規則です。クラスセレクタ1つを基本にして詳細度を揃えると、「後ろに書いたものが勝つ」という単純なルールで管理できます。ID セレクタや長く繋げたセレクタは、上書きが難しくなります。',
        code: '.card { ... }\n.card__title { ... }\n.card__title--large { font-size: 1.5rem; }'
      },
      {
        heading: 'コンテナクエリで部品単位に切り替える',
        body: 'メディアクエリは画面全体の幅で切り替えますが、コンテナクエリは、部品が置かれている親の幅で切り替えます。同じ部品が、広い場所にも狭い場所にも置かれるとき、置き場所に合った見た目にできます。',
        code: '.wrapper { container-type: inline-size; }\n\n@container (min-width: 400px) {\n  .card { display: flex; }\n}'
      },
      {
        heading: 'clamp() で滑らかに変化させる',
        body: 'clamp(最小, 理想, 最大) は、理想の値を使いつつ、最小値と最大値の範囲に収めます。文字サイズや余白を、画面幅に応じて滑らかに変えるのに便利で、メディアクエリを減らせます。',
        code: 'h1 { font-size: clamp(1.5rem, 4vw, 2.5rem); }\n.section { padding-block: clamp(24px, 6vw, 64px); }'
      }
    ]
  }
};

export const thinking = {
  beginner: {
    title: '崩れた見た目の原因を探る',
    content: '正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。',
    prompts: [
      {
        scenario: '幅 300px のカードを並べたところ、padding: 20px と border: 1px を付けた途端、カードが横にはみ出し、2枚並べるはずの場所に収まらなくなりました。幅の指定は、width: 300px のままです。',
        code: '.card {\n  width: 300px;\n  padding: 20px;\n  border: 1px solid #ddd;\n}',
        question: 'なぜ、はみ出すのかを説明し、直し方を書いてください。',
        checkpoints: [
          '初期値（content-box）では、width が content だけの幅で、padding と border が外側に足されることを説明している',
          '実際の見た目の幅が、300 + 40 + 2 = 342px になることなど、具体的に計算している',
          'box-sizing: border-box を指定すると、padding と border が width に含まれることを示している',
          '全要素に * { box-sizing: border-box; } を指定しておく、という方法に触れている'
        ],
        modelAnswer: '初期値の box-sizing: content-box では、width は中身（content）だけの幅です。そこに padding（左右で 40px）と border（左右で 2px）が外側に足されるため、実際の見た目は 342px になり、枠からはみ出します。直し方は、box-sizing: border-box を指定することです。border-box では、width に padding と border が含まれるので、width: 300px と書けば、見た目も 300px のまま収まります。毎回書くのは大変なので、スタイルシートの最初に * { box-sizing: border-box; } と書き、全要素に指定しておくのが定番です。',
        tip: 'レイアウトが「思ったより大きい」ときは、ボックスの4つの層のどこが大きいのかを疑いましょう。'
      },
      {
        scenario: 'あるサイトで、.notice に color: red を指定したのに、なぜか文字が黒のままです。調べると、別のファイルに、次のようなスタイルが書かれていました。',
        code: '.content p { color: black; }   /* 別のファイル */\n.notice { color: red; }        /* 自分が書いた */\n/* <div class="content"><p class="notice">注意</p></div> */',
        question: 'なぜ、赤にならないのかを、詳細度の考え方で説明してください。そのうえで、!important を使わない直し方を書いてください。',
        checkpoints: [
          '.content p（クラス + 要素）のほうが、.notice（クラスだけ）より詳細度が高いことを説明している',
          '詳細度が違うときは、後ろに書いたかどうかは関係ないことを理解している',
          '!important を使うと、後から直すときに、さらに !important が必要になる問題を指摘している',
          '.content .notice のように詳細度を合わせる、または、既存のセレクタの書き方を見直す案を示している'
        ],
        modelAnswer: '.content p は、クラス1つと要素1つなので、.notice（クラス1つ）より詳細度が高くなります。詳細度が違うときは、強いほうが勝つため、後ろに書いても、.notice の赤は負けて、黒のままです。!important を付ければ赤になりますが、次にこの色を変えたい人も、さらに !important を付けるしかなくなり、管理が難しくなります。そこで、.content .notice { color: red; } のように、詳細度を同じ以上に揃える方法があります。より根本的には、.content p のように、要素に直接当たる書き方をやめ、.content__text のようなクラスにして、詳細度を低く揃えておくと、上書きしやすくなります。',
        tip: '色が変わらないときは、ブラウザの開発者ツールで、どのセレクタが適用され、どれが打ち消されているかを確かめましょう。'
      }
    ]
  },
  intermediate: {
    title: 'レイアウトの手段を選ぶ',
    content: '同じ見た目でも、作り方は複数あります。どの手段を選ぶかを、理由まで書いてみましょう。',
    prompts: [
      {
        scenario: '商品カードを一覧にします。画面が広いときは4列、タブレットでは2列、スマホでは1列に、自動で変わるようにしたいです。後輩は、メディアクエリを3つ書いて、それぞれの幅で、幅を計算した float のレイアウトを作る案を出しています。',
        question: 'この案の問題点を指摘し、Grid を使った、より良い書き方を提案してください。',
        checkpoints: [
          '列数や幅を、画面ごとに手計算する必要があり、変更や追加に弱いことを指摘している',
          'repeat(auto-fit, minmax(…, 1fr)) を使う案を示している',
          '最小幅を決めるだけで、列の数が自動で変わる利点を説明している',
          '間隔を gap で空ける方法に触れている'
        ],
        modelAnswer: '画面ごとに列数と幅を計算して float で組む方法では、メディアクエリを何本も書く必要があり、間隔の計算も複雑になります。カードを1枚増やす、列の数を変える、といった変更のたびに、見直しが必要です。Grid なら、.cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; } の数行で済みます。1枚の最小幅を 240px と決めておくだけで、画面の幅に応じて、入るだけの列が並び、余った幅は均等に分けられます。メディアクエリがなくても、4列、2列、1列と自然に変わります。間隔は gap で空けるので、margin の計算も不要です。',
        tip: '「画面幅で列の数が変わる」ときは、まず auto-fit と minmax で書けないかを考えましょう。'
      },
      {
        scenario: 'ヘッダーを作ります。左にロゴ、右にメニュー（リンク4つ）を置き、縦は中央に揃えたいです。メニューは、スマホでは幅が足りなくなる可能性があります。',
        question: 'Flexbox で、どのように書くかを示し、幅が足りないときの対応も書いてください。',
        checkpoints: [
          'ヘッダーに display: flex を指定している',
          'justify-content: space-between でロゴとメニューを左右に離している',
          'align-items: center で縦の中央に揃えている',
          '幅が足りないときの対応（flex-wrap: wrap、メニューを折り返す、ブレークポイントで縦並びにするなど）を示している'
        ],
        modelAnswer: 'ヘッダーに display: flex を指定し、justify-content: space-between で、ロゴを左端、メニューを右端に離します。縦の揃えは align-items: center で、中央にします。メニュー自体も、ul に display: flex と gap を指定して横に並べます。幅が足りなくなる場合は、ヘッダーに flex-wrap: wrap を指定して、収まらないメニューを次の行に折り返す方法があります。または、メディアクエリ（min-width）を使い、スマホでは flex-direction: column でロゴの下にメニューを縦に並べ、広い画面で横並びにする方法もあります。どちらの場合も、折り返しやすいように gap で間隔を空けておきます。',
        tip: '横に並べる部品は、「収まらなかったときにどうなるか」まで考えて作りましょう。'
      }
    ]
  },
  advanced: {
    title: '保守しやすい CSS の設計判断',
    content: '大きなサイトでは、動くかどうかよりも、後から直しやすいかどうかが重要です。判断の理由まで書いてみましょう。',
    prompts: [
      {
        scenario: 'サイトにダークモードを付けることになりました。今のスタイルシートには、色が、あちこちに #333、#fff、#3b82f6 と直接書かれています。ダークモード用に、すべての色を書き直す必要があり、見積もりが膨らんでいます。',
        question: '今後の保守を見据えて、どのように整理するかと、ダークモードを実現する方法を書いてください。',
        checkpoints: [
          '色の値を、カスタムプロパティ（--color-bg など）にまとめ、各所から var() で参照する方針を示している',
          '意味のある名前（--bg、--text など）を付ける利点に触れている',
          'prefers-color-scheme や data-theme で、カスタムプロパティの値だけを差し替える方法を示している',
          '色の変更が1か所で済む、という利点を説明している'
        ],
        modelAnswer: 'まず、色を直接書くのをやめ、:root に --color-bg、--color-text、--color-primary のように、役割を表す名前のカスタムプロパティとして定義します。各所の色の指定は、var(--color-text) のような参照に置き換えます。名前を役割で付けておけば、後から「どこに使われる色か」が分かります。そのうえで、ダークモードは、カスタムプロパティの値だけを差し替えます。OS の設定に合わせるなら @media (prefers-color-scheme: dark) の中で、手動で切り替えるなら [data-theme="dark"] の中で、:root と同じ名前に暗い色を定義します。各部品のスタイルは1行も変えずに、配色だけが切り替わります。色を変えたい場合も、定義の1か所を直すだけで済みます。',
        tip: '色や余白は、「値」ではなく「役割の名前」で管理すると、変更に強くなります。'
      },
      {
        scenario: '長く運用されているサイトで、あるボタンの色を変えようとしたところ、何度スタイルを書いても反映されません。調べると、過去の開発者が、詳細度の高いセレクタや !important を多用していました。',
        code: '#main .content div.box ul li a.btn { color: blue !important; }',
        question: 'このような状況を、なぜ避けるべきかと、新しく書くときに気をつけることを書いてください。',
        checkpoints: [
          '詳細度が高いスタイルを上書きするには、さらに高い詳細度か !important が必要になる、悪循環を指摘している',
          'ID セレクタ、長く繋げたセレクタ、!important を避ける方針を示している',
          'クラスセレクタ1つを基本にし、詳細度を低く揃える方針を示している',
          'BEM のような命名規則で、構造を名前に持たせる考え方に触れている'
        ],
        modelAnswer: 'この書き方は、詳細度が非常に高く、さらに !important まで付いているため、上書きするには、もっと高い詳細度か、同じく !important を重ねるしかなくなります。次の人も同じ問題に当たり、悪循環になって、CSS がどんどん複雑になります。新しく書くときは、ID セレクタや、親から子まで長く繋げたセレクタを避け、.btn のようなクラスセレクタ1つを基本にして、詳細度を低く揃えます。こうしておけば、「後ろに書いたほうが勝つ」という単純なルールで管理でき、バリエーションは .btn--danger のような修飾クラスを足すだけで作れます。BEM のように、ブロック__要素--修飾子 の命名にしておけば、名前に構造が表れるので、長いセレクタで場所を指定する必要もなくなります。',
        tip: '「あとで上書きしたくなったとき、楽か」を、セレクタを書くたびに自分に問いましょう。'
      }
    ]
  }
};
