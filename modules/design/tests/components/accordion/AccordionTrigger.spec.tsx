/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Accordion } from "../../../src/components/accordion/Accordion";
import { AccordionContent } from "../../../src/components/accordion/AccordionContent";
import { AccordionItem } from "../../../src/components/accordion/AccordionItem";
import { AccordionTrigger } from "../../../src/components/accordion/AccordionTrigger";

afterEach(cleanup);

describe("AccordionTrigger", () => {
  test("toggles the expanded state and renders its chevron icon", () => {
    render(
      <Accordion>
        <AccordionItem value="details">
          <AccordionTrigger>Details</AccordionTrigger>
          <AccordionContent>Body copy</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: "Details" });
    expect(trigger.querySelector('[data-slot="accordion-trigger-icon"]')).toBeInTheDocument();

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });

  test("merges a custom className on the trigger button", () => {
    render(
      <Accordion>
        <AccordionItem value="details">
          <AccordionTrigger className="custom-trigger">Details</AccordionTrigger>
          <AccordionContent>Body copy</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByRole("button", { name: "Details" })).toHaveClass("custom-trigger");
  });
});
