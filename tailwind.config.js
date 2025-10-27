/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },
      fontFamily: {
        futura: ['Montserrat', 'Futura Std', 'Futura', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        'glass': {
          DEFAULT: 'rgba(255, 255, 255, 0.25)',
          dark: 'rgba(30, 30, 36, 0.25)',
        }
      }
    },
  },
  plugins: [],
}