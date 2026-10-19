import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LpPage from './components/lp/LpPage.jsx'

// LP(/lp/)の入口。学習アプリのコース一覧のデータは、読み込まない(軽く表示するため)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LpPage />
  </StrictMode>,
)
