/** `{{ name }}` — the placeholder syntax an API client reader already knows. */
const PLACEHOLDER = /\{\{\s*([\w.-]+)\s*\}\}/g;

/**
 * Substitute `{{variables}}` in one string.
 *
 * An unknown name is left standing rather than blanked: a request that fires
 * with a literal `{{token}}` in its header tells you what is missing, whereas
 * one that fires with an empty header fails somewhere else entirely.
 */
export const interpolate = (value: string, variables: Record<string, string>): string =>
  value.replace(PLACEHOLDER, (whole, name: string) => variables[name] ?? whole);

/** The same, over every value of a record. */
export const interpolateAll = (
  values: Record<string, string>,
  variables: Record<string, string>,
): Record<string, string> =>
  Object.fromEntries(Object.entries(values).map(([key, value]) => [key, interpolate(value, variables)]));

/** Every `{{name}}` a string reaches for, in order of first appearance. */
export const placeholdersIn = (value: string): string[] => {
  const names: string[] = [];
  for (const match of value.matchAll(PLACEHOLDER)) {
    const name = match[1];
    if (name && !names.includes(name)) {
      names.push(name);
    }
  }
  return names;
};

/** The `{{names}}` a request reaches for that the environment cannot resolve. */
export const missingPlaceholders = (values: readonly string[], variables: Record<string, string>): string[] => {
  const missing: string[] = [];
  for (const value of values) {
    for (const name of placeholdersIn(value)) {
      if (!(name in variables) && !missing.includes(name)) {
        missing.push(name);
      }
    }
  }
  return missing;
};
