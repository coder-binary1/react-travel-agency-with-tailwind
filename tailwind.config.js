module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/img/Decore.png')"
      },
      fontFamily: {
        GoogleSans: ["Open Sans"],
        Poppins: ["Poppins"],
        Volkhov: ["Volkhov"],
      },
      spacing: {
        '470': '470px',
        '535': '535px',
        '545': '545px',
        '764': '764px',
        '765': '765px'
      },
      lineHeight: {
        '90': '90px'
      }
    }
  },
  plugins: [],
}
