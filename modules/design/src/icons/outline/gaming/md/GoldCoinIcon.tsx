import type { SVGProps } from "react";

export const GoldCoinIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M6.0014 6L9.5014 9.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M22.5 22.4986L26 25.9986" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M6 25.9939L9.5 22.4939" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M22.4939 9.5L25.9939 6.00002" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <ellipse
        cx="16"
        cy="16"
        rx="14"
        ry="14"
        transform="rotate(90 16 16)"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <circle
        cx="16"
        cy="16"
        r="9"
        transform="rotate(90 16 16)"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 21L11 16L16 11L21 16L16 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
