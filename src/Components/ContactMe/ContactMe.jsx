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
			className="max-w-2xl mx-auto"
		>
			<h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
			<p className="text-gray-400 mb-8">
				Have a question or want to work together? Feel free to reach out!
			</p>

			<form onSubmit={handleSubmit} className="space-y-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<label htmlFor="name" className="block text-sm font-medium mb-2">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 text-white"
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<label htmlFor="email" className="block text-sm font-medium mb-2">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 text-white"
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<label htmlFor="message" className="block text-sm font-medium mb-2">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						rows="4"
						className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 text-white resize-none"
					></textarea>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<button
						type="submit"
						className="w-full bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
					>
						Send Message
					</button>
				</motion.div>
			</form>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
				className="mt-12 text-center text-gray-400"
			>
				<p>Or reach out directly via email:</p>
				<a
					href="mailto:your.email@example.com"
					className="text-white hover:text-gray-300 transition-colors"
				>
					your.email@example.com
				</a>
			</motion.div>
		</motion.div>
	);
}

export default ContactMe;
