# Hoverxite

**Open-source AI agent for real websites.**

Import a public site into a project you own, edit it with an agent (bring your
own model keys), preview locally, and export to your git remote.

> Status: **public scaffold**. v0.1 engine (import → agent → preview → export)
> is next. Read [VISION.md](./VISION.md) and [OPEN-CORE.md](./OPEN-CORE.md).

## Why

Closed “site growth” products rebuild or manage your marketing site but keep
you on their platform. Hoverxite is the open engine: **you keep the files**.
Managed hosting can live as a separate cloud product; this repo stays
self-hostable.

## Open core

| Open (this repo) | Closed (Hoversite cloud) |
|------------------|---------------------------|
| Import / clone to disk | Multi-tenant edge + custom domains |
| Agent loop + local sandbox | Managed workers & sandboxes |
| Local preview + git export | Billing, teams, SSO |
| Self-host docs | Production ops & customer data |

We can open more later; see [OPEN-CORE.md](./OPEN-CORE.md).

## Quick start

```bash
git clone https://github.com/hoversite/hoverxite.git
cd hoverxite
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Optional keys for upcoming features: copy [`.env.example`](./.env.example) to
`.env.local`.

## Stack

- TypeScript + Next.js (App Router)
- Local-first data under `.hoverxite/` (gitignored) as features land
- Apache License 2.0

## Repo map

```text
app/            Landing + docs shell
components/     UI (as it lands)
lib/            Import, agent, sandbox, export
docs/           Design notes
OPEN-CORE.md    Open vs closed boundary
VISION.md       Product north star
AGENTS.md       Instructions for coding agents
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Please respect the open-core
boundary — no secrets, no competitor mirrors, no private cloud dumps.

## License

[Apache License 2.0](./LICENSE)

## Related

- Private product / cloud: [hoversite/hoversite](https://github.com/hoversite/hoversite) (not this repo)
