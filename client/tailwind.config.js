/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        componentbg: "#080B25",
        bg: "#221B6D",
        icon: "522EF5"

      },
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"']
      }
    },
  },
  plugins: [],
}

