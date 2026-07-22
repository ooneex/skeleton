import type { SVGProps } from "react";

export const Compose2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m10,4h-5c-1.105,0-2,.895-2,2v13c0,1.105.895,2,2,2h13c1.105,0,2-.895,2-2v-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="16.25"
        y1="4.75"
        x2="19.25"
        y2="7.75"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="m12,15l-4,1,1-4L18,3c.828-.828,2.172-.828,3,0h0c.828.828.828,2.172,0,3l-9,9Z"
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
