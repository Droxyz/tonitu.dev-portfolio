/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'sm': '0.9rem',   // Small screens (default)
        'md': '1rem',     // Medium screens
        'lg': '1.1rem',   // Large screens
        'xl': '1.2rem',   // Extra-large screens
        '2xl': '1.4rem',  // Customize as needed
        '3xl': '1.6rem',  // Customize as needed
      },
    },
  },
  plugins: [],
  darkMode: "class",
};