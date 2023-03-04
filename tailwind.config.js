/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-sefif"],
        fraunces: ["Fraunces", "serif"],
        babylonica: ["Babylonica", "cursive"],
      },
      colors: {
        "ppc-dark-cyan": "#3c8067",
        "ppc-dark-cyan-hover": "#1A4032",
        "ppc-cream": "#f2ebe3",
        "ppc-dark-blue": "#1c232b",
        "ppc-dark-gray-blue": "#6c7289",
      },
      backgroundImage: {
        "ppc-product-desktop":
          "url('/images/product-preview-card/image-product-desktop.jpg')",
        "ppc-product-mobile":
          "url('/images/product-preview-card/image-product-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
