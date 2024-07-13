/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1B5BF7",
        slate: "#464359",
        mainBlack: "#18191F",
        orange: "#FF5722",
        red: "#F50000",
        skyBlue: "#01CAB0",
        bgWhite: "#F4F7FF",
      },
    },
  },
  plugins: [],
};
