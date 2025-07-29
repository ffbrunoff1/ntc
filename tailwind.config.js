/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#56A9DC', // NTC Blue
        secondary: '#1E3A8A', // Darker Blue for contrast
        accent: '#F3F4F6', // Light Gray for backgrounds
        'dark-text': '#111827', // Almost black for text
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        modern: '0 10px 30px -15px rgba(86, 169, 220, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
