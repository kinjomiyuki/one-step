import { useState } from 'react';

// 購入済みの人が、別の端末などで、プレミアムプランを使えるように戻すためのフォーム
export default function RestoreForm({ busy, onRestore }) {
  const [email, setEmail] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (await onRestore(email.trim())) setEmail('');
  };

  return (
    <form onSubmit={submit} className="neu-inset p-4 rounded-2xl">
      <p className="text-sm mb-3" style={{ color: 'var(--neu-text-muted)' }}>
        購入時のメールアドレスに、確認用のリンクをお送りします。
      </p>
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="購入時のメールアドレス"
          className="neu-input flex-1 px-4 py-3 text-sm md:text-base rounded-xl"
        />
        <button
          type="submit"
          disabled={busy || !email.trim()}
          className="neu-btn px-6 py-3 text-sm md:text-base font-semibold disabled:opacity-50"
        >
          確認用のメールを送る
        </button>
      </div>
    </form>
  );
}
