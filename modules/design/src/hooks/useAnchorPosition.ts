import { type RefObject, useCallback, useLayoutEffect } from "react";

export type AnchorSideType = "top" | "right" | "bottom" | "left";
export type AnchorAlignType = "start" | "center" | "end";

type UseAnchorPositionOptionsType = {
  open: boolean;
  anchorRef: RefObject<HTMLElement | null>;
  /** Fixed-position element wrapping the popup; receives coordinates and CSS vars. */
  positionerRef: RefObject<HTMLElement | null>;
  side?: AnchorSideType;
  align?: AnchorAlignType;
  sideOffset?: number;
  alignOffset?: number;
  /** Minimum gap kept between the popup and the viewport edges. */
  collisionPadding?: number;
};

const OPPOSITE_SIDE: Record<AnchorSideType, AnchorSideType> = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};

const spaceOnSide = (side: AnchorSideType, anchor: DOMRect, viewportWidth: number, viewportHeight: number) => {
  switch (side) {
    case "top":
      return anchor.top;
    case "bottom":
      return viewportHeight - anchor.bottom;
    case "left":
      return anchor.left;
    case "right":
      return viewportWidth - anchor.right;
  }
};

/** CSS `transform-origin` pointing back at the anchor, e.g. `"center top"` for `side="bottom"`. */
const transformOrigin = (side: AnchorSideType, align: AnchorAlignType) => {
  if (side === "top" || side === "bottom") {
    const x = align === "start" ? "left" : align === "end" ? "right" : "center";
    return `${x} ${side === "bottom" ? "top" : "bottom"}`;
  }
  const y = align === "start" ? "top" : align === "end" ? "bottom" : "center";
  return `${side === "right" ? "left" : "right"} ${y}`;
};

/**
 * Anchor a `position: fixed` element to another element, flipping to the
 * opposite side when the preferred side lacks viewport space and clamping
 * into the viewport. Sets the CSS variables `--anchor-width`,
 * `--available-height` and `--transform-origin` on the positioner so popup
 * styles can consume them. Tracks scroll, resize and size changes while open.
 */
export const useAnchorPosition = ({
  open,
  anchorRef,
  positionerRef,
  side = "bottom",
  align = "center",
  sideOffset = 0,
  alignOffset = 0,
  collisionPadding = 8,
}: UseAnchorPositionOptionsType) => {
  const update = useCallback(() => {
    const anchor = anchorRef.current;
    const positioner = positionerRef.current;
    if (!anchor || !positioner) return;

    const rect = anchor.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;

    positioner.style.setProperty("--anchor-width", `${rect.width}px`);

    const applyAvailableHeight = (candidate: AnchorSideType) => {
      const available =
        candidate === "top" || candidate === "bottom"
          ? Math.max(0, spaceOnSide(candidate, rect, viewportWidth, viewportHeight) - sideOffset - collisionPadding)
          : viewportHeight - collisionPadding * 2;
      positioner.style.setProperty("--available-height", `${available}px`);
    };

    applyAvailableHeight(side);
    let { width, height } = positioner.getBoundingClientRect();

    let finalSide = side;
    const requestedSpace = spaceOnSide(side, rect, viewportWidth, viewportHeight);
    const neededSpace = (side === "top" || side === "bottom" ? height : width) + sideOffset + collisionPadding;
    if (
      requestedSpace < neededSpace &&
      spaceOnSide(OPPOSITE_SIDE[side], rect, viewportWidth, viewportHeight) > requestedSpace
    ) {
      finalSide = OPPOSITE_SIDE[side];
      applyAvailableHeight(finalSide);
      ({ width, height } = positioner.getBoundingClientRect());
    }

    let top: number;
    let left: number;
    if (finalSide === "top" || finalSide === "bottom") {
      top = finalSide === "bottom" ? rect.bottom + sideOffset : rect.top - height - sideOffset;
      left =
        align === "start"
          ? rect.left + alignOffset
          : align === "end"
            ? rect.right - width - alignOffset
            : rect.left + rect.width / 2 - width / 2 + alignOffset;
    } else {
      left = finalSide === "right" ? rect.right + sideOffset : rect.left - width - sideOffset;
      top =
        align === "start"
          ? rect.top + alignOffset
          : align === "end"
            ? rect.bottom - height - alignOffset
            : rect.top + rect.height / 2 - height / 2 + alignOffset;
    }

    left = Math.min(
      Math.max(left, collisionPadding),
      Math.max(collisionPadding, viewportWidth - width - collisionPadding),
    );
    top = Math.min(
      Math.max(top, collisionPadding),
      Math.max(collisionPadding, viewportHeight - height - collisionPadding),
    );

    positioner.style.top = `${top}px`;
    positioner.style.left = `${left}px`;
    positioner.style.setProperty("--transform-origin", transformOrigin(finalSide, align));
  }, [anchorRef, positionerRef, side, align, sideOffset, alignOffset, collisionPadding]);

  useLayoutEffect(() => {
    if (!open) return;
    update();
    window.addEventListener("resize", update);
    document.addEventListener("scroll", update, { capture: true, passive: true });
    const observer = new ResizeObserver(update);
    if (anchorRef.current) observer.observe(anchorRef.current);
    if (positionerRef.current) observer.observe(positionerRef.current);
    return () => {
      window.removeEventListener("resize", update);
      document.removeEventListener("scroll", update, { capture: true });
      observer.disconnect();
    };
  }, [open, update, anchorRef, positionerRef]);
};
