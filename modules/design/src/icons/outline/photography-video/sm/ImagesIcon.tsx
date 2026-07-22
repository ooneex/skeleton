import type { SVGProps } from "react";

export const ImagesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8 22L16 11L22 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M20 6L4 6C2.89543 6 2 6.89543 2 8L2 20C2 21.1046 2.89543 22 4 22L20 22C21.1046 22 22 21.1046 22 20L22 8C22 6.89543 21.1046 6 20 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M4 2H20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
