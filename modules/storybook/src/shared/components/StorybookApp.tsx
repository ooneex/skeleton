import { getRouteApi } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import type { LoadedVariantType, StoryGroupType } from "../story";
import { loadStoryGroups } from "../story";
import { Canvas } from "./Canvas";
import { CommandPalette } from "./CommandPalette";
import { Controls } from "./Controls";
import { Sidebar } from "./Sidebar";

const route = getRouteApi("/");

type SelectionType = {
  group: StoryGroupType;
  variant: LoadedVariantType;
};

const matchesQuery = (group: StoryGroupType, variant: LoadedVariantType, query: string): boolean => {
  const haystack = [group.title, variant.name, ...group.tags, ...variant.controls.map((control) => control.name)]
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

const findVariant = (groups: StoryGroupType[], id: string | undefined): SelectionType | undefined => {
  for (const group of groups) {
    const variant = id ? group.variants.find((item) => item.id === id) : group.variants[0];
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
  const selected = useMemo(() => findVariant(visibleGroups, story), [visibleGroups, story]);
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

  const { group, variant } = selected;
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
        <Controls
          variant={variant}
          args={args}
          onChange={setArg}
          onReset={resetArgs}
          collapsed={controlsCollapsed}
          onCollapsedChange={setControlsCollapsed}
        />
      </div>
      {palette}
    </div>
  );
};
