/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d5a4a',
          light: '#3d6a5a',
        },
        secondary: '#d4a574',
        accent: '#e8b4b8',
        sage: '#8fa99a',
        cream: {
          DEFAULT: '#f9f7f4',
          dark: '#ede9e4',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
