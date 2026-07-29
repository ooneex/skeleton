/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { pickStatus, StatusPicker } from "../../../src/components/status/StatusPicker";
import { statusBadgeMap } from "../../../src/components/status/statusBadgeMap";

afterEach(cleanup);

describe("statusBadgeMap", () => {
  test("has a unique status key for every entry", () => {
    const statuses = statusBadgeMap.map((entry) => entry.status);
    expect(new Set(statuses).size).toBe(statuses.length);
  });

  test.each(statusBadgeMap.map((entry) => [entry.status, entry.component, entry.label] as const))(
    "%s badge renders its label and an icon",
    (_status, BadgeComponent, label) => {
      const { container } = render(<BadgeComponent />);
      expect(screen.getByText(label)).toBeInTheDocument();
      expect(container.querySelector("svg")).toBeInTheDocument();
      expect(container.querySelector('[data-slot="badge"]')).toBeInTheDocument();
    },
  );

  test("a badge accepts custom children overriding the default label", () => {
    const { component: StatusDraftBadge } = statusBadgeMap[0];
    render(<StatusDraftBadge>Custom label</StatusDraftBadge>);
    expect(screen.getByText("Custom label")).toBeInTheDocument();
    expect(screen.queryByText("Draft")).not.toBeInTheDocument();
  });

  test("a badge forwards arbitrary span props", () => {
    const { component: StatusDraftBadge } = statusBadgeMap[0];
    const { container } = render(<StatusDraftBadge aria-label="draft status" />);
    expect(container.querySelector('[aria-label="draft status"]')).toBeInTheDocument();
  });
});

describe("StatusPicker", () => {
  test("renders every status option with the requested title when called", async () => {
    render(<StatusPicker />);

    act(() => {
      pickStatus({ title: "Pick a status" });
    });
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
    });

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Pick a status")).toBeInTheDocument();
    const optionButtons = screen.getAllByRole("button", { name: (name) => name !== "Close" });
    expect(optionButtons).toHaveLength(statusBadgeMap.length);
  });

  test("restricting to a subset of statuses only renders those options", async () => {
    render(<StatusPicker />);

    act(() => {
      pickStatus({ statuses: ["draft", "active"] });
    });
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
    });

    const optionButtons = screen.getAllByRole("button", { name: (name) => name !== "Close" });
    expect(optionButtons).toHaveLength(2);
    expect(screen.getByText("Draft")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.queryByText("Pending")).not.toBeInTheDocument();
  });

  test("clicking a status resolves the pending call with that status", async () => {
    render(<StatusPicker />);

    let resolved: string | null | undefined;
    act(() => {
      pickStatus({}).then((value) => {
        resolved = value;
      });
    });
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
    });

    const draftButton = screen.getByText("Draft").closest("button");
    fireEvent.click(draftButton as HTMLButtonElement);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
    });

    expect(resolved).toBe("draft");
  });

  test("dismissing via Escape resolves with null", async () => {
    render(<StatusPicker />);

    let resolved: string | null | undefined = "unset";
    act(() => {
      pickStatus({}).then((value) => {
        resolved = value;
      });
    });
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
    });

    fireEvent.keyDown(document, { key: "Escape" });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
    });

    expect(resolved).toBeNull();
  });
});
