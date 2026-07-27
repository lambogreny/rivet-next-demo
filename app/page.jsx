// Logs on the server every time the home page is rendered, so the Rivet
// Logs tab shows real stdout output as you navigate.
export const dynamic = "force-dynamic";

export default function Home() {
  console.log(
    JSON.stringify({
      level: "info",
      msg: "home page rendered",
      route: "/",
      ts: new Date().toISOString(),
    }),
  );
  return (
    <>
      <h1 style={{ fontSize: 44, margin: "0 0 12px" }}>
        test 5555 Hello world (auto-deploy verified)  bom<span style={{ color: "#a78bfa" }}>from Rivet</span> 👋
      </h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, color: "#b8b8c6" }}>
        This is a Next.js app built from a Git commit, scanned, signed, and
        deployed by Rivet. Click around — every page render and API call writes
        a log line you can watch in the <strong>Logs</strong> tab, and the
        traffic shows up in <strong>Metrics</strong>.
      </p>
      <div
        style={{
          marginTop: 32,
          padding: 20,
          borderRadius: 14,
          background: "#14141d",
          border: "1px solid #23232f",
        }}
      >
        <p style={{ margin: 0, color: "#8b8b98" }}>Try these:</p>
        <ul style={{ lineHeight: 1.9 }}>
          <li>Open <code>/about</code> from the nav</li>
          <li>Hit the <code>/api/hello</code> endpoint</li>
          <li>Refresh a few times, then check Logs &amp; Metrics</li>
        </ul>
      </div>
    </>
  );
}
// build bed3c62
// autodeploy test 1785166605
