import React from "react";
import Card from "./Card"
import projects from "./projectObj"

function Project(props) {

    let i = props.index;
    
    return (
        <div className="hero-text">


            <Card header={projects.projects[i].title} 
            image={projects.projects[i].imgUrl} 
            detail={<p>{projects.projects[i].description}</p>}
            gh={<a href={projects.projects[i].github}>Repository</a>}
            li={<a href={projects.projects[i].deployed}>Deployed</a>}
            left="./img/left.png"
            right="./img/right.png"
            leftClick={props.leftClick}
            rightClick={props.rightClick}
             /> 
                </div>
    );
}

export default Project;


