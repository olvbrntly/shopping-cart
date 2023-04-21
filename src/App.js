import React from 'react';
import { useState } from 'react';
import 'react-router-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Cart from './components/Cart';



function App() {
  let initialCartItems = [];
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState(initialCartItems)
  
  function onCartClick(){
    alert('cart was clicked!');
    setCartOpen(!cartOpen);
  }

  function clickOutsideOfCart(){
    alert('you clicked outside of the cart!')
    setCartOpen(false)
  }

  function addToCart(){
    alert('add to cart!')
  }
  return (

    <Router>
      <div className="App">
        <Header onClick={onCartClick}/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/about" Component={About}/>
          <Route path="/shop" element={<Shop addToCart={addToCart} />}/>
        </Routes>
        {cartOpen && <Cart clickOutsideOfCart={clickOutsideOfCart}/>}
      </div>
    </Router>
    

  );
}

export default App;
