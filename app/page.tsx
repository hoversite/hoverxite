export default function HomePage() {
  return (
    <main>
      <span className="badge">Open core · Apache-2.0</span>
      <h1>Import a site. Agent it. Own the code.</h1>
      <p className="lead">
        Hoverxite is an open-source AI agent that pulls a real website into a
        project you control, edits it in a sandbox, and previews changes
        locally — without locking you into someone else&apos;s host.
      </p>

      <div className="actions">
        <a
          className="button button-primary"
          href="https://github.com/hoversite/hoverxite"
        >
          GitHub
        </a>
        <a className="button button-ghost" href="/docs">
          Vision &amp; open-core
        </a>
      </div>

      <div className="card">
        <h2>v0.1 path</h2>
        <ol>
          <li>Paste a public URL → project files on disk</li>
          <li>Chat with an agent (BYOK models) that edits those files</li>
          <li>Preview locally</li>
          <li>Export to your own git remote</li>
        </ol>
      </div>

      <div className="card">
        <h2>Open vs hosted</h2>
        <p>
          The <strong>engine</strong> lives here: import, agent, preview,
          export, self-host. Managed hosting, custom domains, and multi-tenant
          cloud stay on the private Hoversite product — we open more over time.
        </p>
      </div>

      <p className="footer">
        Built in the open under Apache-2.0. See{" "}
        <code>OPEN-CORE.md</code> for the boundary.
      </p>
    </main>
  );
}
