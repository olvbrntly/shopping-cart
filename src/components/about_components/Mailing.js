import React from "react";

function Mailing(){


    return(
        <div className="about-mailing">
            <h1>Join Our Mailing List</h1>
            <p>Stay up to date with product offerings and sales!</p>
            <div>
                <div className="form-element">
                    <label htmlFor="fname">First Name:</label>
                    <input name="fname"/>
                </div>

                <div className="form-element">
                    <label htmlFor="lname">Last Name:</label>
                    <input name="lname"/>
                </div>

                <div className="form-element">
                    <label className="email" htmlFor="email">Email:</label>
                    <input name="email"/>
                </div>


                <button className="mailing-submit">Submit!</button>
            </div>
        </div>
    )
}


export default Mailing