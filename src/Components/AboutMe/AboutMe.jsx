import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
	return (
		<div className="aboutMe-section">
			<div className="aboutMe-container1">
				<div className="aboutMe-box1">
					{/* Content for Box 1 */}
					<h2>About me:</h2>
					<p className="aboutMe-text">
						My prior education and professional experiences have shaped me to be
						skillful in many fields while retaining a passion in the tech world.
						This passion has influenced me to pursue a career change in which
						led me to enroll at DCI (Digital Career Institute) to become a
						Full-Stack Web Developer. Gaining these skills have changed my
						desired thoughts in tech from <strong>“I wish”</strong> to
						<strong>“I will ”create</strong>.
					</p>
					<br />

					<p className="aboutMe-text">
						I'm open to job opportunities where I can contribute, learn, and
						grow. If you have a good opportunity that matches my skills and
						experience, then don't hesitate to contact me.
					</p>
				</div>
			</div>
			<div className="aboutMe-container2">
				<div className="aboutMe-box2">
					{/* Content for Box 2 */}
					<h2>Developer Skills</h2>
					<div>
						<ul>
							<p>Front-End:</p>
							<ul>
								<li>HTML / CSS</li>
								<li>JavaScript</li>
								<li>React</li>
								<li>Bootstrap</li>
								<li>TypeScript</li>
								<li>Responsive Design</li>
							</ul>
							<p>Back-End:</p>
							<ul>
								<li>RESTful API’s</li>
								<li>Node.js / Express</li>
								<li>MongoDB</li>
							</ul>
							<p>Version Control:</p>
							<ul>
								<li>Git</li>
							</ul>
						</ul>
					</div>
				</div>

				<div className="aboutMe-box3">
					{/* Content for Box 3 */}
					<h2>Additional Skills:</h2>
					<div>
						<ul>
							<ul>
								<li>Social Media Marketing</li>
								<li>Data Entry</li>
								<li>Technical Support</li>
							</ul>
							<li>Design Skills / Tools:</li>
							<ul>
								<li>UX/UI Design</li>
								<li>Graphic Design</li>
								<li>Photoshop</li>
								<li>Affinity Photo</li>
								<li>Figma</li>
								<li>Canva</li>
							</ul>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
