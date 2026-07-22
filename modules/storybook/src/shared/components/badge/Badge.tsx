import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const badgeVariants = cva(
  "rounded-full border-none font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive overflow-hidden group/badge leading-relaxed",
  {
    variants: {
      size: {
        xs: "gap-1 px-2.5 py-0.5 text-2xs [&>svg]:size-2.5!",
        sm: "gap-1 px-3 py-0.5 text-xs [&>svg]:size-3!",
        md: "gap-1.5 px-3.5 py-1 text-sm [&>svg]:size-3.5!",
        lg: "gap-1.5 px-4 py-1 text-base [&>svg]:size-4!",
      },
      variant: {
        default: "bg-primary/5 border-border-alt text-foreground [a]:hover:bg-primary/20",
        secondary: "bg-secondary/15 border-secondary text-secondary-800 [a]:hover:bg-secondary/20",
        destructive: "bg-destructive/10 border-destructive text-destructive [a]:hover:bg-destructive/20",
        outline: "bg-foreground/10 border-foreground text-foreground [a]:hover:bg-foreground/20",
        ghost: "bg-muted/10 border-muted text-muted-foreground [a]:hover:bg-muted/20",
        link: "bg-primary/10 border-primary text-foreground underline-offset-4 hover:underline [a]:hover:bg-primary/20",
        success: "bg-success-100 border-success-500 text-success-700 [a]:hover:bg-success-200",
        danger: "bg-danger-100 border-danger-500 text-danger-700 [a]:hover:bg-danger-200",
        warning: "bg-warning-100 border-warning-500 text-warning-700 [a]:hover:bg-warning-200",
        info: "bg-info-100 border-info-500 text-info-700 [a]:hover:bg-info-200",
        neutral: "bg-neutral-100 border-neutral-400 text-neutral-700 [a]:hover:bg-neutral-200",
      },
    },
    defaultVariants: { variant: "default", size: "xs" },
  },
);

type BadgePropsType = useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>;
export const Badge = ({ className, variant = "default", size = "xs", render, ...props }: BadgePropsType) => {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">({ className: cn(badgeVariants({ className, variant, size })) }, props),
    render,
    state: { slot: "badge", variant, size },
  });
};
export { badgeVariants };
