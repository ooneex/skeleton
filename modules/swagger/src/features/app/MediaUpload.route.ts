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
    ],
  },
  responses: [{ status: 200, fields: [{ name: "url", type: "string", required: true }] }],
} satisfies RouteMetaType;
