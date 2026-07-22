import type { SVGProps } from "react";

export const ChartPiePercentageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 30C23.732 30 30 23.732 30 16H16V2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M28.5 3.5L21.5 10.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 4C24 2.89543 23.1046 2 22 2C20.8954 2 20 2.89543 20 4C20 5.10457 20.8954 6 22 6C23.1046 6 24 5.10457 24 4Z"
        fill="currentColor"
        data-color="color-2"
        data-stroke="none"
        data-cap="butt"
      />
      <path
        d="M30 10C30 8.89543 29.1046 8 28 8C26.8954 8 26 8.89543 26 10C26 11.1046 26.8954 12 28 12C29.1046 12 30 11.1046 30 10Z"
        fill="currentColor"
        data-color="color-2"
        data-stroke="none"
        data-cap="butt"
      />
    </svg>
  );
};
