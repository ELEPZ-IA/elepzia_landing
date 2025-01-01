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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-gradient-start': '#F38E79',
        'custom-gradient-mid': '#FFEB9E',
        'custom-gradient-end': '#B2CFF8',
      },
    },
  },
  plugins: [],
} satisfies Config;
