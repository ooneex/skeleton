/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Progress } from "../../../src/components/progress/Progress";

afterEach(cleanup);

describe("Progress", () => {
  test("renders track, indicator, label and value", () => {
    const { container } = render(
      <Progress value={50}>
        <Progress.Label>Uploading</Progress.Label>
        <Progress.Track>
          <Progress.Indicator />
        </Progress.Track>
        <Progress.Value />
      </Progress>,
    );

    expect(screen.getByText("Uploading")).toBeInTheDocument();
    expect(container.querySelector('[data-slot="progress"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="progress-track"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="progress-indicator"]')).toBeInTheDocument();
  });

  test("reflects value 0 as minimum progress", () => {
    const { container } = render(
      <Progress value={0}>
        <Progress.Track>
          <Progress.Indicator />
        </Progress.Track>
      </Progress>,
    );

    const root = container.querySelector('[data-slot="progress"]');
    expect(root).toHaveAttribute("aria-valuenow", "0");
  });

  test("reflects value 100 as maximum progress and shows formatted value", () => {
    const { container } = render(
      <Progress value={100}>
        <Progress.Track>
          <Progress.Indicator />
        </Progress.Track>
        <Progress.Value />
      </Progress>,
    );

    const root = container.querySelector('[data-slot="progress"]');
    expect(root).toHaveAttribute("aria-valuenow", "100");
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  test("renders as indeterminate when value is null", () => {
    const { container } = render(
      <Progress value={null}>
        <Progress.Track>
          <Progress.Indicator />
        </Progress.Track>
      </Progress>,
    );

    const root = container.querySelector('[data-slot="progress"]');
    expect(root).not.toHaveAttribute("aria-valuenow");
  });

  test("applies custom className to the root", () => {
    const { container } = render(
      <Progress value={25} className="custom-progress">
        <Progress.Track>
          <Progress.Indicator />
        </Progress.Track>
      </Progress>,
    );

    expect(container.querySelector('[data-slot="progress"]')).toHaveClass("custom-progress");
  });
});
