import type { SVGProps } from "react";

export const ChairIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 17V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8 17V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M4 17H20" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M6 9L6 5C6 3.89543 6.89543 3 8 3L16 3C17.1046 3 18 3.89543 18 5L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M4 21L4 15C4 13.8954 4.89543 13 6 13L18 13C19.1046 13 20 13.8954 20 15L20 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
