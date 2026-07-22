import type { SVGProps } from "react";

export const JeansIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 17H14.8333C15.2661 17 15.6871 17.1404 16.0333 17.4L17.5 18.5L18.9667 17.4C19.3129 17.1404 19.7339 17 20.1667 17H23"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M14 8V3" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M21 8V3" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M8 8H27" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M8 3V12L4 16L6.03203 26.5665C6.30367 27.9791 7.53964 29 8.97805 29H24C25.6569 29 27 27.6569 27 26V3H8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M23 20.5263L17.5 24L12 20.5263V13H23V20.5263Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
