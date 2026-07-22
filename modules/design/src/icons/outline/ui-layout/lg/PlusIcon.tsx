import type { SVGProps } from "react";

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <line
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeMiterlimit="10"
        x1="24"
        y1="4"
        x2="24"
        y2="44"
        strokeLinejoin="miter"
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeMiterlimit="10"
        x1="44"
        y1="24"
        x2="4"
        y2="24"
        strokeLinejoin="miter"
      />
    </svg>
  );
};
