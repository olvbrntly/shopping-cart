import React from "react";
import Products from "./shop_components/Products";

function Shop(){

    let products = [
        
        {
            id:1,
            name:'banana-pjs',
            description:'banana print puppy pajamas',
            price:'$20',
        },
        {
            id:2,
            name:'chicken-toy',
            description:'chicken plush chew toy',
            price:'$7',
        },
        {
            id:3,
            name:'collar-bow',
            description:'cute bow collar accessory',
            price:'$4',
        }
    ]



    return(
        <div className="product-container">
           {products.map(p =>(
            <div key={p.id}>
                <Products description={p.description} price={p.price}  name={p.name}/>
            </div>
           )
           )}
        </div>
    )
}

export default Shop