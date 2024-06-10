import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <>
      <div className="navbar">
        <nav className="navbar-container">
          <div className="logo">
            <h2>theHazem</h2>
          </div>
          <div className="options">
            <h2>About me</h2>
          </div>
          <div className="options">
            <h2>Blogs</h2>
          </div>
          <div className="options">
            <h2>Projects</h2>
          </div>
          <div className="options">
            <h2>Contact me</h2>
          </div>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
