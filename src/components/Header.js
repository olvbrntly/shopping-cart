import React from "react";
import './Header.css'

function Header(){
    return(
        <div>
            <h1>Pongo & Perdita</h1>
            <ul className="header-links">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

export default Header