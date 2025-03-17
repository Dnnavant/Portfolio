import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
			<div style={{ maxWidth: "42rem", margin: "0 auto" }}>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					style={{
						fontSize: "1.875rem",
						fontWeight: "bold",
						marginBottom: "2rem",
					}}
				>
					About Me
				</motion.h2>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					style={{ marginBottom: "3rem" }}
				>
					<p style={{ color: "#9ca3af", marginBottom: "1.5rem" }}>
						I'm a passionate web developer with a focus on creating clean,
						user-friendly applications. With a background in both front-end and
						back-end development, I enjoy bringing ideas to life through code.
					</p>
					<p style={{ color: "#9ca3af", marginBottom: "1.5rem" }}>
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
					<h3
						style={{
							fontSize: "1.25rem",
							fontWeight: "600",
							marginBottom: "1rem",
						}}
					>
						Technologies I work with:
					</h3>
					<div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
						{skills.map((skill) => (
							<span
								key={skill}
								style={{
									padding: "0.25rem 0.75rem",
									backgroundColor: "#1f2937",
									borderRadius: "9999px",
									color: "#d1d5db",
									fontSize: "0.875rem",
								}}
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
					style={{ marginTop: "3rem" }}
				>
					<h3
						style={{
							fontSize: "1.25rem",
							fontWeight: "600",
							marginBottom: "1rem",
						}}
					>
						Let's connect
					</h3>
					<p style={{ color: "#9ca3af", marginBottom: "1.5rem" }}>
						I'm always interested in hearing about new projects and
						opportunities. Feel free to reach out if you'd like to collaborate
						or just chat!
					</p>
					<div style={{ display: "flex", gap: "1rem" }}>
						<Link
							to="/contact"
							style={{
								backgroundColor: "white",
								color: "black",
								padding: "0.75rem 1.5rem",
								borderRadius: "0.5rem",
								fontWeight: "500",
								textDecoration: "none",
							}}
						>
							Get in Touch
						</Link>
						<Link
							to="/projects"
							style={{
								border: "1px solid white",
								color: "white",
								padding: "0.75rem 1.5rem",
								borderRadius: "0.5rem",
								fontWeight: "500",
								textDecoration: "none",
							}}
						>
							View Projects
						</Link>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}

export default AboutMe;
