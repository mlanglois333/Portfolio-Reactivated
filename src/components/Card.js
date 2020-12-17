import React from "react";
import Container from './Container';
import Row from './Row';
import Col from './Col';

function Card(props) {
  return (<Container>
    
      
      <Row>
        <Col size="sm-1">
          <img src={props.left} alt="left" onClick={props.leftClick} />
        </Col>
        <Col size="sm-5">
          
            <img src={props.image} alt="screenshot" className="img-fluid screenshot" />
         
        </Col>
        <Col size="sm-5">   

            <h2>{props.header}</h2>
            

            <p>
              {props.detail}
            </p>
          <p> || {props.li} || {props.gh} || </p>
        </Col>
        <Col size="sm-1">
          <img src={props.right} alt="left" onClick={props.rightClick} />
        </Col>
      </Row>



</Container>
    
  );
}

export default Card;