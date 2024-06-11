import React from "react";
import "./Cards.css";
import "../Assets/numans/stylesheet.css";
function Cards(props) {
  return (
    <div className="card">
      <div className="wrapper">
        <img src={props.img} alt="img" />
      </div>

      <h3 className="card-title tungsten-text">{props.title}</h3>
      <p className="card-desc">{props.desc}</p>
    </div>
  );
}
export default Cards;
