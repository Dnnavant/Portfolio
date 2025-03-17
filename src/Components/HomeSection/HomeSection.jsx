import React, { useState } from 'react';

export default function HomeSection() {
  const [isActive, setIsActive] = useState(false);

  const handleBarClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      {/* HamBurger Icon */}
      <div className={`bars ${isActive ? 'active' : ''}`} id="nav-action" onClick={handleBarClick}>
        <span className="bar"></span>
      </div>

      {/* Navbar Links */}
      <nav id="nav" className={isActive ? 'visible' : ''}>
        <ul>
          <li className="shape-circle circle-one"><a href="#">Contact</a></li>
          <li className="shape-circle circle-two"><a href="#">Projects</a></li>
          <li className="shape-circle circle-three"><a href="#">About Me</a></li>
          <li className="shape-circle circle-five"><a href="#">Home</a></li>
        </ul>
      </nav>

      {/* Main Body Content */}
      <article className="container">
        <h1 className='title'>
          DA Developer<br />
        </h1>
        <h3 className='subTitle'>Creativity Is Limited Only If You Want It To Be!</h3>
      </article>
    </div>
  );
}
