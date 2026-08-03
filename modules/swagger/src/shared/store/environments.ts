/**
 * Named environments, the way an API client does them: a set of targets the
 * same request can be replayed against, each carrying its own origin, its own
 * credentials and its own `{{variables}}`.
 *
 * They live in `localStorage` rather than in the URL: an environment is a
 * property of the reader's machine — and holds a token — so it must not travel
 * in a shared link.
 */
export type EnvironmentType = {
  id: string;
  /** Shown in the switcher, e.g. `Local`, `Staging`. */
  name: string;
  /** Backend origin, e.g. `http://localhost:8030`. May itself use `{{variables}}`. */
  baseURL: string;
  /** Sent as `Authorization: Bearer …` on every route that declares roles. */
  token: string;
  /** Free-form substitutions applied to the URL, headers, parameters and body. */
  variables: Record<string, string>;
};

const ENVIRONMENTS_KEY = "swagger:environments";
const ACTIVE_KEY = "swagger:active-environment";

/** Matches the `app.port` an api module ships with in `.env.example.yml`. */
const DEFAULT_BASE_URL = "http://localhost:8030";

export const defaultEnvironment = (): EnvironmentType => ({
  id: "local",
  name: "Local",
  baseURL: DEFAULT_BASE_URL,
  token: "",
  variables: {},
});

/** Drop anything that is not a usable environment, so a corrupt store degrades. */
export const sanitizeEnvironments = (value: unknown): EnvironmentType[] => {
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .filter((entry): entry is Record<string, unknown> => typeof entry === "object" && entry !== null)
    .filter((entry) => typeof entry.id === "string" && entry.id !== "")
    .map((entry) => ({
      id: entry.id as string,
      name: typeof entry.name === "string" && entry.name !== "" ? entry.name : (entry.id as string),
      baseURL: typeof entry.baseURL === "string" ? entry.baseURL : DEFAULT_BASE_URL,
      token: typeof entry.token === "string" ? entry.token : "",
      variables:
        typeof entry.variables === "object" && entry.variables !== null
          ? Object.fromEntries(
              Object.entries(entry.variables as Record<string, unknown>).map(([key, entryValue]) => [
                key,
                String(entryValue),
              ]),
            )
          : {},
    }));
};

/**
 * Every stored environment, never empty — a workspace with none gets the
 * default one rather than a switcher with nothing in it.
 */
export const loadEnvironments = (): EnvironmentType[] => {
  try {
    const stored = sanitizeEnvironments(JSON.parse(window.localStorage.getItem(ENVIRONMENTS_KEY) ?? "null"));
    return stored.length > 0 ? stored : [defaultEnvironment()];
  } catch {
    return [defaultEnvironment()];
  }
};

export const saveEnvironments = (environments: EnvironmentType[]): void => {
  try {
    window.localStorage.setItem(ENVIRONMENTS_KEY, JSON.stringify(environments));
  } catch {
    // Storage may be unavailable (private mode); the session keeps its state in memory.
  }
};

export const loadActiveId = (environments: EnvironmentType[]): string => {
  try {
    const stored = window.localStorage.getItem(ACTIVE_KEY);
    if (stored && environments.some((environment) => environment.id === stored)) {
      return stored;
    }
  } catch {
    // Fall through to the first environment.
  }
  return environments[0]?.id ?? "";
};

export const saveActiveId = (id: string): void => {
  try {
    window.localStorage.setItem(ACTIVE_KEY, id);
  } catch {
    // Same as above.
  }
};

/** A fresh environment, named so two "New environment" entries never collide. */
export const newEnvironment = (existing: EnvironmentType[]): EnvironmentType => {
  const taken = new Set(existing.map((environment) => environment.id));
  let index = existing.length + 1;
  while (taken.has(`env-${index}`)) {
    index += 1;
  }
  return { id: `env-${index}`, name: `Environment ${index}`, baseURL: DEFAULT_BASE_URL, token: "", variables: {} };
};

/**
 * The substitutions a request resolves against: the environment's own
 * variables, plus `baseURL` and `token` so a header can reference `{{token}}`
 * without duplicating it.
 */
export const variablesOf = (environment: EnvironmentType): Record<string, string> => ({
  ...environment.variables,
  baseURL: environment.baseURL,
  token: environment.token,
});
