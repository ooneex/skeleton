import type { SVGProps } from "react";

export const PalletPackageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17.5 4V7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M17.5 15V18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M30.5 4V7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M30.5 15V18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M24 4V26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M37 15L11 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M2 34H46" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M42.9933 22L46 33.2941V43H38V39H28V43H20V39H10V43H2V33.2941L5.00671 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <rect
        x="11"
        y="4"
        width="26"
        height="22"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
