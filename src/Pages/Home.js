import React from "react";
import { useEffect } from "react";
import NavBar from "../Components/NavBar";
import "./Home.css";
import { shortBio } from "../Constants/Bio.js";
import Button from "@material-ui/core/Button";
import Cards from "../Components/Cards.js";
import announcements from "../Constants/Announcements.js";
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
            <div className="announcement" key={index}>
              <Cards
                img={announcement.img}
                title={announcement.title}
                desc={announcement.description}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="section-1">
        <h1 className="home-title tungsten-text">TheHazem</h1>
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
    </>
  );
}
export default Home;
