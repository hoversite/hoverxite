# Open-core boundary

Hoverxite is **open core**. This file is the contract for what belongs in
this public repository versus what stays in the private Hoversite cloud.

We can open more later. Prefer starting **narrow and clean** over dumping
private product code.

## Open in this repo (Apache-2.0)

Capabilities a self-hoster must be able to run on their own machine or VPS:

| Capability | Status |
|------------|--------|
| Site import / clone → real project files | Planned (v0.1) |
| Agent loop that edits those files (BYOK models) | Planned (v0.1) |
| Local sandbox + local preview | Planned (v0.1) |
| Export / push to the user's own git remote | Planned (v0.1) |
| Self-host docs, examples, public skills | Planned |
| Product UI for the workbench (chat, files, preview) | Planned |
| Design system for the open product | Planned |

## Closed (private Hoversite cloud / ops)

Do **not** commit these here. They live in private infrastructure and the
private product repo:

| Capability | Why closed |
|------------|------------|
| Multi-tenant edge hosting, TLS, custom domains | SaaS moat + revenue |
| Managed worker fleet / managed sandboxes on our bill | Cost + isolation |
| Billing, teams, SSO, usage metering | Commercial product |
| Production deploy runbooks, real IPs, customer data | Ops + security |
| Competitive intelligence mirrors and field notes | Legal + strategy |
| Production secrets and partner API accounts | Security |

## Gray zone (default: closed until we choose otherwise)

- Full multi-site orchestration across many customer hostnames
- Production-grade routing rules engine for shared edge
- Domain registration / reselling
- Proprietary prompt corpora and private evals against competitors

When we promote something from closed → open, update this table in the same PR.

## Porting rule of thumb

From private reference code:

- **OK:** reimplement algorithms you understand; strip secrets, customer data, competitor captures, and brand-specific deploy config.
- **Not OK:** wholesale export of private hosting, edge, billing, or competitor research trees.
- **Prefer:** thin greenfield in this repo over large copy-paste from private sources.

## Monetization (honest split)

- **Free / open:** engine — import, agent, preview, export, self-host.
- **Paid (cloud):** managed runtime — hostnames, domains, sandboxes, teams, SLA.

## Related

- Product north star: [VISION.md](./VISION.md)
- Agent instructions for contributors and Grok Build: [AGENTS.md](./AGENTS.md)
