import type { RouteMetaType } from "../../shared/route";

export const meta = {
  title: "Health check",
  group: "App",
  key: "app.health.check",
  version: 1,
  method: "get",
  path: "/api/v1/health",
  roles: [],
  tags: ["monitoring"],
  summary: "Report whether the app is up and reachable.",
  description: [
    "Answers `200` with the current server time as soon as the process is accepting requests.",
    "",
    "**When to use it** — as the liveness probe of a load balancer, a container orchestrator or an uptime monitor. It touches no database and holds no lock, so it is safe to poll every few seconds.",
    "",
    "**When not to use it** — it does not report readiness. A green health check means the process answers, not that its migrations ran or its dependencies are reachable.",
  ].join("\n"),
  responses: [
    {
      status: 200,
      description: "The app is up. `timestamp` is the server's clock in ISO 8601, useful for spotting clock drift.",
      example: { status: "ok", timestamp: "2026-01-01T00:00:00.000Z" },
    },
  ],
} satisfies RouteMetaType;
