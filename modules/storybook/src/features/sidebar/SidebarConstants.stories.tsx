import {
  SIDEBAR_COOKIE_MAX_AGE,
  SIDEBAR_COOKIE_NAME,
  SIDEBAR_KEYBOARD_SHORTCUT,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_ICON,
  SIDEBAR_WIDTH_MOBILE,
} from "@module/design/components/sidebar/constants";
import type { MetaType } from "../../shared/story";

const SidebarConstantsPreview = () => {
  const constants = [
    ["SIDEBAR_COOKIE_NAME", SIDEBAR_COOKIE_NAME],
    ["SIDEBAR_COOKIE_MAX_AGE", `${SIDEBAR_COOKIE_MAX_AGE} seconds`],
    ["SIDEBAR_WIDTH", SIDEBAR_WIDTH],
    ["SIDEBAR_WIDTH_MOBILE", SIDEBAR_WIDTH_MOBILE],
    ["SIDEBAR_WIDTH_ICON", SIDEBAR_WIDTH_ICON],
    ["SIDEBAR_KEYBOARD_SHORTCUT", SIDEBAR_KEYBOARD_SHORTCUT.toUpperCase()],
  ] as const;

  return (
    <div className="grid gap-3 md:grid-cols-2">
      {constants.map(([name, value]) => (
        <div key={name} className="rounded border border-border p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{name}</p>
          <code className="mt-2 block rounded bg-muted px-3 py-2 text-sm">{value}</code>
        </div>
      ))}
    </div>
  );
};

SidebarConstantsPreview.displayName = "SidebarConstants";

export const meta = {
  title: "Sidebar.Constants",
  group: "Components",
  tags: [],
  component: SidebarConstantsPreview,
  usage: [
    "**Sidebar constants** are the shared contract behind the sidebar shell: the persistence cookie name and lifetime, the desktop/mobile widths, the collapsed icon width, and the keyboard shortcut used to toggle the nav. This story documents those values in one place so the shell's behaviour is visible without opening the source file.",
    "",
    "**How to use it** — reference these constants when wiring persistence, layout CSS, or shortcut help text around the sidebar system. Keeping product code aligned with the constants avoids subtle mismatches between the component internals and surrounding documentation or UX copy.",
    "",
    "**When to use it** — when integrating or documenting the sidebar shell and you need the authoritative sizing or persistence values.",
    "",
    "**When not to use it** — do not treat these constants as end-user UI on a production screen; they are internal configuration surfaced here for Storybook coverage and developer reference.",
  ].join("\n"),
} satisfies MetaType<typeof SidebarConstantsPreview>;
