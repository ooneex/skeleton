import { describe, expect, test } from "bun:test";
import { OnAppStart } from "@module/microservice/OnAppStart";
import type { Server } from "bun";

describe("OnAppStart", () => {
  test("should handle the start event without throwing and return nothing", async () => {
    const event = new OnAppStart();

    const result = await event.handle({} as Server<unknown>);

    expect(result).toBeUndefined();
  });
});
