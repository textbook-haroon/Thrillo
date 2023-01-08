module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed:'hsl(16, 81%, 48%)',
        brightRedLight: 'hsl(16, 56%, 45%)',
        brightRedSupLight:'hsl(12, 88%, 95%)',
        darkBlue:'hsl(228, 39%, 23%)',
        darkGreyishBlue: 'hsl(227, 12%, 13%)',
        veryDarkBlue: 'hsl(223, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGrey: 'hsl(0, 0%, 98%)',

      },
    },
  },
  plugins: [],
}
