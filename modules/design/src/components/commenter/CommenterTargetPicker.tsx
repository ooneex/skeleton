import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { COMMENTER_ATTRIBUTE, createAnchor, isCommenterElement } from "./elementAnchor";
import type { CommenterAnchorType, CommenterRectType } from "./types";

type CommenterTargetPickerPropsType = {
  onPick: (anchor: CommenterAnchorType) => void;
};

/**
 * Edit-mode element picker: highlights whatever sits under the pointer and
 * turns the next click into an anchor, swallowing the click so the page
 * underneath never reacts to it.
 */
export const CommenterTargetPicker = ({ onPick }: CommenterTargetPickerPropsType) => {
  const [rect, setRect] = useState<CommenterRectType | null>(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    // The overlays are `pointer-events: none`, so the event target already is the page element.
    const elementUnder = (event: MouseEvent): Element | null => {
      const element =
        event.target instanceof Element ? event.target : document.elementFromPoint(event.clientX, event.clientY);

      return element && element !== document.body && !isCommenterElement(element) ? element : null;
    };

    const onMouseMove = (event: MouseEvent) => {
      const element = elementUnder(event);

      if (!element) {
        setRect(null);
        return;
      }

      const box = element.getBoundingClientRect();
      setRect({ x: box.left, y: box.top, width: box.width, height: box.height });
      setLabel(element.tagName.toLowerCase());
    };

    const onClick = (event: MouseEvent) => {
      if (isCommenterElement(event.target)) return;

      const element = elementUnder(event);
      if (!element) return;

      event.preventDefault();
      event.stopPropagation();
      setRect(null);
      onPick(createAnchor(element, event.clientX, event.clientY));
    };

    document.addEventListener("mousemove", onMouseMove, true);
    document.addEventListener("click", onClick, true);
    document.body.style.cursor = "crosshair";

    return () => {
      document.removeEventListener("mousemove", onMouseMove, true);
      document.removeEventListener("click", onClick, true);
      document.body.style.cursor = "";
    };
  }, [onPick]);

  if (!rect) return null;

  return createPortal(
    <div
      {...{ [COMMENTER_ATTRIBUTE]: "target-picker" }}
      className="border-primary bg-primary/10 pointer-events-none fixed z-[2147483000] rounded-sm border-2"
      style={{ left: rect.x, top: rect.y, width: rect.width, height: rect.height }}
    >
      <span className="bg-primary text-primary-foreground absolute -top-5 left-0 rounded-sm px-1 text-2xs leading-5">
        {label}
      </span>
    </div>,
    document.body,
  );
};

CommenterTargetPicker.displayName = "CommenterTargetPicker";
