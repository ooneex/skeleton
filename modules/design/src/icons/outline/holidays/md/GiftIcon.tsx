import type { SVGProps } from "react";

export const GiftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m13,29h-6c-1.657,0-3-1.343-3-3v-9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m28,17v9c0,1.657-1.343,3-3,3h-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <rect
        x="2"
        y="8"
        width="28"
        height="5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m7,5c0-1.657,1.343-3,3-3,4.438,0,6,6,6,6h-6c-1.657,0-3-1.343-3-3Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m25,5c0-1.657-1.343-3-3-3-4.438,0-6,6-6,6h6c1.657,0,3-1.343,3-3Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <polyline
        points="19 8 19 29 13 29 13 8"
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
