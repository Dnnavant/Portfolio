import React from 'react';
import './ProjectsSection.css';

export default function ProjectsSection() {
  return (
    <div>
      <section className="projects-section" id="projects">
        <div className="card-container">
          <div className="card">
            <div className="card-image">
              <img src="./images/demo3.jpg" alt="Card image" />
              <div className="button-container">
                <a className="button" href="https://pkfrom.github.io/404/404.html">
                  View Site
                </a>
              </div>
            </div>
            <div className="card-info">
              <h2>Project 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, veniam!
              </p>
              <div className="icons">
                <a href="#"><i className="far fa-thumbs-up"></i></a>
                <a href="#"><i className="fas fa-share"></i></a>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
