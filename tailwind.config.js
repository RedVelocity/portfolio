module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#d34c52',
          lighter: '#ed99ab',
          default: '#d2002e',
        },
        secondary: '#ffcc01',
      },
      spacing: {
        0.5: '0.125rem',
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
    },
  },
  variants: { backgroundColor: ['responsive', 'hover', 'focus', 'disabled'] },
  plugins: [],
};
