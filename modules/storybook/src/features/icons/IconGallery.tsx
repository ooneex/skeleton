import { type ChangeEvent, type ReactNode, useEffect, useMemo, useState } from "react";
import { Badge } from "../../shared/components/badge";
import { Input } from "../../shared/components/input";
import { ScrollArea } from "../../shared/components/scroll-area";
import { Select } from "../../shared/components/select";
import { Tabs } from "../../shared/components/tabs";
import { IconTile } from "./IconTile";
import { type IconEntryType, type IconSizeType, type IconStyleType, loadIconManifest } from "./icons.manifest";

const PAGE_SIZE = 150;

const SIZE_OPTIONS: readonly { value: IconSizeType; label: string }[] = [
  { value: "sm", label: "Small (16px)" },
  { value: "md", label: "Medium (24px)" },
  { value: "lg", label: "Large (32px)" },
];

/** True when the icon's name, category, or tags contain every whitespace-separated term in `needle`. */
const matchesQuery = (icon: IconEntryType, needle: string): boolean => {
  if (needle === "") {
    return true;
  }
  const haystack = `${icon.label} ${icon.name} ${icon.categoryLabel} ${icon.tags.join(" ")}`.toLowerCase();
  return needle.split(/\s+/).every((term) => haystack.includes(term));
};

export type IconGalleryPropsType = {
  /** Icon rendered inside the search box, sourced from `@module/design/icons`. */
  searchIcon: ReactNode;
};

/**
 * The `Icons` story page: a single searchable, filterable gallery of every icon shipped by
 * `@module/design/icons`. Besides `searchIcon`, the search box, tag chips, and size/style filters
 * are all internal state, so it renders the same whether previewed here or dropped into an app.
 */
export const IconGallery = ({ searchIcon }: IconGalleryPropsType) => {
  const [icons, setIcons] = useState<readonly IconEntryType[]>([]);
  const [loadError, setLoadError] = useState<string>();
  const [query, setQuery] = useState("");
  const [style, setStyle] = useState<IconStyleType>("outline");
  const [size, setSize] = useState<IconSizeType>("sm");
  const [activeTag, setActiveTag] = useState<string>();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    let cancelled = false;

    void loadIconManifest()
      .then((loaded) => {
        if (!cancelled) {
          setIcons(loaded);
        }
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setLoadError(error instanceof Error ? error.message : "Unable to load the icon catalogue.");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return icons.filter(
      (icon) =>
        icon.sizes.includes(size) && (!activeTag || icon.tags.includes(activeTag)) && matchesQuery(icon, needle),
    );
  }, [activeTag, icons, query, size]);

  const visible = filtered.slice(0, visibleCount);

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
    setVisibleCount(PAGE_SIZE);
  };

  const onStyleChange = (value: string): void => {
    setStyle(value as IconStyleType);
    setVisibleCount(PAGE_SIZE);
  };

  const onSizeChange = (value: string | null): void => {
    setSize((value as IconSizeType) ?? "sm");
    setVisibleCount(PAGE_SIZE);
  };

  const onTagSelect = (tag: string): void => {
    setActiveTag((current) => (current === tag ? undefined : tag));
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-background text-foreground">
      <div className="flex flex-col gap-3 border-b border-border p-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative min-w-56 flex-1">
            <span className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground">
              {searchIcon}
            </span>
            <Input
              size="sm"
              placeholder="Search by name or tag…"
              value={query}
              onChange={onQueryChange}
              className="pl-8"
            />
          </div>
          <Tabs value={style} onValueChange={onStyleChange}>
            <Tabs.List size="sm">
              <Tabs.Trigger value="outline" className="data-active:bg-primary data-active:text-primary-foreground">
                Outline
              </Tabs.Trigger>
              <Tabs.Trigger value="fill" className="data-active:bg-primary data-active:text-primary-foreground">
                Fill
              </Tabs.Trigger>
              <Tabs.Indicator />
            </Tabs.List>
          </Tabs>
          <Select value={size} onValueChange={onSizeChange}>
            <Select.Trigger size="sm" className="w-40">
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              {SIZE_OPTIONS.map((option) => (
                <Select.Item key={option.value} size="sm" value={option.value}>
                  {option.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>
            {filtered.length} icon{filtered.length === 1 ? "" : "s"}
          </span>
          {activeTag ? (
            <button type="button" onClick={() => onTagSelect(activeTag)}>
              <Badge variant="secondary" size="xs" className="cursor-pointer">
                tag: {activeTag}
              </Badge>
            </button>
          ) : null}
        </div>
      </div>

      <ScrollArea className="min-h-0 flex-1">
        <div className="p-3">
          {loadError ? <p className="p-8 text-center text-sm text-destructive">{loadError}</p> : null}
          {!loadError && icons.length === 0 ? (
            <p className="p-8 text-center text-sm text-muted-foreground">Loading icons…</p>
          ) : null}
          {icons.length > 0 && visible.length === 0 ? (
            <p className="p-8 text-center text-sm text-muted-foreground">No icons match your search.</p>
          ) : (
            <div className="grid grid-cols-5 gap-2">
              {visible.map((icon) => (
                <IconTile
                  key={`${icon.category}/${icon.name}`}
                  icon={icon}
                  svg={icon.svgs[style]?.[size]}
                  size={size}
                  activeTag={activeTag}
                  onTagSelect={onTagSelect}
                />
              ))}
            </div>
          )}
          {icons.length > 0 && visibleCount < filtered.length ? (
            <div className="flex justify-center pt-4">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                className="rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted"
              >
                Load {Math.min(PAGE_SIZE, filtered.length - visibleCount)} more…
              </button>
            </div>
          ) : null}
        </div>
      </ScrollArea>
    </div>
  );
};
