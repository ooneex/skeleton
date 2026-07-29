/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { NotFound } from "../../../src/components/not-found/NotFound";

afterEach(cleanup);

const renderWithRouter = (initialEntries: string[] = ["/missing"]) => {
  const rootRoute = createRootRoute();
  const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: "/", component: () => <div>Home page</div> });
  const notFoundRoute = createRoute({ getParentRoute: () => rootRoute, path: "/missing", component: NotFound });
  const routeTree = rootRoute.addChildren([indexRoute, notFoundRoute]);
  const router = createRouter({ routeTree, history: createMemoryHistory({ initialEntries }) });

  return render(<RouterProvider router={router} />);
};

describe("NotFound", () => {
  test("renders the 404 heading and description", async () => {
    renderWithRouter();
    expect(await screen.findByRole("heading", { name: "404" })).toBeInTheDocument();
    expect(screen.getByText(/doesn't exist or has been moved/)).toBeInTheDocument();
  });

  test("renders 'Go back' and 'Go home' actions", async () => {
    renderWithRouter();
    expect(await screen.findByRole("button", { name: /Go back/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Go home/ })).toHaveAttribute("href", "/");
  });

  test("navigates back in history when 'Go back' is clicked", async () => {
    const user = userEvent.setup();
    renderWithRouter(["/", "/missing"]);

    await screen.findByRole("heading", { name: "404" });
    await user.click(screen.getByRole("button", { name: /Go back/ }));

    expect(await screen.findByText("Home page")).toBeInTheDocument();
  });
});
