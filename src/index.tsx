import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'
import { state } from './redux/state.ts'
import 'normalize.css'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
)
