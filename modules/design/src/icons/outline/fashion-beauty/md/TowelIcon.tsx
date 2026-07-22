import type { SVGProps } from "react";

export const TowelIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 17H23" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M3 13H23" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M23 22H3V6C3 4.34315 4.34315 3 6 3L26 3L25.5292 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M23 22V6C23 4.34315 24.3431 3 26 3V3C27.6569 3 29 4.34315 29 6V29H6V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
