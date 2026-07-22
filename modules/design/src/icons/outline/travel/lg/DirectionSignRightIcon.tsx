import type { SVGProps } from "react";

export const DirectionSignRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M27 11L27 3L21 3L21 11" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M21 25L21 45L27 45L27 25" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M7 25L36.6471 25L43 18L36.6471 11L7 11L7 25Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M27 38H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M27 32H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
