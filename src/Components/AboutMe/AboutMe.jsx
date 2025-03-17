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
			style={{
				paddingTop: "7.5rem", // Increased padding to ensure content isn't hidden behind navbar
				paddingBottom: "2rem", // Added bottom padding for better spacing
				display: "flex",
				justifyContent: "center",
				alignItems: "center", // Changed to center vertically
				minHeight: "calc(100vh - 80px)",
			}}
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				style={{
					maxWidth: "42rem",
					width: "100%",
					height: "50vh", // Set the height to 50% of viewport height
					backgroundColor: "#1f2937",
					borderRadius: "12px",
					padding: "2.5rem",
					boxShadow:
						"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
					margin: "0 auto",
					transition: "transform 0.3s ease",
					overflow: "auto", // Make content scrollable if it overflows
					display: "flex",
					flexDirection: "column",
				}}
				whileHover={{ transform: "translateY(-5px)" }}
			>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					style={{
						fontSize: "1.875rem",
						fontWeight: "bold",
						marginBottom: "1.5rem",
						background: "linear-gradient(90deg, #ffffff, #10b981)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text",
					}}
				>
					About Me
				</motion.h2>

				<div style={{ overflowY: "auto", flex: 1 }}>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						style={{ marginBottom: "2rem" }}
					>
						<p
							style={{
								color: "#d1d5db",
								marginBottom: "1.5rem",
								lineHeight: 1.75,
							}}
						>
							I'm a passionate web developer with a focus on creating clean,
							user-friendly applications. With a background in both front-end
							and back-end development, I enjoy bringing ideas to life through
							code.
						</p>
						<p
							style={{
								color: "#d1d5db",
								marginBottom: "1.5rem",
								lineHeight: 1.75,
							}}
						>
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
								color: "#e5e7eb",
							}}
						>
							Technologies I work with:
						</h3>
						<div
							style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "0.5rem",
								marginBottom: "2rem",
							}}
						>
							{skills.map((skill) => (
								<span
									key={skill}
									style={{
										padding: "0.25rem 0.75rem",
										backgroundColor: "#374151",
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
					>
						<h3
							style={{
								fontSize: "1.25rem",
								fontWeight: "600",
								marginBottom: "1rem",
								color: "#e5e7eb",
							}}
						>
							Let's connect
						</h3>
						<p
							style={{
								color: "#d1d5db",
								marginBottom: "1.5rem",
								lineHeight: 1.75,
							}}
						>
							I'm always interested in hearing about new projects and
							opportunities. Feel free to reach out if you'd like to collaborate
							or just chat!
						</p>
						<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
							<Link
								to="/contact"
								style={{
									backgroundColor: "#10b981",
									color: "white",
									padding: "0.75rem 1.5rem",
									borderRadius: "0.5rem",
									fontWeight: "500",
									textDecoration: "none",
									transition: "all 0.3s ease",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "translateY(-2px)";
									e.currentTarget.style.boxShadow =
										"0 4px 6px -1px rgba(0, 0, 0, 0.1)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "none";
									e.currentTarget.style.boxShadow = "none";
								}}
							>
								Get in Touch
							</Link>
							<Link
								to="/projects"
								style={{
									border: "1px solid #d1d5db",
									color: "#d1d5db",
									padding: "0.75rem 1.5rem",
									borderRadius: "0.5rem",
									fontWeight: "500",
									textDecoration: "none",
									transition: "all 0.3s ease",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "translateY(-2px)";
									e.currentTarget.style.boxShadow =
										"0 4px 6px -1px rgba(0, 0, 0, 0.1)";
									e.currentTarget.style.borderColor = "#10b981";
									e.currentTarget.style.color = "#10b981";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "none";
									e.currentTarget.style.boxShadow = "none";
									e.currentTarget.style.borderColor = "#d1d5db";
									e.currentTarget.style.color = "#d1d5db";
								}}
							>
								View Projects
							</Link>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default AboutMe;
