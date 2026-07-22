import type { SVGProps } from "react";

export const PenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m10.5,27.5l-8,2,2-8L22.257,3.743c1.657-1.657,4.343-1.657,6,0h0c1.657,1.657,1.657,4.343,0,6L10.5,27.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
