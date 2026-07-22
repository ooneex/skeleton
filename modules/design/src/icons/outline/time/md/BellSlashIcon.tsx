import type { SVGProps } from "react";

export const BellSlashIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m13.171,28c.412,1.165,1.523,2,2.829,2s2.417-.835,2.829-2"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="m13,25h16c-2.209,0-4-1.791-4-4v-8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m24.354,7.646c-1.33-3.31-4.569-5.646-8.354-5.646h0c-4.971,0-9,4.029-9,9v10c0,2.209-1.791,4-4,4h4"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-cap="butt"
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
