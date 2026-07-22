import type { SVGProps } from "react";

export const TagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m20.364,29.121l8.757-8.757c1.172-1.171,1.172-3.071,0-4.243h0S15,2,15,2H2v13l14.121,14.121c1.171,1.172,3.071,1.172,4.243,0h0Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle
        cx="10.5"
        cy="10.5"
        r="2.5"
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
