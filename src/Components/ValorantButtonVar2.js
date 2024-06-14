import React from "react";
import "./ValorantButton.css";
function ValorantButtonVar2(props) {
  return (
    <a href={props.link} className="val-button2">
      <p className="poppins-medium button-text">{props.text}</p>
    </a>
  );
}
export default ValorantButtonVar2;
