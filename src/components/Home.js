import React from "react";
import Container from "./Container";
import Col from "./Col";
import Row from "./Row";

function Home() {

    return (<div>
        <Container>
            <Row>
                <Col size="md-7">
                    <h1 className="homeText">
                        Full-Stack Developer With An Eye For Detail And Drive For Knowledge. 
                    </h1>
                </Col>
                <Col size="md-5">
                    <img src="./img/profilepic.JPG" alt="profilePicture" />
                </Col>
            </Row>
        </Container>

    </div>)
}

export default Home;