import type { SVGProps } from "react";

export const WinterHatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle
        cx="12"
        cy="3"
        r="2"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M8 16V21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16 16V21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M2 20V17C2 16.4477 2.44772 16 3 16H21C21.5523 16 22 16.4477 22 17V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M4 16V13C4 8.58172 7.58172 5 12 5V5C16.4183 5 20 8.58172 20 13V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
