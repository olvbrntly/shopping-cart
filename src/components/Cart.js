import React from "react";
import './Cart.css'


function Cart({clickOutsideOfCart, cartItems}){
    
    return(
    <div className="cart">
        <div className="other-part" onClick={clickOutsideOfCart}></div>
        <div className="cart-slide-out">
            <h1>Your Cart</h1>
            {/* the div below will map ou the array of items that have been added to the cart (cartItem) */}
            <div className="cart-items-div">
                {cartItems.map(c =>(
                  <div className="cart-item" key={c.id}>
                    <div className="cart-item-img">image</div>  
                    
                    {/* <img className="cart-item-img" src={require(`./shop_components/products_images/${c.name}.jpg`)} alt={c.name}/> */}

                    <div className="cart-item-info">
                        <div>{c.description}</div>
                        <div className="cart-nums">
                            <div className="cart-quantity">
                                <button>-</button>
                                <div>{c.quantity}</div>
                                <button>+</button>
                            </div>
                            <div>${c.price * c.quantity}</div>
                        </div>
                    </div>

                    </div>  
                ))}
            </div>
            <div>will display total price</div>
            <button>Checkout!</button>
        </div>
    </div>

    )
}

export default Cart