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
      { name: "avatar", type: "file", required: true, description: "PNG or JPEG, 2 MB max." },
      { name: "caption", type: "string", required: false, description: "Shown under the image, 140 characters max." },
      {
        name: "visibility",
        type: '"public" | "private"',
        required: false,
        description: "Defaults to private until the image is reviewed.",
      },
      {
        name: "author",
        type: "object",
        required: false,
        description: "Credited under the image. Omit it entirely, or fill the whole group.",
        fields: [
          {
            name: "displayName",
            type: "string",
            required: true,
            description: "The name shown, not the account handle.",
          },
          { name: "avatarUrl", type: "url", required: false },
        ],
      },
    ],
  },
  responses: [
    {
      status: 200,
      fields: [
        { name: "url", type: "url", required: true, description: "Public CDN address of the stored image." },
        {
          name: "dimensions",
          type: "object",
          required: true,
          description: "The stored image, after any downscaling.",
          fields: [
            { name: "width", type: "number", required: true, description: "Pixels." },
            { name: "height", type: "number", required: true },
          ],
        },
      ],
    },
  ],
} satisfies RouteMetaType;
