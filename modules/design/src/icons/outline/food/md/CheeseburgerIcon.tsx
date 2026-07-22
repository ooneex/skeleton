import type { SVGProps } from "react";

export const CheeseburgerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29 15.2657V13.5C29 7.701 24.4731 3 18.8889 3H13.1111C7.52689 3 3 7.701 3 13.5V15.2657"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M13 23H3V26C3 27.6569 4.34315 29 6 29H26C27.6569 29 29 27.6569 29 26V23H25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M22 8.00198L22.0099 8.01207" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 8.00198L10.0099 8.01207" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16 11.002L16.0099 11.0121" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M28 15L4 15C2.89543 15 2 15.8954 2 17C2 18.1046 2.89543 19 4 19L15 19L19 24L23 19L28 19C29.1046 19 30 18.1046 30 17C30 15.8954 29.1046 15 28 15Z"
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
