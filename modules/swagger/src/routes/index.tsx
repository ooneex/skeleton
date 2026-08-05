import { ErrorFallback } from "@module/design/components/error";
import { PageLoader } from "@module/design/components/loader";
import { NotFound } from "@module/design/components/not-found";
import { createFileRoute } from "@tanstack/react-router";
import { SwaggerApp } from "../shared/components/SwaggerApp";

const RouteNotFound = () => <NotFound />;

/** The two halves of a route page: what it is, and what it does when you run it. */
export const ROUTE_TABS = ["docs", "try"] as const;
export type RouteTabType = (typeof ROUTE_TABS)[number];

/** Navigation state persisted in the URL query search — shareable and back/forward aware. */
export type RouteSearchType = {
  /** Free-text filter matched against path, title, key, tags and roles. */
  q?: string;
  /** Id of the selected route. */
  route?: string;
  /** Active tab. `docs` is the default and stays out of the URL. */
  tab?: RouteTabType;
};

const validateSearch = (search: Record<string, unknown>): RouteSearchType => {
  const q = typeof search.q === "string" && search.q !== "" ? search.q : undefined;
  const route = typeof search.route === "string" && search.route !== "" ? search.route : undefined;
  const tab = ROUTE_TABS.includes(search.tab as RouteTabType) ? (search.tab as RouteTabType) : undefined;

  return { q, route, tab };
};

export const Route = createFileRoute("/")({
  validateSearch,
  notFoundComponent: RouteNotFound,
  errorComponent: ErrorFallback,
  pendingComponent: PageLoader,
  component: SwaggerApp,
});
