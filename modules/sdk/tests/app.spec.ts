import { beforeEach, describe, expect, mock, test } from "bun:test";

type HealthResponseType = {
  success: boolean;
  data: { status: string; timestamp: string };
};

const constructorCalls: string[] = [];
const bearerTokens: string[] = [];
const endpoints: string[] = [];
let nextResponse: HealthResponseType = {
  success: true,
  data: { status: "ok", timestamp: "2026-01-01T00:00:00.000Z" },
};

class FetcherMock {
  public constructor(baseURL: string) {
    constructorCalls.push(baseURL);
  }

  public setBearerToken(token: string) {
    bearerTokens.push(token);
    return this;
  }

  public async get(endpoint: string) {
    endpoints.push(endpoint);
    return nextResponse;
  }
}

mock.module("@talosjs/fetcher", () => ({ Fetcher: FetcherMock }));

let appModulePromise: Promise<typeof import("../src/app")> | undefined;
const loadAppModule = () => {
  appModulePromise ??= import("../src/app");
  return appModulePromise;
};

describe("sdk app api", () => {
  beforeEach(() => {
    constructorCalls.length = 0;
    bearerTokens.length = 0;
    endpoints.length = 0;
  });

  test("healthCheck returns the response data and forwards successful responses", async () => {
    nextResponse = {
      success: true,
      data: { status: "ok", timestamp: "2026-01-02T12:00:00.000Z" },
    };

    const onSuccess = mock(() => {});
    const onError = mock(() => {});
    const { app } = await loadAppModule();

    const response = await app.api.healthCheck({
      baseURL: "https://api.example.com",
      bearerToken: "token-123",
      onSuccess,
      onError,
    });

    expect(response).toEqual(nextResponse.data);
    expect(constructorCalls).toEqual(["https://api.example.com"]);
    expect(bearerTokens).toEqual(["token-123"]);
    expect(endpoints).toEqual([app.definition.healthCheck.endpoint]);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onError).not.toHaveBeenCalled();
  });

  test("healthCheck forwards failed responses to onError and still returns the payload", async () => {
    nextResponse = {
      success: false,
      data: { status: "degraded", timestamp: "2026-01-03T12:00:00.000Z" },
    };

    const onSuccess = mock(() => {});
    const onError = mock(() => {});
    const { app } = await loadAppModule();

    const response = await app.api.healthCheck({
      baseURL: "https://api.example.com",
      bearerToken: "token-456",
      onSuccess,
      onError,
    });

    expect(response).toEqual(nextResponse.data);
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onSuccess).not.toHaveBeenCalled();
  });

  test("exposes the healthCheck endpoint definition", async () => {
    const { app } = await loadAppModule();

    expect(app.definition.healthCheck).toEqual({
      key: "app.health.check",
      version: 1,
      description: "Report whether the app is up and reachable",
      roles: [],
      endpoint: "/api/v1/health",
    });
  });
});
