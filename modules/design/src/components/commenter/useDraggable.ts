import { type PointerEvent as ReactPointerEvent, useCallback, useEffect, useRef, useState } from "react";

export type DraggablePositionType = {
  x: number;
  y: number;
};

type UseDraggableOptionsType = {
  /** Where the widget sits before the user moves it, in viewport coordinates. */
  defaultPosition: DraggablePositionType;
  /** localStorage key used to remember the position across reloads. */
  storageKey?: string;
  /** Size used to keep the widget inside the viewport. */
  size: { width: number; height: number };
};

const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);

const readStored = (storageKey?: string): DraggablePositionType | null => {
  if (!storageKey) return null;

  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<DraggablePositionType>;

    return typeof parsed.x === "number" && typeof parsed.y === "number" ? { x: parsed.x, y: parsed.y } : null;
  } catch {
    return null;
  }
};

/**
 * Pointer dragging for a fixed-position panel: returns the current position,
 * the handle props to spread on the drag area, and whether a drag is running.
 */
export const useDraggable = ({ defaultPosition, storageKey, size }: UseDraggableOptionsType) => {
  const [position, setPosition] = useState<DraggablePositionType>(defaultPosition);
  const [dragging, setDragging] = useState(false);
  const originRef = useRef<DraggablePositionType>({ x: 0, y: 0 });

  useEffect(() => {
    const stored = readStored(storageKey);
    if (stored) setPosition(stored);
  }, [storageKey]);

  const commit = useCallback(
    (next: DraggablePositionType) => {
      const bounded = {
        x: clamp(next.x, 8, Math.max(8, window.innerWidth - size.width - 8)),
        y: clamp(next.y, 8, Math.max(8, window.innerHeight - size.height - 8)),
      };

      setPosition(bounded);

      return bounded;
    },
    [size.width, size.height],
  );

  const onPointerDown = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      if (event.button !== 0) return;

      event.currentTarget.setPointerCapture(event.pointerId);
      originRef.current = { x: event.clientX - position.x, y: event.clientY - position.y };
      setDragging(true);
    },
    [position.x, position.y],
  );

  const onPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      if (!dragging) return;

      commit({ x: event.clientX - originRef.current.x, y: event.clientY - originRef.current.y });
    },
    [dragging, commit],
  );

  const onPointerUp = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      if (!dragging) return;

      event.currentTarget.releasePointerCapture(event.pointerId);
      setDragging(false);

      if (!storageKey) return;

      try {
        window.localStorage.setItem(storageKey, JSON.stringify(position));
      } catch {
        // storage disabled — the position simply stays in memory
      }
    },
    [dragging, position, storageKey],
  );

  useEffect(() => {
    const onResize = () => commit(position);

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [commit, position]);

  return {
    position,
    dragging,
    handleProps: { onPointerDown, onPointerMove, onPointerUp, onPointerCancel: onPointerUp },
  };
};
