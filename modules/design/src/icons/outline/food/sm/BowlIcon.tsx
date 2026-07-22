import type { SVGProps } from "react";

export const BowlIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21.8433 12C21.5 13.5 16.9706 15 12 15C7.02943 15 2.48901 13.5 2.15234 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M22 7V9.82609C22 16.0693 18.5228 20 12 20C5.47715 20 2 16.0693 2 9.82609V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M12 10C17.5228 10 22 8.65685 22 7C22 5.34315 17.5228 4 12 4C6.47715 4 2 5.34315 2 7C2 8.65685 6.47715 10 12 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
