module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'text-color': 'var(--text-color)',
        'accent-color': 'var(--accent-color)',
        'color-color': 'var(--bg-color)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
