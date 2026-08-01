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
