import type { SVGProps } from "react";

export const CoffeeCupIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M39 12L45 12L45 17C45 19.7614 42.7614 22 40 22H38.8894"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M35 43.0166L11 43.0168C8.79088 43.0168 7 41.226 7 39.0168L7 38.0084L39 38.0084L39 39.0166C39 41.2258 37.2092 43.0166 35 43.0166Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7 12V20C7 28.8366 14.1634 36 23 36C31.8366 36 39 28.8366 39 20V12H7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path d="M24 7V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M31 7V5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M17 7V5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
    </svg>
  );
};
