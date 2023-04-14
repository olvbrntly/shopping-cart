import React from "react";
import Story from './about_components/Story'
import Mailing from './about_components/Mailing'


function About(){
    return(
        <div className="about-div">
            <Story />
            <Mailing />
        </div>
    )
}

export default About