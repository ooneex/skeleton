import type { SVGProps } from "react";

export const MapPenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M21 17L21 8V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M11 3V24" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M30 12.2612V4.5L21 8L11 3L2 6.5V27.5L11 24L14.279 25.6395"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M21.9298 28.6662L30.2022 20.3939C31.1952 19.4009 31.1952 17.7909 30.2022 16.7979C29.2092 15.8049 27.5992 15.8049 26.6063 16.7979L18.3338 25.0702L18 28.9999L21.9298 28.6662Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
