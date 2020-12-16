import React from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";


function About() {
    return (
    <div>

        <Container>
            <Row>
                <Col size="md-4">

                    <img src="./img/profilepic.JPG" alt="author"></img>
                </Col>
                <Col size="md-8">
                    <p>
                        Thank you for stopping by!

                        I'm a junior software engineer experienced in agile methodologies and proficient with JavaScript,  
                        Node, React, MySql, ORMs, TypeScript, CSS frameworks, and other related technologies.

                        I'm a strong communicator, creative problem-solver, and critical thinker.  
                        I have effective leadership skills and I'm always a dedicated team player in group settings.
                        
                        I have ten years management experience in the restaurant business with a 
                        demonstrated ability to work efficiently and effectively while multitasking.

                        Please feel free to reach out any time!

                    </p>
                </Col>
            </Row>
      
        </Container>
                   
            <iframe title="resume" src="https://docs.google.com/document/d/e/2PACX-1vQ0pnRqBQaCZtFW_bBqRDTAB1aQ8BYDMQfP5pxS-UiRX2q036Yspefq547XYa6gbzPur8Y9B4B-LxGM/pub?embedded=true" width="30%" height="40%" allowfullscreen="true"
mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </div>)
}

export default About;