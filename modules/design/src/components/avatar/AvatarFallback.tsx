import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cn } from "@module/design/utils/cn";

type AvatarFallbackPropsType = AvatarPrimitive.Fallback.Props;
export const AvatarFallback = ({ className, ...props }: AvatarFallbackPropsType) => {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm",
        className,
      )}
      {...props}
    />
  );
};

AvatarFallback.displayName = "Avatar.Fallback";
