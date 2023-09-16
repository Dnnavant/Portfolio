import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
	return (
		<div>
			<section className="about-section" id="about">
				<div className="about-me-container">
					<h1 className="about-me-sub-title">About me:</h1>
					<br />
					<p className="about-me-text-p">
						My prior education and professional experiences have shaped me to be
						skillful in many fields while retaining my enthusiasm in the tech
						world. My passion in tech started out moderate and now has expanded
						rapidly into the world of a developer. This passion has influenced
						me to pursue a career change in which led me to enroll at DCI to
						become a Full-Stack Web Developer. Learning these skills have
						changed my desired thoughts in tech from
						<strong>“I wish”</strong> to <strong>“I will create”.</strong>
					</p>

					<p className="about-me-text-p">
						Combining my developer skills with my previous skills in project
						management, business operations, graphic design, and leadership
						gives me the greatest confidence to be successful in this
						ever-advancing world in tech.
					</p>
					<br />
					<p className="about-me-text-p">
						I'm open to job opportunities where I can contribute, learn, and
						grow. If you have a good opportunity that matches my skills and
						experience, then don't hesitate to contact me.
					</p>
					<br />

					<br />

					<div className="about-me-skills-container">
						<h2 className="about-me-sub-title">Skills:</h2>

						<br />
						<div className="aboutMe-skillsList">
							<p>Front-End</p>
							<div className="aboutMe-skills">
								<i class="fa-brands fa-html5">HTML</i>
							</div>
							<div className="aboutMe-skills">
								<i class="fa-brands fa-css3-alt">CSS</i>
							</div>
							<div className="aboutMe-skills">
								<i class="fa-brands fa-js"></i>JavaScript
							</div>
							<div className="aboutMe-skills">
								<i class="fa-brands fa-bootstrap"></i>Bootstrap
							</div>
							<div className="aboutMe-skills">
								<i class="fa-brands fa-react"></i>React
							</div>
							<div className="aboutMe-skills">TypeScript</div>
							<div className="aboutMe-skills">Responsive Design</div>
						</div>

						<div className="aboutMe-skillsList">
							<p>Back-End</p>
							<div className="aboutMe-skills">
								<i class="fa-brands fa-node-js"></i>NodeJS
							</div>
							<div className="aboutMe-skills">MongoDB</div>
							<div className="aboutMe-skills">Express</div>
							<div className="aboutMe-skills">RESTful API's</div>
							<div className="aboutMe-skills">
								<i class="fa-solid fa-terminal"></i>Terminal
							</div>
							<div className="aboutMe-skills">
								<i class="fa-brands fa-git-alt"></i>Git
							</div>
							<div className="aboutMe-skills">
								<i class="fa-brands fa-github"></i>GitHub
							</div>
							<div className="aboutMe-skills">UI/UX Design</div>
							<div className="aboutMe-skills">
								<i class="fa-brands fa-figma"></i>Figma
							</div>
							<div className="aboutMe-skills">Photoshop</div>
							<div className="aboutMe-skills">Illustrator</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
