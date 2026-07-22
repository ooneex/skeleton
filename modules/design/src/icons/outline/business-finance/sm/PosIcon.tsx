import type { SVGProps } from "react";

export const PosIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6 22C4.89543 22 4 21.1046 4 20V14L3 12V4C3 2.89543 3.89543 2 5 2H17C18.1046 2 19 2.89543 19 4V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M15 10H7V6H15V10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 18H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 22L22 15C22 14.4477 21.5523 14 21 14L11 14C10.4477 14 10 14.4477 10 15L10 22C10 22.5523 10.4477 23 11 23L21 23C21.5523 23 22 22.5523 22 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
