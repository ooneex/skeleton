import type { SVGProps } from "react";

export const MagnetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M5 14.9999H18" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M30 14.9999H43" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M43 24V5H30V24C30 27.3137 27.3137 30 24 30C20.6863 30 18 27.3137 18 24V5H5V24C5 34.4934 13.5066 43 24 43C34.4934 43 43 34.4934 43 24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
