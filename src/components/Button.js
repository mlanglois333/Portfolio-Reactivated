import React from "react";

function Button(props) {
    return <button onClick={props.fcn} className="vert"><img src={props.img} alt="button" className="buttonImg" /> </button>
}

export default Button;