import "./ContactMe.css";
import { useState } from "react";

// Contact form component
function ContactMe() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// Add your form submission logic here
			console.log(formData);
			// Reset form after successful submission
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	};

	return (
		<div className="contact-container">
			{/* Contact heading */}
			<h2 className="contact-heading">Get in Touch</h2>
			<p className="contact-description">
				Have a question or want to work together? Feel free to reach out!
			</p>

			{/* Contact form */}
			<form onSubmit={handleSubmit} className="contact-form">
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						className="form-input"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						className="form-input"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						rows="4"
						className="form-textarea"
					></textarea>
				</div>

				<div>
					<button type="submit" className="submit-button">
						Send Message
					</button>
				</div>
			</form>

			{/* Alternative contact method */}
			<div className="alternative-contact">
				<p>Or reach out directly via email:</p>
				<a href="mailto:your.email@example.com" className="email-link">
					your.email@example.com
				</a>
			</div>
		</div>
	);
}

export default ContactMe;
