import { Input } from "@module/design/components/input";
import { Kbd } from "@module/design/components/kbd";
import { ScrollArea } from "@module/design/components/scroll-area";
import { useThemeScheme } from "@module/design/hooks/useTheme";
import { useEffect, useMemo, useRef } from "react";
import type { RouteEntryType } from "../route";
import { buildSections } from "../route";
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

/** The API's table of contents — every route, sectioned by the module that serves it. */
export const Sidebar = ({ routes, selectedId, query, onQueryChange, onSelect, onOpenPalette }: SidebarPropsType) => {
  const listRef = useRef<HTMLDivElement>(null);
  const sections = useMemo(() => buildSections(routes), [routes]);
  const scheme = useThemeScheme();

  // Follow selection changes made elsewhere (URL, palette).
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>('[data-active="true"]')?.scrollIntoView({ block: "nearest" });
  }, [selectedId]);

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
        {sections.length === 0 ? (
          <p className="px-5 text-sm text-muted-foreground">No routes match.</p>
        ) : (
          <ScrollArea className="h-full pl-3 pr-4">
            <div ref={listRef} className="flex flex-col gap-4">
              {sections.map((section) => (
                <div key={section.group} className="flex flex-col gap-0.5">
                  <div className="px-2 pb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {section.group}
                  </div>
                  {section.routes.map(({ id, meta }) => {
                    const active = id === selectedId;
                    return (
                      <button
                        key={id}
                        type="button"
                        data-active={active}
                        onClick={() => onSelect(id)}
                        className={cn(
                          "flex w-full cursor-pointer items-center gap-2 rounded-[min(var(--radius-md),8px)] border-l-2 border-transparent px-2 py-1 text-left transition-colors",
                          active
                            ? "border-primary bg-muted text-foreground"
                            : "text-muted-foreground hover:bg-muted/60",
                        )}
                      >
                        <MethodBadge method={meta.method} />
                        <span
                          className={cn("truncate font-mono text-xs", meta.deprecated && "line-through")}
                          title={meta.path}
                        >
                          {meta.path}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </div>
    </aside>
  );
};
