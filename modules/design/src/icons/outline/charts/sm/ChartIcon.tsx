import type { SVGProps } from "react";

export const ChartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10 3H14V21H10V3Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path
        d="M18 9H22V21H18V9Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M2 15H6V21H2V15Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
