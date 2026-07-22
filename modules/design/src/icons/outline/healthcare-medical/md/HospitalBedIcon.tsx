import type { SVGProps } from "react";

export const HospitalBedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 25H29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M3 13H11C12.6569 13 14 14.3431 14 16V19"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M3 19H29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 8L3 28" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M29 15L29 28" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M20 5V1H24V5H28V9H24V13H20V9H16V5H20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
