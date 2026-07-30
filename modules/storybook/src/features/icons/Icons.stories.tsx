import { GridSearchIcon } from "@module/design/icons/outline/ui-layout/sm/GridSearchIcon";
import type { MetaType } from "../../shared/story";
import { IconGallery } from "./IconGallery";

export const meta = {
  title: "Icons",
  group: "Icons",
  tags: [],
  component: IconGallery,
  props: [
    {
      name: "searchIcon",
      default: <GridSearchIcon />,
    },
  ],
  usage: [
    "**What** — a searchable, filterable gallery of every icon shipped by `@module/design/icons`: over 3,000 glyphs across two styles (`fill`, `outline`), three sizes (`sm` 16px, `md` 24px, `lg` 32px), and dozens of categories such as Arrows, UI & Layout, Weather, and Business & Finance.",
    "",
    "**How to use it** — type in the search box to match an icon's name, category, or tags (multiple words narrow the match further); click any tag chip under an icon to filter the whole grid to that tag, click it again to clear; switch the **All / Outline / Fill** tabs to preview the style you need, and the size select to preview `sm`/`md`/`lg`. Hover an icon for its full name, and open the component's own file under `modules/design/src/icons/<style>/<category>/<size>/<Name>Icon.tsx` to import it, e.g. `import { ChevronRightIcon } from \"@module/design/icons/outline/arrows/sm/ChevronRightIcon\";`.",
    "",
    "**When to use it** — reach for this page whenever you need to find the right icon for a feature: browsing by category or tag, comparing the `fill` vs `outline` treatment of the same glyph, or checking which sizes an icon ships in before wiring up an import.",
    "",
    "**When not to use it** — this page only previews and helps you find icons; it isn't the place to preview a single icon's props in isolation (there's no per-icon story since every icon shares the same `SVGProps<SVGSVGElement>` shape) or to review non-icon design components — see the other sections in the sidebar for those.",
  ].join("\n"),
} satisfies MetaType<typeof IconGallery>;
