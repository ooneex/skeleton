import type { ComponentType, SVGProps } from "react";
import type { IconSizeType, IconStyleType } from "./icons.data";

export type IconComponentType = ComponentType<SVGProps<SVGSVGElement>>;

type IconModuleType = Record<string, IconComponentType>;

/**
 * Every icon file under the design module, imported lazily — `eager: false` keeps this to a map
 * of ~19k importer functions instead of loading every icon's code up front. Individual icons are
 * only fetched once they're actually rendered (see `loadIcon`).
 */
const iconModules = import.meta.glob<IconModuleType>("../../../../design/src/icons/*/*/*/*.tsx");

/** Parses `type/category/size/Name.tsx` out of a glob key, independent of its relative prefix. */
const KEY_PATTERN = /icons\/(fill|outline)\/([^/]+)\/(sm|md|lg)\/([^/]+)\.tsx$/;

const importerIndex = new Map<string, () => Promise<IconModuleType>>();
for (const [path, importer] of Object.entries(iconModules)) {
  const match = KEY_PATTERN.exec(path);
  if (!match) {
    continue;
  }
  const [, style, category, size, name] = match;
  importerIndex.set(`${style}|${category}|${size}|${name}`, importer);
}

/** Resolves an icon's component for the given style/category/size, loading its module on first use. */
export const loadIcon = async (
  style: IconStyleType,
  category: string,
  size: IconSizeType,
  name: string,
): Promise<IconComponentType | undefined> => {
  const importer = importerIndex.get(`${style}|${category}|${size}|${name}`);
  if (!importer) {
    return undefined;
  }
  const mod = await importer();
  return mod[name];
};
