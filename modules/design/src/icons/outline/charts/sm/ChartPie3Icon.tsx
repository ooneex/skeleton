import type { SVGProps } from "react";

export const ChartPie3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 23C14.9706 23 19 18.9706 19 14H10V5C5.02944 5 1 9.02944 1 14C1 18.9706 5.02944 23 10 23Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M23 10C23 5.02944 18.9706 1 14 1V10H23Z"
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
