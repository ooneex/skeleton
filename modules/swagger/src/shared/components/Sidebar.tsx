import { Input } from "@module/design/components/input";
import { Kbd } from "@module/design/components/kbd";
import { ScrollArea } from "@module/design/components/scroll-area";
import { useThemeScheme } from "@module/design/hooks/useTheme";
import { ChevronRightIcon } from "@module/design/icons/outline/arrows/sm/ChevronRightIcon";
import { useEffect, useMemo, useRef, useState } from "react";
import type { RouteEntryType, RouteFolderType } from "../route";
import { buildTree, folderContains } from "../route";
import { cn } from "../utils/cn";
import { MethodBadge } from "./MethodBadge";

// Served from the module's public/ directory at the site root. The dark variant
// carries a light wordmark so it stays legible on dark themes.
const LOGO_SRC = "/logo-full.svg";
const LOGO_DARK_SRC = "/logo-full-dark.svg";

type SidebarPropsType = {
  routes: RouteEntryType[];
  selectedId: string;
  query: string;
  onQueryChange: (query: string) => void;
  onSelect: (id: string) => void;
  onOpenPalette: () => void;
};

/** The last segment of a path — what names the route inside its folder. */
const leafOf = (path: string): string => path.split("/").filter(Boolean).pop() ?? path;

type RouteButtonPropsType = {
  route: RouteEntryType;
  active: boolean;
  onSelect: (id: string) => void;
};

const RouteButton = ({ route, active, onSelect }: RouteButtonPropsType) => (
  <button
    type="button"
    data-active={active}
    onClick={() => onSelect(route.id)}
    title={route.meta.path}
    className={cn(
      "flex w-full cursor-pointer items-center gap-2 rounded-[min(var(--radius-md),8px)] border-l-2 border-transparent px-2 py-1 text-left transition-colors",
      active ? "border-primary bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/60",
    )}
  >
    <MethodBadge method={route.meta.method} />
    <span className={cn("truncate font-mono text-xs", route.meta.deprecated && "line-through")}>
      {leafOf(route.meta.path)}
    </span>
  </button>
);

type FolderPropsType = {
  folder: RouteFolderType;
  depth: number;
  selectedId: string;
  onSelect: (id: string) => void;
};

/**
 * One folder of the tree. It opens itself when it holds the selection, so
 * landing on a shared link never leaves the route hidden inside a closed
 * folder.
 */
const Folder = ({ folder, depth, selectedId, onSelect }: FolderPropsType) => {
  const holdsSelection = folderContains(folder, selectedId);
  const [open, setOpen] = useState(holdsSelection);

  useEffect(() => {
    if (holdsSelection) {
      setOpen(true);
    }
  }, [holdsSelection]);

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center gap-1 rounded-[min(var(--radius-md),8px)] px-2 py-1 text-left text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
      >
        <ChevronRightIcon className={cn("size-3 shrink-0 transition-transform", open && "rotate-90")} />
        <span className="truncate font-mono">{folder.name}</span>
        <span className="ml-auto shrink-0 text-2xs opacity-60">{folder.routes.length + folder.folders.length}</span>
      </button>
      {open ? (
        <div
          className={cn("flex flex-col gap-0.5 border-l border-border", depth === 0 ? "ml-2 pl-1.5" : "ml-3 pl-1.5")}
        >
          {folder.folders.map((child) => (
            <Folder key={child.path} folder={child} depth={depth + 1} selectedId={selectedId} onSelect={onSelect} />
          ))}
          {folder.routes.map((route) => (
            <RouteButton key={route.id} route={route} active={route.id === selectedId} onSelect={onSelect} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

/** The API's table of contents — every route, nested by the folders of its path. */
export const Sidebar = ({ routes, selectedId, query, onQueryChange, onSelect, onOpenPalette }: SidebarPropsType) => {
  const listRef = useRef<HTMLDivElement>(null);
  const tree = useMemo(() => buildTree(routes), [routes]);
  const scheme = useThemeScheme();

  // Follow selection changes made elsewhere (URL, palette).
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>('[data-active="true"]')?.scrollIntoView({ block: "nearest" });
  }, [selectedId]);

  const empty = tree.folders.length === 0 && tree.routes.length === 0;

  return (
    <aside className="flex w-72 shrink-0 flex-col gap-4 border-r border-border bg-muted/30">
      <div className="px-3 pt-2">
        <img
          alt="API reference"
          className="block h-7 w-auto"
          height={28}
          src={scheme === "dark" ? LOGO_DARK_SRC : LOGO_SRC}
          width={112}
        />
      </div>
      <div className="flex flex-col gap-2 px-3">
        <Input
          size="xs"
          value={query}
          placeholder="Filter routes…"
          aria-label="Filter routes"
          onChange={(event) => onQueryChange(event.target.value)}
        />
        <button
          type="button"
          onClick={onOpenPalette}
          className="flex w-full cursor-pointer items-center justify-between rounded-[min(var(--radius-md),8px)] border border-border bg-background px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted"
        >
          <span>Jump to a route…</span>
          <Kbd.Group>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </Kbd.Group>
        </button>
      </div>
      <div className="min-h-0 flex-1 pb-2">
        {empty ? (
          <p className="px-5 text-sm text-muted-foreground">No routes match.</p>
        ) : (
          <ScrollArea className="h-full pl-3 pr-4">
            <div ref={listRef} className="flex flex-col gap-0.5">
              {tree.folders.map((folder) => (
                <Folder key={folder.path} folder={folder} depth={0} selectedId={selectedId} onSelect={onSelect} />
              ))}
              {tree.routes.map((route) => (
                <RouteButton key={route.id} route={route} active={route.id === selectedId} onSelect={onSelect} />
              ))}
            </div>
          </ScrollArea>
        )}
      </div>
    </aside>
  );
};
