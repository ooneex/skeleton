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
  ],
} satisfies Meta<typeof Avatar.Group>;
