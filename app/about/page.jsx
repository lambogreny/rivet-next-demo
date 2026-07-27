export const dynamic = "force-dynamic";

export default function About() {
  console.log(
    JSON.stringify({
      level: "info",
      msg: "about page rendered",
      route: "/about",
      ts: new Date().toISOString(),
    }),
  );
  return (
    <>
      <h1 style={{ fontSize: 36, margin: "0 0 12px" }}>About this demo</h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, color: "#b8b8c6" }}>
        A minimal multi-page Next.js 15 app (App Router, standalone output) that
        runs as a container on Rivet&apos;s Kubernetes runtime. It exists to
        prove the full path works: navigation between server-rendered pages, an
        API route, and structured stdout logging.
      </p>
      <p style={{ fontSize: 18, lineHeight: 1.6, color: "#b8b8c6" }}>
        Built → Trivy scanned → cosign signed → verified → deployed → served
        over HTTPS behind the gateway.
      </p>
    </>
  );
}
