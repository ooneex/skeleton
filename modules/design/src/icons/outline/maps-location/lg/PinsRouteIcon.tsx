import type { SVGProps } from "react";

export const PinsRouteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11 29L11 38C11 40.7614 13.2386 43 16 43H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11 24C16.238 20.4332 20 16.3732 20 11.6154C20 6.85754 15.9703 3 11 3C6.02975 3 2 6.85754 2 11.6154C2 16.3732 5.762 20.4332 11 24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M34 45C40.984 40.2443 46 34.831 46 28.4872C46 22.1434 40.627 17 34 17C27.373 17 22 22.1434 22 28.4872C22 34.831 27.016 40.2443 34 45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <circle
        cx="11"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <circle cx="34" cy="29" r="4" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
    </svg>
  );
};
