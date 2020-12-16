import React from "react";
import Container from "./Container";
import Col from "./Col";
import Row from "./Row";

function Home() {

    return (<div>
        <Container>

            <Row>
                <Col size="md-12">
                    <h1 className="homeText">
                        Marc Langlois
                    </h1>
                    <br />
                    <h3 className="homeText">
                        Junior Engineer
                    </h3>
                </Col>

            </Row>
            <Row>
                <Col size="md-7" className="homeContent">
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