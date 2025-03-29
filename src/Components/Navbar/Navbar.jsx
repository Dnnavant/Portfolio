import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link to="/" className="logo-link">
					<img
						src="/images/DA_Developer_LOGO.png"
						alt="DA Developer Logo"
						className="logo-image"
						onError={(e) => {
							e.target.onerror = null;
							e.target.src = "/images/placeholder.png";
						}}
					/>
				</Link>

				<div
					className={`nav-links-container ${isMenuOpen ? "open" : ""}`}
					id="nav-links"
				>
					<div className="nav-links-wrapper">
						<Link to="/projects" className="nav-link" onClick={closeMenu}>
							Projects
						</Link>
						<Link to="/about" className="nav-link" onClick={closeMenu}>
							About
						</Link>
						<Link to="/contact" className="nav-link" onClick={closeMenu}>
							Contact
						</Link>
					</div>
				</div>

				<button
					className="mobile-menu-button"
					id="mobile-menu-toggle"
					onClick={toggleMenu}
					aria-label="Toggle mobile menu"
					aria-expanded={isMenuOpen}
				>
					<i className="fa-solid fa-bars"></i>
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
