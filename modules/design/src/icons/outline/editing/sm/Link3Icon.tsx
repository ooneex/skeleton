import type { SVGProps } from "react";

export const Link3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m4,15h0c-1.105,0-2-.895-2-2v-7c0-1.105.895-2,2-2h10c1.105,0,2,.895,2,2v7c0,1.105-.895,2-2,2h-2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m20,9h0c1.105,0,2,.895,2,2v7c0,1.105-.895,2-2,2h-10c-1.105,0-2-.895-2-2v-7c0-1.105.895-2,2-2h2"
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
