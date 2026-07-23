# Monid

Status: **watch / optional enrichment** · captured 2026-07-23  
Shelf: [docs/references/](./README.md)

Unified gateway so agents can **discover → inspect → run** hundreds of external
data endpoints (scrape, enrich, social, firmographics, etc.) through one API,
CLI, MCP, or agent skill — prepaid wallet, pay-per-call or pay-per-result.

## Primary links

| What | URL |
|------|-----|
| **Home** | https://monid.ai/ |
| **Tools catalog** | https://monid.ai/tools |
| **Docs index** | https://monid.ai/docs · machine index: https://monid.ai/docs/llms.txt |
| **How it works** | https://monid.ai/docs/guide/how-it-works |
| **Agent skill** | https://monid.ai/SKILL.md |
| **Skill setup guide** | https://monid.ai/docs/guide/quickstart-skill |
| **CLI quickstart** | https://monid.ai/docs/guide/quickstart-cli |
| **API quickstart** | https://monid.ai/docs/guide/quickstart-api |
| **MCP quickstart** | https://monid.ai/docs/guide/quickstart-mcp |
| **Pricing model** | https://monid.ai/docs/guide/pricing |
| **x402 / USDC pay** | https://monid.ai/docs/guide/pay-with-x402 |
| **Dashboard / API keys** | https://app.monid.ai · keys: https://app.monid.ai/access/api-keys |
| **X** | https://x.com/monid_ai |
| **Discord** | https://discord.gg/rQzztcgJV8 |
| **npm CLI** | `@monid-ai/cli` (`npm install -g @monid-ai/cli`) |

## What it is

Monid markets itself as “connect your agent to every tool it needs” — **1600+
tools** at capture time (Semrush, Apollo, social scrapers, Exa, Apify,
Browserbase, video/voice gen, etc.). Agents are steered with:

```text
set up https://monid.ai/SKILL.md
```

Core runtime loop:

1. **`discover`** — natural-language search for endpoints (e.g. “twitter posts”)
2. **`inspect`** — schema, output shape, price
3. **`run`** — execute with structured inputs

Access paths: **Skill**, **MCP**, **CLI**, **HTTP API**. Billing is prepaid
wallet (or x402 USDC), not a seat subscription; each endpoint is priced
`PER_CALL` or `PER_RESULT` (+ optional flat fee).

## Why it might matter for Hoverxite

| Use case | Fit |
|----------|-----|
| Enrich a pasted domain (company size, stack, social) for onboarding / pricing | Optional cloud or agent-tool path |
| Competitive / SEO context while the agent edits a marketing site | Nice-to-have skills, not core |
| Social / review scrapes for “rewrite homepage from real feedback” | Product skill later |
| Avoid maintaining N scraper API keys in OSS | BYOK or Monid wallet for power users |

**Not a substitute for** first-party site import (Firecrawl / own clone pipeline).
Monid is **horizontal tool mesh**; Hoverxite’s core is **own the site files**.

## When to use / not use

**Use when:**

- An agent turn needs *external* firmographic / social / SERP data
- We want discover-at-runtime tools without stuffing every API into context
- Eval environments need *simulated* paid tools (mirror Monid contracts in fixtures)

**Avoid when:**

- Building the open-core happy path (import → edit → preview → export) — keep zero hard dependency
- OSS self-hosters must work offline / BYOK only without a Monid account
- Competitor site *mirrors* or private intel dumps (still forbidden by open-core rules)

## Integration sketch (later)

```bash
# Agent-facing (from Monid docs)
# set up https://monid.ai/SKILL.md
npm install -g @monid-ai/cli
monid setup
monid keys add -k <API_KEY> -l main
monid discover "company firmographics"
monid inspect <endpoint-id>
monid run <endpoint-id> --input '...'
```

Env (if we ever wire product-side, optional):

```bash
# .env.example candidate — do not require for OSS core
# MONID_API_KEY=
```

Prefer calling Monid from **agent tools** (user’s key / wallet), not baking our
server-side Monid bill into free self-host.

## Relation to other shelf items

- [eval-engineering](./eval-engineering.md) — if we use Monid tools in the agent,
  Harbor evals should **simulate** paid Monid calls (live only for costly golden runs).

## Open questions

- [ ] Which Monid endpoints, if any, map cleanly to “slurp domain → company card”?
- [ ] Skill vs MCP vs direct HTTP for Grok Build / our agent worker
- [ ] Cost ceiling for a single site-import enrichment turn
- [ ] License / ToS constraints for redistributing Monid-derived data in exported sites

## Capture notes

Landing (2026-07-23): skill-first install, live tool count “1600+”, categories
include search intel, sales intel, social scraping, browser automation, generative
media. Docs emphasize small context via runtime discovery rather than preloading
every tool definition.
