import React from 'react';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar-section">
        <a href="#home">
          <img
            className="navbar-logo"
            src="./images/Web-Dev-Logo.svg"
            alt="DA-web-dev logo"
          />
        </a>
        <div className="navbar-middle">
          <input type="checkbox" id="navbar-toggle" />
          
          <ul className="navbar-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
      </nav>
    </div>
  );
}
