/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Accordion } from "../../../src/components/accordion/Accordion";
import { AccordionContent } from "../../../src/components/accordion/AccordionContent";
import { AccordionItem } from "../../../src/components/accordion/AccordionItem";
import { AccordionTrigger } from "../../../src/components/accordion/AccordionTrigger";

afterEach(cleanup);

describe("AccordionItem", () => {
  test("wraps the trigger and content in the item container", () => {
    render(
      <Accordion>
        <AccordionItem value="details" className="custom-item">
          <AccordionTrigger>Details</AccordionTrigger>
          <AccordionContent>Body copy</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Details" }));

    const item = document.querySelector('[data-slot="accordion-item"]');
    expect(item).toHaveClass("custom-item");
    expect(item?.className).toContain("rounded");
    expect(screen.getByText("Body copy")).toBeInTheDocument();
  });

  test("forwards arbitrary HTML props to the item container", () => {
    render(
      <Accordion>
        <AccordionItem value="details" id="billing-section">
          <AccordionTrigger>Details</AccordionTrigger>
          <AccordionContent>Body copy</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(document.querySelector('[data-slot="accordion-item"]')).toHaveAttribute("id", "billing-section");
  });
});
