import type { SVGProps } from "react";

export const ToiletIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6 12L6 4C6 2.89543 6.89543 2 8 2L16 2C17.1046 2 18 2.89543 18 4L18 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9 22V19L8.50248 18.9502C5.94647 18.6946 4 16.5438 4 13.9751V13C4 12.4477 4.44772 12 5 12L19 12C19.5523 12 20 12.4477 20 13V13.9751C20 16.5438 18.0535 18.6946 15.4975 18.9502L15 19V22H9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14.01 6L14 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
