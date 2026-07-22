import type { SVGProps } from "react";

export const Heading1Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M42 38V10H40L30 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M22 24H5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5 10V38" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M22 10V38" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
