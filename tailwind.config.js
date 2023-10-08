/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        floating: "floating 3s infinite linear",
        moving: "moving 30s infinite linear",
      },
      keyframes: {
        floating: {
          "50%": {
            transform: " translateY(-25px)  ",
          },
          "100%": {
            transform: " translateY(0)  ",
          },
        },
        moving: {
          "15%": {
            transform: "translateX(150px) rotate(90deg)",
            duration: "1000",
          },
          "30%": {
            transform: "translateY(-350px) rotate(180deg)",
            duration: "1000",
          },
          "45%": {
            transform: "translateX(-400px) rotate(360deg)",
            duration: "1000",
          },
          "60%": {
            transform: "translateY(-230px) translateX(-1000px) rotate(180deg)",
            duration: "1000",
          },
          "75%": {
            transform: "translateY(100px) translateX(-500px) rotate(90deg)",
            duration: "1000",
          },
          "100%": {
            transform: "translateX(0) rotate(0deg)",
            duration: "1000",
          },
        },
      },
      dropShadow: {
        "4xl": ["0px 0px 10px #1d4ed8 "],
        "5xl": ["-1px 1px 4px #1d4ed8 "],
      },
    },
  },
  plugins: [],
};
