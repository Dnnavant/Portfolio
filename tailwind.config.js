/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"background-dark": "#0d0d14",
				"background-light": "#ffffff",
				"background-card": "#1f2937",
				primary: "#10b981",
				"primary-hover": "#0d9268",
				secondary: "#1c64ec",
				"secondary-hover": "#1a56d9",
				"text-primary": "#ffffff",
				"text-secondary": "#9ca3af",
				"text-muted": "#9ca3af",
				accent: "#3b82f6",
				"border-color": "#374151",
				"border-light": "#333",
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
			},
			animation: {
				"fade-in": "fadeIn 0.5s ease-in-out",
				"slide-up": "slideUp 0.5s ease-out",
			},
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
	plugins: [],
};
