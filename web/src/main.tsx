import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import init, { greet } from 'lib'

init().then(_ => {
  greet()
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
