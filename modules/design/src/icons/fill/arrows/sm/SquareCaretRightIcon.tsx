import type { SVGProps } from "react";

export const SquareCaretRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2C3.34315 2 2 3.34315 2 5L2 19C2 20.6569 3.34315 22 5 22L19 22C20.6569 22 22 20.6569 22 19L22 5C22 3.34315 20.6569 2 19 2L5 2ZM9.5 17L9.5 7L17 12L9.5 17Z"
        fill="currentColor"
      />
    </svg>
  );
};
