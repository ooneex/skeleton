import type { SVGProps } from "react";

export const ChartStockPriceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 2H14V8H16V2H19C20.6569 2 22 3.34315 22 5V7.28535L14.996 13.195L9 8.19829L2 14.0316V5C2 3.34315 3.34315 2 5 2Z"
        fill="currentColor"
      />
      <path
        d="M2 16.6351V19C2 20.6569 3.34315 22 5 22H14V19H16V22H19C20.6569 22 22 20.6569 22 19V9.90216L15.004 15.805L9 10.8017L2 16.6351Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
