/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Sidebar } from "../../../src/components/sidebar/Sidebar";

afterEach(cleanup);

const ComposedMenu = () => (
  <Sidebar.Provider>
    <Sidebar>
      <Sidebar.Content>
        <Sidebar.Group>
          <Sidebar.GroupLabel>Workspace</Sidebar.GroupLabel>
          <Sidebar.GroupAction aria-label="Add item">+</Sidebar.GroupAction>
          <Sidebar.GroupContent>
            <Sidebar.Menu>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton isActive>Home</Sidebar.MenuButton>
                <Sidebar.MenuBadge>3</Sidebar.MenuBadge>
              </Sidebar.MenuItem>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton>Settings</Sidebar.MenuButton>
                <Sidebar.MenuAction aria-label="Settings action">*</Sidebar.MenuAction>
              </Sidebar.MenuItem>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton>Projects</Sidebar.MenuButton>
                <Sidebar.MenuSub>
                  <Sidebar.MenuSubItem>
                    <Sidebar.MenuSubButton href="#a" isActive>
                      Project A
                    </Sidebar.MenuSubButton>
                  </Sidebar.MenuSubItem>
                  <Sidebar.MenuSubItem>
                    <Sidebar.MenuSubButton href="#b">Project B</Sidebar.MenuSubButton>
                  </Sidebar.MenuSubItem>
                </Sidebar.MenuSub>
              </Sidebar.MenuItem>
            </Sidebar.Menu>
          </Sidebar.GroupContent>
        </Sidebar.Group>
      </Sidebar.Content>
    </Sidebar>
  </Sidebar.Provider>
);

describe("Sidebar menu composition", () => {
  test("renders group label, actions and every menu item", () => {
    render(<ComposedMenu />);
    expect(screen.getByText("Workspace")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Settings" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Projects" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add item" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Settings action" })).toBeInTheDocument();
  });

  test("SidebarMenuButton renders the active data attribute when isActive is set", () => {
    render(<ComposedMenu />);
    const home = screen.getByRole("button", { name: "Home" });
    const settings = screen.getByRole("button", { name: "Settings" });
    expect(home).toHaveAttribute("data-active", "");
    expect(settings).not.toHaveAttribute("data-active");
  });

  test("SidebarMenuBadge shows its content next to the active item", () => {
    render(<ComposedMenu />);
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("3")).toHaveAttribute("data-slot", "sidebar-menu-badge");
  });

  test("SidebarMenuSub renders nested sub-items with an active sub-button", () => {
    render(<ComposedMenu />);
    const projectA = screen.getByRole("link", { name: "Project A" });
    const projectB = screen.getByRole("link", { name: "Project B" });
    expect(projectA).toHaveAttribute("data-active", "");
    expect(projectB).not.toHaveAttribute("data-active");
  });

  test("SidebarMenuButton supports size and variant props via sidebarMenuButtonVariants", () => {
    render(
      <Sidebar.Provider>
        <Sidebar.Menu>
          <Sidebar.MenuItem>
            <Sidebar.MenuButton size="lg" variant="outline">
              Large outline
            </Sidebar.MenuButton>
          </Sidebar.MenuItem>
        </Sidebar.Menu>
      </Sidebar.Provider>,
    );
    const button = screen.getByRole("button", { name: "Large outline" });
    expect(button.className).toContain("h-12");
    expect(button.className).toContain("ring-1");
  });

  test("SidebarMenuSkeleton renders a placeholder row, optionally with an icon", () => {
    const { container, rerender } = render(
      <Sidebar.Provider>
        <Sidebar.MenuSkeleton />
      </Sidebar.Provider>,
    );
    expect(container.querySelector('[data-sidebar="menu-skeleton-icon"]')).not.toBeInTheDocument();

    rerender(
      <Sidebar.Provider>
        <Sidebar.MenuSkeleton showIcon />
      </Sidebar.Provider>,
    );
    expect(container.querySelector('[data-sidebar="menu-skeleton-icon"]')).toBeInTheDocument();
  });
});
