import type { SVGProps } from "react";

export const Heading4Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M43 38V10H40.7143L27 27.125V28H46"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M21 24H4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4 10V38" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 10V38" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
