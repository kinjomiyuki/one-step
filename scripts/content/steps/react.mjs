export const courseId = 'react';

export const basics = {
  beginner: {
    title: 'JSX とコンポーネントで画面を組み立てる',
    content: 'React では、画面を「コンポーネント」という部品に分けて作ります。部品の書き方である JSX の決まりと、一覧や条件による出し分けの基本を押さえましょう。',
    sections: [
      {
        heading: 'コンポーネントは画面の部品',
        body: 'コンポーネントは、見た目と動きをひとまとめにした関数です。名前は大文字で始めます。小文字で始めると <div> のような HTML のタグとして扱われてしまいます。',
        code: 'function Greeting() {\n  return <h1>こんにちは</h1>;\n}\n\n// 使うとき\n<Greeting />'
      },
      {
        heading: 'JSX の決まり：className と {}',
        body: 'JSX は HTML に似ていますが、いくつか違いがあります。class の代わりに className と書き、JavaScript の値や式は {} の中に書きます。',
        code: 'function Profile({ user }) {\n  return <p className="name">{user.name}さん（{user.age}歳）</p>;\n}'
      },
      {
        heading: '複数の要素はフラグメントで囲む',
        body: 'コンポーネントが返せる要素は1つだけです。複数の要素を並べたいときは、余計な <div> を増やさずに <></>（フラグメント）で囲みます。表の行の中など、<div> を入れると崩れる場所で特に役立ちます。',
        code: 'function Row({ item }) {\n  return (\n    <>\n      <td>{item.name}</td>\n      <td>{item.price}円</td>\n    </>\n  );\n}'
      },
      {
        heading: '一覧表示には key を付ける',
        body: '配列から一覧を作るときは map を使い、各要素に key を付けます。key は React が「どの要素がどれか」を見分ける目印で、追加・削除・並べ替えのときに正しく更新するために必要です。配列の番号ではなく、ID のような変わらない値を使います。',
        code: 'function TodoList({ todos }) {\n  return (\n    <ul>\n      {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}\n    </ul>\n  );\n}'
      },
      {
        heading: '条件による出し分けと props の受け取り',
        body: '条件で表示を変えるときは、JSX の中に三項演算子や && を書きます。親から渡された値（props）は、引数で分割代入して受け取ると、何を受け取るかが一目で分かります。',
        code: 'function Header({ isLoggedIn, userName }) {\n  return isLoggedIn ? <p>{userName}さん</p> : <button>ログイン</button>;\n}'
      }
    ]
  },
  intermediate: {
    title: 'state と props：データの流れを設計する',
    content: 'React の画面は「データが変わると表示が変わる」仕組みで動きます。どこにデータを置き、どう渡すかを学びましょう。',
    sections: [
      {
        heading: 'props は親から、state は自分で持つ',
        body: 'props は親から渡される値で、受け取った側は書き換えません。state はコンポーネント自身が覚えておく値で、変わると画面が描き直されます。「この値は誰が持つべきか」を考えるのが設計の第一歩です。',
        code: 'function ProductCard({ name, price }) {      // props\n  const [liked, setLiked] = useState(false);   // state\n  return <button onClick={() => setLiked(!liked)}>{liked ? "♥" : "♡"} {name}</button>;\n}'
      },
      {
        heading: 'state は更新関数で変える',
        body: 'state の変数に直接代入しても、React は変化に気づかず画面は変わりません。必ず更新関数（setCount など）を使います。直前の値をもとに更新するときは、関数を渡す形にすると確実です。',
        code: 'count = count + 1;           // 画面は変わらない\nsetCount(count + 1);         // OK\nsetCount(prev => prev + 1);  // 直前の値をもとにする確実な書き方'
      },
      {
        heading: 'オブジェクトや配列は新しく作って渡す',
        body: 'state のオブジェクトの一部を書き換えても、同じオブジェクトのままなので React は変化に気づきません。スプレッド構文で新しいオブジェクトを作って渡します。',
        code: 'setSettings({ ...settings, notify: true });\nsetTodos([...todos, newTodo]);'
      },
      {
        heading: '子から親の state を変える',
        body: 'データは親から子へ流れます。子の操作で親の state を変えたいときは、親が更新用の関数を props として渡し、子はそれを呼びます。複数のコンポーネントが同じ値を使うなら、その値を共通の親に置きます（state の持ち上げ）。',
        code: 'function App() {\n  const [open, setOpen] = useState(false);\n  return <Modal open={open} onClose={() => setOpen(false)} />;\n}'
      },
      {
        heading: 'フォームは value と onChange で管理する',
        body: '入力欄の値を state で持ち、value と onChange の両方を指定すると、入力内容をいつでも使えます（制御コンポーネント）。送信時は preventDefault() でページの再読み込みを止めます。',
        code: 'const [email, setEmail] = useState("");\n<form onSubmit={e => { e.preventDefault(); send(email); }}>\n  <input value={email} onChange={e => setEmail(e.target.value)} />\n</form>'
      }
    ]
  },
  advanced: {
    title: 'Hooks で副作用と再利用を扱う',
    content: 'データの取得やタイマーのように、描画以外の処理（副作用）は useEffect で扱います。正しい使い方と、ロジックを再利用する方法を学びます。',
    sections: [
      {
        heading: 'useEffect と依存配列',
        body: 'useEffect は描画の後に実行される処理です。第2引数の依存配列で「いつ実行するか」を決めます。[] なら初回だけ、[id] なら id が変わったときだけ実行されます。依存配列を省略すると毎回の描画後に実行されるため、中で state を更新すると無限ループになります。',
        code: 'useEffect(() => {\n  fetchUser(id).then(setUser);\n}, [id]); // id が変わったときだけ'
      },
      {
        heading: '後始末の関数を返す',
        body: 'タイマーやイベント登録、通信などは、コンポーネントが消えるときに止める必要があります。useEffect から関数を返すと、それが後始末として呼ばれます。',
        code: 'useEffect(() => {\n  const timer = setInterval(tick, 1000);\n  return () => clearInterval(timer);\n}, []);\n\nuseEffect(() => {\n  const controller = new AbortController();\n  fetch(url, { signal: controller.signal });\n  return () => controller.abort(); // 画面を離れたら通信を中断\n}, [url]);'
      },
      {
        heading: 'フックは毎回同じ順番で呼ぶ',
        body: 'React は、フックが呼ばれた順番で「どの state がどれか」を覚えています。if 文の中でフックを呼ぶと順番が変わり、別の state と取り違えます。フックは必ずコンポーネントの先頭で、条件なしに呼びます。'
      },
      {
        heading: 'カスタムフックでロジックを再利用する',
        body: '複数の画面で同じ「データ取得・読み込み中・エラー」の処理を書いているなら、use で始まる関数にまとめます。これがカスタムフックです。',
        code: 'function useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  useEffect(() => {\n    fetch(url).then(r => r.json()).then(setData).finally(() => setLoading(false));\n  }, [url]);\n  return { data, loading };\n}'
      },
      {
        heading: '重い計算は useMemo で覚えておく',
        body: '再描画のたびに重い計算（大量のデータの並べ替えなど）が走ると、関係ない入力でも画面が重くなります。useMemo を使うと、依存する値が変わったときだけ計算し直します。',
        code: 'const sorted = useMemo(\n  () => [...products].sort((a, b) => a.price - b.price),\n  [products]\n);'
      }
    ]
  }
};

export const thinking = {
  beginner: {
    title: '画面をコンポーネントに分ける',
    content: '正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。',
    prompts: [
      {
        scenario: 'ネットショップの商品一覧ページを React で作ります。ページには、ヘッダー（ロゴとカートの件数）、検索欄、商品カードの一覧（写真・名前・価格・在庫切れ表示・カートに入れるボタン）、フッターがあります。',
        question: 'どのようなコンポーネントに分けるか、それぞれの役割と受け取る props を書いてください。分ける理由も含めてください。',
        checkpoints: [
          'Header・SearchBox・ProductList・ProductCard・Footer など、役割ごとに分けている',
          '商品カードを1つのコンポーネントにし、一覧では map で並べる設計にしている',
          '各コンポーネントが受け取る props（商品データ、カートの件数など）を挙げている',
          '分ける理由（再利用できる、変更の影響が小さい、読みやすい等）を説明している'
        ],
        modelAnswer: 'App の中を、Header、SearchBox、ProductList、Footer に分けます。Header は cartCount を受け取り、ロゴとカートの件数を表示します。SearchBox は keyword と onChange を受け取ります。ProductList は products を受け取り、products.map(p => <ProductCard key={p.id} product={p} onAdd={...} />) のように並べます。ProductCard は1つの商品を表す部品で、product（写真・名前・価格・在庫）と onAdd を受け取り、在庫が0なら {product.stock === 0 && <span>在庫切れ</span>} のように表示を切り替えます。商品カードを独立させておけば、お気に入り一覧やおすすめ欄でも使い回せ、カードの見た目を直すときも1か所の修正で済みます。役割ごとに分けると、どこに何が書いてあるかも探しやすくなります。',
        tip: '画面を紙に描き、「繰り返し出てくるまとまり」と「役割が違う場所」に線を引くと、コンポーネントの区切りが見えてきます。'
      },
      {
        scenario: 'ToDo リストで、タスクを削除すると、別のタスクのチェック状態がずれてしまう不具合が起きています。',
        code: '{todos.map((todo, index) => (\n  <li key={index}>\n    <input type="checkbox" />\n    {todo.title}\n    <button onClick={() => remove(todo.id)}>削除</button>\n  </li>\n))}',
        question: 'なぜチェック状態がずれるのかを、key の役割から説明し、直し方を書いてください。',
        checkpoints: [
          'key は React が要素を見分ける目印であることを説明している',
          '配列の番号を key にすると、削除で番号が詰まり、別のタスクと取り違えることを説明している',
          'todo.id のような変わらない値を key にする直し方を示している',
          'チェック状態も todo のデータとして持つ、などさらに確実にする工夫に触れている（任意）'
        ],
        modelAnswer: 'key は、React が「前回の描画のどの要素と、今回のどの要素が同じものか」を見分ける目印です。配列の番号（index）を key にすると、1番目のタスクを削除したとき、2番目だったタスクが番号 0 になります。React は key が 0 の要素を「前と同じ要素」とみなすので、前の1番目のチェック状態をそのまま引き継いでしまい、チェックがずれて見えます。直し方は、key={todo.id} のように、タスクごとに変わらない ID を key にすることです。さらに、チェック状態を input の中だけで持たず、todo.done のようにデータとして持ち、checked={todo.done} で表示すれば、データと表示が常に一致して確実です。',
        tip: '並べ替えや削除がある一覧で key に index を使っていたら、ずれのバグを疑いましょう。'
      }
    ]
  },
  intermediate: {
    title: 'state をどこに置くか設計する',
    content: 'React のアプリは「state をどこに置くか」で作りやすさが大きく変わります。理由まで書いて考えてみましょう。',
    prompts: [
      {
        scenario: 'ネットショップで、ヘッダーに「カートの件数」、商品一覧の各カードに「カートに入れる」ボタン、ページ右側に「カートの中身と合計金額」を表示します。今はそれぞれのコンポーネントが自分でカートの state を持っていて、件数と中身が合わないことがあります。',
        question: 'カートの state をどこに置き、どう渡すように設計し直すかを、理由とともに書いてください。',
        checkpoints: [
          '同じデータを複数の場所で別々に持つと食い違うことを指摘している',
          'カートの state を、3つのコンポーネントの共通の親（App など）に1つだけ持つ設計にしている',
          '表示側には props でデータを、追加ボタンには更新用の関数を渡す流れを説明している',
          '件数や合計金額は state から計算して求め、別の state として持たない工夫に触れている'
        ],
        modelAnswer: '同じカートのデータを3か所で別々に持っているので、1か所を更新しても他に伝わらず、件数と中身が食い違います。カートの state は、ヘッダー・商品一覧・カート欄の共通の親である App に1つだけ持たせます（state の持ち上げ）。App で const [cart, setCart] = useState([]) とし、ヘッダーには cartCount={cart.length}、カート欄には items={cart} を props で渡します。商品カードには onAdd={product => setCart([...cart, product])} のような更新用の関数を渡し、ボタンが押されたらそれを呼びます。件数や合計金額は cart から毎回計算すれば求まるので、別の state として持ちません。持つと、更新のし忘れでまた食い違いが起きるからです。',
        tip: '「同じ値を2か所で持っていないか」「計算で求められる値を state にしていないか」を確かめると、食い違いのバグを防げます。'
      },
      {
        scenario: '会員登録フォームで、メールアドレスとパスワードを入力してもらいます。パスワードは入力中に「8文字以上必要です」とその場で表示し、送信時に通信している間は送信ボタンを押せないようにしたいです。',
        question: 'このフォームで必要な state と、入力・送信のときの処理の流れを書いてください。',
        checkpoints: [
          'email・password・送信中（isSubmitting など）の state を挙げている',
          '入力欄に value と onChange を指定する制御コンポーネントにしている',
          'パスワードの長さの判定は、password から計算して表示する（別の state にしない）設計にしている',
          '送信時に preventDefault() でページの再読み込みを止め、通信中はボタンを無効にしている'
        ],
        modelAnswer: 'state は email、password、isSubmitting（送信中かどうか）の3つです。入力欄は <input value={password} onChange={e => setPassword(e.target.value)} /> のように value と onChange を指定し、入力のたびに state を更新します。パスワードの長さのメッセージは、password.length < 8 で毎回計算して表示すれば十分なので、別の state にはしません。送信は form の onSubmit で受け取り、まず e.preventDefault() でページの再読み込みを止めます。次に setIsSubmitting(true) にして、ボタンに disabled={isSubmitting} を指定して押せなくします。通信が終わったら、成功しても失敗しても setIsSubmitting(false) に戻します。',
        tip: 'フォームの state は「利用者が入力したもの」と「画面の状態（送信中など）」に分け、それ以外は計算で求められないかを考えましょう。'
      }
    ]
  },
  advanced: {
    title: 'useEffect の不具合を診断し、設計を改善する',
    content: 'Hooks の不具合は、仕組みが分かっていれば原因を説明できます。原因 → 直し方 → 再発防止の順で書いてみましょう。',
    prompts: [
      {
        scenario: 'ユーザー一覧を表示する画面で、開発者ツールを見ると API へのリクエストが止まらずに送られ続けています。',
        code: 'function UserList() {\n  const [users, setUsers] = useState([]);\n  useEffect(() => {\n    fetch("/api/users")\n      .then(res => res.json())\n      .then(data => setUsers(data));\n  });\n  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n}',
        question: 'リクエストが止まらない理由を、描画と useEffect の流れから説明し、直し方を書いてください。画面を離れたときの扱いにも触れてください。',
        checkpoints: [
          '依存配列がないため、描画のたびに useEffect が実行されることを指摘している',
          'setUsers で state が変わる → 再描画 → また fetch、という無限ループの流れを説明している',
          '依存配列に [] を指定して初回だけ実行する直し方を示している',
          '画面を離れたときに通信を中断する（AbortController と後始末の関数）ことに触れている'
        ],
        modelAnswer: 'useEffect に依存配列を指定していないので、描画が終わるたびに毎回実行されます。流れとしては、①描画 → ②useEffect で fetch → ③結果を setUsers で保存 → ④state が変わったので再描画 → ⑤また useEffect で fetch…と、③から①に戻る輪が止まりません。直し方は、useEffect の第2引数に [] を指定して、最初の描画の後に1回だけ実行することです。さらに、読み込みの途中で別の画面へ移動すると、もう表示されていないコンポーネントの state を更新しようとしてしまいます。AbortController を作って fetch に signal を渡し、useEffect から () => controller.abort() を返しておけば、画面を離れたときに通信が中断されます。',
        tip: 'useEffect の中で state を更新しているときは、必ず「この effect はいつ実行されるか」を依存配列で確かめましょう。'
      },
      {
        scenario: '商品一覧・ユーザー一覧・お知らせ一覧の3つの画面で、ほぼ同じ「API からデータを取得し、読み込み中は『読み込み中…』、失敗したら『エラーが発生しました』と表示する」コードをそれぞれ書いています。商品一覧は1万件あり、並べ替えのボタンとは関係ない検索欄に文字を打つだけで画面が重くなります。',
        question: '3つの画面の重複と、商品一覧の重さを、それぞれどう改善するかを書いてください。',
        checkpoints: [
          '共通の処理をカスタムフック（useFetch など）にまとめる提案をしている',
          'カスタムフックが返す値（data・loading・error など）と、使う側の書き方を示している',
          '重さの原因として、再描画のたびに1万件の並べ替えが走っていることを指摘している',
          'useMemo で並べ替えの結果を覚え、依存する値が変わったときだけ計算し直す改善を示している'
        ],
        modelAnswer: '重複については、取得・読み込み中・エラーの処理を function useFetch(url) というカスタムフックにまとめます。中で data、loading、error の state と useEffect を持ち、{ data, loading, error } を返します。各画面は const { data, loading, error } = useFetch("/api/products") と1行で使え、表示の切り替えだけを書けばよくなります。直す場所も1か所になります。商品一覧の重さは、検索欄に打つたびに state が変わって再描画され、そのたびに1万件の並べ替えが計算し直されているのが原因です。const sorted = useMemo(() => [...products].sort(compare), [products, sortKey]) とすれば、商品データか並べ替えの条件が変わったときだけ計算し、検索欄の入力では前回の結果を使い回せます。',
        tip: '「同じコードが3回出てきたらカスタムフック」「関係ない操作で重くなったら、毎回の描画で何が計算されているか」を確かめましょう。'
      }
    ]
  }
};
