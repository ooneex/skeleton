import { App } from "@talosjs/app";
import { RedisCache } from "@talosjs/cache";
import { TerminalLogger } from "@talosjs/logger";
import { CorsMiddleware } from "@talosjs/middleware";
import { RedisRateLimiter } from "@talosjs/rate-limit";
import { MicroserviceModule } from "./MicroserviceModule";
import { OnAppStart } from "./OnAppStart";
import "@module/shared/roles.yml";
import "../.env.yml";

const app = new App({
  routing: {
    prefix: "api",
  },
  loggers: [TerminalLogger],
  // loggers: [BetterstackLogger, TerminalLogger],
  // onException: BetterstackExceptionLogger,
  // cache: UpstashRedisCache,
  cache: RedisCache,
  rateLimiter: RedisRateLimiter,
  // rateLimiter: UpstashRedisRateLimiter,
  middlewares: MicroserviceModule.middlewares,
  cors: CorsMiddleware,
  cronJobs: MicroserviceModule.cronJobs,
  onStart: OnAppStart,
});

await app.run();
