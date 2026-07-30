/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Accordion } from "../../../src/components/accordion/Accordion";
import { AccordionContent } from "../../../src/components/accordion/AccordionContent";
import { AccordionItem } from "../../../src/components/accordion/AccordionItem";
import { AccordionTrigger } from "../../../src/components/accordion/AccordionTrigger";

afterEach(cleanup);

describe("AccordionContent", () => {
  test("renders its children inside an opened panel", () => {
    render(
      <Accordion>
        <AccordionItem value="details">
          <AccordionTrigger>Details</AccordionTrigger>
          <AccordionContent>Body copy</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Details" }));

    expect(screen.getByText("Body copy")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="accordion-content"]')).toBeInTheDocument();
  });

  test("merges a custom className on the inner content wrapper", () => {
    render(
      <Accordion>
        <AccordionItem value="details">
          <AccordionTrigger>Details</AccordionTrigger>
          <AccordionContent className="custom-content">Body copy</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Details" }));

    const innerContent = document.querySelector(".custom-content");
    expect(innerContent).not.toBeNull();
    expect(innerContent?.className).toContain("px-6");
  });
});
