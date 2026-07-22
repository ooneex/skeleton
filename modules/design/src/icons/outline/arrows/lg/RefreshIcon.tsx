import type { SVGProps } from "react";

export const RefreshIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M44 24C44 12.9543 35.0457 4 24 4C15.7987 4 8.7504 8.93638 5.66417 16L5.81703 15.6589"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M5 4V16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M4 24C4 35.0457 12.9543 44 24 44C32.2013 44 39.2496 39.0636 42.3358 32L42.183 32.3411"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M43 44V32H31"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
