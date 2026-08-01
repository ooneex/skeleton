import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { Button } from "@module/design/components/button";
import { useEffect } from "react";
import type { AuthStateType } from "./AuthButton";

type ClerkAuthButtonPropsType = {
  onChange: (state: AuthStateType) => void;
};

/**
 * The sign-in control, and the only place Clerk is touched.
 *
 * It reports a `getToken` rather than a token string: Clerk's session tokens
 * are short-lived and rotate, so the runner asks for a fresh one at the moment
 * it sends instead of replaying whatever was minted when the button was
 * clicked.
 *
 * Sign-in goes through Clerk's hosted modal on purpose — this is a developer
 * tool, and a docs app has no business owning an auth flow. A SPA that needs
 * the flow built from the design system uses the `clerk-auth-setup` skill.
 */
export const ClerkAuthButton = ({ onChange }: ClerkAuthButtonPropsType) => {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const clerk = useClerk();

  const label = user?.primaryEmailAddress?.emailAddress ?? user?.fullName ?? "Signed in";

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    if (!isSignedIn) {
      onChange({ status: "signed-out" });
      return;
    }
    onChange({
      status: "signed-in",
      label,
      getToken: async () => (await getToken()) ?? undefined,
    });
  }, [isLoaded, isSignedIn, label, getToken, onChange]);

  if (!isLoaded) {
    return (
      <Button variant="outline" size="xs" disabled>
        Loading…
      </Button>
    );
  }

  if (!isSignedIn) {
    return (
      <Button variant="default" size="xs" onClick={() => clerk.openSignIn()}>
        Sign in
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-1.5">
      <span className="max-w-40 truncate text-xs text-muted-foreground" title={label}>
        {label}
      </span>
      <Button variant="ghost" size="xs" onClick={() => void clerk.signOut()}>
        Sign out
      </Button>
    </div>
  );
};
