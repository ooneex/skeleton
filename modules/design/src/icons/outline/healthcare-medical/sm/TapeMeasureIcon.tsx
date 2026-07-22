import type { SVGProps } from "react";

export const TapeMeasureIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18 19V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M13 19V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8 19V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M13 6V9" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M7.5 9H23V19H6C3.79086 19 2 17.2091 2 15V6"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M7.5 9C10.5376 9 13 7.65685 13 6C13 4.34315 10.5376 3 7.5 3C4.46243 3 2 4.34315 2 6C2 7.65685 4.46243 9 7.5 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
