import type { SVGProps } from "react";

export const CloudSlashIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m10.657,19h8.343c2.209,0,4-1.791,4-4s-1.791-4-4-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m17.276,6.724c-1.373-1.664-3.449-2.724-5.776-2.724-4.019,0-7.29,3.164-7.482,7.136-1.732.44-3.018,1.996-3.018,3.864,0,2.209,1.791,4,4,4"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-cap="butt"
      />
      <line
        x1="22"
        y1="2"
        x2="2"
        y2="22"
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
