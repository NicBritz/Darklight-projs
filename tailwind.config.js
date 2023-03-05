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
        "tdf-background":
          "linear-gradient(rgba(0,127,127,0.7), rgba(0,50,50,0.6)), url('/images/three-d-forms/background.jpeg')",
      },
      boxShadow: {
        "tdf-form":
          "1px 1px 1px rgba(100,255,255,1)  inset, -1px -1px 1px rgba(100,255,255,1) inset",
      },
      borderRadius: {
        "tdf-signup": "100% 0.5rem 0.5rem 100%",
        "tdf-signin": "0.5rem 100% 100% 0.5rem",
      },
    },
  },
  plugins: [],
};
