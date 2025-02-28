import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './animations/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1500px',
      '3xl': '1921px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4D7867',
          light: '#BEC69E',
        },
        secondary: {
          DEFAULT: '#F19384',
          light: '#F5B5A6',
        },
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'Montserrat'],
      },
      keyframes: {
        heart: {
          '0%': {
            transform: 'scale(0.90)',
          },
          '50%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(0.90)',
          },
        },
        // Animation pop-in
        popIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        heart: 'heart 1s ease-in-out infinite',
        // Ajout de l'animation pop-in
        popIn: 'popIn 1s ease-out forwards',
      },
      maxWidth: {
        '9/10': '90%',
        '8/10': '80%',
      },
    },
  },
  plugins: [],
};

export default config;
