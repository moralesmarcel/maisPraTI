// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // vamos usar classe 'dark' no <html>
  theme: {
    extend: {
      colors: {
        primary: "#f59e0b",
        skeleton: "#e5e7eb",
        "skeleton-dark": "#374151"
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.15)",
        cardDark: "0 4px 12px rgba(0,0,0,0.6)"
      }
    }
  },
  plugins: [],
};
