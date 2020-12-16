import React from "react";
import Container from "./Container";
import Col from "./Col";
import Row from "./Row";

function Home() {

    return (<div>
        <Container>
            <Row>
            <Col size="md-5" />
                <Col size="md-7">
                    <h1 className="homeText">
                        Creative Problem-Solver
                    </h1>
                </Col>
                </Row>
                <Row>
                <Col size="md-6" />
                <Col size="md-6">
                    <h1>
                        Detail Oriented
                    </h1>
                </Col>

            </Row>
            <Row>
            <Col size="md-7" />
            <Col size="md-5">
                <h1>
                    Love For Learning
                </h1>
                </Col>
                
            </Row>
        </Container>

    </div>)
}

export default Home;