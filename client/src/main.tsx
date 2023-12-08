import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { InputProvider } from './components/InputContext.tsx'
import { DataProvider } from './components/DataContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InputProvider>
    <DataProvider>
    <App />
    </DataProvider>
    </InputProvider>
  </React.StrictMode>,
)
