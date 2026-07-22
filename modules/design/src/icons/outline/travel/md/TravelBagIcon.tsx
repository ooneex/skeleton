import type { SVGProps } from "react";

export const TravelBagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 8V28" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M23 8V28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 8V5.5C12 4.67157 12.6716 4 13.5 4H18.5C19.3284 4 20 4.67157 20 5.5V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M3 11C3 9.34315 4.34315 8 6 8H26C27.6569 8 29 9.34315 29 11V25C29 26.6569 27.6569 28 26 28H6C4.34315 28 3 26.6569 3 25V11Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M8 14H10" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M22 14H24" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
