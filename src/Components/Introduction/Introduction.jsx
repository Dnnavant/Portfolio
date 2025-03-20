import "./Introduction.css";

// Introduction section component
function Introduction() {
	return (
		<section className="intro-section">
			<div className="intro-container">
				<div className="intro-card">
					{/* Introduction heading */}
					<h1 className="intro-title">Hello, I'm Donnie</h1>

					{/* Introduction text */}
					<p className="intro-text">
						As a seasoned professional, I'm eager to transition my career to the
						world of a web developer. In doing so, I'd leverage my previous
						skills and experiences in effective communication, collaboration,
						problem-solving, adaptability, time management, and professionalism
						to contribute to a developer role. My enrollment in web development
						courses at DCI demonstrates my commitment to this career change and
						skill enhancement.
					</p>

					{/* Call to action buttons */}
					<div className="intro-buttons">
						<a href="/projects" className="intro-button intro-button-primary">
							View My Projects
						</a>
						<a href="/contact" className="intro-button intro-button-secondary">
							Contact Me
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Introduction;
