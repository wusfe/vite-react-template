import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.less'

import { store } from './store'

import { Provider } from 'react-redux'

import 'virtual:uno.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>

  
  </React.StrictMode>
)
