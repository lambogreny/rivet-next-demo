# rivet-next-demo

A tiny Next.js 15 (App Router) hello-world for testing a Rivet deploy end to end:

- Multi-page navigation: `/`, `/about`, and a JSON API at `/api/hello`
- Every page render + API call writes a structured JSON log line to stdout
  (so the Rivet **Logs** tab shows real output)
- Server-rendered on each request (`force-dynamic`) so traffic drives **Metrics**
- Container listens on **:8080**, built via the multi-stage `Dockerfile`
  (Next.js `standalone` output)

## Build on Rivet
Point a Rivet service at this repo, build mode **dockerfile**, port **8080**.

<!-- rivet e2e deploy test: b854864 alpha pipeline -->