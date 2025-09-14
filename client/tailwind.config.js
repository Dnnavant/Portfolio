/**
 * Tailwind CSS configuration
 * - Scans our React files for class names
 * - Extends theme to add our brand colors and fonts
 */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e65c00',
        'primary-hover': '#cc5200',
        background: '#ffffff',
        foreground: '#0f172a',
        card: '#ffffff',
        border: '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
    },
  },
  plugins: [],
}

