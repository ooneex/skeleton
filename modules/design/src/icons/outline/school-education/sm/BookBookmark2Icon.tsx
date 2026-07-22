import type { SVGProps } from "react";

export const BookBookmark2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 2V10L12 8L15 10V2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M18 18V22" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M4 20L4 4C4 2.89543 4.89543 2 6 2L20 2L20 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M20 22H6C4.89543 22 4 21.1046 4 20V20C4 18.8954 4.89543 18 6 18H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
