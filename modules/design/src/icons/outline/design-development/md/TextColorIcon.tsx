import type { SVGProps } from "react";

export const TextColorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M27 21H5C3.89543 21 3 21.8954 3 23V27C3 28.1046 3.89543 29 5 29H27C28.1046 29 29 28.1046 29 27V23C29 21.8954 28.1046 21 27 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M11.5 13H20.5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M10.1133 17H10L15.5 3H16H16.5L22 17H21.8801"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
