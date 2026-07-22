import type { SVGProps } from "react";

export const ElectricBatteryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M6 9H26" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M6 26H26" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M26 27L26 8C26 6.34315 24.6569 5 23 5L9 5C7.34315 5 6 6.34314 6 8L6 27C6 28.6569 7.34315 30 9 30L23 30C24.6569 30 26 28.6569 26 27Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M9 1H12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M20 1H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15.8438 13L13.5 17.5H16H18.5L16.1562 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
