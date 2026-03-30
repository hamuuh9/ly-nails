/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Beauty/Spa palette from UI UX Pro Max skill
        blush: {
          50: '#fef7f8',
          100: '#fdeef0',
          200: '#fadde1',
          300: '#f8e1e4',
          400: '#f5c4cb',
          500: '#e8b4b8',
          600: '#d4949a',
          700: '#b86e76',
          800: '#9a5a62',
          900: '#814c53',
        },
        sage: {
          50: '#f2f8f4',
          100: '#e0f0e6',
          200: '#c3e2ce',
          300: '#a8d5ba',
          400: '#82c09d',
          500: '#5fa87d',
          600: '#4a8a66',
          700: '#3d6f54',
          800: '#345945',
          900: '#2c493a',
        },
        cream: {
          50: '#fffbf7',
          100: '#fff5ed',
          200: '#ffecd8',
          300: '#fff0e1',
          400: '#f5e6d3',
          500: '#f0dcc4',
          600: '#e5c9a8',
          700: '#d4a57a',
          800: '#b8875a',
          900: '#956e48',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#f5c518',
          500: '#d4af37',
          600: '#b8960c',
          700: '#8b6914',
          800: '#735712',
          900: '#5c4610',
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#3d3d3d',
          900: '#2D3436',
        },
        // Keep rose for CTAs/accents
        rose: {
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(232, 180, 184, 0.15)',
        'soft-lg': '0 8px 30px rgba(232, 180, 184, 0.2)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'gentle-pulse': 'gentlePulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gentlePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
