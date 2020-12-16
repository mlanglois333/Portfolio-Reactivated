import React from "react";
import Container from "./Container";
import Col from "./Col";
import Row from "./Row";

function Home() {

    return (<div>
        <div className="homeBuffer"></div>
        <Container>

            <Row className="homeContent">
                <Col size="md-12">
                    <h1 className="homeText">
                        Creative Problem-Solver
                        <br />
                        Detail Oriented
                        <br />
                        Motivated
                    </h1>
                </Col>
            </Row>


        </Container>

    </div>)
}

export default Home;