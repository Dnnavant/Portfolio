import "./Navbar.css";

// Create a pure HTML navbar
function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				{/* Logo */}
				<div className="logo-container">
					<a href="/" className="logo-link">
						<div className="logo-wrapper">
							<img
								src="/images/DA_Developer_LOGO.png"
								alt="DA Developer Logo"
								className="logo-image"
							/>
						</div>
					</a>
				</div>

				{/* Mobile menu button */}
				<button
					className="mobile-menu-button"
					id="mobile-menu-toggle"
					onClick={() => {
						const navLinks = document.getElementById("nav-links");
						if (navLinks) {
							navLinks.classList.toggle("open");
						}
					}}
				>
					<i className="fa-solid fa-bars"></i>
				</button>

				{/* Navigation links */}
				<div className="nav-links-container" id="nav-links">
					<div className="nav-links-wrapper">
						<a
							href="/projects"
							className="nav-link"
							onClick={() => {
								const navLinks = document.getElementById("nav-links");
								if (navLinks) {
									navLinks.classList.remove("open");
								}
							}}
						>
							Projects
						</a>
						<a
							href="/about"
							className="nav-link"
							onClick={() => {
								const navLinks = document.getElementById("nav-links");
								if (navLinks) {
									navLinks.classList.remove("open");
								}
							}}
						>
							About
						</a>
						<a
							href="/contact"
							className="nav-link"
							onClick={() => {
								const navLinks = document.getElementById("nav-links");
								if (navLinks) {
									navLinks.classList.remove("open");
								}
							}}
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
