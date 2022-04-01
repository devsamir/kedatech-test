module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    extend: {
      colors: {
        primary: {
          50: '#f2fcff',
          100: '#e5faff',
          200: '#ccf4ff',
          300: '#b2efff',
          400: '#99e9ff',
          500: '#7fe4ff',
          600: '#72cde6',
          700: '#66b6cc',
          800: '#59a0b3',
          900: '#4c8999',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
