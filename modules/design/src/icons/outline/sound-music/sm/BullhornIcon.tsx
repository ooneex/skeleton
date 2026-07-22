import type { SVGProps } from "react";

export const BullhornIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m11,14v6c0,1.105-.895,2-2,2h0c-1.105,0-2-.895-2-2v-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <line
        x1="7"
        y1="14"
        x2="7"
        y2="4"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="m22,10.723c.595-.346,1-.984,1-1.723s-.405-1.376-1-1.723v3.445Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m18,1c0,1.657-1.343,3-3,3H6c-2.761,0-5,2.239-5,5h0c0,2.761,2.239,5,5,5h9c1.657,0,3,1.343,3,3V1Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
