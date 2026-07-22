import type { SVGProps } from "react";

export const MoonStars2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 15.4041C4 22.3606 9.7312 28 16.801 28C21.6192 28 25.8157 25.3806 28 21.5101C27.2732 21.6362 26.5253 21.702 25.7617 21.702C18.6919 21.702 12.9607 16.0626 12.9607 9.10608C12.9607 6.89058 13.542 4.80869 14.5627 3C8.56008 4.04161 4 9.19883 4 15.4041Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        strokeLinejoin="bevel"
        fill="none"
      />
      <path
        d="M25.8 7.2L24 3L22.2 7.2L18 9L22.2 10.8L24 15L25.8 10.8L30 9L25.8 7.2Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
