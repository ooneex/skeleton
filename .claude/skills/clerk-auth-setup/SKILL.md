---
name: clerk-auth-setup
description: Set up Clerk authentication in a SPA module — ClerkProvider bootstrap, an auth gate on the root route, the sign-in / sign-up / sign-out / sso-callback routes, and the passwordless email-code + OAuth features. Also installs the sign-in button of a swagger module, which needs a session token but no gate.
when_to_use: Use when adding or repairing Clerk auth (sign-in, sign-up, sign-out, OAuth/SSO, route protection) in a SPA module built on @tanstack/react-router and @clerk/clerk-react, or when adding Clerk sign-in to a swagger module so its protected routes become runnable.
model: sonnet
effort: high
allowed-tools: Bash(talos spa:feature:create *), Bash(talos translation:create *), Bash(talos workspace:check *), Bash(bun add *), Read, Edit, Write, Grep, Glob
argument-hint: '[--module=<module>]'
---

# Set Up Clerk Auth

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

**Read `<module>.yml` first — the module's `type:` decides which half of this skill applies.**

| `type:` | What to install | Where |
|---|---|---|
| `spa`, `admin` | The full gated flow: provider, auth gate, sign-in/sign-up/sign-out/sso-callback routes, OAuth | Sections 1–8 below |
| `swagger` | A sign-in button that supplies a session token to the try-it runner. **No gate, no auth routes** | The "Swagger modules" section at the end |

Doing the SPA sections on a swagger module is a mistake: it would put the API documentation behind a login, and the documentation is meant to be public.

## SPA and admin modules

Wire [Clerk](https://clerk.com) into a SPA module (`type: "spa"` in `<module>.yml`): passwordless email-code sign-in/sign-up, Google + LinkedIn OAuth, sign-out, and a gate protecting every other route.

- **Run autonomously** — no questions; when a choice arises, take the recommended one. The only value you may not invent is the publishable key: if missing, leave the `.env` placeholder and report it at the end.
- `<module>` lives in `modules/<module>/` **or** `packages/<module>/` — check both before assuming a path is missing.
- **Reference implementation: `modules/ruby/`** — every pattern below comes from it; read the matching file when a snippet isn't enough. Also follow `talos-spa` (folders), `spa-feature-create` (features), `optimize-ui` (visual craft), `optimize-testing` (specs).

## Architecture

```
src/bootstrap/app.tsx        ClerkProvider wraps <RouterProvider> (inside QueryClientProvider)
src/routes/__root.tsx        AuthGate — protects everything except AUTH_ROUTES
src/routes/sign-in.tsx       → features/sign-in  (email code + OAuth)
src/routes/sign-up.tsx       → features/sign-up  (details + email code + OAuth)
src/routes/sign-out.tsx      useClerk().signOut() then redirect to /sign-in
src/routes/sso-callback.tsx  <AuthenticateWithRedirectCallback /> — OAuth landing
.env                         VITE_CLERK_PUBLISHABLE_KEY
```

Invariants:

- **Only hooks talk to Clerk** — components never import `useSignIn`/`useSignUp`, they call the feature's hooks.
- **Clerk calls live in TanStack Query mutations** so components get `isPending`/`onSuccess`/`onError`.
- **Never render Clerk's prebuilt `<SignIn />`/`<SignUp />`** — build the UI from the linked design module (`design:` in `<module>.yml`).
- **No hardcoded user-facing text** — all through the feature's `use<Name>Translate` hook.

## 1. Install and configure

`bun add @clerk/clerk-react` at the **project root** (shared workspace deps) if absent. Then `modules/<module>/.env` (Vite reads it via `envDir: "../.."`):

```dotenv
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxx
```

Only `VITE_` vars reach the browser. **Never** put a Clerk *secret* key in a SPA `.env`.

## 2. Wrap the app in `ClerkProvider`

In `src/bootstrap/app.tsx` — read the key, fail loudly, wrap the router inside `QueryClientProvider` (the auth hooks are mutations):

```tsx
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) throw new Error("Add VITE_CLERK_PUBLISHABLE_KEY to the .env file");

<QueryClientProvider client={queryClient}>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} signInUrl="/sign-in" signInFallbackRedirectUrl="/">
    <RouterProvider router={router} />
  </ClerkProvider>
</QueryClientProvider>
```

## 3. Gate the app in `__root.tsx`

Auth pages must render **outside** the gate or the redirect loops.

```tsx
const AUTH_ROUTES = new Set(["/sign-in", "/sign-up", "/sign-out", "/sso-callback"]);

const AuthGate = ({ children }: AuthGatePropsType) => {
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !isSignedIn) void navigate({ to: "/sign-in", replace: true });
  }, [isLoaded, isSignedIn, navigate]);

  if (!isLoaded || !isSignedIn) return <PageLoader />;
  return <>{children}</>;
};
```

`RootComponent` wraps conditionally on the pathname:

```tsx
const pathname = useRouterState({ select: (state) => state.location.pathname });
{AUTH_ROUTES.has(pathname) ? content : <AuthGate>{content}</AuthGate>}
```

- Show the design module's `PageLoader` while `!isLoaded` — never a blank screen, never the protected UI.
- `replace: true` keeps the back button from bouncing into the gate.
- Any new public route (marketing, legal) must be added to `AUTH_ROUTES`.

## 4. Create the auth routes

Scaffold the features first so the boundary layouts exist:

```bash
talos spa:feature:create --name=SignIn --module=<module>
talos spa:feature:create --name=SignUp --module=<module>
```

`sign-in.tsx` / `sign-up.tsx` wire the four boundaries:

```tsx
export const Route = createFileRoute("/sign-in")({
  component: SignInLayout,
  pendingComponent: SignInSkeletonLayout,
  errorComponent: SignInErrorLayout,
  notFoundComponent: SignInNotFoundLayout,
});
```

`sso-callback.tsx` renders `<AuthenticateWithRedirectCallback signInFallbackRedirectUrl="/" signUpFallbackRedirectUrl="/" />` — Clerk finishes the OAuth handshake and forwards on.

`sign-out.tsx` returns `null` and runs, in an effect: `void signOut().then(() => navigate({ to: "/sign-in", replace: true }))` with `signOut` from `useClerk()`.

The router plugin regenerates `src/bootstrap/routeTree.gen.ts` — never edit it by hand.

## 5. Build the feature hooks (the Clerk layer)

Both features share the same shape under `src/features/<sign-in|sign-up>/`:

| File | Role |
|---|---|
| `types/<kebab>.ts` | `OAuthStrategyType`, `<Name>StepType`, mutation input types |
| `utils/authFlowError.ts` | tagged, machine-readable local failures |
| `utils/extractErrorMessage.ts` | unknown throw → localized message |
| `utils/isValidEmail.ts` | presentation-only check gating the submit button |
| `hooks/useRequest<Name>Code.ts` | create the attempt + email the code (also "resend") |
| `hooks/useVerify<Name>Code.ts` | verify the code + `setActive` the session |
| `hooks/use<Name>OAuth.ts` | redirect into the provider flow |

**Tagged errors** — Clerk's API errors carry a message; ours carry a `code` the card translates:

```ts
export type SignInErrorCodeType = "notReady" | "emailCodeUnavailable" | "verificationIncomplete";

export const authFlowError = (code: SignInErrorCodeType): AuthFlowErrorType => {
  const error = new Error(code) as AuthFlowErrorType;
  error.code = code;
  return error;
};
```

**Error mapping** — Clerk rejects with an object holding an `errors` array, not an `Error`:

```ts
export const extractErrorMessage = (error: unknown, translate: TranslateFnType): string => {
  if (isAuthFlowError(error)) return translate(`formError.${error.code}`);
  // extractClerkMessage: error.errors?.[0]?.longMessage ?? .message
  return extractClerkMessage(error) ?? translate("formError.generic");
};
```

**Request the code (sign-in)** — inside `useMutation<void, unknown, RequestSignInCodeInputType>` with `{ isLoaded, signIn } = useSignIn()`:

```ts
if (!isLoaded || !signIn) throw authFlowError("notReady");

const attempt = await signIn.create({ identifier: email });
const factor = attempt.supportedFirstFactors?.find((first) => first.strategy === "email_code");
if (!factor || !("emailAddressId" in factor)) throw authFlowError("emailCodeUnavailable");

await signIn.prepareFirstFactor({ strategy: "email_code", emailAddressId: factor.emailAddressId });
```

**Request the code (sign-up)** — create the account, then prepare the verification:

```ts
await signUp.create({ firstName, lastName, emailAddress: email });
await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
```

**Verify** — only `complete` counts; `setActive` is what signs the user in:

```ts
const result = await signIn.attemptFirstFactor({ strategy: "email_code", code });
// sign-up: await signUp.attemptEmailAddressVerification({ code })
if (result.status !== "complete") throw authFlowError("verificationIncomplete");
await setActive({ session: result.createdSessionId });
```

**OAuth** — map friendly names to Clerk strategies and redirect through `/sso-callback`:

```ts
const CLERK_STRATEGY: Record<OAuthStrategyType, "oauth_google" | "oauth_linkedin_oidc"> = {
  google: "oauth_google",
  linkedin: "oauth_linkedin_oidc",
};

await signIn.authenticateWithRedirect({
  strategy: CLERK_STRATEGY[strategy],
  redirectUrl: "/sso-callback",
  redirectUrlComplete: "/",
});
```

The OAuth entry point is a `useCallback`, not a mutation — the page navigates away, so there is no resolved state. LinkedIn is `oauth_linkedin_oidc`, **not** `oauth_linkedin`; enable each provider in the Clerk dashboard or the redirect fails. Guard **every** hook with `if (!isLoaded || !signIn) throw authFlowError("notReady")` — Clerk's objects are undefined until loaded.

## 6. Build the UI

One stateful card per feature; everything else is presentational, one file each:

```
components/<Name>Card.tsx        step state, mutations, error message, navigation
components/EmailStep.tsx         sign-in step 1 — email + submit
components/DetailsStep.tsx       sign-up step 1 — first/last name + email
components/VerificationStep.tsx  OTP input, resend, change-email
components/OAuthButtons.tsx      Google / LinkedIn
components/FormError.tsx         role="alert" inline error
components/<Name>Header.tsx      brand + cross-link to the other flow
components/<Name>Footer.tsx      legal links
layouts/<Name>Layout.tsx         header · centred card · footer (+ language/theme switchers)
```

Card behaviour to preserve:

- `step` state (`"email" | "verification"` / `"details" | "verification"`) swaps the rendered step — no route change.
- Auto-submit the OTP at `value.length === OTP_LENGTH` (6); clear the code on failure.
- One `errorMessage` state: reset at the start of every action, fill via `extractErrorMessage(error, trans)`.
- Disable the OAuth buttons while a code request is pending and vice-versa (`oauthPending`, `requestCode.isPending`).
- On successful verification, `void navigate({ to: "/" })`.
- Stable input ids from `useId()`, paired with `<Label htmlFor>`.

Compose only from the design module (`@module/design/...`): `Card`, `Button`, `InputEmail`, `InputOTP`, `Label`, `Separator`, `Empty`, `Skeleton`, typography (`H2`, `P`, `Muted`, `Link`), `LanguageSwitcher`, `ThemeSwitcher`. Missing primitive → add it to the design module, never style a one-off inline.

Fill the generated boundary layouts: skeleton mirrors the card's shape with `aria-busy`/`aria-live`; error layout renders `extractErrorMessage(error, trans)` in an `Empty` with a `reset` button; not-found offers a link home.

## 7. Translate everything

Each feature owns `translations/translations.json` + `use<Name>Translate.ts` (`talos translation:create` scaffolds it; `useLang` resolves the locale). Required key groups:

- `header.*`, `footer.*`, `card.*` (title, subtitle, divider, cross-link)
- `oauth.*` (`google`, `linkedin`, `continueGoogle`/`continueLinkedin` aria labels, `redirecting`)
- `email.*` / `details.*` (label, placeholder, `invalid`, `continue`, `sendCode`, `sendingCode`)
- `verification.*` (label, `hint` with `{{ digits }}`/`{{ email }}`, `autoSubmit`, `verifying`, `resend`, `sending`, `changeEmail`)
- `formError.*` — **one key per `authFlowError` code** plus `generic`
- `error.*`, `notFound.*`, `loading`

Every key needs all locales the module declares in its `locales:` list in `<module>.yml` (`en` is the fallback); complete them with `/translation-translate`.

## 8. Verify

Run `talos workspace:check --logs`. Add specs under `modules/<module>/tests/` mirroring `src/` (`optimize-testing`): mock `@clerk/clerk-react` and assert each hook's success/failure paths (including `notReady` and non-`complete` statuses), the error-mapping util, and the card's step transitions, auto-submit, and error rendering.

Manual smoke test with `bun --bun run dev`:

1. `/` while signed out → redirects to `/sign-in`.
2. Email + code → lands on `/` and stays there on reload.
3. `/sign-out` → back to `/sign-in`, and `/` redirects again.
4. Each OAuth button → provider → `/sso-callback` → `/`.

Fix every failure before completing, and report anything unverifiable (placeholder publishable key, OAuth provider not enabled in the Clerk dashboard).

---

## Swagger modules

A swagger module (`type: "swagger"`) documents an API and runs its routes. The documentation is public; only the **Send** button on a protected route (`roles` requiring more than the default `ROLE_GUEST`) needs a session. So there is no gate, no `sign-in` route and no auth feature to build — just a button that hands a fresh token to the runner.

Out of the box the explorer authenticates from the **environment's bearer token**, pasted by hand. This section replaces that manual step with Clerk, and leaves the manual field as the fallback for anyone without a Clerk account.

### 1. Install and configure

```bash
bun add @clerk/clerk-react     # at the project root
```

`modules/<module>/.env` (Vite reads it via `envDir: "../.."`):

```dotenv
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxx
```

Never a Clerk *secret* key — only `VITE_` vars reach the browser, and the secret belongs to the backend's `CLERK_SECRET_KEY`.

### 2. Gate the provider on the key, not on the route

`src/bootstrap/app.tsx` mounts `ClerkProvider` **only when a key is configured**, so a workspace without one still gets a working explorer:

```tsx
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string | undefined;

const app = <RouterProvider router={router} />;
const tree = PUBLISHABLE_KEY ? (
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">{app}</ClerkProvider>
) : (
  app
);
```

Leave `__root.tsx` alone. **Adding an `AuthGate` here is the one mistake that breaks the module's purpose.**

### 3. Add the button, in one file

`src/shared/components/ClerkAuthButton.tsx` — the only file that may import `@clerk/clerk-react`:

```tsx
const { isLoaded, isSignedIn, getToken } = useAuth();
const clerk = useClerk();
// signed out → <Button onClick={() => clerk.openSignIn()}>Sign in</Button>
// signed in  → the email + a sign-out button, and onToken(async () => (await getToken()) ?? undefined)
```

Two invariants:

- **Report a `getToken` function, never a token string.** Clerk's session tokens rotate on a ~60 s cadence; the runner must mint one at send time or it will 401 on the second request.
- **Branch on the key at a component boundary**, not inside a hook. Whether Clerk is configured is fixed for the app's lifetime, so `AuthButton` picks between `ClerkAuthButton` and the manual field — that is what keeps Clerk's hooks out of a conditional call.

Clerk's hosted modal (`openSignIn`) is the right call here, unlike in a SPA: this is a developer tool, and a docs app has no business owning an auth flow.

### 4. Feed the runner

The token resolver reaches `TryIt` through `SwaggerApp`, alongside the environment. Where the runner reads `environment.token`, prefer the Clerk token when one is available and fall back to the pasted one:

```ts
const bearerToken = (await auth.getToken?.()) ?? environment.token;
```

That ordering matters: it keeps every environment usable without Clerk, and lets a signed-in reader override a stale pasted token without editing anything.

### 5. Verify

```bash
talos check
```

Then, with the backend running:

1. Signed out, a public route still Sends.
2. A protected route (`roles` requiring more than the default `ROLE_GUEST`) shows "sign in to run it" and its Send is disabled.
3. **Sign in** opens Clerk, and the email appears in the header.
4. The same protected route now Sends and answers 200 — or 406 if the account lacks the role, which is authorisation working, not auth failing.
5. The backend must accept the explorer's origin in CORS and register `ClerkAuthMiddleware`, or every Send fails before reaching a status.
