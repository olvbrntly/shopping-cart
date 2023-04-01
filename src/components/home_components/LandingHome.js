import React from "react";
import './Home.css'

function LandingHome(){
    return(
        <div className="photo-div">
            <div className="m-Left" >
                <h3>It's Up To The Dogs</h3>
                <buttons>Shop Now!</buttons>
            </div>
            <div className="m-Right">
                <img src={require('./images/dalmation-pup.jpg')} alt="dalmation pup" />
            </div>
        </div>
    )
}
export default LandingHome