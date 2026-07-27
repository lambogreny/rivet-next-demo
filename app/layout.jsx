import Link from "next/link";

export const metadata = {
  title: "Rivet × Next.js — Hello World",
  description: "A tiny Next.js app deployed on Rivet to exercise logs and metrics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          background: "#0b0b0f",
          color: "#e7e7ee",
        }}
      >
        <nav
          style={{
            display: "flex",
            gap: 24,
            padding: "18px 28px",
            borderBottom: "1px solid #1e1e28",
            background: "#111119",
          }}
        >
          <strong style={{ color: "#a78bfa" }}>▲ rivet-next-demo</strong>
          <Link href="/" style={{ color: "#e7e7ee", textDecoration: "none" }}>
            Home
          </Link>
          <Link href="/about" style={{ color: "#e7e7ee", textDecoration: "none" }}>
            About
          </Link>
          <a
            href="/api/hello"
            style={{ color: "#e7e7ee", textDecoration: "none" }}
          >
            API
          </a>
        </nav>
        <main style={{ maxWidth: 760, margin: "0 auto", padding: "56px 28px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
