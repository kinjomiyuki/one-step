import React, { useState, useEffect, useRef } from 'react';
import '../styles/ChatPanel.css';

export default function ChatPanel() {
  const [messages, setMessages] = useState(() => {
    // LocalStorage から質問履歴を読み込む
    const saved = localStorage.getItem('chatHistory');
    return saved ? JSON.parse(saved) : [];
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
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  // 質問を送信
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // ユーザーメッセージを追加
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Claude API に質問を送信（シミュレーション）
    setTimeout(() => {
      const assistantMessage = {
        id: Date.now() + 1,
        text: generateResponse(inputValue),
        sender: 'assistant',
        timestamp: new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 800);
  };

  // 質問に対する回答を生成（簡易版）
  const generateResponse = (question) => {
    const lowerQ = question.toLowerCase();

    // 簡単な回答データベース
    const responses = {
      'var|let|const': 'var は古い仕様で関数スコープ、let と const はブロックスコープです。モダン JavaScript では let/const を使います。const は再代入不可の定数です。',
      'スコープ': 'スコープとは、変数にアクセスできる範囲のこと。ブロックスコープ、関数スコープ、グローバルスコープがあります。',
      'クロージャー': 'クロージャーは、関数が定義された時点での外側の変数を記憶し、後で参照できる現象。プライベート変数実装に活躍します。',
      'dom|要素|操作': 'DOM 操作とは、JavaScript からウェブページの HTML 要素を動的に変更すること。querySelector などで要素を選択し、textContent で内容を変更できます。',
      'イベント|クリック': 'イベントリスナーを addEventListener で登録すると、ユーザーのアクション（クリック、入力など）に応じて処理を実行できます。',
      '非同期|async|await': 'fetch() や setTimeout() は非同期処理。結果を待たずに次の処理を続けます。async/await で同期的に書けます。',
      'react': 'React はコンポーネントベースの UI ライブラリ。State で状態管理、Props で親から子へデータを渡します。',
      'hook': 'Hooks は React の機能拡張。useState で state 管理、useEffect で副作用処理。カスタム Hook で ロジック再利用。',
      'python': 'Python は初心者向けで実践的。var ではなく、キャメルケースで変数命名。print() で出力、# でコメント。',
      'default': 'それは素晴らしい質問ですね！詳しくは対応するレッスン内容を確認してください。'
    };

    for (const [pattern, response] of Object.entries(responses)) {
      const regex = new RegExp(pattern, 'i');
      if (regex.test(question)) {
        return response;
      }
    }

    return responses['default'];
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
                <p>{msg.text}</p>
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
