import React from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";


function About() {
    return (
        <Container>

            
                <Row>
            <Col size="sm-6" children={
                    <img className="profilePic" src="./img/profilepic.JPG" alt="author"></img>
                } /> 

                <Col size="sm-6" children={
                  <p>
                        <span className="emph">Thank you for stopping by!</span>
                        <br />
                        <br />


                        I'm a junior software engineer experienced in agile methodologies and proficient with JavaScript,  
                        Node, React, MySql, ORMs, TypeScript, CSS frameworks, and other related technologies.
                        <br />
                        <br />


                        I'm a strong communicator, creative problem-solver, and critical thinker.  
                        I have effective leadership skills and I'm always a dedicated team player in group settings.
                        <br />
                        
                        I have ten years management experience in the restaurant business with a 
                        demonstrated ability to work efficiently and effectively while multitasking.
                        <br />
                        <br />


                        Please feel free to reach out any time!

                    </p>  
                } />

                </ Row>
                </Container>
                )
}

export default About;