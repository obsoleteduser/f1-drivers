import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { GloablProvider } from './GlobalContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    <GloablProvider>
      <App />
    </GloablProvider>
  </BrowserRouter>


)
