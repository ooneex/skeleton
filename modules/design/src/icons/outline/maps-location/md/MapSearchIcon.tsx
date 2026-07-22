import type { SVGProps } from "react";

export const MapSearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M21 13.2322V8L21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M11 3V24" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M30 16.5V4.5L21 8L11 3L2 6.5V27.5L11 24L15 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M23 27C25.7614 27 28 24.7614 28 22C28 19.2386 25.7614 17 23 17C20.2386 17 18 19.2386 18 22C18 24.7614 20.2386 27 23 27Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M29.5 28.5L26.5 25.5L27 26"
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
