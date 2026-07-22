import type { SVGProps } from "react";

export const ChargingStationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M31 13L29 13V17H31" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M24 16V20.5C24 22.433 25.567 24 27.5 24V24C29.433 24 31 22.433 31 20.5V9.33332L28.3333 6.66666"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 29L24 6C24 4.34315 22.6569 3 21 3L8 3C6.34314 3 5 4.34315 5 6L5 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M3 29H26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M15.25 9.5L11.5 16H14.5H17.5L13.75 22.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
