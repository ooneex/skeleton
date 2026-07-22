import type { SVGProps } from "react";

export const CircleChartLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16.618,13l-2.618,5.236-4-8-1.382,2.764H1.051c.508,5.598,5.221,10,10.949,10s10.442-4.402,10.949-10h-6.331Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m7.382,11l2.618-5.236,4,8,1.382-2.764h7.568c-.508-5.598-5.221-10-10.949-10S1.558,5.402,1.051,11h6.331Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
