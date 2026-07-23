import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative mx-auto max-w-2xl px-6 pb-24 pt-16">
      {/* faint mint hero glow — DESIGN.md §2 */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[28rem] -translate-x-1/2 rounded-full bg-mint/[0.09] blur-3xl"
      />

      <div className="relative">
        <div className="mb-8 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/mark-dark.svg"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-display text-[1.1875rem] font-bold tracking-[-0.01em]">
            hoverxite
          </span>
        </div>

        <span className="badge-status badge-status-live mb-5">Open core</span>

        <h1 className="title-display mb-4 text-balance">
          Import a site. Agent it. Own the code.
        </h1>

        <p className="body-copy mb-8 max-w-xl text-[1.05rem] leading-relaxed">
          Hoverxite is an open-source AI agent that pulls a real website into a
          project you control, edits it in a sandbox, and previews changes
          locally — without locking you into someone else&apos;s host.
        </p>

        <div className="mb-10 flex flex-wrap gap-3">
          <a
            href="https://github.com/hoversite/hoverxite"
            className="inline-flex items-center justify-center rounded-button bg-mint px-[18px] py-2.5 text-[13px] font-semibold text-on-mint transition-colors hover:bg-mint-hover"
          >
            GitHub
          </a>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-button border border-edge-strong px-[18px] py-2.5 text-[13px] font-semibold text-text transition-colors hover:bg-surface-raised"
          >
            Vision &amp; open-core
          </Link>
        </div>

        <div className="mb-4 rounded-card border border-edge bg-surface p-5">
          <h2 className="title-h2 mb-3">v0.1 path</h2>
          <ol className="list-decimal space-y-2 pl-5 text-[14px] leading-relaxed text-text-secondary">
            <li>Paste a public URL → project files on disk</li>
            <li>Chat with an agent (BYOK models) that edits those files</li>
            <li>Preview locally</li>
            <li>Export to your own git remote</li>
          </ol>
        </div>

        <div className="rounded-card border border-edge bg-surface p-5">
          <h2 className="title-h2 mb-2">Open vs hosted</h2>
          <p className="body-copy">
            The <strong className="font-semibold text-text">engine</strong>{" "}
            lives here: import, agent, preview, export, self-host. Managed
            hosting, custom domains, and multi-tenant cloud stay on the private
            Hoversite product — we open more over time.
          </p>
        </div>

        <p className="mt-12 border-t border-edge pt-6 font-mono text-[12px] text-text-muted">
          Meadow design system · Apache-2.0 · see{" "}
          <code className="rounded-input border border-edge bg-neutral-tint px-1.5 py-0.5">
            DESIGN.md
          </code>
        </p>
      </div>
    </main>
  );
}
