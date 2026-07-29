/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputSearchWithKbd } from "../../../src/components/input/InputSearchWithKbd";

afterEach(cleanup);

describe("InputSearchWithKbd", () => {
  test("renders the search input with the default placeholder", () => {
    render(<InputSearchWithKbd />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  test("renders the keyboard shortcut hint", () => {
    render(<InputSearchWithKbd />);
    expect(screen.getByText("⌘K")).toBeInTheDocument();
  });
});
