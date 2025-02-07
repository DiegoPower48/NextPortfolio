import { button } from "framer-motion/client";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Background: "var(--background)",
        foreground: "var(--foreground)",

        Theme: "var(--theme)",
        Hover: "var(--hover)",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
} satisfies Config;
