/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff0ee',
          100: '#ffdbd6',
          200: '#ffb3a8',
          300: '#ff8b7a',
          400: '#ff7254',
          500: '#ff5733', // Main primary color
          600: '#e83a17',
          700: '#c02a10',
          800: '#9d2410',
          900: '#7b2211',
        },
        secondary: {
          50: '#eef8ff',
          100: '#d9eeff',
          200: '#bce2ff',
          300: '#8bcefe',
          400: '#53b3fb',
          500: '#2f96f3', // Main secondary color
          600: '#1a7ad6',
          700: '#1866b3',
          800: '#1a5692',
          900: '#1c4978',
        },
        accent: {
          50: '#f0f9ff',
          100: '#dff2ff',
          200: '#b9e7fe',
          300: '#7dd6fe',
          400: '#39c2fa',
          500: '#0ca5e9',
          600: '#0086c8',
          700: '#006da3',
          800: '#055c87',
          900: '#0a4c6f',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-in-out',
        'fade-out': 'fade-out 0.4s ease-in-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
      },
    },
  },
  plugins: [],
};