//** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FDFEFE",
        secondary: "#1B1F24",
        primAccent: "#00C39A",
        secAccent: "rgba(0, 195, 154, 0.3)",
        dimBlack: "rgba(0, 0, 0, 0.7)",
        dimPrimAccent: "rgba(0, 195, 154, 0.2)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      transitionTimingFunction: {
        'btn-trans': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
      }
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1920px'
    }
  },
  plugins: [],
}
