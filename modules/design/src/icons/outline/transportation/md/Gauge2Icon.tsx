import type { SVGProps } from "react";

export const Gauge2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <line
        x1="13.879"
        y1="13.879"
        x2="6.101"
        y2="6.101"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <circle
        cx="16"
        cy="16"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m3.223,10.295c-.78,1.744-1.223,3.671-1.223,5.705,0,7.732,6.268,14,14,14s14-6.268,14-14S23.732,2,16,2c-2.034,0-3.961.443-5.705,1.223"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
