---
name: clerk-auth-setup
description: Set up Clerk authentication in a SPA module — ClerkProvider bootstrap, an auth gate on the root route, the sign-in / sign-up / sign-out / sso-callback routes, and the passwordless email-code + OAuth features.
when_to_use: Use when adding or repairing Clerk auth (sign-in, sign-up, sign-out, OAuth/SSO, route protection) in a SPA module built on @tanstack/react-router and @clerk/clerk-react.
model: sonnet
effort: medium
allowed-tools: Bash(talos spa:feature:create *), Bash(talos translation:create *), Bash(talos monorepo:check *), Bash(bun add *), Read, Edit, Write, Grep, Glob
argument-hint: [--module=<module>]
---

# Set Up Clerk Auth (SPA module)

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed. The only thing you may not invent is the Clerk publishable key — if it is missing, leave the `.env` placeholder and say so at the end.

Wire [Clerk](https://clerk.com) into a **SPA module** (`type: "spa"` in `modules/<module>/<module>.yml`) so the app has a passwordless email-code sign-in/sign-up, Google + LinkedIn OAuth, sign-out, and a gate that protects every other route.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/`. Check both roots before assuming a path is missing.

**Reference implementation: `modules/ruby/`.** Every pattern below is taken from it — read the matching file there whenever a snippet is not enough. Follow `talos-spa` for folder rules, `spa-feature-create` for how a feature is built, `optimize-ui` for visual craft, and `optimize-testing` for specs.

## Architecture

```
src/bootstrap/app.tsx          ClerkProvider wraps <RouterProvider> (inside QueryClientProvider)
src/routes/__root.tsx          AuthGate — protects everything except AUTH_ROUTES
src/routes/sign-in.tsx         → features/sign-in  (email code + OAuth)
src/routes/sign-up.tsx         → features/sign-up  (details + email code + OAuth)
src/routes/sign-out.tsx        useClerk().signOut() then redirect to /sign-in
src/routes/sso-callback.tsx    <AuthenticateWithRedirectCallback /> — OAuth landing
.env                           VITE_CLERK_PUBLISHABLE_KEY
```

Rules that keep this clean:

- **Hooks are the only layer that talks to Clerk.** Components never import `useSignIn`/`useSignUp` — they call the feature's hooks.
- **Clerk calls are wrapped in TanStack Query mutations** so components get `isPending`/`onSuccess`/`onError` for free.
- **Never render Clerk's prebuilt `<SignIn />`/`<SignUp />` components.** Build the UI from the linked design module (`design:` field in `<module>.yml`) so it matches the product.
- **No hardcoded user-facing text** — everything goes through the feature's `use<Name>Translate` hook.

## 1. Install and configure

Add the SDK at the **project root** (workspaces share one dependency list) if absent:

```bash
bun add @clerk/clerk-react
```

Then `modules/<module>/.env` (Vite reads it via `envDir: "../.."` in `vite.config.ts`, so it sits at the module root):

```dotenv
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxx
```

Only `VITE_`-prefixed vars reach the browser. **Never** put a Clerk *secret* key in a SPA `.env` — publishable key only. If the real key is unknown, leave the placeholder and report it.

## 2. Wrap the app in `ClerkProvider`

In `modules/<module>/src/bootstrap/app.tsx`, read the key, fail loudly if missing, and wrap the router — inside `QueryClientProvider`, since the auth hooks are mutations:

```tsx
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key (VITE_CLERK_PUBLISHABLE_KEY) to the .env file");
}

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} signInUrl="/sign-in" signInFallbackRedirectUrl="/">
        <RouterProvider router={router} />
      </ClerkProvider>
    </QueryClientProvider>
  </StrictMode>,
);
```

## 3. Gate the app in `__root.tsx`

Auth pages must render **outside** the gate or the redirect loops. Keep the allow-list next to the gate:

```tsx
const AUTH_ROUTES = new Set(["/sign-in", "/sign-up", "/sign-out", "/sso-callback"]);

const AuthGate = ({ children }: AuthGatePropsType) => {
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      void navigate({ to: "/sign-in", replace: true });
    }
  }, [isLoaded, isSignedIn, navigate]);

  if (!isLoaded || !isSignedIn) {
    return <PageLoader />;
  }

  return <>{children}</>;
};
```

`RootComponent` then selects on the pathname and wraps conditionally:

```tsx
const pathname = useRouterState({ select: (state) => state.location.pathname });
const isAuthRoute = AUTH_ROUTES.has(pathname);
// ...
{isAuthRoute ? content : <AuthGate>{content}</AuthGate>}
```

- Render the design module's `PageLoader` while `!isLoaded` — never a blank screen and never the protected UI.
- Redirect with `replace: true` so the back button doesn't bounce into the gate.
- Adding another public route (marketing page, legal page) means adding it to `AUTH_ROUTES`.

## 4. Create the auth routes

`sso-callback.tsx` — the OAuth landing; Clerk finishes the handshake and forwards on:

```tsx
export const Route = createFileRoute("/sso-callback")({ component: RouteComponent });

function RouteComponent() {
  return <AuthenticateWithRedirectCallback signInFallbackRedirectUrl="/" signUpFallbackRedirectUrl="/" />;
}
```

`sign-out.tsx` — sign out, then return to sign-in:

```tsx
const { signOut } = useClerk();
const navigate = useNavigate();

useEffect(() => {
  void signOut().then(() => navigate({ to: "/sign-in", replace: true }));
}, [signOut, navigate]);

return null;
```

`sign-in.tsx` / `sign-up.tsx` are plain feature routes wiring the four boundaries:

```tsx
export const Route = createFileRoute("/sign-in")({
  component: SignInLayout,
  pendingComponent: SignInSkeletonLayout,
  errorComponent: SignInErrorLayout,
  notFoundComponent: SignInNotFoundLayout,
});
```

Scaffold the two features first so those layouts exist:

```bash
talos spa:feature:create --name=SignIn --module=<module>
talos spa:feature:create --name=SignUp --module=<module>
```

The router plugin regenerates `src/bootstrap/routeTree.gen.ts` — never edit it by hand.

## 5. Build the feature hooks (the Clerk layer)

Both features share the same shape under `src/features/<sign-in|sign-up>/`:

| File | Role |
|---|---|
| `types/<kebab>.ts` | `OAuthStrategyType`, `<Name>StepType`, mutation input types |
| `utils/authFlowError.ts` | tagged, machine-readable local failures |
| `utils/extractErrorMessage.ts` | unknown throw → localized user-facing message |
| `utils/isValidEmail.ts` | presentation-only check gating the submit button |
| `hooks/useRequest<Name>Code.ts` | create the attempt + email the code (also "resend") |
| `hooks/useVerify<Name>Code.ts` | verify the code + `setActive` the session |
| `hooks/use<Name>OAuth.ts` | redirect into the provider flow |

**Tagged errors** — Clerk's own API errors carry a message; ours carry a `code` the card translates:

```ts
export type SignInErrorCodeType = "notReady" | "emailCodeUnavailable" | "verificationIncomplete";

export const authFlowError = (code: SignInErrorCodeType): AuthFlowErrorType => {
  const error = new Error(code) as AuthFlowErrorType;
  error.code = code;
  return error;
};
```

**Error mapping** — Clerk rejects with an object holding an `errors` array, not an `Error`, so unwrap it:

```ts
export const extractErrorMessage = (error: unknown, translate: TranslateFnType): string => {
  if (isAuthFlowError(error)) return translate(`formError.${error.code}`);

  const clerkMessage = extractClerkMessage(error); // error.errors?.[0]?.longMessage ?? .message
  if (clerkMessage) return clerkMessage;

  return translate("formError.generic");
};
```

**Request the code (sign-in)** — find the `email_code` first factor, then prepare it:

```ts
export const useRequestSignInCode = () => {
  const { isLoaded, signIn } = useSignIn();

  return useMutation<void, unknown, RequestSignInCodeInputType>({
    mutationFn: async ({ email }) => {
      if (!isLoaded || !signIn) throw authFlowError("notReady");

      const attempt = await signIn.create({ identifier: email });
      const factor = attempt.supportedFirstFactors?.find((first) => first.strategy === "email_code");

      if (!factor || !("emailAddressId" in factor)) throw authFlowError("emailCodeUnavailable");

      await signIn.prepareFirstFactor({ strategy: "email_code", emailAddressId: factor.emailAddressId });
    },
  });
};
```

**Request the code (sign-up)** — create the account, then prepare the email verification:

```ts
await signUp.create({ firstName, lastName, emailAddress: email });
await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
```

**Verify** — the mutation is only successful when the status is `complete`; activating the session is what signs the user in:

```ts
const result = await signIn.attemptFirstFactor({ strategy: "email_code", code });
// sign-up: await signUp.attemptEmailAddressVerification({ code })

if (result.status !== "complete") throw authFlowError("verificationIncomplete");

await setActive({ session: result.createdSessionId });
```

**OAuth** — map friendly provider names to Clerk strategies and redirect through `/sso-callback`:

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

The OAuth entry point is a `useCallback`, not a mutation — the page navigates away, so there is no resolved state to render. LinkedIn is `oauth_linkedin_oidc`, **not** `oauth_linkedin`. Enable each provider in the Clerk dashboard or the redirect fails.

Guard **every** hook with `if (!isLoaded || !signIn) throw authFlowError("notReady")` — Clerk's objects are undefined until it loads.

## 6. Build the UI

One stateful card per feature orchestrates the steps; every other piece is presentational and lives in its own file:

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

- `step` state (`"email" | "verification"` / `"details" | "verification"`) switches which step renders — no route change.
- Auto-submit the OTP once `value.length === OTP_LENGTH` (6); clear the code on failure so the user can retype.
- Keep one `errorMessage` state, reset it at the start of every action, and fill it via `extractErrorMessage(error, trans)`.
- Disable the OAuth buttons while a code request is pending and vice-versa (`oauthPending`, `requestCode.isPending`).
- On successful verification, `void navigate({ to: "/" })`.
- Give inputs stable ids from `useId()` and pair them with `<Label htmlFor>`.

Compose only from the linked design module (`@module/design/...`): `Card`, `Button`, `InputEmail`, `InputOTP`, `Label`, `Separator`, `Empty`, `Skeleton`, typography (`H2`, `P`, `Muted`, `Link`), `LanguageSwitcher`, `ThemeSwitcher`. If a primitive is missing, add it to the design module — never style a one-off inline.

Fill the generated boundary layouts too: the skeleton mirrors the card's shape with `aria-busy`/`aria-live`, the error layout renders `extractErrorMessage(error, trans)` in an `Empty` with a `reset` button, and the not-found layout offers a link home.

## 7. Translate everything

Each feature owns `translations/translations.json` + `use<Name>Translate.ts` (`talos translation:create` scaffolds it; `useLang` resolves the active locale). Required key groups:

- `header.*`, `footer.*`, `card.*` (title, subtitle, divider, cross-link)
- `oauth.*` (`google`, `linkedin`, `continueGoogle`/`continueLinkedin` aria labels, `redirecting`)
- `email.*` / `details.*` (label, placeholder, `invalid`, `continue`, `sendCode`, `sendingCode`)
- `verification.*` (label, `hint` with `{{ digits }}`/`{{ email }}`, `autoSubmit`, `verifying`, `resend`, `sending`, `changeEmail`)
- `formError.*` — **one key per `authFlowError` code** plus `generic`
- `error.*`, `notFound.*`, `loading`

Every key needs all locales already used in the module (`en` is the fallback). Use `/translation-translate` to complete them.

## 8. Verify

```bash
talos monorepo:check
```

Then add specs under `modules/<module>/tests/` mirroring `src/` (`optimize-testing` conventions): mock `@clerk/clerk-react` and assert each hook's success/failure paths (including `notReady` and non-`complete` statuses), the error-mapping util, and the card's step transitions, auto-submit, and error rendering.

Manual smoke test with `bun --bun run dev` in the module:

1. `/` while signed out → redirects to `/sign-in`.
2. Email + code → lands on `/` and stays there on reload.
3. `/sign-out` → back to `/sign-in`, and `/` redirects again.
4. Each OAuth button → provider → `/sso-callback` → `/`.

Fix every failure before completing, and report anything you could not verify (e.g. a placeholder publishable key or an OAuth provider not enabled in the Clerk dashboard).
