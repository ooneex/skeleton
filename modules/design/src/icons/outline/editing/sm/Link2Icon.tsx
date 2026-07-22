import type { SVGProps } from "react";

export const Link2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <line
        x1="7"
        y1="12"
        x2="17"
        y2="12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m10,16c0,1.105-.895,2-2,2H3c-1.105,0-2-.895-2-2v-8c0-1.105.895-2,2-2h5c1.105,0,2,.895,2,2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m14,16c0,1.105.895,2,2,2h5c1.105,0,2-.895,2-2v-8c0-1.105-.895-2-2-2h-5c-1.105,0-2,.895-2,2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
