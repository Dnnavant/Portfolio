import "./styles/variables.css";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection";
import Introduction from "./Components/Introduction/Introduction";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import Footer from "./Components/Footer/Footer";
import HomeSection from "./Components/HomeSection/HomeSection";
import Error404 from "./Components/Error404/Error404";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main App component
function App() {
	return (
		<Router>
			<div className="app-container">
				<Navbar />
				<div className="content-container">
					<Routes>
						<Route
							path="/"
							element={
								<div className="home-wrapper">
									<HomeSection />
									<Introduction />
									<ProfileCard />
								</div>
							}
						/>
						<Route path="/projects" element={<ProjectsSection />} />
						<Route path="/about" element={<AboutMe />} />
						<Route path="/contact" element={<ContactMe />} />
						<Route path="*" element={<Error404 />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
