/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Grotesk', 'monospace'],
      },
      colors: {
        space: {
          950: '#030712',
          900: '#090d16',
          800: '#111827',
        }
      }
    },
  },
  plugins: [],
}
