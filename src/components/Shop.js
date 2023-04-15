import React from "react";
import Products from "./shop_components/Products";

function Shop(){

    let products = [
        
        {
            id:1,
            name:'banana-pjs',
            price:'$20',
        },
        {
            id:2,
            name:'chicken-toy',
            price:'$7',
        },
        {
            id:3,
            name:'collar-bow',
            price:'$4',
        }
    ]



    return(
        <div>
           <Products />
           <Products />
           <Products />
        </div>
    )
}

export default Shop