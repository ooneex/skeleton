import type { SVGProps } from "react";

export const EditPolygonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 5H22V7H10V5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 25H26V27H6V25Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.3133 24.2364L22.7638 8.31336L24.6869 7.76392L29.2363 23.687L27.3133 24.2364Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.25537 8.34911L4.31764 23.9222L2.41118 23.3177L7.34891 7.74463L9.25537 8.34911Z"
        fill="currentColor"
      />
      <path d="M11.5 2.5H4.5V9.5H11.5V2.5Z" fill="currentColor" data-color="color-2" />
      <path d="M27.5 2.5H20.5V9.5H27.5V2.5Z" fill="currentColor" data-color="color-2" />
      <path d="M31.5 22.5H24.5V29.5H31.5V22.5Z" fill="currentColor" data-color="color-2" />
      <path d="M7.5 22.5H0.5V29.5H7.5V22.5Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
