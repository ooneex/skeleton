import type { SVGProps } from "react";

export const BarberPoleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 2V5V4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M24 46V43V44" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M16 22.9999L26 13"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M22 35L32 25" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M16 32L32 16" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M16 13V35" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M32 13V35" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M15.0549 13C15.5524 8.50005 19.3674 5 24 5C28.6326 5 32.4476 8.50005 32.9451 13"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M15.0549 35C15.5524 39.5 19.3674 43 24 43C28.6326 43 32.4476 39.5 32.9451 35"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M13 13H35" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M13 35H35" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
