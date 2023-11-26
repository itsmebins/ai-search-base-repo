/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin')
/*  
If you override a color then you do not get get default colors
colors: {
  'blue': '#1fb6ff',
  'purple': '#7e5bef',
  'pink': '#ff49db',
  'orange': '#ff7849',
  'green': '#13ce66',
  'yellow': '#ffc82c',
  'gray-dark': '#273444',
  'gray': '#8492a6',
  'gray-light': '#d3dce6',
  'red': {
    600: '#e53935'
  }
}, */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-bg-patterns"),
    require('tailwindcss/plugin'),
    require("daisyui"),
    function ({addComponents}) {
      addComponents({
          '.test-btn1': {
            padding: "6px 16px",
            minWidth: "64px",
            boxSizing: "border-box",
            transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            fontWeight: "900",
            borderRadius: "6px",
            textTransform: "none",
              '&:hover': {
                "@apply border-primary bg-primary text-primary-content": {}
              },
              '&-primary': {
                "@apply border-primary bg-primary text-primary-content outline-primary" : {},
                "&:hover": {
                  "@apply border-primary-focus bg-primary-focus": {}
                }
              }
          },
      })
    }
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#099d84",
          pdark: "#06705b",
          secondary: "#06705b",
          neutral: "#F9FAFB",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
