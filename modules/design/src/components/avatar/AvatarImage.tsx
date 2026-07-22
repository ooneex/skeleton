import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cn } from "@module/design/utils/cn";

type AvatarImagePropsType = AvatarPrimitive.Image.Props;
export const AvatarImage = ({ className, ...props }: AvatarImagePropsType) => {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("rounded-full aspect-square size-full object-cover", className)}
      {...props}
    />
  );
};

AvatarImage.displayName = "Avatar.Image";
