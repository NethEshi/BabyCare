/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      colors: {
        'ATpurple' : '#6B3CC9',
        'ATskyblue' : '#1CBDDD',
        'ATlightgreen' : '#4DCA79',
        'ATdarkgreen' : '#78BF91',
        'ATorange' : '#F28D35',
        'ATlightpurple' : '#FAF8FF',
        'ATsilver' : '#6F6C90',
        'ATblack' : '#2F2F2F',
        'ATwhite' : '#FFF8E0',
        'NavyBlue': '#0D2B71',
        'LightBlue' : '#EBF1FF',
        'LBlue' : '#2458D2',
        'Ash' : '#4E4E4E',
        'light-pink' : "#F4F7FE",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'spinOneRoundClockwise' : 'spin 1s linear 0.25',
      }
    },
    fontSize: {
      xs: ["14px"],
      "2xl": ["16px"],
      "3xl": ["18px"],
      "4xl": ["32px"],
      "5xl": ["48px"],
      "6xl": ["58px"],
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    
  ],
};
