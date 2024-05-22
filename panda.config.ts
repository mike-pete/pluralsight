import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    tokens: {
      colors: {
        gray: {
          100: { value: "#F3F3F8" },
          900: { value: "#130F25" },
        },
        pink: {
          600: { value: "#e0218a" },
          500: { value: "#f143ab" },
        },
      },
      fonts: {
        Bartex: {
          value: "var(--font-bartex), sans-serif",
        },
      },
    },
    semanticTokens: {
      colors: {
        neutral: {
          "surface-inverse": { value: "{colors.gray.100}" },
          "text-inverse": { value: "{colors.gray.900}" },
        },
        barbie: {
          600: { value: "{colors.pink.600}" },
          500: { value: "{colors.pink.500}" },
        },
      },
      fonts: {
        barbie: { value: "{fonts.Bartex}" },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
