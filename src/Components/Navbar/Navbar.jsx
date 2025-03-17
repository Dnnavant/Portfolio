import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				backgroundColor: "#111111",
				borderBottom: "1px solid #333",
				padding: "1rem",
				zIndex: 50,
			}}
		>
			<div
				style={{
					maxWidth: "768px",
					margin: "0 auto",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div>
					<Link
						to="/"
						style={{
							color: "white",
							textDecoration: "none",
							fontSize: "1.125rem",
							fontWeight: 500,
						}}
					>
						Home
					</Link>
				</div>
				<div style={{ display: "flex", gap: "1.5rem" }}>
					<Link
						to="/projects"
						style={{
							color: "white",
							textDecoration: "none",
							fontSize: "1.125rem",
							fontWeight: 500,
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
						}}
					>
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
