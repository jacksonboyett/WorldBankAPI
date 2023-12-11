/** @type {import('tailwindcss').Config} */
export default{
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F0F2F5",
        darkBlueBg: '#3973E1',
        lightBlueBg: "#5896E8",
        darkGrayBg: "#1B1B1C",
        lightGrayBg: "#404047"
      },
      margin: {
          halfScreenWidth: 'calc(45vw - 120px)'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

