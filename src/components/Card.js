import React from "react";

function Card(props) {
  return (
    <div className="card text-center">
        
      <div className="card-header">
        <h2>{props.header}</h2>
      </div>
      <div className="card-body">
      <div className="row no-gutters">
        <div className="col-auto">
        <img src={props.image} alt="screenshot" className="img-fluid screenshot" />
        </div>
        <div className="col">
          {props.detail}

        </div>
      </div>
      </div>
      <div class="card-footer w-100 text-muted">
        <p>{props.li} || {props.gh}</p>
      </div>
      
    </div>
  );
}

export default Card;