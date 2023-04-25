import React from "react";
import './Shop.css'


function Products({description, price, name, id,  addToCart}){
    return(
        <div className="shop-products">
           
             <img className="product-img" src={require(`./products_images/${name}.jpg`)} alt={name}/>
         
            <div className="product-info">
                <p> {description}</p>
                <p>{price}</p>
            </div>
            <button className="add-to-cart"  id={id} onClick={addToCart}>Add to Cart</button>

        </div>
    )
}

export default Products