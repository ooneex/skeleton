/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Blockquote } from "../../../src/components/typography/Blockquote";
import { H1, H2, H3, H4, H5, H6 } from "../../../src/components/typography/Heading";
import { HighlightText } from "../../../src/components/typography/HighlightText";
import { InlineCode } from "../../../src/components/typography/InlineCode";
import { Link } from "../../../src/components/typography/Link";
import { List } from "../../../src/components/typography/List";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../src/components/typography/Table";
import { Large, Lead, Muted, P, Small } from "../../../src/components/typography/Text";

afterEach(cleanup);

describe("Blockquote", () => {
  test("renders a blockquote element with children", () => {
    render(<Blockquote>Quoted text</Blockquote>);
    const el = screen.getByText("Quoted text");
    expect(el.tagName).toBe("BLOCKQUOTE");
  });

  test("merges custom className", () => {
    render(<Blockquote className="custom-class">Text</Blockquote>);
    expect(screen.getByText("Text").className).toContain("custom-class");
  });
});

describe("Heading", () => {
  test.each([
    [H1, "h1", 1],
    [H2, "h2", 2],
    [H3, "h3", 3],
    [H4, "h4", 4],
    [H5, "h5", 5],
    [H6, "h6", 6],
  ] as const)("%s renders as an %s / level %d heading role", (Component, tag, level) => {
    render(<Component>Heading {level}</Component>);
    const heading = screen.getByRole("heading", { level });
    expect(heading.tagName.toLowerCase()).toBe(tag);
  });
});

describe("HighlightText", () => {
  test("renders plain text when no query is provided", () => {
    render(<HighlightText text="Hello world" />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
    expect(document.querySelector("mark")).not.toBeInTheDocument();
  });

  test("renders plain text when query is empty/whitespace", () => {
    render(<HighlightText text="Hello world" query="   " />);
    expect(document.querySelector("mark")).not.toBeInTheDocument();
  });

  test("highlights matching substring case-insensitively", () => {
    render(<HighlightText text="Hello World" query="world" />);
    const mark = document.querySelector("mark");
    expect(mark).toBeInTheDocument();
    expect(mark).toHaveTextContent("World");
  });

  test("highlights multiple occurrences", () => {
    render(<HighlightText text="cat catalog cat" query="cat" />);
    const marks = document.querySelectorAll("mark");
    expect(marks.length).toBe(3);
  });

  test("escapes regex special characters in query", () => {
    render(<HighlightText text="Price: $5.00 (sale)" query="$5.00" />);
    const mark = document.querySelector("mark");
    expect(mark).toBeInTheDocument();
    expect(mark).toHaveTextContent("$5.00");
  });
});

describe("InlineCode", () => {
  test("renders a code element with children", () => {
    render(<InlineCode>const x = 1</InlineCode>);
    const el = screen.getByText("const x = 1");
    expect(el.tagName).toBe("CODE");
  });
});

describe("Link", () => {
  test("renders an anchor with href", () => {
    render(<Link href="https://example.com">Example</Link>);
    const link = screen.getByRole("link", { name: "Example" });
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  test("applies default size class", () => {
    render(<Link href="#">Default size</Link>);
    expect(screen.getByRole("link").className).toContain("text-sm");
  });

  test("applies size variant classes", () => {
    render(
      <Link href="#" size="lg">
        Large
      </Link>,
    );
    expect(screen.getByRole("link").className).toContain("text-lg");
  });
});

describe("List", () => {
  test("renders a ul with list items", () => {
    render(
      <List>
        <li>One</li>
        <li>Two</li>
      </List>,
    );
    const list = screen.getByRole("list");
    expect(list.tagName).toBe("UL");
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});

describe("Table", () => {
  test("renders table/thead/tbody structure with rows and cells", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Alice</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const table = screen.getByRole("table");
    expect(table.tagName).toBe("TABLE");
    expect(screen.getByRole("columnheader", { name: "Name" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "Alice" })).toBeInTheDocument();
    expect(table.querySelector("thead")).toBeInTheDocument();
    expect(table.querySelector("tbody")).toBeInTheDocument();
  });
});

describe("Text", () => {
  test("P renders a paragraph", () => {
    render(<P>Paragraph</P>);
    expect(screen.getByText("Paragraph").tagName).toBe("P");
  });

  test("Lead renders a paragraph with lead styling", () => {
    render(<Lead>Lead text</Lead>);
    const el = screen.getByText("Lead text");
    expect(el.tagName).toBe("P");
    expect(el.className).toContain("text-xl");
  });

  test("Large renders a div with bold styling", () => {
    render(<Large>Large text</Large>);
    const el = screen.getByText("Large text");
    expect(el.tagName).toBe("DIV");
    expect(el.className).toContain("font-semibold");
  });

  test("Small renders a small element", () => {
    render(<Small>Small text</Small>);
    expect(screen.getByText("Small text").tagName).toBe("SMALL");
  });

  test("Muted renders a paragraph with muted styling", () => {
    render(<Muted>Muted text</Muted>);
    const el = screen.getByText("Muted text");
    expect(el.tagName).toBe("P");
    expect(el.className).toContain("text-muted-foreground");
  });
});
