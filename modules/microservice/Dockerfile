# syntax=docker/dockerfile:1

# ==============================================================================
# microservice backend — multi-stage image for staging & production
#
# Runtime: Bun, running the module's TypeScript source. There is no bundle
# step, because `@talosjs/app` boots the way `talos app:start` runs it:
#
#   - The entry point must stay at modules/<module>/src/index.ts. `App` derives
#     the module root from `Bun.main` two levels up, and reads roles.yml and
#     .env.yml from there.
#   - src/index.ts statically imports ../roles.yml and ../.env.yml, so both
#     files must exist beside the module at runtime.
#   - The process must run from the workspace root: `App` layers
#     <cwd>/.env.yml first and the module's own .env.yml over it, and looks for
#     roles.yml in <cwd> before falling back to the module's own.
#   - @module/* imports resolve through the path aliases in the root
#     tsconfig.json, so that file and every aliased module ship with the image.
#
# Build context MUST be the repository root, e.g.:
#   docker build -f modules/microservice/Dockerfile -t microservice:latest .
#
# A single image serves both staging and production; they differ only by the
# environment variables injected at deploy time — never bake them into the
# image. APP_ENV defaults to "production" when unset. CACHE_REDIS_URL and
# RATE_LIMIT_REDIS_URL are read while the cache and rate limiter are
# constructed, before any .env.yml is layered in, so they must be real
# environment variables — the container exits at startup without them.
# ==============================================================================

# Pin the Bun version; override at build time with --build-arg BUN_VERSION=...
# See all tags at https://hub.docker.com/r/oven/bun/tags
ARG BUN_VERSION=1.3.12

# --- Base ---------------------------------------------------------------------
FROM oven/bun:${BUN_VERSION} AS base
WORKDIR /app

# --- Dependencies: production only --------------------------------------------
# Installed in the same base image as the runtime so prebuilt native addons
# (e.g. @lancedb/lancedb) match the target platform.
#
# `bun install --frozen-lockfile` resolves the whole workspace, so every
# modules/*/package.json the lockfile knows about has to be present — with any
# of them missing the lockfile reads as changed and the install fails. Copying
# the modules wholesale is what makes that reliable; it costs this layer's
# cache on any source edit, which the mounted Bun cache keeps cheap.
FROM base AS deps
COPY package.json bun.lock ./
COPY modules ./modules
RUN --mount=type=cache,target=/root/.bun/install/cache \
    bun install --frozen-lockfile --production

# --- Production / Staging -----------------------------------------------------
FROM base AS production
ENV NODE_ENV=production \
    HOST_NAME=0.0.0.0 \
    PORT=3500
# Production dependencies only — native addons (e.g. @lancedb/lancedb) load
# their .node binaries from node_modules at runtime.
COPY --from=deps /app/node_modules ./node_modules
# Workspace root: tsconfig.json carries the @module/* path aliases Bun resolves
# imports through.
COPY package.json tsconfig.json ./
# Every module this one imports through an @module/* alias. `shared` ships by
# default; add the others as you import them, or the image builds fine and then
# fails at startup on an unresolved import.
COPY modules/shared/package.json modules/shared/tsconfig.json ./modules/shared/
COPY modules/shared/src ./modules/shared/src
# The module itself. roles.yml is read at startup and imported by src/index.ts.
COPY modules/microservice/package.json modules/microservice/tsconfig.json modules/microservice/roles.yml ./modules/microservice/
COPY modules/microservice/src ./modules/microservice/src
# .env.yml is deliberately never copied: loadEnv() writes every non-empty value
# it holds over the process environment, so a baked-in file would shadow what
# the orchestrator injects (and being gitignored, it is absent from a CI build
# context anyway). src/index.ts still imports it, so ship an empty mapping —
# the import resolves and nothing overrides the environment.
RUN printf '{}\n' > modules/microservice/.env.yml
# Drop privileges: the official Bun image ships a non-root `bun` user. Every
# file above stays root-owned and read-only to it; nothing is written at
# runtime (roles.types.ts is only generated when APP_ENV=local).
USER bun
EXPOSE 3500
# Liveness: the server is healthy as soon as it answers HTTP at all — any
# response (200/401/404) resolves the fetch; only a refused connection fails.
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
  CMD ["bun", "-e", "fetch(`http://127.0.0.1:${process.env.PORT||3500}/api/v2/health`).then(()=>process.exit(0)).catch(()=>process.exit(1))"]
# Run from the workspace root, exactly like `talos app:start` does.
CMD ["bun", "run", "modules/microservice/src/index.ts"]
