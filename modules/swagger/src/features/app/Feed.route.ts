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
      description: "Narrows the stream at connection time. Cannot be changed afterwards.",
      fields: [
        {
          name: "since",
          type: "datetime",
          required: false,
          description: "Replay from this instant. Ignored when `options.replay` is false.",
        },
        {
          name: "kinds",
          type: "string[]",
          required: false,
          description: "Event names to keep. Empty means every kind.",
        },
      ],
    },
  ],
  payload: {
    fields: [
      {
        name: "channel",
        type: "string",
        required: true,
        description: "The channel to subscribe to. Sent on every frame, not just the first.",
      },
      {
        name: "options",
        type: "object",
        required: false,
        description: "How the subscription behaves.",
        fields: [
          { name: "replay", type: "boolean", required: false, description: "Send the backlog before live events." },
          { name: "batchSize", type: "number", required: false, description: "Events per frame, 1 to 500." },
        ],
      },
    ],
    example: { channel: "orders", options: { replay: true, batchSize: 50 } },
  },
  responses: [
    {
      status: 200,
      fields: [
        { name: "event", type: "string", required: true, description: "What happened, e.g. `order.paid`." },
        {
          name: "actor",
          type: "object",
          required: true,
          description: "Who caused the event.",
          fields: [
            { name: "id", type: "uuid", required: true },
            { name: "displayName", type: "string", required: true },
          ],
        },
      ],
    },
  ],
} satisfies RouteMetaType;
