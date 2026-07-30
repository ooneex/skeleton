import type { ModuleType } from "@talosjs/module";
import { HealthController } from "./controllers/HealthController";

export const MicroserviceModule: ModuleType = {
  controllers: [HealthController],
  entities: [],
  middlewares: [],
  cronJobs: [],
  events: [],
};
