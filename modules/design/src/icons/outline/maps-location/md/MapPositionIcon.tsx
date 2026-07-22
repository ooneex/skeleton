import type { SVGProps } from "react";

export const MapPositionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M21 13V8V9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M11 3V24" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M30 13V4.5L21 8L11 3L2 6.5V27.5L11 24L17.5 27.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M25 26C27.7614 26 30 23.7614 30 21C30 18.2386 27.7614 16 25 16C22.2386 16 20 18.2386 20 21C20 23.7614 22.2386 26 25 26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M25 30V26V26.7071"
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
