import type { SVGProps } from "react";

export const MokaPotIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 17H22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" data-cap="butt" fill="none" />
      <path
        d="M24 5H29L29 9C29 11.2091 27.2092 13 25 13H22.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M14 1H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 17L25 27V30H8V27L11 17L9 9L6 6V5H25L22 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14 22H14.0133"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
