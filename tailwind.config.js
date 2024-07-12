/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        magenta: "#992E9D",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      boxShadow: {
        "3xl": "0px 8px 48px -10px #992E9D80",
        "4xl": "0px 16px 36px -10px #9849FF40",
      },
      borderRadius: {
        "4xl": "32px"
      }
    },
  },
  plugins: [],
};
