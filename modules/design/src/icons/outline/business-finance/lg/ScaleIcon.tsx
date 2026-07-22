import type { SVGProps } from "react";

export const ScaleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 20H18" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M30 20H45" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M24 40V8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M37.4243 5.17898L37.47 5.08789L30 19.5C30.12 24 33 27 37.5 27C42 27 45 24 45 19.5L37.47 5H27M10.5796 5.13596L10.5352 5.04688L18 19.5C17.88 24 15 27 10.5 27C6 27 3 24 3 19.5L10.5 5H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 8C25.6569 8 27 6.65685 27 5C27 3.34315 25.6569 2 24 2C22.3431 2 21 3.34315 21 5C21 6.65685 22.3431 8 24 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M11 45V44C11 41.7909 12.7909 40 15 40H33C35.2091 40 37 41.7909 37 44V45H11Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
