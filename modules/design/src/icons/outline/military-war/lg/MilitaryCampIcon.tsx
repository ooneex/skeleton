import type { SVGProps } from "react";

export const MilitaryCampIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M5 20H43" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M24 12V2H33V7H24.0944H24.5944"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M35 43C27 37.9999 24 32.5589 24 20.9999C24 32.5589 21 37.9999 13 43H5V16.9999C5 14.2385 7.23858 11.9999 10 11.9999H38C40.7614 11.9999 43 14.2385 43 16.9999V43H35Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M37 27H32V32H37V27Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 27H11V32H16V27Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
