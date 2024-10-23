/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
      },
      backgroundPosition: {
        "bottom-center": "bottom center",
      },
      screens: {
        xxs: { max: "414px" },
        "md-lg-portrait": {
          min: "768px",
          max: "1023px",
          orientation: "portrait",
        },
        "md-lg-landscape": {
          min: "768px",
          max: "1023px",
          orientation: "landscape",
        },
        "lg-portrait": {
          min: "1024",
          max: "1279",
          orientation: "portrait",
        },
      },
    },
  },
  plugins: [],
};
