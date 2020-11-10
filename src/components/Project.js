import React from "react";
import Card from "./Card"
import projects from "./projectObj"

function Project() {
    console.log(projects.projects);
    return (<div>
        {projects.projects.map(result => (
            <Card header={result.title} 
            image={result.imgUrl} 
            detail={<p>{result.description}</p>}
            gh={<a href={result.github}>Repository</a>}
            li={<a href={result.deployed}>Deployed</a>}
             />
                 ))}
    </div>
    );
}

export default Project;


