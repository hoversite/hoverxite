# Eval engineering (Harbor + LangChain skill)

Status: **reference + future work** (2026-07-22 release).  
Purpose: durable links and takeaways so we build agent quality the same way
production agent teams are converging — not a one-shot demo.

## Primary sources (link these)

| What | URL |
|------|-----|
| **Announcement (X)** | https://x.com/vtrivedy10/status/2079976006644072796 |
| **Blog** | https://www.langchain.com/blog/towards-automating-eval-engineering |
| **Skill source** | https://github.com/langchain-ai/langchain-skills/tree/main/config/skills/eval-engineering |
| **Skill entry** | https://github.com/langchain-ai/langchain-skills/blob/main/config/skills/eval-engineering/SKILL.md |
| **Skills monorepo** | https://github.com/langchain-ai/langchain-skills |
| **Harbor** (eval harness) | https://github.com/harbor-framework/harbor · docs: https://www.harborframework.com/docs/tasks |
| Related: agents as data mining | https://www.langchain.com/blog/improving-agents-is-a-data-mining-problem |
| Related: Harbor × LangChain stack | https://www.langchain.com/blog/unified-stack-for-evaluating-agents |

Author: Vivek Trivedy ([@Vtrivedy10](https://x.com/vtrivedy10)), applied research @ LangChain Labs.

## What shipped

An **Eval Engineering Skill** for coding agents (Codex, Claude Code, etc.). It:

1. **Maps the agent surface** in a repo — prompts, models, tools, skills, hooks, backing APIs.
2. Optionally **mines traces** (e.g. via LangSmith CLI) for real tool args, results, and errors.
3. **Interviews the user** to pick eval directions and which tools run live vs simulated.
4. Emits executable evals in **Harbor format**.

### Harbor task shape

```text
evals/<task-id>/
├── task.toml
├── instruction.md      # message given to the agent
├── environment/        # Dockerfile + setup (tools, fixture data)
└── tests/              # verifier that scores success
```

Harbor runs the agent in that environment and records trajectory, artifacts,
reward, and errors. Same task can be re-run against different models, prompts,
tools, or agent versions.

## Why it matters for Hoverxite

Hoverxite’s product *is* an agent that mutates real site projects. Demo-quality
is not enough; we need a **fixed target** when we change clone fidelity, agent
prompts, tools, or models.

The loop we should adopt:

```text
mine traces → identify a failure → build an eval → improve the agent → rerun
```

Implications for this repo:

| Practice | How it applies here |
|----------|---------------------|
| Interview-driven evals | Don’t one-shot “score the clone”; agree with humans what abilities matter (layout fidelity, asset localization, SEO basics, safe publish, etc.). |
| Live vs simulated tools | Firecrawl / LLM calls cost money; production publish writes — simulate those in evals; keep filesystem + verifier local. |
| Inspect both trajectories | When a verifier fails, read agent trajectory *and* verifier reasoning to catch reward hacks (fake success, leaked answers, over-claiming tools). |
| Containerized environments | Prefer Harbor (or Harbor-compatible) tasks under `evals/` once the agent loop exists — stable env, swap agent config. |
| Evals as training data | Harness engineering (prompts, skills, tools) and later fine-tunes aim at the same suite. |

## When to act (not yet)

Do **not** block v0.1 (import → agent → preview → export) on a full Harbor suite.

**After** the first agent loop ships:

1. Install the skill into a coding agent: see [langchain-skills README](https://github.com/langchain-ai/langchain-skills).
2. Open this repo, optionally point at real run traces under `.hoverxite/` (once we emit them).
3. Prompt roughly: *Use the eval-engineering skill to create an eval with me.*
4. Check in approved Harbor tasks under `evals/` (open-core: no customer data, no private cloud secrets).

## Install sketch (upstream)

From LangChain’s docs (subject to change — prefer their README):

```bash
# skills monorepo — install into a coding agent / project that supports Agent Skills
# https://github.com/langchain-ai/langchain-skills
npx skills add langchain-ai/langchain-skills
# then select eval-engineering, or follow install.sh in that repo
```

## Checklist when designing an eval

- [ ] Ability under test is named in plain language
- [ ] Instruction does not leak the verifier’s golden answer
- [ ] Costly / production-write tools are simulated
- [ ] Verifier cannot be gamed by proxy behavior
- [ ] Task runs in isolation (container / clean workspace)
- [ ] Linked from this doc’s “Primary sources” when we adopt a new external standard

## Changelog of this note

- 2026-07-23 — Captured from [@Vtrivedy10 announcement](https://x.com/vtrivedy10/status/2079976006644072796) + LangChain blog; linked skill + Harbor.
