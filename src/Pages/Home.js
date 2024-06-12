import React from "react";
import { useEffect } from "react";
import NavBar from "../Components/NavBar";
import "./Home.css";
import { shortBio } from "../Constants/Bio.js";
import Button from "@material-ui/core/Button";
import Cards from "../Components/Cards.js";
import announcements from "../Constants/Announcements.js";
import { intro } from "../Constants/Blogs.js";
function Home() {
  return (
    <>
      <div className="home">
        <NavBar />
      </div>
      <section className="news">
        <h1 className="subtitle tungsten-text">Latest</h1>
        <div className="announcements-container">
          {announcements.map((announcement, index) => (
            <a className="announcement" key={index} href="#e">
              <Cards
                img={announcement.img}
                title={announcement.title}
                desc={announcement.description}
              />
            </a>
          ))}
        </div>
      </section>
      <section className="section-1">
        <h1
          className="home-title tungsten-text hover-title"
          data-text="TheHazem"
        >
          TheHazem
        </h1>
        <div className="sub-section">
          <p className="tungsten-medium paragraph-text">{shortBio}</p>
        </div>
        <Button
          variant="contained"
          style={{ color: "black", marginLeft: "5%", marginBottom: "0" }}
        >
          <p className="tungsten-medium buttons">READ MORE</p>
        </Button>
      </section>
      <section className="section-2">
        <h1 className="home-section tungsten-text" data-text="TheHazem">
          TheHazem Blog
        </h1>
        <div className="sub-section">
          <p className="tungsten-medium paragraph-text2">{intro}</p>
        </div>
        <Button
          variant="contained"
          style={{ color: "black", marginLeft: "5%", marginBottom: "0" }}
        >
          <p className="tungsten-medium buttons">CHECK OUT</p>
        </Button>
      </section>
      <section className="section-3">
        <h1
          className="home-title tungsten-text hover-title"
          data-text="TheHazem"
        >
          Projects
        </h1>
        <div className="sub-section">
          <p className="tungsten-medium paragraph-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <Button
          variant="contained"
          style={{ color: "black", marginLeft: "5%", marginBottom: "0" }}
        >
          <p className="tungsten-medium buttons">CHECK PROJECTS</p>
        </Button>
      </section>
    </>
  );
}
export default Home;
