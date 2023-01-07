import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Auth0Provider } from '@auth0/auth0-react'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Auth0Provider
    domain="dev-u5e1mvooxausfnbz.us.auth0.com"
    clientId="z7QPRpv4rmN00KK9dIP5YieavmNcFDKT"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App />
      
    </React.StrictMode>
  </Auth0Provider>,
)

reportWebVitals()
