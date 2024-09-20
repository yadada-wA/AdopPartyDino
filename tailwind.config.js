/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    './*.html',

  ],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: "fadeOut 5s ease-in-out",
        "fade-right": "fadeRight 1s ease-in-out",
        "fade-up": "fadeUp 1s ease-in-out",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.red.300") },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
        fadeRight: {
          "0%": { transform: "translateX(-100px)", opacity: 0 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
        fadeUp: {
          "0%": { transform: "translateY(-100px)", opacity:0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
