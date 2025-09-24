import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./i18n"

import 'normalize.css'
import './assets/styles/main.css'
import './assets/styles/tailwind.css'
import './utils/importVSCodeElements.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
