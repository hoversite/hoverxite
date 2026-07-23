# AGENTS.md — Hoverxite

Instructions for humans and coding agents (including Grok Build) working in
this repository.

## Read first

1. [VISION.md](./VISION.md) — what we are building
2. [OPEN-CORE.md](./OPEN-CORE.md) — what may be open-sourced here

## Product

Hoverxite is the **open-source** site-import + agent + preview + export engine.
The private multi-tenant hosting/billing plane is **out of scope** for this
repo unless [OPEN-CORE.md](./OPEN-CORE.md) is updated first.

## Hard rules

- **Do not** commit secrets (API keys, tokens, `.env` with real values).
- **Do not** import competitor site mirrors, field notes, or private ops
  runbooks from other repos.
- **Do not** copy private hosting edge / billing / multi-tenant control plane
  code into this tree without an explicit open-core promotion decision.
- Prefer small, reviewable PRs. Behavior changes get a [CHANGELOG.md](./CHANGELOG.md)
  bullet under `## [Unreleased]`.
- All program product work is expected via **Grok Build TUI + Grok 4.5**.


## Design system

All product UI follows **DESIGN.md** (Meadow v1).

- `DESIGN.md` — rules and component recipes
- `styles/design-system/tokens.css` — CSS variables (dark default + light)
- `tailwind.meadow.ts` — Tailwind color / font / radius mappings
- `public/brand/` — mark and favicon
- `design/` — rendered HTML references

Import the design system once through `app/globals.css`. Use Meadow tokens or
Tailwind classes from `tailwind.meadow.ts`; never hardcode colors. No heat /
Firecrawl visual styles.

## Stack (v0 direction)

- TypeScript, Next.js App Router
- Local-first storage initially (filesystem under `.hoverxite/`; no required
  cloud control plane for the happy path)
- BYOK for models and optional scrape providers via env

## Local layout

```text
app/           Next.js routes and UI
components/    UI components
lib/           import, agent, sandbox, export (as they land)
docs/          design and architecture notes
.hoverxite/    local runtime data (gitignored)
```

## Commands

```bash
npm install
cp .env.example .env.local   # optional keys for later features
npm run dev
```

Do not run full production builds unless the user asks; prefer `npm run dev`
and targeted checks while iterating.

## When unsure

Default to **local, single-user, open-core**. Put “hosted cloud” ideas in
docs/roadmap language, not in a half-ported private stack.
