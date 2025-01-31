/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#f05500", 
        accentDark: "#08d4bf",
        gray: "#747474",
      },
      fontFamily: {
        in: ["var(--font-in)"], 
        mr: ["var(--font-mr)"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};