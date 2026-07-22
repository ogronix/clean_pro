import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        accent: "#3B82F6",
        background: "#FFFFFF",
        foreground: "#111827",
        muted: "#6B7280"
      },

      borderRadius: {
        "4xl": "2rem"
      },

      boxShadow: {
        premium:
          "0 20px 60px rgba(15,23,42,0.08)"
      },

      animation: {
        float:
          "float 6s ease-in-out infinite"
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform:
              "translateY(0)"
          },
          "50%": {
            transform:
              "translateY(-10px)"
          }
        }
      }
    }
  },

  plugins: []
};

export default config;