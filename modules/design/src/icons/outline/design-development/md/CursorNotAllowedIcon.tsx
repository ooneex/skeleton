import type { SVGProps } from "react";

export const CursorNotAllowedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16.3102 16.3102L27.7145 27.7145"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M17.5 7.5L3.5 3.5L7.5 17.5L11 11L17.5 7.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M22 30C26.4183 30 30 26.4183 30 22C30 17.5817 26.4183 14 22 14C17.5817 14 14 17.5817 14 22C14 26.4183 17.5817 30 22 30Z"
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
