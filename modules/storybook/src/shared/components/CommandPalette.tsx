import { Command } from "cmdk";
import type { SVGProps } from "react";
import type { StoryGroupType } from "../story";
import { ScrollArea } from "./scroll-area";

type CommandPalettePropsType = {
  groups: StoryGroupType[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (id: string) => void;
};

/** A palette section (`group` label) and the story groups filed under it, in first-seen order. */
type SectionType = {
  group: string;
  groups: StoryGroupType[];
};

/**
 * Drop compound sub-components — a group titled `Foo.Bar` is hidden when its parent `Foo`
 * is present, so the palette lists only the main component of each compound.
 */
const mainComponents = (groups: StoryGroupType[]): StoryGroupType[] => {
  const titles = new Set(groups.map((group) => group.title));
  return groups.filter((group) => {
    const dot = group.title.indexOf(".");
    return !(dot > 0 && titles.has(group.title.slice(0, dot)));
  });
};

/** Partition the story groups into sections keyed by each group's `group`. */
const buildSections = (groups: StoryGroupType[]): SectionType[] => {
  const sections: SectionType[] = [];
  for (const group of groups) {
    const section = sections.find((candidate) => candidate.group === group.group);
    if (section) {
      section.groups.push(group);
    } else {
      sections.push({ group: group.group, groups: [group] });
    }
  }
  return sections;
};

/** First sentence of a variant's markdown `usage`, stripped of emphasis, for a one-line palette hint. */
const summarize = (usage: string | undefined): string | undefined => {
  if (!usage) {
    return undefined;
  }
  const firstLine = usage.split("\n").find((line) => line.trim().length > 0);
  if (!firstLine) {
    return undefined;
  }
  const plain = firstLine.replace(/[*_`]/g, "").trim();
  const [sentence] = plain.split(/(?<=\.)\s/);
  return sentence;
};

const MagnifierIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg height="16" width="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Search</title>
    <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M21 21L28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
  </svg>
);

/** The one or two leading letters of a component title, for the item's monogram badge. */
const monogram = (title: string): string => {
  const parts = title
    .replace(/[^a-zA-Z0-9]/g, " ")
    .trim()
    .split(/\s+/);
  const [first, second] = parts;
  const letters = first && second ? first.charAt(0) + second.charAt(0) : title.slice(0, 2);
  return letters.toUpperCase();
};

/**
 * ⌘K command palette — a fuzzy jump-to over every variant of every component,
 * matched against the story title. Selecting an item navigates straight to that
 * story, wherever the sidebar is scrolled.
 */
export const CommandPalette = ({ groups, open, onOpenChange, onSelect }: CommandPalettePropsType) => {
  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label="Jump to a component"
      overlayClassName="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      contentClassName="fixed left-1/2 top-[12vh] z-50 w-[94vw] max-w-5xl -translate-x-1/2"
      className="flex max-h-[70vh] flex-col overflow-hidden rounded-lg bg-popover text-popover-foreground shadow-xl"
    >
      <div className="flex items-center gap-2 border-b border-border px-3">
        <MagnifierIcon className="size-4 shrink-0 text-muted-foreground" />
        <Command.Input
          autoFocus
          placeholder="Jump to a component or variant…"
          className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
      <Command.List>
        <ScrollArea viewportClassName="max-h-[60vh] p-1">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">No matches.</Command.Empty>
          {buildSections(mainComponents(groups)).map((section) => (
            <Command.Group
              key={section.group}
              heading={section.group}
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-muted-foreground"
            >
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {section.groups.flatMap((group) =>
                  group.variants.map((variant) => {
                    const description = summarize(variant.usage);
                    return (
                      <Command.Item
                        key={variant.id}
                        value={`${group.title} ${variant.name}`}
                        onSelect={() => onSelect(variant.id)}
                        className="flex cursor-pointer items-start gap-3 rounded-md border border-transparent px-2.5 py-2 text-sm text-foreground aria-selected:border-border aria-selected:bg-muted aria-selected:text-foreground"
                      >
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-xs font-semibold uppercase text-muted-foreground aria-selected:bg-background">
                          {monogram(group.title)}
                        </span>
                        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                          <div className="flex items-baseline gap-2">
                            <span className="truncate font-medium">{variant.name}</span>
                            <span className="ml-auto shrink-0 rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                              {group.title}
                            </span>
                          </div>
                          {description ? (
                            <span className="line-clamp-2 text-xs text-muted-foreground">{description}</span>
                          ) : null}
                        </div>
                      </Command.Item>
                    );
                  }),
                )}
              </div>
            </Command.Group>
          ))}
        </ScrollArea>
      </Command.List>
    </Command.Dialog>
  );
};
