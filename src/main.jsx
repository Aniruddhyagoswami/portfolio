import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material'
import { Theme } from './Theme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={Theme}>
    <App />
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
