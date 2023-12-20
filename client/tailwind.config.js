/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ADB5",
        bg: "#EEEEEE",
        text: "#393E46",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
      },
    },
  },
  plugins: [],
};
