import type { SVGProps } from "react";

export const SmokingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M18 14V18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M21 10V8C21 5.23858 18.7614 3 16 3V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 10V9.5C17 8.11929 15.8807 7 14.5 7V7C13.1193 7 12 5.88071 12 4.5V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 17V15C22 14.4477 21.5523 14 21 14H2V18H21C21.5523 18 22 17.5523 22 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
