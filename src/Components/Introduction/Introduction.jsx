import React from "react";
import { Link } from "react-router-dom";

export default function Introduction() {
	const sectionStyle = {
		height: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "2rem",
	};

	const containerStyle = {
		width: "100%",
		maxWidth: "800px",
	};

	const cardStyle = {
		backgroundColor: "#1f2937",
		borderRadius: "12px",
		padding: "2.5rem",
		boxShadow:
			"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
		transition: "transform 0.3s ease",
	};

	const titleStyle = {
		fontSize: "2.5rem",
		fontWeight: 700,
		marginBottom: "1.5rem",
		background: "linear-gradient(90deg, #ffffff, #10b981)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		backgroundClip: "text",
	};

	const textStyle = {
		fontSize: "1.125rem",
		lineHeight: 1.75,
		color: "#d1d5db",
		marginBottom: "2rem",
	};

	const buttonsContainerStyle = {
		display: "flex",
		gap: "1rem",
		flexWrap: "wrap",
	};

	const buttonBaseStyle = {
		display: "inline-block",
		padding: "0.75rem 1.5rem",
		fontSize: "1rem",
		fontWeight: 500,
		textAlign: "center",
		textDecoration: "none",
		borderRadius: "0.375rem",
		transition: "all 0.3s ease",
	};

	const primaryButtonStyle = {
		...buttonBaseStyle,
		backgroundColor: "#10b981",
		color: "white",
	};

	const secondaryButtonStyle = {
		...buttonBaseStyle,
		backgroundColor: "transparent",
		border: "1px solid #d1d5db",
		color: "#d1d5db",
	};

	// Handle hover effect
	const handleMouseEnter = (e, isSecondary) => {
		e.currentTarget.style.transform = "translateY(-2px)";
		e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";

		if (isSecondary) {
			e.currentTarget.style.borderColor = "#10b981";
			e.currentTarget.style.color = "#10b981";
		}
	};

	const handleMouseLeave = (e, isSecondary) => {
		e.currentTarget.style.transform = "none";
		e.currentTarget.style.boxShadow = "none";

		if (isSecondary) {
			e.currentTarget.style.borderColor = "#d1d5db";
			e.currentTarget.style.color = "#d1d5db";
		}
	};

	const handleCardMouseEnter = (e) => {
		e.currentTarget.style.transform = "translateY(-5px)";
	};

	const handleCardMouseLeave = (e) => {
		e.currentTarget.style.transform = "none";
	};

	return (
		<section style={sectionStyle}>
			<div style={containerStyle}>
				<div
					style={cardStyle}
					onMouseEnter={handleCardMouseEnter}
					onMouseLeave={handleCardMouseLeave}
				>
					<h1 style={titleStyle}>Hello, I'm Donnie</h1>
					<p style={textStyle}>
						As a seasoned professional, I'm eager to transition my career to the
						world of a web developer. In doing so, I'd leverage my previous
						skills and experiences in effective communication, collaboration,
						problem-solving, adaptability, time management, and professionalism
						to contribute to a developer role. My enrollment in web development
						courses at DCI demonstrates my commitment to this career change and
						skill enhancement.
					</p>
					<div style={buttonsContainerStyle}>
						<Link
							to="/projects"
							style={primaryButtonStyle}
							onMouseEnter={(e) => handleMouseEnter(e, false)}
							onMouseLeave={(e) => handleMouseLeave(e, false)}
						>
							View My Projects
						</Link>
						<Link
							to="/contact"
							style={secondaryButtonStyle}
							onMouseEnter={(e) => handleMouseEnter(e, true)}
							onMouseLeave={(e) => handleMouseLeave(e, true)}
						>
							Contact Me
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
