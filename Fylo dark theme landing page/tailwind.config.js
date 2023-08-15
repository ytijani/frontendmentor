/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding : "20px"
      },
      screens : {
        sm: "576px",
        md : "768px",
        lg :"992px",
        xl : "1200px",
        xxl :"1400px"
      },
      keyframes : {
        moveRight : {
          "0%" : {transform : "translateX(0)"},
          "50%" : {transform : "translateX(30px)"},
          "100%" : {transform : "translateX(0)"}
        }
      },
      animation : {
        moveRight : "moveRight 1s ease-in-out infinite",
      },
      colors :
      {
        mainBackground :" hsl(218, 28%, 13%)",
        footerBackground: "hsl(216, 53%, 9%)",
        Blue : "hsl(198, 60%, 50%)",
        Cyan : "hsl(176, 68%, 64%)",
        Light : "hsl(0, 0%, 100%)",
        primary: "#67dbda"
      },
    },
  },
  plugins: [],
}