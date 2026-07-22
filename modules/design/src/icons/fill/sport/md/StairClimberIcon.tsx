import type { SVGProps } from "react";

export const StairClimberIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10 21H2V30H12.2949L30 18.5439V9H19V15H10V21Z" fill="currentColor" />
      <path d="M30 28V30H2V28H30Z" fill="currentColor" />
      <path d="M4 12.543V18H2V11.457L16.5791 2H20.2588L4 12.543Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
