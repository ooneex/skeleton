import { getRouteApi } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import type { LoadedStoryGroupType, LoadedVariantType, StoryGroupType } from "../story";
import { loadStoryGroup, loadStoryGroups } from "../story";
import { Canvas } from "./Canvas";
import { CommandPalette } from "./CommandPalette";
import { Controls } from "./Controls";
import { Sidebar } from "./Sidebar";

const route = getRouteApi("/");

type SelectionType = {
  group: StoryGroupType;
  variant: StoryGroupType["variants"][number];
};

type LoadedSelectionType = {
  group: LoadedStoryGroupType;
  variant: LoadedVariantType;
};

const matchesQuery = (group: StoryGroupType, variant: StoryGroupType["variants"][number], query: string): boolean => {
  const haystack = [group.title, group.group, variant.name, ...group.tags, ...variant.searchableControls]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
};

const filterGroups = (groups: StoryGroupType[], query: string): StoryGroupType[] => {
  const needle = query.trim().toLowerCase();
  if (needle === "") {
    return groups;
  }

  return groups
    .map((group) => ({ ...group, variants: group.variants.filter((variant) => matchesQuery(group, variant, needle)) }))
    .filter((group) => group.variants.length > 0);
};

/** File every variant of `group` under its id, so a story lookup costs one map hit. */
const indexVariants = (index: Map<string, SelectionType>, group: StoryGroupType): void => {
  for (const variant of group.variants) {
    index.set(variant.id, { group, variant });
  }
};

/** Index every variant id to the group/variant pair it selects. */
const buildVariantIndex = (groups: StoryGroupType[]): Map<string, SelectionType> => {
  const index = new Map<string, SelectionType>();
  for (const group of groups) {
    indexVariants(index, group);
  }
  return index;
};

/** The story shown when the URL names none: the first variant of the first non-empty group. */
const firstVariant = (groups: StoryGroupType[]): SelectionType | undefined => {
  for (const group of groups) {
    const variant = group.variants[0];
    if (variant) {
      return { group, variant };
    }
  }
  return undefined;
};

export const StorybookApp = () => {
  const { q, story, props } = route.useSearch();
  const navigate = route.useNavigate();

  const query = q ?? "";
  const groups = useMemo(() => loadStoryGroups(), []);
  const visibleGroups = useMemo(() => filterGroups(groups, query), [groups, query]);
  const variantIndex = useMemo(() => buildVariantIndex(visibleGroups), [visibleGroups]);
  const selected = useMemo(
    () => (story ? variantIndex.get(story) : firstVariant(visibleGroups)),
    [variantIndex, visibleGroups, story],
  );
  const [loadedSelection, setLoadedSelection] = useState<LoadedSelectionType>();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [controlsCollapsed, setControlsCollapsed] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const groupId = selected?.group.id;

    if (!groupId) {
      setLoadedSelection(undefined);
      return () => {
        cancelled = true;
      };
    }

    if (loadedSelection?.group.id !== groupId) {
      setLoadedSelection(undefined);
    }

    void loadStoryGroup(groupId).then((group) => {
      if (cancelled || !group) {
        return;
      }

      const variant = group.variants.find((item) => item.id === selected?.variant.id) ?? group.variants[0];
      if (!variant) {
        return;
      }

      setLoadedSelection({ group, variant });
    });

    return () => {
      cancelled = true;
    };
  }, [selected?.group.id, selected?.variant.id]);

  const setQuery = (value: string): void => {
    navigate({ search: (prev) => ({ ...prev, q: value === "" ? undefined : value }) });
  };

  const selectStory = (id: string): void => {
    navigate({ search: (prev) => ({ ...prev, story: id, props: undefined }) });
  };

  const jumpToStory = (id: string): void => {
    setPaletteOpen(false);
    selectStory(id);
  };

  const palette = (
    <CommandPalette groups={groups} open={paletteOpen} onOpenChange={setPaletteOpen} onSelect={jumpToStory} />
  );

  if (!selected) {
    return (
      <div className="flex h-screen w-full bg-background text-foreground">
        <Sidebar
          groups={visibleGroups}
          selectedId=""
          query={query}
          onQueryChange={setQuery}
          onSelect={selectStory}
          onOpenPalette={() => setPaletteOpen(true)}
        />
        <div className="flex flex-1 items-center justify-center text-muted-foreground">No stories found.</div>
        {palette}
      </div>
    );
  }

  if (!loadedSelection) {
    return (
      <div className="flex h-screen w-full bg-background text-foreground">
        <Sidebar
          groups={visibleGroups}
          selectedId={selected.variant.id}
          query={query}
          onQueryChange={setQuery}
          onSelect={selectStory}
          onOpenPalette={() => setPaletteOpen(true)}
        />
        <div className="flex flex-1 items-center justify-center text-muted-foreground">Loading story…</div>
        {palette}
      </div>
    );
  }

  const { group, variant } = loadedSelection;
  const overrides = story === variant.id ? (props ?? {}) : {};
  const args = { ...variant.args, ...overrides };

  const setArg = (name: string, value: unknown): void => {
    navigate({
      search: (prev) => ({
        ...prev,
        story: variant.id,
        props: { ...(prev.story === variant.id ? (prev.props ?? {}) : {}), [name]: value },
      }),
    });
  };

  const resetArgs = (): void => {
    navigate({ search: (prev) => ({ ...prev, props: undefined }) });
  };

  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      <Sidebar
        groups={visibleGroups}
        selectedId={variant.id}
        query={query}
        onQueryChange={setQuery}
        onSelect={selectStory}
        onOpenPalette={() => setPaletteOpen(true)}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <Canvas group={group} variant={variant} args={args} />
        {group.title === "Icons" ? null : (
          <Controls
            variant={variant}
            args={args}
            onChange={setArg}
            onReset={resetArgs}
            collapsed={controlsCollapsed}
            onCollapsedChange={setControlsCollapsed}
          />
        )}
      </div>
      {palette}
    </div>
  );
};
