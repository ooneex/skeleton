/** The HTTP verbs a `@Route.<verb>` decorator can declare, plus the WebSocket one. */
export type MethodType = "get" | "post" | "put" | "patch" | "delete" | "head" | "options" | "socket";

/**
 * How the controller answers, which decides what the explorer can do with it.
 * `http` buffers one JSON envelope; `stream` and `sse` deliver many chunks over
 * one open body; `socket` is a duplex `@talosjs/socket` route and is documented
 * rather than executed.
 */
export type TransportType = "http" | "stream" | "sse" | "socket";

/** One documented value: a path parameter, a query string entry, or a header. */
export type FieldType = {
  /** The name the route expects, spelled exactly as it travels on the wire. */
  name: string;
  /**
   * The type as the route declares it — `string`, `number`, `uuid`, `"a" | "b"`, …
   *
   * Two names drive an upload control rather than a text box: `file` picks a
   * real file for a `multipart` body, and `base64` picks one and encodes it
   * into a JSON string field.
   */
  type: string;
  /** Whether the route rejects the request when it is absent. Path params always are. */
  required?: boolean;
  /** Markdown — what the value means and what makes one valid. */
  description?: string;
  /** Prefilled in the try-it form, so a route is runnable without reading the docs first. */
  example?: unknown;
};

/** One documented outcome, keyed by the status the controller answers with. */
export type ResponseType = {
  status: number;
  /** Markdown — when the route answers with this status. */
  description?: string;
  /** The body shape, rendered as JSON next to the description. */
  example?: unknown;
};

/**
 * How a body travels. `json` is the default; `multipart` is what a route that
 * accepts a file uses — the framework reads those through `request.files`,
 * which only exists for `multipart/form-data`.
 */
export type BodyKindType = "json" | "multipart";

/** The request body of a route that carries one. */
export type PayloadType = {
  /** Defaults to `"json"`. Set `"multipart"` on any route reading `request.files`. */
  contentType?: BodyKindType;
  /** Markdown — what the body represents as a whole. */
  description?: string;
  /** Per-field documentation, the way `params`/`queries` document theirs. */
  fields?: readonly FieldType[];
  /** Seeds the try-it editor. Keep it valid — it is what the Send button posts. */
  example?: unknown;
};

/**
 * One route of the documented API — the whole contract of a single controller,
 * in the shape both the explorer and the OpenAPI export read.
 *
 * A `*.route.ts` file exports exactly one of these as `meta`, and
 * `talos swagger:create` writes the parts it can read off the controller
 * (`key`, `version`, `method`, `path`, `roles`, `description`). Everything a
 * decorator does not carry — field docs, examples, error statuses — is written
 * by hand afterwards.
 */
export type RouteMetaType = {
  /** Sentence-case label shown in the sidebar and the palette, e.g. `"Health check"`. */
  title: string;
  /** Sidebar section — the source module the controller belongs to, e.g. `"App"`. */
  group?: string;
  /** The controller's route `name`, e.g. `"app.health.check"`. Unique across the API. */
  key: string;
  /** The route's `version`, already baked into `path`. */
  version: number;
  method: MethodType;
  /** Served path including the prefix and version, e.g. `"/api/v1/health"`. */
  path: string;
  /** Defaults to `"http"`. */
  transport?: TransportType;
  /** The controller's `roles`. Empty means public; non-empty means a bearer token is required. */
  roles: readonly string[];
  /** One line, shown under the title. */
  summary?: string;
  /** Markdown — what the route does, when to call it, and what it costs. */
  description?: string;
  /** Free-form labels, matched by the palette's search. */
  tags?: readonly string[];
  /** Renders the route struck through and warns before running it. */
  deprecated?: boolean;
  /** `:param` segments of `path`, in the order they appear. */
  params?: readonly FieldType[];
  queries?: readonly FieldType[];
  /** Only the headers the route reads itself — `Authorization` is wired by the explorer. */
  headers?: readonly FieldType[];
  payload?: PayloadType;
  /** Every status the route answers with, success first. */
  responses?: readonly ResponseType[];
};
