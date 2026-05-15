/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#0a0a0a',       // Deep black/charcoal
        'amber-warm': '#c9a26c',     // Gold/Amber highlight
        'cognac': '#8b5a2b',         // Deep leather tone
        'burgundy': '#5c1a1a',       // Deep red accent
        'cream': '#e8e0d5',          // Soft text color
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans': ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}