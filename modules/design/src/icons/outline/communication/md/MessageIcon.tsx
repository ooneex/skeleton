import type { SVGProps } from "react";

export const MessageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m5,4h22c1.657,0,3,1.343,3,3v14c0,1.657-1.343,3-3,3h-9l-9,6v-6h-4c-1.657,0-3-1.343-3-3V7c0-1.657,1.343-3,3-3Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
