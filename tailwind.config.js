/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: {
        128: "32rem",
      },
      backgroundImage: {
        "check-icon": "url('/assets/images/icon-check.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest1: ".1em",
      widest: ".25em",
    },
  },
  plugins: [],
};
