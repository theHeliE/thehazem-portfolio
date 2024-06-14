import React from "react";
import "./About.css";
import NavBar from "../Components/NavBar.js";
import { Bio } from "../Constants/Bio.js";

function About() {
  return (
    <>
      <div className="home">
        <NavBar />
      </div>
      <section className="about-sec-1">
        <h1 className="about-title tungsten-text">Hazem Mohamed Sayed Kotb</h1>
        <div className="about-subsec">
          <p className="bio poppins-medium">{Bio}</p>
        </div>
      </section>
    </>
  );
}
export default About;
