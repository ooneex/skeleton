import type { SVGProps } from "react";

export const ChartBarTrendUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10 12H14V21H10V12Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M18 8H22V21H18V8Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M2 16H6V21H2V16Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path
        d="M2 7L6 3L10 7L15 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
