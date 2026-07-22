import type { SVGProps } from "react";

export const BedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 23H29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M3 11H11C12.6569 11 14 12.3431 14 14V17"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M3 17H29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 6L3 26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M29 13L29 26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
