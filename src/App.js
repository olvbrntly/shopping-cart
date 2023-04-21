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

  const [cartOpen, setCartOpen] = useState(false)
  function onCartClick(){
    alert('cart was clicked!');
    setCartOpen(!cartOpen);
  }
  return (
    <div>
    <Router>
      <div className="App">
        <Header onClick={onCartClick}/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/about" Component={About}/>
          <Route path="/shop" Component={Shop}/>
        </Routes>
      </div>
    </Router>
    {cartOpen && <Cart/>}
    </div>
  );
}

export default App;
