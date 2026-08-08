import { describe, expect, mock, test } from "bun:test";
import { HealthController } from "@module/app/controllers/HealthController";
import type { ContextType } from "@talosjs/controller";

type HealthRouteType = {
  response: { status: string; timestamp: string };
};

const buildContext = (json: (payload: HealthRouteType["response"]) => void): ContextType<HealthRouteType> =>
  ({ response: { json } }) as unknown as ContextType<HealthRouteType>;

describe("HealthController", () => {
  test("'index' should call context.response.json with status and timestamp", async () => {
    const controller = new HealthController();
    const json = mock((_payload: HealthRouteType["response"]) => {});
    const context = buildContext(json);
    await controller.index(context);
    expect(json).toHaveBeenCalledTimes(1);
    const [payload] = json.mock.calls[0] as [HealthRouteType["response"]];
    expect(payload.status).toBe("ok");
    expect(typeof payload.timestamp).toBe("string");
  });
});
