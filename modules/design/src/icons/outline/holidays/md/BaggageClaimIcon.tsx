import type { SVGProps } from "react";

export const BaggageClaimIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 21V3.5C12 2.67157 12.6716 2 13.5 2H18.5C19.3284 2 20 2.67157 20 3.5V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M6 9C6 7.34315 7.34315 6 9 6H23C24.6569 6 26 7.34315 26 9V18C26 19.6569 24.6569 21 23 21H9C7.34315 21 6 19.6569 6 18V9Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M3 27C3 25.8954 3.89543 25 5 25H27C28.1046 25 29 25.8954 29 27V27C29 28.1046 28.1046 29 27 29H5C3.89543 29 3 28.1046 3 27V27Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
