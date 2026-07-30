import { describe, expect, mock, test } from "bun:test";
import { HealthController } from "@module/microservice/controllers/HealthController";
import type { ContextType } from "@talosjs/controller";

type HealthRouteType = {
  response: { status: string; timestamp: string };
};

const buildContext = (json: (payload: HealthRouteType["response"]) => void): ContextType<HealthRouteType> =>
  ({ response: { json } }) as unknown as ContextType<HealthRouteType>;

describe("HealthController", () => {
  test("should have class name ending with 'Controller'", () => {
    expect(HealthController.name.endsWith("Controller")).toBe(true);
  });

  test("should be a constructor function", () => {
    expect(typeof HealthController).toBe("function");
  });

  test("should have 'index' method", () => {
    expect(typeof HealthController.prototype.index).toBe("function");
  });

  test("'index' should return a Promise", () => {
    const controller = new HealthController();
    const context = buildContext(() => {});
    const result = controller.index(context);
    expect(result).toBeInstanceOf(Promise);
    return result.catch(() => {});
  });

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

  test("should produce independent instances", () => {
    const a = new HealthController();
    const b = new HealthController();
    expect(a).not.toBe(b);
  });
});
