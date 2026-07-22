import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { AvatarBadge } from "./AvatarBadge";
import { AvatarFallback } from "./AvatarFallback";
import { AvatarGroup } from "./AvatarGroup";
import { AvatarGroupCount } from "./AvatarGroupCount";
import { AvatarImage } from "./AvatarImage";

const avatarVariants = cva(
  "rounded-full after:rounded-full after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken",
  {
    variants: {
      size: {
        xs: "size-6",
        sm: "size-8",
        md: "size-10",
        lg: "size-12",
        xl: "size-16",
        "2xl": "size-20",
        "3xl": "size-28",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

type AvatarPropsType = AvatarPrimitive.Root.Props & VariantProps<typeof avatarVariants>;
const AvatarRoot = ({ className, size = "sm", ...props }: AvatarPropsType) => {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(avatarVariants({ size }), className)}
      {...props}
    />
  );
};

/**
 * Avatar is a compound component: its sub-components are attached as properties
 * (Image, Fallback, Badge, Group, GroupCount) so a single import exposes the
 * whole API (e.g. `<Avatar><Avatar.Image /><Avatar.Fallback /></Avatar>`).
 */
export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
  Badge: AvatarBadge,
  Group: AvatarGroup,
  GroupCount: AvatarGroupCount,
});

export { avatarVariants };

AvatarRoot.displayName = "Avatar";
