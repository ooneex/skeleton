import type { ComponentType } from "react";
import { recordAction } from "./actionLog";
import type { ControlKindType, MetaType, PropOptionType } from "./types";

export type LoadedControlType = {
  name: string;
  control: ControlKindType;
  options?: readonly PropOptionType[];
};

export type LoadedVariantType = {
  id: string;
  name: string;
  usage?: string;
  args: Record<string, unknown>;
  controls: LoadedControlType[];
};

export type StoryGroupType = {
  id: string;
  title: string;
  group: string;
  tags: readonly string[];
  component: ComponentType<Record<string, unknown>>;
  variants: LoadedVariantType[];
};

/** Fallback sidebar section for metas that don't declare a `group`. */
const DEFAULT_GROUP = "Components";

type RawComponentType = ComponentType<Record<string, unknown>>;

type RawMetaType = MetaType<RawComponentType>;

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const withAction =
  (name: string, callback: (...args: readonly unknown[]) => unknown) =>
  (...args: readonly unknown[]): unknown => {
    recordAction(name, args);
    // biome-ignore lint/suspicious/noConsole: action logging is the intended output of a preview spy
    console.info("[action]", name, ...args);
    return callback(...args);
  };

const toVariant = (groupId: string, meta: RawMetaType): LoadedVariantType => {
  const args: Record<string, unknown> = {};
  const controls: LoadedControlType[] = [];

  for (const prop of meta.props ?? []) {
    if (prop.callback) {
      args[prop.name] = withAction(prop.name, prop.callback);
    }
    if (prop.default !== undefined) {
      args[prop.name] = prop.default;
    }
    if (prop.control) {
      controls.push({
        name: prop.name,
        control: prop.control,
        options: prop.options,
      });
    }
  }

  return {
    id: groupId,
    name: meta.title,
    usage: meta.usage,
    args,
    controls,
  };
};

/**
 * Discover every `*.stories.ts(x)` under `features/`, eagerly imported at build time.
 * Each module exports a `meta`; each component becomes a single previewable entry
 * driven by its `meta.props` controls.
 */
export const loadStoryGroups = (): StoryGroupType[] => {
  const modules = import.meta.glob<Record<string, unknown>>("../../features/**/*.stories.{ts,tsx}", {
    eager: true,
  });

  const groups: StoryGroupType[] = [];

  for (const [, mod] of Object.entries(modules)) {
    const meta = mod.meta as RawMetaType | undefined;
    if (!meta?.title || !meta.component) {
      continue;
    }

    const groupId = slugify(meta.title);
    groups.push({
      id: groupId,
      title: meta.title,
      group: meta.group ?? DEFAULT_GROUP,
      tags: meta.tags ?? [],
      component: meta.component,
      variants: [toVariant(groupId, meta)],
    });
  }

  return groups.sort((a, b) => a.title.localeCompare(b.title));
};
