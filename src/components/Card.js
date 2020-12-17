import React from "react";
import Container from './Container';
import Row from './Row';
import Col from './Col';

function Card(props) {
  return (
  
    <Container>
    
      
      <Row>
        <Col size="sm-1 xs-1">
          <img src={props.left} alt="left" onClick={props.leftClick} className="buttonImg" />
        </Col>
        <Col size="sm-5 xs-3">
          
            <img src={props.image} alt="screenshot" className="img-fluid screenshot" />
         
        </Col>
        <Col size="sm-5 xs-7">   

            <h2>{props.header}</h2>
            

            <p>
              {props.detail}
            </p>
          <p> || {props.li} || {props.gh} || </p>
        </Col>
        <Col size="sm-1 xs-1">
          <img src={props.right} alt="left" onClick={props.rightClick} className="buttonImg" />
        </Col>
      </Row>



</Container>

    
  );
}

export default Card;