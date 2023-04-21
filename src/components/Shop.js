import React from "react";
import Products from "./shop_components/Products";
import './shop_components/Shop.css'

function Shop({addToCart}){

    let products = [
        
        {
            id:1,
            name:'banana-pjs',
            description:'Banana Print Pajamas',
            price:'$20',
        },
        {
            id:2,
            name:'collar-bow',
            description:'Bow Collar Accessory',
            price:'$4',
        },
        {
            id:3,
            name:'winter-coat',
            description:'Winter Coat',
            price:'$20',
        },
        {
            id:4,
            name:'chicken-toy',
            description:'Chicken Plush Chew Toy',
            price:'$7',
        },
        {
            id:5,
            name:'elephant-toy',
            description:'Elephant Plush Chew Toy',
            price:'$7',
        },
        {
            id:6,
            name:'food-toy-bundle',
            description:'Food Toy Bundle',
            price:'$12',
        },
        {
            id:7,
            name:'dog-food',
            description:'Premium Organic Food',
            price:'$25',
        },
        {
            id:8,
            name:'treats',
            description:'Treats Bundle',
            price:'$15',
        },
        {
            id:9,
            name:'leash',
            description:'10ft Extender Leash',
            price:'$8',
        },
    ]


    return(
        <div className="product-container">
           {products.map(p =>(
            <div key={p.id}>
                <Products description={p.description} price={p.price}  name={p.name} addToCart={addToCart}/>
            </div>
           )
           )}
        </div>
    )
}

export default Shop