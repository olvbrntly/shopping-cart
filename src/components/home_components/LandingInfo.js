import React from "react";
import ProductCategory from './ProductCategories'
import './Home.css'

function LandingInfo(){
    return(
        <div className="landing-info">
           <h2>OUR PRODUCTS</h2> 
           <div className="landing-categories">
                <ProductCategory name={'Toys'}/>
                <ProductCategory name={'Apparel'}/>
                <ProductCategory name={'Supplies'}/>
           </div>
        </div>
    )
}
export default LandingInfo