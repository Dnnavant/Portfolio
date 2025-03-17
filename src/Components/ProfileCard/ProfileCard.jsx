import "./ProfileCard.css";

export default function ProfileCard() {
	const cardStyle = {
		maxWidth: "400px",
		backgroundColor: "#1f2937",
		borderRadius: "12px",
		boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
		overflow: "hidden",
		margin: "2rem auto",
		transition: "transform 0.3s ease",
	};

	const imageContainerStyle = {
		width: "100%",
		height: "200px",
		overflow: "hidden",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#111827",
	};

	const imageStyle = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	};

	const contentStyle = {
		padding: "1.5rem",
	};

	const profileNameStyle = {
		fontSize: "1.5rem",
		fontWeight: 700,
		margin: "0 0 0.5rem 0",
		color: "white",
	};

	const jobTitleStyle = {
		fontSize: "1rem",
		color: "#10b981",
		margin: "0 0 1rem 0",
		fontWeight: 500,
	};

	const descriptionStyle = {
		color: "#d1d5db",
		fontSize: "0.875rem",
		lineHeight: 1.5,
		marginBottom: "1.5rem",
	};

	const socialLinksStyle = {
		display: "flex",
		justifyContent: "flex-start",
		gap: "1rem",
		padding: "0 1.5rem 1.5rem",
	};

	const socialLinkBaseStyle = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "36px",
		height: "36px",
		borderRadius: "50%",
		color: "white",
		backgroundColor: "#374151",
		transition: "background-color 0.2s ease",
		textDecoration: "none",
	};

	const handleCardMouseEnter = (e) => {
		e.currentTarget.style.transform = "translateY(-5px)";
	};

	const handleCardMouseLeave = (e) => {
		e.currentTarget.style.transform = "none";
	};

	const handleLinkedinMouseEnter = (e) => {
		e.currentTarget.style.backgroundColor = "#0077b5";
	};

	const handleGithubMouseEnter = (e) => {
		e.currentTarget.style.backgroundColor = "#1da1f2";
	};

	const handleSocialMouseLeave = (e) => {
		e.currentTarget.style.backgroundColor = "#374151";
	};

	return (
		<div
			style={cardStyle}
			onMouseEnter={handleCardMouseEnter}
			onMouseLeave={handleCardMouseLeave}
		>
			<div style={imageContainerStyle}>
				<img
					src="/images/DA_Developer_LOGO.png"
					alt="Profile Photo"
					style={imageStyle}
				/>
			</div>
			<div style={contentStyle}>
				<h2 style={profileNameStyle}>Donnie Avant</h2>
				<p style={jobTitleStyle}>Full Stack Developer</p>
				<p style={descriptionStyle}>
					As a seasoned professional, I'm eager to transition my career to the
					world of a web developer. In doing so, I'd leverage my previous skills
					and experiences in effective communication, collaboration,
					problem-solving, adaptability, time management, and professionalism to
					contribute to a developer role. My enrollment in web development
					courses at DCI demonstrates my commitment to this career change and
					skill enhancement.
				</p>
			</div>
			<div style={socialLinksStyle}>
				<a
					style={socialLinkBaseStyle}
					href="https://www.linkedin.com/in/donnie-r-avant/"
					target="_blank"
					rel="noopener noreferrer"
					onMouseEnter={handleLinkedinMouseEnter}
					onMouseLeave={handleSocialMouseLeave}
				>
					<i className="fa-brands fa-linkedin"></i>
				</a>
				<a
					style={socialLinkBaseStyle}
					href="https://github.com/Dnnavant"
					target="_blank"
					rel="noopener noreferrer"
					onMouseEnter={handleGithubMouseEnter}
					onMouseLeave={handleSocialMouseLeave}
				>
					<i className="fa-brands fa-github"></i>
				</a>
			</div>
		</div>
	);
}
