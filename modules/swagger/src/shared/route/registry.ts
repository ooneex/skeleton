import type { RouteEntryType } from "./navigation";
import { routeId } from "./navigation";
import type { RouteMetaType } from "./types";

/**
 * Every `meta` under `features/`. Route metas are plain data — no component to
 * mount, no styles to pull in — so they are loaded eagerly and the whole API is
 * searchable from the first paint.
 *
 * `import.meta.glob` is a Vite transform, which is why the discovery lives in
 * this file alone: everything the explorer does *with* the routes sits in
 * `navigation.ts`, where it runs (and is tested) outside a bundler.
 */
const metas = import.meta.glob<RouteMetaType>("../../features/**/*.route.ts", {
  eager: true,
  import: "meta",
});

const entries: RouteEntryType[] = Object.values(metas)
  .filter((meta): meta is RouteMetaType => Boolean(meta?.key && meta.path))
  .map((meta) => ({ id: routeId(meta), meta }));

export const loadRoutes = (): RouteEntryType[] => entries;
