import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 5173,
		host: true, // This makes the server accessible from other devices
		open: true, // Automatically open the browser on server start
	},
});
