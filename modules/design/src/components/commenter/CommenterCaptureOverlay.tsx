import { type PointerEvent as ReactPointerEvent, useState } from "react";
import { createPortal } from "react-dom";
import { COMMENTER_ATTRIBUTE } from "./elementAnchor";
import type { CommenterRectType } from "./types";

type CommenterCaptureOverlayPropsType = {
  onSelect: (rect: CommenterRectType) => void;
  onCancel: () => void;
};

const MIN_SIZE = 8;

const toRect = (from: { x: number; y: number }, to: { x: number; y: number }): CommenterRectType => ({
  x: Math.min(from.x, to.x),
  y: Math.min(from.y, to.y),
  width: Math.abs(to.x - from.x),
  height: Math.abs(to.y - from.y),
});

/** Full-page crosshair overlay: drag a rectangle to pick the area to capture. */
export const CommenterCaptureOverlay = ({ onSelect, onCancel }: CommenterCaptureOverlayPropsType) => {
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);
  const [rect, setRect] = useState<CommenterRectType | null>(null);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setOrigin({ x: event.clientX, y: event.clientY });
    setRect(null);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!origin) return;

    setRect(toRect(origin, { x: event.clientX, y: event.clientY }));
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!origin) return;

    event.currentTarget.releasePointerCapture(event.pointerId);
    const next = toRect(origin, { x: event.clientX, y: event.clientY });
    setOrigin(null);
    setRect(null);

    if (next.width < MIN_SIZE || next.height < MIN_SIZE) {
      onCancel();
      return;
    }

    onSelect(next);
  };

  return createPortal(
    <div
      {...{ [COMMENTER_ATTRIBUTE]: "capture" }}
      role="application"
      aria-label="Select the area to capture"
      className="fixed inset-0 z-2147483002 cursor-crosshair bg-foreground/25"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onCancel}
    >
      <p className="bg-popover text-popover-foreground border-border absolute inset-x-0 top-4 mx-auto w-fit rounded border px-3 py-1.5 text-xs shadow-lg">
        Drag to select an area — press Escape to cancel
      </p>
      {rect ? (
        <div
          className="border-primary bg-background/10 pointer-events-none absolute border-2"
          style={{ left: rect.x, top: rect.y, width: rect.width, height: rect.height }}
        />
      ) : null}
    </div>,
    document.body,
  );
};

CommenterCaptureOverlay.displayName = "CommenterCaptureOverlay";
