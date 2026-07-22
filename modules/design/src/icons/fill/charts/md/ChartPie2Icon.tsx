import type { SVGProps } from "react";

export const ChartPie2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m18,5c-.338,0-.669.025-1,.051v9.949c0,1.104-.896,2-2,2H5.051c-.025.331-.051.662-.051,1,0,7.18,5.82,13,13,13s13-5.82,13-13-5.82-13-13-13Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path d="m14,1C6.832,1,1,6.832,1,14v1h14V1h-1Z" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
