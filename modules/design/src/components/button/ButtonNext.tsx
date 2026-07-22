import { ArrowTriangleLineRightIcon } from "@module/design/icons/fill/arrows/sm/ArrowTriangleLineRightIcon";
import { Button } from "./Button";

type ButtonNextPropsType = Omit<React.ComponentProps<typeof Button>, "variant">;

export const ButtonNext = ({ children, ...props }: ButtonNextPropsType) => {
  return (
    <Button variant="default" {...props}>
      {children ?? "Next"}
      <ArrowTriangleLineRightIcon data-icon="inline-end" />
    </Button>
  );
};

ButtonNext.displayName = "ButtonNext";
