module.exports = {
  content: ['./src/**/*.{pug,js}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'text-color': 'var(--text-color)',
        'accent-color': 'var(--accent-color)',
        'color-color': 'var(--bg-color)'
      }
    },
    fontFamily: {
      sans: ['FSEX300', 'sans-serif']
    }
  },
  plugins: []
}
