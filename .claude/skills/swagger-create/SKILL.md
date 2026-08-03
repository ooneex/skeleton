---
name: swagger-create
description: Generate a custom API-explorer module from a target app or microservice's controllers, then complete each generated route meta — prose, field docs, examples and error statuses — so every endpoint is documented and runnable against a live backend.
when_to_use: Use when creating or refreshing the swagger module that documents an API — scaffolding the explorer, adding the routes of new controllers, or completing the descriptions, examples and responses of existing ones. Also use to set up its environments (base URL, bearer token, {{variables}}).
model: sonnet
effort: high
allowed-tools: Bash(talos swagger:create *), Bash(talos check *), Bash(bun add *), Read, Edit, Write, Grep, Glob
argument-hint: '[--name=<name>] [--module=<target>] [--design=<design>] [--prefix=<prefix>] [--force]'
---

# Make Swagger Module

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

Generate an API explorer from a target module's controllers, then complete each generated `meta`. Follow `talos-scaffold` for run-from-root and lint/format, and `talos-swagger` for the module layout and the `RouteMetaType` model; this covers only the swagger-specific parts.

- **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/`. Check both roots.
- A swagger is **not** a regular artifact: it scaffolds a whole browser module, registers nothing in `AppModule`/`SharedModule`, and its `<name>.yml` names both a `design:` and a `target:`.
- It is a **custom** explorer, not Swagger UI: the UI is built from the design module and the routes are typed TypeScript. `public/openapi.json` is published *alongside* it for consumers that want a spec, not consumed by it.

## Steps

### 1. Run the generator

From the **monorepo root**:

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
  description: "",                             // ← yours
  params: [{ name: "userId", type: "string", required: true, description: "" }],   // ← descriptions yours
  payload: {
    fields: [{ name: "plan", type: '"free" | "pro"', required: true, description: "" }],
  },
  responses: [{ status: 200, description: "" }],   // ← yours, plus every error status
} satisfies RouteMetaType;
```

Everything below is what you write.

### 3. Complete the prose

- **`summary`** — one line, imperative, no trailing period beyond the sentence. Keep the decorator's wording unless it is empty or misleading.
- **`description`** — markdown, and the reason the explorer exists. Cover, in order: **what** the route does, **when to call it**, **what it costs** (does it hit the database, send an email, charge a card, hold a lock?), and **when not to** (the cheaper route, the idempotency caveat, the rate limit). Be concrete: name the entity it touches, the side effects it has, the route to reach for instead.
- **`tags`** — free-form labels the palette searches. Use them for cross-cutting concerns (`billing`, `monitoring`, `webhook`), not to restate the group.
- **`deprecated: true`** on a route that still serves but should not be adopted. Say what replaces it in the `description`.

### 4. Complete the fields

Every entry of `params`, `queries`, `headers` and `payload.fields` needs a **`description`** and, wherever a caller could sensibly be handed one, an **`example`**.

- **`description`** answers *what makes a value valid*, not what the name already says. `"The user's id"` for `userId` is noise; `"The id of the user the entitlement is granted to. Must be an existing, non-deleted user."` is documentation.
- **`example`** seeds the try-it form, so a route is runnable before anything is typed. Give a **realistic, safe** value: a plausible uuid, a small page size, a test-mode identifier. Never a real credential, a production id, or personal data.
- **`type`** is copied from the route type — leave it alone unless it is wrong. It drives the OpenAPI schema: `uuid`/`email`/`url`/`date`/`datetime` gain a `format`, a union of quoted literals becomes an `enum`, a trailing `[]` becomes an array.
- **`required`** mirrors the route type's optionality. Path parameters are always required, whatever the meta says.
- Add a **`headers`** entry only for a header the controller reads itself. `Authorization` is wired by the explorer — never document it.
- **`payload.example`** is what the Send button actually posts. Keep it valid JSON and consistent with the fields you documented.

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

### 5. Complete the responses

List **every** status the route answers with, success first — the error cases are what a reader comes for.

```typescript
responses: [
  { status: 200, description: "The entitlement is active.", example: { id: "…", plan: "pro" } },
  { status: 403, description: "The caller lacks ROLE_ADMIN." },
  { status: 404, description: "No user carries that id." },
  { status: 409, description: "The user already holds this entitlement — the grant is not re-applied." },
],
```

Read the controller and the services it calls: every thrown exception is a status. `@talosjs/exception` types map to their HTTP status, and the validation layer answers `422` on any route with an `Assert`ed payload.

**`example` is the `data` payload, not the wire body.** An `http` route answers inside the `ResponseDataType` envelope:

```jsonc
{ "key": null, "data": { "status": "ok" }, "message": null, "success": true, "status": 200, /* … */ }
```

Document the **inner `data`** — it is what the SDK hands back (`return response.data`) and what a consumer builds against. Repeating the envelope on every route would bury the one part that differs. The try-it panel shows the real, unwrapped response, and the docs tab says so. Streaming and SSE routes bypass the envelope entirely, so there the example *is* the wire body.

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

- **Put the bearer token on the environment.** A route with non-empty `roles` becomes runnable as soon as the active environment has one; without it the Send button explains what is missing instead of failing at the API.
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

Finally, smoke-test with `bun --bun run dev` from the module:

1. The sidebar nests the routes by path — `/admin/stats` sits inside an `admin` folder.
2. ⌘K finds a route by path, title and key.
3. A public route Sends against the running backend and shows a status, a duration and a body.
4. A protected route explains what it needs while the environment has no token, and Sends once it does.
5. The **OpenAPI** button downloads a document whose paths match the sidebar.

Report anything unverifiable — a placeholder publishable key, a backend that is not running, a CORS origin you cannot configure.
