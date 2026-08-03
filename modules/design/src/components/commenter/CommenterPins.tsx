import { cn } from "@module/design/utils/cn";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { COMMENTER_ATTRIBUTE, isCommenterElement, resolveAnchor } from "./elementAnchor";
import type { CommenterCommentType, CommenterDraftType } from "./types";

type CommenterPinsPropsType = {
  comments: CommenterCommentType[];
  draft: CommenterDraftType | null;
  selectedId: string | null;
  onSelect: (id: string) => void;
};

type PinType = {
  id: string;
  index: number;
  x: number;
  y: number;
  draft: boolean;
};

const samePins = (a: PinType[], b: PinType[]): boolean => {
  return (
    a.length === b.length &&
    a.every((pin, index) => {
      const other = b[index];

      return other !== undefined && pin.id === other.id && pin.x === other.x && pin.y === other.y;
    })
  );
};

/**
 * Numbered pins anchored on the commented elements. Positions are recomputed
 * on scroll, resize and DOM mutations so pins follow their target.
 */
export const CommenterPins = ({ comments, draft, selectedId, onSelect }: CommenterPinsPropsType) => {
  const [pins, setPins] = useState<PinType[]>([]);

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      const next: PinType[] = [];

      comments.forEach((comment, index) => {
        const point = resolveAnchor(comment.anchor);
        if (point) next.push({ id: comment.id, index: index + 1, x: point.x, y: point.y, draft: false });
      });

      if (draft) {
        const point = resolveAnchor(draft.anchor);
        if (point) next.push({ id: "draft", index: comments.length + 1, x: point.x, y: point.y, draft: true });
      }

      setPins((current) => (samePins(current, next) ? current : next));
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(compute);
    };

    schedule();

    // Ignore our own portals, otherwise repositioning a pin would re-trigger the observer.
    const observer = new MutationObserver((records) => {
      if (records.every((record) => isCommenterElement(record.target))) return;

      schedule();
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    window.addEventListener("scroll", schedule, true);
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule, true);
      window.removeEventListener("resize", schedule);
    };
  }, [comments, draft]);

  if (pins.length === 0) return null;

  return createPortal(
    <div {...{ [COMMENTER_ATTRIBUTE]: "pins" }} className="pointer-events-none fixed inset-0 z-[2147483001]">
      {pins.map((pin) => (
        <button
          key={pin.id}
          type="button"
          disabled={pin.draft}
          aria-label={pin.draft ? "Comment being written" : `Comment ${pin.index}`}
          aria-current={pin.id === selectedId}
          onClick={() => onSelect(pin.id)}
          className={cn(
            "border-primary-foreground/60 bg-primary text-primary-foreground pointer-events-auto absolute flex size-6 -translate-x-1/2 -translate-y-full cursor-pointer items-center justify-center rounded-full rounded-bl-none border text-2xs font-medium shadow-md transition-transform hover:scale-110",
            pin.draft && "bg-secondary text-secondary-foreground animate-pulse cursor-default",
            pin.id === selectedId && "ring-ring-active ring-2",
          )}
          style={{ left: pin.x, top: pin.y }}
        >
          {pin.index}
        </button>
      ))}
    </div>,
    document.body,
  );
};

CommenterPins.displayName = "CommenterPins";
