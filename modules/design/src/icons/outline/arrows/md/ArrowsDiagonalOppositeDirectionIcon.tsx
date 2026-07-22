import type { SVGProps } from "react";

export const ArrowsDiagonalOppositeDirectionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 20L20 3L19.7774 3.22264" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M29 12L12 29L12.2226 28.7774"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M11 2.99997L20 2.99998L20 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M21 29L12 29L12 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
