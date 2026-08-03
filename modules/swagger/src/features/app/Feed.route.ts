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
  queries: [
    {
      name: "filter",
      type: "object",
      required: false,
      fields: [
        { name: "since", type: "datetime", required: false },
        { name: "kinds", type: "string[]", required: false },
      ],
    },
  ],
  payload: {
    fields: [
      { name: "channel", type: "string", required: true },
      {
        name: "options",
        type: "object",
        required: false,
        fields: [
          { name: "replay", type: "boolean", required: false },
          { name: "batchSize", type: "number", required: false },
        ],
      },
    ],
    example: { channel: "orders", options: { replay: true, batchSize: 50 } },
  },
  responses: [
    {
      status: 200,
      fields: [
        { name: "event", type: "string", required: true },
        {
          name: "actor",
          type: "object",
          required: true,
          fields: [
            { name: "id", type: "uuid", required: true },
            { name: "displayName", type: "string", required: true },
          ],
        },
      ],
    },
  ],
} satisfies RouteMetaType;
