import React from "react";
import Products from "./shop_components/Products";
import './shop_components/Shop.css'

function Shop({addToCart, products}){

    return(
        <div className="product-container">
           {products.map(p =>(
            <div key={p.id}>
                <Products description={p.description} price={p.price}  name={p.name} id={p.id} addToCart={addToCart}/>
            </div>
           )
           )}
        </div>
    )
}

export default Shop