import type { SVGProps } from "react";

export const Message2ContentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <line
        x1="8"
        y1="11"
        x2="24"
        y2="11"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <line
        x1="8"
        y1="17"
        x2="17"
        y2="17"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m5,4h22c1.657,0,3,1.343,3,3v14c0,1.657-1.343,3-3,3h-6l-5,6-5-6h-6c-1.657,0-3-1.343-3-3V7c0-1.657,1.343-3,3-3Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
