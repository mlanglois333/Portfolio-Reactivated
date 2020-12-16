import React from "react";

function Card(props) {
  return (
    <div className="card text-center bg-dark text-light">
        
      <div className="card-header">
        <h2>{props.header}</h2>
      </div>
      <div className="card-body">
      <div className="row no-gutters">
        <div className="col">
        <img src={props.image} alt="screenshot" className="img-fluid screenshot" />
        </div>
        <div className="col">
          {props.detail}

        </div>
      </div>
      
      <div className="card-footer w-100 text-muted">
        <p><img src={props.left} alt="left" onClick={props.leftClick} className="buttonImg" /> || {props.li} || {props.gh} || <img src={props.right} alt="left" onClick={props.rightClick} className="buttonImg" /></p>
      </div>
    </div>
    </div>
  );
}

export default Card;