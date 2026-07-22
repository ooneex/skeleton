import { VideoPlayer } from "@module/design/components/video";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Video",
  group: "Components",
  tags: [],
  component: VideoPlayer,
  usage: [
    "**VideoPlayer** is a source-aware video embed. It can render a YouTube video from either `youtubeId` or a pasted YouTube URL, convert supported Bunny `mediadelivery.net` links into their embed form, fall back to a native HTML `video` element for direct file URLs, and show a quiet empty state when nothing is available.",
    "",
    "**How to use it** — pass a `youtubeId` when you already know the canonical ID, or a `src` when the source might be a YouTube URL, Bunny delivery URL, or direct media file. Give it an accessible `title`, and supply sizing classes such as `aspect-video` plus a width or container constraint so the frame has visible dimensions in the layout.",
    "",
    "**When to use it** — for lesson embeds, walkthroughs, onboarding clips, and media previews where the app should adapt automatically to the source platform without making the caller handle each provider.",
    "",
    "**When not to use it** — do not use it as a generic image or document preview, and do not rely on it for advanced playlist, analytics, or chapter controls that belong to a dedicated provider SDK integration.",
  ].join("\n"),
  props: [
    {
      name: "youtubeId",
      control: "text",
      default: "M7lc1UVf-VE",
    },
    {
      name: "src",
      control: "text",
      default: "",
    },
    {
      name: "title",
      control: "text",
      default: "Platform walkthrough",
    },
    {
      name: "autoPlay",
      control: "boolean",
      default: false,
    },
    {
      name: "className",
      default: "aspect-video w-[min(48rem,100%)] overflow-hidden rounded-xl border border-border bg-black",
    },
  ],
} satisfies Meta<typeof VideoPlayer>;
