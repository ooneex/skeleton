import { readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { flattenFields } from "../src/shared/route/fields";
import { routeId } from "../src/shared/route/navigation";
import type { FieldType, RouteMetaType } from "../src/shared/route/types";

/**
 * The routes the explorer serves, read from the metas under `src/features/`.
 *
 * `talos swagger:create` rebuilds that folder from the target's controllers, so
 * a spec never names a route: it picks one with the shape it needs and skips
 * itself when the API has none.
 */
const FEATURES_DIR = join(import.meta.dirname, "../src/features");

export type FoundRouteType = {
  id: string;
  meta: RouteMetaType;
};

const loadMetas = async (): Promise<RouteMetaType[]> => {
  const files = readdirSync(FEATURES_DIR, { recursive: true, encoding: "utf8" })
    .filter((file) => file.endsWith(".route.ts"))
    .sort();
  const modules = await Promise.all(
    files.map((file) => import(pathToFileURL(join(FEATURES_DIR, file)).href) as Promise<{ meta?: RouteMetaType }>),
  );

  return modules.flatMap((module) => (module.meta?.key && module.meta.path ? [module.meta] : []));
};

export const findRoute = async (matches: (meta: RouteMetaType) => boolean): Promise<FoundRouteType | undefined> => {
  const meta = (await loadMetas()).find(matches);

  return meta ? { id: routeId(meta), meta } : undefined;
};

/** The values the try-it form renders one input for: a JSON body is a text editor instead. */
const formFieldsOf = (meta: RouteMetaType): readonly FieldType[] => [
  ...(meta.params ?? []),
  ...(meta.queries ?? []),
  ...(meta.payload?.contentType === "multipart" ? (meta.payload.fields ?? []) : []),
];

/** An HTTP route that takes nothing: it can be sent as soon as it is opened. */
export const isBareHttpRoute = (meta: RouteMetaType): boolean =>
  meta.method !== "socket" &&
  (meta.params ?? []).length === 0 &&
  (meta.queries ?? []).length === 0 &&
  meta.payload === undefined;

/** The first `parent.child` label a nested form field is rendered under. */
export const nestedLabelOf = (meta: RouteMetaType): string | undefined =>
  meta.method === "socket"
    ? undefined
    : flattenFields(formFieldsOf(meta)).find((field) => field.name.includes("."))?.name;

/** A multipart route that requires a file. */
export const requiresFile = (meta: RouteMetaType): boolean =>
  (meta.payload?.fields ?? []).some((field) => field.type === "file" && field.required);

/**
 * A socket route that can send a message as soon as it connects: the message is
 * a JSON editor seeded from the payload example, so only a required path or
 * query value would hold the button back.
 */
export const isSendableSocket = (meta: RouteMetaType): boolean =>
  meta.method === "socket" &&
  (meta.params ?? []).length === 0 &&
  flattenFields(meta.queries).every((field) => !field.required || field.within !== undefined);
