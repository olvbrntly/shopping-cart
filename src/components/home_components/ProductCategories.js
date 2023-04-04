import React from "react"


function ProductCategory({name}){
    return(
        <div>
            <img src={require(`./images/${name}.jpg`)} alt={`${name} category`}/>   
            <div className="cat-name"> {name} </div>
        </div>
    )
}



export default ProductCategory
