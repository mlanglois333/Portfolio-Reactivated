import React from "react";
import Container from './Container';
import Row from './Row';
import Col from './Col';

function Card(props) {
  return (<div>
    <Container>
      
      <Row>
        <Col size="sm-6">
          
            <img src={props.image} alt="screenshot" className="img-fluid screenshot" />
         
        </Col>
        <Col size="sm-6">   

            <h2>{props.header}</h2>
            

            <p>
              {props.detail}
            </p>
          
        </Col>
      </Row>
      <Row>
        <Col size="sm-12">
          <p><img src={props.left} alt="left" onClick={props.leftClick} className="buttonImg" /> || {props.li} || {props.gh} || <img src={props.right} alt="left" onClick={props.rightClick} className="buttonImg" /></p>

        </Col>
      </Row>



    </Container></div>
  );
}

export default Card;