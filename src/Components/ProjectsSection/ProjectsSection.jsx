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
		>
			<h2 className="text-3xl font-bold mb-8">Projects</h2>
			<div className="space-y-12">
				{projects.map((project, index) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
					>
						<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
						<p className="text-gray-400 mb-4">{project.description}</p>
						<div className="flex flex-wrap gap-2 mb-4">
							{project.tech.map((tech) => (
								<span
									key={tech}
									className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300"
								>
									{tech}
								</span>
							))}
						</div>
						<div className="flex space-x-4">
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								github ↗
							</a>
							<a
								href={project.live}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
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
