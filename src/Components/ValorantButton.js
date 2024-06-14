import React from "react";
import "./ValorantButton.css";
function ValorantButton(props) {
  return (
    <a href={props.link} className="val-button">
      <p className="poppins-medium button-text">{props.text}</p>
    </a>
  );
}
export default ValorantButton;
