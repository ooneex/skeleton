import type { SVGProps } from "react";

export const PowerDrillIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 28V26H12V28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M19 4V14" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M15 14L14 22L20.3686 23.1941C21.3145 23.3715 22 24.1974 22 25.1599V28H5V25.1623C5 23.871 5.82629 22.7246 7.05132 22.3162L8 22L9.52381 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M7 14H20.1214L24 13V5L20.1214 4H7C5.34315 4 4 5.34315 4 7V11C4 12.6569 5.34314 14 7 14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M9 9H11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M24 6.5L28 7.5V10.5L24 11.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M28 9L30 9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
