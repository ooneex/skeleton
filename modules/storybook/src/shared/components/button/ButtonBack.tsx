import { ArrowLeftIcon } from "../../icons/outline/arrows/sm/ArrowLeftIcon";
import { Button } from "./Button";

type ButtonBackPropsType = Omit<React.ComponentProps<typeof Button>, "variant">;

export const ButtonBack = ({ children, ...props }: ButtonBackPropsType) => {
  return (
    <Button variant="outline" {...props}>
      <ArrowLeftIcon />
      {children ?? "Back"}
    </Button>
  );
};
