import { TrashIcon } from "@module/design/icons/outline/ui-layout/sm/TrashIcon";
import { Button } from "./Button";

type ButtonDeletePropsType = Omit<React.ComponentProps<typeof Button>, "variant">;

export const ButtonDelete = ({ children, ...props }: ButtonDeletePropsType) => {
  return (
    <Button variant="destructive" {...props}>
      <TrashIcon />
      {children ?? "Delete"}
    </Button>
  );
};

ButtonDelete.displayName = "ButtonDelete";
