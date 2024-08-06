/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      lineHeight: {
        tight: "1.1rem",
      },
    },
    fontFamily: {
      hero: ["Inter", "BlinkMacSystemFont", "Arial", "sans-serif"],
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  },
  plugins: [],
};
