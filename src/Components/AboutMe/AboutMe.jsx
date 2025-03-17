import { motion } from "framer-motion";

function AboutMe() {
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
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className="max-w-2xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-3xl font-bold mb-8"
				>
					About Me
				</motion.h2>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="prose prose-invert mb-12"
				>
					<p className="text-gray-400 mb-6">
						I'm a passionate web developer with a focus on creating clean,
						user-friendly applications. With a background in both front-end and
						back-end development, I enjoy bringing ideas to life through code.
					</p>
					<p className="text-gray-400 mb-6">
						When I'm not coding, you can find me exploring new technologies,
						contributing to open-source projects, or creating music. I believe
						in continuous learning and sharing knowledge with the developer
						community.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<h3 className="text-xl font-semibold mb-4">
						Technologies I work with:
					</h3>
					<div className="flex flex-wrap gap-2">
						{skills.map((skill) => (
							<span
								key={skill}
								className="px-3 py-1 bg-gray-800 rounded-full text-gray-300 text-sm"
							>
								{skill}
							</span>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="mt-12"
				>
					<h3 className="text-xl font-semibold mb-4">Let's connect</h3>
					<p className="text-gray-400 mb-6">
						I'm always interested in hearing about new projects and
						opportunities. Feel free to reach out if you'd like to collaborate
						or just chat!
					</p>
					<div className="flex space-x-4">
						<a
							href="/contact"
							className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
						>
							Get in Touch
						</a>
						<a
							href="/projects"
							className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors font-medium"
						>
							View Projects
						</a>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}

export default AboutMe;
