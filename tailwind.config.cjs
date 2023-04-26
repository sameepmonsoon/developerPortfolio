module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "deep-blue": "#010026",
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        orange: "#FF8A27",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      screens: {
        sm: "576px",
        md: "960px",
        lg: "1440px",
      },
      fontFamily: {
        poppins: ["'poppins'", "sans-serif"],
      },
    },
    keyframes: {
      borderWave: {
        "0%": {
          borderRadius: " 40% 60% 70% 30% / 40% 40% 60% 50%",
        },
        "34% ": {
          borderRadius: "70% 30% 50% 50% / 30% 30% 70% 70%",
        },
        "67%": {
          borderRadius: "40% 50% 50% 50% / 40% 40% 60% 40%",
        },
        "100%": {
          borderRadius: " 40% 60% 70% 30% / 40% 40% 60% 50%",
        },
      },
      float: {
        "0%": {
          transform: "translatey(0px)",
        },
        "50% ": {
          transform: "translatey(-10px)",
        },

        "100%": {
          transform: "translatey(0px)",
        },
      },
      spin: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
      shake: {
        " 0% ": { transform: "translate(2px, 1px) rotate(0deg)" },
        "10%": { transform: "translate(-1px, -2px) rotate(-2deg)" },
        "20%": { transform: "translate(-3px, 0px) rotate(3deg) " },
        "30%": { transform: "translate(0px, 2px) rotate(0deg)" },
        "40%": { transform: "translate(1px, -1px) rotate(1deg) " },
        "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
        "60%": { transform: "translate(-3px, 1px) rotate(0deg) " },
        "70%": { transform: "translate(2px, 1px) rotate(-2deg) " },
        "80%": { transform: "translate(-1px, -1px) rotate(4deg)" },
        "90%": { transform: "translate(2px, 2px) rotate(0deg) " },
        "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
      },
      wobble: {
        "0%": {
          "-webkit-transform": "none",
          transform: "none",
        },
        "15%": {
          "-webkit-transform":
            "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -1deg)",
          transform: "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -1deg)",
        },
        "30%": {
          "-webkit-transform": "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 1deg)",
          transform: "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 1deg)",
        },
        "45%": {
          "-webkit-transform":
            "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -1deg)",
          transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -1deg)",
        },
        "60%": {
          "-webkit-transform": "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 1deg)",
          transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 1deg)",
        },
        "75%": {
          "-webkit-transform":
            "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",
          transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",
        },
        "100%": {
          "-webkit-transform": "none",
          transform: "none",
        },
      },
      bounce: {
        "0%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "translateY(0)",
          animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
        },
        "100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: " cubic-bezier(0.8, 0, 1, 1)",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
