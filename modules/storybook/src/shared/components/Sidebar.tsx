import { ChevronRightIcon } from "@module/design/icons/outline/arrows/sm/ChevronRightIcon";
import { LayersIcon } from "@module/design/icons/outline/design-development/sm/LayersIcon";
import { ShapesIcon } from "@module/design/icons/outline/design-development/sm/ShapesIcon";
import { TypographyIcon } from "@module/design/icons/outline/design-development/sm/TypographyIcon";
import { useEffect, useMemo, useRef, useState } from "react";
import { useThemeScheme } from "../hooks/useTheme";
import type { StoryGroupType } from "../story";
import { cn } from "../utils/cn";
import { groupBy } from "../utils/groupBy";
import { parentTitle } from "../utils/parentTitle";
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

type TreeNodeType = {
  group: StoryGroupType;
  children: StoryGroupType[];
};

/**
 * Fold the flat, dot-namespaced groups into a one-level tree: a group titled `Foo.Bar`
 * becomes a sub-item of the group titled `Foo` when that parent is present. Groups whose
 * parent is filtered out (or that simply have no dot) stay top-level. One pass files every
 * child under its parent title, so no group is re-scanned per parent.
 */
const buildTree = (groups: StoryGroupType[]): TreeNodeType[] => {
  const titles = new Set(groups.map((group) => group.title));
  const childrenByParent = new Map<string, StoryGroupType[]>();
  const roots: StoryGroupType[] = [];

  for (const group of groups) {
    const parent = parentTitle(group.title);
    if (parent === undefined || !titles.has(parent)) {
      roots.push(group);
      continue;
    }
    const siblings = childrenByParent.get(parent);
    if (siblings) {
      siblings.push(group);
    } else {
      childrenByParent.set(parent, [group]);
    }
  }

  return roots.map((group) => ({ group, children: childrenByParent.get(group.title) ?? [] }));
};

const variantId = (group: StoryGroupType): string => group.variants[0]?.id ?? group.id;

/** File every variant of `group` under its id, so the selected story resolves in one lookup. */
const indexVariants = (index: Map<string, StoryGroupType>, group: StoryGroupType): void => {
  for (const variant of group.variants) {
    index.set(variant.id, group);
  }
};

/** Index every variant id to the group that owns it. */
const buildVariantIndex = (groups: StoryGroupType[]): Map<string, StoryGroupType> => {
  const index = new Map<string, StoryGroupType>();
  for (const group of groups) {
    indexVariants(index, group);
  }
  return index;
};

/** Icon shown next to each sidebar section label, keyed by the section's `group` name. */
const SECTION_ICONS: Record<string, typeof LayersIcon> = {
  Typography: TypographyIcon,
  Icons: ShapesIcon,
};

const sectionIcon = (label: string): typeof LayersIcon => SECTION_ICONS[label] ?? LayersIcon;

/** A sidebar section (`group` label) and the tree nodes filed under it, in first-seen order. */
type SectionType = {
  group: string;
  nodes: TreeNodeType[];
};

/** Partition the folded tree into sections keyed by each top-level node's `group`. */
const buildSections = (nodes: TreeNodeType[]): SectionType[] =>
  Array.from(
    groupBy(nodes, (node) => node.group.group),
    ([group, groupNodes]) => ({ group, nodes: groupNodes }),
  );

const itemClass = (active: boolean): string =>
  cn(
    "w-full justify-start border-l-2 border-transparent font-normal",
    active ? "border-primary" : "text-muted-foreground hover:text-foreground",
  );

type SidebarLinkPropsType = {
  active: boolean;
  label: string;
  className?: string;
  onSelect: () => void;
};

const SidebarLink = ({ active, label, className, onSelect }: SidebarLinkPropsType) => (
  <Button
    data-active={active}
    variant={active ? "default" : "ghost"}
    size="xs"
    onClick={onSelect}
    className={cn(itemClass(active), className)}
  >
    <span className="truncate">{label}</span>
  </Button>
);

/** What every node needs to render itself, beyond the node itself. */
type NodeContextType = {
  /** Id of the group holding the selected variant, if any. */
  activeGroupId: string | undefined;
  /** Title of the parent of the active group — the node kept open for it. */
  activeParentTitle: string | undefined;
  openTitle: string | undefined;
  onToggle: (title: string) => void;
  onSelect: (id: string) => void;
};

const SidebarNode = ({
  node,
  activeGroupId,
  activeParentTitle,
  openTitle,
  onToggle,
  onSelect,
}: NodeContextType & { node: TreeNodeType }) => {
  const { group, children } = node;
  const active = group.id === activeGroupId;

  if (children.length === 0) {
    return <SidebarLink active={active} label={group.title} onSelect={() => onSelect(variantId(group))} />;
  }

  const open = activeParentTitle === group.title || openTitle === group.title;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-0.5">
        <SidebarLink
          active={active}
          label={group.title}
          className="flex-1"
          onSelect={() => onSelect(variantId(group))}
        />
        <Button
          variant="ghost"
          size="icon-xs"
          aria-label={open ? `Collapse ${group.title}` : `Expand ${group.title}`}
          aria-expanded={open}
          onClick={() => onToggle(group.title)}
          className="shrink-0 text-muted-foreground"
        >
          <ChevronRightIcon className={cn("transition-transform", open && "rotate-90")} />
        </Button>
      </div>
      {open ? (
        <div className="ml-3 flex flex-col gap-1 border-l border-border pl-2">
          {children.map((child) => (
            <SidebarLink
              key={child.id}
              active={child.id === activeGroupId}
              label={child.title.slice(group.title.length + 1)}
              onSelect={() => onSelect(variantId(child))}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

const SidebarSection = ({ section, ...context }: NodeContextType & { section: SectionType }) => {
  const SectionIcon = sectionIcon(section.group);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5 px-2 pb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        <SectionIcon className="size-3.5 shrink-0" />
        {section.group}
      </div>
      {section.nodes.map((node) => (
        <SidebarNode key={node.group.id} node={node} {...context} />
      ))}
    </div>
  );
};

export const Sidebar = ({ groups, selectedId, onSelect, onOpenPalette }: SidebarPropsType) => {
  const listRef = useRef<HTMLDivElement>(null);
  const tree = useMemo(() => buildTree(groups), [groups]);
  const sections = useMemo(() => buildSections(tree), [tree]);
  const variantIndex = useMemo(() => buildVariantIndex(groups), [groups]);
  // Accordion: at most one parent is open at a time; `undefined` means none.
  const [openTitle, setOpenTitle] = useState<string>();

  // Scroll the active component into view when selection changes elsewhere (URL, palette).
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>('[data-active="true"]')?.scrollIntoView({ block: "nearest" });
  }, [selectedId]);

  const activeGroup = variantIndex.get(selectedId);
  const activeParentTitle = activeGroup ? parentTitle(activeGroup.title) : undefined;

  const toggle = (title: string): void => setOpenTitle((prev) => (prev === title ? undefined : title));

  const scheme = useThemeScheme();
  const logoSrc = scheme === "dark" ? LOGO_DARK_SRC : LOGO_SRC;

  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-border bg-muted/30 p-0 gap-4">
      <div className="px-3 pt-2">
        <img alt="Talos" className="block h-7 w-auto" height={28} src={logoSrc} width={112} />
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
              {sections.map((section) => (
                <SidebarSection
                  key={section.group}
                  section={section}
                  activeGroupId={activeGroup?.id}
                  activeParentTitle={activeParentTitle}
                  openTitle={openTitle}
                  onToggle={toggle}
                  onSelect={onSelect}
                />
              ))}
            </div>
          </ScrollArea>
        )}
      </div>
    </aside>
  );
};
