import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/Acceuil'
import './acceuil.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
