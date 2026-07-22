import type { SVGProps } from "react";

export const ArrowsConvergeRoundIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13 9L10.5 9C5.2533 9 1 13.2533 1 18.5V18.5C0.999999 23.7467 5.25329 28 10.5 28L21.5 28C26.7467 28 31 23.7467 31 18.5V18.5C31 13.2533 26.7467 9 21.5 9L19 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M24 4L19 9L24 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M8 4L13 9L8 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
