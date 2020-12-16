import React from "react";
import Fade from 'react-reveal/Fade';

function Card(props) {
  return (<div>
    <Fade cascade>
  
        <h2>{props.header}</h2>
        <br />
        <img src={props.image} alt="screenshot" className="img-fluid screenshot" />
        <p>
          {props.detail}
          </p>
          <br />
        <p><img src={props.left} alt="left" onClick={props.leftClick} className="buttonImg" /> || {props.li} || {props.gh} || <img src={props.right} alt="left" onClick={props.rightClick} className="buttonImg" /></p>
      </Fade>
    </div>
    
  );
}

export default Card;