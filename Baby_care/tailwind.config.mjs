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
        'NavyBlue': '#0040C1',
        'LightBlue' : '#EBF1FF',
        'LBlue' : '#2458D2',
        'Ash' : '#4E4E4E',
        'light-pink' : "#F4F7FE",
        'normal-pink' : "#C9D9FC",
        'disable-gray' : "D1D1D1",
        'blueF' : '#0D2B71',
        'margin-blue' : '#DDE3F0',
        'white' : '#FFFFFF',
        'margin' : '#CCCCCC'
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
      "xs" : ["12px"],
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
