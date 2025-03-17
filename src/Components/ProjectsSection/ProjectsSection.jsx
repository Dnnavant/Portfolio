import { motion } from "framer-motion";

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

function ProjectsSection() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			style={{
				paddingTop: "2rem", // Add padding to ensure content isn't hidden behind navbar
			}}
		>
			<h2
				style={{
					fontSize: "1.875rem",
					fontWeight: "bold",
					marginBottom: "2rem",
				}}
			>
				Projects
			</h2>
			<div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
				{projects.map((project, index) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						style={{
							border: "1px solid #374151",
							borderRadius: "0.5rem",
							padding: "1.5rem",
							transition: "border-color 0.3s ease",
							height: "50vh", // Set each project to 50vh height
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							overflow: "auto", // Add scrolling for content that exceeds the height
						}}
					>
						<div>
							<h3
								style={{
									fontSize: "1.25rem",
									fontWeight: "600",
									marginBottom: "0.5rem",
								}}
							>
								{project.title}
							</h3>
							<p style={{ color: "#9ca3af", marginBottom: "1rem" }}>
								{project.description}
							</p>
							<div
								style={{
									display: "flex",
									flexWrap: "wrap",
									gap: "0.5rem",
									marginBottom: "1rem",
								}}
							>
								{project.tech.map((tech) => (
									<span
										key={tech}
										style={{
											padding: "0.25rem 0.75rem",
											fontSize: "0.875rem",
											backgroundColor: "#1f2937",
											borderRadius: "9999px",
											color: "#d1d5db",
										}}
									>
										{tech}
									</span>
								))}
							</div>
						</div>
						<div style={{ display: "flex", gap: "1rem" }}>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								style={{ color: "#9ca3af", textDecoration: "none" }}
							>
								github ↗
							</a>
							<a
								href={project.live}
								target="_blank"
								rel="noopener noreferrer"
								style={{ color: "#9ca3af", textDecoration: "none" }}
							>
								live ↗
							</a>
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}

export default ProjectsSection;
