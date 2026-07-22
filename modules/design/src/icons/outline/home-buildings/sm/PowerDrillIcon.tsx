import type { SVGProps } from "react";

export const PowerDrillIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15 3V11" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M12 11L11.1905 17.6111L14.3635 18.1975C15.3118 18.3728 16 19.1999 16 20.1642L16 21H4V19.8241C4 19.0213 4.47993 18.2964 5.2189 17.9829L6.09524 17.6111L7.14286 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path d="M19 7H22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M5 11H16.2576L19 9.5V4.5L16.2576 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M7 7H8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
    </svg>
  );
};
