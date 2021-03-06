module.exports = {
  purge: [],
  darkMode: false,
  fontSize: {
    'sm': '0.875rem',
    'base': '1rem',
    'lg': '1.25rem',
    'xl': '1.5rem',
    '2xl': '2.25rem', 
    '3xl': '3rem'
  },
  theme: {
    extend: {
      spacing: {
        'minor': '3.75rem',
        'major': '10.5rem'
      },
      width: {
        'logo-sm': '140px',
        'logo-lg': '200px'
      },
      height: {
        'page-lg': 'calc(100vh - 21rem)'
      },
      colors: {
        "dark": "#191414",
        "primary": "#1DB954",
        "text": "#FFFFFF"
      },
    },
  },
  plugins: [],
}
