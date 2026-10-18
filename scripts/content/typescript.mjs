// 先頭が * の選択肢が正解。正解の位置は問題ごとに散らしてある
const opt = (...texts) => texts.map((t, i) => ({
  id: 'abcd'[i],
  text: t.replace(/^\*/, ''),
  correct: t.startsWith('*')
}));

export const course = {
  id: 'typescript',
  name: 'TypeScript',
  description: 'JavaScript に型を加えて、間違いに早く気づける書き方を学びます',
  icon: 'fa-solid fa-code',
  shortLabel: 'TS'
};

export const lessons = {
  beginner: [
    {
      title: '型の基本',
      content: 'TypeScript が JavaScript に何を加えるのかと、型の書き方の基本を学びます。',
      questions: [
        {
          text: 'TypeScript と JavaScript の関係として、正しいのは______です。',
          options: opt(
            'TypeScript は、JavaScript とは全く別の言語で、互換性はない',
            'TypeScript は、ブラウザがそのまま実行できる',
            '*JavaScript に型の仕組みを加えた言語で、最終的には JavaScript に変換して実行する',
            'TypeScript は、サーバー側でしか使えない'
          ),
          hint: 'ブラウザが実行できるのは JavaScript です。TypeScript のコードは、どうなるでしょうか。',
          explanation: 'TypeScript は、JavaScript に型を加えた言語です。書いたコードは、コンパイル（変換）されて JavaScript になり、それが実行されます。JavaScript の書き方は、そのまま TypeScript でも使えます。'
        },
        {
          text: 'let age: number = 20; のあとで、age = "二十歳"; と書いたときに起きるのは______です。',
          options: opt(
            '何も起きず、そのまま実行される',
            '*コンパイル時（エディタ上）に、型のエラーになる',
            '自動で、数値に変換される',
            '実行したときにだけ、エラーになる'
          ),
          hint: ': number は、この変数に入れてよい値の種類を表しています。',
          explanation: '型注釈（: number）が付いた変数に、文字列を代入しようとすると、コードを実行する前に、エディタやコンパイラがエラーとして教えてくれます。JavaScript では、実行して初めて気づく間違いに、書いている最中に気づけるのが、TypeScript の利点です。'
        },
        {
          text: 'let name = "太郎"; と、型を書かずに宣言したとき、name の型は______になります。',
          options: opt(
            'any',
            'object',
            'unknown',
            '*string'
          ),
          hint: '初期値から、型を読み取る仕組みがあります。',
          explanation: '初期値から、型を自動で決める仕組みを、型推論といいます。"太郎" は文字列なので、name は string 型になります。型推論が効く場面では、型注釈を省略して、コードを簡潔に書けます。'
        },
        {
          text: 'any 型を多用しないほうがよい理由は______です。',
          options: opt(
            '*型のチェックが効かなくなり、TypeScript を使う意味が薄れるため',
            'any を使うと、コードが実行できなくなるため',
            'any は、数値にしか使えないため',
            'ブラウザによっては、any が使えないため'
          ),
          hint: 'any は「何でも入れてよい」という型です。',
          explanation: 'any を付けた値は、型のチェックがすべて無効になり、間違った使い方もエラーになりません。必要な場面（型が分からない移行中のコードなど）に限り、できるだけ具体的な型を付けます。'
        }
      ]
    },
    {
      title: '配列・オブジェクト・関数の型',
      content: 'まとまったデータと、関数に型を付ける方法を学びます。',
      questions: [
        {
          text: '文字列だけが入る配列の型を表す書き方は______です。',
          options: opt(
            'string',
            'array<string>',
            '*string[]',
            '[string]'
          ),
          hint: '要素の型の後ろに、角括弧を付けます。',
          explanation: 'string[]（または Array<string>）が、文字列の配列を表します。string だけでは、1つの文字列を意味します。数値の配列なら number[] です。配列に別の型の値を入れようとすると、エラーになります。'
        },
        {
          text: 'ユーザーのように、決まった形のオブジェクトの型を定義するときに使うのは______です。',
          options: opt(
            '*interface User { name: string; age: number }',
            'class User = { name: string }',
            'object User(name, age)',
            'var User: { name, age }'
          ),
          hint: 'オブジェクトの「形」に名前を付ける仕組みです。',
          explanation: 'interface（または type）で、オブジェクトがどんなプロパティを持つかを定義します。定義したあと、const user: User = { name: "太郎", age: 20 } のように使うと、足りないプロパティや、型が違う値をエラーにできます。'
        },
        {
          text: 'function add(a: number, b: number): number のうち、最後の : number が表すのは______です。',
          options: opt(
            '引数の個数',
            '関数の名前',
            '関数の実行時間',
            '*関数の戻り値の型'
          ),
          hint: '引数の型は、引数名の後ろに付いています。括弧の外に付いているものは？',
          explanation: '括弧の後ろの型は、戻り値の型です。この関数は、number を返すと宣言しています。戻り値の型を書いておけば、うっかり文字列を返しても、エラーで気づけます。'
        },
        {
          text: 'interface Profile { name: string; nickname?: string } の nickname について、正しいのは______です。',
          options: opt(
            '必ず指定しなければならない',
            '*省略してもよく、省略した場合は undefined になる',
            '数値を入れなければならない',
            '空文字を入れなければならない'
          ),
          hint: '名前の後ろの ? は、あってもなくてもよいことを表します。',
          explanation: 'プロパティ名の後ろの ? は、オプション（省略可能）を表します。省略すると undefined になるので、nickname の型は、実質 string | undefined として扱われます。使うときは、undefined の場合も考える必要があります。'
        }
      ]
    }
  ],
  intermediate: [
    {
      title: 'ユニオン型と絞り込み',
      content: '「AかBのどちらか」を表す型と、使う前に型を絞り込む方法を学びます。',
      questions: [
        {
          text: 'let id: string | number; と宣言したとき、id に入れられる値は______です。',
          options: opt(
            '文字列と数値の両方を、同時に',
            '*文字列か数値の、どちらか1つ',
            '文字列だけ',
            '何でも入れられる'
          ),
          hint: '| は「または」を表します。',
          explanation: 'A | B はユニオン型で、「A か B のどちらか」を表します。id は、string か number のどちらかの値を持てます。ただし、メソッドを呼ぶには、どちらの型かを絞り込む必要があります。'
        },
        {
          text: 'string | number 型の値 x に対して、文字列のときだけ x.toUpperCase() を呼びたいときの書き方は______です。',
          options: opt(
            'そのまま x.toUpperCase() と書く',
            'x as string と書いて、毎回、型を上書きする',
            '*if (typeof x === "string") { x.toUpperCase() }',
            'x を any に変えてから、呼び出す'
          ),
          hint: '実行時に、値が何の型かを調べて、分岐します。',
          explanation: 'typeof などで分岐すると、その分岐の中では、型が自動で絞り込まれます（型の絞り込み）。そのまま呼ぶと、number の可能性があるため、エラーになります。as や any で黙らせるより、絞り込むほうが安全です。'
        },
        {
          text: 'type Status = "loading" | "success" | "error"; のように、決まった文字列だけを許す型を______といいます。',
          options: opt(
            '列挙型の継承',
            '*リテラル型（のユニオン）',
            '関数型',
            'タプル型'
          ),
          hint: '"loading" のような、特定の値そのものを型として使います。',
          explanation: '特定の値そのものを型にしたものをリテラル型といい、それを | でつなぐと、「この中のどれか」だけを許す型になります。タイプミス（"sucess" など）を、書いた時点でエラーにできます。'
        },
        {
          text: 'user?.address?.city という書き方の働きは______です。',
          options: opt(
            'user が、必ず存在すると断言する',
            'user を、address と city に分解する',
            'city を、自動で文字列に変換する',
            '*user や address が null か undefined のとき、エラーにせず undefined を返す'
          ),
          hint: '?. は、オプショナルチェーンと呼ばれます。',
          explanation: '?. は、手前の値が null または undefined のとき、その先を評価せず、undefined を返します。エラーで止まらず、値がない場合も安全に扱えます。ただし、結果が undefined の可能性は、型にも残ります。'
        }
      ]
    },
    {
      title: 'ジェネリクスと便利な型',
      content: '型を引数のように使うジェネリクスと、既存の型から新しい型を作る方法を学びます。',
      questions: [
        {
          text: 'ジェネリクス（Array<T> の T）の役割は______です。',
          options: opt(
            '配列の、長さを決める',
            '*型を引数のように受け取り、さまざまな型に使い回せるようにする',
            '配列を、昇順に並べ替える',
            'null を、禁止する'
          ),
          hint: 'Array<string> と Array<number> は、同じ Array を、別の型で使っています。',
          explanation: 'ジェネリクスは、型を引数のように受け取る仕組みです。Array<T> の T に string を渡せば文字列の配列、number を渡せば数値の配列になります。同じ処理を、型ごとに書き直さずに済みます。'
        },
        {
          text: 'Partial<User> が表す型は______です。',
          options: opt(
            'User の、一部のプロパティだけを削除した型',
            'User と全く同じ型',
            '*User のすべてのプロパティを、省略可能にした型',
            'User の、すべてのプロパティを読み取り専用にした型'
          ),
          hint: '「一部だけ指定すればよい」ことを表すのに便利です。',
          explanation: 'Partial<T> は、T のすべてのプロパティに ? を付けたのと同じ型です。更新処理で、変更したい項目だけを渡す場合に使います。読み取り専用にするのは Readonly<T> です。'
        },
        {
          text: 'unknown と any の違いとして、正しいのは______です。',
          options: opt(
            'まったく同じで、書き方の好みである',
            'unknown は、any よりも、型のチェックが緩い',
            '*unknown は、型を絞り込んでからでないと、値を使えない',
            'unknown は、数値専用である'
          ),
          hint: '型が分からない値を、安全に扱いたい場面を考えてみます。',
          explanation: 'unknown は「何が入っているか分からない」という型で、使う前に、typeof などで型を絞り込む必要があります。any は、チェックが無効になるのに対し、unknown は、安全を保ったまま、分からない値を受け取れます。'
        },
        {
          text: 'interface と type の違いについて、実務で押さえておくべきことは______です。',
          options: opt(
            'interface は、オブジェクトにしか使えず、type は使えない',
            '*どちらもオブジェクトの形を表せるが、interface は同名で宣言を追加でき、type はユニオンなども表せる',
            'type は、古い書き方で、現在は使えない',
            'interface のほうが、必ず高速に動く'
          ),
          hint: '「A | B」のような型に名前を付けられるのは、どちらでしょうか。',
          explanation: 'オブジェクトの形は、どちらでも表せます。interface は、同じ名前で宣言を重ねて拡張でき、type は、ユニオンやリテラル型など、より幅広い型に名前を付けられます。プロジェクトでは、どちらを使うか、ルールを決めておくと混乱しません。'
        }
      ]
    }
  ],
  advanced: [
    {
      title: '型を使った設計',
      content: '型の力で、間違った状態をそもそも作れないようにする設計と、型の限界を学びます。',
      questions: [
        {
          text: '判別可能なユニオン型（kind のような共通のプロパティで分ける型）の利点は______です。',
          options: opt(
            '*kind を調べるだけで、型が絞り込まれ、状態ごとに使えるプロパティを安全に扱える',
            'どんな型でも、any として扱える',
            '実行速度が、大きく向上する',
            'プロパティを、1つも書かなくてよくなる'
          ),
          hint: 'type Result = { kind: "ok"; value: number } | { kind: "error"; message: string } のような型です。',
          explanation: '共通の kind プロパティで状態を判別できると、switch や if で kind を調べた分岐の中で、その状態に合うプロパティだけが使えるように、型が絞り込まれます。「エラーなのに value を読む」といった間違いを、書いた時点で防げます。'
        },
        {
          text: 'as による型アサーション（const x = data as User）の注意点は______です。',
          options: opt(
            '実行時に、自動で User 型に変換される',
            '必ず、正しい型であることが保証される',
            'どんな型にも使え、まったく危険はない',
            '*コンパイラを黙らせるだけで、実行時に実際の値が合っている保証はない'
          ),
          hint: 'as は、「この値は、この型だと私が保証します」という宣言です。',
          explanation: 'as は、コンパイラに「この型として扱ってほしい」と伝えるだけで、値を検査したり、変換したりはしません。実際の値が違えば、実行時に不具合になります。使うのは、本当に型が確かな場面に限り、できるだけ型の絞り込みを使います。'
        },
        {
          text: 'tsconfig.json で "strict": true を指定する意味は______です。',
          options: opt(
            'コードの、実行速度が上がる',
            '*null の扱いなど、厳密な型チェックをまとめて有効にする',
            'コメントを、禁止する',
            '型注釈を、すべて必須にする'
          ),
          hint: 'より多くの間違いを、コンパイル時に見つけるための設定です。',
          explanation: 'strict は、strictNullChecks（null や undefined を厳密に扱う）など、厳密な型チェックを、まとめて有効にする設定です。新しいプロジェクトでは、有効にしておくのが基本で、型の安全性が大きく高まります。'
        },
        {
          text: '外部の API から受け取った JSON に、型を付けて安心できない理由は______です。',
          options: opt(
            'JSON には、型を付けられないため',
            'TypeScript は、API の通信に対応していないため',
            '*型は実行時には存在せず、実際に届いたデータが、型どおりである保証はないため',
            'JSON は、必ず文字列になるため'
          ),
          hint: 'TypeScript の型は、コードを実行する前の、チェックのための仕組みです。',
          explanation: '型は、コンパイル時に消え、実行時には残りません。API のレスポンスは、実行時に届くデータなので、約束と違う形で届く可能性があります。必要に応じて、実行時に中身を検証する（型ガード関数や、検証用のライブラリを使う）必要があります。'
        }
      ]
    }
  ]
};

export const projects = {
  beginner: {
    title: 'TypeScript 初級プロジェクト',
    content: 'ToDo アプリのデータに型を付けながら、型注釈と型エラーの読み方を確認します。',
    questions: [
      {
        text: 'ToDo の「id、タイトル、完了したかどうか」を表す型として、適切なのは______です。',
        options: opt(
          'interface Todo { id: string; title: number; done: string }',
          '*interface Todo { id: number; title: string; done: boolean }',
          'interface Todo { id: any; title: any; done: any }',
          'interface Todo { id; title; done }'
        ),
        hint: '完了したかどうかは、「はい」か「いいえ」の2択です。',
        explanation: 'id は数値、title は文字列、完了したかどうかは true / false の boolean が自然です。any にすると、型のチェックが効かなくなります。プロパティの意味に合う型を付けるのが、型を使う第一歩です。'
      },
      {
        text: 'ToDo を複数持つ配列を、関数の引数として受け取るときの書き方は______です。',
        options: opt(
          'function show(todos: Todo)',
          '*function show(todos: Todo[])',
          'function show(todos: [Todo])',
          'function show(todos: array)'
        ),
        hint: '1つの Todo ではなく、Todo が並んだものです。',
        explanation: 'Todo[] は、Todo の配列を表します。Todo だけでは、1件を意味します。[Todo] は、「要素が1つだけのタプル」という別の意味になるので、注意が必要です。'
      },
      {
        text: 'const todo: Todo = { id: 1, title: "買い物", done: false }; のあとに todo.done = "yes"; と書いたとき、型エラーになるのは______です。',
        options: opt(
          'const todo の宣言（id が 1 のため）',
          'どちらの行も、エラーにならない',
          'どちらの行も、エラーになる',
          '*todo.done = "yes" の代入（done は boolean のため）'
        ),
        hint: 'done は、boolean 型で宣言されています。',
        explanation: 'done は boolean 型なので、文字列 "yes" は代入できません。最初の行は、定義どおりの値なので問題ありません。エラーメッセージには、「string 型は boolean 型に割り当てられない」と出ます。型エラーは、メッセージをよく読むのが解決の近道です。'
      },
      {
        text: '関数 toggle(todo: Todo): Todo の、戻り値の型を書いておく利点は______です。',
        options: opt(
          '関数の実行が、速くなる',
          '引数を、省略できるようになる',
          '*うっかり別の型を返す間違いを、書いた時点で見つけられる',
          '関数の名前を、短くできる'
        ),
        hint: '戻り値の型は、関数が約束する「出力」の形です。',
        explanation: '戻り値の型を書いておくと、関数の中で、約束と違う値（例えば、完了を表す文字列）を返したときに、エラーで気づけます。関数を使う側も、中身を読まなくても、何が返るかが分かります。'
      }
    ]
  },
  intermediate: {
    title: 'TypeScript 中級プロジェクト',
    content: 'API から取得したデータの状態を、型で表しながら、ユニオン型と絞り込みを確認します。',
    questions: [
      {
        text: '読み込み中、成功、失敗の3つの状態を、型で安全に表したいとき、適切なのは______です。',
        options: opt(
          'loading: boolean, data?: User, error?: string のように、全部を省略可能にする',
          'すべての状態を、any で扱う',
          'string の1つの型で、状態も中身も表す',
          '*{ status: "loading" } | { status: "success"; data: User } | { status: "error"; message: string }'
        ),
        hint: '「失敗なのに data がある」といった矛盾した状態を、作れなくしたいところです。',
        explanation: '状態ごとに必要なプロパティを分けたユニオン型にすると、status を調べた分岐の中で、その状態に合うプロパティだけが使えます。省略可能なプロパティを並べるだけだと、矛盾した組み合わせを許してしまいます。'
      },
      {
        text: 'ユーザーの一部の項目だけを更新する関数の引数に、適切な型は______です。',
        options: opt(
          'User',
          '*Partial<User>',
          'Readonly<User>',
          'unknown'
        ),
        hint: '名前だけ、メールアドレスだけ、といった一部の指定を許したい場面です。',
        explanation: 'Partial<User> は、User のすべてのプロパティを省略可能にします。変更したい項目だけを渡せます。User をそのまま使うと、全項目の指定が必須になり、更新のたびに、全部を渡す必要があります。'
      },
      {
        text: 'ユーザーを検索して、見つからなければ undefined を返す関数 find(id): User | undefined の結果を使うときに、必要なのは______です。',
        options: opt(
          'undefined は、起きないものとして、そのまま使う',
          'as User で、型を上書きして使う',
          '*undefined の場合の処理を書き、絞り込んでから使う',
          'try ~ catch で、すべて囲む'
        ),
        hint: '型に undefined が含まれているのは、「見つからないことがある」というコンパイラからの注意です。',
        explanation: 'User | undefined の値は、undefined の場合を扱わずに、user.name のようにアクセスすると、エラーになります。if (!user) { return; } のように分岐して、絞り込んでから使います。as で上書きすると、実行時に undefined のとき、不具合になります。'
      },
      {
        text: 'async function fetchUser(): Promise<User> の Promise<User> が表すのは______です。',
        options: opt(
          '*非同期の処理が終わると、User が得られる',
          '必ず User の配列になる',
          'User 型が、使えなくなる',
          'エラーが、必ず発生する'
        ),
        hint: 'Promise<T> は、ジェネリクスの一例です。T の部分は、何を表すでしょうか。',
        explanation: 'Promise<User> は、非同期の処理が完了したときに、User 型の値が得られることを表します。await すると、User 型として受け取れます。ジェネリクスで、「何が得られるか」を型で表している例です。'
      }
    ]
  },
  advanced: {
    title: 'TypeScript 上級プロジェクト',
    content: '想定外のデータや、状態の追加漏れを、型で防ぐ設計を確認します。',
    questions: [
      {
        text: 'JSON.parse の結果を、安全に扱うために適切なのは______です。',
        options: opt(
          'const data = JSON.parse(text) as User; として、そのまま使う',
          '*unknown として受け取り、型ガード関数や検証で確かめてから使う',
          'any のまま、使い続ける',
          '何もせず、型注釈もしない'
        ),
        hint: '実行時に、本当に期待どおりの形かどうかを確かめる必要があります。',
        explanation: 'JSON.parse は、実行時の文字列から作った値なので、型は保証されません。unknown として受け取り、中身を検証してから使うのが安全です。as で済ませると、データが違ったとき、実行時の不具合になります。'
      },
      {
        text: 'function isUser(x: unknown): x is User のように、戻り値を x is User と書く関数の働きは______です。',
        options: opt(
          'x を、自動で User に変換する',
          'x の型を、any に変える',
          '*true が返った分岐の中で、x を User 型として扱えるようにする',
          'x が、必ず User であることを保証する'
        ),
        hint: '型ガード関数と呼ばれます。結果が true なら、型を絞り込めます。',
        explanation: 'x is User は、型述語といい、関数が true を返したら、その後ろの分岐で、x を User 型として扱ってよいことを、コンパイラに伝えます。ただし、関数の中身の検証が間違っていると、型は嘘になるので、中身の検証は、しっかり書く必要があります。'
      },
      {
        text: '状態の種類が増えたときに、switch の処理の追加漏れを、コンパイル時に検出する方法は______です。',
        options: opt(
          '*default で、never 型の変数に代入しておき、漏れがあれば型エラーにする',
          'すべての分岐の末尾に、break を書く',
          'コメントで、「追加漏れに注意」と書いておく',
          'switch を、使わない'
        ),
        hint: 'すべての分岐で絞り込んだあとは、残りの型が「存在しない（never）」になるはずです。',
        explanation: '判別可能なユニオン型のすべての種類を処理したあと、default では、型が never になります。const _check: never = state; と書いておけば、新しい状態を追加して、処理を書き忘れたとき、never に代入できず、コンパイルエラーで気づけます。'
      },
      {
        text: '型の設計で目指すべき方向として、適切なのは______です。',
        options: opt(
          'できるだけ広い型（any や string）にして、エラーを減らす',
          '*不正な状態を、そもそも表現できないような型にする',
          'すべてのプロパティを、オプショナルにする',
          '型を付けず、テストだけで品質を守る'
        ),
        hint: '「ありえない組み合わせ」を、型の上で作れないようにする、という考え方です。',
        explanation: '「失敗なのに、data が入っている」のような、ありえない状態を、型の上でも作れなくすると、バグの余地が減ります。広い型や、省略可能なプロパティを多用すると、不正な状態を許してしまい、型の効果が薄れます。'
      }
    ]
  }
};
