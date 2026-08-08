import { ErrorFallback } from "@module/design/components/error";
import { PageLoader } from "@module/design/components/loader";
import { NotFound } from "@module/design/components/not-found";
import { createFileRoute } from "@tanstack/react-router";

const RouteNotFound = () => <NotFound />;

const RouteComponent = () => <div>Hello "/"!</div>;

export const Route = createFileRoute("/")({
  notFoundComponent: RouteNotFound,
  errorComponent: ErrorFallback,
  pendingComponent: PageLoader,
  component: RouteComponent,
});
