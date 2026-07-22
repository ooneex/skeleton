import { useEffect, useMemo, useRef, useState } from "react";
import { useThemeScheme } from "../hooks/useTheme";
import { ChevronRightIcon } from "../icons/outline/arrows/sm/ChevronRightIcon";
import { LayersIcon } from "../icons/outline/design-development/sm/LayersIcon";
import { TypographyIcon } from "../icons/outline/design-development/sm/TypographyIcon";
import type { StoryGroupType } from "../story";
import { cn } from "../utils/cn";
import { Button } from "./button";
import { Kbd } from "./kbd";
import { ScrollArea } from "./scroll-area";

// Served from the module's public/ directory at the site root. The dark variant
// carries a light wordmark so it stays legible on dark themes.
const LOGO_SRC = "/logo-full.svg";
const LOGO_DARK_SRC = "/logo-full-dark.svg";

type SidebarPropsType = {
  groups: StoryGroupType[];
  selectedId: string;
  query: string;
  onQueryChange: (query: string) => void;
  onSelect: (id: string) => void;
  onOpenPalette: () => void;
};

/** A compound component (title `Avatar`) and its dot-namespaced sub-components (`Avatar.Image`, …). */
type TreeNodeType = {
  group: StoryGroupType;
  children: StoryGroupType[];
};

/**
 * Fold the flat, dot-namespaced groups into a one-level tree: a group titled `Foo.Bar`
 * becomes a sub-item of the group titled `Foo` when that parent is present. Groups whose
 * parent is filtered out (or that simply have no dot) stay top-level.
 */
const buildTree = (groups: StoryGroupType[]): TreeNodeType[] => {
  const titles = new Set(groups.map((group) => group.title));
  const isChild = (group: StoryGroupType): boolean => {
    const dot = group.title.indexOf(".");
    return dot > 0 && titles.has(group.title.slice(0, dot));
  };

  const nodes: TreeNodeType[] = [];
  for (const group of groups) {
    if (isChild(group)) {
      continue;
    }
    const prefix = `${group.title}.`;
    const children = groups.filter((candidate) => candidate.title.startsWith(prefix) && isChild(candidate));
    nodes.push({ group, children });
  }
  return nodes;
};

const variantId = (group: StoryGroupType): string => group.variants[0]?.id ?? group.id;

/** Icon shown next to each sidebar section label, keyed by the section's `group` name. */
const SECTION_ICONS: Record<string, typeof LayersIcon> = {
  Typography: TypographyIcon,
};

const sectionIcon = (label: string): typeof LayersIcon => SECTION_ICONS[label] ?? LayersIcon;

/** A sidebar section (`group` label) and the tree nodes filed under it, in first-seen order. */
type SectionType = {
  group: string;
  nodes: TreeNodeType[];
};

/** Partition the folded tree into sections keyed by each top-level node's `group`. */
const buildSections = (nodes: TreeNodeType[]): SectionType[] => {
  const sections: SectionType[] = [];
  for (const node of nodes) {
    const label = node.group.group;
    const section = sections.find((candidate) => candidate.group === label);
    if (section) {
      section.nodes.push(node);
    } else {
      sections.push({ group: label, nodes: [node] });
    }
  }
  return sections;
};

export const Sidebar = ({ groups, selectedId, onSelect, onOpenPalette }: SidebarPropsType) => {
  const listRef = useRef<HTMLDivElement>(null);
  const tree = useMemo(() => buildTree(groups), [groups]);
  const sections = useMemo(() => buildSections(tree), [tree]);
  // Accordion: at most one parent is open at a time; `undefined` means none.
  const [openTitle, setOpenTitle] = useState<string>();

  // Scroll the active component into view when selection changes elsewhere (URL, palette).
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>('[data-active="true"]')?.scrollIntoView({ block: "nearest" });
  }, [selectedId]);

  const isActive = (group: StoryGroupType): boolean => group.variants.some((variant) => variant.id === selectedId);

  const itemClass = (active: boolean): string =>
    cn(
      "w-full justify-start border-l-2 border-transparent font-normal",
      active ? "border-primary" : "text-muted-foreground hover:text-foreground",
    );

  const toggle = (title: string): void => setOpenTitle((prev) => (prev === title ? undefined : title));

  const scheme = useThemeScheme();
  const logoSrc = scheme === "dark" ? LOGO_DARK_SRC : LOGO_SRC;

  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-border bg-muted/30 p-0 gap-4">
      <div className="px-3 pt-2">
        <img src={logoSrc} alt="Ooneex" className="block h-7 w-auto" />
      </div>
      <div className="px-3">
        <button
          type="button"
          onClick={onOpenPalette}
          className="w-full flex cursor-pointer items-center justify-between rounded-[min(var(--radius-md),8px)] border border-border bg-background px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted"
        >
          <span>Jump to…</span>
          <Kbd.Group>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </Kbd.Group>
        </button>
      </div>
      <div className="min-h-0 flex-1 py-2 gap-6">
        {tree.length === 0 ? (
          <p className="px-2 text-sm text-muted-foreground">No matches.</p>
        ) : (
          <ScrollArea className="h-full pr-4 pl-3">
            <div ref={listRef} className="flex flex-col gap-4">
              {sections.map((section) => {
                const SectionIcon = sectionIcon(section.group);
                return (
                  <div key={section.group} className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 px-2 pb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      <SectionIcon className="size-3.5 shrink-0" />
                      {section.group}
                    </div>
                    {section.nodes.map((node) => {
                      const { group, children } = node;
                      const active = isActive(group);
                      const childActive = children.some(isActive);
                      const open = childActive || openTitle === group.title;

                      if (children.length === 0) {
                        return (
                          <Button
                            key={group.id}
                            data-active={active}
                            variant={active ? "default" : "ghost"}
                            size="xs"
                            onClick={() => onSelect(variantId(group))}
                            className={itemClass(active)}
                          >
                            <span className="truncate">{group.title}</span>
                          </Button>
                        );
                      }

                      return (
                        <div key={group.id} className="flex flex-col gap-1">
                          <div className="flex items-center gap-0.5">
                            <Button
                              data-active={active}
                              variant={active ? "default" : "ghost"}
                              size="xs"
                              onClick={() => onSelect(variantId(group))}
                              className={cn(itemClass(active), "flex-1")}
                            >
                              <span className="truncate">{group.title}</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon-xs"
                              aria-label={open ? `Collapse ${group.title}` : `Expand ${group.title}`}
                              aria-expanded={open}
                              onClick={() => toggle(group.title)}
                              className="shrink-0 text-muted-foreground"
                            >
                              <ChevronRightIcon className={cn("transition-transform", open && "rotate-90")} />
                            </Button>
                          </div>
                          {open ? (
                            <div className="ml-3 flex flex-col gap-1 border-l border-border pl-2">
                              {children.map((child) => {
                                const active = isActive(child);
                                const label = child.title.slice(group.title.length + 1);
                                return (
                                  <Button
                                    key={child.id}
                                    data-active={active}
                                    variant={active ? "default" : "ghost"}
                                    size="xs"
                                    onClick={() => onSelect(variantId(child))}
                                    className={itemClass(active)}
                                  >
                                    <span className="truncate">{label}</span>
                                  </Button>
                                );
                              })}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        )}
      </div>
    </aside>
  );
};
