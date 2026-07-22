import { SharedModule } from "@module/shared/SharedModule";
import type { ModuleType } from "@talosjs/module";
export const AppModule: ModuleType = {
  controllers: [...SharedModule.controllers],
  entities: [],
  middlewares: [...SharedModule.middlewares],
  cronJobs: [...SharedModule.cronJobs],
  events: [...SharedModule.events],
};
