import type { SVGProps } from "react";

export const WalkingSupportIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <line
        x1="12"
        y1="7"
        x2="17"
        y2="12"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <line
        x1="2"
        y1="22"
        x2="6"
        y2="18"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m6,18l2-7L16.414,2.586c.781-.781,2.047-.781,2.828,0,0,0,0,0,0,0l2.171,2.171c.781.781.781,2.047,0,2.828,0,0,0,0,0,0l-8.414,8.414-7,2Z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-cap="butt"
      />
    </svg>
  );
};
