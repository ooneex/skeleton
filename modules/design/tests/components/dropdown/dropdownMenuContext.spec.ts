/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { getMenuItems, handleMenuNavigation } from "../../../src/components/dropdown/dropdownMenuContext";

afterEach(() => {
  document.body.innerHTML = "";
});

const makePopup = (itemCount = 3, disabledIndexes: number[] = []) => {
  const popup = document.createElement("div");
  for (let i = 0; i < itemCount; i += 1) {
    const item = document.createElement("div");
    item.setAttribute("role", "menuitem");
    item.tabIndex = -1;
    item.textContent = `Item ${i}`;
    if (disabledIndexes.includes(i)) {
      item.setAttribute("data-disabled", "");
    }
    popup.appendChild(item);
  }
  document.body.appendChild(popup);
  return popup;
};

const keyDownEvent = (key: string) => ({ key }) as unknown as React.KeyboardEvent;

describe("getMenuItems", () => {
  test("returns every enabled menu item within the popup", () => {
    const popup = makePopup(3, [1]);
    const items = getMenuItems(popup);
    expect(items).toHaveLength(2);
    expect(items.map((item) => item.textContent)).toEqual(["Item 0", "Item 2"]);
  });

  test("matches menuitemcheckbox and menuitemradio roles too", () => {
    const popup = document.createElement("div");
    const checkbox = document.createElement("div");
    checkbox.setAttribute("role", "menuitemcheckbox");
    const radio = document.createElement("div");
    radio.setAttribute("role", "menuitemradio");
    popup.append(checkbox, radio);
    document.body.appendChild(popup);

    expect(getMenuItems(popup)).toHaveLength(2);
  });
});

describe("handleMenuNavigation", () => {
  test("ArrowDown focuses the first item when nothing is focused yet", () => {
    const popup = makePopup(3);
    const handled = handleMenuNavigation(popup, keyDownEvent("ArrowDown"));
    expect(handled).toBe(true);
    expect(document.activeElement?.textContent).toBe("Item 0");
  });

  test("ArrowDown moves focus to the next item, wrapping to the first at the end", () => {
    const popup = makePopup(3);
    const items = getMenuItems(popup);
    items[2]!.focus();

    handleMenuNavigation(popup, keyDownEvent("ArrowDown"));
    expect(document.activeElement).toBe(items[0]!);
  });

  test("ArrowUp moves focus to the previous item, wrapping to the last from the first", () => {
    const popup = makePopup(3);
    const items = getMenuItems(popup);
    items[0]!.focus();

    handleMenuNavigation(popup, keyDownEvent("ArrowUp"));
    expect(document.activeElement).toBe(items[2]!);
  });

  test("Home focuses the first item, End focuses the last", () => {
    const popup = makePopup(3);
    const items = getMenuItems(popup);
    items[1]!.focus();

    handleMenuNavigation(popup, keyDownEvent("Home"));
    expect(document.activeElement).toBe(items[0]!);

    handleMenuNavigation(popup, keyDownEvent("End"));
    expect(document.activeElement).toBe(items[2]!);
  });

  test("Enter clicks the focused item", () => {
    const popup = makePopup(2);
    const items = getMenuItems(popup);
    let clicked = false;
    items[0]!.addEventListener("click", () => (clicked = true));
    items[0]!.focus();

    const handled = handleMenuNavigation(popup, keyDownEvent("Enter"));
    expect(handled).toBe(true);
    expect(clicked).toBe(true);
  });

  test("Enter with nothing focused does not throw and reports unhandled", () => {
    const popup = makePopup(2);
    const handled = handleMenuNavigation(popup, keyDownEvent("Enter"));
    expect(handled).toBe(false);
  });

  test("skips disabled items when navigating", () => {
    const popup = makePopup(3, [1]);
    const items = getMenuItems(popup);
    items[0]!.focus();

    handleMenuNavigation(popup, keyDownEvent("ArrowDown"));
    // Item at index 1 is disabled/excluded, so focus should land on "Item 2".
    expect(document.activeElement?.textContent).toBe("Item 2");
  });

  test("returns false for unrecognized keys", () => {
    const popup = makePopup(2);
    expect(handleMenuNavigation(popup, keyDownEvent("a"))).toBe(false);
  });
});
