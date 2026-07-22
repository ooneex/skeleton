import type { SVGProps } from "react";

export const RouletteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18.9765 13.0204L13.0133 18.9836"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M19 18.9836L13.017 13.0006"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M6.0014 6L9.50139 9.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M22.5 22.4986L26 25.9986" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M6 25.9939L9.5 22.4939" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M22.4939 9.5L25.9939 6.00002" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M16.0005 2L16.0005 7" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M16.0005 25L16.0005 30" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M2 15.9955L7 15.9955" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M25 15.9955L30 15.9955" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
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
    </svg>
  );
};
