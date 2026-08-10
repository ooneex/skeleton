/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { buildLabel, buildSelector } from "../../../src/components/commenter/elementAnchor";

const render = (html: string): HTMLElement => {
  document.body.innerHTML = html;
  return document.body;
};

afterEach(() => {
  document.body.innerHTML = "";
});

describe("buildSelector", () => {
  test("stops at the nearest data-testid", () => {
    const root = render('<section data-testid="panel"><div><span></span></div></section>');
    const target = root.querySelector("span");

    expect(target && buildSelector(target)).toBe('[data-testid="panel"] > div > span');
  });

  test("stops at the nearest id, escaped for use in a selector", () => {
    const root = render('<section id="side.bar"><p></p></section>');
    const target = root.querySelector("p");

    expect(target && buildSelector(target)).toBe("#side\\.bar > p");
  });

  test("keeps the ancestor order outermost-first", () => {
    const root = render('<main data-testid="main"><article><div><b></b></div></article></main>');
    const target = root.querySelector("b");

    expect(target && buildSelector(target)).toBe('[data-testid="main"] > article > div > b');
  });

  test("numbers a step by its position among same-tag siblings only", () => {
    const root = render('<ul data-testid="list"><li></li><span></span><li></li><li></li></ul>');
    const target = root.querySelectorAll("li")[2];

    // Third <li>, not the fourth child: the <span> must not shift the count.
    expect(target && buildSelector(target)).toBe('[data-testid="list"] > li:nth-of-type(3)');
  });

  test("leaves out :nth-of-type when the element is the only one of its tag", () => {
    const root = render('<div data-testid="only"><i></i></div>');
    const target = root.querySelector("i");

    expect(target && buildSelector(target)).toBe('[data-testid="only"] > i');
  });

  test("gives up after eight steps rather than walking to the root", () => {
    const depth = 12;
    render(`${"<div>".repeat(depth)}${"</div>".repeat(depth)}`);
    const target = document.querySelectorAll("div")[depth - 1];

    expect(target && buildSelector(target).split(" > ")).toHaveLength(8);
  });
});

describe("buildLabel", () => {
  test("prefers the test id, then the id, then the first class", () => {
    const root = render(
      '<div data-testid="hero" id="a"></div><div id="b"></div><div class="card wide"></div><div></div>',
    );
    const [testId, id, classed, bare] = Array.from(root.children);

    expect(testId && buildLabel(testId)).toBe("div[hero]");
    expect(id && buildLabel(id)).toBe("div#b");
    expect(classed && buildLabel(classed)).toBe("div.card");
    expect(bare && buildLabel(bare)).toBe("div");
  });
});
