import React, { useState } from 'react';
import ChatPanel from './ChatPanel';
import '../styles/ChatButton.css';

export default function ChatButton({ context, access, lifted = false }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* チャットボタン（FAB） */}
      <button
        className={`chat-fab neu-fab ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        style={lifted ? { bottom: '88px' } : undefined}
        title="学習について質問する"
        aria-label="チャットボタン"
      >
        質問
      </button>

      {/* チャットパネル（モーダル） */}
      {isOpen && (
        <div className="chat-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="chat-modal" onClick={(e) => e.stopPropagation()}>
            <ChatPanel context={context} access={access} />
            <button
              className="chat-modal-close"
              onClick={() => setIsOpen(false)}
              aria-label="チャットパネルを閉じる"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </>
  );
}
