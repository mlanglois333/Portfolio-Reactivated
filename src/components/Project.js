import React from "react";
import Card from "./Card"
import projects from "./projectObj"

function Project() {
    console.log(projects.projects);
    return (<div>
        {projects.projects.map(result => (
            <Card header={result.title} detail={
                <div>
            <p>{result.description}</p>
            <br></br>
                <p>{result.github}</p>
                <br></br>
                <p>{result.deployed}</p>
                <br></br>
                <img src={result.imgSrc} alt="screenshot of ap"></img>
                </div>
            }>
                </Card>
            
                ))}
    </div>
    );
}

export default Project;


