import type { SVGProps } from "react";

export const SquareActivityChartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m8.42,15l4.708-8.24,6,14,3.292-5.76h7.58V6c0-2.206-1.794-4-4-4H6c-2.206,0-4,1.794-4,4v9h6.42Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m23.58,17l-4.708,8.24-6-14-3.292,5.76H2v9c0,2.206,1.794,4,4,4h20c2.206,0,4-1.794,4-4v-9h-6.42Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
