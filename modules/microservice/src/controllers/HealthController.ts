import type { ContextType } from "@talosjs/controller";
import { Route } from "@talosjs/routing";
import { Assert } from "@talosjs/validation";

type HealthRouteType = {
  response: { status: string; timestamp: string };
};

@Route.get("/health", {
  name: "microservice.health.check",
  version: 2,
  description: "Report whether the service is up and reachable",
  response: Assert({ status: "string", timestamp: "string" }),
  roles: [],
})
export class HealthController {
  public async index(context: ContextType<HealthRouteType>) {
    return context.response.json({ status: "ok", timestamp: new Date().toISOString() });
  }
}
