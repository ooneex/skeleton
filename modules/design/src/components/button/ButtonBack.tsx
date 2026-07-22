import { ArrowTriangleLineLeftIcon } from "@module/design/icons/fill/arrows/sm/ArrowTriangleLineLeftIcon";
import { Button } from "./Button";

type ButtonBackPropsType = Omit<React.ComponentProps<typeof Button>, "variant">;

export const ButtonBack = ({ children, ...props }: ButtonBackPropsType) => {
  return (
    <Button variant="outline" {...props}>
      <ArrowTriangleLineLeftIcon />
      {children ?? "Back"}
    </Button>
  );
};

ButtonBack.displayName = "ButtonBack";
