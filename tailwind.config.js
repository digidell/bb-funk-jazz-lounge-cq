/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: '#121212', // Deep blacks for nightlife [cite: 412]
        gold: '#D4AF37',     // Gold highlights [cite: 494]
        amber: '#FFBF00',    // Warm amber tones [cite: 493]
        cream: '#F5F5F7',    // Modern sans-serif text [cite: 498]
        'jazz-red': '#8B0000' // Deep red accents [cite: 495]
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // For elegant headers [cite: 497]
        sans: ['Inter', 'sans-serif'],           // For modern body text [cite: 498]
      }
    },
  },
  plugins: [],
}