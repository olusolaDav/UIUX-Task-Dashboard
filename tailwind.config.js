/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1280px",
        // => @media (min-width: 1024px) { ... }

        xl: "1440px",
        // => @media (min-width: 1280px) { ... }

        xxl: "1920px",
        // => @media (min-width: 1536px) { ... }
      },
      flex: {
        2: "1 0 0%",
        3: "0 0 27.2rem",
      },
      colors: {
        primary: "#1D1042",
        onPrimary: "#703EFE",
        bgGray: "#F9FAFB",
        secondaryGreenLight: "#8BC488",
        secondaryOrange: "#FF5F37",
        labelColor: "#F4F6F8",
        bgPink: "#FBC7E0",
        bgButter: "#D9D3CE",
        bgGreen: "#597474",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
