import React from "react";
import Story from './about_components/Story'
import Mailing from './about_components/Mailing'
import Contact from "./about_components/Contact";


function About(){
    return(
        <div className="about-div">
            <Story />
            <Mailing />
            <Contact />
        </div>
    )
}

export default About