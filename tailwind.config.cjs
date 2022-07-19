module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#262626",
          red: "#EB3237",
          blood: "#D81B20",          
          zinc: {
            100: '#F8F8F8',
            200:'#858585', 
          }        
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}