# Hoverxite Design System — "Meadow" v1

Dark-first. Friendly open-source. An ink-green field where **mint marks the living things** —
agent progress, healthy previews, approvals — and everything else stays quiet. Follow this
document for all Hoverxite UI (workbench, landing, docs).

Meadow is shared with the private Hoversite product; this open repo is the canonical public
copy. Do not reintroduce heat orange, flame effects, or Firecrawl brand assets.

## 1. Brand

- **Name:** always lowercase `hoverxite` in the wordmark; "Hoverxite" in prose.
- **Mark:** two rounded rectangles — a mint "page" floating up-left of its ink shadow.
  Never rotate, outline, recolor, or put it in a container.
  - On dark: page `#5CE097`, shadow `#24352B`.
  - On light: page `#17A45C`, shadow `#C6D4CA`.
- **Wordmark:** Bricolage Grotesque 700, lowercase, letter-spacing −1%.
- Logo assets: `public/brand/mark-dark.svg`, `public/brand/mark-light.svg`,
  `public/brand/favicon.svg`.

## 2. Color tokens

Dark theme (default):

| Token              | Value     | Use |
|--------------------|-----------|-----|
| `--ink`            | `#0D1310` | page background |
| `--surface`        | `#16201A` | cards, panels, nav |
| `--surface-raised` | `#1C2820` | hover states, popovers, selected rows |
| `--border`         | `#24352B` | default hairlines, dividers |
| `--border-strong`  | `#33473B` | input borders, secondary button borders |
| `--text`           | `#EAF2EC` | primary text |
| `--text-secondary` | `#A8B8AD` | body copy, descriptions |
| `--text-muted`     | `#6E8377` | metadata, ids, timestamps |
| `--mint`           | `#5CE097` | primary actions, success, live, diff + |
| `--mint-deep`      | `#17A45C` | mint on light backgrounds |
| `--honey`          | `#E8C468` | pending, warnings |
| `--clay`           | `#F0776A` | errors, destructive |

Light theme — toggle with `class="light"` on `<html>`:

| Token | Light value | Note |
|-------|-------------|------|
| `--ink` | `#F4F7F4` | "paper" |
| `--surface` | `#FFFFFF` | |
| `--surface-raised` | `#EBF0EC` | |
| `--border` | `#DCE5DE` | strong: `#C2D0C6` |
| `--text` | `#131C16` | secondary `#4E5F55`, muted `#75857B` |
| `--mint` | `#17A45C` | text on mint is white |
| `--honey` | `#B98A16` | |
| `--clay` | `#D2493A` | |

Bright mint `#5CE097` survives on light only as progress fills and dots — never under text.

Tints: badge fills are the accent at **10% opacity**. Destructive buttons use clay 10% fill +
clay text — never solid red.

Rules:
- **Mint is earned, not decorative.** One mint (primary) action per view.
- Honey and clay appear only as status, never as decoration.
- No gradients except a single faint radial mint glow (≤9% opacity) on marketing heroes.
- No pure black or pure gray — all neutrals are green-tinted.

## 3. Typography

- **Bricolage Grotesque** — display + headings only. 600–700. Never below 19px.
- **Instrument Sans** — all UI and body text. 400 prose, 500 labels, 600 emphasis/buttons.
- **IBM Plex Mono** — machine-made content: routes, ids, hashes, diffs, timestamps.

Rule: **if a human wrote it, sans; if a machine made it, mono.**
Sentence case everywhere; ALL-CAPS only in mono status badges and tiny section eyebrows.

## 4. Spacing, radii, elevation

- Spacing scale (4px base): `4 8 12 16 24 32 48 64`.
- Radii: `6` inputs · `8` buttons · `12` cards · pill (`999`) badges.
- Elevation by **background + border step**, not shadows:
  rest = `--surface` / `--border`; raised = `--surface-raised` / `--border-strong`.
  Shadows only for detached elements (popovers, modals).

## 5. Core components

**Buttons** — 13px Instrument Sans 600.
- Primary: mint bg, ink text (`text-on-mint`), radius 8, padding 10×18. Hover `--mint-hover`.
- Secondary: transparent, `--border-strong` border, text `--text`.
- Ghost: no border, `--text-secondary`, hover raises bg.
- Destructive: clay 10% fill, clay text.

**Inputs** — sit on `--ink`, border `--border-strong`, radius 6. Focus = mint border, no glow.

**Status badges** — dot + mono CAPS + 10% tint. LIVE (mint) · PENDING (honey) · FAILED (clay) · DRAFT (neutral).

**Cards** — `--surface` bg, `--border` border, radius 12, padding 16–24.
Clickable cards: hover → mint border.

## 6. Agent artifacts

Cards the agent posts into chat share:

1. **Title row** — Bricolage 600 15px title left, mono id right.
2. **Body** — summary + mono facts/diff lines.
3. **Action row** — primary left, ghost secondary right.

Diff: `+` mint · `→` muted · `−` clay. Checks: `✓` mint · `△` honey · `✗` clay.

## 7. Voice

Plain-spoken, specific, calm. Buttons are verbs. Errors always offer a next step.
No emoji hype, no bare error codes.

## 8. For agents editing this repo

- Package: `DESIGN.md`, `styles/design-system/tokens.css`, `tailwind.meadow.ts`,
  `public/brand/`, `design/` reference HTML.
- Import `styles/design-system/index.css` (or tokens) once via `app/globals.css`.
- Use Meadow tokens / Tailwind classes; never hardcode new colors.
- Fonts: Bricolage Grotesque, Instrument Sans, IBM Plex Mono via `next/font` in `app/layout.tsx`.
- Live references: open `design/design-system.html` and `design/sample-screens.html` in a browser.
