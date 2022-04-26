import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  Products,
} from './pages';
function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<SingleProduct />} />
          <Route
            path='checkout'
            element={<Checkout />} />
          <Route path='error' element={<Error />} />
        </Routes>
      </Router>
  );
}

export default App;
