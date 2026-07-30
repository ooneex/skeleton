import { SharedModule } from "@module/shared/SharedModule";
import type { ModuleType } from "@talosjs/module";
import { HealthController } from "./controllers/HealthController";
export const AppModule: ModuleType = {
  controllers: [...SharedModule.controllers, HealthController],
  entities: [],
  middlewares: [...SharedModule.middlewares],
  cronJobs: [...SharedModule.cronJobs],
  events: [...SharedModule.events],
};
