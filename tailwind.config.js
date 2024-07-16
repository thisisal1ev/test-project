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
        bgWhite: "#F4F7FF",
        br: {
          goodzone: "#F50000",
          delever: "#FF5722",
          iman: "#01CAB0",
          sms: "#1B5BF7",
        },
      },
      maxWidth: {
        base: "1180px",
      },
    },
  },
  plugins: [],
};
