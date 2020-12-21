
import React from "react";

function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""} contentAlign`}>{props.children}</div>;
}

export default Row;