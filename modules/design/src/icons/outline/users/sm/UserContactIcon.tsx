import type { SVGProps } from "react";

export const UserContactIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m6,2h12c1.105,0,2,.895,2,2v16c0,1.105-.895,2-2,2H6c-1.105,0-2-.895-2-2V4c0-1.105.895-2,2-2Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="8"
        r="2"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="m16.45,17c-.252-2.247-2.136-4-4.45-4s-4.198,1.753-4.45,4h8.899Z"
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
