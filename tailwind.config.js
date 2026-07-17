/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070f",
          900: "#0a0e1a",
          800: "#0f1424",
          700: "#161c30",
          600: "#1e2640",
        },
        electric: {
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
        cyan: { 400: "#22d3ee", 500: "#06b6d4" },
        teal: { 400: "#2dd4bf", 500: "#14b8a6" },
        indigo: { 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5" },
        violet: { 400: "#a78bfa", 500: "#8b5cf6" },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(56,189,248,0.45)",
        glowSoft: "0 0 60px -20px rgba(99,102,241,0.4)",
        card: "0 20px 50px -20px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 28s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
