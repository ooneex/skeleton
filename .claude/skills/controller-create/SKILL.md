---
name: controller-create
description: Generate a new controller class with route type and test file, then complete the generated code.
when_to_use: Use when creating a new HTTP or WebSocket controller with routing, validation, and role-based access.
model: sonnet
effort: high
allowed-tools: Bash(talos controller:create *), Bash(talos project:check *), Read, Edit, Write, Grep, Glob
argument-hint: '[--name=<Name>] [--module=<module>] [--is-socket=<true|false>] [--route.name=<name>] [--route.path=<path>] [--route.method=<method>]'
---

# Make Controller Class

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos project:check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` (e.g. once extracted into a shared package). Check both roots before assuming a path is missing; every `modules/<module>/...` path applies equally under `packages/<module>/...`.

Generate a controller class, route type, and test file, then complete the implementation. Follow the `talos-scaffold` skill for the shared workflow (run-from-root, `--name`/`--module` inference, module registration, lint/format, conventions); this covers only controller specifics.

## Steps

### 1. Infer the options from the request, then run the generator

Map the user's request to the options below, then run:

```bash
talos controller:create --name=<name> --module=<module> --is-socket=<true|false> --route.name=<route.name> --route.path=<route.path> --route.method=<route.method>
```

- `--name` — controller class name from the resource/action ("list books" → `BookList`). Any casing; the CLI normalizes to PascalCase and appends the `Controller` suffix — omit it.
- `--is-socket` — `true` for WebSocket/socket/realtime, else `false` (default). If unspecified, the generator asks interactively.
- `--route.name` — dot notation `<resource>.<action>` ("list books" → `book.list`, "create a user" → `user.create`).
- `--route.path` — URL path, inferred as a kebab-case plural of the resource (books → `/books`); use an explicit path if given.
- `--route.method` — HTTP method from the verb (HTTP only): list/get/show → `get`, create → `post`, update/replace → `put` (partial → `patch`), delete/remove → `delete`.

Also generates `src/types/routes/<route.name>.ts` — delete it after step 3 (keep the type inside the controller file).

### 2. Read the generated files

Read all three generated files to understand the scaffolded code.

### 3. Complete the route type

**Keep the route type inside the controller file**, not a separate file. Delete the generated `src/types/routes/<route.name>.ts`.

The route type is the `ContextConfigType` of `ContextType<T>` — it has exactly four keys, `response` required and the rest optional. Include only the ones the route needs:

| Field | Include when |
|-------|--------------|
| `params` | route has URL path segments (`/users/:id`) |
| `payload` | method is `post`, `put`, or `patch` |
| `queries` | list/search endpoint with query-string filtering |
| `response` | always |

```typescript
type <TypeName>RouteType = {
  params: { },    // detail/update — one key per URL segment, values are scalars
  queries: { },   // list — query-string filters (values arrive as strings)
  payload: { },   // post/put/patch — request body
  response: { },  // always
};
```

Uploaded files are **not** part of the route type — `context.files` is always `Record<string, IRequestFile>`. Declare the upload rules in the decorator's `files` field instead (see step 4).

### 4. Complete the controller class

Edit `modules/<module>/src/controllers/<Name>Controller.ts`:

- Set `roles` for access control (see **Roles** below).
- Add a meaningful `description` (e.g. `"Create a new user account"`).
- **Keep the controller thin** — delegate all logic to the service via constructor injection.
- Apply the same `params`/`payload`/`queries`/`response` rules to the `@Route` decorator.


```typescript
import type { ContextType } from "@talosjs/controller"; // socket: "@talosjs/socket"
import { Route } from "@talosjs/routing";
import { Assert } from "@talosjs/validation";

type <TypeName>RouteType = {
  response: { },
};

@Route.<method>("<route.path>", {   // socket: @Route.socket(...)
  name: "<route.name>",
  version: 1,
  description: "",
  response: Assert({ }),
  roles: ["ROLE_USER"],
})
export class <Name>Controller {
  public async index(context: ContextType<<TypeName>RouteType>) {
    return context.response.json({ });
  }
}
```

The HTTP and socket controllers are identical except the `ContextType` import (`@talosjs/controller` vs `@talosjs/socket`) and the decorator (`@Route.<method>` vs `@Route.socket`).

#### Decorator options

`path`, `method`, `isSocket`, and `controller` come from the decorator itself — never pass them in the config object. Everything else in `RouteConfigType` is settable:

| Option | Type | Required | Purpose |
| --- | --- | --- | --- |
| `name` | `string` | yes | Unique route name (`<resource>.<action>`), used by `router.generate()` and by SDKs |
| `version` | `number` | yes | API version — `1` unless the request says otherwise |
| `description` | `string` | yes | One sentence, human readable |
| `params` | `AssertRecordType` (`Record<string, AssertType \| IAssert>`) | no | One entry per `:segment`; keys are inferred from the path, so a wrong key is a type error |
| `queries` | `AssertType \| IAssert` | no | Whole query string — one `Assert({ ... })` object |
| `payload` | `AssertType \| IAssert` | no | Whole request body — one `Assert({ ... })` object |
| `files` | `AssertFile` | no | Upload rules keyed by form field (see **File uploads**) |
| `response` | `AssertType \| IAssert` | no in the type, **always set it** | Response body shape |
| `roles` | `RoleType[]` | no | Allowed roles; omit for a public route — it defaults to `["ROLE_GUEST"]` (see **Roles**) |
| `permission` | `PermissionClassType` | no | Permission class resolved from the container and evaluated per request |
| `featureFlag` | `FeatureFlagClassType` | no | Feature flag class — route 404s/short-circuits when the flag is off |
| `env` | `EnvironmentNameType[]` | no | Restrict the route to these environments (`"local"`, `"development"`, `"staging"`, `"testing"`, `"test"`, `"qa"`, `"uat"`, `"integration"`, `"preview"`, `"demo"`, `"sandbox"`, `"beta"`, `"canary"`, `"hotfix"`, `"production"`); omit to allow all |
| `ip` | `string[]` | no | Allow-list of client IPs; requests from any other IP are rejected |
| `host` | `string[]` | no | Allow-list of request hosts |
| `cache` | `string` | no | Cache-key prefix — enables response caching keyed by method, path, query, and user id (socket routes key on route name + params/queries/payload) |

Set the guard fields only when the request asks for them — an internal/admin-only endpoint (`ip`, `host`, `permission`), a rollout behind a flag (`featureFlag`), a non-production diagnostic route (`env`), or an expensive read (`cache`).

#### Reading the request

The context exposes the validated inputs **directly** — not under `context.request`, and none of them are promises:

| Access | Type |
| --- | --- |
| `context.params` | `T["params"]` |
| `context.queries` | `T["queries"]` |
| `context.payload` | `T["payload"]` |
| `context.files` | `Record<string, IRequestFile>` |
| `context.user` | `IUser \| null` |
| `context.header`, `context.ip`, `context.host`, `context.lang`, `context.env`, `context.logger` | request/app metadata |

`context.request` is the raw `IRequest` (native `Request`, url, form data) — reach for it only when you need something the context doesn't already surface.

Responses: `context.response.json(data, status?)`, plus `stream()`, `sse()`, `exception()`, `notFound()`, and `redirect()`. There is no `response.create()`.

#### File uploads

`AssertFile` is imported from its own subpath and constructed with per-field rules:

```typescript
import { AssertFile } from "@talosjs/validation/constraints/AssertFile";

files: new AssertFile({
  avatar: { types: ["image/*"], maxSize: 2_000_000 },
  cv: { extensions: ["pdf"], maxSize: 5_000_000, required: false },
}),
```

Options per field: `minSize` (bytes, default `1`), `maxSize`, `types` (exact MIME or `"image/*"` wildcard), `extensions` (no leading dot), and `required` (defaults to `true` — set `false` for optional uploads). Read the files in the controller from `context.files[<field>]`.

Every constraint class lives at its own subpath — `@talosjs/validation/constraints/AssertId`, `.../AssertEmail`, `.../AssertUrl`, etc. Only `Assert` and the types come from `@talosjs/validation` itself.

#### Module constraints

When the package has no constraint for a rule, the module's own one goes in `modules/<module>/src/constraints/` — never inline in the controller and never in `utils/`. One `Assert<Name>` class per `Assert<Name>.ts` extending `Validation` from `@talosjs/validation`, imported as `@/constraints/Assert<Name>`; the shared `Assert(...)` schemas several routes reuse (id patterns, payload/response records) sit beside them as `constraints/<subject>.ts`. There is no generator — write the file and its `tests/constraints/` mirror by hand. See `talos-module` → **Constraints**.

#### Roles

`roles` is an array of plain role strings (e.g. `["ROLE_USER"]`). There is **no `ERole` enum** — don't import from `@talosjs/role` in a controller. Access is hierarchical/graph-based: granting a role also grants every role it inherits (ancestors, directly or transitively). Sibling roles on different branches do **not** satisfy each other.

**`ROLE_GUEST` means public.** Omitting `roles` on the decorator defaults it to `["ROLE_GUEST"]`, and any route whose `roles` array includes `"ROLE_GUEST"` is accessible without authentication — that check bypasses the rest of the array, so don't mix `ROLE_GUEST` in with other roles unless the whole route is meant to be public. To restrict a route, set `roles` to the specific role(s) required and leave `ROLE_GUEST` out entirely.

Available roles live in `modules/app/roles.yml` — **always read that file** to use the project's actual roles, since each project can customize them. Default hierarchy (ancestor → descendant):

| Role | Inherits | Description |
| --- | --- | --- |
| `ROLE_GUEST` | — | Unauthenticated visitor with read-only access to public content |
| `ROLE_TRIAL_USER` | `ROLE_GUEST` | Registered user on a limited trial period with restricted feature access |
| `ROLE_USER` | `ROLE_TRIAL_USER` | Standard authenticated user with full access to core features |
| `ROLE_PREMIUM_USER` | `ROLE_USER` | Paid subscriber with access to premium features and content |
| `ROLE_VIP_USER` | `ROLE_PREMIUM_USER` | High-value user with exclusive VIP benefits and priority support |
| `ROLE_REVIEWER` | `ROLE_USER` | Trusted user who can review and rate content submitted by others |
| `ROLE_MODERATOR` | `ROLE_USER` | Community moderator who can manage posts, comments, and user reports |
| `ROLE_MANAGER` | `ROLE_USER` | Operational manager with access to team and resource management tools |
| `ROLE_ADMIN` | `ROLE_MANAGER` | Application administrator with full control over users, settings, and content |
| `ROLE_SUPER_ADMIN` | `ROLE_ADMIN` | Super administrator with unrestricted access across all tenants and configurations |
| `ROLE_SYSTEM` | `ROLE_SUPER_ADMIN` | Internal system identity used for automated processes and service-to-service operations |

Pick the **least-privileged** role that still satisfies the endpoint's access requirement.

### 5. Complete the test file

Read and replace `modules/<module>/tests/controllers/<Name>Controller.spec.ts`. Cover: class identity (`name.endsWith("Controller")`, is constructor); `index` exists and returns `Promise`, calls `context.response.json` (mock); instance isolation. After injecting a mock service, add response-shape tests.

```typescript
import { describe, expect, mock, test } from "bun:test";
import { <Name>Controller } from "@/controllers/<Name>Controller";

describe("<Name>Controller", () => {
  test("should have class name ending with 'Controller'", () => {
    expect(<Name>Controller.name.endsWith("Controller")).toBe(true);
  });

  test("should be a constructor function", () => {
    expect(typeof <Name>Controller).toBe("function");
  });

  test("should have 'index' method", () => {
    expect(typeof <Name>Controller.prototype.index).toBe("function");
  });

  test("'index' should return a Promise", () => {
    const controller = new <Name>Controller();
    const context = { response: { json: () => {} } } as any;
    const result = controller.index(context);
    expect(result).toBeInstanceOf(Promise);
    return result.catch(() => {});
  });

  test("'index' should call context.response.json", async () => {
    const controller = new <Name>Controller();
    const json = mock(() => {});
    const context = { response: { json } } as any;
    try {
      await controller.index(context);
      expect(json).toHaveBeenCalledTimes(1);
    } catch {
      // Expected when injected dependencies are absent — still validates delegation
    }
  });

  // Add response shape tests after injecting a mock service

  test("should produce independent instances", () => {
    const a = new <Name>Controller();
    const b = new <Name>Controller();
    expect(a).not.toBe(b);
  });
});
```

### 6. Register the controller

Add `<Name>Controller` to the `controllers` array in `src/<PascalModuleName>Module.ts` (see `talos-scaffold` for the `ModuleType` shape).

### 7. Lint, format, and test

```bash
talos project:check --strict --logs
```

Fix every failure before completing.

### 8. Create the service

```
/service-create --name=<Name>
```

### 9. Create the pubsub event (mutation routes only)

**Only for `post`, `put`, `patch`, `delete` — skip for `get`.**

```
/event-create --name=<Name> --channel=<resource>.<action>
```

Once created:
- Inject the **service** into the **event** and call `service.execute()` from `handler()`.
- Inject the **event** into the **controller** and publish from `index()`.

### 10. Sync the SDK module

A controller's route is part of the SDK surface, so whenever you **create or update** a controller, refresh any SDK exposing it via the `sdk-create` skill. An SDK module is any module whose `<name>.yml` has `type: "sdk"`; its `target` field records the module it was generated from (`app`, or a specific microservice).

For each SDK module whose `target` covers the controller's module — an `app` target covers every backend `module`/`api` module; a microservice target covers only itself — regenerate it with that SDK's own name and target:

```
/sdk-create --name=<sdk module name> --module=<target>
```

Then complete the new or updated `api` method per the `sdk-create` skill. Skip when no SDK module targets the controller's module.

## Usage Examples

`Assert` is an alias for ArkType's `type` function. Use ArkType string syntax inside it — no fluent API (`Assert.string()` etc.).

- Primitive: `"string"`, `"number"`, `"boolean"` · Optional: `"string?"` · Array: `"string[]"`, `"string[]?"`
- Union: `"string | number"`, `"File | Blob"` · Format: `"string.email"`, `"number.integer"`
- Range: `"1 <= string <= 100"`, `"1 <= number.integer <= 65535"` · Regex: `/^[a-z]+$/` · Enum: `'"admin" | "user" | "guest"'`

For `params`, each URL segment gets its own `Assert("...")` call (or a constraint class like `new AssertId()`). For `queries`, `payload`, and `response`, pass a single object to `Assert({...})`. For `files`, pass one `new AssertFile({...})`.

All examples assume the standard imports: `ContextType` from `@talosjs/controller` (or `@talosjs/socket`), `Route` from `@talosjs/routing`, `Assert` from `@talosjs/validation`, and any constraint class from its subpath (`AssertId` from `@talosjs/validation/constraints/AssertId`, `AssertFile` from `@talosjs/validation/constraints/AssertFile`).

### HTTP — GET list (queries + response)

```typescript
type UserListRouteType = {
  queries: { page?: string; limit?: string; search?: string };
  response: { data: { id: string; name: string }[]; total: number };
};

@Route.get("/users", {
  name: "user.list",
  version: 1,
  description: "List users with optional filtering and pagination",
  queries: Assert({ page: "string?", limit: "string?", search: "string?" }),
  response: Assert({ data: "object[]", total: "number" }),
  roles: ["ROLE_ADMIN"],
})
export class UserListController {
  constructor(private readonly userService: UserService) {}

  public async index(context: ContextType<UserListRouteType>) {
    const { page, limit, search } = context.queries;
    const result = await this.userService.execute({ page, limit, search });
    return context.response.json(result);
  }
}
```

### HTTP — GET detail (params + response)

`params` in `RouteConfigType` is `AssertRecordType` (`Record<string, AssertType | IAssert>`) — one entry per URL segment, each with its own `Assert("...")` or a constraint class instance. The decorator infers the allowed keys from the path, so a key that isn't a `:segment` fails to compile.

```typescript
type UserDetailRouteType = {
  params: { id: string };
  response: { id: string; name: string; email: string };
};

@Route.get("/users/:id", {
  name: "user.detail",
  version: 1,
  description: "Get user by ID",
  params: { id: new AssertId() },
  response: Assert({ id: "string", name: "string", email: "string" }),
  roles: ["ROLE_USER"],
})
export class UserDetailController {
  constructor(private readonly userService: UserService) {}

  public async index(context: ContextType<UserDetailRouteType>) {
    const { id } = context.params;
    const user = await this.userService.execute(id);
    return context.response.json(user);
  }
}
```

Nested params like `/users/:userId/bills/:billId` — one key per segment:

```typescript
type UserBillDetailRouteType = { params: { userId: string; billId: string }; response: { id: string; amount: number } };
// In decorator:
params: { userId: new AssertId(), billId: new AssertId() },
```

### HTTP — POST create (payload + response)

```typescript
type UserCreateRouteType = {
  payload: { name: string; email: string; password: string };
  response: { id: string; name: string; email: string };
};

@Route.post("/users", {
  name: "user.create",
  version: 1,
  description: "Create a new user account",
  payload: Assert({ name: "string", email: "string.email", password: "8 <= string <= 100" }),
  response: Assert({ id: "string", name: "string", email: "string" }),
  roles: ["ROLE_ADMIN"],
})
export class UserCreateController {
  constructor(private readonly userCreatedEvent: UserCreatedEvent) {}

  public async index(context: ContextType<UserCreateRouteType>) {
    const { password, ...safe } = context.payload;
    // Hash the password in the service before persistence; publish only non-sensitive fields.
    await this.userCreatedEvent.publish(safe);
    return context.response.json({ id: "...", name: safe.name, email: safe.email });
  }
}
```

> **Security — credentials never leave the boundary in the clear.** Hash passwords (argon2/bcrypt) inside the service before persisting, and never place a raw password (or any secret) in an event payload, a response body, or a log. PubSub payloads are serialized to the broker and delivered to every subscriber, so publish only non-sensitive identifiers.

A **PUT/PATCH update** combines the two patterns above: `params` (with `new AssertId()`) plus an optional-field `payload` (`Assert({ name: "string?", email: "string.email?" })`), publishing an update event as in POST — `await this.userUpdatedEvent.publish({ id, ...data })`.

### HTTP — POST upload (files + payload + response)

`files` is validated separately from `payload`; the uploads themselves are read from `context.files`, keyed by form field name.

```typescript
type UserAvatarUploadRouteType = {
  params: { id: string };
  payload: { alt?: string };
  response: { url: string; size: number };
};

@Route.post("/users/:id/avatar", {
  name: "user.avatar.upload",
  version: 1,
  description: "Upload a user avatar image",
  params: { id: new AssertId() },
  payload: Assert({ alt: "string?" }),
  files: new AssertFile({
    avatar: { types: ["image/png", "image/jpeg"], maxSize: 2_000_000 },
  }),
  response: Assert({ url: "string", size: "number" }),
  roles: ["ROLE_USER"],
})
export class UserAvatarUploadController {
  constructor(private readonly userAvatarUploadService: UserAvatarUploadService) {}

  public async index(context: ContextType<UserAvatarUploadRouteType>) {
    const { id } = context.params;
    const avatar = context.files.avatar;
    const result = await this.userAvatarUploadService.execute({ id, avatar, alt: context.payload.alt });

    return context.response.json(result);
  }
}
```

### Socket controller (response + channel API)

`ContextType<T>` from `@talosjs/socket` extends the HTTP context and adds a `channel` object:

- `channel.send(response)` — send to this client only · `channel.publish(response)` — broadcast to all channel subscribers. Both take an `IResponse` — build it with `context.response.json({ ... })` and pass `context.response`.
- `channel.subscribe()` / `channel.unsubscribe()` / `channel.isSubscribed()` — manage pub/sub
- `channel.close(code?, reason?)` — close the connection · `channel.ws` — raw `ServerWebSocket` instance

```typescript
type ChatMessageRouteType = {
  payload: { message: string; roomId: string };
  response: { userId: string; message: string; sentAt: string };
};

@Route.socket("/chat", {
  name: "chat.message",
  version: 1,
  description: "Send a message to a chat room and broadcast to subscribers",
  payload: Assert({ message: "string", roomId: "string" }),
  response: Assert({ userId: "string", message: "string", sentAt: "string" }),
  roles: ["ROLE_USER"],
})
export class ChatMessageController {
  public async index(context: ContextType<ChatMessageRouteType>) {
    const { message } = context.payload;

    if (!context.channel.isSubscribed()) {
      await context.channel.subscribe();
    }

    // Bind the message to the authenticated sender — never trust a client-supplied id.
    context.response.json({
      userId: context.user?.id ?? "",
      message,
      sentAt: new Date().toISOString(),
    });

    await context.channel.publish(context.response); // broadcast to all room subscribers (includes sender)
  }
}
```
