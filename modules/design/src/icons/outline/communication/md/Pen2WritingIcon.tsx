import type { SVGProps } from "react";

export const Pen2WritingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <line
        x1="3"
        y1="29"
        x2="29"
        y2="29"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m11.464,22.536l-7,2,2-7,13.5-13.5c1.381-1.381,3.619-1.381,5,0h0c1.381,1.381,1.381,3.619,0,5l-13.5,13.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="18"
        y1="6"
        x2="23"
        y2="11"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-cap="butt"
      />
    </svg>
  );
};
