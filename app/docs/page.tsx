import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-12">
      <div className="mb-8 flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/mark-dark.svg"
          alt=""
          width={28}
          height={28}
          className="h-7 w-7"
        />
        <Link
          href="/"
          className="font-display text-[1.05rem] font-bold tracking-[-0.01em] text-text hover:text-mint"
        >
          hoverxite
        </Link>
      </div>

      <p className="mb-6">
        <Link
          href="/"
          className="text-[13px] font-medium text-text-secondary hover:text-mint"
        >
          ← Home
        </Link>
      </p>

      <h1 className="title-h1 mb-3">Docs (repo-first)</h1>
      <p className="body-copy mb-8 text-[15px]">
        Canonical product docs live as markdown in the repository so agents and
        humans share one source of truth.
      </p>

      <div className="mb-4 rounded-card border border-edge bg-surface p-5">
        <h2 className="title-h2 mb-3">Start here</h2>
        <ol className="list-decimal space-y-2 pl-5 text-[14px] text-text-secondary">
          <li>
            <code className="font-mono text-[12px] text-mint">VISION.md</code> —
            north star and v0.1 scope
          </li>
          <li>
            <code className="font-mono text-[12px] text-mint">OPEN-CORE.md</code>{" "}
            — what is open vs closed
          </li>
          <li>
            <code className="font-mono text-[12px] text-mint">DESIGN.md</code> —
            Meadow design system
          </li>
          <li>
            <code className="font-mono text-[12px] text-mint">AGENTS.md</code> —
            rules for coding agents
          </li>
        </ol>
      </div>

      <div className="rounded-card border border-edge bg-surface p-5">
        <h2 className="title-h2 mb-2">Local setup</h2>
        <p className="body-copy">
          <code className="font-mono text-[12px]">
            npm install && npm run dev
          </code>{" "}
          — Meadow landing for now. Import / agent / preview land next.
        </p>
        <p className="body-copy mt-3">
          Design references: open{" "}
          <code className="font-mono text-[12px]">
            design/design-system.html
          </code>{" "}
          in a browser.
        </p>
      </div>

      <div className="mt-4 rounded-card border border-edge bg-surface p-5">
        <h2 className="title-h2 mb-2">Agent evals</h2>
        <p className="body-copy">
          Future quality loop: Harbor-format tasks from repo + traces. See{" "}
          <code className="font-mono text-[12px] text-mint">
            docs/eval-engineering.md
          </code>{" "}
          and the{" "}
          <a
            href="https://x.com/vtrivedy10/status/2079976006644072796"
            className="text-mint underline-offset-2 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            LangChain Eval Engineering announcement
          </a>
          .
        </p>
      </div>
    </main>
  );
}
