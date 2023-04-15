import React from "react";
import Products from "./shop_components/Products";
import './shop_components/Shop.css'

function Shop(){

    let products = [
        
        {
            id:1,
            name:'banana-pjs',
            description:'Banana Print Pajamas',
            price:'$20',
        },
        {
            id:2,
            name:'chicken-toy',
            description:'Chicken Plush Chew Toy',
            price:'$7',
        },
        {
            id:3,
            name:'collar-bow',
            description:'Bow Collar Accessory',
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