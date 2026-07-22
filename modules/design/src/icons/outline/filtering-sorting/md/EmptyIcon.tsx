import type { SVGProps } from "react";

export const EmptyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m6.808,25.192c-2.353-2.353-3.808-5.603-3.808-9.192,0-7.18,5.82-13,13-13,3.59,0,6.84,1.455,9.192,3.808"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-cap="butt"
      />
      <path
        d="m27.577,10.08c.91,1.776,1.423,3.788,1.423,5.92,0,7.18-5.82,13-13,13-2.132,0-4.144-.513-5.92-1.423"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="2"
        y1="30"
        x2="30"
        y2="2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
    </svg>
  );
};
