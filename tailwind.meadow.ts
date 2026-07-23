/**
 * Hoverxite Design System — "Meadow" v1 Tailwind tokens
 *
 * Drop-in for tailwind.config.ts:
 *
 *   import { meadow } from "./tailwind.meadow";
 *
 * All colors reference CSS variables in styles/design-system/tokens.css,
 * so `class="light"` on <html> re-themes everything.
 *
 * Usage:
 *   bg-ink text-text
 *   bg-surface border border-edge
 *   bg-mint text-on-mint rounded-button
 *   bg-mint-tint text-mint rounded-pill
 *   font-display / font-sans / font-mono
 */

export const meadow = {
  colors: {
    ink: "var(--ink)",
    surface: "var(--surface)",
    "surface-raised": "var(--surface-raised)",

    edge: "var(--border)",
    "edge-strong": "var(--border-strong)",

    text: "var(--text)",
    "text-secondary": "var(--text-secondary)",
    "text-muted": "var(--text-muted)",

    mint: "var(--mint)",
    "mint-hover": "var(--mint-hover)",
    "mint-deep": "var(--mint-deep)",
    honey: "var(--honey)",
    clay: "var(--clay)",

    "mint-tint": "var(--mint-tint)",
    "honey-tint": "var(--honey-tint)",
    "clay-tint": "var(--clay-tint)",
    "neutral-tint": "var(--neutral-tint)",

    "on-mint": "var(--on-mint)",
  },

  fontFamily: {
    display: ["Bricolage Grotesque", "sans-serif"],
    sans: ["Instrument Sans", "sans-serif"],
    mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
  },

  borderRadius: {
    input: "var(--radius-input)",
    button: "var(--radius-button)",
    card: "var(--radius-card)",
    pill: "var(--radius-pill)",
  },

  boxShadow: {
    floating: "var(--shadow-floating)",
  },
} as const;
