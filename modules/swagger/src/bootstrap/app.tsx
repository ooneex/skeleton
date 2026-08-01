import "./app.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { CLERK_PUBLISHABLE_KEY, isClerkConfigured } from "../shared/utils/clerk";
import reportWebVitals from "./reportWebVitals.ts";
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: "intent",
  scrollRestoration: false,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

/**
 * Clerk only wraps the app when a publishable key is configured. The docs are
 * readable signed out — the session is what makes the protected routes
 * *runnable* — so a missing key degrades the explorer instead of breaking it.
 */
const app = <RouterProvider router={router} />;
const tree = isClerkConfigured ? (
  <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY as string} afterSignOutUrl="/">
    {app}
  </ClerkProvider>
) : (
  app
);

// Render the app
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<StrictMode>{tree}</StrictMode>);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
