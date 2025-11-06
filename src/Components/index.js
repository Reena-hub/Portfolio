import React from "react";
import Home from "./Home";
import Service from "./Service";
import Experience from "./Experience";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";

const index = () => {
    return (
        <React.Fragment>
            <Home />
            <Service />
            <Experience />
            <Skill />
            <Project />
            <Contact />
        </React.Fragment>
    )
}

export default index;