import type { SVGProps } from "react";

export const SquareCaretLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 22C20.6569 22 22 20.6569 22 19L22 5C22 3.34315 20.6569 2 19 2L5 2C3.34315 2 2 3.34314 2 5L2 19C2 20.6569 3.34314 22 5 22L19 22ZM14.5 7L14.5 17L7 12L14.5 7Z"
        fill="currentColor"
      />
    </svg>
  );
};
