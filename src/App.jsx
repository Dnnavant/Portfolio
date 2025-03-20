import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection";
import Introduction from "./Components/Introduction/Introduction";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import Footer from "./Components/Footer/Footer";
import HomeSection from "./Components/HomeSection/HomeSection";
import "./App.css";

// Main App component
function App() {
	// Get the current path from the URL
	const path = window.location.pathname;

	// Determine which component to render based on the current path
	let content;
	switch (path) {
		case "/projects":
			content = (
				<div className="projects-section">
					<ProjectsSection />
				</div>
			);
			break;
		case "/about":
			content = (
				<div className="about-section">
					<AboutMe />
				</div>
			);
			break;
		case "/contact":
			content = (
				<div className="contact-section">
					<ContactMe />
				</div>
			);
			break;
		default:
			content = (
				<div className="home-wrapper">
					<HomeSection />
					<Introduction />
					<ProfileCard />
				</div>
			);
			break;
	}

	return (
		<div className="app-container">
			<Navbar />
			<div className="content-container">{content}</div>
			<Footer />
		</div>
	);
}

export default App;
