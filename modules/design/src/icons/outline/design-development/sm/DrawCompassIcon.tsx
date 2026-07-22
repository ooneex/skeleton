import type { SVGProps } from "react";

export const DrawCompassIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 14V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M12 3V1" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 8.5L3 22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M14 8.5L21 22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 16H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
