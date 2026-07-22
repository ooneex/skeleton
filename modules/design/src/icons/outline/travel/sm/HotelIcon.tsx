import type { SVGProps } from "react";

export const HotelIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 22.0026V18H14V22.0026"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M5 4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V15.5L21 16V22H3L3 16L5 15.5V4Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M15 6H14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M15 10H14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M15 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 6H9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 10H9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 14H9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
