import { Avatar } from "@module/design/components/avatar";
import type { Meta } from "../../shared/story";

const members = (
  <Avatar.Group>
    <Avatar>
      <Avatar.Image src="https://i.pravatar.cc/150?img=12" alt="Ada Lovelace" />
      <Avatar.Fallback>AL</Avatar.Fallback>
    </Avatar>
    <Avatar>
      <Avatar.Image src="https://i.pravatar.cc/150?img=32" alt="Grace Hopper" />
      <Avatar.Fallback>GH</Avatar.Fallback>
    </Avatar>
    <Avatar>
      <Avatar.Image src="https://i.pravatar.cc/150?img=45" alt="Katherine Johnson" />
      <Avatar.Fallback>KJ</Avatar.Fallback>
    </Avatar>
    <Avatar.GroupCount>+5</Avatar.GroupCount>
  </Avatar.Group>
);

export const meta = {
  title: "Avatar.Group",
  group: "Components",
  tags: [],
  component: Avatar.Group,
  usage: [
    "**Avatar.Group** lays out several avatars in an overlapping row, each with a background-colored ring so the stack reads clearly. It is the right way to show that several people share something — a shared document, a team, a set of reviewers.",
    "",
    "**How to use it** — nest a handful of `Avatar` elements inside it; they overlap left-to-right automatically. Cap the number you render (three to five works well) and close the row with an `Avatar.GroupCount` showing the overflow (`+5`). Give every child avatar the same `size` so the row stays even — the group scales its ring and count to match.",
    "",
    "**When to use it** — for collective identity where the individuals matter less than the group: collaborators on a file, attendees of an event, members of a channel. For a single person, use a plain `Avatar`; for a long, scannable roster, use a list with one avatar per row instead of an overlapping stack.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: members,
    },
    {
      name: "size",
      control: "select",
      options: [
        { name: "xs", usage: "24px avatars — dense rows of collaborators beside a filename or comment." },
        { name: "sm", usage: "32px avatars — the default row for teams, reviewers, and channel members." },
        { name: "md", usage: "40px avatars — a prominent stack where the group anchors a card or header." },
        { name: "lg", usage: "48px avatars — a larger stack for cards and panels that feature the group." },
        { name: "xl", usage: "64px avatars — a bold row for member summaries and detail views." },
        { name: "2xl", usage: "80px avatars — an oversized stack where the group leads the layout." },
        { name: "3xl", usage: "112px avatars — the largest stack, for hero sections showcasing the group." },
      ],
      default: "sm",
    },
  ],
} satisfies Meta<typeof Avatar.Group>;
