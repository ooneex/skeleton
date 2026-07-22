import type { SVGProps } from "react";

export const Heading4Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M23 19V5H21.8571L15 13.5625V14H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M11 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M2 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M11 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
