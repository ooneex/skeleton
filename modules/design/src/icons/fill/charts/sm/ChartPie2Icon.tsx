import type { SVGProps } from "react";

export const ChartPie2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m14,4h-1v7c0,1.104-.896,2-2,2h-7v1c0,5.514,4.486,10,10,10s10-4.486,10-10-4.486-10-10-10Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path d="m10,0C4.486,0,0,4.486,0,10v1h11V0h-1Z" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
