import "./HomeSection.css";

// Home section component - displays main heading and tagline
function HomeSection() {
	return (
		<div className="home-section-container">
			{/* Main Body Content */}
			<article className="container">
				<h1 className="title">
					DA Developer
					<br />
				</h1>
				<h3 className="subTitle">
					Creativity Is Limited Only If You Want It To Be!
				</h3>
			</article>
		</div>
	);
}

export default HomeSection;
