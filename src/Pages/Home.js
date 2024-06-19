import React from "react";
import { useEffect } from "react";
import NavBar from "../Components/NavBar";
import "./Home.css";
import { shortBio } from "../Constants/Bio.js";
import Button from "@mui/material/Button";
import Cards from "../Components/Cards.js";
import announcements from "../Constants/Announcements.js";
import { intro } from "../Constants/Blogs.js";
import projectsIntro from "../Constants/Projects.js";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ValorantButton from "../Components/ValorantButton.js";
import ValorantButtonVar2 from "../Components/ValorantButtonVar2.js";

function Home() {
  useEffect(() => {
    const fade = document.querySelectorAll(".fade-in");
    const slide = document.querySelectorAll(".slide-in");

    const appearOptions = { threshold: 0, rootMargin: "0px 0px -150px 0px" };

    const scrollAnimation = new IntersectionObserver(function (
      entries,
      scrollAnimation
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          scrollAnimation.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    fade.forEach((fade) => {
      scrollAnimation.observe(fade);
    });
    slide.forEach((slide) => {
      scrollAnimation.observe(slide);
    });

    return () => {
      fade.forEach((fade) => {
        scrollAnimation.unobserve(fade);
      });
      slide.forEach((slide) => {
        scrollAnimation.unobserve(slide);
      });
    };
  }, []);

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
      <section className="section-1 fade-in slide-in from-left">
        <h1
          className="home-title tungsten-text hover-title"
          data-text="TheHazem"
        >
          TheHazem
        </h1>
        <div className="sub-section">
          <p className="paragraph-text poppins-regular">{shortBio}</p>
        </div>
        <div style={{ marginLeft: "5%" }}>
          <ValorantButton link="/about" text="READ MORE"></ValorantButton>
        </div>
      </section>
      <section className="section-2 slide-in from-right">
        <h1 className="home-section tungsten-text" data-text="TheHazem">
          TheHazem Blog
        </h1>
        <div className="sub-section">
          <p className="paragraph-text2 poppins-regular">{intro}</p>
        </div>
        <div style={{ marginLeft: "5%" }}>
          <ValorantButtonVar2
            link="/blog"
            text="CHECK OUT"
          ></ValorantButtonVar2>
        </div>
      </section>
      <section className="section-3 fade-in slide-in from-left">
        <h1
          className="home-title tungsten-text hover-title"
          data-text="TheHazem"
        >
          Projects
        </h1>
        <div className="sub-section">
          <p className="paragraph-text poppins-regular">{projectsIntro}</p>
        </div>
        <div style={{ marginLeft: "5%" }}>
          <ValorantButton
            link="/projects"
            text="CHECK PROJECTS"
          ></ValorantButton>
        </div>
      </section>
      <section className="section-4 fade-in slide-in from-right">
        <h1 className="home-section tungsten-text" data-text="TheHazem">
          Contact me
        </h1>
        <div className="sub-section">
          <p className="paragraph-text2 poppins-regular">
            Feel free to contact me here if you have any inquiries and Thank
            you!❤️
          </p>
          <Button
            onClick={() => (window.location.href = "https://discord.gg/")}
            variant=""
          >
            <FaDiscord
              style={{ width: "30px", height: "30px", marginRight: "6px" }}
            />
            <p className="tungsten-medium contact-buttons">thehazem</p>
          </Button>
          <Button
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/hazem-kotb-46b349267/")
            }
            variant=""
          >
            <FaLinkedin
              style={{ width: "30px", height: "30px", marginRight: "6px" }}
            />
            <p className="tungsten-medium contact-buttons">Hazem Kotb </p>
          </Button>

          <Button
            onClick={() =>
              (window.location.href = "https://github.com/theHeliE")
            }
            variant=""
          >
            <FaGithub
              style={{ width: "30px", height: "30px", marginRight: "6px" }}
            />
            <p className="tungsten-medium contact-buttons">theHeliE </p>
          </Button>

          <Button
            onClick={() =>
              (window.location.href =
                "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkHdQNfqHGGRkjjbXRwPxPZClVBDjgxkkKngqNqkDLfLDmbXPrrXTznCxxlJtwZHJBJRxJ")
            }
            variant=""
          >
            <SiGmail
              style={{ width: "30px", height: "30px", marginRight: "6px" }}
            />
            <p className="tungsten-medium contact-buttons">hazemkotb.72003</p>
          </Button>
        </div>
        <p
          style={{ marginLeft: "5%", fontSize: "12px" }}
          className=" poppins-regular"
        >
          Copyright 2024 theHazem. All rights reserved.
        </p>
      </section>
    </>
  );
}
export default Home;
