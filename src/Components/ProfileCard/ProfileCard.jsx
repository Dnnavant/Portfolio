import "./ProfileCard.css";

// Simple profile card component
function ProfileCard() {
	return (
		<div className="profile-card">
			{/* Profile image */}
			<div className="profile-image-container">
				<img
					src="/images/DA_Developer_LOGO.png"
					alt="Profile Photo"
					className="profile-image"
				/>
			</div>

			{/* Profile content */}
			<div className="profile-content">
				<h2 className="profile-name">Donnie Avant</h2>
				<p className="profile-job-title">Full Stack Developer</p>
				<p className="profile-description">
					As a seasoned professional, I'm eager to transition my career to the
					world of a web developer. In doing so, I'd leverage my previous skills
					and experiences in effective communication, collaboration,
					problem-solving, adaptability, time management, and professionalism to
					contribute to a developer role. My enrollment in web development
					courses at DCI demonstrates my commitment to this career change and
					skill enhancement.
				</p>
			</div>

			{/* Social links */}
			<div className="profile-social-links">
				<a
					className="profile-social-link linkedin"
					href="https://www.linkedin.com/in/donnie-r-avant/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-linkedin"></i>
				</a>
				<a
					className="profile-social-link github"
					href="https://github.com/Dnnavant"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-github"></i>
				</a>
			</div>
		</div>
	);
}

export default ProfileCard;
