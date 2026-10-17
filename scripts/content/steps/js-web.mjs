export const courseId = 'js-web';

export const basics = {
  beginner: {
    title: 'DOM：JavaScript から画面を書き換える仕組み',
    content: 'ボタンを押すと表示が変わる、入力した文字がすぐ反映される。こうした動きはすべて DOM 操作で作られています。基本の流れを押さえましょう。',
    sections: [
      {
        heading: 'DOM はページを表す「部品の木」',
        body: 'ブラウザは HTML を読み込むと、見出しやボタンなどの部品を木のような構造のオブジェクトにします。これが DOM です。JavaScript から DOM を書き換えると、ページを読み込み直さなくても画面がすぐに変わります。',
        example: 'SNS で「いいね」を押した瞬間にハートが赤くなり数字が増えるのは、JavaScript がその部分の DOM だけを書き換えているからです。'
      },
      {
        heading: '要素を選ぶ：querySelector',
        body: '操作したい部品は、まず選んで取り出します。querySelector は CSS と同じ書き方（#id、.class、タグ名）で最初に見つかった要素を返します。見つからなければ null を返します。',
        code: 'const title = document.querySelector("#title");\nconst firstItem = document.querySelector(".item");\nconst buttons = document.querySelectorAll("button"); // 全部'
      },
      {
        heading: '中身を変える：textContent',
        body: 'textContent に文字列を代入すると、要素の中身がその文字に置き換わります。タグは解釈されず文字のまま表示されるので、利用者の入力を表示するときも安全です。',
        code: 'title.textContent = `ようこそ、${name}さん`;'
      },
      {
        heading: '操作に反応する：addEventListener',
        body: '「クリックされたら」「入力されたら」などのタイミングで処理を動かすには、addEventListener でイベントと関数を登録します。第2引数には、そのとき呼び出したい関数を渡します。',
        code: 'button.addEventListener("click", () => {\n  title.textContent = "押されました";\n});'
      },
      {
        heading: 'よくあるつまずき：要素がまだない、空の入力',
        body: 'HTML の <head> で読み込んだスクリプトは、ボタンなどの要素ができる前に動くため、querySelector が null を返して止まります。<script> を </body> の直前に置くか defer を付けます。また、入力欄はスペースだけでも「空ではない」と判定されるので、trim() で前後の空白を取ってから空かどうかを確かめます。',
        code: '<script src="app.js" defer></script>\n\nif (input.value.trim() === "") {\n  error.textContent = "名前を入力してください";\n  return;\n}'
      }
    ]
  },
  intermediate: {
    title: 'イベントと非同期処理を使いこなす',
    content: '実際のアプリでは、たくさんの部品へのイベント登録や、サーバーとの通信が欠かせません。使い勝手の良い画面を作るための考え方を学びます。',
    sections: [
      {
        heading: 'イベントリスナーは何個でも登録できる',
        body: 'onclick = 関数 という書き方は、後から代入すると前の処理が消えてしまいます。addEventListener なら同じイベントに複数の処理を重ねて登録でき、互いに上書きしません。'
      },
      {
        heading: 'イベント委任：親に1つだけ登録する',
        body: 'リストの項目1つずつにクリック処理を付けると、後から追加した項目には処理が付きません。親要素に1つだけ登録し、event.target で「どの項目が押されたか」を判断すれば、後から増えた項目にも効きます。',
        code: 'list.addEventListener("click", (event) => {\n  const item = event.target.closest("li");\n  if (!item) return;\n  item.classList.toggle("done");\n});',
        example: 'ToDo リストで、新しく追加したタスクにも完了・削除の操作を効かせたいときに使います。'
      },
      {
        heading: '非同期処理：待っている間も画面は動く',
        body: 'fetch や setTimeout のように時間のかかる処理は、結果を待たずに次の処理へ進みます（非同期処理）。そのおかげで、通信中もスクロールや他の操作ができます。結果を使う処理は await や then で「結果が来てから」動かします。'
      },
      {
        heading: '通信中の画面をていねいに作る',
        body: '通信中は読み込み表示を出し、送信ボタンを無効にして二重送信を防ぎます。失敗したときは catch で受け取り、利用者に伝えます。読み込み表示とボタンは、成功しても失敗しても finally で必ず元に戻します。',
        code: 'button.disabled = true;\nloading.hidden = false;\ntry {\n  const res = await fetch("/api/posts", { method: "POST", body });\n  if (!res.ok) throw new Error("送信失敗");\n  message.textContent = "送信しました";\n} catch {\n  message.textContent = "送信に失敗しました。もう一度お試しください";\n} finally {\n  button.disabled = false;\n  loading.hidden = true;\n}'
      },
      {
        heading: 'fetch は「通信できたか」と「成功したか」が別',
        body: 'fetch は、サーバーが 404 や 500 を返しても「通信自体はできた」としてエラーになりません。res.ok で成功したかを確かめ、失敗なら自分でエラーとして扱う必要があります。'
      }
    ]
  },
  advanced: {
    title: '要素の生成・見た目の切り替え・なめらかな動き',
    content: '画面に部品を増やしたり、見た目を切り替えたり、動かしたりする応用操作を学びます。数が多いときの速さと安全性も大切なポイントです。',
    sections: [
      {
        heading: '要素を作って追加する',
        body: 'createElement で新しい要素を作っても、それだけでは画面に出ません。appendChild などで既存の要素の中に追加して初めて表示されます。',
        code: 'const li = document.createElement("li");\nli.textContent = "新しいタスク";\nlist.appendChild(li); // ここで初めて表示される'
      },
      {
        heading: '見た目は classList で切り替える',
        body: 'JavaScript で style を1つずつ書き換えるより、見た目は CSS のクラスにまとめておき、classList.add / remove / toggle で付け外しするほうが管理しやすくなります。',
        code: 'document.body.classList.toggle("dark");\n/* CSS 側 */\n.dark { background: #222; color: #eee; }',
        example: 'ダークモードの切り替えボタンは、body に dark クラスを付け外しするだけで作れます。'
      },
      {
        heading: 'たくさん追加するときは DocumentFragment',
        body: '100件の要素を1つずつ画面に追加すると、そのたびにブラウザが配置の計算をやり直します。DocumentFragment という画面外の入れ物にまとめて組み立て、最後に1回だけ追加すると速くなります。',
        code: 'const fragment = document.createDocumentFragment();\nitems.forEach(item => {\n  const li = document.createElement("li");\n  li.textContent = item.name;\n  fragment.appendChild(li);\n});\nlist.appendChild(fragment); // 1回だけ'
      },
      {
        heading: 'スクロールのような頻繁なイベントは間引く',
        body: 'scroll や resize は1秒に何十回も発生します。毎回重い処理をすると画面がカクつくので、「一定間隔に1回だけ実行する」スロットリングで回数を抑えます。'
      },
      {
        heading: 'アニメーションは requestAnimationFrame',
        body: 'setInterval で位置を少しずつ変えると、画面の描き換えのタイミングとずれてカクつきます。requestAnimationFrame は、ブラウザが次に画面を描く直前に呼ばれるので、なめらかに動きます。単純な動きなら CSS の transition や animation で済むことも多くあります。',
        code: 'function step() {\n  x += 2;\n  box.style.transform = `translateX(${x}px)`;\n  if (x < 300) requestAnimationFrame(step);\n}\nrequestAnimationFrame(step);'
      }
    ]
  }
};

export const thinking = {
  beginner: {
    title: '画面が動かない原因を突き止める',
    content: '正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。',
    prompts: [
      {
        scenario: '名前を入力してボタンを押すと「ようこそ、○○さん」と表示されるページを作りました。ところが開いた瞬間に開発者ツールに「Cannot read properties of null (reading \'addEventListener\')」と表示され、何も動きません。',
        code: '<head>\n  <script src="app.js"></script>\n</head>\n<body>\n  <input id="name">\n  <button id="greet">あいさつ</button>\n  <p id="message"></p>\n</body>\n\n// app.js\ndocument.querySelector("#greet").addEventListener("click", () => {\n  const name = document.querySelector("#name").value;\n  document.querySelector("#message").textContent = `ようこそ、${name}さん`;\n});',
        question: 'エラーの原因と直し方を説明し、あわせてこの機能で他に気をつけるべき点を挙げてください。',
        checkpoints: [
          'スクリプトが <head> で読み込まれ、ボタンができる前に実行されていることを指摘している',
          'querySelector が null を返し、null の addEventListener を呼んでエラーになる流れを説明している',
          'defer を付ける、または <script> を </body> の直前に移す直し方を示している',
          '空欄やスペースだけで押されたときの扱い（trim して確認する）など、追加の注意点を挙げている'
        ],
        modelAnswer: 'ブラウザは HTML を上から順に読みます。<head> の中の app.js はその場で実行されますが、その時点では <body> の中のボタンがまだ作られていません。そのため querySelector("#greet") は null を返し、null に対して addEventListener を呼んだことでエラーになりました。直し方は、<script src="app.js" defer></script> のように defer を付けるか、<script> を </body> の直前に移すことです。どちらも要素ができてからスクリプトが動きます。もう1つ、名前が空欄やスペースだけのまま押されると「ようこそ、 さん」と表示されてしまうので、value.trim() が空なら「名前を入力してください」と表示して処理を止めると親切です。',
        tip: '「null の〜を読めない」というエラーは、多くの場合「探した要素が見つかっていない」サインです。要素名のつづりと、スクリプトが動くタイミングを確かめましょう。'
      },
      {
        scenario: 'ToDo リストを作っています。入力欄にタスクを書いて「追加」を押すと一覧に増え、各タスクの横の「完了」ボタンで打ち消し線が付く仕様です。',
        question: 'この機能を作るときの処理の流れを、「どの要素を選ぶか」「どのイベントで何をするか」「どう表示を変えるか」に分けて、手順として書いてください。',
        checkpoints: [
          '入力欄・追加ボタン・一覧（ul）など、最初に選ぶ要素を挙げている',
          '追加ボタンの click で、入力値を確かめてから li を作って一覧に追加する流れを書いている',
          '表示を変える方法として textContent や classList（打ち消し線用のクラス）を使っている',
          '後から追加したタスクの「完了」ボタンにも処理が効くようにする方法（イベント委任など）に触れている'
        ],
        modelAnswer: '1. 最初に、入力欄（#task）、追加ボタン（#add）、一覧（#list）を querySelector で取り出しておきます。2. 追加ボタンに click のイベントを登録します。押されたら入力値を trim して、空なら何もしません。空でなければ createElement で li を作り、textContent にタスク名を入れ、「完了」ボタンも作って li に入れてから一覧に appendChild します。追加後は入力欄を空に戻します。3. 完了の操作は、ボタン1つずつではなく一覧（ul）に click を1つだけ登録し、event.target が「完了」ボタンなら、その li に classList.toggle("done") で打ち消し線用のクラスを付け外しします。こうすると、後から追加したタスクにも同じ処理が効きます。',
        tip: '作る前に「選ぶ → 待つ（イベント） → 変える」の3段階に分けて書き出すと、DOM 操作の流れが整理できます。'
      }
    ]
  },
  intermediate: {
    title: '通信を伴う画面の使い勝手を設計する',
    content: '「動く」だけでなく「迷わず、安心して使える」画面を考える練習です。利用者の目線で書いてみましょう。',
    prompts: [
      {
        scenario: '問い合わせフォームの送信処理です。テストした人から「送信ボタンを押しても反応がないので何度も押したら、同じ問い合わせが3件届いた」「電波が悪いときに送信したら、何も表示されず送れたのか分からない」という報告がありました。',
        code: 'form.addEventListener("submit", async (e) => {\n  e.preventDefault();\n  await fetch("/api/contact", { method: "POST", body: new FormData(form) });\n  message.textContent = "送信しました";\n});',
        question: '2つの報告の原因を説明し、どう改善するかをコードの流れも含めて書いてください。',
        checkpoints: [
          '通信中にボタンが押せたままで、反応も見えないため二重送信が起きていることを指摘している',
          '送信開始時にボタンを無効にし、読み込み中の表示を出す改善を示している',
          '失敗時に catch でエラーを受け取り、利用者に伝える改善を示している',
          'res.ok を確認する、finally でボタンと表示を必ず戻す、のどちらかに触れている'
        ],
        modelAnswer: '1つ目の原因は、通信している間もボタンが押せる状態のままで、画面にも何の変化もないことです。利用者は反応がないと思って何度も押し、そのたびに送信されました。2つ目の原因は、失敗したときの処理がないことです。通信に失敗すると await の行でエラーになり、その後の行が実行されないため何も表示されません。改善としては、送信を始めたらすぐ button.disabled = true にして「送信中…」と表示します。fetch は try の中で行い、res.ok でなければエラーとして扱い、catch で「送信に失敗しました。時間をおいてもう一度お試しください」と表示します。最後に finally でボタンを押せる状態に戻し、送信中の表示を消します。',
        tip: '通信する画面では「待っている間」「成功したとき」「失敗したとき」の3つの状態で、それぞれ何が見えるかを書き出してみましょう。'
      },
      {
        scenario: '1,000件ある商品一覧のそれぞれに「お気に入り」ボタンがあります。今は、すべてのボタンに1つずつ addEventListener でクリック処理を付けています。「もっと見る」で商品を追加すると、追加分のボタンが反応しないという不具合も出ています。',
        question: 'この作り方の問題点と、イベント委任を使った改善案を、仕組みが分かるように説明してください。',
        checkpoints: [
          '1,000個のリスナー登録はムダが多いこと、後から追加した要素には処理が付かないことを指摘している',
          '親要素に1つだけリスナーを登録するイベント委任を提案している',
          'event.target（closest など）で押されたボタンと対象の商品を判別する方法を説明している',
          'クリックが子から親へ伝わる（バブリング）ので親で受け取れる、という仕組みに触れている'
        ],
        modelAnswer: '今の作り方では、ボタンの数だけ処理を登録しているのでメモリと準備の時間にムダがあります。さらに登録は「その時点で画面にあるボタン」にしか行われないため、「もっと見る」で後から増えたボタンには処理が付かず、反応しません。改善案は、商品一覧の親要素に click の処理を1つだけ登録するイベント委任です。クリックは押された要素から親へと順に伝わっていく（バブリング）ので、親で受け取れます。処理の中で event.target.closest(".fav-button") を調べ、お気に入りボタンが押されたときだけ、その商品の ID（data-id など）を使ってお気に入りを切り替えます。こうすれば登録は1回で済み、後から追加した商品にも自動で効きます。',
        tip: '「同じ種類の部品がたくさんある」「後から増える」の2つがそろったら、イベント委任を考えましょう。'
      }
    ]
  },
  advanced: {
    title: '速さと安全さを両立させる',
    content: '実際のサービスでは、データが多くても速く、外から来たデータでも安全に表示できる必要があります。判断の理由まで書いてみましょう。',
    prompts: [
      {
        scenario: 'ニュースサイトで、画面を下までスクロールすると記事を20件ずつ読み込んで一覧に追加する「無限スクロール」を作っています。記事データは外部の API から届き、タイトルと本文の冒頭が入っています。',
        question: '「スクロールの検知」「記事の追加」「記事の表示」の3つの場面で、それぞれ気をつけるべき点と具体的な方法を書いてください。',
        checkpoints: [
          'スクロールイベントは頻繁に起きるので、スロットリングなどで判定の回数を抑えている（または交差の監視など別の方法を挙げている）',
          '読み込み中に重ねて読み込まないよう、読み込み中フラグなどで制御している',
          '20件を DocumentFragment などでまとめて1回で追加している',
          '外部から来た文字を textContent で表示し、XSS を防いでいる'
        ],
        modelAnswer: 'スクロールの検知：scroll イベントは1秒に何十回も起きるので、毎回「一番下まで来たか」を計算すると重くなります。スロットリングで0.2秒に1回程度に間引くか、一覧の最後に置いた目印の要素が画面に入ったことを IntersectionObserver で知る方法が適しています。また、読み込み中は isLoading のような目印を立て、通信が終わるまで次の読み込みを始めないようにします。記事の追加：20件を1件ずつ追加するとそのたびに配置の計算が走るので、DocumentFragment に組み立ててから1回で一覧に追加します。記事の表示：タイトルや本文は外部から来た文字なので、innerHTML ではなく createElement と textContent で入れ、タグが混ざっていても実行されないようにします。',
        tip: '「頻度」「量」「出どころ」の3つの視点で処理を見直すと、性能と安全性の問題を見つけやすくなります。'
      },
      {
        scenario: 'ページ上部へ戻るボタンを作りました。押すと画面が上までなめらかに戻るよう、次のように書きましたが、動きがカクカクして、端末によって速さも変わります。',
        code: 'let y = window.scrollY;\nconst timer = setInterval(() => {\n  y -= 20;\n  window.scrollTo(0, y);\n  if (y <= 0) clearInterval(timer);\n}, 10);',
        question: 'カクつく理由と改善方法を、複数の選択肢を比べながら書いてください。',
        checkpoints: [
          'setInterval の実行タイミングが画面の描き換えとずれていることを理由に挙げている',
          'requestAnimationFrame を使う改善を示している',
          'scrollTo({ behavior: "smooth" }) や CSS の scroll-behavior など、より簡単な方法も比べている',
          '経過時間をもとに位置を決めるなど、端末による速さの違いを減らす工夫に触れている'
        ],
        modelAnswer: 'setInterval(…, 10) は画面の描き換え（多くの端末で約16ミリ秒ごと）と関係なく動くため、1回の描画の間に2回動いたり、まったく動かなかったりして、ガタついて見えます。また、処理が詰まると間隔が延び、端末の性能によって速さが変わります。改善方法は大きく3つあります。1つ目は、ブラウザに任せる window.scrollTo({ top: 0, behavior: "smooth" }) で、1行で済み最も手軽です。2つ目は、CSS の html { scroll-behavior: smooth; } で、リンクによる移動もまとめてなめらかにできます。3つ目は、動き方を細かく決めたい場合に requestAnimationFrame を使い、開始からの経過時間をもとに位置を計算する方法です。経過時間で決めれば、端末の速さに関係なく同じ時間で上に戻ります。まずは1つ目で十分かを確かめ、足りなければ3つ目を選びます。',
        tip: 'アニメーションは「自分で動かす」前に、ブラウザや CSS の標準の機能で足りないかを確かめましょう。'
      }
    ]
  }
};
