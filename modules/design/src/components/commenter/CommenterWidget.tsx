import { Button } from "@module/design/components/button";
import { Pen2Icon } from "@module/design/icons/outline/communication/sm/Pen2Icon";
import { EyeIcon } from "@module/design/icons/outline/ui-layout/sm/EyeIcon";
import { GripDotsIcon } from "@module/design/icons/outline/ui-layout/sm/GripDotsIcon";
import { XmarkIcon } from "@module/design/icons/outline/ui-layout/sm/XmarkIcon";
import { cn } from "@module/design/utils/cn";
import { createPortal } from "react-dom";
import { CommenterComposer } from "./CommenterComposer";
import { CommenterList } from "./CommenterList";
import { useCommenterContext } from "./commenterContext";
import { COMMENTER_ATTRIBUTE } from "./elementAnchor";
import { useDraggable } from "./useDraggable";

const WIDGET_SIZE = { width: 320, height: 420 };
const STORAGE_KEY = "commenter:position";

type CommenterWidgetPropsType = {
  className?: string;
};

/** Draggable panel holding the mode switch, the composer and the comment list. */
export const CommenterWidget = ({ className }: CommenterWidgetPropsType) => {
  const { mode, setMode, comments, draft, close, hidden } = useCommenterContext();
  const { position, dragging, handleProps } = useDraggable({
    defaultPosition: { x: Math.max(8, window.innerWidth - WIDGET_SIZE.width - 24), y: 24 },
    storageKey: STORAGE_KEY,
    size: WIDGET_SIZE,
  });

  return createPortal(
    <section
      {...{ [COMMENTER_ATTRIBUTE]: "widget" }}
      aria-label="Feedback commenter"
      className={cn(
        "bg-popover text-popover-foreground border-border fixed z-[2147483003] flex w-80 flex-col overflow-hidden rounded-lg border shadow-xl",
        hidden && "invisible",
        className,
      )}
      style={{ left: position.x, top: position.y }}
    >
      <header
        {...handleProps}
        className={cn(
          "border-border bg-muted/50 flex touch-none items-center gap-2 border-b px-2 py-1.5",
          dragging ? "cursor-grabbing" : "cursor-grab",
        )}
      >
        <GripDotsIcon className="text-muted-foreground" />
        <h2 className="grow text-xs font-medium">
          Feedback
          <span className="text-muted-foreground ml-1 font-normal">({comments.length})</span>
        </h2>

        <div className="flex items-center gap-0.5">
          <Button
            size="icon-xs"
            variant={mode === "edit" ? "default" : "ghost"}
            aria-pressed={mode === "edit"}
            aria-label="Edit mode"
            onClick={() => setMode("edit")}
          >
            <Pen2Icon />
          </Button>
          <Button
            size="icon-xs"
            variant={mode === "view" ? "default" : "ghost"}
            aria-pressed={mode === "view"}
            aria-label="View mode"
            onClick={() => setMode("view")}
          >
            <EyeIcon />
          </Button>
          <Button size="icon-xs" variant="ghost" aria-label="Hide commenter" onClick={close}>
            <XmarkIcon />
          </Button>
        </div>
      </header>

      {draft ? <CommenterComposer /> : <CommenterList />}

      <footer className="border-border text-muted-foreground flex items-center justify-between gap-2 border-t px-3 py-1.5 text-2xs">
        <span>{mode === "edit" ? "Click an element to comment" : "Read only"}</span>
      </footer>
    </section>,
    document.body,
  );
};

CommenterWidget.displayName = "CommenterWidget";
