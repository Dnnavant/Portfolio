import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	const navItems = [
		{ path: "/", label: "home" },
		{ path: "/projects", label: "projects" },
		{ path: "/about", label: "about" },
		{ path: "/contact", label: "contact" },
		{ path: "/music", label: "music" },
	];

	const isActive = (path) => {
		if (path === "/" && location.pathname === "/") return true;
		if (path !== "/" && location.pathname.startsWith(path)) return true;
		return false;
	};

	return (
		<motion.nav
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="fixed top-0 left-0 right-0 bg-[#111111] z-50 py-6 px-4"
		>
			<div className="max-w-3xl mx-auto">
				{/* Desktop Navigation */}
				<div className="hidden md:flex justify-between items-center">
					<div className="text-lg font-medium">
						<Link
							to="/"
							className={`hover:text-gray-400 transition-colors ${
								isActive("/") ? "text-white" : "text-gray-400"
							}`}
						>
							home
						</Link>
					</div>
					<div className="flex space-x-6">
						{navItems.slice(1).map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`text-lg font-medium transition-colors ${
									isActive(item.path)
										? "text-white"
										: "text-gray-400 hover:text-white"
								}`}
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className="md:hidden">
					<div className="flex justify-between items-center">
						<div className="text-lg font-medium">
							<Link
								to="/"
								className={`text-lg font-medium ${
									isActive("/") ? "text-white" : "text-gray-400"
								}`}
							>
								home
							</Link>
						</div>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-white p-2"
							aria-label="Toggle menu"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isMenuOpen ? (
									<path d="M6 18L18 6M6 6l12 12" />
								) : (
									<path d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>

					{/* Mobile Menu */}
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.2 }}
							className="absolute left-0 right-0 mt-2 bg-[#111111] border border-gray-800 rounded-lg py-4 px-6 shadow-lg"
						>
							<div className="flex flex-col space-y-4">
								{navItems.slice(1).map((item) => (
									<Link
										key={item.path}
										to={item.path}
										onClick={() => setIsMenuOpen(false)}
										className={`text-lg font-medium transition-colors ${
											isActive(item.path)
												? "text-white"
												: "text-gray-400 hover:text-white"
										}`}
									>
										{item.label}
									</Link>
								))}
							</div>
						</motion.div>
					)}
				</div>
			</div>
		</motion.nav>
	);
}

export default Navbar;
