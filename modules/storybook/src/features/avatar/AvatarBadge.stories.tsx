import { Avatar } from "@module/design/components/avatar";
import type { Meta } from "../../shared/story";

const badged = (
  <Avatar>
    <Avatar.Image src="https://i.pravatar.cc/150?img=12" alt="Ada Lovelace" />
    <Avatar.Fallback>AL</Avatar.Fallback>
    <Avatar.Badge />
  </Avatar>
);

export const meta = {
  title: "Avatar.Badge",
  group: "Components",
  tags: [],
  component: Avatar,
  usage: [
    "**Avatar.Badge** overlays a small marker in the corner of an avatar. Empty, it is a status dot; with content it can carry a tiny icon (a verified check) or a short count. A background-matched ring separates it from the photo so it stays visible over any image, and it auto-scales with the avatar `size`.",
    "",
    "**How to use it** — add it as the last child of the `Avatar` root, after the image and fallback. Leave it empty for a presence dot (online / away / busy — set the color via `className`), or nest a small icon or one-to-two digit number inside for verification or unread counts. Keep the content to a glyph or a couple of characters; it is a marker, not a label.",
    "",
    "**When to use it** — when a single piece of status about the person matters at a glance and is worth the extra visual weight: online presence, verified account, or unread messages. If the status needs words, use a `Badge` beside the name instead — do not overload the corner marker.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: badged,
    },
    {
      name: "size",
      control: "select",
      options: [
        { name: "xs", usage: "24px — the marker is a bare 8px dot (icons hidden)." },
        { name: "sm", usage: "32px — small dot that fits threads and menus." },
        { name: "md", usage: "40px — the marker has room for a tiny icon." },
        { name: "lg", usage: "48px — the marker gains a clearer ring on a slightly larger avatar." },
        { name: "xl", usage: "64px — a comfortable marker for profile summaries and cards." },
        { name: "2xl", usage: "80px — a prominent marker that reads clearly on large avatars." },
        { name: "3xl", usage: "112px — the largest marker with a thick ring, inset from the edge." },
      ],
      default: "3xl",
    },
  ],
} satisfies Meta<typeof Avatar>;
