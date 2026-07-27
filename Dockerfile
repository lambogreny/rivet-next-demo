# syntax=docker/dockerfile:1.7

# Build stage: full Node image (its CVEs never ship — only artifacts are copied out).
FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json ./
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build

# Runtime stage: Google distroless nodejs — minimal, no shell/apt, near-zero CVEs,
# so it passes Rivet's HIGH/CRITICAL vulnerability gate.
FROM gcr.io/distroless/nodejs22-debian12 AS runtime
ENV NODE_ENV=production
ENV PORT=8080
ENV HOSTNAME=0.0.0.0
WORKDIR /app
# Next.js "standalone" output bundles a minimal self-contained server.
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public
EXPOSE 8080
# distroless nodejs entrypoint is `node`, so pass just the script.
CMD ["server.js"]
