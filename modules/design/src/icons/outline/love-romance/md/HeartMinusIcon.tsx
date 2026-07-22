import type { SVGProps } from "react";

export const HeartMinusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m29.897,10.729c-.411-2.68-2.128-5.077-4.74-6.158-3.376-1.398-7.149-.145-9.157,2.806-2.007-2.952-5.781-4.204-9.157-2.806C2.894,6.206.973,10.842,2.553,14.927c2.077,5.371,7.395,9.598,8.975,10.766l4.466,3.307.871-.644"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle
        cx="24"
        cy="20"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <line
        x1="21"
        y1="20"
        x2="27"
        y2="20"
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
