import type { SVGProps } from "react";

export const ToggleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle
        cx="8"
        cy="12"
        r="3"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m8,5h8c3.866,0,7,3.134,7,7h0c0,3.866-3.134,7-7,7h-8c-3.866,0-7-3.134-7-7h0c0-3.866,3.134-7,7-7Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
