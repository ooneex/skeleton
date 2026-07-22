import { cn } from "@module/design/utils/cn";

type AlertDialogOverlayPropsType = React.ComponentProps<"div"> & {
  open?: boolean;
};

export const AlertDialogOverlay = ({ className, open = true, ...props }: AlertDialogOverlayPropsType) => {
  return (
    <div
      data-slot="alert-dialog-overlay"
      {...(open ? { "data-open": "" } : { "data-closed": "" })}
      className={cn(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50",
        className,
      )}
      {...props}
    />
  );
};
AlertDialogOverlay.displayName = "AlertDialogOverlay";
