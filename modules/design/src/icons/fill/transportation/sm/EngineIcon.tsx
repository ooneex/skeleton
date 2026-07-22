import type { SVGProps } from "react";

export const EngineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 16L18 16L18 14L24 14L24 16Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M11 1V7H9V1H11Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 10L24 20L22 20L22 10L24 10Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M5.44575 5L2.94575 9H0V17H2.89018L4.95018 21H20V9H17.0542L14.5542 5H5.44575Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 1H15V3H5V1Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
