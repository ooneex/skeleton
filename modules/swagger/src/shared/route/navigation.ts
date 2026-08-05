import type { RouteMetaType } from "./types";

/** A route as the explorer navigates it: its `meta` plus the id the URL carries. */
export type RouteEntryType = {
  /** Stable, URL-safe id derived from the method and the path. */
  id: string;
  meta: RouteMetaType;
};

/** A sidebar section — the routes of one source module, in declaration order. */
export type RouteSectionType = {
  group: string;
  routes: RouteEntryType[];
};

/** Fallback section for metas that don't declare a `group`. */
export const DEFAULT_GROUP = "API";

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/**
 * The id a route is addressed by. Derived from the method and the path rather
 * than the route key, so a link keeps working when a controller is renamed and
 * breaks when the endpoint it points at actually moves.
 */
export const routeId = (meta: RouteMetaType): string => slugify(`${meta.method}-${meta.path}`);

export const findRoute = (routes: RouteEntryType[], id: string | undefined): RouteEntryType | undefined =>
  id ? routes.find((entry) => entry.id === id) : routes[0];

/** Partition the routes into sidebar sections keyed by `meta.group`, in first-seen order. */
export const buildSections = (routes: RouteEntryType[]): RouteSectionType[] => {
  const sections: RouteSectionType[] = [];
  for (const route of routes) {
    const group = route.meta.group ?? DEFAULT_GROUP;
    const section = sections.find((candidate) => candidate.group === group);
    if (section) {
      section.routes.push(route);
    } else {
      sections.push({ group, routes: [route] });
    }
  }
  return sections;
};

/** Free-text match over everything a reader would type to find a route. */
export const matchesQuery = (route: RouteEntryType, query: string): boolean => {
  const { meta } = route;
  const haystack = [
    meta.title,
    meta.key,
    meta.path,
    meta.method,
    meta.group ?? "",
    meta.summary ?? "",
    ...(meta.tags ?? []),
    ...meta.roles,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
};

export const filterRoutes = (routes: RouteEntryType[], query: string): RouteEntryType[] => {
  const needle = query.trim().toLowerCase();
  if (needle === "") {
    return routes;
  }
  return routes.filter((route) => matchesQuery(route, needle));
};

/** A folder of the sidebar tree: a path segment, its subfolders and its routes. */
export type RouteFolderType = {
  /** The segment itself, e.g. `admin`. */
  name: string;
  /** The full prefix it stands for, used as a stable id. */
  path: string;
  folders: RouteFolderType[];
  routes: RouteEntryType[];
};

/**
 * The segments a path contributes to the tree.
 *
 * The mount prefix and the version are addressing, not structure — every route
 * carries them, so foldering by them would produce one `api > v1` funnel and
 * nothing else. Everything up to and including the `v<n>` segment is dropped.
 */
export const routeSegments = (path: string): string[] => {
  const segments = path.split("/").filter((segment) => segment !== "");
  const version = segments.findIndex((segment) => /^v\d+$/.test(segment));
  return version === -1 ? segments : segments.slice(version + 1);
};

/**
 * Fold the routes into a tree keyed by their path segments, so `/admin/stats`
 * and `/admin/users` meet under one `admin` folder whatever module serves them.
 *
 * The last segment names the route, not a folder — only what precedes it nests.
 */
export const buildTree = (routes: RouteEntryType[]): RouteFolderType => {
  const root: RouteFolderType = { name: "", path: "", folders: [], routes: [] };

  for (const route of routes) {
    const segments = routeSegments(route.meta.path);
    // The leaf is the route itself; only the segments before it are folders.
    const folders = segments.slice(0, -1);

    let node = root;
    for (const segment of folders) {
      const path = `${node.path}/${segment}`;
      let child = node.folders.find((candidate) => candidate.name === segment);
      if (!child) {
        child = { name: segment, path, folders: [], routes: [] };
        node.folders.push(child);
      }
      node = child;
    }
    node.routes.push(route);
  }

  return root;
};

/** Whether a folder holds the given route, at any depth. */
export const folderContains = (folder: RouteFolderType, id: string): boolean =>
  folder.routes.some((route) => route.id === id) || folder.folders.some((child) => folderContains(child, id));
