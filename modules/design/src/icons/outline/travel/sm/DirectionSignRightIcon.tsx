import type { SVGProps } from "react";

export const DirectionSignRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10 6L10 3L14 3L14 6" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M14 13L14 21L10 21L10 13" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M4 13L18 13L21 9.5L18 6L4 6L4 13Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
