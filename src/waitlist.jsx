import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './waitlist.css'
import WaitlistPage from './WaitlistPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WaitlistPage />
  </StrictMode>
)
