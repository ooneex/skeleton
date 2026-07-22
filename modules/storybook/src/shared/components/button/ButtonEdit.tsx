import { PenWritingIcon } from "../../icons/outline/communication/sm/PenWritingIcon";
import { Button } from "./Button";

type ButtonEditPropsType = Omit<React.ComponentProps<typeof Button>, "variant">;

export const ButtonEdit = ({ children, ...props }: ButtonEditPropsType) => {
  return (
    <Button variant="outline" {...props}>
      <PenWritingIcon />
      {children ?? "Edit"}
    </Button>
  );
};
