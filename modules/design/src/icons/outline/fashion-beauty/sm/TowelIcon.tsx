import type { SVGProps } from "react";

export const TowelIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 12H17" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M17 16H3V5C3 3.89543 3.89543 3 5 3L19 3L18.6725 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M17 16V5C17 3.89543 17.8954 3 19 3V3C20.1046 3 21 3.89543 21 5V21H5V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
