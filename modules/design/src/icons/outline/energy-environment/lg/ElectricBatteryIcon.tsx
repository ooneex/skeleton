import type { SVGProps } from "react";

export const ElectricBatteryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 14H39" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M9 38H39" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M39 40L39 12C39 9.23858 36.7614 7 34 7L14 7C11.2386 7 9 9.23857 9 12L9 40C9 42.7614 11.2386 45 14 45L34 45C36.7614 45 39 42.7614 39 40Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M30 2H34" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M14 2H18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M24.75 19L21 26H24H27L23.25 33"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
