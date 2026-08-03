import type { RouteMetaType } from "../../shared/route";

export const meta = {
  title: "Upload avatar",
  group: "App",
  key: "app.media.upload",
  version: 1,
  method: "post",
  path: "/api/v1/media/upload",
  roles: [],
  summary: "Upload an avatar image",
  payload: {
    contentType: "multipart",
    fields: [
      { name: "avatar", type: "file", required: true },
      { name: "caption", type: "string", required: false },
      { name: "visibility", type: '"public" | "private"', required: false },
      {
        name: "author",
        type: "object",
        required: false,
        fields: [
          { name: "displayName", type: "string", required: true },
          { name: "avatarUrl", type: "url", required: false },
        ],
      },
    ],
  },
  responses: [
    {
      status: 200,
      fields: [
        { name: "url", type: "url", required: true },
        {
          name: "dimensions",
          type: "object",
          required: true,
          fields: [
            { name: "width", type: "number", required: true },
            { name: "height", type: "number", required: true },
          ],
        },
      ],
    },
  ],
} satisfies RouteMetaType;
