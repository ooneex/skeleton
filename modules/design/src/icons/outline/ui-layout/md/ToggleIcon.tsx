import type { SVGProps } from "react";

export const ToggleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m10,7h12c4.971,0,9,4.029,9,9h0c0,4.971-4.029,9-9,9h-12c-4.971,0-9-4.029-9-9h0c0-4.971,4.029-9,9-9Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle
        cx="10"
        cy="16"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
    </svg>
  );
};
