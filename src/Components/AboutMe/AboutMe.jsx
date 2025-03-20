import "./AboutMe.css";

// About Me section component
function AboutMe() {
	// List of skills
	const skills = [
		"JavaScript",
		"React",
		"Node.js",
		"Tailwind CSS",
		"TypeScript",
		"Next.js",
		// Add more skills as needed
	];

	return (
		<div className="about-container">
			<div className="about-card">
				{/* Section title */}
				<h2 className="about-title">About Me</h2>

				<div className="about-content">
					{/* Bio section */}
					<div className="about-section">
						<p className="about-text">
							I'm a passionate web developer with a focus on creating clean,
							user-friendly applications. With a background in both front-end
							and back-end development, I enjoy bringing ideas to life through
							code.
						</p>
						<p className="about-text">
							When I'm not coding, you can find me exploring new technologies,
							contributing to open-source projects, or creating music. I believe
							in continuous learning and sharing knowledge with the developer
							community.
						</p>
					</div>

					{/* Skills section */}
					<div className="about-section">
						<h3 className="about-subtitle">Technologies I work with:</h3>
						<div className="skills-container">
							{skills.map((skill) => (
								<span key={skill} className="skill-tag">
									{skill}
								</span>
							))}
						</div>
					</div>

					{/* Connect section */}
					<div className="about-section">
						<h3 className="about-subtitle">Let's connect</h3>
						<p className="about-text">
							I'm always interested in hearing about new projects and
							opportunities. Feel free to reach out if you'd like to collaborate
							or just chat!
						</p>
						<div className="buttons-container">
							<a href="/contact" className="primary-button">
								Get in Touch
							</a>
							<a href="/projects" className="secondary-button">
								View Projects
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
