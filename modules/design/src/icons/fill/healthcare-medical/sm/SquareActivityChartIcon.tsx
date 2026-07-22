import type { SVGProps } from "react";

export const SquareActivityChartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m7.382,11l2.618-5.236,4,8,1.382-2.764h6.618v-6c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v6h5.382Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m16.618,13l-2.618,5.236-4-8-1.382,2.764H2v6c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3v-6h-5.382Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
