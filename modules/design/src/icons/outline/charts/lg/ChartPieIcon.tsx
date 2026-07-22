import type { SVGProps } from "react";

export const ChartPieIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29.284 41C26.671 42.882 23.475 44 20 44C11.2 44 4 36.8 4 28C4 20.944 8.629 14.917 15 12.805"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M39.8 41.6C42.4 37.7 44 33 44 28C44 14.7 33.3 4 20 4V28L39.8 41.6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
