import React from "react";

function Mailing(){
    return(
        <div className="about-mailing">
            <h1>Join Our Mailing List</h1>
            <p>Stay up to date with product offerings and sales!</p>
            <form>
                <div className="form-element">
                    <label for="fname">First Name:</label>
                    <input name="fname"/>
                </div>

                <div className="form-element">
                    <label for="lname">Last Name:</label>
                    <input name="lname"/>
                </div>

                <div className="form-element">
                    <label className="email" for="email">Email:</label>
                    <input name="email"/>
                </div>


                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}


export default Mailing