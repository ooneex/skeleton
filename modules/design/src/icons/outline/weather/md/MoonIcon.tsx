import type { SVGProps } from "react";

export const MoonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6 15.4041C6 22.3606 11.7312 28 18.801 28C23.6192 28 27.8157 25.3806 30 21.5101C29.2732 21.6362 28.5253 21.702 27.7617 21.702C20.6919 21.702 14.9607 16.0626 14.9607 9.10608C14.9607 6.89058 15.542 4.80869 16.5627 3C10.5601 4.04161 6 9.19883 6 15.4041Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        strokeLinejoin="bevel"
        fill="none"
      />
    </svg>
  );
};
