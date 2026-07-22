import type { SVGProps } from "react";

export const Link2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m18,12v-1c0-1.657,1.343-3,3-3h7c1.657,0,3,1.343,3,3v10c0,1.657-1.343,3-3,3h-7c-1.657,0-3-1.343-3-3v-1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m14,12v-1c0-1.657-1.343-3-3-3h-7c-1.657,0-3,1.343-3,3v10c0,1.657,1.343,3,3,3h7c1.657,0,3-1.343,3-3v-1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="10"
        y1="16"
        x2="22"
        y2="16"
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
