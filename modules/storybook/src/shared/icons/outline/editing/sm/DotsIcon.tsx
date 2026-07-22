import type { SVGProps } from "react";

export const DotsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle
        cx="12"
        cy="12"
        r=".75"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <circle
        cx="20.25"
        cy="12"
        r=".75"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        fill="currentColor"
      />
      <circle
        cx="3.75"
        cy="12"
        r=".75"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        fill="currentColor"
      />
    </svg>
  );
};
