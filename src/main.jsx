import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import Store from './redux/Store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='mx-10'>
      <Provider store={Store}>
        <App />
      </Provider>
    </div>
  </StrictMode>,
)
