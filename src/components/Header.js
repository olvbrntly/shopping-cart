import React from "react";
import './Header.css'
import {Link} from 'react-router-dom'

function Header(){

    const navStyle = {
        textDecoration: 'none',
    }
    return(
        <div className="header">
            <Link to={'/'} style={navStyle}>
                <h1 className="company-name">Pongo & Perdita</h1>
            </Link>
            <ul className="header-links">
                <Link to="/" style={navStyle}>
                    <li className="header-links h">Home</li>
                </Link>
                <Link to={'/shop'} style={navStyle}>
                    <li className="header-links h">Shop</li>
                </Link>
                <Link to={'/about'} style={navStyle}>
                    <li className="header-links h">About</li>
                </Link>
                <Link to={'./cart'} style={navStyle}>
                    <li className="header-links h">Cart</li>
                </Link>
            </ul>
        </div>
    )
}

export default Header