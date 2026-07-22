import type { SVGProps } from "react";

export const EditTriangleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M40 35L26 12" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M8 35L22 12" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M10 39H38" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M28 4H20V12H28V4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M46 35H38V43H46V35Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 35H2V43H10V35Z"
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
