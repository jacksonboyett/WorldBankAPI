import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { InputProvider } from './context/InputContext.tsx'
import { DataProvider } from './context/DataContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InputProvider>
    <DataProvider>
    <App />
    </DataProvider>
    </InputProvider>
  </React.StrictMode>,
)
