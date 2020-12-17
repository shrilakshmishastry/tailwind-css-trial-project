module.exports = {
  purge: {
    enabled: true,
    content: [
      './**/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: "#ff6363",
        secondary:{
          100:"#e2e2d5",
          200:"#888883",
        }
      },
      fontFamily:{
        body:[
            'Andika New Basic'
        ]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
