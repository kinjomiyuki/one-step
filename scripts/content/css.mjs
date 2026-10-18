// 先頭が * の選択肢が正解。正解の位置は問題ごとに散らしてある
const opt = (...texts) => texts.map((t, i) => ({
  id: 'abcd'[i],
  text: t.replace(/^\*/, ''),
  correct: t.startsWith('*')
}));

export const course = {
  id: 'css',
  name: 'CSS',
  description: 'セレクタ、ボックスモデル、レイアウトなど、見た目を整える基本を学びます',
  icon: 'fa-brands fa-css3-alt',
  shortLabel: 'CS'
};

export const lessons = {
  beginner: [
    {
      title: 'セレクタと詳細度',
      content: 'どの要素にどのスタイルを当てるかを決めるセレクタと、スタイルが衝突したときの優先順位を学びます。',
      questions: [
        {
          text: 'クラスセレクタを書くとき、クラス名の前に付ける記号は______です。',
          options: opt(
            '#（例: #card）',
            '*.（例: .card）',
            '@（例: @card）',
            ':（例: :card）'
          ),
          hint: 'HTML の class="card" に当てるスタイルです。ID セレクタとは別の記号を使います。',
          explanation: 'クラスセレクタはドット（.）で始めます。# は ID セレクタ、: は :hover のような擬似クラスに使います。クラスは同じ名前を複数の要素に付けられるので、部品のスタイルを当てるときの基本になります。'
        },
        {
          text: '同じ要素に、要素セレクタ（h1）とクラスセレクタ（.title）が別々の色を指定しているとき、適用されるのは______です。',
          options: opt(
            '*クラスセレクタの色（詳細度が高いため）',
            '要素セレクタの色（先に書かれているため）',
            '2つの色が混ざった色',
            'どちらも適用されず、ブラウザの初期色になる'
          ),
          hint: '「どちらが後ろに書かれたか」の前に、セレクタの強さを比べます。',
          explanation: 'スタイルが衝突すると、まず詳細度（セレクタの強さ）が比べられ、強いほうが勝ちます。要素セレクタよりクラスセレクタのほうが強いので、.title の色が適用されます。詳細度が同じときだけ、後ろに書かれたものが勝ちます。'
        },
        {
          text: 'CSS の「継承」の説明として正しいのは______です。',
          options: opt(
            'すべてのプロパティが、親から子に自動で引き継がれる',
            '子要素のスタイルが、親要素に引き継がれる',
            '継承させるには、すべてのプロパティに inherit を書く必要がある',
            '*color や font-family などは、親要素の値が子要素にも引き継がれる'
          ),
          hint: 'body に文字色を指定すると、中の段落の文字色も変わることを思い出してみましょう。',
          explanation: 'color や font-family のような文字に関するプロパティは、親の値が子に引き継がれます。一方、margin や border などは引き継がれません。引き継がれないプロパティでも、inherit を指定すれば親の値を使えます。'
        },
        {
          text: '!important を多用しないほうがよい理由は______です。',
          options: opt(
            'ブラウザによっては、!important が無視されるため',
            '*後から上書きするのが難しくなり、スタイルの管理が難しくなるため',
            'ページの読み込みが遅くなるため',
            'クラスセレクタと一緒に使えないため'
          ),
          hint: '!important が付いたスタイルを、後から変えたくなったときのことを考えてみましょう。',
          explanation: '!important は詳細度を無視して優先されるため、後から上書きするには、さらに !important を重ねるしかなくなります。そうなるとスタイルの優先順位が追いにくくなります。まずはセレクタの書き方や順番を見直し、どうしても必要なときだけ使います。'
        }
      ]
    },
    {
      title: 'ボックスモデルと単位',
      content: 'すべての要素は四角い箱として扱われます。箱の構造と、大きさを表す単位の違いを学びます。',
      questions: [
        {
          text: 'ボックスモデルで、内側から外側へ並ぶ順番として正しいのは______です。',
          options: opt(
            'content → margin → border → padding',
            'content → border → padding → margin',
            '*content → padding → border → margin',
            'padding → content → margin → border'
          ),
          hint: '中身のまわりに余白（内側）があり、その外側に枠線、さらに外側に他の要素との距離があります。',
          explanation: '内容（content）、内側の余白（padding）、枠線（border）、外側の余白（margin）の順です。padding は背景色が塗られる内側の余白で、margin は要素どうしの距離を空ける外側の余白です。'
        },
        {
          text: 'box-sizing: border-box を指定したときの width は______を含んだ大きさになります。',
          options: opt(
            '*padding と border',
            'margin だけ',
            'padding、border、margin のすべて',
            '何も含まず、content の幅だけ'
          ),
          hint: '初期値（content-box）では、width に padding と border が足されて、実際の見た目が大きくなります。',
          explanation: 'border-box では、width に padding と border が含まれます。width: 300px と書けば、見た目の幅が 300px に収まるので、計算が楽になります。多くのサイトでは、* { box-sizing: border-box; } を最初に指定しています。'
        },
        {
          text: 'rem 単位の基準になる大きさは______です。',
          options: opt(
            '親要素のフォントサイズ',
            '*html 要素（ルート）のフォントサイズ',
            'ブラウザ画面の幅',
            'その要素自身の幅'
          ),
          hint: 'em は親要素が基準です。rem の r は「root（ルート）」を表します。',
          explanation: 'rem は html 要素のフォントサイズが基準です。多くのブラウザでは初期値が 16px なので、1rem = 16px になります。em は親要素の影響を受けて、入れ子になると大きさが積み重なりますが、rem は常に同じ基準なので、扱いやすくなります。'
        },
        {
          text: '縦に隣り合う2つの要素の margin が、重なって大きいほうだけが有効になる現象を______といいます。',
          options: opt(
            'マージンの継承',
            'マージンのリセット',
            '*マージンの相殺',
            'マージンのオーバーフロー'
          ),
          hint: '上の要素に margin-bottom: 20px、下の要素に margin-top: 30px を付けたときの間隔は、50px にはなりません。',
          explanation: '縦方向に隣り合う margin は、足し算されず、大きいほうの値だけが採用されます。これをマージンの相殺といいます。上の例では間隔は 30px になります。左右の margin や、Flexbox・Grid の中では相殺は起きません。'
        }
      ]
    }
  ],
  intermediate: [
    {
      title: 'Flexbox',
      content: '要素を横や縦に並べ、揃えるための仕組みです。親と子の役割と、主なプロパティを学びます。',
      questions: [
        {
          text: 'display: flex を指定した要素の直接の子要素は、______になります。',
          options: opt(
            'フレックスコンテナ',
            '*フレックスアイテム',
            'グリッドアイテム',
            'インライン要素'
          ),
          hint: '親は「容れ物（コンテナ）」、その中に並べられるものは「項目（アイテム）」です。',
          explanation: 'display: flex を指定した親がフレックスコンテナで、その直接の子要素がフレックスアイテムです。孫要素は並び方の対象になりません。並べ方を指定するプロパティは、コンテナに書くものとアイテムに書くものに分かれています。'
        },
        {
          text: 'flex-direction: row のとき、justify-content が揃える方向は______です。',
          options: opt(
            '縦方向',
            '斜め方向',
            '*横方向（主軸）',
            '奥行き方向'
          ),
          hint: 'justify-content は主軸、align-items は交差軸に沿って揃えます。row の主軸は左から右です。',
          explanation: 'justify-content は主軸方向、align-items は交差軸方向の揃え方を決めます。row では主軸が横なので、justify-content は横方向の揃えです。column にすると主軸が縦になるので、役割が入れ替わります。'
        },
        {
          text: 'フレックスアイテムに flex: 1 を指定したときの動きは______です。',
          options: opt(
            '*余った空間を、他のアイテムと分け合って伸びる',
            '大きさが 1px に固定される',
            '他のアイテムより先に縮む',
            '1 行目にだけ表示される'
          ),
          hint: 'flex: 1 は flex-grow: 1 を含む短縮記法です。',
          explanation: 'flex: 1 は、余った空間を伸びて埋める指定です。複数のアイテムにすべて flex: 1 を付ければ、同じ幅で均等に分け合います。サイドバーを固定幅にして、本文だけ flex: 1 にすれば、残りの幅をすべて使わせることができます。'
        },
        {
          text: 'フレックスアイテムが1行に収まらないとき、折り返して次の行に並べるための指定は______です。',
          options: opt(
            'flex-direction: wrap',
            'flex-flow: none',
            'justify-content: wrap',
            '*flex-wrap: wrap'
          ),
          hint: '初期値は nowrap で、収まらなくても折り返さず、縮められます。',
          explanation: 'flex-wrap: wrap をコンテナに指定すると、収まらないアイテムが次の行に折り返されます。初期値の nowrap のままだと、アイテムが縮んだり、はみ出したりします。カード一覧のような並びでは、wrap と gap を組み合わせるのが定番です。'
        }
      ]
    },
    {
      title: 'Grid とレスポンシブ',
      content: '行と列で配置する Grid と、画面の幅に応じて見た目を切り替える方法を学びます。',
      questions: [
        {
          text: 'grid-template-columns: repeat(3, 1fr) と書いたときの表示は______です。',
          options: opt(
            '幅 1px の列が3本できる',
            '*同じ幅の列が3本できる',
            '3 行にわたって 1 つの列ができる',
            '1 列目だけが、3 倍の幅になる'
          ),
          hint: 'repeat(3, 1fr) は、1fr を3回繰り返すという意味です。',
          explanation: 'repeat(3, 1fr) は、1fr の列を3本並べる指定です。fr は、余ったスペースを分け合う比率の単位なので、3本とも同じ幅になります。1fr 2fr 1fr のように書けば、真ん中だけ2倍の幅にできます。'
        },
        {
          text: 'Flexbox と Grid の使い分けとして、最も適切なのは______です。',
          options: opt(
            'Flexbox は PC 用、Grid はスマホ用',
            'Grid のほうが新しいので、Flexbox はもう使わない',
            '*Flexbox は1方向の並び、Grid は行と列の2方向のレイアウトに向いている',
            'Flexbox は文字用、Grid は画像用'
          ),
          hint: 'ナビゲーションのように1列に並べるものと、ページ全体の格子状のレイアウトを思い浮かべてみましょう。',
          explanation: 'Flexbox は、横一列や縦一列に並べる1方向のレイアウトが得意です。Grid は、行と列の両方を使った2次元のレイアウトに向いています。どちらかだけを使うのではなく、ページ全体は Grid、部品の中の並びは Flexbox のように、組み合わせるのが一般的です。'
        },
        {
          text: 'モバイルファーストの書き方で、広い画面向けのスタイルを追加するときに使うのは______です。',
          options: opt(
            '@media (max-width: 767px)',
            '@media print',
            '*@media (min-width: 768px)',
            '@media (orientation: landscape)'
          ),
          hint: 'まず小さい画面用のスタイルを書き、画面が広くなったら上書きしていきます。',
          explanation: 'モバイルファーストでは、基本のスタイルをスマホ向けに書き、min-width のメディアクエリで広い画面向けの変更を足していきます。スマホは軽い指定だけで済み、書く量も少なくなります。max-width は、逆に小さい画面向けの指定を足すときに使います。'
        },
        {
          text: 'スマホで見たときにレイアウトが崩れないよう、HTML の head に書いておくべきなのは______です。',
          options: opt(
            '*<meta name="viewport" content="width=device-width, initial-scale=1">',
            '<meta name="description" content="...">',
            '<meta charset="UTF-8">',
            '<link rel="stylesheet" href="style.css">'
          ),
          hint: 'これがないと、スマホはパソコン向けの広い幅で描画してから縮小して表示してしまいます。',
          explanation: 'viewport の meta タグは、スマホの画面幅に合わせて表示するための指定です。ないと、スマホは約 980px の幅で描画して縮小表示するため、メディアクエリも期待どおりに動きません。レスポンシブなページには必須の1行です。'
        }
      ]
    }
  ],
  advanced: [
    {
      title: '設計と最新の機能',
      content: '大きなサイトでも崩れにくい書き方と、最近使えるようになった機能の使いどころを学びます。',
      questions: [
        {
          text: 'CSS カスタムプロパティ（CSS 変数）を定義して使う書き方は______です。',
          options: opt(
            '$main: #3b82f6; を定義し、color: $main; で使う',
            '*--main: #3b82f6; を定義し、color: var(--main); で使う',
            '@main: #3b82f6; を定義し、color: @main; で使う',
            'main = #3b82f6 を定義し、color: main で使う'
          ),
          hint: 'SCSS の $ や Less の @ とは違い、CSS 自身の仕組みです。',
          explanation: 'カスタムプロパティは、-- で始まる名前で定義し、var() で取り出します。:root に書けばページ全体で使えます。SCSS の変数と違って、表示中に値を書き換えられるので、ダークモードなどの切り替えにも使えます。'
        },
        {
          text: 'BEM の命名で、.card__title--large が表しているのは______です。',
          options: opt(
            'card という要素の中の large という要素',
            'title というブロックに属する card という要素',
            '*card ブロックの title 要素で、large という修飾（見た目の違い）が付いたもの',
            'card と title と large の3つの独立したブロック'
          ),
          hint: 'BEM は Block（ブロック）、Element（要素）、Modifier（修飾子）の頭文字です。',
          explanation: 'BEM は、ブロック__要素--修飾子 の形で名前を付けます。.card__title--large は、card ブロックの中の title 要素で、large という違いがあるもの、という意味です。名前から構造が分かり、詳細度を揃えやすいのも利点です。'
        },
        {
          text: 'コンテナクエリ（@container）が、メディアクエリと違う点は______です。',
          options: opt(
            '印刷時にだけ使える',
            'JavaScript がないと動かない',
            '*画面全体の幅ではなく、親のコンテナの幅に応じてスタイルを切り替えられる',
            '詳細度を無視して、常に優先される'
          ),
          hint: '同じカード部品が、広いメイン領域と狭いサイドバーのどちらにも置かれる場面を考えてみましょう。',
          explanation: 'メディアクエリは画面全体の幅で切り替えますが、コンテナクエリは、置かれている親の幅で切り替えます。同じ部品を、広い場所と狭い場所の両方で使うとき、置き場所に応じた見た目にできるので、部品単位の設計に向いています。'
        },
        {
          text: 'font-size: clamp(16px, 2vw, 24px) の説明として正しいのは______です。',
          options: opt(
            '*画面幅に応じて変わるが、16px 未満にも 24px 超にもならない',
            '16px から 24px まで、2 秒かけて大きくなる',
            '常に 2vw で、16px と 24px は無視される',
            '16px、2vw、24px の平均値になる'
          ),
          hint: 'clamp は、最小値、理想の値、最大値の3つを受け取ります。',
          explanation: 'clamp(最小, 理想, 最大) は、理想の値（ここでは 2vw）を使いつつ、最小値より小さくならず、最大値より大きくならないようにします。メディアクエリを使わずに、文字サイズを画面幅に滑らかに合わせたいときに便利です。'
        }
      ]
    }
  ]
};

export const projects = {
  beginner: {
    title: 'CSS 初級プロジェクト',
    content: 'カード部品を作りながら、ボックスモデル、色、動きの基本を確認します。',
    questions: [
      {
        text: 'ページ全体で、padding や border を含めて大きさを計算しやすくするために、最初に書いておくとよい指定は______です。',
        options: opt(
          '全要素に margin: 0 を指定する',
          '*全要素に box-sizing: border-box を指定する',
          '全要素に display: block を指定する',
          '全要素に position: relative を指定する'
        ),
        hint: 'width: 300px と書いたとき、見た目の幅がそのまま 300px になってほしい場面を考えます。',
        explanation: 'box-sizing: border-box を全体に指定しておくと、width に padding と border が含まれ、計算が楽になります。margin のリセットや display の指定は、別の目的の指定で、大きさの計算には影響しません。'
      },
      {
        text: 'カードの中身と枠線の間に、背景色が塗られた余白を作りたいときに使うのは______です。',
        options: opt(
          'margin',
          'gap',
          'outline',
          '*padding'
        ),
        hint: '背景色が塗られるのは、要素の内側か外側のどちらでしょうか。',
        explanation: 'padding は内側の余白で、背景色が塗られます。margin は外側の余白で、背景は塗られません。gap は Flexbox や Grid の中で、アイテム同士の間隔を空けるときに使います。'
      },
      {
        text: 'カードにマウスを乗せたときの変化を滑らかにするために使うのは______です。',
        options: opt(
          'display: smooth',
          'animation-name: hover',
          '*transition',
          'visibility: slow'
        ),
        hint: '変化の「前」と「後」の間を、少しずつ補間して動かします。',
        explanation: 'transition は、プロパティの値が変わるとき、指定した時間をかけて少しずつ変化させます。.card { transition: transform 0.2s; } と書き、.card:hover { transform: translateY(-4px); } とすれば、ふわっと浮く動きになります。'
      },
      {
        text: '背景が白いカードの文字色を決めるとき、最も重視すべきなのは______です。',
        options: opt(
          'ブランドカラーを、必ず使うこと',
          '背景に近い色にして、上品に見せること',
          '文字を、できるだけ細くすること',
          '*背景とのコントラストが十分にあり、読みやすいこと'
        ),
        hint: '明るい場所や、視力に差がある人が読む場合も想像してみましょう。',
        explanation: '文字は、背景との明るさの差（コントラスト）が十分でないと読みにくくなります。薄いグレーの文字を白い背景に置くのは、よくある失敗です。デザインの好みより先に、読みやすさを確保します。'
      }
    ]
  },
  intermediate: {
    title: 'CSS 中級プロジェクト',
    content: '幅に応じて列の数が変わるカード一覧を作りながら、レイアウトの考え方を確認します。',
    questions: [
      {
        text: '画面の幅に応じて、カードの列の数が自動で変わる Grid を作る指定は______です。',
        options: opt(
          'grid-template-columns: repeat(3, 1fr)',
          '*grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))',
          'grid-template-columns: 240px',
          'grid-auto-flow: column'
        ),
        hint: '「1枚の幅が最低 240px で、入るだけ並べる」という指定です。',
        explanation: 'repeat(auto-fit, minmax(240px, 1fr)) は、最小 240px の列が入るだけ並び、余った幅は均等に分けられます。メディアクエリを書かなくても、画面の幅に応じて列の数が変わります。'
      },
      {
        text: 'カードどうしの間隔を、マージンの相殺や端の余分な余白を気にせずに空ける方法は______です。',
        options: opt(
          'すべてのカードに、margin: 10px を付ける',
          'カードの間に、空の div を入れる',
          '*コンテナに gap を指定する',
          '<br> タグを入れる'
        ),
        hint: 'Flexbox や Grid では、アイテムどうしの間だけを空けるプロパティがあります。',
        explanation: 'gap は、Flexbox や Grid のアイテムどうしの間だけに間隔を作ります。margin を使うと、端のカードの外側にも余白ができたり、調整が必要になったりします。空の要素や <br> で間隔を作るのは、HTML を汚すので避けます。'
      },
      {
        text: '画像が親の幅からはみ出さないようにするために、よく使う指定は______です。',
        options: opt(
          'img { overflow: hidden; }',
          'img { width: 100vw; }',
          '*img { max-width: 100%; height: auto; }',
          'img { position: fixed; }'
        ),
        hint: '画像本来の大きさより大きくならず、親が狭いときだけ縮んでほしい場面です。',
        explanation: 'max-width: 100% は、画像が親の幅を超えないようにします。height: auto を合わせて指定すると、縦横比を保ったまま縮みます。width: 100vw は画面幅いっぱいになり、親からはみ出すことがあります。'
      },
      {
        text: 'メディアクエリのブレークポイント（切り替えの幅）を決めるときの考え方として適切なのは______です。',
        options: opt(
          '特定の機種の画面幅に、ぴったり合わせる',
          '*レイアウトが崩れる幅や、読みにくくなる幅を基準にする',
          '必ず 320px、640px、1280px のいずれかにする',
          '少なければ少ないほどよいので、必ず1つだけにする'
        ),
        hint: 'ブラウザの幅を少しずつ変えてみて、内容が窮屈になるところを探します。',
        explanation: '機種の数は多く、画面幅も毎年変わるので、特定の機種に合わせるのは現実的ではありません。内容が窮屈になったり、行が長すぎて読みにくくなったりする幅を基準にします。決まった数字はなく、サイトの内容によって変わります。'
      }
    ]
  },
  advanced: {
    title: 'CSS 上級プロジェクト',
    content: '色や余白の決まりごとを、カスタムプロパティで一元管理し、ダークモードにも対応させます。',
    questions: [
      {
        text: '色や余白のデザインの決まりを、サイト全体で共有するために、カスタムプロパティをどこに定義するのが一般的か。答えは______です。',
        options: opt(
          '各ボタンの中',
          'head の中の title タグ',
          'img 要素',
          '*:root（ページ全体に適用されるルート）'
        ),
        hint: 'ページのどこからでも var(--名前) で取り出せる場所が必要です。',
        explanation: ':root は html 要素を指し、ここで定義したカスタムプロパティは、ページ内のすべての要素から参照できます。色、余白、角丸などを :root にまとめておけば、デザインの変更も1か所で済みます。'
      },
      {
        text: 'OS やブラウザのダークモード設定に自動で合わせるために使うのは______です。',
        options: opt(
          '@media (min-width: dark)',
          '@supports (color: dark)',
          '@font-face { color: dark }',
          '*@media (prefers-color-scheme: dark)'
        ),
        hint: '利用者の設定（好み）を調べるメディアクエリです。',
        explanation: 'prefers-color-scheme は、利用者が OS やブラウザで選んでいる配色の設定を調べるためのメディアクエリです。@media (prefers-color-scheme: dark) の中で、:root のカスタムプロパティの値を、暗い配色に差し替えます。'
      },
      {
        text: '利用者がボタンで、ライトとダークを手動で切り替えられるようにするとき、適切な方法は______です。',
        options: opt(
          'ボタンを押すたびに、別の CSS ファイルを読み込み直す',
          'すべての要素に、個別に色を指定する',
          '*html に data-theme 属性を付け替え、属性ごとにカスタムプロパティの値を定義する',
          'ページを2つ作り、リンクで行き来する'
        ),
        hint: '見た目の切り替えを、HTML の属性1つの変更だけで済ませたい場面です。',
        explanation: '[data-theme="dark"] { --bg: #1e1e1e; } のように、属性ごとに値を定義しておき、ボタンで html の data-theme を付け替えます。CSS は1つのままで、全体の配色が一度に変わります。ファイルの読み込み直しは、ちらつきの原因になります。'
      },
      {
        text: '部品のスタイルを、あとから上書きしやすく保つために、セレクタの書き方で気をつけるのは______です。',
        options: opt(
          'できるだけ ID セレクタを使う',
          '*クラスセレクタ1つを基本にし、詳細度を低く揃える',
          '親から子まで、長く繋げて書く',
          'すべてに !important を付ける'
        ),
        hint: '詳細度が高いスタイルを上書きするには、さらに高い詳細度が必要になります。',
        explanation: 'ID セレクタや、長く繋げたセレクタは詳細度が高く、上書きするためにさらに強い指定が必要になります。クラスセレクタ1つを基本にして詳細度を揃えておくと、後ろに書いたものが勝つ、という単純なルールで管理できます。'
      }
    ]
  }
};
