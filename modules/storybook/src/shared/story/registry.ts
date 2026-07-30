import type { ComponentType } from "react";
import { recordAction } from "./actionLog";
import { formatArg } from "./formatArg";
import { storyLogger } from "./logger";
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
  searchableControls: readonly string[];
  args: Record<string, unknown>;
  controls: LoadedControlType[];
};

export type StoryGroupType = {
  id: string;
  title: string;
  group: string;
  tags: readonly string[];
  variants: Array<Pick<LoadedVariantType, "id" | "name" | "usage" | "searchableControls">>;
};

export type LoadedStoryGroupType = Omit<StoryGroupType, "variants"> & {
  component: ComponentType<Record<string, unknown>>;
  variants: LoadedVariantType[];
};

/** Fallback sidebar section for metas that don't declare a `group`. */
const DEFAULT_GROUP = "Components";

type RawComponentType = ComponentType<Record<string, unknown>>;

type RawMetaType = MetaType<RawComponentType>;

type RawStorySummaryType = {
  title: string;
  group?: string;
  tags?: readonly string[];
  usage?: string;
  propNames?: readonly string[];
};

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const withAction =
  (name: string, callback: (...args: readonly unknown[]) => unknown) =>
  (...args: readonly unknown[]): unknown => {
    recordAction(name, args);
    storyLogger.info(`[action] ${name}`, { args: args.map(formatArg).join(", ") });
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
    searchableControls: controls.map((control) => control.name),
    args,
    controls,
  };
};

const summaryModules = import.meta.glob<string>("../../features/**/*.stories.{ts,tsx}", {
  eager: true,
  import: "default",
  query: "?raw",
});

const metaLoaders = import.meta.glob<RawMetaType>("../../features/**/*.stories.{ts,tsx}", {
  import: "meta",
});

const readQuotedString = (value: string, start: number): { value: string; end: number } | undefined => {
  if (value[start] !== '"') {
    return undefined;
  }

  let escaped = false;
  for (let index = start + 1; index < value.length; index += 1) {
    const character = value[index];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (character === "\\") {
      escaped = true;
      continue;
    }
    if (character === '"') {
      return {
        value: JSON.parse(value.slice(start, index + 1)) as string,
        end: index + 1,
      };
    }
  }

  return undefined;
};

const readBracketed = (value: string, start: number, open: "[" | "{"): { value: string; end: number } | undefined => {
  if (value[start] !== open) {
    return undefined;
  }

  const close = open === "[" ? "]" : "}";
  let depth = 0;
  let index = start;
  let quote: '"' | "'" | "`" | undefined;
  let escaped = false;

  while (index < value.length) {
    const character = value[index];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (character === "\\") {
        escaped = true;
      } else if (character === quote) {
        quote = undefined;
      }
      index += 1;
      continue;
    }

    if (character === '"' || character === "'" || character === "`") {
      quote = character;
      index += 1;
      continue;
    }

    if (character === open) {
      depth += 1;
    } else if (character === close) {
      depth -= 1;
      if (depth === 0) {
        return { value: value.slice(start, index + 1), end: index + 1 };
      }
    }

    index += 1;
  }

  return undefined;
};

const readFieldSource = (source: string, field: string): string | undefined => {
  const match = new RegExp(`\\b${field}:\\s*`).exec(source);
  if (!match) {
    return undefined;
  }

  let start = match.index + match[0].length;
  while (/\s/.test(source[start] ?? "")) {
    start += 1;
  }

  const marker = source[start];
  if (marker === '"') {
    return readQuotedString(source, start)?.value;
  }
  if (marker === "[" || marker === "{") {
    return readBracketed(source, start, marker)?.value;
  }

  return undefined;
};

const readStringList = (source: string): string[] => {
  const values: string[] = [];
  const matcher = /"((?:[^"\\]|\\.)*)"/g;
  let match = matcher.exec(source);
  while (match) {
    values.push(JSON.parse(`"${match[1]}"`) as string);
    match = matcher.exec(source);
  }
  return values;
};

const pushPropName = (propsSource: string, blockStart: number, blockEnd: number, names: string[]): void => {
  const block = propsSource.slice(blockStart, blockEnd + 1);
  const name = /name:\s*"((?:[^"\\]|\\.)*)"/.exec(block)?.[1];
  if (!name) {
    return;
  }

  names.push(JSON.parse(`"${name}"`) as string);
};

const advanceQuotedCharacter = (
  quote: '"' | "'" | "`" | undefined,
  escaped: boolean,
  character: string,
): { escaped: boolean; quote: '"' | "'" | "`" | undefined } => {
  if (!quote) {
    return { escaped, quote };
  }
  if (escaped) {
    return { escaped: false, quote };
  }
  if (character === "\\") {
    return { escaped: true, quote };
  }
  if (character === quote) {
    return { escaped: false, quote: undefined };
  }

  return { escaped: false, quote };
};

const advancePropBlock = (
  propsSource: string,
  names: string[],
  character: string,
  depth: number,
  blockStart: number,
  index: number,
): { blockStart: number; depth: number } => {
  if (character === "{") {
    return {
      blockStart: depth === 0 ? index : blockStart,
      depth: depth + 1,
    };
  }

  if (character !== "}") {
    return { blockStart, depth };
  }

  const nextDepth = depth - 1;
  if (nextDepth !== 0 || blockStart < 0) {
    return { blockStart, depth: nextDepth };
  }

  pushPropName(propsSource, blockStart, index, names);
  return { blockStart: -1, depth: nextDepth };
};

const readPropNames = (propsSource: string | undefined): string[] => {
  if (!propsSource) {
    return [];
  }

  const names: string[] = [];
  let depth = 0;
  let index = 0;
  let blockStart = -1;
  let quote: '"' | "'" | "`" | undefined;
  let escaped = false;

  while (index < propsSource.length) {
    const character = propsSource[index] ?? "";

    if (quote) {
      const nextState = advanceQuotedCharacter(quote, escaped, character);
      escaped = nextState.escaped;
      quote = nextState.quote;
      index += 1;
      continue;
    }

    if (character === '"' || character === "'" || character === "`") {
      quote = character;
      index += 1;
      continue;
    }

    const nextBlockState = advancePropBlock(propsSource, names, character, depth, blockStart, index);
    blockStart = nextBlockState.blockStart;
    depth = nextBlockState.depth;

    index += 1;
  }

  return names;
};

const parseStorySummary = (source: string): RawStorySummaryType | undefined => {
  const title = readFieldSource(source, "title");
  if (!title) {
    return undefined;
  }

  const tags = readStringList(readFieldSource(source, "tags") ?? "[]");
  const usageSource = readFieldSource(source, "usage");
  const usage = usageSource?.startsWith("[") ? readStringList(usageSource).join("\n") : usageSource;

  return {
    title,
    group: readFieldSource(source, "group"),
    tags,
    usage,
    propNames: readPropNames(readFieldSource(source, "props")),
  };
};

const summaryById = new Map<string, StoryGroupType>();
const metaLoaderById = new Map<string, () => Promise<RawMetaType>>();
const loadedStoryGroups = new Map<string, LoadedStoryGroupType>();
const pendingStoryGroups = new Map<string, Promise<LoadedStoryGroupType | undefined>>();

const toStoryGroup = (summary: RawStorySummaryType): StoryGroupType => {
  const groupId = slugify(summary.title);
  return {
    id: groupId,
    title: summary.title,
    group: summary.group ?? DEFAULT_GROUP,
    tags: summary.tags ?? [],
    variants: [
      {
        id: groupId,
        name: summary.title,
        usage: summary.usage,
        searchableControls: summary.propNames ?? [],
      },
    ],
  };
};

for (const [path, source] of Object.entries(summaryModules)) {
  const summary = parseStorySummary(source);
  if (!summary) {
    continue;
  }

  const group = toStoryGroup(summary);
  summaryById.set(group.id, group);

  const loader = metaLoaders[path];
  if (loader) {
    metaLoaderById.set(group.id, loader);
  }
}

export const loadStoryGroups = (): StoryGroupType[] => {
  const groups = Array.from(summaryById.values());
  return groups.sort((a, b) => a.title.localeCompare(b.title));
};

export const loadStoryGroup = async (id: string): Promise<LoadedStoryGroupType | undefined> => {
  const cached = loadedStoryGroups.get(id);
  if (cached) {
    return cached;
  }

  const pending = pendingStoryGroups.get(id);
  if (pending) {
    return pending;
  }

  const summary = summaryById.get(id);
  const loader = metaLoaderById.get(id);
  if (!summary || !loader) {
    return undefined;
  }

  const task = loader().then((meta) => {
    if (!meta?.title || !meta.component) {
      return undefined;
    }

    const group: LoadedStoryGroupType = {
      ...summary,
      component: meta.storyComponent ?? meta.component,
      variants: [toVariant(summary.id, meta)],
    };
    loadedStoryGroups.set(id, group);
    pendingStoryGroups.delete(id);
    return group;
  });

  pendingStoryGroups.set(id, task);
  return task;
};
