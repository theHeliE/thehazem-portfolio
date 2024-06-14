import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import "./NavBar.css";
import "../Assets/tungsten/stylesheet.css";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <nav className="navbar-container">
          <div className="options">
            <Link to="about">
              <h2>About me</h2>
            </Link>
          </div>
          <div className="options">
            <Link to="blog">
              <h2>Blog</h2>
            </Link>
          </div>
          <div className="logo">
            <Link to="/">
              <h2 className="title">TheHazem</h2>
            </Link>
          </div>
          <div className="options">
            <Link to="projects">
              <h2>Projects</h2>
            </Link>
          </div>
          <div className="options">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor link behavior
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }}
            >
              <h2>Contact</h2>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
