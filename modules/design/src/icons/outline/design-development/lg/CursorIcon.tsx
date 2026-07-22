import type { SVGProps } from "react";

export const CursorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8.00012 7.99991L33 14L26.2463 20.5894L40.6571 35.0002L35.0002 40.657L20.5895 26.2462L13.9999 32.9999L8.00012 7.99991Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
