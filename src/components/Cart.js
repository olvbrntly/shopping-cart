import React from "react";
import './Cart.css'


function Cart({clickOutsideOfCart}){
    return(
    <div>
        <div className="other-part" onClick={clickOutsideOfCart}></div>
        <div className="cart-slide-out">
            <h1>Cart</h1>
            {/* the div below will map ou the array of items that have been added to the cart (cartItem) */}
            <div>will contain items</div>
            <div>will display total price</div>
            <button>Checkout!</button>
        </div>
    </div>

    )
}

export default Cart