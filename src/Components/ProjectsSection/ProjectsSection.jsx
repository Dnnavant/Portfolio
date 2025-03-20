import "./ProjectsSection.css";

// Projects section component
function ProjectsSection() {
	// Project data
	const projects = [
		{
			title: "Project 1",
			description:
				"Description of your first project. What it does, technologies used, and its impact.",
			tech: ["React", "Tailwind", "Node.js"],
			link: "https://github.com/yourusername/project1",
			live: "https://project1.com",
		},
		{
			title: "Project 2",
			description:
				"Description of your second project. Highlight the key features and your role.",
			tech: ["Next.js", "TypeScript", "MongoDB"],
			link: "https://github.com/yourusername/project2",
			live: "https://project2.com",
		},
		// Add more projects as needed
	];

	return (
		<div className="projects-container">
			{/* Projects heading */}
			<h2 className="projects-heading">Projects</h2>

			{/* Projects list */}
			<div className="projects-list">
				{projects.map((project, index) => (
					<div key={project.title} className="project-card">
						<div>
							{/* Project title and description */}
							<h3 className="project-title">{project.title}</h3>
							<p className="project-description">{project.description}</p>

							{/* Technologies used */}
							<div className="project-tech-list">
								{project.tech.map((tech) => (
									<span key={tech} className="project-tech-tag">
										{tech}
									</span>
								))}
							</div>
						</div>

						{/* Project links */}
						<div className="project-links">
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link"
							>
								github ↗
							</a>
							<a
								href={project.live}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link"
							>
								live ↗
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ProjectsSection;
