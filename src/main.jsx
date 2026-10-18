import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LegalPage from './components/LegalPage.jsx'
import { legalPageFor } from './data/legalTexts.js'

// 特定商取引法の表記・利用規約・プライバシーポリシーは、URL(/tokushoho、/terms、/privacy)で開く
const legalPage = legalPageFor(window.location.pathname)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {legalPage ? <LegalPage page={legalPage} /> : <App />}
  </StrictMode>,
)

// 本番環境だけ、Service Worker を登録する(オフラインで学習の画面を開けるようにする)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // 登録できなくても、アプリは普通に使える
    });
  });
}
