---
name: swagger-create
description: Generate a custom API-explorer module from a target app or microservice's controllers, then complete each generated route meta — prose, field docs, examples and error statuses — so every endpoint is documented and runnable against a live backend.
when_to_use: Use when creating or refreshing the swagger module that documents an API — scaffolding the explorer, adding the routes of new controllers, or completing the descriptions, examples and responses of existing ones. Also use to set up its environments (base URL, bearer token, {{variables}}).
model: sonnet
effort: high
allowed-tools: Bash(talos swagger:create *), Bash(talos project:check *), Bash(bun add *), Read, Edit, Write, Grep, Glob, Skill
argument-hint: '[--name=<name>] [--module=<target>] [--design=<design>] [--prefix=<prefix>] [--force]'
---

# Make Swagger Module

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos project:check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

Generate an API explorer from a target module's controllers, then complete each generated `meta`. Follow `talos-scaffold` for run-from-root and lint/format, and `talos-swagger` for the module layout and the `RouteMetaType` model; this covers only the swagger-specific parts.

- **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/`. Check both roots.
- A swagger is **not** a regular artifact: it scaffolds a whole browser module, registers nothing in `AppModule`/`SharedModule`, and its `<name>.yml` names both a `design:` and a `target:`.
- It is a **custom** explorer, not Swagger UI: the UI is built from the design module and the routes are typed TypeScript. `public/openapi.json` is published *alongside* it for consumers that want a spec, not consumed by it.
- **Take inspiration from the design module's inspirations library before designing or reworking any explorer chrome.** `modules/<design>/src/inspirations/<category>/<slug>.yml` + a matching `.webp` screenshot holds ~1,820 real product screens across 49 categories; `sidebar`, `navigation`, `menu`, `filter`, `toolbar`, `table`, `form`, `editor`, `modal`, and `dark-mode` cover this UI directly. `rg` the `.yml` files for the pattern, shortlist the 2–4 whose `usage` fits the request, then **Read the shortlisted `.webp` screenshots** — that is where density, rhythm, and hierarchy actually are — and rebuild the structure you take from the design module's own tokens and components, never the screenshot's literal values. This governs the engine's UI, not route `meta` content. Full procedure: `optimize-ui`'s `references/inspirations.md`.

## Steps

### 1. Run the generator

From the **root of the project**:

```bash
talos swagger:create --name=<name> --module=<target> --design=<design> --prefix=<prefix>
```

- `--name` — module name ("api reference for the storefront" → `storefront-docs`). Normalized to kebab-case, trailing `Module` stripped. Defaults to `swagger`.
- `--module` — the **target** whose controllers are documented. Defaults to `app`.
  - Target `type: api` → aggregates the controllers of every backend `module` and `api` module.
  - Target `type: microservice` → documents only that microservice's own controllers.
- `--design` — the design module the explorer is styled from. Defaults to the one you pick from the existing design modules; a missing one is scaffolded for you.
- `--prefix` — the route prefix the backend mounts controllers under, baked into every `path` (`/<prefix>/v<version><route>`). Defaults to `api`. **Read the target's bootstrap and pass the prefix it actually mounts** — a wrong prefix makes every Send 404.

**Re-running is safe and is the intended workflow.** On a module that already exists the generator writes **only** `src/features/**` and `public/openapi.json` — the explorer itself is never reinstalled, so an environment panel, a custom column or any other local change survives. Re-run it whenever a controller changes in any way.

Pass `--force` to reinstall the explorer from the template. It discards every local change to the engine, so reach for it only to recover a broken module or to pull an upstream redesign.

`src/features/` is **generated output**, rebuilt from scratch on every run. A meta therefore cannot drift from its controller, and the meta of a controller you deleted or unregistered retires on the next run — there is nothing to clean up by hand. The flip side is that anything written into a route file is lost: the meta states what the decorator and the route type state, and nothing else.

Only the controllers a module's `<Name>Module.ts` actually **registers** are documented. A `*Controller.ts` nobody registers serves nothing, so publishing it would advertise a route the app does not answer.

### 2. Understand the generated shape

Each `src/features/<module>/<Name>.route.ts` exports one `meta`. The generator fills what the `@Route` decorator states and leaves the rest empty:

```typescript
import type { RouteMetaType } from "../../shared/route";

export const meta = {
  title: "Grant entitlement",          // generated from the route key
  group: "Entitlement",                // the module that serves it — the sidebar section
  key: "entitlement.grant",
  version: 2,
  method: "post",
  path: "/api/v2/entitlement/:userId/grants",
  roles: ["ROLE_ADMIN"],
  summary: "Grant an entitlement to a user",   // the decorator's `description`
  description: "…",                            // the JSDoc above the decorator
  params: [{ name: "userId", type: "string", required: true, description: "…" }],
  payload: {
    fields: [{ name: "plan", type: '"free" | "pro"', required: true, description: "…" }],
  },
  responses: [{ status: 200, fields: [{ name: "granted", type: "boolean", required: true }] }],
} satisfies RouteMetaType;
```

### 3. Write the documentation — in the controller

**Never edit a `*.route.ts`.** `src/features/` is wiped and rebuilt on every run, so anything written there is lost on the next regeneration. Documentation lives in the controller, as **JSDoc**, and the generator lifts it. That is also the point: the prose sits next to the code it describes, and a reviewer changing a field sees the sentence that has to change with it.

Write two kinds of block, then **re-run the generator** (step 1).

**Above the decorator — the route's prose.** It becomes `description` in the meta and in the OpenAPI operation. The decorator's own `description:` stays the one-line `summary`; leave it alone unless it is empty or misleading.

```typescript
/**
 * Grant an entitlement to a user.
 *
 * Charges the payment method on file and is **not** idempotent — a repeat call
 * grants a second seat. Call `entitlement.preview` first to check the price.
 * Answers 409 when the user already holds the plan.
 */
@Route.post("/entitlement/:userId/grants", { … })
```

Cover, in order: **what** it does, **when to call it**, **what it costs** (database, email, card, lock?), and **when not to** (the cheaper route, the idempotency caveat, the rate limit). Name the entity it touches and the route to reach for instead.

**Above a route-type member — the field's documentation.** It becomes that field's `description`, shown in the explorer's Description column and published on the OpenAPI parameter or schema property.

```typescript
export type GrantRouteType = {
  queries: {
    /** Which slice to read, 1-based. Defaults to the first page. */
    page?: number;
  };
  response: {
    /** Where the returned slice sits in the whole set. */
    page: {
      /** 1-based, echoing the `page` query. */
      index: number;
    };
  };
};
```

- A description answers *what makes a value valid*, not what the name already says. `"The user's id"` for `userId` is noise; `"The id of the user the entitlement is granted to. Must be an existing, non-deleted user."` is documentation.
- Nesting is documented at every level — the block above a group describes the group, the blocks inside it describe its members.
- Only `/** … */` documents. A `// …` line is an aside to whoever reads the controller and is not published.
- Leave a member undocumented rather than restating its name. An empty cell is honest; noise is not.
- **`type`** and **`required`** are read off the route type — change the type, not the meta. The type drives the OpenAPI schema: `uuid`/`email`/`url`/`date`/`datetime` gain a `format`, a union of quoted literals becomes an `enum`, a trailing `[]` becomes an array, a nested object literal becomes a nested schema.

### 4. What the generator cannot read yet

`example`, `tags`, `deprecated`, extra error statuses and a non-default `transport` have **no controller-side home**, so they cannot survive a regeneration. Do not write them into a route file expecting them to last. Say what you would have put in an `example` or a `409` in the route's JSDoc prose instead, where it does survive.

- Add a **`headers`** entry only for a header the controller reads itself. `Authorization` is wired by the explorer — never document it.

**Uploads.** A controller reads a file through `context.request.files[name]`, which only exists for `multipart/form-data`. So a route taking a file declares it:

```typescript
payload: {
  contentType: "multipart",
  fields: [
    { name: "avatar", type: "file", required: true, description: "PNG or JPEG, 2 MB max." },
    { name: "caption", type: "string", description: "Shown under the avatar." },
  ],
},
```

`talos swagger:create` writes both lines for you when the route type names a `RequestFile`. The try-it panel then renders a file picker per `file` field, sends a real `FormData`, and never names the `Content-Type` — `fetch` has to generate the boundary. Do **not** give a `multipart` payload an `example`: there is no JSON body to seed.

A field typed **`base64`** is the other case — a file carried inside a JSON body. It stays a `json` payload; the panel adds a picker that encodes the chosen file and writes it into that field. Use it only when the API really expects base64: multipart is the framework's own path, and base64 inflates a body by a third.

### 5. Document the answer

The generator writes one `200` from the route type's `response` block, field by field, with the JSDoc you put on each member. That is the shape a caller builds against, so document it the same way you document a payload.

The other statuses have nowhere to be declared yet (step 4), so name them **in the route's JSDoc prose**: read the controller and the services it calls — every thrown exception is a status. `@talosjs/exception` types map to their HTTP status, and the validation layer answers `422` on any route with an `Assert`ed payload.

**A `response` block describes `data`, not the wire body.** An `http` route answers inside the `ResponseDataType` envelope:

```jsonc
{ "key": null, "data": { "status": "ok" }, "message": null, "success": true, "status": 200, /* … */ }
```

The route type names the **inner `data`** — it is what the SDK hands back (`return response.data`) and what a consumer builds against, and repeating the envelope on every route would bury the one part that differs. The explorer's Output tab documents `data`; `public/openapi.json` wraps it back in the envelope, because a spec describes the wire. The try-it panel shows the real, unwrapped response, and the docs tab says so. Streaming and SSE routes bypass the envelope entirely.

### 6. Declare the transport

`transport` defaults to `"http"` (or `"socket"` when the method is). Set it explicitly when the controller does not return JSON — this is **not** in the route metadata, so open the controller's `index` to tell:

| Controller returns | `transport` | What the explorer does |
|---|---|---|
| `context.response.json(...)` | `"http"` (default) | buffers one body |
| `context.response.stream(...)` | `"stream"` | reads newline-delimited chunks, appending each as it lands |
| `context.response.sse(...)` | `"sse"` | reads `data:` frames, appending each as it lands |
| `@Route.socket(...)` | `"socket"` | opens a real connection: Connect, send as often as you like, read the frame log |

### 7. Set up the environments

The explorer runs every request against the **active environment**, which carries the origin, a bearer token and free-form `{{variables}}`. They live in `localStorage`, so nothing here is committed and nothing travels in a shared link.

Create one per target the API is reached at — `Local` on `http://localhost:8030`, `Staging`, `Production` — from the switcher in the header. Then:

- **Put the bearer token on the environment.** A protected route (`roles` requiring more than the default `ROLE_GUEST`) becomes runnable as soon as the active environment has a token; without it the Send button explains what is missing instead of failing at the API.
- **Reference `{{variables}}` anywhere** — the base URL, a header value, a path parameter, the JSON body. A name the environment cannot resolve is left standing and blocks Send, so the gap is visible before the request goes out.
- `baseURL` and `token` are exposed as variables too, so a header can read `{{token}}` without duplicating it.

**Clerk is not part of the template.** To replace the pasted token with a real sign-in button, run the `clerk-auth-setup` skill against the swagger module — it has a dedicated branch for `type: "swagger"` that installs the provider and the button *without* an auth gate, because the documentation stays public. The backend must also register `ClerkAuthMiddleware` and accept the explorer's origin in CORS, or every Send fails before reaching a status.

### 8. Verify

```bash
talos check
```

Fix every failure. Then confirm the two checks that are specific to a swagger:

```bash
talos project:check --only=openapi      # public/openapi.json matches the controllers
talos project:check --only=boundaries   # nothing server-side leaked into the bundle
```

An `openapi` failure means a route moved and the generator was not re-run — re-run it (step 1) rather than hand-editing `public/openapi.json`.

Finally, start the explorer with `talos app:start --modules=<module>` and run `/ui-verify`. Exercise the following in Bun.WebView at desktop and mobile viewports, inspect screenshots, and fix failures rather than reporting the UI complete:

1. The sidebar nests the routes by path — `/admin/stats` sits inside an `admin` folder.
2. ⌘K finds a route by path, title and key.
3. A public route Sends against the running backend and shows a status, a duration and a body.
4. A protected route explains what it needs while the environment has no token, and Sends once it does.
5. The **OpenAPI** button downloads a document whose paths match the sidebar.

Report anything unverifiable — a placeholder publishable key, a backend that is not running, a CORS origin you cannot configure.
