import { isClerkConfigured } from "../utils/clerk";
import { ClerkAuthButton } from "./ClerkAuthButton";

/** Who the runner is about to call the API as. */
export type AuthStateType = {
  /** `unavailable` means no publishable key was configured, so there is nobody to sign in as. */
  status: "unavailable" | "signed-out" | "signed-in";
  /** Who is signed in, shown next to the sign-out button. */
  label?: string;
  /** Resolves a fresh bearer token at send time. Absent while signed out. */
  getToken?: () => Promise<string | undefined>;
};

type AuthButtonPropsType = {
  onChange: (state: AuthStateType) => void;
};

/**
 * The header's auth control.
 *
 * Clerk is optional, and whether it is configured is fixed for the lifetime of
 * the app — so the branch lives at the component boundary, which is what keeps
 * Clerk's hooks out of a conditional. Without a key the explorer still reads
 * fine; only the protected routes lose their Send button.
 */
export const AuthButton = ({ onChange }: AuthButtonPropsType) => {
  if (!isClerkConfigured) {
    return (
      <span className="text-xs text-muted-foreground" title="Set VITE_CLERK_PUBLISHABLE_KEY to enable sign-in">
        Auth not configured
      </span>
    );
  }

  return <ClerkAuthButton onChange={onChange} />;
};
