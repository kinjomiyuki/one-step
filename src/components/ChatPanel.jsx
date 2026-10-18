import React, { useState, useEffect, useRef } from 'react';
import MessageText from './MessageText';
import '../styles/ChatPanel.css';

// AI に接続できないときの簡易回答
const FALLBACK_RESPONSES = [
  ['var|let|const', 'var は古い仕様で関数スコープ、let と const はブロックスコープです。モダン JavaScript では let/const を使います。const は再代入不可の定数です。'],
  ['スコープ', 'スコープとは、変数にアクセスできる範囲のこと。ブロックスコープ、関数スコープ、グローバルスコープがあります。'],
  ['クロージャー', 'クロージャーは、関数が定義された時点での外側の変数を記憶し、後で参照できる現象。プライベート変数実装に活躍します。'],
  ['dom|要素|操作', 'DOM 操作とは、JavaScript からウェブページの HTML 要素を動的に変更すること。querySelector などで要素を選択し、textContent で内容を変更できます。'],
  ['イベント|クリック', 'イベントリスナーを addEventListener で登録すると、ユーザーのアクション（クリック、入力など）に応じて処理を実行できます。'],
  ['非同期|async|await', 'fetch() や setTimeout() は非同期処理。結果を待たずに次の処理を続けます。async/await で同期的に書けます。'],
  ['react', 'React はコンポーネントベースの UI ライブラリ。State で状態管理、Props で親から子へデータを渡します。'],
  ['hook', 'Hooks は React の機能拡張。useState で state 管理、useEffect で副作用処理。カスタム Hook で ロジック再利用。'],
  ['python', 'Python は print() で出力、# でコメント、変数名は snake_case が基本です。']
];
const FALLBACK_DEFAULT = '今は AI に接続できず、この質問には答えられませんでした。しばらくしてからもう一度お試しください。';

function fallbackAnswer(question, reason) {
  const hit = FALLBACK_RESPONSES.find(([pattern]) => new RegExp(pattern, 'i').test(question));
  return hit ? hit[1] : `${FALLBACK_DEFAULT}（原因: ${reason}）`;
}

// 会話履歴を送って AI の回答を取得する。失敗したら簡易回答を返す
async function fetchAnswer(history, context) {
  try {
    const res = await fetch('/.netlify/functions/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: history.map(m => ({ role: m.sender, content: m.text })),
        context
      })
    });
    const data = await res.json().catch(() => null);
    if (!data) throw new Error(`Function が JSON を返しませんでした (${res.status})`);
    if (!res.ok || !data.reply) throw new Error(data.error || `エラー (${res.status})`);
    return data.reply;
  } catch (e) {
    return fallbackAnswer(history[history.length - 1].text, e.message);
  }
}

export default function ChatPanel({ context }) {
  const [messages, setMessages] = useState(() => {
    // LocalStorage から質問履歴を読み込む
    try {
      const saved = localStorage.getItem('chatHistory');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // メッセージ末端にスクロール
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // LocalStorage に保存
  useEffect(() => {
    try {
      localStorage.setItem('chatHistory', JSON.stringify(messages));
    } catch {
      // 保存できない環境でもチャット自体は動かす
    }
  }, [messages]);

  // 質問を送信
  const handleSendMessage = async (e) => {
    e.preventDefault();
    const question = inputValue.trim();
    if (!question || isLoading) return;

    const now = () => new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' });
    const userMessage = { id: Date.now(), text: question, sender: 'user', timestamp: now() };
    const history = [...messages, userMessage];
    setMessages(history);
    setInputValue('');
    setIsLoading(true);

    const text = await fetchAnswer(history, context);
    setMessages(prev => [...prev, { id: Date.now() + 1, text, sender: 'assistant', timestamp: now() }]);
    setIsLoading(false);
  };

  // 質問履歴をクリア
  const handleClearHistory = () => {
    if (window.confirm('質問履歴をすべて削除しますか？')) {
      setMessages([]);
      localStorage.removeItem('chatHistory');
    }
  };

  return (
    <div className="chat-panel">
      {/* ヘッダー */}
      <div className="chat-header">
        <h3>学習アシスタント</h3>
      </div>

      {/* メッセージ表示エリア */}
      <div className="chat-messages">
        {messages.length === 0 ? (
          <div className="chat-empty">
            <p>学習について質問してください。</p>
            <p className="chat-hint">例：「var と let の違いは？」</p>
          </div>
        ) : (
          messages.map(msg => (
            <div key={msg.id} className={`chat-message ${msg.sender}`}>
              <div className="message-avatar">
                {msg.sender === 'user' ? 'あなた' : 'AI'}
              </div>
              <div className="message-content">
                <div className="message-bubble">
                  <MessageText text={msg.text} />
                </div>
                <span className="message-time">{msg.timestamp}</span>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="chat-message assistant loading">
            <div className="message-avatar">AI</div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* 入力フォーム */}
      <form className="chat-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="chat-input"
          placeholder="質問を入力..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
        />
        <button
          type="submit"
          className="chat-send"
          disabled={!inputValue.trim() || isLoading}
          title="送信"
        >
          送信
        </button>
      </form>

      {/* 履歴クリアボタン */}
      {messages.length > 0 && (
        <button className="chat-clear" onClick={handleClearHistory}>
          履歴をクリア
        </button>
      )}
    </div>
  );
}
