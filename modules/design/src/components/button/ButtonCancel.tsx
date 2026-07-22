import { XmarkIcon } from "@module/design/icons/outline/ui-layout/sm/XmarkIcon";
import { Button } from "./Button";

type ButtonCancelPropsType = Omit<React.ComponentProps<typeof Button>, "variant">;

export const ButtonCancel = ({ children, ...props }: ButtonCancelPropsType) => {
  return (
    <Button variant="ghost" {...props}>
      <XmarkIcon />
      {children ?? "Cancel"}
    </Button>
  );
};

ButtonCancel.displayName = "ButtonCancel";
