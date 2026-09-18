/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: '#0E7490', light: '#06B6D4', deep: '#164E63' },
        orange: { DEFAULT: '#F97316', gold: '#FBBF24' },
        sand: { DEFAULT: '#FAF7F2', ivory: '#F5EFE4' },
        stone: '#1E293B',
        night: '#0F172A',
        reef: '#082F49',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'wave': 'wave 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        wave: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
        float: { '0%,100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-10px) rotate(2deg)' } },
        shimmer: { '0%': { backgroundPosition: '-1000px 0' }, '100%': { backgroundPosition: '1000px 0' } },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
