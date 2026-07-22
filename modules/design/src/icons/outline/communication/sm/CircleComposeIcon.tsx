import type { SVGProps } from "react";

export const CircleComposeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m14.581,2.349c-.825-.22-1.687-.349-2.581-.349C6.477,2,2,6.477,2,12s4.477,10,10,10,10-4.477,10-10c0-.894-.128-1.756-.349-2.581"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="22"
        y1="2"
        x2="11"
        y2="13"
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
