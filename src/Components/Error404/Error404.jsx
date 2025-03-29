import React from "react";
import "./Error404.css";

function Error404() {
	// Simple function to handle the home button click
	const goHome = () => {
		window.location.href = "/";
	};

	return (
		<div className="error-container">
			{/* Background stars (fewer of them) */}
			<div className="stars">
				{[...Array(20)].map((_, i) => (
					<div key={i} className="star"></div>
				))}
			</div>

			{/* Main content */}
			<div className="error-content">
				{/* 404 text */}
				<h1 className="error-code">404</h1>

				{/* Error message */}
				<h2 className="error-title">Page Not Found</h2>
				<p className="error-message">
					The page you're looking for doesn't exist.
				</p>

				{/* Home button */}
				<button onClick={goHome} className="home-button">
					Return Home →
				</button>
			</div>
		</div>
	);
}

export default Error404;
