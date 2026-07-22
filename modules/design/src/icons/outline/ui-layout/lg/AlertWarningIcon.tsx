import type { SVGProps } from "react";

export const AlertWarningIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 33V5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 43C24.8284 43 25.5 42.3284 25.5 41.5C25.5 40.6716 24.8284 40 24 40C23.1716 40 22.5 40.6716 22.5 41.5C22.5 42.3284 23.1716 43 24 43Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
      />
    </svg>
  );
};
