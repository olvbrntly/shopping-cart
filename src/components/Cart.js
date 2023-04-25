import React from "react";
import './Cart.css'


function Cart({clickOutsideOfCart, cartItems}){
    
    return(
    <div className="cart">
        <div className="other-part" onClick={clickOutsideOfCart}></div>
        <div className="cart-slide-out">
            <h1>Cart</h1>
            {/* the div below will map ou the array of items that have been added to the cart (cartItem) */}
            <div className="cart-items-div">
                <div className="cart-item">
                    
                    <div className="cart-item-img">image</div>  

                    <div className="cart-item-info">
                        <div>{cartItems[0].description}</div>
                        <div className="cart-nums">
                            <div className="cart-quantity">
                                <button>-</button>
                                <div>{cartItems[0].quantity}</div>
                                <button>+</button>
                            </div>
                            <div>${cartItems[0].price * cartItems[0].quantity}</div>
                        </div>
                    </div>

                </div>
            </div>
            <div>will display total price</div>
            <button>Checkout!</button>
        </div>
    </div>

    )
}

export default Cart