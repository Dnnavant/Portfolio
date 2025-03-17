import { motion } from "framer-motion";
import { useState } from "react";

function ContactMe() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your form submission logic here
		console.log(formData);
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			style={{ maxWidth: "42rem", margin: "0 auto" }}
		>
			<h2
				style={{
					fontSize: "1.875rem",
					fontWeight: "bold",
					marginBottom: "2rem",
				}}
			>
				Get in Touch
			</h2>
			<p style={{ color: "#9ca3af", marginBottom: "2rem" }}>
				Have a question or want to work together? Feel free to reach out!
			</p>

			<form
				onSubmit={handleSubmit}
				style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
			>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<label
						htmlFor="name"
						style={{
							display: "block",
							fontSize: "0.875rem",
							fontWeight: "500",
							marginBottom: "0.5rem",
						}}
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						style={{
							width: "100%",
							padding: "0.5rem 1rem",
							backgroundColor: "#1f2937",
							border: "1px solid #374151",
							borderRadius: "0.5rem",
							color: "white",
							outline: "none",
						}}
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<label
						htmlFor="email"
						style={{
							display: "block",
							fontSize: "0.875rem",
							fontWeight: "500",
							marginBottom: "0.5rem",
						}}
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						style={{
							width: "100%",
							padding: "0.5rem 1rem",
							backgroundColor: "#1f2937",
							border: "1px solid #374151",
							borderRadius: "0.5rem",
							color: "white",
							outline: "none",
						}}
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<label
						htmlFor="message"
						style={{
							display: "block",
							fontSize: "0.875rem",
							fontWeight: "500",
							marginBottom: "0.5rem",
						}}
					>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						rows="4"
						style={{
							width: "100%",
							padding: "0.5rem 1rem",
							backgroundColor: "#1f2937",
							border: "1px solid #374151",
							borderRadius: "0.5rem",
							color: "white",
							outline: "none",
							resize: "none",
						}}
					></textarea>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<button
						type="submit"
						style={{
							width: "100%",
							backgroundColor: "white",
							color: "black",
							padding: "0.75rem 1.5rem",
							borderRadius: "0.5rem",
							fontWeight: "500",
							border: "none",
							cursor: "pointer",
						}}
					>
						Send Message
					</button>
				</motion.div>
			</form>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
				style={{ marginTop: "3rem", textAlign: "center", color: "#9ca3af" }}
			>
				<p>Or reach out directly via email:</p>
				<a
					href="mailto:your.email@example.com"
					style={{ color: "white", textDecoration: "none" }}
				>
					your.email@example.com
				</a>
			</motion.div>
		</motion.div>
	);
}

export default ContactMe;
