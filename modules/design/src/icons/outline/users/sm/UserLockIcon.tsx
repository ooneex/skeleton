import type { SVGProps } from "react";

export const UserLockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle
        cx="11"
        cy="6"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <rect
        x="14"
        y="17"
        width="9"
        height="5"
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
        d="m12.167,13.095c-.382-.056-.77-.095-1.167-.095-4.418,0-8,3.582-8,8,2.366.591,4.732.905,7.098.972"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m16,17v-2.5c0-1.381,1.119-2.5,2.5-2.5h0c1.381,0,2.5,1.119,2.5,2.5v2.5"
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
