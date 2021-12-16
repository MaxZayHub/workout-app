import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'

export const Context = createContext(null)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
