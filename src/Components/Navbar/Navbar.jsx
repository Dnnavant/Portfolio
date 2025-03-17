import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				width: "100vw",
				backgroundColor: "#111111",
				borderBottom: "1px solid #333",
				padding: "1rem",
				zIndex: 50,
			}}
		>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div style={{ width: "20%" }}>
					<Link
						to="/"
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								width: "80px",
								height: "80px",
								borderRadius: "50%",
								overflow: "hidden",
								boxShadow: "0 0 15px rgba(0, 0, 0, 0.4)",
								transition: "transform 0.3s ease",
							}}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = "scale(1.1)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = "scale(1)")
							}
						>
							<img
								src="/images/DA_Developer_LOGO.png"
								alt="DA Developer Logo"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									objectPosition: "center",
									transform: "scale(1.15)", // Zoom in on the logo content
								}}
							/>
						</div>
					</Link>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						flex: 1,
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "space-evenly",
							width: "100%",
							maxWidth: "600px",
						}}
					>
						<Link
							to="/projects"
							style={{
								color: "white",
								textDecoration: "none",
								fontSize: "1.125rem",
								fontWeight: 500,
								padding: "0.5rem 1rem",
							}}
						>
							Projects
						</Link>
						<Link
							to="/about"
							style={{
								color: "white",
								textDecoration: "none",
								fontSize: "1.125rem",
								fontWeight: 500,
								padding: "0.5rem 1rem",
							}}
						>
							About
						</Link>
						<Link
							to="/contact"
							style={{
								color: "white",
								textDecoration: "none",
								fontSize: "1.125rem",
								fontWeight: 500,
								padding: "0.5rem 1rem",
							}}
						>
							Contact
						</Link>
					</div>
				</div>
				<div style={{ width: "20%" }}></div> {/* Spacer for balance */}
			</div>
		</nav>
	);
}

export default Navbar;
