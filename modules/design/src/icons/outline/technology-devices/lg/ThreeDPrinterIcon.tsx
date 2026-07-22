import type { SVGProps } from "react";

export const ThreeDPrinterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 45V33L35 28.1579V40.6579L24 45.5L13 40.6579V27.3421L24 22.5V17.6229"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M19 5L19 13L24 18L29 13L29 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M5 5H43" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M19 11.5H29" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
    </svg>
  );
};
