import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection";

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-[#111111] text-white">
				<Navbar />
				<div className="max-w-3xl mx-auto px-4 pt-28 pb-16">
					<Routes>
						<Route
							path="/"
							element={
								<>
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8 }}
										className="mb-24"
									>
										<h1 className="text-4xl font-bold mb-6">Hi, I'm Donnie!</h1>
										<p className="text-xl text-gray-400 mb-8 max-w-2xl">
											I build custom WEB solutions, write about DEV and produce
											music as a hobby.
										</p>
										<div className="flex space-x-4">
											<Link
												to="/projects"
												className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
											>
												My Projects
											</Link>
											<Link
												to="/contact"
												className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors font-medium"
											>
												Get in Touch
											</Link>
										</div>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.8 }}
										className="mb-16 flex justify-center"
									>
										<div className="w-32 h-32 rounded-full overflow-hidden">
											<img
												src="/your-profile-image.jpg"
												alt="Profile"
												className="w-full h-full object-cover"
											/>
										</div>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8, delay: 0.2 }}
										className="flex justify-center space-x-6"
									>
										<a
											href="https://twitter.com" // TODO: Add your Twitter profile URL
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-400 hover:text-white transition-colors"
										>
											twitter
										</a>
										<a
											href="https://github.com" // TODO: Add your GitHub profile URL
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-400 hover:text-white transition-colors"
										>
											github
										</a>
										<a
											href="https://linkedin.com" // TODO: Add your LinkedIn profile URL
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-400 hover:text-white transition-colors"
										>
											linkedin
										</a>
									</motion.div>
								</>
							}
						/>
						<Route path="/projects" element={<ProjectsSection />} />
						<Route path="/about" element={<AboutMe />} />
						<Route path="/contact" element={<ContactMe />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
