import type { SVGProps } from "react";

export const ChartPieIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16.6,18.5c-1.4,2.1-3.9,3.5-6.6,3.5-4.4,0-8-3.6-8-8S5.6,6,10,6"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="m19.9,20.8c1.3-1.9,2.1-4.3,2.1-6.8,0-6.6-5.4-12-12-12v12l9.9,6.8Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
