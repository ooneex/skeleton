import type { SVGProps } from "react";

export const ShieldLockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        x="11"
        y="15"
        width="10"
        height="6"
        rx="1"
        ry="1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m13,15v-4c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m28,17c0,9-12,13-12,13,0,0-12-4-12-13V5l12-3,12,3v12Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
