import React from "react";

function Button(props) {
    return <button onClick={props.fcn}><img src={props.img} alt="button" className="linkImg" /> </button>
}

export default Button;