import React from "react";
import './Home.css'
import {Link} from 'react-router-dom'

function LandingHome(){
    return(
        <div className="photo-div">
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Pet Shop</h1>
                    <p>Doggo ipsum blop very good spot lotsa wags</p>
                    <Link to={'./shop'}>
                        <button>Shop Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default LandingHome