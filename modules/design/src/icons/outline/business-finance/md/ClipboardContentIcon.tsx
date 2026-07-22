import type { SVGProps } from "react";

export const ClipboardContentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11 3L8 3C6.34315 3 5 4.34314 5 6L5 27C5 28.6569 6.34314 30 8 30L24 30C25.6569 30 27 28.6569 27 27L27 6C27 4.34315 25.6569 3 24 3L21 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M11 5V2C11 1.44772 11.4477 1 12 1H20C20.5523 1 21 1.44772 21 2V5H11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M16 12L11 12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 17L11 17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M13 22L11 22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
