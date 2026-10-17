export const courseId = 'laravel';

export const basics = {
  beginner: {
    title: 'URL と画面をつなぐ：ルーティングと Blade',
    content: 'Laravel では「どの URL にアクセスされたら、何を表示するか」をルートで決め、画面は Blade テンプレートで作ります。Web アプリの入口と出口を押さえましょう。',
    sections: [
      {
        heading: 'ルートは URL と処理の対応表',
        body: '画面向けのルートは routes/web.php に書きます。ページを表示するときは GET、フォームからデータを送るときは POST を使います。',
        code: "Route::get('/contact', [ContactController::class, 'create']);\nRoute::post('/contact', [ContactController::class, 'store']);"
      },
      {
        heading: 'ルートパラメータと名前付きルート',
        body: '{id} のように書くと、URL の一部を受け取れます。ルートに名前を付けておき、リンクは route() で作ると、URL の形を変えてもリンクを書き換えずに済みます。',
        code: "Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show');\n\n<a href=\"{{ route('posts.show', $post) }}\">{{ $post->title }}</a>"
      },
      {
        heading: 'Blade で値を安全に表示する',
        body: 'コントローラから view() でデータを渡し、Blade では {{ }} で表示します。{{ }} は HTML のタグを無害な文字に変換（エスケープ）するので、利用者が入力した文字を表示しても XSS を防げます。',
        code: "return view('users.index', ['users' => $users]);\n\n<p>ようこそ {{ $user->name }} さん</p>"
      },
      {
        heading: 'レイアウトの継承と繰り返し',
        body: '共通のヘッダーやフッターは1つのレイアウトにまとめ、各ページは @extends で引き継ぎ、@section で中身を差し込みます。一覧は @forelse を使うと、データが0件のときの表示も一緒に書けます。',
        code: "@extends('layouts.app')\n@section('content')\n  @forelse ($posts as $post)\n    <li>{{ $post->title }}</li>\n  @empty\n    <p>まだ記事がありません</p>\n  @endforelse\n@endsection"
      },
      {
        heading: 'フォームの @csrf と、見つからないときの 404',
        body: 'POST で送るフォームには必ず @csrf を書きます。他のサイトから勝手に送信される攻撃（CSRF）を防ぐ仕組みで、書き忘れると 419 エラーになります。また、存在しない ID でアクセスされたときは findOrFail() を使うと、自動で 404 ページを返せます。',
        code: "<form method=\"POST\" action=\"{{ route('contact.store') }}\">\n  @csrf\n  ...\n</form>\n\n$post = Post::findOrFail($id);"
      }
    ]
  },
  intermediate: {
    title: 'コントローラとデータベースで機能を作る',
    content: 'リクエストを受け取って処理し、データベースとやり取りして結果を返す。Web アプリの中心になるコントローラと Eloquent の使い方を学びます。',
    sections: [
      {
        heading: 'コントローラを作る',
        body: 'php artisan make:controller で雛形を作ります。一覧・詳細・作成・更新・削除をまとめて扱うリソースコントローラでは、一覧は index、詳細は show、保存は store のようにメソッド名の役割が決まっています。',
        code: 'php artisan make:controller PostController --resource'
      },
      {
        heading: 'Request を受け取り、入力を検証する',
        body: 'メソッドの引数に Request $request と書くと、Laravel が自動でリクエストの情報を渡してくれます。$request->validate() にルールを書くと、検証に失敗したときは自動で入力画面に戻り、エラーメッセージが渡されます。',
        code: "public function store(Request $request)\n{\n    $validated = $request->validate([\n        'title' => 'required|max:100',\n        'email' => 'required|email',\n    ]);\n    Post::create($validated);\n    return redirect()->route('posts.index');\n}"
      },
      {
        heading: '保存の後はリダイレクトする',
        body: '登録処理の後にそのまま画面を返すと、利用者がブラウザを再読み込みしたときに同じデータがもう一度送信されます。保存が終わったら別の画面へリダイレクトして、二重登録を防ぎます。'
      },
      {
        heading: 'Eloquent でデータを扱う',
        body: 'モデル Post は、規約により posts テーブル（小文字・複数形）に対応します。where に値を渡すと、値は SQL 文と分けて扱われる（バインド）ので、SQL インジェクションを防げます。検索条件があるときだけ絞り込むなら when() が便利です。',
        code: "$posts = Post::query()\n    ->when($request->keyword, fn ($q, $kw) => $q->where('title', 'like', \"%{$kw}%\"))\n    ->latest()\n    ->get();"
      },
      {
        heading: 'N+1問題と with()',
        body: '記事一覧で各記事の投稿者名を表示すると、記事1件ごとに投稿者を問い合わせるため、50件なら51回もの問い合わせが走ります（N+1問題）。with() で関連データをまとめて取得すると、問い合わせは2回で済みます。',
        code: "$posts = Post::with('user')->get();\n@foreach ($posts as $post)\n  {{ $post->user->name }}\n@endforeach"
      }
    ]
  },
  advanced: {
    title: 'テーブル設計とリレーション、安全な更新',
    content: 'データベースの構造をコードで管理するマイグレーションと、テーブル同士の関係（リレーション）を学びます。本番環境で安全にデータを扱うための考え方も押さえましょう。',
    sections: [
      {
        heading: 'マイグレーションの up と down',
        body: 'マイグレーションは、テーブルの作成や変更をコードとして記録する仕組みです。up に変更内容、down にそれを取り消す処理を書きます。down があれば、問題が起きたときに元に戻せます。',
        code: "public function up(): void\n{\n    Schema::table('products', function (Blueprint $table) {\n        $table->integer('discount_rate')->default(0);\n    });\n}\n\npublic function down(): void\n{\n    Schema::table('products', function (Blueprint $table) {\n        $table->dropColumn('discount_rate');\n    });\n}"
      },
      {
        heading: 'リレーション：hasMany と belongsTo',
        body: '「1人のユーザーが複数の記事を持つ」関係は、User モデルに hasMany、Post モデルに belongsTo を定義します。すると $user->posts で記事の一覧を取り出せます。',
        code: "class User extends Model {\n    public function posts() { return $this->hasMany(Post::class); }\n}\nclass Post extends Model {\n    public function user() { return $this->belongsTo(User::class); }\n}"
      },
      {
        heading: '外部キーと削除時の扱い',
        body: '他のテーブルを参照するカラムには外部キー制約を付けます。参照先のテーブルを先に作る必要があります。親を削除したときに子も一緒に消したいなら cascadeOnDelete を指定します。多対多の関係では、2つのモデル名を単数形・アルファベット順にした中間テーブル（post_tag など）を作ります。',
        code: "$table->foreignId('user_id')->constrained()->cascadeOnDelete();"
      },
      {
        heading: 'ユニーク制約とバリデーション',
        body: '同じメールアドレスで二重に会員登録されないよう、バリデーションに unique:users,email を書きます。データベース側にもユニーク制約を付けておくと、二重の守りになります。',
        code: "'email' => 'required|email|unique:users,email',"
      },
      {
        heading: 'トランザクションと本番での変更',
        body: '複数の更新を「全部成功するか、全部なかったことにするか」のどちらかにしたいときは DB::transaction を使います。また、データが入っている本番のテーブルに必須（NOT NULL）のカラムを追加するときは、いきなり必須にせず、NULL 許可やデフォルト値で追加 → 既存の行を埋める → 必須にする、の順で進めます。',
        code: "DB::transaction(function () use ($order) {\n    $order->save();\n    $order->product->decrement('stock');\n    $order->user->increment('points', 10);\n});"
      }
    ]
  }
};

export const thinking = {
  beginner: {
    title: '画面とルートの設計を考える',
    content: '正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。',
    prompts: [
      {
        scenario: '小さなブログを Laravel で作ります。必要な画面は「記事一覧」「記事の詳細」「記事の投稿フォーム」と、フォームから送られた記事を保存する処理です。',
        question: '必要なルート（URL・HTTP メソッド・名前）を設計し、それぞれの画面で気をつけることを書いてください。',
        checkpoints: [
          '一覧・詳細・投稿フォームは GET、保存は POST にしている',
          '詳細ページを /posts/{post} のようにルートパラメータで1つにまとめている',
          'ルートに名前を付け、リンクは route() で作る方針を示している',
          '投稿フォームの @csrf、存在しない記事の 404（findOrFail）、表示の {{ }} のいずれかに触れている'
        ],
        modelAnswer: 'ルートは次の4つにします。記事一覧は GET /posts（posts.index）、投稿フォームは GET /posts/create（posts.create）、保存は POST /posts（posts.store）、記事の詳細は GET /posts/{post}（posts.show）です。詳細ページは記事ごとにルートを作らず、{post} で記事の ID を受け取って1つのルートで表示します。一覧から詳細へのリンクは route("posts.show", $post) で作っておけば、URL の形を変えてもリンクは直さずに済みます。投稿フォームには必ず @csrf を書きます。詳細ページでは Post::findOrFail($id) を使い、存在しない記事なら 404 を返します。記事のタイトルや本文は {{ }} で表示し、タグが書かれていても実行されないようにします。',
        tip: 'ルートを設計するときは「見る画面は GET、データを変える処理は POST」と分けて一覧表を作ると整理しやすくなります。'
      },
      {
        scenario: '後輩が作った問い合わせフォームで、「送信すると 419 | Page Expired と表示される」「名前の欄に <b>太字</b> と書いて送ると、確認画面で本当に太字になってしまう」という報告がありました。',
        code: "<form method=\"POST\" action=\"/contact\">\n  <input name=\"name\">\n  <button>送信</button>\n</form>\n\n{{-- 確認画面 --}}\n<p>お名前：{!! $name !!}</p>",
        question: '2つの問題の原因と直し方を説明し、なぜその直し方が安全につながるのかも書いてください。',
        checkpoints: [
          '419 の原因が @csrf の書き忘れであることを指摘している',
          'CSRF（他のサイトから勝手に送信される攻撃）を防ぐ仕組みであることを説明している',
          '{!! !!} はエスケープせずに出力するため、タグが解釈されることを指摘している',
          '{{ }} に変えて XSS を防ぐ直し方を示している'
        ],
        modelAnswer: '1つ目の 419 エラーは、フォームに @csrf が書かれていないのが原因です。Laravel は POST の送信に、そのサイトが発行した合言葉（CSRF トークン）が付いているかを確かめます。付いていない送信は、他のサイトから利用者になりすまして送られた可能性があるので拒否されます。<form> の中に @csrf を1行書けば、合言葉が自動で入ります。2つ目は、確認画面で {!! $name !!} を使っているのが原因です。{!! !!} はタグをそのまま出力するので、<b> が太字として解釈されました。もし <script> を書かれたら、他の人の画面でプログラムが実行される危険（XSS）があります。{{ $name }} に変えれば、タグは無害な文字に変換されて表示されます。',
        tip: '{!! !!} を見かけたら「この中身は本当に信頼できる HTML か？」と必ず確かめましょう。'
      }
    ]
  },
  intermediate: {
    title: '登録と検索の処理を設計する',
    content: '入力の検証、保存、検索、表示の速さまで含めて、実際に使える機能を設計する練習です。',
    prompts: [
      {
        scenario: 'イベントの申込フォームを作ります。項目は名前（必須）、メールアドレス（必須・正しい形式）、参加人数（1〜10人）です。テストでは「申込完了の画面で再読み込みすると、同じ申込がもう1件登録される」という問題も見つかっています。',
        question: '申込を受け付けるコントローラの処理の流れを、検証・保存・その後の画面の順に書いてください。',
        checkpoints: [
          'validate に required・email・数値の範囲（between:1,10 など）のルールを書いている',
          '検証に失敗すると自動で入力画面に戻り、エラーが表示されることに触れている',
          '検証済みのデータだけを保存する（$validated を使う）ことに触れている',
          '保存後にリダイレクトして、再読み込みによる二重登録を防いでいる'
        ],
        modelAnswer: 'store メソッドで Request $request を受け取り、まず $validated = $request->validate([\'name\' => \'required|max:50\', \'email\' => \'required|email\', \'people\' => \'required|integer|between:1,10\']); と検証します。ルールに合わなければ、Laravel が自動で入力画面に戻し、エラーメッセージと入力済みの値を渡してくれます。検証を通ったら、Entry::create($validated) のように検証済みのデータだけを保存します。リクエストの値を全部そのまま保存すると、想定外の項目まで書き込まれる恐れがあるからです。保存が終わったら、return redirect()->route(\'entries.thanks\'); で完了画面へリダイレクトします。完了画面はただ表示するだけの GET なので、再読み込みしても申込は増えません。',
        tip: 'データを保存する処理は「検証 → 保存 → リダイレクト」の3点セットで書くと覚えておきましょう。'
      },
      {
        scenario: '求人サイトの一覧ページで、「勤務地」と「キーワード」で絞り込めます。どちらも空なら全件を表示します。今は if 文が入れ子になって読みにくいうえ、一覧で会社名を表示しているせいか、ページの表示に3秒以上かかっています。',
        code: "$jobs = Job::all();\nif ($request->area) {\n    $jobs = Job::where('area', $request->area)->get();\n    if ($request->keyword) {\n        $jobs = Job::where('area', $request->area)\n            ->where('title', 'like', '%'.$request->keyword.'%')->get();\n    }\n} elseif ($request->keyword) {\n    $jobs = Job::where('title', 'like', '%'.$request->keyword.'%')->get();\n}\n\n@foreach ($jobs as $job)\n  {{ $job->company->name }}\n@endforeach",
        question: '読みにくさと遅さ、それぞれの原因と改善方法を書いてください。',
        checkpoints: [
          'when() で「条件があるときだけ絞り込みを足す」書き方に整理している',
          '最初に Job::all() で全件取得している無駄にも触れている（任意）',
          '一覧で $job->company にアクセスするたびに問い合わせが走る N+1問題を指摘している',
          'with(\'company\') でまとめて取得する改善を示している'
        ],
        modelAnswer: '読みにくさの原因は、条件の組み合わせごとに検索を書き分けているからです。条件が増えるたびに分岐が倍に増えていきます。when() を使い、Job::query()->when($request->area, fn ($q, $area) => $q->where(\'area\', $area))->when($request->keyword, fn ($q, $kw) => $q->where(\'title\', \'like\', "%{$kw}%"))->get() と書けば、「値があるときだけ条件を足す」が1本の流れで表せます。最初の Job::all() で使わないかもしれない全件を取っている無駄もなくなります。遅さの原因は N+1問題です。一覧で $job->company->name を表示するたびに会社を1件ずつ問い合わせるので、求人が100件なら101回の問い合わせが走ります。検索に with(\'company\') を加えれば、会社の情報はまとめて1回で取得され、問い合わせは2回で済みます。',
        tip: '一覧ページが遅いときは、まず「ループの中で関連データを読んでいないか」を確かめましょう。'
      }
    ]
  },
  advanced: {
    title: 'データの整合性を守る設計を考える',
    content: '本番のデータは「途中で失敗しても壊れない」「後から変えても困らない」ように設計する必要があります。理由まで書いてみましょう。',
    prompts: [
      {
        scenario: 'ネットショップの注文処理で、「注文を保存する」「商品の在庫を減らす」「会員にポイントを付ける」の3つを順に行っています。先日、ポイント付与の処理でエラーが起きたところ、注文と在庫だけが更新され、データが食い違ってしまいました。',
        code: "$order->save();\n$product->decrement('stock', $order->quantity);\n$user->increment('points', 10); // ここでエラー",
        question: 'なぜデータが食い違ったのかを説明し、どう直すかを書いてください。在庫が足りないときの扱いにも触れてください。',
        checkpoints: [
          '3つの更新が別々に確定するため、途中で失敗すると一部だけが反映されることを説明している',
          'DB::transaction で3つの更新をまとめる直し方を示している',
          'トランザクション内でエラーが起きると全部が取り消される（ロールバック）ことを説明している',
          '在庫が足りないときは例外を投げて注文全体を取り消す、などの扱いに触れている'
        ],
        modelAnswer: '今のコードでは、3つの更新がそれぞれその場でデータベースに確定します。ポイント付与で失敗しても、それより前の注文の保存と在庫の減少は確定済みなので、「注文と在庫はあるのにポイントがない」状態が残りました。直すには、3つの処理を DB::transaction(function () { ... }) の中に入れます。トランザクションの中でエラーが起きると、それまでの更新もすべて取り消され（ロールバック）、何もなかった状態に戻ります。全部成功したときだけ確定するので、食い違いは起きません。また、在庫が注文数より少ない場合は、トランザクションの中で在庫を確認し、足りなければ例外を投げて注文全体を取り消し、利用者には「在庫が不足しています」と伝えます。',
        tip: '「この処理の途中で失敗したら、どんな状態が残るか」を1行ずつ想像すると、トランザクションが必要な場所が見えてきます。'
      },
      {
        scenario: '会員が1万人いる本番サイトの users テーブルに、「電話番号（必須）」のカラムを追加することになりました。後輩は次のマイグレーションをそのまま本番で実行しようとしています。',
        code: "Schema::table('users', function (Blueprint $table) {\n    $table->string('phone'); // NOT NULL で追加\n});",
        question: 'このまま実行すると何が起きるかを説明し、安全に追加する手順を書いてください。元に戻す方法にも触れてください。',
        checkpoints: [
          '既存の1万人の行に値がないため、必須のカラムを追加すると失敗する（または不正な値が入る）ことを説明している',
          'まず NULL 許可（nullable）で追加する手順を示している',
          '既存の会員の値を埋める（入力をお願いする、仮の値を入れる等）手順を示している',
          '値がそろってから必須にする、down に取り消し処理を書く、のどちらかに触れている'
        ],
        modelAnswer: '既存の1万人の会員には電話番号の値がありません。必須（NOT NULL）のカラムを追加すると、既存の行に入れる値がないため、データベースによってはマイグレーションが失敗したり、空文字のような意味のない値が全員に入ったりします。安全な手順は3段階です。1つ目のマイグレーションで $table->string(\'phone\')->nullable() として、空でもよい形で追加します。次に、会員にログイン時に電話番号の登録をお願いするなどして、既存の会員の値を埋めていきます（新規登録ではバリデーションで必須にします）。全員の値がそろったことを確認してから、2つ目のマイグレーションで必須に変更します。それぞれのマイグレーションの down には、カラムの削除や nullable に戻す処理を書き、問題が起きたら戻せるようにしておきます。',
        tip: '本番のテーブルを変えるときは「今あるデータはどうなるか」と「失敗したらどう戻すか」を必ずセットで考えましょう。'
      }
    ]
  }
};
