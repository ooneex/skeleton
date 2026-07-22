import type { SVGProps } from "react";

export const ThreeArrowsRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7 24H43H42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M7 10H23.5H22.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 38H28.5H27.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M36.5 30.5L43 24L36.5 17.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 16.5L23.5 10L17 3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M22 44.5L28.5 38L22 31.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
