/**
 * Clerk is optional here: the documentation reads the same signed out, and only
 * the try-it runner needs a session token. The key is read once at module load
 * so the decision to mount `ClerkProvider` — and therefore whether Clerk's
 * hooks may be called at all — is constant for the lifetime of the app.
 */
export const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string | undefined;

export const isClerkConfigured = Boolean(CLERK_PUBLISHABLE_KEY);
