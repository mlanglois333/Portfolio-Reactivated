import React from "react";
import Container from './Container';
import Row from './Row';
import Col from './Col';

function Card(props) {
  return (
    
  
    <Container>
    
      
      <Row>
        
        <Col size="sm-6 xs-12">
          
            <img src={props.image} alt="screenshot" className="img-fluid screenshot" />
         
        </Col>
        <Col size="sm-6 xs-12">   
        <div className="bgPanel">

            <h2>{props.header}</h2>
            

            <p>
              {props.detail}
            </p>
          <p> || {props.li} || {props.gh} || </p>
          </div>
        </Col>
        </Row>
        <Row>
        <Col size="sm-6 xs-6">
          <img src={props.left} alt="left" onClick={props.leftClick} className="buttonImgL" />
        </Col>
        <Col size="sm-6 xs-6">
          <img src={props.right} alt="right" onClick={props.rightClick} className="buttonImgR" />
        </Col>
        
      </Row>



</Container>

    
  );
}

export default Card;