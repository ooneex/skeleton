import type { SVGProps } from "react";

export const VanityMirrorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 30V24" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M6 18L21 3" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M20 14L26 8L25.3333 8.66667" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M16 24C22.0751 24 27 19.0751 27 13C27 6.92487 22.0751 2 16 2C9.92487 2 5 6.92487 5 13C5 19.0751 9.92487 24 16 24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 30L22 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
