import "./ProfileCard.css";

export default function ProfileCard() {
	return (
		<div className="card">
			<div className="image-container">
				<img src="/images/DA_Developer_LOGO.png" alt="Profile Photo" />
			</div>
			<div className="content">
				<h2 className="profile-name">Donnie Avant</h2>
				<p className="job-title">Full Stack Developer</p>
				<p className="description">
					As a seasoned professional, I'm eager to transition my career to the
					world of a web developer. In doing so, I'd leverage my previous skills
					and experiences in effective communication, collaboration,
					problem-solving, adaptability, time management, and professionalism to
					contribute to a developer role. My enrollment in web development
					courses at DCI demonstrates my commitment to this career change and
					skill enhancement.
				</p>
			</div>
			<div className="social-links">
				<a
					className="linkedin"
					href="https://www.linkedin.com/in/donnie-r-avant/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-linkedin"></i>
				</a>
				<a
					className="twitter"
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
