import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection";
import HomeSection from "./Components/HomeSection/HomeSection";
import Introduction from "./Components/Introduction/Introduction";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<Router>
			<div className="app-container h-screen bg-[#111111] text-white flex flex-col">
				<Navbar />
				<div className="content-container w-full h-[calc(100vh-80px)] mt-20 flex-grow">
					<Routes>
						<Route
							path="/"
							element={
								<div className="home-wrapper h-full overflow-y-auto">
									<Introduction />
									<ProfileCard />
								</div>
							}
						/>
						<Route
							path="/projects"
							element={
								<div
									className="projects-section h-full overflow-y-auto"
									style={{
										paddingTop: "1rem",
										paddingLeft: "1rem",
										paddingRight: "1rem",
									}}
								>
									<ProjectsSection />
								</div>
							}
						/>
						<Route
							path="/about"
							element={
								<div
									className="about-section h-full overflow-y-auto"
									style={{
										paddingTop: "1rem",
										paddingLeft: "1rem",
										paddingRight: "1rem",
									}}
								>
									<AboutMe />
								</div>
							}
						/>
						<Route
							path="/contact"
							element={
								<div
									className="contact-section h-full overflow-y-auto"
									style={{
										paddingTop: "1rem",
										paddingLeft: "1rem",
										paddingRight: "1rem",
									}}
								>
									<ContactMe />
								</div>
							}
						/>
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
