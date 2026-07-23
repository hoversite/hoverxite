import Link from "next/link";

export default function DocsPage() {
  return (
    <main>
      <p>
        <Link href="/">← Home</Link>
      </p>
      <h1>Docs (repo-first)</h1>
      <p className="lead">
        Canonical product docs live as markdown in the repository so agents and
        humans share one source of truth.
      </p>
      <div className="card">
        <h2>Start here</h2>
        <ol>
          <li>
            <code>VISION.md</code> — north star and v0.1 scope
          </li>
          <li>
            <code>OPEN-CORE.md</code> — what is open vs closed
          </li>
          <li>
            <code>AGENTS.md</code> — rules for coding agents
          </li>
          <li>
            <code>CONTRIBUTING.md</code> — how to contribute
          </li>
        </ol>
      </div>
      <div className="card">
        <h2>Local setup</h2>
        <p>
          <code>npm install && npm run dev</code> — landing page only for now.
          Import / agent / preview land next.
        </p>
      </div>
    </main>
  );
}
