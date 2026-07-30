# syntax=docker/dockerfile:1

# ==============================================================================
# skeleton backend — multi-stage image for staging & production
#
# Runtime: Bun.
#   - Production compiles a single `dist` bundle (`bun run build`). The bundle
#     resolves `@module/*` tsconfig path aliases at build time, but is NOT fully
#     standalone — at startup `@talosjs/app` reads `modules/app/roles.yml`
#     (via process.cwd()) and native deps (e.g. @lancedb/lancedb) load `.node`
#     addons from node_modules. So the production image ships the bundle +
#     production node_modules + that one runtime data file.
#
# Build context MUST be the repository root, e.g.:
#   docker build -f modules/app/Dockerfile --target production -t skeleton:latest .
#
# A single image serves both staging and production; they differ only by the
# environment variables (APP_ENV, DATABASE_URL, *_REDIS_URL, secrets, …) injected
# at deploy time — never bake them into the image.
# ==============================================================================

# Pin the Bun version; override at build time with --build-arg BUN_VERSION=...
# See all tags at https://hub.docker.com/r/oven/bun/tags
ARG BUN_VERSION=1.3.12

# --- Base ---------------------------------------------------------------------
FROM oven/bun:${BUN_VERSION} AS base
WORKDIR /app

# --- Dependencies: full install (incl. devDependencies), cached on lockfile ---
FROM base AS deps
COPY package.json bun.lock ./
RUN --mount=type=cache,target=/root/.bun/install/cache \
    bun install --frozen-lockfile

# --- Dependencies: production only --------------------------------------------
# Installed in the same base image as the runtime so prebuilt native addons
# (e.g. @lancedb/lancedb) match the target platform.
FROM base AS prod-deps
COPY package.json bun.lock ./
RUN --mount=type=cache,target=/root/.bun/install/cache \
    bun install --frozen-lockfile --production

# --- Build: compile the production bundle -------------------------------------
FROM base AS build
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Emits dist/index.js (bun build --target bun), with @module/* aliases inlined.
RUN bun run build

# --- Production / Staging -----------------------------------------------------
# A single image serves both staging and production; they differ only by the
# environment variables (APP_ENV, DATABASE_URL, *_REDIS_URL, secrets, …)
# injected at deploy time — never bake those into the image.
FROM base AS production
ENV NODE_ENV=production \
    HOST_NAME=0.0.0.0 \
    PORT=3500
# Production dependencies only — native addons (e.g. @lancedb/lancedb) load
# their .node binaries from node_modules at runtime; they aren't bundled.
COPY --from=prod-deps /app/node_modules ./node_modules
# Compiled application bundle.
COPY --from=build /app/dist ./dist
# Runtime data read from cwd at startup: @talosjs/app loads roles.yml (and, in
# local dev only, writes roles.types.ts beside it). Both files live at the image
# root because at runtime cwd and the module root both resolve to /app.
COPY modules/app/roles.yml ./roles.yml
COPY modules/app/.env.yml ./.env.yml
# Drop privileges: the official Bun image ships a non-root `bun` user.
RUN chown bun:bun /app/roles.yml /app/.env.yml
USER bun
EXPOSE 3500
# Liveness: the server is healthy as soon as it answers HTTP at all — any
# response (200/401/404) resolves the fetch; only a refused connection fails.
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
  CMD ["bun", "-e", "fetch(`http://127.0.0.1:${process.env.PORT||3500}/api/v1/health`).then(()=>process.exit(0)).catch(()=>process.exit(1))"]
CMD ["bun", "run", "dist/index.js"]
