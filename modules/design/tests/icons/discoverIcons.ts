import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

export type IconStyleType = "fill" | "outline";
export type IconSizeType = "sm" | "md" | "lg";

export type IconFileType = {
  /** Absolute path, importable via dynamic `import()`. */
  path: string;
  /** Component name, e.g. "PocketIcon" (matches the filename). */
  name: string;
  style: IconStyleType;
  size: IconSizeType;
  /** Category folder, e.g. "fashion-beauty". */
  category: string;
  source: string;
};

const ICONS_ROOT = join(import.meta.dir, "../../src/icons");

const walk = (dir: string): string[] => {
  const entries = readdirSync(dir);
  const files: string[] = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...walk(full));
    } else if (entry.endsWith(".tsx")) {
      files.push(full);
    }
  }
  return files;
};

/** Discovers every icon file under `src/icons`, parsing its style/size/category from its path. */
export const discoverIcons = (): IconFileType[] => {
  return walk(ICONS_ROOT).map((path) => {
    const relPath = relative(ICONS_ROOT, path);
    const segments = relPath.split(sep);
    const [style, category, size, filename] = segments as [string, string, string, string];
    return {
      path,
      name: filename.replace(/\.tsx$/, ""),
      style: style as IconStyleType,
      size: size as IconSizeType,
      category,
      source: readFileSync(path, "utf-8"),
    };
  });
};

/** Picks one icon per (style, size, category) combination, for representative behavioural checks. */
export const sampleIconsByGroup = (icons: IconFileType[]): IconFileType[] => {
  const seen = new Set<string>();
  const sample: IconFileType[] = [];
  for (const icon of icons) {
    const key = `${icon.style}/${icon.category}/${icon.size}`;
    if (seen.has(key)) continue;
    seen.add(key);
    sample.push(icon);
  }
  return sample;
};

export const VIEWBOX_BY_SIZE: Record<IconSizeType, string> = {
  sm: "0 0 24 24",
  md: "0 0 32 32",
  lg: "0 0 48 48",
};
