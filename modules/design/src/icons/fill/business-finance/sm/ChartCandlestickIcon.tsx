import type { SVGProps } from "react";

export const ChartCandlestickIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.49998 15V23H5.49998V15H7.49998Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 17V23H16.5V17H18.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M18.5 1V9H16.5V1H18.5Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7.5 1V5H5.5V1H7.5Z" fill="currentColor" data-color="color-2" />
      <path d="M14 8V19H21V8H14Z" fill="currentColor" />
      <path d="M3 3V17H10V3H3Z" fill="currentColor" />
    </svg>
  );
};
