import type { SVGProps } from "react";

export const PercentSignIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8 40L24 24L40 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M13 20C16.866 20 20 16.866 20 13C20 9.13401 16.866 6 13 6C9.13401 6 6 9.13401 6 13C6 16.866 9.13401 20 13 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M35 42C38.866 42 42 38.866 42 35C42 31.134 38.866 28 35 28C31.134 28 28 31.134 28 35C28 38.866 31.134 42 35 42Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
