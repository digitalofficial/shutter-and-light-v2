import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        cream: "#FAF9F6",
        warm: "#B8B0A8",
        gold: "#C5A55A",
        smoke: "#1A1A1A",
        muted: "#888888",
        border: {
          dark: "#2A2A2A",
          light: "#E8E4DF",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-raleway)", "Helvetica Neue", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 8rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.15" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2" }],
      },
      spacing: {
        "section": "clamp(5rem, 12vw, 10rem)",
      },
      transitionDuration: {
        "1000": "1000ms",
        "1200": "1200ms",
        "1500": "1500ms",
      },
    },
  },
  plugins: [],
};

export default config;
