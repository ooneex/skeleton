import { describe, expect, test } from "bun:test";
import { OnAppStart } from "@module/app/OnAppStart";
import type { Server } from "bun";

describe("OnAppStart", () => {
  test("should handle the start event without throwing", () => {
    const event = new OnAppStart();

    expect(() => event.handle({} as Server<unknown>)).not.toThrow();
  });

  test("should return nothing to the app lifecycle", async () => {
    const event = new OnAppStart();

    const result = await event.handle({} as Server<unknown>);

    expect(result).toBeUndefined();
  });
});
