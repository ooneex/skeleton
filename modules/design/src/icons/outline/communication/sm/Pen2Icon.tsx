import type { SVGProps } from "react";

export const Pen2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <line
        data-cap="butt"
        data-color="color-2"
        x1="14"
        y1="5"
        x2="19"
        y2="10"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M9,20l-7,2,2-7L16.414,2.586c.781-.781,2.047-.781,2.828,0l2.172,2.172c.781,.781,.781,2.047,0,2.828l-12.414,12.414Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
