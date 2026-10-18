export const courseId = 'sql';

export const basics = {
  beginner: {
    title: 'テーブルとデータの基本操作',
    content: 'データベースは、表（テーブル）の形でデータを管理します。SQL は、その表に「問い合わせ」をするための言語です。取り出す、追加する、更新する、削除する、の4つの基本を押さえましょう。',
    sections: [
      {
        heading: 'テーブル、行、列、主キー',
        body: 'テーブルは、行（1件のデータ）と列（項目）でできた表です。各行を一意に識別するための列を主キー（PRIMARY KEY）といい、id のような列がよく使われます。主キーがあるので、「id が 3 の行」のように、特定の1件を確実に指せます。',
        example: '会員テーブルなら、1行が1人の会員、列が名前やメールアドレスです。id が、その会員の識別番号になります。'
      },
      {
        heading: 'SELECT で取り出す',
        body: 'SELECT の後に取り出す列を、FROM の後にテーブル名を書きます。* はすべての列を表しますが、実際の開発では、必要な列だけを書くのが基本です。',
        code: 'SELECT name, email FROM users;\nSELECT * FROM users;'
      },
      {
        heading: 'WHERE と ORDER BY で絞り込み・並べ替え',
        body: 'WHERE で条件に合う行だけを取り出し、ORDER BY で並べ替えます。ASC は小さい順（初期値）、DESC は大きい順です。NULL（値がない）かどうかは、= ではなく IS NULL で調べます。',
        code: 'SELECT name, age FROM users\nWHERE age >= 20 AND email IS NOT NULL\nORDER BY age DESC;'
      },
      {
        heading: 'INSERT・UPDATE・DELETE',
        body: '行を追加するには INSERT、更新するには UPDATE、削除するには DELETE を使います。UPDATE と DELETE は、WHERE を付け忘れると、全行が対象になります。実行前に、同じ条件で SELECT して、対象を確かめる習慣が大切です。',
        code: "INSERT INTO users (name, age) VALUES ('田中', 25);\nUPDATE users SET age = 26 WHERE id = 1;\nDELETE FROM users WHERE id = 1;"
      },
      {
        heading: '文字列の書き方と部分一致',
        body: '文字列の値は、シングルクォートで囲みます。部分一致で探すときは LIKE を使い、% は「任意の文字列」を表します。',
        code: "SELECT * FROM users WHERE name = '田中';\nSELECT * FROM users WHERE name LIKE '%田%';"
      }
    ]
  },
  intermediate: {
    title: '集計と、複数のテーブルの結合',
    content: '実際のデータは、複数のテーブルに分けて保存されます。件数や合計を求める集計と、テーブルを結び付ける JOIN が、実務の中心です。',
    sections: [
      {
        heading: '集計関数',
        body: 'COUNT（件数）、SUM（合計）、AVG（平均）、MAX と MIN（最大と最小）が、基本の集計関数です。NULL の行は、計算から除外されます。COUNT(*) は行数を、COUNT(列名) は、その列が NULL でない行の数を数えます。',
        code: 'SELECT COUNT(*), SUM(amount), AVG(amount) FROM orders;'
      },
      {
        heading: 'GROUP BY と HAVING',
        body: 'GROUP BY で、同じ値の行をグループにまとめ、グループごとに集計します。WHERE はグループ化の前の行を絞り、HAVING はグループ化した後の結果（集計の結果）を絞ります。',
        code: 'SELECT department, COUNT(*) AS members\nFROM employees\nWHERE active = 1\nGROUP BY department\nHAVING COUNT(*) >= 5;'
      },
      {
        heading: 'INNER JOIN と LEFT JOIN',
        body: 'JOIN で、複数のテーブルを、共通の列（外部キーと主キー）で結び付けます。INNER JOIN は、両方に一致する行だけを返します。LEFT JOIN は、左のテーブルの行をすべて残し、右に一致する行がなければ、右側の列を NULL にします。',
        code: 'SELECT u.name, o.amount\nFROM users u\nLEFT JOIN orders o ON o.user_id = u.id;'
      },
      {
        heading: 'ON を書き忘れない',
        body: 'JOIN で結合の条件（ON）を書き忘れると、左右のすべての組み合わせ（直積）が返され、行数が急激に増えます。件数が予想よりずっと多いときは、まず ON を疑います。'
      },
      {
        heading: '外部キーとデータの整合性',
        body: '外部キーは、他のテーブルの主キーへの参照です。orders.user_id に、存在する users.id だけが入るよう保つことで、「持ち主のいない注文」のような矛盾を防げます。JOIN で結び付ける基準にもなります。'
      }
    ]
  },
  advanced: {
    title: '設計・性能・安全性',
    content: 'データが増え、複数の人が同時に使うようになると、速さと正しさの両方が求められます。判断の理由まで理解しましょう。',
    sections: [
      {
        heading: 'インデックス',
        body: 'インデックスは、検索を速くするための索引です。WHERE や JOIN によく使う列に付けると効果があります。ただし、行を追加・更新するたびに索引も更新され、容量も使うため、むやみに付けないようにします。列に関数を適用した条件では、効かなくなることがあります。',
        code: "CREATE INDEX idx_users_email ON users (email);\n\n-- 効く:   WHERE email = 'a@example.com'\n-- 効きにくい: WHERE LOWER(email) = 'a@example.com'"
      },
      {
        heading: '実行計画（EXPLAIN）',
        body: '遅いクエリは、推測ではなく、EXPLAIN で実行計画を見て原因を調べます。インデックスが使われているか、全行を読んでいないかを確かめてから、対策を決めます。',
        code: 'EXPLAIN SELECT * FROM orders WHERE customer_id = 100;'
      },
      {
        heading: 'トランザクション',
        body: '複数の更新を、ひとまとまりとして扱う仕組みです。COMMIT ですべてを確定し、ROLLBACK ですべてを取り消します。途中で失敗しても、中途半端な状態が残りません。',
        code: 'BEGIN;\nUPDATE stocks SET quantity = quantity - 1 WHERE product_id = 10;\nINSERT INTO orders (product_id, user_id) VALUES (10, 3);\nCOMMIT;'
      },
      {
        heading: '正規化',
        body: '同じ情報が、複数の場所に重複しないよう、テーブルを分ける設計です。顧客の住所を customers だけに持たせれば、変更は1か所で済み、注文ごとにずれることがありません。分けすぎると、JOIN が増えて複雑になるため、バランスを考えます。'
      },
      {
        heading: 'SQL インジェクションと、安全な書き換え',
        body: '利用者の入力を、文字列として SQL に連結すると、入力に含まれた SQL が実行される危険があります。値は、プレースホルダで別に渡す（プリペアドステートメント）ようにします。また、本番のデータを書き換える前は、同じ WHERE で SELECT して対象を確かめ、バックアップとトランザクションを用意します。',
        code: "-- 危険: \"SELECT * FROM users WHERE name = '\" + input + \"'\"\n-- 安全: SELECT * FROM users WHERE name = ?   -- 値は別に渡す"
      }
    ]
  }
};

export const thinking = {
  beginner: {
    title: '書き換えの前に、確かめる',
    content: '正解は1つではありません。ここまでの知識を使って、自分の言葉で考えを書いてみましょう。書き終えたら、観点チェックと模範解答で見直します。',
    prompts: [
      {
        scenario: '新人のあなたは、「会員 id 5 の田中さんのメールアドレスを変更する」作業を頼まれました。先輩が、次の SQL を書いて、「本番に流して」と言って席を立ちました。',
        code: "UPDATE users SET email = 'tanaka-new@example.com';",
        question: 'この SQL に、どんな問題があるかを説明し、実行前にどんな確認をするべきかを書いてください。',
        checkpoints: [
          'WHERE がないため、全会員のメールアドレスが書き換わることを指摘している',
          'WHERE id = 5 を付ける、という修正案を示している',
          '同じ WHERE で SELECT して、対象が1行であることを確かめる、という手順に触れている',
          '本番の変更前に、バックアップやトランザクションを用意する、などの備えに触れている'
        ],
        modelAnswer: 'この SQL には WHERE がないため、全会員のメールアドレスが、同じ値に書き換わってしまいます。意図は「id 5 の田中さんだけ」なので、WHERE id = 5 を付ける必要があります。流す前に、まず同じ条件で SELECT * FROM users WHERE id = 5; を実行し、対象が田中さんの1行だけであることを確かめます。そのうえで、念のためバックアップを取り、トランザクションの中で UPDATE を実行して、更新された行数が1行であることを確認してから COMMIT します。もし1行でなければ、ROLLBACK で取り消せます。本番の書き換えは、実行後に取り消せないことがあるため、実行前の確認がいちばん大切です。',
        tip: 'UPDATE と DELETE を書いたら、実行する前に、WHERE が付いているかを必ず目で確認しましょう。'
      },
      {
        scenario: '会員テーブルの email 列が、空（NULL）の会員に、メールアドレスの登録をお願いするお知らせを送りたいです。後輩が、次の SQL を書きましたが、1件もヒットしません。',
        code: 'SELECT * FROM users WHERE email = NULL;',
        question: 'なぜヒットしないのかを説明し、正しい書き方を示してください。',
        checkpoints: [
          'NULL は「値がない」状態で、通常の値のように = で比べられないことを説明している',
          '= NULL の結果は、真にならず、どの行も一致しないことに触れている',
          'IS NULL を使った正しい書き方を示している',
          '空文字（\'\'）と NULL は別物で、両方を対象にしたいときは条件を足す必要があることに触れている'
        ],
        modelAnswer: 'NULL は、「値が不明」あるいは「値がない」状態を表すもので、普通の値と違い、= で比べられません。email = NULL の結果は、真ではなく「不明」になるため、どの行も一致せず、1件もヒットしません。正しくは、WHERE email IS NULL と書きます。逆に、NULL でないものは IS NOT NULL です。なお、空文字（\'\'）は、NULL とは別のものです。画面から空のまま登録された場合、NULL ではなく空文字で保存されている場合もあるため、両方を対象にするなら、WHERE email IS NULL OR email = \'\' のように、条件を足します。',
        tip: 'NULL の判定は、= ではなく IS NULL。これだけは、体に染み込ませておきましょう。'
      }
    ]
  },
  intermediate: {
    title: '集計の結果を、正しく読む',
    content: '集計や JOIN は、書き方を少し間違えるだけで、一見もっともらしい、誤った数字が出ます。原因を考えてみましょう。',
    prompts: [
      {
        scenario: '会員（users）と、注文（orders）のテーブルがあります。「会員ごとの注文件数」の一覧を作るため、次の SQL を書いたところ、一度も注文していない会員が一覧に出てきません。',
        code: 'SELECT u.name, COUNT(o.id) AS order_count\nFROM users u\nINNER JOIN orders o ON o.user_id = u.id\nGROUP BY u.id, u.name;',
        question: 'なぜ、注文のない会員が出ないのかを説明し、直し方を書いてください。',
        checkpoints: [
          'INNER JOIN は、両方に一致する行だけを返すため、注文のない会員が除かれることを説明している',
          'LEFT JOIN に変える、という修正案を示している',
          '注文のない会員は、o.id が NULL になり、COUNT(o.id) が 0 になることを説明している',
          'COUNT(*) だと、注文のない会員も 1 件と数えてしまう、といった注意点に触れている'
        ],
        modelAnswer: 'INNER JOIN は、users と orders の両方に一致する行だけを返します。そのため、一度も注文していない会員は、結合の結果に出ず、一覧からも消えます。全会員を残したいので、users を左に書いて LEFT JOIN に変えます。LEFT JOIN では、注文のない会員も行が残り、orders 側の列は NULL になります。COUNT(o.id) は、NULL を数えないので、注文のない会員の件数は 0 になり、期待どおりの一覧になります。ここで COUNT(*) を使うと、結合後の行が 1 行あるため、注文のない会員も 1 件と数えてしまうので、COUNT(o.id) のように、注文側の列を数えるのがポイントです。',
        tip: '「全部の〇〇を残したい」と思ったら、残したいほうを左に書いて LEFT JOIN、と考えましょう。'
      },
      {
        scenario: '月次レポートで、「今月の売上合計」を出したところ、経理の数字より、ずっと大きくなりました。調べると、注文（orders）と注文明細（order_items）を JOIN して、注文の金額（orders.total）を SUM していました。1つの注文には、明細が複数あります。',
        code: 'SELECT SUM(o.total)\nFROM orders o\nJOIN order_items i ON i.order_id = o.id;',
        question: '数字が大きくなった理由を説明し、正しい集計の方法を書いてください。',
        checkpoints: [
          '1つの注文に明細が複数あると、JOIN で注文の行が明細の数だけ複製されることを説明している',
          '複製された行の orders.total が、何度も足されて、二重に数えられることを指摘している',
          '注文だけで集計する、または明細の金額（単価 × 数量）を SUM する、などの対策を示している',
          'JOIN の前後で、行数がどう変わるかを確かめる習慣に触れている'
        ],
        modelAnswer: '1つの注文に明細が3行あれば、JOIN すると、その注文の行が3行に複製されます。orders.total は注文単位の金額なので、複製された分だけ、何度も足され、売上が二重、三重に数えられて、大きくなります。正しい集計は、2通りあります。1つは、注文単位の金額なので、JOIN せず、orders だけで SUM(total) を求める方法です。もう1つは、明細の金額（単価 × 数量）を、order_items 側で SUM する方法です。集計の前に、JOIN した後の行数が、元のテーブルより増えていないかを確かめておくと、このような二重カウントに早く気づけます。',
        tip: '「1対多」の JOIN をしたら、1側の金額の列を SUM してはいけない、と覚えておきましょう。'
      }
    ]
  },
  advanced: {
    title: '運用での判断',
    content: '本番のデータベースでは、「動くか」だけでなく、「速いか」「安全か」「取り返しがつくか」を考える必要があります。判断の理由まで書いてみましょう。',
    prompts: [
      {
        scenario: '会員テーブル（500 万行）の、メールアドレスでのログイン検索が遅くなり、ユーザーから苦情が出ています。先輩は、「とりあえず、全部の列にインデックスを付けよう」と言っています。',
        question: 'この案の問題点を指摘し、どんな順で原因を調べて、対策を決めるべきかを書いてください。',
        checkpoints: [
          '全部の列にインデックスを付けると、書き込みが遅くなり、容量も使うことを指摘している',
          'EXPLAIN で実行計画を見て、全行を読んでいないかを確認する手順を示している',
          'WHERE で使っている email 列に、必要なインデックスを付ける案を示している',
          '列に関数を適用していないか、といった、インデックスが効かない書き方の確認に触れている'
        ],
        modelAnswer: '全部の列にインデックスを付けると、会員の登録や更新のたびに、すべての索引を更新することになり、書き込みが遅くなります。容量も大きく増えるので、感心しません。まず EXPLAIN で、ログインの検索 SQL の実行計画を見て、500 万行を全部読んでいる（全件スキャン）かを確認します。WHERE email = ... で検索しているのなら、email 列に、インデックスを1つ付ければ、大きく改善する可能性が高いです。ただし、WHERE LOWER(email) = ... のように、列に関数を適用していると、インデックスが効かないので、書き方も確認します。付けたあとに、もう一度 EXPLAIN で効いていることを確かめ、実際の検索時間も測って、効果を確認します。',
        tip: '「遅い」ときは、推測で対策せず、まず計測。インデックスは、必要な列に必要な分だけ付けます。'
      },
      {
        scenario: 'あなたのチームでは、商品の購入処理で、「在庫を1減らす」「注文を登録する」「ポイントを付ける」の3つの SQL を、順番に別々に実行しています。ある日、サーバーが途中で止まり、「在庫は減ったのに、注文が登録されていない」という不具合が、複数件見つかりました。',
        question: '原因と、同じ問題を防ぐための対策を書いてください。また、対策を入れたときに、利用者の入力を扱うコードで気をつけることも書いてください。',
        checkpoints: [
          '3つの更新が別々に確定され、途中で止まると、中途半端な状態が残ることを説明している',
          '3つの更新を1つのトランザクションにまとめ、失敗時は ROLLBACK で取り消す対策を示している',
          'トランザクションを使えば、すべて成功か、すべて取り消しのどちらかになることを説明している',
          '入力値は、文字列連結ではなく、プレースホルダ（プリペアドステートメント）で渡す、という SQL インジェクション対策に触れている'
        ],
        modelAnswer: '原因は、3つの更新を、それぞれ別々に実行して、確定しているためです。途中でサーバーが止まると、「在庫は減ったが、注文は登録されていない」という中途半端な状態が、そのまま残ります。対策は、3つの更新を1つのトランザクションにまとめることです。BEGIN で始めて、3つの更新を実行し、すべて成功したら COMMIT、途中で失敗したら ROLLBACK で、すべてを取り消します。これで、「すべて成功」か「すべて取り消し」のどちらかになり、矛盾した状態が残りません。また、商品の id や数量など、利用者の入力から来る値を SQL に組み込むときは、文字列として連結せず、プレースホルダで別に渡します。連結すると、SQL インジェクションで、意図しない SQL を実行される危険があるためです。',
        tip: '「途中で止まったら、どうなるか」を考えるクセをつけると、トランザクションの必要な場面に気づけます。'
      }
    ]
  }
};
