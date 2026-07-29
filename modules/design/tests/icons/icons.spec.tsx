/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import type { ComponentType, SVGProps } from "react";
import { discoverIcons, type IconFileType, sampleIconsByGroup, VIEWBOX_BY_SIZE } from "./discoverIcons";

afterEach(cleanup);

// `src/icons` is a generated library of ~19k near-identical `<Name>Icon` SVG wrapper
// components (one per style/size/category combination). Per-icon spec files would be
// pure duplication, so this suite validates the whole set as a single parameterized
// contract: naming/export conventions, viewBox conventions and actual render behaviour.
const icons = discoverIcons();
const representativeSample = sampleIconsByGroup(icons);

const loadIcon = (icon: IconFileType): ComponentType<SVGProps<SVGSVGElement>> => {
  const mod = require(icon.path) as Record<string, ComponentType<SVGProps<SVGSVGElement>> | undefined>;
  const Icon = mod[icon.name];
  if (!Icon) throw new Error(`${icon.path} should export ${icon.name}`);
  return Icon;
};

describe("icon library integrity", () => {
  test("discovers a non-trivial number of icons", () => {
    expect(icons.length).toBeGreaterThan(19000);
  });

  test("every style has the same number of icons per size (fill/outline mirror each other)", () => {
    const countByStyleAndSize = new Map<string, number>();
    for (const icon of icons) {
      const key = `${icon.style}/${icon.size}`;
      countByStyleAndSize.set(key, (countByStyleAndSize.get(key) ?? 0) + 1);
    }
    for (const size of ["sm", "md", "lg"] as const) {
      expect(countByStyleAndSize.get(`fill/${size}`)).toBe(countByStyleAndSize.get(`outline/${size}`));
    }
  });

  test("every icon file exports a single component named after its file", () => {
    for (const icon of icons) {
      const exportMatch = icon.source.match(/export const (\w+) = \(props: SVGProps<SVGSVGElement>\)/);
      expect(exportMatch, `${icon.path} should export a single SVGProps-typed component`).not.toBeNull();
      expect(exportMatch?.[1]).toBe(icon.name);
      expect((icon.source.match(/^export const /gm) ?? []).length, `${icon.path} should have one export`).toBe(1);
    }
  });

  test("every icon uses the viewBox matching its size folder", () => {
    for (const icon of icons) {
      expect(icon.source, `${icon.path} should use viewBox="${VIEWBOX_BY_SIZE[icon.size]}"`).toContain(
        `viewBox="${VIEWBOX_BY_SIZE[icon.size]}"`,
      );
    }
  });

  test("every icon spreads incoming props onto its root <svg>", () => {
    for (const icon of icons) {
      expect(icon.source, `${icon.path} should spread {...props} onto its <svg>`).toMatch(/<svg[^>]*\{\.\.\.props\}/);
    }
  });
});

describe("icon rendering", () => {
  test("every icon renders a single <svg> without throwing", () => {
    for (const icon of icons) {
      const Icon = loadIcon(icon);

      const { container, unmount } = render(<Icon />);
      const svgs = container.querySelectorAll("svg");
      expect(svgs.length, icon.path).toBe(1);
      expect(svgs[0]?.getAttribute("viewBox"), icon.path).toBe(VIEWBOX_BY_SIZE[icon.size]);
      unmount();
    }
  });
});

describe("icon prop forwarding (representative sample, one per style/size/category)", () => {
  test("forwards className, data-*, aria-* and event handler props", () => {
    for (const icon of representativeSample) {
      const Icon = loadIcon(icon);

      const { container, unmount } = render(
        <Icon className="text-primary" data-testid="icon" aria-hidden="true" role="img" />,
      );
      const svg = container.querySelector("svg");
      expect(svg, icon.path).not.toBeNull();
      expect(svg?.getAttribute("class"), icon.path).toBe("text-primary");
      expect(svg?.getAttribute("data-testid"), icon.path).toBe("icon");
      expect(svg?.getAttribute("aria-hidden"), icon.path).toBe("true");
      expect(svg?.getAttribute("role"), icon.path).toBe("img");
      unmount();
    }
  });

  test("lets custom props override the default width/height", () => {
    for (const icon of representativeSample) {
      const Icon = loadIcon(icon);

      const { container, unmount } = render(<Icon width={32} height={32} />);
      const svg = container.querySelector("svg");
      expect(svg?.getAttribute("width"), icon.path).toBe("32");
      expect(svg?.getAttribute("height"), icon.path).toBe("32");
      unmount();
    }
  });
});

describe("icon color conventions", () => {
  test("every icon renders paths that inherit color via currentColor (no hardcoded colors)", () => {
    for (const icon of representativeSample) {
      const Icon = loadIcon(icon);

      const { container, unmount } = render(<Icon />);
      const shapes = Array.from(container.querySelectorAll("path, rect, circle, ellipse, polygon, line, polyline"));
      expect(shapes.length, icon.path).toBeGreaterThan(0);
      for (const shape of shapes) {
        const fill = shape.getAttribute("fill");
        const stroke = shape.getAttribute("stroke");
        // Every shape is colored via `currentColor`, either as its fill (filled icons) or
        // its stroke (outline icons); a handful of decorative sub-shapes are left transparent.
        expect(fill === "currentColor" || stroke === "currentColor" || fill === "none", icon.path).toBe(true);
      }
      unmount();
    }
  });
});
