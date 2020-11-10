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
                <a href={result.github}>Repository</a>
                <br></br>
                <a href={result.deployed}>Deployed</a>
                <br></br>
                <img src={result.imgUrl} alt="screenshot of ap"></img>
                </div>
            }>
                </Card>
            
                ))}
    </div>
    );
}

export default Project;


