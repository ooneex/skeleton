import type { RouteMetaType } from "../../shared/route";

export const meta = {
  title: "Activity feed",
  group: "App",
  key: "app.feed.stream",
  version: 1,
  method: "socket",
  path: "/api/v1/feed",
  roles: [],
  summary: "Stream activity events as they happen",
  payload: {
    fields: [{ name: "channel", type: "string", required: true }],
    example: { channel: "orders" },
  },
  responses: [{ status: 200, fields: [{ name: "event", type: "string", required: true }] }],
} satisfies RouteMetaType;
