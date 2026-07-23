import type { Config } from "tailwindcss";
import { meadow } from "./tailwind.meadow";

// Opacity modifiers (bg-mint/30) need color-mix wrappers.
const meadowColors = Object.entries(meadow.colors).reduce(
  (acc, [key, value]) => {
    acc[key] = `color-mix(in srgb, ${value} calc(<alpha-value> * 100%), transparent)`;
    return acc;
  },
  {} as Record<string, string>
);

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: meadowColors,
      fontFamily: {
        display: ["var(--font-bricolage)", ...meadow.fontFamily.display],
        sans: ["var(--font-instrument)", ...meadow.fontFamily.sans],
        mono: ["var(--font-plex-mono)", ...meadow.fontFamily.mono],
      },
      borderRadius: {
        ...meadow.borderRadius,
      },
      boxShadow: {
        ...meadow.boxShadow,
      },
    },
  },
  plugins: [],
};

export default config;
