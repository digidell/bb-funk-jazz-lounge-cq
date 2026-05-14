/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#1a1a1a',
        'amber-warm': '#d4a574',
        'cognac': '#8b6f47',
        'brass': '#c9a961',
        'burgundy': '#722f37',
        'cream': '#f5f0e8',
        'smoke': 'rgba(13,13,13,0.85)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'vinyl-gradient': 'radial-gradient(circle at 30% 30%, rgba(212,165,116,0.15) 0%, transparent 60%)',
        'harlem-overlay': 'linear-gradient(180deg, rgba(26,26,26,0.3) 0%, rgba(13,13,13,0.95) 100%)',
      },
      animation: {
        'slow-fade': 'fadeIn 2s ease-in-out',
        'vinyl-spin': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}