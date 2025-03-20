import "./ContactMe.css";

// Contact form component
function ContactMe() {
	// Handle form submission
	function handleSubmit(event) {
		event.preventDefault();
		const formData = {
			name: document.getElementById("name").value,
			email: document.getElementById("email").value,
			message: document.getElementById("message").value,
		};

		// Add your form submission logic here
		console.log(formData);
	}

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
						required
						className="form-input"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						name="message"
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
