import React from "react";
import "./About.css";
import NavBar from "../Components/NavBar.js";
import { Bio } from "../Constants/Bio.js";
import { Link, useLocation } from "react-router-dom";
import {
  programmingLanguages,
  tools,
  activities,
  volunteeringActivity,
} from "../Constants/Skills.js";

function About() {
  return (
    <>
      <div className="home">
        <NavBar />
      </div>
      <section className="about-sec-1">
        <h1 className="about-title tungsten-text">Hazem Mohamed Sayed Kotb</h1>
        <div className="about-subsec-1">
          <p className="bio poppins-medium">{Bio}</p>
        </div>
      </section>
      <section>
        <h1 className="about-section tungsten-text">Skills</h1>
        <div className="about-sec-2">
          <div>
            <div className="about-subsec">
              <h2 className="about-subtitle poppins-medium">
                Programming Languages and Frameworks
              </h2>
              <div className="skills-section">
                {programmingLanguages.map((language, index) => (
                  <div key={index} className="poppins-medium skill">
                    <p className="skill-text">{language}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="about-subsec">
              <h2 className="about-subtitle poppins-medium">Go-To tools</h2>
              <div className="skills-section">
                {tools.map((tool, index) => (
                  <div key={index} className="poppins-medium skill">
                    <p className="skill-text">{tool}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="about-section tungsten-text">Volunteering Activities</h1>
        <div className="company-subsec">
          {volunteeringActivity.map((activity, index) => (
            <div className="company-section">
              <Link to={activity.link}>
                <h2 className="company-title poppins-medium">
                  {activity.name}
                </h2>
              </Link>
              <p className="company-bio poppins-medium">
                {activity.startDate} - {activity.endDate}
              </p>
              <p className="company-bio poppins-medium">{activity.position}</p>
              <p className="company-bio poppins-medium">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div>
          <h1 className="about-section tungsten-text">
            Extracurricular activities
          </h1>
          <div className="about-subsec">
            <div className="activity-section">
              {activities.map((activity, index) => (
                <div key={index} className="poppins-medium activity">
                  <p className="activity-text">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
