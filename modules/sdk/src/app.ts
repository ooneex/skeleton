import { Fetcher } from "@talosjs/fetcher";
import type { ResponseDataType } from "@talosjs/http-response";

type HealthRouteType = {
  response: { status: string; timestamp: string };
};

export const app = {
  api: {
    healthCheck: async (input: {
      baseURL: string;
      bearerToken: string;
      onSuccess?: (response: ResponseDataType<HealthRouteType["response"]>) => void;
      onError?: (response?: ResponseDataType<HealthRouteType["response"]>) => void;
    }): Promise<HealthRouteType["response"]> => {
      const response = await new Fetcher(input.baseURL)
        .setBearerToken(input.bearerToken)
        .get<HealthRouteType["response"]>(app.definition.healthCheck.endpoint);
      if (response.success) {
        input.onSuccess?.(response);
      } else {
        input.onError?.(response);
      }
      return response.data;
    },
  },
  definition: {
    healthCheck: {
      key: "app.health.check",
      version: 1,
      description: "Report whether the app is up and reachable",
      roles: ["ROLE_GUEST"],
      endpoint: "/api/v1/health",
    },
  },
};
