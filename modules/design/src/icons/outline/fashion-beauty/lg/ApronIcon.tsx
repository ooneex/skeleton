import type { SVGProps } from "react";

export const ApronIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M40 22H45" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8 22H3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M16.425 15H31.4677"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M40 45H8V17H13C15.2091 17 17 15.2091 17 12.9999V9.00009C17 5.1341 20.134 2 24 2C27.866 2 31 5.13401 31 9V13C31 15.2091 32.7909 17 35 17L40 17V45Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M17 27H31V31C31 34.866 27.866 38 24 38C20.134 38 17 34.866 17 31V27Z"
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
