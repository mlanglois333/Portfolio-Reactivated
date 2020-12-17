import React from "react";
import Container from './Container';
import Row from './Row';
import Col from './Col';

function Card(props) {
  return (<div>
    <Container>
      
      <Row>
        <Col size="md-6">
          
            <img src={props.image} alt="screenshot" className="img-fluid screenshot" />
         
        </Col>
        <Col size="md-6">   

            <h2>{props.header}</h2>
            

            <p>
              {props.detail}
            </p>
          
        </Col>
      </Row>
      </Container>
        
          <p className="sticky"><img src={props.left} alt="left" onClick={props.leftClick} className="buttonImg" /> || {props.li} || {props.gh} || <img src={props.right} alt="left" onClick={props.rightClick} className="buttonImg" /></p>

        </div>
  );
}

export default Card;