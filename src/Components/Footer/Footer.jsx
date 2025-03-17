import React from "react";

export default function Footer() {
	return (
		<footer
			style={{
				backgroundColor: "#111111",
				color: "#f3f4f6",
				padding: "2rem 1rem 1rem",
				borderTop: "1px solid #333",
			}}
		>
			<div
				style={{
					maxWidth: "1200px",
					margin: "0 auto",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						textAlign: "center",
						marginBottom: "1.5rem",
					}}
				>
					<h4
						style={{
							fontSize: "1.25rem",
							fontWeight: 600,
							marginBottom: "0.75rem",
							color: "#10b981",
						}}
					>
						DA Developer
					</h4>
					<p
						style={{
							maxWidth: "600px",
							color: "#9ca3af",
							lineHeight: 1.6,
							fontStyle: "italic",
						}}
					>
						"Embrace the unknown, for in the world of web development, every
						challenge is a chance to learn and grow."
					</p>
				</div>
			</div>
			<hr
				style={{
					border: "none",
					height: "1px",
					backgroundColor: "#333",
					margin: "1rem 0",
				}}
			/>
			<p
				style={{
					textAlign: "center",
					fontSize: "0.875rem",
					color: "#6b7280",
					paddingTop: "1rem",
				}}
			>
				© Copyright 2023. Made by Donnie Avant
			</p>
		</footer>
	);
}
