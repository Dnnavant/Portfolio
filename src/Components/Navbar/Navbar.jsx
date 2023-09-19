import React from 'react';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar-section">
        <a href="#home">
          <img
            className="navbar-logo-pic"
            src="./images/Web-Dev-Logo.png"
            alt="DA web dev logo"
          />
        </a>
        <div className="navbar-middle">
          <input type="checkbox" id="navbar-toggle" />
          <label htmlFor="navbar-toggle" className="menu-icon">
            <i className="fa-solid fa-bars"></i>
          </label>
          <ul className="navbar-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        {/* Social Media Icons */}
        <div className="navbar-right">
          <a href="https://www.linkedin.com/in/donnie-r-avant/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/Dnnavant" target='_blank'><i class="fa-brands fa-github"></i></a>
        </div>
      </nav>
    </div>
  );
}
