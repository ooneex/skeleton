import { Commenter } from "@module/design/components/commenter";
import { ErrorFallback } from "@module/design/components/error";
import { PageLoader } from "@module/design/components/loader";
import { NotFound } from "@module/design/components/not-found";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { hotkeysDevtoolsPlugin } from "@tanstack/react-hotkeys-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

const RouteNotFound = () => <NotFound />;

const RootComponent = () => {
  return (
    <>
      <main className="flex-1 min-h-0 overflow-y-auto p-0">
        <Outlet />
      </main>
      {/* Review the gallery itself — off unless VITE_COMMENTER_ENABLED is set. */}
      <Commenter />
      <TanStackDevtools
        config={{
          position: "bottom-right",
        }}
        plugins={[
          hotkeysDevtoolsPlugin(),
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  );
};

export const Route = createRootRoute({
  notFoundComponent: RouteNotFound,
  errorComponent: ErrorFallback,
  pendingComponent: PageLoader,
  component: RootComponent,
});
