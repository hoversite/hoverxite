# External references shelf

**Purpose:** one place for third-party tools, posts, skills, and products we
might rely on later. Not product docs for Hoverxite itself — those stay in
`VISION.md`, `OPEN-CORE.md`, `DESIGN.md`, and other top-level docs.

When you find something important (a tweet, a skill, a SaaS, a paper):

1. Add a short note under `docs/references/<slug>.md` (template below).
2. Register it in the **Index** table in this file.
3. Link from here — do not scatter one-off “we should look at X” only in chat.

Scrape caches and raw dumps stay in `.firecrawl/` (gitignored). Only
**curated notes + durable URLs** belong in git.

## Index

| Slug | What | Status | Note |
|------|------|--------|------|
| [eval-engineering](./eval-engineering.md) | LangChain Eval Engineering Skill → Harbor evals | watch / adopt after agent loop | [X announcement](https://x.com/vtrivedy10/status/2079976006644072796) |
| [monid](./monid.md) | Monid — agent gateway to 1600+ data tools | watch / optional enrichment | [monid.ai](https://monid.ai/) |

**Status vocabulary**

| Status | Meaning |
|--------|---------|
| `watch` | Interesting; do not block product on it |
| `evaluate` | Spike or compare before choosing |
| `adopt` | We intend to use it in product or workflow |
| `rejected` | Looked at; not for us (keep note so we remember why) |

## Note template

```markdown
# <Name>

Status: **watch** · captured YYYY-MM-DD  
Shelf: [docs/references/](./README.md)

## Primary links

| What | URL |
|------|-----|
| Home | https://... |

## What it is

One short paragraph.

## Why it might matter for Hoverxite

Bullets.

## When to use / not use

- Use when …
- Avoid when …

## Open questions

-
```

## Related in-repo docs

- Product north star: [VISION.md](../../VISION.md)
- Open vs closed: [OPEN-CORE.md](../../OPEN-CORE.md)
- Roadmap: [roadmap.md](../roadmap.md)
