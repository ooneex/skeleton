import type { SVGProps } from "react";

export const ChessBishopIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 12V13.6554C14 16.4626 13.0158 19.181 11.2187 21.3376L9 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M11 12H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M23 24L20.7813 21.3376C18.9842 19.181 18 16.4626 18 13.6554V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 12C13.7909 12 12 10.7353 12 8.25C12 5.76472 13.7909 3 16 3C18.2091 3 20 5.76472 20 8.25C20 10.7353 18.2091 12 16 12Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 3C15.1716 3 14.5 2.32843 14.5 1.5C14.5 0.671573 15.1716 -2.7463e-07 16 -2.38419e-07C16.8284 -2.02207e-07 17.5 0.671573 17.5 1.5C17.5 2.32843 16.8284 3 16 3Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M24 24H8C6.34315 24 5 25.3431 5 27V29H27V27C27 25.3431 25.6569 24 24 24Z"
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
