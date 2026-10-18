// 先頭が * の選択肢が正解。正解の位置は問題ごとに散らしてある
const opt = (...texts) => texts.map((t, i) => ({
  id: 'abcd'[i],
  text: t.replace(/^\*/, ''),
  correct: t.startsWith('*')
}));

export const course = {
  id: 'sql',
  name: 'SQL',
  description: 'データベースからデータを取り出し、追加・更新・集計するための基本を学びます',
  icon: 'fa-solid fa-database',
  shortLabel: 'SQ'
};

export const lessons = {
  beginner: [
    {
      title: 'データの取り出しと絞り込み',
      content: 'SELECT でテーブルからデータを取り出し、条件で絞り込み、並べ替える基本を学びます。',
      questions: [
        {
          text: 'users テーブルのすべての列、すべての行を取り出す書き方は______です。',
          options: opt(
            'GET * FROM users;',
            '*SELECT * FROM users;',
            'SELECT users FROM *;',
            'FETCH ALL users;'
          ),
          hint: 'SQL でデータを取り出す命令は SELECT で、取り出す先のテーブルは FROM で指定します。',
          explanation: 'SELECT の後に取り出す列を書き、FROM の後にテーブル名を書きます。* は「すべての列」を表します。実際の開発では、必要な列だけを書くほうが、速く、意図も伝わります。'
        },
        {
          text: '年齢が 20 歳以上のユーザーだけを取り出すために、条件を書くキーワードは______です。',
          options: opt(
            'IF',
            'FILTER',
            'LIMIT',
            '*WHERE'
          ),
          hint: '「どこ（Where）の行か」を指定するキーワードです。',
          explanation: 'WHERE の後に条件を書くと、条件に合う行だけが取り出されます。SELECT * FROM users WHERE age >= 20; のように書きます。LIMIT は、取り出す行数の上限を決めるもので、条件の指定ではありません。'
        },
        {
          text: '価格の高い順に並べ替えるための書き方は______です。',
          options: opt(
            'ORDER BY price ASC',
            'SORT BY price DESC',
            '*ORDER BY price DESC',
            'GROUP BY price DESC'
          ),
          hint: '並べ替えは ORDER BY、小さい順は ASC、大きい順は DESC です。',
          explanation: 'ORDER BY 列名 DESC で、大きい順（降順）に並べ替えます。ASC は小さい順（昇順）で、省略したときの初期値です。GROUP BY は、行をまとめて集計するためのもので、並べ替えではありません。'
        },
        {
          text: 'email 列が空（NULL）の行を取り出す条件として正しいのは______です。',
          options: opt(
            'WHERE email = NULL',
            'WHERE email = \'\'',
            'WHERE email == NULL',
            '*WHERE email IS NULL'
          ),
          hint: 'NULL は「値が不明」という状態で、普通の値のように = では比べられません。',
          explanation: 'NULL は値ではなく「ない」状態なので、= で比べると、結果は常に不明になり、行が取り出されません。IS NULL と IS NOT NULL を使います。空文字（\'\'）は、NULL とは別のものです。'
        }
      ]
    },
    {
      title: 'データの追加・更新・削除',
      content: 'データを書き換える命令と、書き換えるときに気をつけることを学びます。',
      questions: [
        {
          text: 'users テーブルに新しい行を追加する命令は______です。',
          options: opt(
            'ADD users VALUES (...);',
            '*INSERT INTO users (name, age) VALUES (\'田中\', 25);',
            'CREATE users (name, age) VALUES (...);',
            'APPEND INTO users (...);'
          ),
          hint: '「挿入する」という意味の英単語が使われます。',
          explanation: 'INSERT INTO テーブル名 (列名...) VALUES (値...) で行を追加します。文字列はシングルクォートで囲みます。CREATE は、テーブルそのものを作る命令で、行の追加には使いません。'
        },
        {
          text: 'UPDATE 文で WHERE を付け忘れたときに起きるのは______です。',
          options: opt(
            'エラーになり、何も更新されない',
            '先頭の1行だけが更新される',
            '*テーブルのすべての行が更新される',
            '何も起きない'
          ),
          hint: 'WHERE は、どの行を対象にするかを決める条件です。それがないと対象は？',
          explanation: 'WHERE がないと、すべての行が対象になります。UPDATE users SET age = 0; と書くと、全ユーザーの年齢が 0 になります。DELETE も同じです。実行前に、同じ WHERE で SELECT して、対象の行を確かめる習慣が大切です。'
        },
        {
          text: '主キー（PRIMARY KEY）の役割は______です。',
          options: opt(
            'データを暗号化する',
            '列の値を、自動で大文字にする',
            '*テーブルの各行を、重複なく一意に識別する',
            'テーブルを、読み取り専用にする'
          ),
          hint: 'id のような列が、よく主キーに使われます。',
          explanation: '主キーは、各行を一意に識別するための列（または列の組み合わせ）です。重複や NULL は許されません。「id = 3 の行」のように、特定の行を確実に指し示せるので、更新や削除、他のテーブルとの関連付けの基準になります。'
        },
        {
          text: 'SQL で文字列の値を書くときのルールとして正しいのは______です。',
          options: opt(
            '*シングルクォート（\'田中\'）で囲む',
            'クォートは付けない',
            'バッククォート（`田中`）で囲む',
            '角括弧（[田中]）で囲む'
          ),
          hint: '一般的な SQL では、文字列の値と、列名やテーブル名は区別されます。',
          explanation: '標準的な SQL では、文字列の値はシングルクォートで囲みます。ダブルクォートは、列名などの名前を囲むために使われる場合があり、データベースによって扱いが異なります。値と名前を混同しないように気をつけます。'
        }
      ]
    }
  ],
  intermediate: [
    {
      title: '集計とグループ化',
      content: '件数や合計を求める集計関数と、グループごとに集計する方法を学びます。',
      questions: [
        {
          text: 'orders テーブルの行数（注文件数）を数える書き方は______です。',
          options: opt(
            'SELECT SUM(*) FROM orders;',
            'SELECT NUMBER(*) FROM orders;',
            '*SELECT COUNT(*) FROM orders;',
            'SELECT LENGTH(*) FROM orders;'
          ),
          hint: '集計関数の COUNT は、行の数を数えます。',
          explanation: 'COUNT(*) は、行の数を数えます。SUM は列の合計、AVG は平均、MAX と MIN は最大値と最小値を求めます。COUNT(列名) と書くと、その列が NULL でない行だけを数える点が違います。'
        },
        {
          text: '部署ごとの人数を求めるために、SELECT の最後に付けるのは______です。',
          options: opt(
            'ORDER BY department',
            'WHERE department',
            'LIMIT department',
            '*GROUP BY department'
          ),
          hint: '「部署ごと」に行をまとめて、集計関数を適用します。',
          explanation: 'GROUP BY 列名 で、同じ値の行を1つのグループにまとめ、グループごとに COUNT などを計算します。SELECT department, COUNT(*) FROM employees GROUP BY department; のように書きます。'
        },
        {
          text: 'WHERE と HAVING の違いとして正しいのは______です。',
          options: opt(
            'WHERE は集計の後、HAVING は集計の前に使う',
            '*WHERE はグループ化の前の行を絞り、HAVING はグループ化した後の結果を絞る',
            'どちらも同じ意味で、書き方の好みである',
            'HAVING は SELECT 文では使えない'
          ),
          hint: '集計関数の結果（COUNT(*) > 5 など）で絞りたいときは、どちらを使うでしょうか。',
          explanation: 'WHERE は、グループ化の前に、個々の行を絞ります。集計関数の結果は、グループ化の後でないと分からないので、それで絞るときは HAVING を使います。例: GROUP BY department HAVING COUNT(*) >= 5。'
        },
        {
          text: 'AVG(score) の結果について、正しいのは______です。',
          options: opt(
            'NULL の行も、0 として計算される',
            'NULL の行があると、エラーになる',
            '最初の行の値が返される',
            '*NULL の行は、計算から除外される'
          ),
          hint: '集計関数は、NULL を「値がない」と扱います。',
          explanation: 'AVG、SUM、COUNT(列名) などの集計関数は、NULL の行を無視して計算します。そのため、NULL を 0 として平均したいときは、COALESCE(score, 0) のように、明示的に変換する必要があります。'
        }
      ]
    },
    {
      title: 'JOIN とサブクエリ',
      content: '複数のテーブルを結び付けて、必要なデータを取り出す方法を学びます。',
      questions: [
        {
          text: 'orders テーブルと users テーブルを user_id で結び付けて、両方に存在する行だけを取り出すのは______です。',
          options: opt(
            '*INNER JOIN',
            'LEFT JOIN',
            'CROSS JOIN',
            'UNION'
          ),
          hint: '「内側」の、両方に一致する行だけです。',
          explanation: 'INNER JOIN は、結合の条件に一致する行だけを返します。一致しない行は、どちらのテーブルのものも結果に出ません。書き方は、FROM orders INNER JOIN users ON orders.user_id = users.id のようになります。'
        },
        {
          text: '注文が1件もないユーザーも含めて、全ユーザーを一覧にしたいときに使うのは______です。',
          options: opt(
            'users INNER JOIN orders',
            'orders LEFT JOIN users',
            '*users LEFT JOIN orders',
            'users CROSS JOIN orders'
          ),
          hint: 'LEFT JOIN は、左側に書いたテーブルのすべての行を残します。',
          explanation: 'LEFT JOIN は、左のテーブルの行をすべて残し、右に一致する行がなければ、その列を NULL にします。「全ユーザー」を残したいので、users を左に書きます。orders LEFT JOIN users では、全注文が残るので、意図と逆になります。'
        },
        {
          text: 'JOIN で ON の条件を書き忘れると、起きるのは______です。',
          options: opt(
            '結果が空になる',
            '*両方のテーブルの行のすべての組み合わせ（直積）が返る',
            '先頭の行どうしだけが結び付く',
            '必ずエラーになる'
          ),
          hint: '「どの行どうしを結ぶか」の条件がないと、全部の組み合わせになります。',
          explanation: '結合の条件がないと、左の各行と右の各行のすべての組み合わせが返されます。100行と100行なら 10,000 行です。予想外に件数が増えたときは、ON の条件が漏れていないか、確認します。'
        },
        {
          text: '外部キー（FOREIGN KEY）の役割は______です。',
          options: opt(
            '行を、自動で並べ替える',
            '列の値を、暗号化して保存する',
            'テーブルの、読み込みを速くする',
            '*他のテーブルの主キーを参照し、存在しない値が入らないように保つ'
          ),
          hint: 'orders.user_id には、実際に存在する users.id だけが入ってほしいはずです。',
          explanation: '外部キーは、他のテーブルの行への参照を表します。存在しない user_id の注文を登録しようとするとエラーにでき、データの整合性が保たれます。JOIN で結び付けるときの、基準になる列でもあります。'
        }
      ]
    }
  ],
  advanced: [
    {
      title: '設計・性能・安全性',
      content: '大きなデータや、複数の利用者を前提にしたときに、気をつける点を学びます。',
      questions: [
        {
          text: 'インデックスについて、正しいのは______です。',
          options: opt(
            '*検索は速くなりやすいが、追加や更新は遅くなり、容量も使う',
            '付ければ付けるほど、すべての処理が速くなる',
            'SELECT にしか影響せず、デメリットはない',
            'テーブルの並び順を、永久に固定する'
          ),
          hint: '本の巻末の索引を思い出してみましょう。索引を作る手間と、引くときの速さの関係です。',
          explanation: 'インデックスは、検索を速くするための索引です。ただし、行を追加・更新するたびに、索引も更新するため、書き込みは遅くなり、容量も使います。WHERE や JOIN によく使う列に、必要なものだけ付けるのが基本です。'
        },
        {
          text: 'トランザクションを使う目的は______です。',
          options: opt(
            'SELECT の結果を、自動でキャッシュする',
            'テーブルの構造を、あとから変えやすくする',
            '*複数の更新を、ひとまとまりとして、すべて成功か、すべて取り消しにする',
            'データベースの接続を、速くする'
          ),
          hint: '「口座 A から引き落とし、口座 B に入金する」という、途中で止まってはいけない処理を考えます。',
          explanation: 'トランザクションは、複数の処理をひとまとまりとして扱い、COMMIT ですべてを確定するか、ROLLBACK ですべてを取り消します。途中で失敗しても、引き落としだけが行われた、といった中途半端な状態を防げます。'
        },
        {
          text: '正規化の目的として最も適切なのは______です。',
          options: opt(
            'テーブルの数を、できるだけ減らす',
            'すべての列を、1つのテーブルにまとめる',
            'SELECT を、書かなくて済むようにする',
            '*同じ情報の重複を減らし、更新のずれや矛盾を防ぐ'
          ),
          hint: '顧客の住所が、注文のたびに書かれていると、変更したときに何が起きるでしょうか。',
          explanation: '正規化は、同じ情報が複数の場所に重複しないよう、テーブルを分ける設計です。顧客の住所を customers テーブルだけに持たせれば、変更は1か所で済み、注文ごとにずれることもありません。'
        },
        {
          text: 'アプリケーションから SQL を組み立てるとき、利用者の入力を、文字列として SQL に直接つなげてはいけない理由は______です。',
          options: opt(
            '文字数が増えて、SQL が遅くなるため',
            '*SQL インジェクションにより、意図しない SQL を実行される恐れがあるため',
            '入力が、日本語だと動かなくなるため',
            '大文字と小文字が、区別されなくなるため'
          ),
          hint: '入力欄に、SQL の一部になる文字列を書かれたら、どうなるでしょうか。',
          explanation: '入力をそのまま SQL に連結すると、入力の中に書かれた SQL が、そのまま実行される恐れがあります（SQL インジェクション）。値は、プレースホルダ（?）などで別に渡す、プリペアドステートメントを使います。'
        }
      ]
    }
  ]
};

export const projects = {
  beginner: {
    title: 'SQL 初級プロジェクト',
    content: '顧客テーブルから、条件に合うデータを探しながら、取り出しの基本を確認します。',
    questions: [
      {
        text: '名前に「田」を含む顧客を探すために、WHERE の中で使うのは______です。',
        options: opt(
          'name CONTAINS \'田\'',
          '*name LIKE \'%田%\'',
          'name = \'%田%\'',
          'name HAS \'田\''
        ),
        hint: '部分一致の検索には、パターンを使える専用の演算子があります。',
        explanation: 'LIKE は、パターンに一致する文字列を探します。% は「任意の文字列」を表すので、\'%田%\' は、「田」を含むものすべてです。= では、% がただの文字として扱われ、部分一致にはなりません。'
      },
      {
        text: '結果の最初の10行だけを取り出すために、末尾に付けるのは______です。',
        options: opt(
          'TOP 10 を末尾に付ける',
          'WHERE ROWNUM = 10',
          '*LIMIT 10',
          'FIRST 10'
        ),
        hint: '取り出す行数の上限を決めるキーワードです。',
        explanation: 'LIMIT は、取り出す行数の上限を決めます。MySQL や PostgreSQL、SQLite などで使えます。SQL Server では TOP、Oracle では FETCH FIRST のように、データベースごとに書き方が異なる点に注意します。'
      },
      {
        text: '顧客がどの都道府県に住んでいるかを、重複なく一覧にしたいときに使うのは______です。',
        options: opt(
          '*SELECT DISTINCT prefecture FROM customers;',
          'SELECT UNIQUE prefecture FROM customers;',
          'SELECT ONLY prefecture FROM customers;',
          'SELECT prefecture FROM customers GROUP;'
        ),
        hint: '同じ値の行を1つにまとめて、重複を取り除くキーワードがあります。',
        explanation: 'SELECT DISTINCT は、結果から重複する行を取り除きます。同じ都道府県が何度出てきても、1回だけ表示されます。重複を取り除かないときは、DISTINCT を付けません。'
      },
      {
        text: '20 歳以上、かつ 30 歳以下の顧客を取り出す書き方として、適切なのは______です。',
        options: opt(
          'WHERE age >= 20 OR age <= 30',
          '*WHERE age BETWEEN 20 AND 30',
          'WHERE age > 20 AND age < 30',
          'WHERE age IN (20, 30)'
        ),
        hint: 'BETWEEN は、両端の値を含む範囲を指定できます。',
        explanation: 'BETWEEN 20 AND 30 は、20 以上 30 以下（両端を含む）です。OR でつなぐと、ほぼ全員が対象になってしまいます。> と < では、20 と 30 が除かれます。IN は、列挙した値のどれかに一致するものです。'
      }
    ]
  },
  intermediate: {
    title: 'SQL 中級プロジェクト',
    content: '顧客と注文のデータを組み合わせて、売上の集計をしながら、JOIN と GROUP BY を確認します。',
    questions: [
      {
        text: '顧客ごとの注文の合計金額を求めるクエリの骨組みとして、正しいのは______です。',
        options: opt(
          'SELECT customer_id, SUM(amount) FROM orders ORDER BY customer_id;',
          '*SELECT customer_id, SUM(amount) FROM orders GROUP BY customer_id;',
          'SELECT customer_id, SUM(amount) FROM orders WHERE customer_id;',
          'SELECT SUM(customer_id, amount) FROM orders;'
        ),
        hint: '「顧客ごと」にまとめて合計するには、グループ化が必要です。',
        explanation: 'SUM のような集計関数と、集計しない列（customer_id）を一緒に取り出すときは、その列で GROUP BY します。ORDER BY は並べ替えるだけで、まとめる働きはありません。'
      },
      {
        text: '注文が一度もない顧客を探すために、LEFT JOIN の後に付ける条件は______です。',
        options: opt(
          'WHERE orders.id = 0',
          'WHERE orders.id = NULL',
          'WHERE customers.id IS NULL',
          '*WHERE orders.id IS NULL'
        ),
        hint: 'LEFT JOIN で、右のテーブルに一致する行がないとき、右側の列は何になるでしょうか。',
        explanation: 'customers LEFT JOIN orders で、注文のない顧客の行は、orders 側の列がすべて NULL になります。そこで orders.id IS NULL の行だけに絞れば、注文のない顧客を取り出せます。= NULL では、常に一致しません。'
      },
      {
        text: '月ごとの売上合計を求めるときに、まず必要になるのは______です。',
        options: opt(
          '*注文日から、年月の部分を取り出して、それで GROUP BY する',
          '注文日の列を、そのまま SUM する',
          '注文を 1 件ずつ、手作業で数える',
          '注文日を ORDER BY して、先頭の月だけを使う'
        ),
        hint: '日付のままでは、日ごとに別のグループになってしまいます。',
        explanation: '日付をそのまま GROUP BY すると、日ごとの集計になります。月ごとにするには、年月の部分だけを取り出して（例えば DATE_TRUNC や、年月のフォーマット関数を使って）、それでグループ化します。関数の名前は、データベースごとに異なります。'
      },
      {
        text: '顧客が複数回注文していても、顧客数を1回ずつ数えるための書き方は______です。',
        options: opt(
          'COUNT(customer_id)',
          'COUNT(*)',
          'SUM(customer_id)',
          '*COUNT(DISTINCT customer_id)'
        ),
        hint: '同じ顧客が、何行にもわたって出てくる場合を考えます。',
        explanation: 'COUNT(DISTINCT 列名) は、重複を除いた値の数を数えます。COUNT(customer_id) や COUNT(*) は、行ごとに数えるので、同じ顧客の注文が複数あると、その回数分が数えられます。'
      }
    ]
  },
  advanced: {
    title: 'SQL 上級プロジェクト',
    content: '運用中のデータを扱う場面で、性能と安全性の判断を確認します。',
    questions: [
      {
        text: '注文テーブルの検索が遅いとき、最初に調べるべきなのは______です。',
        options: opt(
          '*遅い SQL の実行計画（EXPLAIN）を見て、インデックスが使われているかを確認する',
          '再起動して、様子を見る',
          'すべての列に、インデックスを付ける',
          'テーブルを、複数のファイルにコピーする'
        ),
        hint: '推測で対策する前に、データベースがどう処理しているかを見ます。',
        explanation: 'EXPLAIN で実行計画を見ると、インデックスが使われているか、全行を読んでいるかなどが分かります。原因が分かってから、WHERE や JOIN に使う列に、インデックスを足すなどの対策を行います。何でも付けると、書き込みが遅くなります。'
      },
      {
        text: '商品の在庫を減らしながら、注文を登録する処理で、トランザクションを使う理由は______です。',
        options: opt(
          '処理を、速くするため',
          'SQL を、短く書くため',
          '*途中で失敗しても、在庫だけが減って注文が残らない、という矛盾を防ぐため',
          'テーブルの構造を、変えるため'
        ),
        hint: '在庫の更新と、注文の登録の、どちらか一方だけが成功した状態を考えてみます。',
        explanation: '在庫の更新と注文の登録を、1つのトランザクションにすれば、片方が失敗したとき、ROLLBACK で両方を取り消せます。在庫が減ったのに注文が記録されない、といった矛盾を防げます。'
      },
      {
        text: '本番のデータに対して、条件付きで大量に UPDATE する前にすべきことは______です。',
        options: opt(
          'とりあえず実行して、結果を見てから考える',
          'WHERE は、最後に付け足す',
          '*同じ WHERE 条件で SELECT して対象の行を確かめ、バックアップやトランザクションも用意する',
          '夜中に、こっそり実行する'
        ),
        hint: '取り消せない書き換えを、間違った範囲に実行したときの被害を考えます。',
        explanation: '同じ WHERE で SELECT し、対象の行数と中身が意図どおりかを確かめます。そのうえで、バックアップを取り、トランザクションの中で実行して、結果が確認できてから COMMIT します。取り返しがつかなくなる前の備えです。'
      },
      {
        text: 'WHERE 句の中で、インデックスが効きにくくなる書き方は______です。',
        options: opt(
          'WHERE id = 100',
          'WHERE created_at >= \'2026-01-01\'',
          'WHERE email = \'a@example.com\'',
          '*WHERE LOWER(email) = \'a@example.com\'（列に関数を適用している）'
        ),
        hint: '索引は、列の値そのものをもとに作られています。',
        explanation: '列に関数を適用すると、索引に保存されている値と比べられなくなり、全行を読むことになりがちです。条件は、列を加工する側ではなく、比較する値の側で合わせるのが基本です。必要なら、関数用のインデックスを作る方法もあります。'
      }
    ]
  }
};
