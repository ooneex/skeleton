import { ArrowRightIcon } from "../../icons/outline/arrows/sm/ArrowRightIcon";
import { Button } from "./Button";

type ButtonNextPropsType = Omit<React.ComponentProps<typeof Button>, "variant">;

export const ButtonNext = ({ children, ...props }: ButtonNextPropsType) => {
  return (
    <Button variant="default" {...props}>
      {children ?? "Next"}
      <ArrowRightIcon data-icon="inline-end" />
    </Button>
  );
};
