import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
// dev-wmoikmxc.us.auth0.com
// my1dP9szx61JUbSLcWqQ4ce7VEsT9mjy
ReactDOM.render(
  <Auth0Provider
    domain='dev-wmoikmxc.us.auth0.com'
    clientId='my1dP9szx61JUbSLcWqQ4ce7VEsT9mjy'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
)
