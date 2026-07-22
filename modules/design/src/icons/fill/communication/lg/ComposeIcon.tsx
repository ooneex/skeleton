import type { SVGProps } from "react";

export const ComposeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.6213 4.49998L22.5 27.6213L20.3787 25.5L43.5 2.37866L45.6213 4.49998Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 7C8.34315 7 7 8.34315 7 10V38C7 39.6569 8.34315 41 10 41H38C39.6569 41 41 39.6569 41 38V17H44V38C44 41.3137 41.3137 44 38 44H10C6.68629 44 4 41.3137 4 38V10C4 6.68629 6.68629 4 10 4H31V7H10Z"
        fill="currentColor"
      />
    </svg>
  );
};
