import { describe, expect, mock, test } from "bun:test";
import { RedisCache } from "@talosjs/cache";
import { TerminalLogger } from "@talosjs/logger";
import { CorsMiddleware } from "@talosjs/middleware";
import { RedisRateLimiter } from "@talosjs/rate-limit";
import { AppModule } from "../src/AppModule";
import { OnAppStart } from "../src/OnAppStart";

const appConfigurations: Array<Record<string, unknown>> = [];
const run = mock(async () => {});

class AppMock {
  public constructor(config: Record<string, unknown>) {
    appConfigurations.push(config);
  }

  public run = run;
}

mock.module("@talosjs/app", () => ({ App: AppMock }));

describe("app bootstrap", () => {
  test("creates and runs the Talos app with the app module configuration", async () => {
    await import("../src/index");

    expect(appConfigurations).toHaveLength(1);
    expect(run).toHaveBeenCalledTimes(1);

    const config = appConfigurations.at(0);
    expect(config).toBeDefined();

    if (!config) {
      throw new Error("App bootstrap did not capture the App configuration.");
    }

    expect(config.routing).toEqual({ prefix: "api" });
    expect(config.loggers).toEqual([TerminalLogger]);
    expect(config.cache).toBe(RedisCache);
    expect(config.rateLimiter).toBe(RedisRateLimiter);
    expect(config.cors).toBe(CorsMiddleware);
    expect(config.middlewares).toEqual(AppModule.middlewares);
    expect(config.cronJobs).toEqual(AppModule.cronJobs);
    expect(config.onStart).toBe(OnAppStart);
  });
});
