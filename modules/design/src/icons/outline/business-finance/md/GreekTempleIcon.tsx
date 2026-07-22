import type { SVGProps } from "react";

export const GreekTempleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M26.5 12L26.5 24" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5.5 12L5.5 24" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M12.5 12L12.5 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M19.5 12L19.5 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 1.5L2 7.62121V12H30V7.62121L16 1.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M30 29H2V27C2 25.3431 3.34315 24 5 24H27C28.6569 24 30 25.3431 30 27V29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <circle cx="16" cy="7" r="2" fill="currentColor" data-stroke="none" data-cap="butt" />
    </svg>
  );
};
