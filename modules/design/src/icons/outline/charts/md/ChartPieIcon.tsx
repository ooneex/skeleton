import type { SVGProps } from "react";

export const ChartPieIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m23.852,24.853c-2.168,3.111-5.772,5.147-9.852,5.147-6.627,0-12-5.373-12-12S7.373,6,14,6"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="m27.128,27.132c1.806-2.591,2.872-5.735,2.872-9.132,0-8.836-7.163-16-16-16v16l13.128,9.132Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
