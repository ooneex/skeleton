import { Avatar } from "@module/design/components/avatar";
import type { Meta } from "../../shared/story";

const person = (
  <Avatar>
    <Avatar.Image src="https://i.pravatar.cc/150?img=12" alt="Ada Lovelace" />
    <Avatar.Fallback>AL</Avatar.Fallback>
  </Avatar>
);

export const meta = {
  title: "Avatar",
  group: "Components",
  tags: [],
  component: Avatar,
  usage: [
    "**Avatar** represents a single person or account. It layers its sub-components inside one round frame: `Avatar.Image` shows the profile photo, `Avatar.Fallback` shows initials while the image loads or if it fails, and `Avatar.Badge` overlays a small status marker (online dot, verified check, unread count).",
    "",
    "**How to use it** — always pair an `Avatar.Image` with an `Avatar.Fallback`; the fallback is what the user actually sees until the network image resolves, so give it meaningful initials rather than leaving it blank. Add an `Avatar.Badge` only when the status it conveys matters at a glance. Pick `size` to match the surrounding density.",
    "",
    "**When to use it** — for user identity anywhere a name alone is not enough: profile headers, comment threads, member lists, assignee pickers, chat rows. For more than a handful of people shown together, reach for `Avatar.Group` instead of stacking avatars by hand.",
    "",
    "**When not to use it** — do not use an avatar as a decorative icon or a generic image thumbnail; it is specifically an identity affordance and users read it that way.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: person,
    },
    {
      name: "size",
      control: "select",
      options: [
        {
          name: "xs",
          usage:
            "Smallest (24px). Use for dense lists, inline @mentions, and table cells where the avatar sits beside text.",
        },
        { name: "sm", usage: "Compact (32px). The default — fits comment threads, notification rows, and menu items." },
        {
          name: "md",
          usage: "Standard (40px). Use for profile rows, cards, and dropdown headers where the person is the focus.",
        },
        {
          name: "lg",
          usage: "Prominent (48px). Use for profile rows and cards that need more presence than the standard size.",
        },
        {
          name: "xl",
          usage: "Large (64px). Use for profile summaries, member cards, and detail panels.",
        },
        {
          name: "2xl",
          usage: "Extra large (80px). Use for profile headers and account pages where identity leads the layout.",
        },
        {
          name: "3xl",
          usage: "Largest (112px). Use for profile hero sections and settings where the avatar anchors the screen.",
        },
      ],
      default: "sm",
    },
  ],
} satisfies Meta<typeof Avatar>;
