import React from "react";
import Fade from 'react-reveal/Fade';
import Container from './Container';
import Row from './Row';
import Col from './Col';

function Card(props) {
  return (<div>
    <Container>
      <Row>
        <Col size="md-12">
          <p><img src={props.left} alt="left" onClick={props.leftClick} className="buttonImg" /> || {props.li} || {props.gh} || <img src={props.right} alt="left" onClick={props.rightClick} className="buttonImg" /></p>

        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <Fade clear>
            <img src={props.image} alt="screenshot" className="img-fluid screenshot" />
          </Fade>
        </Col>
      </Row>
      <Row>
        <Col>


          <Fade cascade>

            <h2>{props.header}</h2>
            <br />

            <p>
              {props.detail}
            </p>
          </Fade>
        </Col>
      </Row>



    </Container></div>
  );
}

export default Card;