/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff1f0",
          100: "#ffe0dd",
          200: "#ffc6c1",
          300: "#ff9e95",
          400: "#ff6a59",
          500: "#ff3d26",
          600: "#f42008",
          700: "#cd1604",
          800: "#a91607",
          900: "#8b190e",
        },
        accent: {
          50: "#fff8ed",
          100: "#ffeed4",
          200: "#ffdaa8",
          300: "#ffbf71",
          400: "#ff9838",
          500: "#ff7b11",
          600: "#f06107",
          700: "#c74908",
          800: "#9e3a0f",
          900: "#7f3110",
        },
        surface: {
          50: "#f6f6f8",
          100: "#ecedf0",
          200: "#d5d7de",
          300: "#b1b4c1",
          400: "#878c9f",
          500: "#696e84",
          600: "#54586c",
          700: "#454858",
          800: "#3b3d4b",
          900: "#1a1b24",
          950: "#0a0a0f",
        },
      },
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #0a0a0f 0%, #1a1024 50%, #0a0a0f 100%)",
        "card-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #ff3d26 0%, #ff7b11 50%, #ff3d26 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
