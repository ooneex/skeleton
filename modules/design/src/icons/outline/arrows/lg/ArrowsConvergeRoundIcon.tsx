import type { SVGProps } from "react";

export const ArrowsConvergeRoundIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19.5 14L15.5 14C8.04416 14 2 20.0442 2 27.5V27.5C2 34.9558 8.04416 41 15.5 41L32.5 41C39.9558 41 46 34.9558 46 27.5V27.5C46 20.0442 39.9558 14 32.5 14L28.5 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M36.5 6L28.5 14L36.5 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11.5 6L19.5 14L11.5 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
