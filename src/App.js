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
  let products = [
        
    {
        id:1,
        name:'banana-pjs',
        description:'Banana Print Pajamas',
        price:'$20',
        quantity:0,
    },
    {
        id:2,
        name:'collar-bow',
        description:'Bow Collar Accessory',
        price:'$4',
        quantity:0,

    },
    {
        id:3,
        name:'winter-coat',
        description:'Winter Coat',
        price:'$20',
        quantity:0,

    },
    {
        id:4,
        name:'chicken-toy',
        description:'Chicken Plush Chew Toy',
        price:'$7',
        quantity:0,

    },
    {
        id:5,
        name:'elephant-toy',
        description:'Elephant Plush Chew Toy',
        price:'$7',
        quantity:0,

    },
    {
        id:6,
        name:'food-toy-bundle',
        description:'Food Toy Bundle',
        price:'$12',
        quantity:0,

    },
    {
        id:7,
        name:'dog-food',
        description:'Premium Organic Food',
        price:'$25',
        quantity:0,

    },
    {
        id:8,
        name:'treats',
        description:'Treats Bundle',
        price:'$15',
        quantity:0,

    },
    {
        id:9,
        name:'leash',
        description:'10ft Extender Leash',
        price:'$8',
        quantity:0,

    },
]

let initialCartItems = 
[
  {
    id:1,
    name:'banana-pjs',
    description:'Banana Print Pajamas',
    price:20,
    quantity: 2,
  },
];


  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState(initialCartItems)
  
  function onCartClick(){
    setCartOpen(!cartOpen);
    document.body.classList.add("stop-scrolling");
  }

  function clickOutsideOfCart(){
    setCartOpen(false)
    document.body.classList.remove("stop-scrolling");
  }

  function addToCart(e){
    let id = parseFloat(e.target.id)
    let result = products.find(product => product.id === id)
    console.log(result)
    
    setCartItems([...cartItems, result])
    
    console.log(cartItems, result)
  }



  return (

    <Router>
      <div className="App">
        <Header onClick={onCartClick}/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/about" Component={About}/>
          <Route path="/shop" element={<Shop addToCart={addToCart} products={products} />}/>
        </Routes>
        {cartOpen && <Cart clickOutsideOfCart={clickOutsideOfCart} cartItems={cartItems}/>}
      </div>
      <div>lenth of cart items:{cartItems.length}</div>
      <div>type:{typeof(initialCartItems)}</div>

      <div>type:{typeof(cartItems)}</div>

    </Router>
    

  );
}

export default App;
