import type { SVGProps } from "react";

export const FirewallIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M18 18L18 5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M30 18L30 5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M14 30L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M27 36.0531C27 34.7714 28 29.1219 28 29.1219L30.25 30.3415L35 24C35 24 43 30.3415 43 36.0531C43 41.1196 38.8996 44 35 44C31.1004 44 27 41.1196 27 36.0531Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M5.5 18L43 18L43 10C43 7.23858 40.7614 5.00001 38 5.00001L10 5C7.23858 5 5 7.23857 5 10L5 38C5 40.7614 7.23857 43 10 43L20 43L20 30L5.5 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
