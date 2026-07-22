import { DotsVerticalIcon } from "../../icons/outline/ui-layout/sm/DotsVerticalIcon";
import { cn } from "../../utils/cn";
import { Button } from "./Button";

type ButtonMorePropsType = Omit<React.ComponentProps<typeof Button>, "variant" | "children">;

export const ButtonMore = ({ className, ...props }: ButtonMorePropsType) => {
  return (
    <Button size="icon-sm" variant="ghost" className={cn("rounded-full", className)} {...props}>
      <DotsVerticalIcon className="size-4" />
    </Button>
  );
};
