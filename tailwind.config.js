/** @type {import('tailwindcss').Config} */
export default {
	// Files to scan for Tailwind classes
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			// Custom color palette
			colors: {
				"background-dark": "#0d0d14", // Main background color
				"background-light": "#ffffff", // Light background color
				"background-card": "#1f2937", // Card background color
				primary: "#10b981", // Primary brand color
				"primary-hover": "#0d9268", // Primary hover state
				secondary: "#1c64ec", // Secondary brand color
				"secondary-hover": "#1a56d9", // Secondary hover state
				"text-primary": "#ffffff", // Primary text color
				"text-secondary": "#9ca3af", // Secondary text color
				"text-muted": "#9ca3af", // Muted text color
				accent: "#3b82f6", // Accent color
				"border-color": "#374151", // Border color
				"border-light": "#333", // Light border color
			},
			// Custom font family
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
			},
			// Custom animations
			animation: {
				"fade-in": "fadeIn 0.5s ease-in-out",
				"slide-up": "slideUp 0.5s ease-out",
			},
			// Custom keyframes for animations
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
			},
		},
	},
	// Tailwind plugins
	plugins: [],
};
