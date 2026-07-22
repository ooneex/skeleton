import type { SVGProps } from "react";

export const SpellCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M14.7913 29H33.2003" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M27 38L33 44L45 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10.1035 42H10L23.5 5L24.5 5L35.0811 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
