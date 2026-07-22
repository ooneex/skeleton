import { FloppyDiskIcon } from "@module/design/icons/outline/files-folders/sm/FloppyDiskIcon";
import { Button } from "./Button";

type ButtonSavePropsType = Omit<React.ComponentProps<typeof Button>, "variant">;

export const ButtonSave = ({ children, ...props }: ButtonSavePropsType) => {
  return (
    <Button variant="default" {...props}>
      <FloppyDiskIcon />
      {children ?? "Save"}
    </Button>
  );
};

ButtonSave.displayName = "ButtonSave";
