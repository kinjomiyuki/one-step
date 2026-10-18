export const courseId = 'typescript';

export const basics = {
  beginner: {
    title: '型を付けて、間違いに早く気づく',
    content: 'TypeScript は、JavaScript に「型」を加えた言語です。値の種類をあらかじめ書いておくことで、実行する前に、多くの間違いに気づけます。基本の型の書き方を押さえましょう。',
    sections: [
      {
        heading: 'TypeScript とは',
        body: 'JavaScript に型の仕組みを加えた言語です。ブラウザは TypeScript を直接実行できないため、書いたコードは JavaScript に変換（コンパイル）されます。JavaScript の書き方は、そのまま使えます。',
        example: 'React や Node.js の開発では、.ts や .tsx のファイルで書き、ビルドで JavaScript に変換して使います。'
      },
      {
        heading: '型注釈と型推論',
        body: '変数の後ろに : 型 を書くのが型注釈です。数値の変数に文字列を入れる、といった間違いは、実行前にエラーになります。初期値がある場合は、型が自動で決まる（型推論）ので、型注釈を省略しても構いません。',
        code: 'let age: number = 20;\nage = "二十歳"; // エラー\n\nlet name = "太郎"; // string と推論される'
      },
      {
        heading: 'any は、できるだけ使わない',
        body: 'any は、何でも入れてよい型で、型のチェックがすべて無効になります。便利に見えますが、間違いに気づけなくなるので、TypeScript を使う意味が薄れます。型が分からない値には、後述の unknown を検討します。'
      },
      {
        heading: '配列とオブジェクトの型',
        body: '配列は、string[] や number[] のように、要素の型の後ろに [] を付けます。オブジェクトの形は、interface（または type）で定義します。プロパティ名の後ろの ? は、省略してもよいことを表します。',
        code: 'interface User {\n  name: string;\n  age: number;\n  nickname?: string; // 省略可能\n}\n\nconst users: User[] = [{ name: "太郎", age: 20 }];'
      },
      {
        heading: '関数の型',
        body: '引数の型と、戻り値の型を書きます。戻り値の型を書いておくと、関数の中で、約束と違う値を返したときに、エラーで気づけます。',
        code: 'function add(a: number, b: number): number {\n  return a + b;\n}'
      }
    ]
  },
  intermediate: {
    title: 'ユニオン型・絞り込み・ジェネリクス',
    content: '現実のデータは、「Aかもしれないし、Bかもしれない」ものがたくさんあります。そうした値を、安全に扱うための型の使い方を学びます。',
    sections: [
      {
        heading: 'ユニオン型',
        body: 'A | B と書くと、「A か B のどちらか」を表します。決まった文字列だけを許す、リテラル型のユニオンも、よく使います。タイプミスを、書いた時点でエラーにできます。',
        code: 'let id: string | number;\ntype Status = "loading" | "success" | "error";'
      },
      {
        heading: '型の絞り込み',
        body: 'ユニオン型の値は、どちらの型かを調べてから使います。typeof などで分岐すると、その分岐の中では、型が自動で絞り込まれます。as で型を上書きするより、絞り込みのほうが安全です。',
        code: 'function show(x: string | number) {\n  if (typeof x === "string") {\n    console.log(x.toUpperCase()); // string として扱える\n  }\n}'
      },
      {
        heading: 'undefined と、オプショナルチェーン',
        body: '省略できる値や、見つからないかもしれない値は、undefined を含む型になります。使う前に、undefined でないことを確かめます。?. を使うと、値がないとき、エラーにせず undefined を返します。',
        code: 'const city = user?.address?.city; // user や address がなければ undefined'
      },
      {
        heading: 'ジェネリクス',
        body: 'ジェネリクスは、型を引数のように受け取る仕組みです。Array<string> は文字列の配列、Promise<User> は、終わると User が得られる非同期の処理を表します。同じ仕組みを、さまざまな型に使い回せます。',
        code: 'const names: Array<string> = ["太郎", "花子"];\n\nasync function fetchUser(): Promise<User> { /* ... */ }'
      },
      {
        heading: 'Partial と unknown',
        body: 'Partial<User> は、User のすべてのプロパティを省略可能にした型で、一部の項目だけを渡す更新処理に便利です。unknown は、何が入っているか分からない値の型で、any と違い、型を絞り込んでからでないと使えません。'
      }
    ]
  },
  advanced: {
    title: '型で設計し、型の限界を知る',
    content: '型は、単にエラーを防ぐだけでなく、「ありえない状態を作れなくする」設計の道具です。同時に、型にも限界があります。両方を理解しましょう。',
    sections: [
      {
        heading: '判別可能なユニオン型',
        body: 'kind や status のような共通のプロパティで状態を分けると、それを調べた分岐の中で、その状態に合うプロパティだけが使えるように、型が絞り込まれます。「失敗なのに、データがある」といった矛盾を、型の上で作れなくできます。',
        code: 'type Result =\n  | { kind: "ok"; value: number }\n  | { kind: "error"; message: string };\n\nfunction show(r: Result) {\n  if (r.kind === "ok") console.log(r.value);\n  else console.log(r.message);\n}'
      },
      {
        heading: '網羅性のチェック（never）',
        body: '判別可能なユニオン型のすべての種類を処理したあと、残る型は never（存在しない型）になります。default で never に代入しておけば、新しい種類を追加して、処理を書き忘れたとき、コンパイルエラーで気づけます。',
        code: 'default: {\n  const _check: never = r; // 種類を足して、処理を忘れるとエラー\n  return _check;\n}'
      },
      {
        heading: '型アサーション（as）の危険',
        body: 'as は、コンパイラに「この型として扱ってほしい」と伝えるだけで、実際の値を検査したり、変換したりはしません。実際の値が違えば、実行時に不具合になります。使うのは、型が確かな場面に限り、できるだけ型の絞り込みを使います。'
      },
      {
        heading: '型は、実行時には存在しない',
        body: '型は、コンパイルのときに消え、実行時には残りません。そのため、外部の API が返す JSON や、利用者の入力は、型を付けただけでは、安全にはなりません。unknown として受け取り、型ガード関数（x is User）や、検証用のライブラリで、中身を確かめてから使います。',
        code: 'function isUser(x: unknown): x is User {\n  return typeof x === "object" && x !== null\n    && typeof (x as { name?: unknown }).name === "string";\n}'
      },
      {
        heading: 'strict を有効にする',
        body: 'tsconfig.json の "strict": true は、null や undefined の厳密な扱いなど、厳しい型チェックをまとめて有効にします。新しいプロジェクトでは、最初から有効にしておくのが基本で、あとから有効にすると、直す量が大きくなります。'
      }
    ]
  }
};

export const thinking = {
  beginner: {
    title: '型エラーを、読んで直す',
    content: '正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。',
    prompts: [
      {
        scenario: '後輩が書いた関数で、フォームから受け取った価格（文字列）を、そのまま number の変数に代入していて、エディタに赤い波線が出ています。後輩は、「動くのに、うるさい」と言って、any を付けて、波線を消そうとしています。',
        code: 'let price: number = 0;\nconst input = document.querySelector("input")!.value; // string\nprice = input; // エラー',
        question: '波線が出る理由と、any で消してはいけない理由を説明し、正しい直し方を書いてください。',
        checkpoints: [
          'フォームの値は文字列で、number 型の変数に代入できないことを説明している',
          'any で消すと型のチェックが無効になり、本当の間違いに気づけなくなることを指摘している',
          'Number() や parseInt で、文字列を数値に変換してから代入する方法を示している',
          '変換に失敗した場合（数値でない入力）にも触れている'
        ],
        modelAnswer: 'フォームから取得した value は、数値のように見えても、型は string です。number 型の price に代入しようとしているので、型が合わず、エラーになっています。波線は、「実行すると、数値として計算できず、不具合になる」という、重要な警告です。any を付けて消すと、型のチェックが無効になり、本当に間違ったコードでも、気づけなくなります。正しくは、Number(input) で、文字列を数値に変換してから代入します。さらに、入力が数値でない場合（"abc" など）は、変換の結果が NaN になるので、Number.isNaN で確かめ、エラーメッセージを表示するなどの対応も必要です。',
        tip: '型エラーは、「この組み合わせは、実行すると失敗するかもしれない」という、先回りの知らせです。消す前に、中身を読みましょう。'
      },
      {
        scenario: 'ユーザー情報を扱うコードで、プロパティ名をタイプミスした（user.nmae）のに、実行するまで気づかず、画面に「undefined」と表示されてしまいました。チームでは、「TypeScript を導入すれば、防げたのでは」という話が出ています。',
        question: 'TypeScript を使うと、どのようにこの問題を防げるかを説明し、interface をどう使うか、書いてください。',
        checkpoints: [
          'ユーザーのプロパティを、interface などで定義することを示している',
          '存在しないプロパティ（nmae）を書くと、実行前にエラーになることを説明している',
          'エディタの補完が効き、そもそもタイプミスしにくくなる利点に触れている',
          '型を付けるだけでは防げない問題（実行時の値の確認など）が残る可能性にも触れている'
        ],
        modelAnswer: 'interface User { name: string; age: number } のように、ユーザーが持つプロパティを定義し、変数や関数の引数に User 型を付けます。すると、user.nmae のように、定義にないプロパティを書いたとき、実行する前に、「nmae は User に存在しない」というエラーが出ます。書いている最中にも、補完で正しいプロパティ名の候補が出るので、そもそもタイプミスしにくくなります。JavaScript のときは、実行してから「undefined」が表示されて、初めて気づいていた間違いを、書いた時点で防げます。ただし、外部から届くデータが、定義どおりの形であるかどうかは、型だけでは保証できないので、その部分は別に確認する必要があります。',
        tip: '型を付けるときは、「このデータには、どんなプロパティがあるか」を、先に書き出すところから始めましょう。'
      }
    ]
  },
  intermediate: {
    title: '「ないかもしれない値」を、安全に扱う',
    content: '実行時のエラーの多くは、「値がないのに、使おうとした」ことが原因です。型を使って、それをどう防ぐかを考えてみましょう。',
    prompts: [
      {
        scenario: '会員検索の関数 findUser(id: number): User | undefined を使って、画面にユーザー名を表示するコードを書きました。しかし、存在しない id で検索したとき、画面が真っ白になる不具合が出ました。',
        code: 'const user = findUser(999);\nconsole.log(user.name); // エラー',
        question: 'なぜエラーになるのかと、型がどのように教えてくれていたかを説明し、直し方を書いてください。',
        checkpoints: [
          '見つからないとき、findUser は undefined を返し、undefined の name は読めないことを説明している',
          '戻り値の型 User | undefined が、undefined の可能性を、あらかじめ示していたことを説明している',
          'if で undefined を調べ、絞り込んでから使う（または ?. を使う）直し方を示している',
          '見つからなかったときに、何を表示するか（メッセージなど）を決める必要があることに触れている'
        ],
        modelAnswer: '存在しない id では、findUser は undefined を返します。undefined に対して user.name を読もうとするので、エラーになり、画面が真っ白になります。実は、戻り値の型が User | undefined になっているので、TypeScript は、「undefined の可能性がある」と、事前にエラーで教えてくれていました。直し方は、使う前に、if (!user) { /* 見つからなかったときの処理 */ return; } のように分岐し、undefined でないことを確かめてから、user.name を使います。この分岐のあとでは、user は User 型に絞り込まれます。「見つかりませんでした」と表示するなど、見つからなかったときの、利用者向けの動作も、決めておく必要があります。',
        tip: '型に undefined が含まれていたら、「見つからない場合に、何をするか」を考えるサインです。'
      },
      {
        scenario: '通信の状態を、次のような型で表しています。画面では、loading が true のときはスピナー、error があればメッセージ、data があれば一覧を表示しています。ところが、まれに、loading が true のまま、data も表示されるという、おかしな画面が出ます。',
        code: 'interface State {\n  loading: boolean;\n  data?: Item[];\n  error?: string;\n}',
        question: 'この型の問題点を指摘し、判別可能なユニオン型を使った、より良い型を書いてください。',
        checkpoints: [
          'すべてが独立しているため、loading と data が同時にある、といった矛盾した組み合わせが作れてしまうことを指摘している',
          'status のような共通のプロパティで、状態を分けるユニオン型を示している',
          '状態ごとに、必要なプロパティだけを持たせている',
          '状態を調べた分岐の中で、型が絞り込まれる利点を説明している'
        ],
        modelAnswer: 'loading、data、error が、それぞれ独立しているので、「loading が true なのに data もある」「error と data が同時にある」といった、ありえない組み合わせが、型の上では許されてしまいます。それを、更新のしかたの間違いで作ってしまうのが、不具合の原因です。type State = { status: "loading" } | { status: "success"; data: Item[] } | { status: "error"; message: string } のように、status で状態を分けて、状態ごとに、必要なプロパティだけを持たせます。こうすると、「loading なのに data がある」状態は、そもそも作れません。画面側でも、status を調べた分岐の中で、その状態に合うプロパティだけが使えるように、型が絞り込まれるので、書き間違いも減ります。',
        tip: '「同時に存在してはいけない」ものを、別々の省略可能なプロパティにしていないか、見直してみましょう。'
      }
    ]
  },
  advanced: {
    title: '型を、どこまで信じるか',
    content: '型は強力ですが、実行時のデータまでは守れません。型の力と限界を、理由まで書いて整理してみましょう。',
    prompts: [
      {
        scenario: '外部の API から受け取った JSON を、as User で型を付けて使っています。ある日、API の仕様が変わり、name が null で返ってくるようになりました。TypeScript のコンパイルは通っているのに、画面でエラーが出ました。',
        code: 'const res = await fetch("/api/user/1");\nconst user = (await res.json()) as User;\nconsole.log(user.name.toUpperCase());',
        question: 'なぜ、コンパイルが通ったのに、エラーが出たのかを説明し、安全にするための対策を書いてください。',
        checkpoints: [
          'as は、コンパイラに型を伝えるだけで、実際の値を検査しないことを説明している',
          '型は実行時には存在せず、API の実際のデータを守れないことを説明している',
          'unknown で受け取り、型ガード関数や検証用のライブラリで確かめる対策を示している',
          '検証に失敗したときの処理（エラー表示や、記録）にも触れている'
        ],
        modelAnswer: 'as User は、「この値を User として扱ってほしい」とコンパイラに伝えているだけで、実際のデータの中身は検査していません。コンパイルは、「約束どおりなら、問題ない」という前提で通りますが、型は実行時には消えるので、API が約束と違う形（name が null）で返してきたときは、守れません。対策は、まず json() の結果を unknown として受け取ることです。そのうえで、isUser(x: unknown): x is User のような型ガード関数や、検証用のライブラリを使い、name が文字列であることなどを実行時に確かめます。検証に成功したときだけ、User として扱います。失敗したときは、エラーメッセージの表示や、記録を残すなど、あらかじめ決めた対応をします。',
        tip: '型は「コードを書くときの約束」を守る道具で、「実行時に届くデータ」は、別に確かめる必要があります。'
      },
      {
        scenario: '決済の状態を、"pending" | "paid" | "failed" で管理しています。新しい要件で、"refunded"（返金済み）を追加することになりました。画面には、状態ごとの表示を、switch で書いた箇所が、20 か所以上あります。',
        question: '追加のときに、処理の書き忘れを防ぐために、型でどんな工夫ができるかを書いてください。また、その仕組みの利点も説明してください。',
        checkpoints: [
          'switch の default で、never 型の変数に代入するなど、網羅性をチェックする工夫を示している',
          '新しい状態を追加すると、処理が足りない箇所が、コンパイルエラーとして見つかることを説明している',
          '20 か所を、目で探す必要がなくなる利点に触れている',
          '状態を、リテラル型のユニオンや、判別可能なユニオンで定義しておく前提を説明している'
        ],
        modelAnswer: '状態を、リテラル型のユニオン（または判別可能なユニオン）で定義しておき、各 switch の default で、const _check: never = status; のように、never 型の変数に代入します。すべての状態を処理していれば、default に来る値の型は never になり、問題ありません。しかし、"refunded" を追加したのに、その分岐を書き忘れていると、default に来る型が "refunded" になり、never に代入できないため、コンパイルエラーになります。この仕組みの利点は、20 か所以上ある switch のうち、対応が必要な箇所を、コンパイラが、すべて見つけてくれることです。目で探したり、テストで気づいたりする必要がなく、書き忘れによる不具合を、リリース前に防げます。',
        tip: '「あとから種類が増えるもの」は、型で網羅性をチェックできるように書いておくと、変更に強くなります。'
      }
    ]
  }
};
