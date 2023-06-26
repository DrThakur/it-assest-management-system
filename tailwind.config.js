/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        100: "28rem",
        104: "32rem",
        108: "36rem",
        112: "40rem",
      },
    },
  },
  plugins: [],
};
