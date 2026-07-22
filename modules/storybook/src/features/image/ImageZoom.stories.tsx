import { ImageZoom } from "@module/design/components/image";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "ImageZoom",
  group: "Components",
  tags: [],
  component: ImageZoom,
  usage: [
    "**ImageZoom** renders an image that expands to a full-screen, dimmed overlay when clicked and collapses back on click, Escape, or scroll — powered by `react-medium-image-zoom`. The resting image is centered in its container, capped to fit, rounded, and `object-contain` so it never distorts.",
    "",
    "**How to use it** — give it a `src` and a meaningful `alt`; it fills the width and height of its parent, so size it by constraining that container (a card, a grid cell, a figure). Use `className` to tune the resting image (aspect, radius, fit). No zoom state to manage — the click-to-zoom overlay is built in.",
    "",
    "**When to use it** — for content images users may want to inspect closely: photos, screenshots, charts, diagrams, product shots in a gallery or article.",
    "",
    "**When not to use it** — for decorative or icon-sized images, avatars (use `Avatar`), or images that are themselves links/actions, where a zoom overlay would fight the click. If you need pan or deep zoom on very large images, reach for a dedicated viewer instead.",
  ].join("\n"),
  props: [
    {
      name: "src",
      control: "text",
      default: "https://picsum.photos/id/1015/800/500",
    },
    {
      name: "alt",
      control: "text",
      default: "A river winding through a canyon",
    },
    {
      name: "className",
      control: "text",
      default: "aspect-video w-full",
    },
  ],
} satisfies Meta<typeof ImageZoom>;
