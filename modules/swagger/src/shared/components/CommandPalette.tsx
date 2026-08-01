import { ScrollArea } from "@module/design/components/scroll-area";
import { Command } from "cmdk";
import type { SVGProps } from "react";
import type { RouteEntryType } from "../route";
import { buildSections } from "../route";
import { MethodBadge } from "./MethodBadge";

type CommandPalettePropsType = {
  routes: RouteEntryType[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (id: string) => void;
};

const MagnifierIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg height="16" width="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Search</title>
    <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M21 21L28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
  </svg>
);

/**
 * ⌘K jump-to over every documented route, matched against the path, the title
 * and the route key — the three things a reader actually remembers about an
 * endpoint.
 */
export const CommandPalette = ({ routes, open, onOpenChange, onSelect }: CommandPalettePropsType) => (
  <Command.Dialog
    open={open}
    onOpenChange={onOpenChange}
    label="Jump to a route"
    overlayClassName="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
    contentClassName="fixed left-1/2 top-[12vh] z-50 w-[94vw] max-w-3xl -translate-x-1/2"
    className="flex max-h-[70vh] flex-col overflow-hidden rounded-lg bg-popover text-popover-foreground shadow-xl"
  >
    <div className="flex items-center gap-2 border-b border-border px-3">
      <MagnifierIcon className="size-4 shrink-0 text-muted-foreground" />
      <Command.Input
        autoFocus
        placeholder="Jump to a route, a path or a route key…"
        className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
      />
    </div>
    <Command.List>
      <ScrollArea viewportClassName="max-h-[60vh] p-1">
        <Command.Empty className="py-6 text-center text-sm text-muted-foreground">No matches.</Command.Empty>
        {buildSections(routes).map((section) => (
          <Command.Group
            key={section.group}
            heading={section.group}
            className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-muted-foreground"
          >
            {section.routes.map(({ id, meta }) => (
              <Command.Item
                key={id}
                value={`${meta.method} ${meta.path} ${meta.title} ${meta.key}`}
                onSelect={() => onSelect(id)}
                className="flex cursor-pointer items-center gap-3 rounded-md border border-transparent px-2.5 py-2 text-sm text-foreground aria-selected:border-border aria-selected:bg-muted"
              >
                <MethodBadge method={meta.method} />
                <span className="truncate font-mono text-xs">{meta.path}</span>
                <span className="ml-auto shrink-0 truncate text-xs text-muted-foreground">{meta.title}</span>
              </Command.Item>
            ))}
          </Command.Group>
        ))}
      </ScrollArea>
    </Command.List>
  </Command.Dialog>
);
