import type { SVGProps } from "react";

export const BackpackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 5V4C9 2.34315 10.3431 1 12 1V1C13.6569 1 15 2.34315 15 4V5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7 21C5.89543 21 5 20.1046 5 19L5 10C5 7.23858 7.23858 5 10 5L14 5C16.7614 5 19 7.23858 19 10L19 19C19 20.1046 18.1046 21 17 21L7 21Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9 17L9 14C9 12.8954 9.89543 12 11 12L13 12C14.1046 12 15 12.8954 15 14L15 17L9 17Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
