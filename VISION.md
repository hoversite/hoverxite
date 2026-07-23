# Hoverxite vision

## One-liner

An open-source AI agent that imports a real website, edits it in a sandbox,
and ships changes over time — so teams own their code.

## Problem

Marketing sites rot. Founders and agencies either (a) pay retainers for slow
manual edits, or (b) re-prompt a generic app builder that does not understand
their existing site. Closed “growth agents” lock you into someone else’s
hosting and repo.

## What we build

**Open core (this repo)**

1. **Import** a public URL into a real project on disk.
2. **Agent** that can read/edit that project with the user’s own model keys.
3. **Preview** locally (and later, simple self-host).
4. **Export** to the user’s git remote.

**Closed cloud (separate product, later or parallel)**

- Managed sandboxes, workers, and edge hosting
- Custom domains and multi-tenant control plane
- Billing, teams, support

## Real-world success

Not demo videos. Success looks like:

- Real sites imported and improved by non-authors
- Self-hosters running the open core with their own keys
- Paid users on managed hosting when they do not want ops

## v0.1 scope (first public milestone)

- Local-first, single user
- Paste URL → project files → chat edit → local preview → export
- No multi-tenant edge in this repo
- All new product code built with Grok Build + Grok 4.5 (program constraint)

## Non-goals for v0.1

- Cloning or mirroring any competitor’s product assets
- Full Ploy/Hoversite hosting parity
- Multi-tenant SaaS inside the open repo

## Name map

| Name | Role |
|------|------|
| **Hoverxite** | This open-source product and public repo |
| **Hoversite** | Org / private cloud product (proprietary) |

## Program note

Built as a real startup: useful product, real users, path to revenue.
Open-core is the distribution and trust strategy; cloud is the business model.

## Agent quality

After the agent loop exists, measure it with reproducible containerized evals
(Harbor format), preferably built with the upstream Eval Engineering skill from
repo context + traces. Links: [docs/references/eval-engineering.md](./docs/references/eval-engineering.md).

